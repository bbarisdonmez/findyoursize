import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, User, Lock, Globe, Facebook, CheckCircle2, FileText, ChevronLeft, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string, user: any) => void;
  onLogout: () => void;
  user: any;
  language: Language;
  t: any;
  apiUrl: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  isOpen, onClose, onLoginSuccess, onLogout, user, language, t, apiUrl 
}) => {
  const [mode, setMode] = useState<'register' | 'login'>('register');
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // UI State
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  
  // API State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  // --- ZATEN GİRİŞ YAPILMIŞSA (LOGGED IN STATE) ---
  if (user) {
    return (
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl transition-all" onClick={onClose}></div>
        <div className="relative bg-white rounded-[2.5rem] p-10 text-center max-w-sm w-full animate-in zoom-in-95 shadow-2xl border border-white/20 overflow-hidden">
          {/* Dekoratif Arka Plan */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-50 to-transparent -z-10"></div>
          
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm ring-8 ring-green-50">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 brand-font uppercase mb-2 tracking-tight">
            {language === 'tr' ? `HOŞGELDİN, ${user.name}` : `WELCOME, ${user.name}`}
          </h2>
          <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">
            {language === 'tr' ? 'Hesabınız aktif ve tüm özelliklere erişebilirsiniz.' : 'Your account is active with full access.'}
          </p>
          
          <div className="space-y-3">
             <button onClick={onClose} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
               {language === 'tr' ? 'DEVAM ET' : 'CONTINUE'} <ArrowRight size={14} />
             </button>
             <button onClick={onLogout} className="w-full bg-red-50 text-red-500 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-100 transition-colors">
               {language === 'tr' ? 'ÇIKIŞ YAP' : 'LOGOUT'}
             </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Kayıt Modunda Validasyon
    if (mode === 'register') {
       if (!accepted) {
         setError(language === 'tr' ? 'Lütfen sözleşmeyi kabul edin.' : 'Please accept the agreement.');
         return;
       }
       if (password !== passwordConfirm) {
         setError(language === 'tr' ? 'Şifreler uyuşmuyor.' : 'Passwords do not match.');
         return;
       }
    }

    setLoading(true);

    try {
      const endpoint = mode === 'register' ? '/register' : '/login';
      const body = mode === 'register' 
        ? { name, email, password } 
        : { email, password };

      const res = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || (language === 'tr' ? 'Bir hata oluştu.' : 'An error occurred.'));

      // Başarılı giriş
      onLoginSuccess(data.token, data.user);
      
      // Formu temizle
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center sm:p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full h-full sm:h-auto sm:max-w-[500px] sm:rounded-[3rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300 flex flex-col">
        
        {/* Kapatma Butonu */}
        {!showAgreement && (
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-[260] p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-all text-slate-500 hover:text-slate-900 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        )}

        {/* --- FORM GÖRÜNÜMÜ --- */}
        {!showAgreement && (
          <div className="flex flex-col h-full">
            {/* Header Kısmı */}
            <div className="pt-12 pb-2 px-8 text-center bg-white z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 brand-font uppercase tracking-tight mb-6">
                {mode === 'register' ? t.regTitle : (language === 'tr' ? 'HOŞGELDİNİZ' : 'WELCOME BACK')}
              </h2>
              
              {/* Modern Tab Switcher */}
              <div className="inline-flex bg-slate-100 p-1.5 rounded-full relative mb-4">
                 <button 
                   onClick={() => { setMode('register'); setError(null); }}
                   className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${mode === 'register' ? 'bg-white text-blue-700 shadow-sm scale-100' : 'text-slate-400 hover:text-slate-600 scale-95'}`}
                 >
                   {language === 'tr' ? 'KAYIT OL' : 'REGISTER'}
                 </button>
                 <button 
                   onClick={() => { setMode('login'); setError(null); }}
                   className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${mode === 'login' ? 'bg-white text-blue-700 shadow-sm scale-100' : 'text-slate-400 hover:text-slate-600 scale-95'}`}
                 >
                   {language === 'tr' ? 'GİRİŞ YAP' : 'LOGIN'}
                 </button>
              </div>
            </div>

            {/* Scrollable Form Area */}
            <div className="flex-1 overflow-y-auto px-8 pb-10 sm:px-10 custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                
                {/* İsim Alanı */}
                {mode === 'register' && (
                  <div className="space-y-1.5 animate-in slide-in-from-left duration-300">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">{t.regName}</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Ad Soyad"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 outline-none font-bold text-slate-900 text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                        required={mode === 'register'}
                      />
                    </div>
                  </div>
                )}

                {/* E-Posta */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">{t.regEmail}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="mail@ornek.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 outline-none font-bold text-slate-900 text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Şifre */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">{t.regPass}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input 
                      type={showPass ? "text" : "password"} 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 outline-none font-bold text-slate-900 text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                    >
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Şifre Tekrar */}
                {mode === 'register' && (
                  <div className="space-y-1.5 animate-in slide-in-from-left duration-300 delay-75">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">{t.regPassConfirm}</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassConfirm ? "text" : "password"} 
                        placeholder="••••••••"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50/50 outline-none font-bold text-slate-900 text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                        required={mode === 'register'}
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPassConfirm(!showPassConfirm)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                      >
                        {showPassConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Onay Kutusu */}
                {mode === 'register' && (
                  <div className="flex items-start gap-3 px-1 py-2 animate-in slide-in-from-left duration-300 delay-100">
                    <button 
                      type="button"
                      className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 ${accepted ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-slate-300 text-transparent hover:border-blue-400'}`}
                      onClick={() => setAccepted(!accepted)}
                    >
                      <CheckCircle2 size={12} strokeWidth={4} />
                    </button>
                    <span className="text-xs font-bold text-slate-500 leading-snug">
                      {t.regAcceptPart1}
                      <button 
                        type="button" 
                        onClick={() => setShowAgreement(true)}
                        className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2 ml-1"
                      >
                        {t.regAcceptLink}
                      </button>
                      <span className="ml-1">{t.regAcceptPart2}</span>
                    </span>
                  </div>
                )}

                {/* Hata Mesajı */}
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 animate-in shake border border-red-100">
                    <AlertCircle size={18} className="shrink-0" />
                    <span className="text-xs font-bold">{error}</span>
                  </div>
                )}

                {/* Submit Butonu */}
                <button 
                  type="submit"
                  disabled={loading || (mode === 'register' && !accepted)}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-2xl font-black text-sm brand-font uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none mt-6 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      {mode === 'register' ? t.regComplete : (language === 'tr' ? 'GİRİŞ YAP' : 'LOGIN')}
                      {!loading && <ArrowRight size={18} />}
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        )}

        {/* --- ÜYELİK SÖZLEŞMESİ GÖRÜNÜMÜ --- */}
        {showAgreement && (
          <div className="flex flex-col h-full animate-in slide-in-from-right duration-300 bg-white">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white z-10">
              <button 
                onClick={() => setShowAgreement(false)}
                className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                <FileText className="text-blue-700" size={18} />
                <h3 className="text-xs font-black text-slate-950 brand-font uppercase tracking-widest">
                  {t.membershipAgreementTitle}
                </h3>
              </div>
              <div className="w-8"></div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 prose prose-slate prose-sm max-w-none">
              <div 
                className="text-slate-600 font-medium leading-relaxed space-y-4 text-xs sm:text-sm"
                dangerouslySetInnerHTML={{ __html: t.membershipAgreementContent }}
              />
            </div>

            <div className="p-6 border-t border-slate-100 bg-white z-10">
              <button 
                onClick={() => { setShowAgreement(false); setAccepted(true); }}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95"
              >
                {t.understandAndAccept}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
