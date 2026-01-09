import React from 'react';
import { X, Crown, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../App';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 border border-white/20">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-10">
          <X size={20} className="text-slate-400" />
        </button>

        {/* Header */}
        <div className="relative h-48 bg-slate-950 flex flex-col items-center justify-center text-white overflow-hidden">
           <div className="absolute inset-0 bg-purple-600/20 blur-[60px]"></div>
           <Crown size={48} className="text-purple-400 mb-4 relative z-10" />
           <h2 className="text-3xl font-black brand-font uppercase tracking-tighter relative z-10">
             {language === 'tr' ? 'PREMIUM' : 'PREMIUM'}
           </h2>
           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300 mt-2 relative z-10">
             COMING SOON
           </p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
           <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-6">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">
                {language === 'tr' ? 'ÇOK YAKINDA!' : 'COMING SOON!'}
              </h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                {language === 'tr' 
                  ? 'Premium üyelik sistemi ve Iyzico ile güvenli ödeme altyapısı şu anda geliştirme aşamasındadır.' 
                  : 'Premium membership and secure payment via Iyzico are currently under development.'}
              </p>
           </div>

           <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
             <ShieldCheck size={12} />
             Secure Payments via Iyzico
           </div>
           
           <button 
             onClick={onClose}
             className="w-full mt-6 py-4 bg-slate-100 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-xs cursor-not-allowed"
             disabled
           >
             {language === 'tr' ? 'YAKINDA AKTİF' : 'AVAILABLE SOON'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
