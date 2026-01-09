import React, { useEffect, useRef, useState } from 'react';
import { UserReference, Gender, SizeChartEntry, HistoryItem } from '../types';
import { getBrandById } from '../data';
import {
  ShieldCheck,
  ChevronLeft,
  Footprints,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  Info,
  Star,
  Send,
  Tag,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { Language } from '../App';
import { GoogleGenAI } from '@google/genai';

interface ShoppingOffer {
  siteName: string;
  price: string; // UI label (we do NOT trust LLM for real-time price)
  url: string;
  logo: string;
}

interface ResultScreenProps {
  reference: UserReference;
  targetBrandId: string;
  targetGender: Gender;
  targetModel: string;
  onReset: () => void;
  onHome: () => void;
  onSaveHistory: (item: HistoryItem) => void;
  onOpenStyleStudio: () => void;
  onOpenPremiumSupport: () => void;
  onOpenRegistration: () => void;
  language: Language;
  t: any;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  reference,
  targetBrandId,
  targetGender,
  targetModel,
  onReset,
  onHome,
  onSaveHistory,
  onOpenStyleStudio,
  onOpenPremiumSupport,
  onOpenRegistration,
  language,
  t,
}) => {
  const targetBrand = getBrandById(targetBrandId);
  const hasSaved = useRef(false);

  const [justification, setJustification] = useState<string>('');
  const [isLoadingJustification, setIsLoadingJustification] = useState(false);

  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const [offers, setOffers] = useState<ShoppingOffer[]>([]);
  const [isLoadingOffers, setIsLoadingOffers] = useState(false);

  const [modelImage, setModelImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const CONTACT_EMAIL = 'mail@findyoursize.com.tr';

  const TEXT_MODEL = 'gemini-3-flash-preview';
  const IMAGE_MODEL = 'gemini-3-pro-image-preview';

  if (!targetBrand) return <div className="p-10 text-center font-black">Data error.</div>;

  const chart = targetBrand.sizeCharts[targetGender];
  const exactMatch = chart.find((c) => Math.abs(c.cm - reference.cm) < 0.1);
  const largerMatch = chart.find((c) => c.cm >= reference.cm);
  const result: SizeChartEntry =
    exactMatch ||
    largerMatch ||
    (chart.length > 0 ? chart[chart.length - 1] : { cm: 0, eu: 'N/A', us: 'N/A', uk: 'N/A' });

  const fitConfidence = exactMatch ? 99 : 96;

  // --- helpers ---
  const safeJsonParseObject = (raw: string): any | null => {
    try {
      return JSON.parse(raw);
    } catch {
      const cleaned = raw.replace(/```json/gi, '```').replace(/```/g, '').trim();
      try {
        return JSON.parse(cleaned);
      } catch {
        return null;
      }
    }
  };

  const faviconFromUrl = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
    } catch {
      return `https://www.google.com/s2/favicons?domain=google.com&sz=128`;
    }
  };

  // --- SAFE URL LAYER ---
  const SAFE_HOSTS = new Set([
    'www.trendyol.com',
    'trendyol.com',
    'www.hepsiburada.com',
    'hepsiburada.com',
    'www.amazon.com.tr',
    'amazon.com.tr',
    'www.decathlon.com.tr',
    'decathlon.com.tr',
    // SuperStep actual working domain (redirects happen a lot)
    'www.superstep.com.tr',
    'superstep.com.tr',
    'www.houseofsuperstep.com',
    'houseofsuperstep.com',
    'www.flo.com.tr',
    'flo.com.tr',
    'www.footlocker.com.tr',
    'footlocker.com.tr',
    'www.sneaksup.com',
    'sneaksup.com',
    'www.nike.com',
    'nike.com',
    'www.adidas.com.tr',
    'adidas.com.tr',
    'tr.puma.com',
    'www.newbalance.com.tr',
    'newbalance.com.tr',
    'www.google.com',
    'google.com',
  ]);

  const normalizeUrl = (raw: string): string | null => {
    if (!raw) return null;
    let s = String(raw).trim();

    // markdown link: [text](url)
    const md = s.match(/\((https?:\/\/[^)]+)\)/i);
    if (md?.[1]) s = md[1];

    s = s.replace(/^"+|"+$/g, '').trim();

    // enforce protocol
    if (!/^https?:\/\//i.test(s)) {
      if (s.startsWith('www.')) s = `https://${s}`;
      else return null;
    }

    try {
      const u = new URL(s);
      if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;

      // reject redirect param tricks
      const redirectKeys = ['url', 'redirect', 'redir', 'target', 'u', 'dest', 'destination'];
      for (const k of redirectKeys) {
        const v = u.searchParams.get(k);
        if (v && v.startsWith('http')) return null;
      }

      const host = u.hostname.toLowerCase();
      if (!SAFE_HOSTS.has(host)) return null;

      // kill tracking
      const clean = new URL(u.toString());
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach((k) =>
        clean.searchParams.delete(k)
      );

      return clean.toString();
    } catch {
      return null;
    }
  };

  const buildSearchUrl = (domain: string, q: string) => {
    const query = encodeURIComponent(q);

    switch (domain) {
      case 'trendyol.com':
        return `https://www.trendyol.com/sr?q=${query}`;
      case 'hepsiburada.com':
        return `https://www.hepsiburada.com/ara?q=${query}`;
      case 'amazon.com.tr':
        return `https://www.amazon.com.tr/s?k=${query}`;
      case 'decathlon.com.tr':
        return `https://www.decathlon.com.tr/search?Ntt=${query}`;

      // ✅ FIX: SuperStep search (works reliably)
      // superstep.com.tr often redirects; this is the actual working search pattern in many deployments
      case 'houseofsuperstep.com':
      case 'superstep.com.tr':
        return `https://www.houseofsuperstep.com/?s=${query}`;

      case 'flo.com.tr':
        return `https://www.flo.com.tr/arama?q=${query}`;
      case 'footlocker.com.tr':
        return `https://www.footlocker.com.tr/search?q=${query}`;
      case 'sneaksup.com':
        return `https://www.sneaksup.com/search?type=product&q=${query}`;
      case 'nike.com':
        return `https://www.nike.com/tr/w?q=${query}`;
      case 'adidas.com.tr':
        return `https://www.adidas.com.tr/search?q=${query}`;
      case 'tr.puma.com':
        return `https://tr.puma.com/search?q=${query}`;
      case 'newbalance.com.tr':
        return `https://www.newbalance.com.tr/arama?q=${query}`;
      case 'google.com':
        return `https://www.google.com/search?tbm=shop&q=${query}`;
      default:
        return null;
    }
  };

  const priority = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('google')) return 0; // price compare first
    if (n.includes('trendyol')) return 1;
    if (n.includes('hepsiburada')) return 2;
    if (n.includes('amazon')) return 3;
    if (n.includes('superstep')) return 4;
    if (n.includes('sneaksup')) return 5;
    if (n.includes('footlocker')) return 6;
    if (n.includes('flo')) return 7;
    if (n.includes('decathlon')) return 8;
    if (n.includes('nike')) return 20;
    if (n.includes('adidas')) return 21;
    if (n.includes('puma')) return 22;
    if (n.includes('new balance') || n.includes('newbalance')) return 23;
    return 50;
  };

  const stripBrandFromModel = (brand: string, model: string) => {
    const b = brand.trim().toLowerCase();
    const m = model.trim();
    if (!b) return m;
    return m.toLowerCase().startsWith(b) ? m.slice(brand.length).trim() : m;
  };

  const extractColorwayFromModelText = (model: string): string | null => {
    const m = model.match(/["“](.+?)["”]/);
    if (m?.[1]) return m[1].trim();
    return null;
  };

  // --- Wikidata image helpers (unchanged) ---
  const buildWikidataQuery = (brand: string, model: string) => {
    const cleanModel = stripBrandFromModel(brand, model);
    return `${brand} ${cleanModel}`.trim();
  };

  const wikidataSearch = async (query: string) => {
    const url =
      'https://www.wikidata.org/w/api.php?' +
      new URLSearchParams({
        action: 'wbsearchentities',
        search: query,
        language: 'en',
        format: 'json',
        origin: '*',
        limit: '5',
      }).toString();

    const r = await fetch(url);
    if (!r.ok) return null;
    return r.json();
  };

  const wikidataGetImageFilename = async (qid: string): Promise<string | null> => {
    const url =
      'https://www.wikidata.org/w/api.php?' +
      new URLSearchParams({
        action: 'wbgetentities',
        ids: qid,
        props: 'claims',
        format: 'json',
        origin: '*',
      }).toString();

    const r = await fetch(url);
    if (!r.ok) return null;
    const data = await r.json();

    const claims = data?.entities?.[qid]?.claims;
    const filename = claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    return typeof filename === 'string' ? filename : null;
  };

  const commonsFileUrl = (filename: string, width = 900) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;

  const tryFetchWikidataImageUrl = async (brand: string, model: string): Promise<string | null> => {
    try {
      const q = buildWikidataQuery(brand, model);
      const search = await wikidataSearch(q);
      const items = Array.isArray(search?.search) ? search.search : [];
      if (items.length === 0) return null;

      for (const it of items) {
        const qid = it?.id;
        if (!qid) continue;
        const filename = await wikidataGetImageFilename(qid);
        if (filename) return commonsFileUrl(filename, 900);
      }
      return null;
    } catch {
      return null;
    }
  };

  // --- AI traits for image (unchanged) ---
  const getModelTraits = async (ai: GoogleGenAI, brand: string, model: string): Promise<string[]> => {
    const prompt = `
Return ONLY JSON:
{"traits":["...","...","...","...","...","...","...","..."]}

Rules:
- 8 short PHYSICAL visual traits: panels, outsole, air unit, silhouette, mudguard, toe shape, collar height.
- No marketing words.
- If unsure: return fewer traits, NEVER invent.
Model: "${brand} ${model}"
`.trim();

    try {
      const resp = await ai.models.generateContent({
        model: TEXT_MODEL,
        contents: prompt,
      });

      const obj = safeJsonParseObject((resp.text || '').trim());
      const traits = Array.isArray(obj?.traits)
        ? obj.traits.map((x: any) => String(x).trim()).filter(Boolean)
        : [];

      return traits.slice(0, 8);
    } catch {
      return [];
    }
  };

  const buildShoePromptV2 = (brand: string, model: string, colorway?: string | null, extraTraits?: string[]) => {
    const cleanModel = stripBrandFromModel(brand, model);

    const cw = colorway
      ? `COLORWAY (must match): ${colorway}`
      : `COLORWAY: use the most iconic retail colorway for this exact model (do not invent).`;

    const traits =
      extraTraits && extraTraits.length
        ? `MODEL-SPECIFIC VISUAL TRAITS (must include all):\n- ${extraTraits.join('\n- ')}`
        : `MODEL-SPECIFIC VISUAL TRAITS:
If uncertain about paneling/outsole/air unit, do NOT improvise. Prefer a neutral catalog depiction.`;

    return `
Ultra-photorealistic retail product photo of:
${brand} ${cleanModel}

GOAL:
Match the factory-released design for this exact model name. Construction accuracy > aesthetics.

${cw}

${traits}

SHOT:
- e-commerce catalog photo, 3/4 angle
- ONE PAIR (left + right shoe), side-by-side
- neutral seamless background (light grey/white)
- 5500K studio lighting, soft shadow
- sharp focus, uncropped, no motion blur

MUST MATCH:
- toe shape
- mudguard/panel layout
- midsole sculpting
- outsole pattern
- logo placement/proportions
- correct air unit shape/position if present

DO NOT:
- stylize, concept, reinterpret
- switch silhouette
- swap materials
- add extra text/tags
`.trim();
  };

  const NEGATIVE_V2 = `
text, watermark, typography, logo overlay
concept art, illustration, CGI look
floating shoe, exploded view, deconstructed
wrong silhouette, wrong panels, wrong outsole
oversaturated, cinematic lighting, harsh contrast
extra accessories, extra laces, extra tags
collage, grid, busy background
`.trim();

  // --- deterministic offers (no hallucinated prices) ---
  const makeOffersDeterministic = (brandName: string, modelName: string): ShoppingOffer[] => {
    const q = `${brandName} ${modelName}`.trim();

    const brandLower = brandName.toLowerCase();
    const brandOfficialDomain =
      brandLower.includes('nike')
        ? 'nike.com'
        : brandLower.includes('adidas')
          ? 'adidas.com.tr'
          : brandLower.includes('puma')
            ? 'tr.puma.com'
            : brandLower.includes('new balance') || brandLower.includes('newbalance')
              ? 'newbalance.com.tr'
              : null;

    const storeDefs: Array<{ siteName: string; domain: string; label: string }> = [
      { siteName: 'Google Shopping', domain: 'google.com', label: 'Fiyat Karşılaştır' },
      { siteName: 'Trendyol', domain: 'trendyol.com', label: 'Mağazada Gör' },
      { siteName: 'Hepsiburada', domain: 'hepsiburada.com', label: 'Mağazada Gör' },
      { siteName: 'Amazon TR', domain: 'amazon.com.tr', label: 'Mağazada Gör' },
      { siteName: 'SuperStep', domain: 'houseofsuperstep.com', label: 'Mağazada Gör' }, // ✅
      { siteName: 'Sneaks Up', domain: 'sneaksup.com', label: 'Mağazada Gör' },
      { siteName: 'FootLocker TR', domain: 'footlocker.com.tr', label: 'Mağazada Gör' },
      { siteName: 'FLO', domain: 'flo.com.tr', label: 'Mağazada Gör' },
      { siteName: 'Decathlon', domain: 'decathlon.com.tr', label: 'Mağazada Gör' },
    ];

    // put brand official store near the end but before generic ones
    if (brandOfficialDomain) {
      const pretty =
        brandOfficialDomain === 'nike.com'
          ? 'Nike Resmi'
          : brandOfficialDomain === 'adidas.com.tr'
            ? 'adidas Resmi'
            : brandOfficialDomain === 'tr.puma.com'
              ? 'PUMA Resmi'
              : 'New Balance Resmi';

      storeDefs.push({ siteName: pretty, domain: brandOfficialDomain, label: 'Resmi Mağaza' });
    }

    const built = storeDefs
      .map((s) => {
        const url = buildSearchUrl(s.domain, q);
        const safe = normalizeUrl(url || '');
        if (!safe) return null;
        return {
          siteName: s.siteName,
          price: s.label,
          url: safe,
          logo: faviconFromUrl(safe),
        } as ShoppingOffer;
      })
      .filter(Boolean) as ShoppingOffer[];

    built.sort((a, b) => priority(a.siteName) - priority(b.siteName));

    // UI 3 kart gösteriyor, burada ilk 3 en mantıklısı
    return built.slice(0, 3);
  };

  useEffect(() => {
    if (!hasSaved.current && result.eu !== 'N/A') {
      const historyItem: HistoryItem = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        brandId: targetBrandId,
        model: targetModel,
        gender: targetGender,
        reference: reference,
        calculatedSize: result.eu,
      };
      onSaveHistory(historyItem);
      hasSaved.current = true;
    }

    const apiKey = import.meta.env.VITE_API_KEY || '';
    const ai = new GoogleGenAI({ apiKey });

    const fetchJustification = async () => {
      setIsLoadingJustification(true);

      const prompt = `
ANALİZ:
Ref: ${reference.brand} ${reference.cm}CM
Hedef: ${targetBrand.name} ${targetModel}
Önerilen: EU ${result.eu}

400 karakteri geçmeyen, profesyonel bir "Neden bu beden?" açıklaması yaz.
Teknik kalıp farklarını ve FindYourSize iade önleme başarısını vurgula.
Dil: ${language === 'tr' ? 'Türkçe' : 'English'}.
`.trim();

      try {
        const response = await ai.models.generateContent({
          model: TEXT_MODEL,
          contents: prompt,
        });

        const text = (response.text || '').trim();
        setJustification(
          text || t.aiJustificationFallback || 'Analiz tamamlandı. Beden eşleşmesi yüksek güvenle önerilir.'
        );
      } catch (e) {
        console.warn(`[Justification] Failed:`, e);
        setJustification(t.aiJustificationFallback || 'Analiz tamamlandı. Beden eşleşmesi yüksek güvenle önerilir.');
      } finally {
        setIsLoadingJustification(false);
      }
    };

    const fetchOffers = async () => {
      setIsLoadingOffers(true);

      try {
        // ✅ deterministic, correct links, no hallucinated prices
        const built = makeOffersDeterministic(targetBrand.name, targetModel);
        setOffers(built);
      } finally {
        setIsLoadingOffers(false);
      }
    };

    const fetchImage = async () => {
      setIsLoadingImage(true);

      const brandName = targetBrand.name;
      const modelName = targetModel;

      const wikiUrl = await tryFetchWikidataImageUrl(brandName, modelName);
      if (wikiUrl) {
        setModelImage(wikiUrl);
        setIsLoadingImage(false);
        return;
      }

      const colorway = extractColorwayFromModelText(modelName);

      let traits: string[] = [];
      if (apiKey) {
        try {
          traits = await getModelTraits(ai, brandName, modelName);
        } catch {
          traits = [];
        }
      }

      const prompt = buildShoePromptV2(brandName, modelName, colorway, traits);
      const mergedPrompt = `${prompt}\n\nNEGATIVE PROMPT (strictly avoid):\n${NEGATIVE_V2}`;

      // no key => pollinations
      if (!apiKey) {
        try {
          const p = encodeURIComponent(mergedPrompt);
          const imageUrl = `https://image.pollinations.ai/prompt/${p}?width=768&height=768&model=flux-realism&nologo=true&enhance=true&seed=${Math.floor(
            Math.random() * 100000
          )}`;
          setModelImage(imageUrl);
        } catch {
          setModelImage(null);
        } finally {
          setIsLoadingImage(false);
        }
        return;
      }

      try {
        const response = await ai.models.generateContent({
          model: IMAGE_MODEL,
          contents: mergedPrompt,
          config: {
            imageConfig: { aspectRatio: '1:1' },
          } as any,
        });

        const parts = (response as any)?.candidates?.[0]?.content?.parts || [];
        const imagePart = parts.find((p: any) => p?.inlineData?.data);

        if (imagePart?.inlineData?.data) {
          const base64 = imagePart.inlineData.data;
          const mime = imagePart.inlineData.mimeType || 'image/png';
          setModelImage(`data:${mime};base64,${base64}`);
          setIsLoadingImage(false);
          return;
        }

        const p = encodeURIComponent(mergedPrompt);
        const imageUrl = `https://image.pollinations.ai/prompt/${p}?width=768&height=768&model=flux-realism&nologo=true&enhance=true&seed=${Math.floor(
          Math.random() * 100000
        )}`;
        setModelImage(imageUrl);
      } catch (e) {
        console.warn(`[Image] Failed:`, e);
        try {
          const p = encodeURIComponent(mergedPrompt);
          const imageUrl = `https://image.pollinations.ai/prompt/${p}?width=768&height=768&model=flux-realism&nologo=true&enhance=true&seed=${Math.floor(
            Math.random() * 100000
          )}`;
          setModelImage(imageUrl);
        } catch {
          setModelImage(null);
        }
      } finally {
        setIsLoadingImage(false);
      }
    };

    fetchJustification();
    fetchOffers();
    fetchImage();
  }, [result.eu, targetBrandId, targetModel, targetGender, reference, onSaveHistory, language]);

  const handleSendFeedback = () => {
    const subject = encodeURIComponent(`${t.feedbackSubject} (${rating}/5 Yıldız)`);
    const bodyText = `Deneyim Puanı: ${rating}/5\n\nGeri Bildirim:\n${feedbackText}\n\nAnaliz Detayı:\nReferans: ${reference.brand} - ${reference.cm}CM\nHedef: ${targetBrand.name} - ${targetModel}\nÖnerilen Beden: ${result.eu}`;
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setHasRated(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfb] font-sans antialiased text-slate-900">
      <header className="relative flex justify-center items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
        <button onClick={onReset} className="absolute left-6 text-slate-400 hover:text-blue-700 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={onHome} className="flex flex-col items-center gap-0.5">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
          <span className="font-black text-xs tracking-tighter brand-font">FindYourSize</span>
        </button>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 pt-4 pb-20">
        <div className="text-center mb-6 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black tracking-[0.3em] text-blue-700 uppercase">{t.analysisComplete}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-950 brand-font uppercase tracking-tighter leading-tight">
            {t.resultTitle}
          </h1>
        </div>

        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] md:rounded-[4rem] blur-[80px] opacity-10 -z-10 transition-all duration-1000"></div>

          <div className="bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_-30px_rgba(29,78,216,0.1)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 md:p-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-slate-50 relative">
                <div className="absolute top-6 left-8">
                  <img
                    src={targetBrand.logo}
                    alt={targetBrand.name}
                    className="h-6 md:h-8 object-contain grayscale opacity-20"
                  />
                </div>

                <div className="mb-2 text-center">
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-950 brand-font uppercase leading-none mb-1">
                    {targetBrand.name}
                  </h2>
                  <p className="text-blue-700 text-sm md:text-base font-black tracking-widest brand-font uppercase">
                    {targetModel}
                  </p>
                </div>

                <div className="flex items-end justify-center gap-2 py-0 group/size">
                  <span className="text-[7rem] sm:text-[9rem] md:text-[10rem] font-black tracking-tighter text-slate-950 leading-[0.8] brand-font select-none">
                    {result.eu}
                  </span>
                  <div className="flex flex-col items-start mb-4 md:mb-6">
                    <span className="text-xl md:text-2xl font-black text-blue-700 tracking-widest brand-font mb-0">EU</span>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">FIT</span>
                  </div>
                </div>

                <div className="w-full max-w-xs mt-4 bg-slate-50 rounded-[2rem] p-3 flex items-center justify-between border border-slate-100">
                  <div className="flex flex-col items-start px-2">
                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1">{t.fitConfidence}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`w-1.5 h-3 rounded-full ${i <= 4 ? 'bg-blue-700' : 'bg-slate-200'}`}></div>
                        ))}
                      </div>
                      <span className="text-xs font-black text-slate-950">%{fitConfidence}</span>
                    </div>
                  </div>
                  <div className="h-6 w-[1px] bg-slate-200"></div>
                  <div className="flex flex-col items-end px-2">
                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1">DATA</span>
                    <span className="text-[8px] font-black text-slate-950 brand-font">OFFICIAL</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-10 bg-[#fcfcfb] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-700 text-white rounded-xl">
                      <Sparkles size={16} />
                    </div>
                    <h3 className="text-base md:text-lg font-black text-slate-950 brand-font uppercase tracking-tight">
                      {t.whyThisSize}
                    </h3>
                  </div>

                  <div className="relative min-h-[140px]">
                    {isLoadingJustification ? (
                      <div className="space-y-3 animate-pulse">
                        <div className="h-2.5 bg-slate-200 rounded-full w-3/4"></div>
                        <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                        <div className="h-2.5 bg-slate-200 rounded-full w-5/6"></div>
                      </div>
                    ) : (
                      <p className="text-slate-600 text-[13px] leading-relaxed font-medium mb-6 animate-in fade-in duration-500">
                        {justification || 'Yapay zeka analiz raporu oluşturuluyor...'}
                      </p>
                    )}
                  </div>

                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-start gap-4">
                    <ShieldCheck size={18} className="text-green-500 mt-1" />
                    <div>
                      <h4 className="text-[9px] font-black text-slate-950 uppercase tracking-widest mb-1">{t.aiJustification}</h4>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">VERIFIED BY FYZ ENGINE</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">
                    {hasRated ? t.thankYouRating : t.rateExperience}
                  </h4>

                  {!hasRated && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => setRating(star)}
                            className="transition-all hover:scale-110"
                          >
                            <Star
                              size={20}
                              className={`${(hoveredRating || rating) >= star ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-transparent'}`}
                            />
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <textarea
                          value={feedbackText}
                          onChange={(e) => setFeedbackText(e.target.value)}
                          placeholder={t.feedbackPlaceholder}
                          className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] outline-none h-16 resize-none"
                        />
                        <button
                          onClick={handleSendFeedback}
                          disabled={rating === 0}
                          className="absolute bottom-2 right-2 p-2 bg-slate-950 text-white rounded-lg disabled:opacity-30"
                        >
                          <Send size={12} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SHOPPING COMPARISON SECTION */}
        <div className="bg-white rounded-[3rem] border border-slate-100 p-6 md:p-8 mb-12 shadow-xl shadow-slate-900/5">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-700 text-white rounded-xl">
                <Tag size={18} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-950 brand-font uppercase tracking-tight">
                {t.bestPricesTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-black text-green-700 uppercase tracking-widest">{t.priceFound}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 flex items-center justify-center group relative">
                {isLoadingImage ? (
                  <div className="flex flex-col items-center justify-center text-slate-200 animate-pulse">
                    <Loader2 size={32} className="animate-spin mb-2" />
                    <span className="text-[8px] font-black uppercase">FOTO-GERÇEKÇİ RENDER...</span>
                  </div>
                ) : modelImage ? (
                  <img
                    src={modelImage}
                    alt={targetModel}
                    className="w-full h-full object-cover p-2 transition-transform duration-700 group-hover:scale-110 animate-in fade-in duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-200">
                    <Footprints size={64} strokeWidth={1} />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl">
                  {t.lowestPriceBadge}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
              {isLoadingOffers ? (
                Array(3)
                  .fill(0)
                  .map((_, i) => <div key={i} className="h-20 bg-slate-50 rounded-2xl animate-pulse"></div>)
              ) : offers.length > 0 ? (
                offers.map((offer, idx) => (
                  <a
                    key={idx}
                    href={offer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-slate-100 p-4 rounded-3xl flex items-center justify-between hover:border-blue-700 hover:shadow-lg transition-all animate-in fade-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden border border-slate-100 p-1">
                        <img
                          src={offer.logo}
                          alt={offer.siteName}
                          className="object-contain w-full h-full"
                          onError={(e) =>
                            (e.currentTarget.src = 'https://www.google.com/s2/favicons?domain=google.com&sz=128')
                          }
                        />
                      </div>
                      <div>
                        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{offer.siteName}</h4>
                        <p className="text-base font-black text-slate-950 brand-font">{offer.price}</p>
                      </div>
                    </div>
                    <div className="bg-slate-950 text-white w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <ChevronRight size={18} />
                    </div>
                  </a>
                ))
              ) : (
                <div className="h-40 flex items-center justify-center text-slate-300 uppercase font-black text-[10px] tracking-widest">
                  Fiyat araştırması yapılıyor...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-8 flex flex-col gap-4">
            <button
              onClick={() => {
                const lowestOffer = offers.length > 0 ? offers[0] : null;
                if (lowestOffer) window.open(lowestOffer.url, '_blank');
                else window.open(`https://www.google.com/search?q=${encodeURIComponent(targetBrand.name + ' ' + targetModel)}+satın+al`, '_blank');
              }}
              className="w-full bg-blue-700 text-white font-black py-6 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(29,78,216,0.4)] active:scale-[0.98] transform hover:scale-[1.01] transition-all brand-font uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4"
            >
              <ShoppingBag size={22} />
              {t.buyNow}
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={onOpenStyleStudio}
                className="flex-1 bg-slate-950 text-white p-5 rounded-[2rem] flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-slate-950/10 group"
              >
                <Sparkles size={18} className="text-blue-50" />
                <span className="text-[10px] font-black uppercase tracking-[0.15em] brand-font">{t.styleStudioTitle}</span>
              </button>
              <button
                onClick={onOpenPremiumSupport}
                className="flex-1 bg-white border border-slate-200 p-5 rounded-[2rem] flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm group"
              >
                <MessageCircle size={18} className="text-blue-700" />
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-950 brand-font">PRO DESTEK</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-[3rem] text-white flex flex-col justify-between border border-white/10 relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 px-2 py-0.5 rounded-full mb-4 border border-blue-500/20">
                <span className="text-[8px] font-black tracking-widest uppercase text-blue-400">PRO MEMBERSHIP</span>
              </div>
              <h4 className="text-lg font-black brand-font uppercase leading-tight mb-2">{t.membershipCardTitle}</h4>
              <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-tight mb-6">{t.membershipCardDesc}</p>
            </div>
            <button
              onClick={onOpenRegistration}
              className="w-full bg-white text-slate-950 py-4 rounded-[1.5rem] font-black text-[10px] tracking-widest uppercase hover:bg-blue-50"
            >
              {t.membershipCta}
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
          <div className="flex items-center gap-3">
            <Info size={16} className="text-slate-400" />
            <p className="text-[9px] font-bold text-slate-500 uppercase">ENGINE V2.5.4 READY</p>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={16} className="text-green-500" />
            <p className="text-[9px] font-bold text-slate-500 uppercase">OFFICIAL BRAND PARTNER</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultScreen;
