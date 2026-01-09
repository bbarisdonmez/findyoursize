import React, { useState } from 'react';
import { X, Plus, Trash2, LogOut, LogIn, Crown, User as UserIcon, CheckCircle2 } from 'lucide-react'; // LogIn eklendi
import { UserProfile } from '../types';
import { Language } from '../App';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHistory: () => void;
  profiles: UserProfile[];
  activeProfileId: string;
  onSwitch: (id: string) => void;
  onAdd: (name: string, gender: any) => void;
  onDelete: (id: string) => void;
  language: Language;
  t: any;
  user: any;
  onLogout: () => void;
  onLogin: () => void; // <-- YENİ PROP
}

const ProfileModal: React.FC<ProfileModalProps> = ({ 
  isOpen, onClose, onOpenHistory, profiles, activeProfileId, 
  onSwitch, onAdd, onDelete, language, t, user, onLogout, onLogin // <-- BURAYA EKLE
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newGender, setNewGender] = useState<'men'|'women'>('men');

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim()) {
      onAdd(newName, newGender);
      setNewName('');
      setIsAdding(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 border border-white/50">
        
        {/* --- ÜST BİLGİ KARTI --- */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between">
            {user ? (
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center font-black text-xl shadow-sm ${user.isPro ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {user.isPro ? <Crown size={24} /> : user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">{user.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${user.isPro ? 'bg-yellow-50 text-yellow-600 border border-yellow-100' : 'bg-slate-100 text-slate-500'}`}>
                      {user.isPro ? (t.premiumPlan || 'PREMIUM') : (t.freePlan || 'FREE')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[1.2rem] bg-slate-100 flex items-center justify-center">
                  <UserIcon size={24} className="text-slate-400" />
                </div>
                <div>
                   <h3 className="font-bold text-lg text-slate-900">{t.guest || 'Misafir'}</h3>
                   <p className="text-xs text-slate-500">{t.notLoggedIn || 'Giriş Yapılmadı'}</p>
                </div>
              </div>
            )}

            <button onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* GİRİŞ / ÇIKIŞ BUTONLARI */}
          <div className="mt-4 flex">
            {user ? (
               <button 
                 onClick={onLogout}
                 className="text-xs font-bold text-red-400 hover:text-red-500 flex items-center gap-2 px-1 py-1 hover:bg-red-50 rounded-lg transition-all"
               >
                 <LogOut size={14} />
                 {t.logout || 'Çıkış Yap'}
               </button>
            ) : (
               /* --- YENİ EKLENEN GİRİŞ BUTONU --- */
               <button 
                 onClick={() => { onClose(); onLogin(); }}
                 className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all w-full justify-center border border-blue-100"
               >
                 <LogIn size={14} />
                 {t.login || 'Giriş Yap / Kayıt Ol'}
               </button>
            )}
          </div>
        </div>

        <div className="h-px bg-slate-100 mx-6 my-6"></div>

        {/* --- PROFİL LİSTESİ (AYNI KALACAK) --- */}
        <div className="px-6 pb-6">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 ml-1">
            {t.profiles}
          </h3>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
            {profiles.map(profile => (
              <div key={profile.id} 
                onClick={() => onSwitch(profile.id)}
                className={`p-3 rounded-2xl flex items-center justify-between group cursor-pointer border transition-all ${activeProfileId === profile.id ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-transparent hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${activeProfileId === profile.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-sm'}`}>
                    {profile.name.charAt(0)}
                  </div>
                  <div>
                    <span className={`font-bold block text-sm ${activeProfileId === profile.id ? 'text-blue-900' : 'text-slate-600'}`}>
                      {profile.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase">
                      {profile.gender === 'men' ? t.men : t.women}
                    </span>
                  </div>
                </div>
                
                {activeProfileId === profile.id ? (
                   <CheckCircle2 size={18} className="text-blue-600 mr-2" />
                ) : (
                  profiles.length > 1 && (
                    <button onClick={(e) => { e.stopPropagation(); onDelete(profile.id); }} className="text-slate-300 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-all">
                      <Trash2 size={16} />
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
          
          {isAdding ? (
            <form onSubmit={handleAdd} className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 animate-in slide-in-from-bottom-2">
              <input 
                autoFocus
                type="text" 
                placeholder={t.profileName}
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className="w-full bg-white px-4 py-3 rounded-xl text-sm font-bold border border-slate-200 mb-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <div className="flex gap-2">
                <button type="button" onClick={() => setNewGender('men')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${newGender === 'men' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>{t.men}</button>
                <button type="button" onClick={() => setNewGender('women')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${newGender === 'women' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>{t.women}</button>
              </div>
              
              <div className="flex gap-2 mt-3">
                 <button 
                   type="button" 
                   onClick={() => setIsAdding(false)} 
                   className="flex-1 py-3 text-slate-400 font-bold text-xs hover:text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                 >
                   {t.cancel || 'İptal'}
                 </button>
                 <button 
                   type="submit" 
                   className="flex-[2] bg-blue-600 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                 >
                   {t.save || 'Kaydet'}
                 </button>
              </div>
            </form>
          ) : (
             <button onClick={() => setIsAdding(true)} className="w-full mt-4 py-4 border border-dashed border-slate-300 rounded-2xl text-slate-400 font-bold text-xs uppercase hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group">
               <Plus size={16} className="group-hover:scale-110 transition-transform" /> {t.newProfile}
             </button>
          )}

          <div className="mt-6">
            <button onClick={onOpenHistory} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
              <span className="opacity-70">↺</span> {t.history}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
