
import React from 'react';
import { X, ShieldCheck, Scale, FileText, Lock, Database } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: string | null;
  onClose: () => void;
  language: string;
  t: any;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose, language, t }) => {
  if (!isOpen || !type) return null;

  const getTitle = () => {
    switch (type) {
      case 'kvkk': return t.legalKvkk;
      case 'consent': return t.legalConsent;
      case 'cookie': return t.legalCookie;
      case 'retention': return t.legalRetention;
      case 'privacy': return t.legalPrivacy;
      default: return "";
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'kvkk': return <ShieldCheck size={24} />;
      case 'consent': return <Scale size={24} />;
      case 'cookie': return <FileText size={24} />;
      case 'retention': return <Database size={24} />;
      case 'privacy': return <Lock size={24} />;
      default: return null;
    }
  };

  const getContent = () => {
    // Note: These are simplified legal templates for placeholder purposes.
    // In a real production app, these should be reviewed by legal experts.
    if (language === 'tr') {
      switch (type) {
        case 'kvkk':
          return `
            <h3>1. Veri Sorumlusu</h3>
            <p>FindYourSize (bundan sonra "Şirket" olarak anılacaktır) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verilerinizi aşağıda açıklanan kapsamda işliyoruz.</p>
            <h3>2. İşlenen Veriler ve Amaç</h3>
            <p>Biyometrik referans verileriniz (ayakkabı etiketi analizi yoluyla elde edilen ayak ölçüsü verileri), size en doğru beden önerisini sunmak, kullanıcı deneyimini iyileştirmek ve iade oranlarını azaltarak çevresel sürdürülebilirliğe katkı sağlamak amacıyla işlenmektedir.</p>
            <h3>3. Veri Aktarımı</h3>
            <p>Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz. Ancak, teknik altyapı hizmeti aldığımız iş ortaklarımızla (analiz motorları) anonimleştirilerek paylaşılabilir.</p>
          `;
        case 'privacy':
          return `
            <p>Gizliliğiniz bizim için en üst önceliktir. FindYourSize uygulaması, yüklediğiniz ayakkabı etiketi görsellerini sadece analiz aşamasında kullanır. Profil oluşturduğunuzda, bu veriler cihazınızın yerel depolama alanında ve güvenli sunucularımızda uçtan uca şifrelenerek saklanır.</p>
            <p>Konum verileriniz (mağaza bulma özelliği için), yalnızca işlem anında kullanılır ve geriye dönük takip yapılmaz.</p>
          `;
        case 'cookie':
          return `
            <p>Deneyiminizi geliştirmek için gerekli olan temel çerezleri (dil seçimi, oturum yönetimi) kullanıyoruz. Üçüncü taraf reklam çerezleri uygulamamızda yer almamaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.</p>
          `;
        case 'retention':
          return `
            <p>Verileriniz, üyeliğiniz devam ettiği sürece saklanır. Hesabınızı silmeniz durumunda, biyometrik verileriniz ve geçmiş analizleriniz 30 gün içinde sistemlerimizden geri döndürülemez şekilde silinir veya anonim hale getirilir.</p>
          `;
        case 'consent':
          return `
            <p>FindYourSize'ı kullanarak, ayakkabı etiketi görsellerimin yapay zeka tarafından analiz edilmesini, bu verilerden türetilen ayak ölçüsü bilgilerimin profilimde saklanmasını ve bana özel öneriler sunulmasını kabul ediyorum.</p>
          `;
        default: return "";
      }
    } else {
      // English Templates
      switch (type) {
        case 'kvkk':
          return `
            <h3>1. Data Controller</h3>
            <p>As FindYourSize, we process your personal data within the scope explained below in accordance with the Law on Protection of Personal Data.</p>
            <h3>2. Processed Data and Purpose</h3>
            <p>Your biometric reference data (foot size data obtained through shoe label analysis) is processed to provide the most accurate size recommendations, improve user experience, and contribute to environmental sustainability by reducing return rates.</p>
          `;
        case 'privacy':
          return `
            <p>Your privacy is our top priority. The FindYourSize app uses the shoe label images you upload only during the analysis phase. When you create a profile, this data is stored in your device's local storage and on our secure servers, encrypted end-to-end.</p>
          `;
        default: return "Policy details coming soon in English...";
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100">
        
        <div className="p-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-900 text-white rounded-2xl">
              {getIcon()}
            </div>
            <h3 className="text-lg font-black text-slate-950 brand-font uppercase tracking-tight">{getTitle()}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 prose prose-slate prose-sm max-w-none">
          <div 
            className="text-slate-600 font-medium leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: getContent() }}
          />
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
