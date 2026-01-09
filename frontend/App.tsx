import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import UploadScreen from './components/UploadScreen';
import TargetSelection from './components/TargetSelection';
import ResultScreen from './components/ResultScreen';
import ProfileModal from './components/ProfileModal';
import HistoryPanel from './components/HistoryPanel';
import StyleStudio from './components/StyleStudio';
import PremiumSupport from './components/PremiumSupport';
import BrandGuides from './components/BrandGuides';
import LegalFooter from './components/LegalFooter';
import LegalModal from './components/LegalModal';
import RegistrationModal from './components/RegistrationModal';
import PurchaseModal from './components/PurchaseModal';
import ApiDashboard from './components/ApiDashboard';
import { UserReference, Gender, UserProfile, HistoryItem } from './types';
import { translations } from './translations';
import { Server, Crown, User as UserIcon } from 'lucide-react';

type AppStep = 'landing' | 'upload' | 'target' | 'result';
export type Language = 'tr' | 'en';

// Backend Adresiniz
const API_URL = 'https://api.findyoursize.com.tr/api';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [language, setLanguage] = useState<Language>('tr');
  
  // Modallar
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isStyleStudioOpen, setIsStyleStudioOpen] = useState(false);
  const [isPremiumSupportOpen, setIsPremiumSupportOpen] = useState(false);
  const [isBrandGuidesOpen, setIsBrandGuidesOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isApiDashboardOpen, setIsApiDashboardOpen] = useState(false);

  // --- AUTH & LIMIT STATE ---
  const [user, setUser] = useState<any>(null);
  
  // Misafir Limiti
  const [guestUsageCount, setGuestUsageCount] = useState<number>(() => {
    return parseInt(localStorage.getItem('fyz_guest_usage') || '0', 10);
  });
  const MAX_GUEST_LIMIT = 2;
  const MAX_FREE_LIMIT = 5;

  // Açılışta Token Kontrolü
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('fyz_token');
      if (token) {
        try {
          const res = await fetch(`${API_URL}/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            const userData = await res.json();
            setUser(userData);
          } else {
            localStorage.removeItem('fyz_token');
            setUser(null);
          }
        } catch (e) { console.error(e); }
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    localStorage.setItem('fyz_guest_usage', String(guestUsageCount));
  }, [guestUsageCount]);

  const handleLoginSuccess = (token: string, userData: any) => {
    localStorage.setItem('fyz_token', token);
    setUser(userData);
    setIsRegistrationOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('fyz_token');
    setUser(null);
    setIsProfileModalOpen(false);
    window.location.reload();
  };

  // --- STYLE STUDIO ERİŞİMİ (ŞİMDİLİK HERKESE AÇIK) ---
  const openStyleStudio = () => {
    // NOT: İleride premium şartı eklemek için aşağıdaki yorum satırlarını açabilirsiniz.
    /*
    if (!user || !user.isPro) {
      setIsPurchaseModalOpen(true);
    } else {
      setIsStyleStudioOpen(true);
    }
    */
    // Şimdilik direkt açıyoruz:
    setIsStyleStudioOpen(true);
  };

  // --- HAK HESAPLAMA MANTIĞI (UI İÇİN) ---
  const getUsageText = () => {
    if (user?.isPro) return language === 'tr' ? 'SINIRSIZ' : 'UNLIMITED';
    
    if (user) {
        // Üye
        const remaining = Math.max(0, MAX_FREE_LIMIT - (user.usageCount || 0));
        return language === 'tr' ? `${remaining} HAK` : `${remaining} LEFT`;
    } else {
        // Misafir
        const remaining = Math.max(0, MAX_GUEST_LIMIT - guestUsageCount);
        return language === 'tr' ? `${remaining} DENEME` : `${remaining} TRIALS`;
    }
  };

  // --- MERKEZİ HAK KONTROLÜ ---
  const checkRights = (): boolean => {
    // 1. Misafir Kontrolü
    if (!user) {
      if (guestUsageCount >= MAX_GUEST_LIMIT) {
        alert(language === 'tr' ? 'Misafir deneme hakkınız doldu. Lütfen kayıt olun.' : 'Guest limit reached. Please register.');
        setIsRegistrationOpen(true);
        return false;
      }
    } 
    // 2. Üye Kontrolü
    else if (!user.isPro) {
      if ((user.usageCount || 0) >= MAX_FREE_LIMIT) {
        setIsPurchaseModalOpen(true);
        return false;
      }
    }
    return true;
  };

  // State tanımlamaları
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem('fyz_profiles');
    if (saved) return JSON.parse(saved);
    return [{ id: '1', name: 'Ben', gender: 'men' }];
  });
  const [activeProfileId, setActiveProfileId] = useState<string>(() => {
    return localStorage.getItem('fyz_active_profile_id') || '1';
  });
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const saved = localStorage.getItem('fyz_history');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];
  const [targetBrandId, setTargetBrandId] = useState<string>('');
  const [targetGender, setTargetGender] = useState<Gender>('men');
  const [targetModel, setTargetModel] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<string | null>(null);
  const t = translations[language];

  // Effect'ler
  useEffect(() => { localStorage.setItem('fyz_profiles', JSON.stringify(profiles)); }, [profiles]);
  useEffect(() => { localStorage.setItem('fyz_active_profile_id', activeProfileId); }, [activeProfileId]);
  useEffect(() => { localStorage.setItem('fyz_history', JSON.stringify(history)); }, [history]);

  const isAnyModalOpen = isProfileModalOpen || isHistoryOpen || isStyleStudioOpen || 
                        isPremiumSupportOpen || isBrandGuidesOpen || isRegistrationOpen || 
                        isPurchaseModalOpen || isApiDashboardOpen || legalModalType !== null;

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [isAnyModalOpen]);

  // Handler Functions
  const handleStart = () => { 
    if (!checkRights()) return; 
    setStep('upload'); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleReset = () => { setStep('landing'); setTargetBrandId(''); setTargetModel(''); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  
  const handleQuickStart = () => { 
    if (!checkRights()) return; 
    if (activeProfile.reference) { setStep('target'); setTargetGender(activeProfile.gender); } 
    else { setStep('upload'); } 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleUploadComplete = (data: UserReference) => {
    const updated = profiles.map(p => p.id === activeProfileId ? { ...p, reference: data, gender: targetGender } : p);
    setProfiles(updated);
    setStep('target');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const saveToHistory = (item: HistoryItem) => {
    setHistory(prev => {
      const filtered = prev.filter(h => h.id !== item.id);
      return [...filtered, item].slice(-20);
    });
  };

  const handleTargetComplete = async (brandId: string, gender: Gender, model: string) => {
    if (!user) {
      if (guestUsageCount >= MAX_GUEST_LIMIT) {
        alert(language === 'tr' ? `Misafir limitiniz doldu.` : 'Guest limit reached.');
        setIsRegistrationOpen(true);
        return;
      }
      setGuestUsageCount(prev => prev + 1);
    } 
    else {
      try {
        const token = localStorage.getItem('fyz_token');
        const res = await fetch(`${API_URL}/usage`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.status === 403) {
           setIsPurchaseModalOpen(true);
           return;
        }
        if (res.ok) {
           const updatedData = await res.json();
           setUser((prev: any) => ({ ...prev, usageCount: updatedData.usageCount }));
        }
      } catch (err) {
        console.error(err);
        return;
      }
    }

    setTargetBrandId(brandId);
    setTargetGender(gender);
    setTargetModel(model);
    setStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased text-slate-900 min-h-screen bg-[#f8fafc] flex flex-col">
      
      {/* SAĞ ÜST PROFİL BUTONU (HER YERDE GÖRÜNÜR) */}
      <div className="fixed top-6 right-6 z-[60]">
        <button 
          onClick={() => setIsProfileModalOpen(true)} 
          className="bg-white p-2 pl-3 rounded-2xl shadow-xl flex items-center gap-3 pr-2 transition-transform hover:scale-105 border border-slate-100"
        >
          <div className="text-right hidden md:block">
              <p className={`text-[9px] font-black uppercase tracking-widest leading-none mb-1 ${user?.isPro ? 'text-yellow-500' : 'text-slate-400'}`}>
                {getUsageText()}
              </p>
              <p className="text-[11px] font-black text-slate-950 uppercase brand-font leading-none">
                {user ? user.name : (language === 'tr' ? 'MİSAFİR' : 'GUEST')}
              </p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs uppercase text-white shadow-sm ${user?.isPro ? 'bg-yellow-400' : 'bg-slate-900'}`}>
            {user?.isPro ? <Crown size={18} className="text-black" /> : (user ? user.name.charAt(0).toUpperCase() : <UserIcon size={18} />)}
          </div>
        </button>
      </div>

      {/* Ana İçerik */}
      <div className="flex-1 flex flex-col">
        {step === 'landing' && (
          <LandingPage 
            onStart={handleStart} 
            onQuickStart={handleQuickStart}
            onHome={handleReset}
            onOpenProfiles={() => setIsProfileModalOpen(true)}
            onOpenRegistration={() => {
              if(user && !user.isPro) setIsPurchaseModalOpen(true);
              else setIsRegistrationOpen(true);
            }}
            activeProfile={activeProfile}
            language={language} setLanguage={setLanguage} t={t}
          />
        )}
        {step === 'upload' && <UploadScreen onComplete={handleUploadComplete} onBack={() => setStep('landing')} onHome={handleReset} language={language} t={t} />}
        {step === 'target' && <TargetSelection onComplete={handleTargetComplete} onBack={() => setStep('landing')} onHome={handleReset} onEditReference={() => setStep('upload')} reference={activeProfile.reference} language={language} t={t} />}
        {step === 'result' && activeProfile.reference && (
          <ResultScreen 
            reference={activeProfile.reference} targetBrandId={targetBrandId} targetGender={targetGender} targetModel={targetModel}
            onReset={handleReset} onHome={handleReset} onSaveHistory={saveToHistory}
            onOpenStyleStudio={openStyleStudio} 
            onOpenPremiumSupport={() => setIsPremiumSupportOpen(true)}
            onOpenRegistration={() => setIsRegistrationOpen(true)} language={language} t={t}
          />
        )}
      </div>

      <LegalFooter onOpenLegal={(type) => setLegalModalType(type)} t={t} />

      <div className="bg-slate-50 py-6 text-center border-t border-slate-100">
          <button onClick={() => setIsApiDashboardOpen(true)} className="text-[9px] font-bold text-slate-300 hover:text-blue-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 mx-auto group">
            <Server size={12} className="group-hover:animate-pulse" />
            System Status & API
          </button>
      </div>
      
      {/* Modallar */}
      <LegalModal isOpen={legalModalType !== null} type={legalModalType} onClose={() => setLegalModalType(null)} language={language} t={t} />
      
      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onOpenHistory={() => { setIsProfileModalOpen(false); setIsHistoryOpen(true); }}
        profiles={profiles} activeProfileId={activeProfileId} onSwitch={setActiveProfileId} 
        onAdd={(name, gender) => {
          const newProfile = { id: Math.random().toString(36).substr(2, 9), name, gender };
          setProfiles([...profiles, newProfile]);
          setActiveProfileId(newProfile.id);
        }} 
        onDelete={(id) => {
          if (profiles.length <= 1) return;
          const newP = profiles.filter(p => p.id !== id);
          setProfiles(newP);
          if (activeProfileId === id) setActiveProfileId(newP[0].id);
        }}
        language={language} t={t}
        user={user}
        onLogout={handleLogout}
        onLogin={() => setIsRegistrationOpen(true)}
      />

      <HistoryPanel isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} history={history} onRestore={(item) => { setTargetBrandId(item.brandId); setTargetModel(item.model); setTargetGender(item.gender); setStep('result'); setIsHistoryOpen(false); }} onDelete={(id) => setHistory(prev => prev.filter(h => h.id !== id))} language={language} t={t} />
      <StyleStudio isOpen={isStyleStudioOpen} onClose={() => setIsStyleStudioOpen(false)} brand={targetBrandId} model={targetModel} language={language} t={t} />
      <PremiumSupport isOpen={isPremiumSupportOpen} onClose={() => setIsPremiumSupportOpen(false)} language={language} t={t} />
      <BrandGuides isOpen={isBrandGuidesOpen} onClose={() => setIsBrandGuidesOpen(false)} language={language} t={t} />
      <ApiDashboard isOpen={isApiDashboardOpen} onClose={() => setIsApiDashboardOpen(false)} apiUrl={API_URL} />
      
      <RegistrationModal 
        isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)}
        onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} user={user}
        language={language} t={t} apiUrl={API_URL}
      />

      <PurchaseModal 
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        language={language}
      />
    </div>
  );
};

export default App;
