
import React from 'react';
import { Footprints } from 'lucide-react';

interface LegalFooterProps {
  onOpenLegal: (type: string) => void;
  t: any;
}

const LegalFooter: React.FC<LegalFooterProps> = ({ onOpenLegal, t }) => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-3 text-slate-900 opacity-20 hover:opacity-100 transition-opacity cursor-default">
          {/* YENİ KOD: Logo görseli */}
          <img 
            src="/logo.png" 
            alt="FSY Logo" 
            className="h-10 w-auto object-contain grayscale"
          />
          {/* YENİ KOD SONU */}
          <span className="font-black text-sm tracking-tighter brand-font uppercase">FindYourSize</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <button 
            onClick={() => onOpenLegal('kvkk')}
            className="text-[10px] font-black text-slate-400 hover:text-blue-700 uppercase tracking-widest transition-colors"
          >
            {t.legalKvkk}
          </button>
          <button 
            onClick={() => onOpenLegal('consent')}
            className="text-[10px] font-black text-slate-400 hover:text-blue-700 uppercase tracking-widest transition-colors"
          >
            {t.legalConsent}
          </button>
          <button 
            onClick={() => onOpenLegal('cookie')}
            className="text-[10px] font-black text-slate-400 hover:text-blue-700 uppercase tracking-widest transition-colors"
          >
            {t.legalCookie}
          </button>
          <button 
            onClick={() => onOpenLegal('retention')}
            className="text-[10px] font-black text-slate-400 hover:text-blue-700 uppercase tracking-widest transition-colors"
          >
            {t.legalRetention}
          </button>
          <button 
            onClick={() => onOpenLegal('privacy')}
            className="text-[10px] font-black text-slate-400 hover:text-blue-700 uppercase tracking-widest transition-colors"
          >
            {t.legalPrivacy}
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">{t.legalCopyright}</p>
          <p className="text-[8px] font-bold text-slate-200 uppercase tracking-widest">v2.5.4 | Built for the future of sizing</p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
