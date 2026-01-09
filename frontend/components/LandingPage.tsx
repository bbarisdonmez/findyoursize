import React, { useState } from 'react';
import { Info, X, Zap, Globe2, Sparkles, ArrowRight, BookOpen, Crown } from 'lucide-react';
import { Language } from '../App';
import { UserProfile } from '../types';
import BrandGuides from './BrandGuides';

interface LandingPageProps {
  onStart: () => void;
  onQuickStart: () => void;
  onHome: () => void;
  onOpenProfiles: () => void;
  onOpenRegistration: () => void;
  activeProfile: UserProfile;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onQuickStart, onHome, onOpenProfiles, onOpenRegistration, activeProfile, language, setLanguage, t }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    { id: 1, text: t.membershipBenefit1, icon: Zap, title: t.feature1Title, desc: t.feature1Desc },
    { id: 2, text: t.membershipBenefit2, icon: Sparkles, title: t.feature2Title, desc: t.feature2Desc },
    { id: 3, text: t.membershipBenefit3, icon: Globe2, title: t.feature3Title, desc: t.feature3Desc }, 
    { id: 4, text: t.membershipBenefit4, icon: Crown, title: t.feature4Title, desc: t.feature4Desc } 
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900 relative overflow-hidden">
      
      {/* HEADER - RESPONSIVE DÜZENLEME YAPILDI */}
      <header className="relative flex justify-center items-center px-3 md:px-6 py-4 md:py-5 z-20">
        
        {/* SOL GRUP: Mobilde boşluklar (gap) ve paddingler küçültüldü */}
        <div className="absolute left-3 md:left-6 flex items-center gap-1.5 md:gap-2">
          <button 
            onClick={() => setShowInfo(true)}
            className="px-2 md:px-3 py-2 bg-slate-50/50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all flex items-center gap-2 group z-30 shadow-sm"
          >
            <Info size={14} className="text-slate-400 group-hover:text-blue-700 transition-colors" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-blue-700 transition-colors hidden lg:inline">{t.techTitle}</span>
          </button>
          
          <button 
            onClick={() => setShowGuides(true)}
            className="flex px-2 md:px-3 lg:px-4 py-2 bg-slate-50 hover:bg-slate-100 backdrop-blur-md border border-slate-100 rounded-full transition-all items-center gap-2 group z-30"
          >
            <BookOpen size={16} className="text-slate-400 group-hover:text-blue-700" />
            <span className="text-[9px] font-black tracking-[0.25em] uppercase text-slate-400 group-hover:text-blue-700 hidden lg:inline">{t.sizeGuideBtn}</span>
          </button>

          {/* DİL DEĞİŞTİRİCİ */}
          <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm z-30">
            <button onClick={() => setLanguage('tr')} className={`transition-colors ${language === 'tr' ? 'text-blue-700' : 'text-slate-300 hover:text-slate-500'}`}>TR</button>
            <span className="w-[1px] h-2.5 bg-slate-200"></span>
            <button onClick={() => setLanguage('en')} className={`transition-colors ${language === 'en' ? 'text-blue-700' : 'text-slate-300 hover:text-slate-500'}`}>EN</button>
          </div>
        </div>

        {/* ORTA - LOGO: Mobilde metin gizlendi ve logo küçültüldü */}
        <button 
          onClick={onHome}
          className="flex flex-col items-center gap-0.5 group cursor-pointer relative z-20"
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 md:h-20 w-auto object-contain transform group-hover:rotate-6 transition-transform drop-shadow-md" 
          />
          {/* 'hidden md:block' ekleyerek mobilde yazıyı gizledik */}
          <span className="hidden md:block font-black text-lg md:text-xl tracking-tighter text-slate-900 brand-font">FindYourSize</span>
        </button>
        
        {/* SAĞ GRUP (Global Buton İçin Boşluk) */}
        <div className="absolute right-4 md:right-6 flex items-center gap-2 md:gap-4">
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center text-center px-4 md:px-6 relative z-10 py-6 mt-4 md:mt-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 animate-in fade-in slide-in-from-top-4 duration-700">
          <Zap size={14} className="text-blue-700 fill-current" />
          <span className="text-[10px] font-black text-blue-700 tracking-[0.2em] uppercase">{t.aiPrecision}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9] brand-font max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="block mb-2 md:mb-4">{t.heroTitle}</span>
          <span className="text-blue-700 block">{t.heroTitleSub}</span>
        </h1>
        
        <p className="text-slate-500 text-sm md:text-lg lg:text-xl mb-10 md:mb-12 font-medium max-w-xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {t.heroDesc}
        </p>
        
        {/* ACTION CONTAINER */}
        <div className="flex flex-col items-center gap-8 lg:gap-10 w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-black py-5 px-10 md:py-6 md:px-16 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(29,78,216,0.35)] transition-all transform hover:scale-[1.05] active:scale-[0.98] text-base md:text-lg brand-font uppercase tracking-tight flex items-center justify-center gap-4 z-20"
            >
              {t.startBtn}
              <ArrowRight size={24} />
            </button>

            {activeProfile.reference && (
              <button 
                onClick={onQuickStart}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-white border border-slate-200 rounded-[2rem] text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50/50 transition-all active:scale-95 shadow-lg shadow-slate-900/5"
              >
                {t.continueWithSaved}
              </button>
            )}
          </div>

          {/* PREMIUM MEMBERSHIP CARD */}
          <div className="w-full max-w-5xl px-0 sm:px-4">
            <div className="relative group overflow-hidden bg-[#020617] rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
                
                <div className="px-6 py-10 md:px-12 md:py-14 flex flex-col lg:flex-row items-center gap-10 relative z-10">
                  <div className="flex-[1.5] text-left space-y-6">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center shrink-0">
                           <Crown size={32} className="text-blue-500 fill-current md:w-8 md:h-8" />
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9] brand-font uppercase">
                          {t.membershipCardTitle}
                        </h2>
                    </div>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                        {t.membershipCardDesc}
                    </p>
                    <button 
                      onClick={onOpenRegistration}
                      className="hidden lg:flex px-10 py-4 bg-white text-slate-950 rounded-full font-black text-[10px] tracking-[0.25em] uppercase transition-all hover:bg-blue-50 hover:scale-105 active:scale-95 items-center gap-4 group/btn w-fit"
                    >
                      {t.membershipCta}
                      <Sparkles size={16} className="text-blue-700 group-hover/btn:rotate-12 transition-transform" />
                    </button>
                  </div>

                  <div className="w-full lg:flex-1 bg-white/[0.03] backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white/10 flex flex-col gap-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                        <p className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase">{t.membershipStatus}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, i) => (
                          <button 
                            key={i} 
                            onClick={() => setSelectedFeature(feature)}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-left group/item w-full"
                          >
                            <feature.icon size={14} className="text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                            <div className="flex-1">
                               <span className="text-white/90 text-[10px] font-bold tracking-wider uppercase block">{feature.text}</span>
                            </div>
                            <Info size={10} className="text-white/20 group-hover/item:text-blue-400 transition-colors" />
                          </button>
                        ))}
                    </div>

                    <button 
                      onClick={onOpenRegistration}
                      className=" lg:hidden w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 mt-2"
                    >
                      {t.membershipCta}
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <BrandGuides isOpen={showGuides} onClose={() => setShowGuides(false)} language={language} t={t} />

      {showInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setShowInfo(false)}></div>
          
          <div className="relative bg-[#f8f9fa] w-full h-full sm:h-auto sm:max-w-6xl sm:max-h-[90vh] sm:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
            <div className="flex justify-between items-center p-6 md:p-10 border-b border-slate-200 bg-white sticky top-0 z-20">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 brand-font uppercase tracking-tight">{t.techTitle}</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ABOUT THE PROJECT</p>
                  </div>
               </div>
               <button 
                 onClick={() => setShowInfo(false)} 
                 className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
               >
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                  <div className="space-y-10">
                     <div>
                       <div className="flex items-center gap-2 mb-4">
                         <Sparkles size={18} className="text-blue-700" />
                         <span className="text-[10px] font-black text-blue-700 tracking-[0.4em] uppercase">{t.infoSlogan}</span>
                       </div>
                       <h2 className="text-4xl md:text-6xl font-black text-slate-950 brand-font tracking-tighter uppercase leading-[0.9]">
                         {t.infoMainTitle}
                       </h2>
                     </div>
                     <div className="space-y-8">
                       <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                         {t.infoDescriptionP1}
                       </p>
                       <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight italic tracking-tight border-l-4 border-blue-700 pl-6">
                         {t.infoDescriptionP2}
                       </p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-6">
                     <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                           <Zap size={24} />
                        </div>
                        <h4 className="text-xl font-black text-slate-950 mb-3 brand-font uppercase">{t.infoMetric1Title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{t.infoMetric1Desc}</p>
                     </div>
                     <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                           <Globe2 size={24} />
                        </div>
                        <h4 className="text-xl font-black text-slate-950 mb-3 brand-font uppercase">{t.infoMetric2Title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{t.infoMetric2Desc}</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      {selectedFeature && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setSelectedFeature(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[3rem] p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-300 border border-slate-100 overflow-hidden group">
             
             {selectedFeature.icon === Sparkles && (
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/10 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none"></div>
             )}

             <button 
               onClick={() => setSelectedFeature(null)}
               className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors z-10"
             >
               <X size={20} />
             </button>

             <div className="flex flex-col items-center text-center relative z-10">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-500 ${
                    selectedFeature.icon === Sparkles 
                    ? 'bg-blue-700 text-white shadow-blue-700/30' 
                    : 'bg-slate-50 text-blue-700 shadow-slate-200'
                }`}>
                  <selectedFeature.icon size={36} className={selectedFeature.icon === Sparkles ? 'animate-pulse' : ''} />
                </div>
                
                <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
                  <span className="text-[10px] font-black text-blue-700 tracking-[0.25em] uppercase">
                    {selectedFeature.icon === Sparkles ? 'FSY EXCLUSIVE' : (language === 'tr' ? 'ÖZELLİK DETAYI' : 'FEATURE DETAIL')}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-950 mb-6 brand-font uppercase tracking-tight leading-none">
                  {selectedFeature.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-8">
                  {selectedFeature.desc}
                </p>

                <button 
                  onClick={() => setSelectedFeature(null)}
                  className={`w-full py-5 rounded-[2rem] font-black text-[11px] tracking-[0.2em] uppercase transition-all shadow-lg active:scale-95 ${
                      selectedFeature.icon === Sparkles
                      ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-blue-700/20'
                      : 'bg-slate-950 text-white hover:bg-slate-800 shadow-slate-950/20'
                  }`}
                >
                  {language === 'tr' ? 'HARİKA' : 'AWESOME'}
                </button>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
