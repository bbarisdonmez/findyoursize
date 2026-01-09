import React, { useState, useRef } from 'react';
import { Camera, Upload, Scan, Sparkles, ChevronLeft, Footprints, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRANDS } from '../data';
import { UserReference } from '../types';
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from '../App';

interface UploadScreenProps {
  onComplete: (data: UserReference) => void;
  onBack: () => void;
  onHome: () => void;
  language: Language;
  t: any;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ onComplete, onBack, onHome, language, t }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scannedData, setScannedData] = useState<UserReference | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- GENİŞLETİLMİŞ MODEL ZİNCİRİ ---
  const modelsToTry = [
    'gemini-3-pro-preview',
    'gemini-3-flash-preview',
    'gemini-2.5-flash',
    'gemini-2.5-flash-image',
    'gemini-2.5-pro',
    'gemini-2.0-flash',
    'gemini-2.0-flash-preview-image-generation',
    'gemini-2.0-flash-exp',
    'gemini-1.5-flash-8b',
    'gemini-1.5-flash-002',
    'gemini-1.5-flash',
    'gemini-1.5-pro-002'
  ];

  const processImageWithGemini = async (file: File, imageUrl: string) => {
    setIsAnalyzing(true);
    setError(null);

    if (!file.type.startsWith('image/')) {
        setError(language === 'tr' ? "Lütfen sadece resim dosyası yükleyin (JPG, PNG)." : "Please upload an image file only.");
        setIsAnalyzing(false);
        return;
    }

    const rawApiKey = import.meta.env.VITE_API_KEY || "";
    const apiKey = rawApiKey.includes('=') ? rawApiKey.split('=')[1] : rawApiKey;
    
    if (!apiKey) {
      setError(language === 'tr' ? "API Anahtarı bulunamadı." : "API Key not found.");
      setIsAnalyzing(false);
      return;
    }

    try {
      const base64Data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const ai = new GoogleGenAI({ apiKey });

      const schema = {
        type: Type.OBJECT,
        properties: {
          is_valid_label: { type: Type.BOOLEAN, description: "True if the image contains a shoe size label/tag. False if it is a random object, person, landscape, etc." },
          brand: { type: Type.STRING, description: "Official brand name if valid label." },
          model: { type: Type.STRING, description: "Full model name if visible." },
          cm: { type: Type.NUMBER, description: "Centimeter size found on label." },
          eu: { type: Type.STRING, description: "EU size found on label." }
        },
        required: ["is_valid_label"],
      };

      let parsedResult: any = null;
      let success = false;

      for (const model of modelsToTry) {
        try {
          console.log(`[OCR] Trying model: ${model}`);
          
          const response = await ai.models.generateContent({
            model: model,
            contents: {
              parts: [
                { inlineData: { mimeType: file.type, data: base64Data } },
                { text: `Analyze this image. Does it contain a SHOE SIZE LABEL or TAG? 
                         If NO (it's a selfie, landscape, animal, or random object), return {"is_valid_label": false}.
                         If YES, extract the technical data (Brand, CM, EU). Prioritize CM/JP value. Return JSON.` }
              ]
            },
            config: {
              responseMimeType: "application/json",
              responseSchema: schema,
            }
          });

          const resultText = response.text;
          if (resultText) {
             const data = JSON.parse(resultText);
             
             if (data.is_valid_label === false) {
                 throw new Error("INVALID_CONTENT_DETECTED");
             }
             
             if (!data.brand || !data.cm) {
                 throw new Error("DATA_MISSING");
             }

             console.log(`✅ Success with ${model}`);
             parsedResult = data;
             success = true;
             break; 
          }
        } catch (err: any) {
          if (err.message === "INVALID_CONTENT_DETECTED") {
              console.warn("Image rejected by AI as not a label.");
              success = false;
              parsedResult = { is_valid_label: false };
              break;
          }
          console.warn(`⚠️ Model ${model} failed. Reason: ${err.message || err}`);
        }
      }

      if (!success) {
        if (parsedResult?.is_valid_label === false) {
            throw new Error("INVALID_IMAGE");
        }
        throw new Error("ALL_MODELS_FAILED");
      }

      let matchedBrandId = 'nike';
      const detectedBrandLower = (parsedResult.brand || '').toLowerCase();
      const foundBrand = BRANDS.find(b => 
        detectedBrandLower.includes(b.id) || 
        detectedBrandLower.includes(b.name.toLowerCase())
      );
      
      if (foundBrand) matchedBrandId = foundBrand.id;

      setScannedData({
        brand: matchedBrandId,
        detectedModel: parsedResult.model || (language === 'tr' ? 'Algılanan Model' : 'Detected Model'),
        cm: parsedResult.cm || 0,
        eu: parsedResult.eu || '',
        image: imageUrl
      });

    } catch (err: any) {
      console.error("DEBUG: Processing Error:", err);
      
      let errorMessage = language === 'tr' 
        ? "Bir hata oluştu." 
        : "An error occurred.";

      if (err.message === "INVALID_IMAGE") {
          errorMessage = language === 'tr' 
            ? "Bu görsel bir ayakkabı etiketi gibi görünmüyor. Lütfen etiketin net bir fotoğrafını yükleyin."
            : "This doesn't look like a shoe label. Please upload a clear photo of the size tag.";
      } else if (err.message?.includes("API_KEY")) {
          errorMessage = language === 'tr' ? "API Anahtarı Hatası." : "Invalid API Key.";
      } else {
          errorMessage = language === 'tr' 
            ? "Etiket okunamadı. Lütfen manuel giriş yapın."
            : "Could not read label. Please enter manually.";
      }

      setError(errorMessage);
      
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      processImageWithGemini(file, url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (scannedData) {
      onComplete(scannedData);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#f8fafc]">
      <header className="relative flex justify-center items-center px-6 py-6 bg-white border-b border-slate-100 sticky top-0 z-40">
        <button onClick={onBack} className="absolute left-6 text-slate-400 hover:text-blue-700 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={onHome} className="flex flex-col items-center gap-0.5 cursor-pointer">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
          <span className="font-black text-sm tracking-tighter brand-font">FindYourSize</span>
        </button>
      </header>

      <div className="flex-1 p-4 md:p-6 max-w-xl mx-auto w-full flex flex-col pt-6 md:pt-10">
        {!scannedData && !isAnalyzing && (
          <div className="animate-in fade-in duration-700 flex flex-col flex-1">
            <div className="bg-white rounded-[3.5rem] p-8 md:p-10 shadow-2xl shadow-blue-900/5 border border-white mb-8 text-center relative overflow-hidden">
              <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-[2.5rem] text-blue-700">
                <Scan size={44} strokeWidth={1} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter brand-font uppercase">
                {t.uploadTitle}
              </h2>
              <p className="text-slate-500 font-medium mb-10 text-sm px-4">
                {t.uploadDesc}
              </p>
              
              {/* Hata Mesajı Alanı */}
              {error && (
                <div className="mb-8 flex items-center gap-3 px-4 py-3 bg-red-50 text-red-700 rounded-2xl border border-red-100 animate-in shake">
                    <AlertCircle size={20} className="shrink-0" />
                    <span className="text-xs font-bold text-left">{error}</span>
                </div>
              )}

              <div className="flex flex-col gap-3 mb-10">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-5 rounded-[2rem] shadow-xl transition-all flex items-center justify-center gap-3 brand-font uppercase text-sm tracking-widest"
                >
                  <Camera size={20} />
                  {t.scanBtn}
                </button>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest"
                >
                  <Upload size={18} />
                  {t.galleryBtn}
                </button>
              </div>
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
            </div>
          </div>
        )}

        {isAnalyzing && (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in">
            <div className="w-24 h-24 border-[4px] border-blue-700 border-t-transparent rounded-full animate-spin mb-8"></div>
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase brand-font">{t.analyzing}</h3>
            <p className="text-slate-400 font-black tracking-[0.4em] text-[10px] uppercase">{t.processing}</p>
          </div>
        )}

        {scannedData && !isAnalyzing && (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col animate-in slide-in-from-bottom-6 duration-700">
            <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 mb-8 relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight brand-font uppercase">{t.confirmTitle}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="h-40 w-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 flex items-center justify-center">
                  <img src={scannedData.image} alt="Label" className="max-w-full max-h-full object-contain p-4" />
                </div>
                
                <div className="space-y-5">
                   <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">{t.brand}</label>
                      <select 
                        value={scannedData.brand}
                        onChange={(e) => setScannedData({...scannedData, brand: e.target.value})}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 outline-none transition-all brand-font text-xs"
                      >
                        {BRANDS.map(b => (
                          <option key={b.id} value={b.id}>{b.name.toUpperCase()}</option>
                        ))}
                      </select>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">CM</label>
                        <div className="bg-blue-700 rounded-3xl p-1">
                          <input 
                            type="number" step="0.1" 
                            value={scannedData.cm} 
                            onChange={(e) => setScannedData({...scannedData, cm: parseFloat(e.target.value)})} 
                            className="w-full bg-transparent font-black text-2xl text-center py-4 text-white focus:outline-none brand-font" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">EU</label>
                        <div className="bg-slate-950 rounded-3xl p-1">
                          <input 
                            type="text" 
                            value={scannedData.eu || ''} 
                            onChange={(e) => setScannedData({...scannedData, eu: e.target.value})} 
                            className="w-full bg-transparent font-black text-2xl text-center py-4 text-white focus:outline-none brand-font uppercase" 
                          />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-5 rounded-[2rem] shadow-2xl transition-all active:scale-95 text-base brand-font uppercase tracking-tight mb-10">
              {t.nextStepBtn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadScreen;
