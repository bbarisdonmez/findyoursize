import React, { useState } from 'react';
import { X, User, UserPlus, Baby, Footprints, Info, Search, ChevronRight } from 'lucide-react';
import { BRANDS } from '../data';
import { Gender } from '../types';
import { Language } from '../App';

interface BrandGuidesProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  t: any;
}

const BrandGuides: React.FC<BrandGuidesProps> = ({ isOpen, onClose, language, t }) => {
  const [selectedBrandId, setSelectedBrandId] = useState('nike');
  const [selectedGender, setSelectedGender] = useState<Gender>('men');
  const [searchSize, setSearchSize] = useState('');

  if (!isOpen) return null;

  const brand = BRANDS.find(b => b.id === selectedBrandId) || BRANDS[0];
  const chart = brand.sizeCharts[selectedGender];
   
  const filteredChart = chart.filter(row => 
    row.eu.toLowerCase().includes(searchSize.toLowerCase()) || 
    row.cm.toString().includes(searchSize)
  );

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative bg-[#f8f9fa] w-full max-w-5xl h-full sm:h-[90vh] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-white/20">
        
        {/* --- HEADER --- */}
        <div className="bg-white border-b border-slate-100 flex-shrink-0 z-20">
          <div className="flex items-center justify-between p-6 pb-2 sm:p-8 sm:pb-4">
            <div className="flex items-center gap-4">
               <img 
                 src="/logo.png" 
                 alt="FSY Logo" 
                 className="w-12 h-12 object-contain" 
               />
               <div>
                 <h2 className="text-xl font-black text-slate-950 brand-font uppercase tracking-tight">{t.officialSizeCharts}</h2>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">GLOBAL STANDARDS DATABASE</p>
               </div>
            </div>
            <button onClick={onClose} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Brand Selector - Horizontal Scroll */}
          <div className="px-6 sm:px-8 pb-6 overflow-x-auto scrollbar-hide">
             <div className="flex items-center gap-3">
               {BRANDS.map(b => (
                 <button 
                   key={b.id}
                   onClick={() => { setSelectedBrandId(b.id); setSearchSize(''); }}
                   className={`flex items-center gap-2 pl-2 pr-4 py-2 rounded-full border transition-all whitespace-nowrap group ${
                     selectedBrandId === b.id 
                       ? 'bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-700/20' 
                       : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                   }`}
                 >
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-white overflow-hidden p-1 ${selectedBrandId === b.id ? '' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                      <img src={b.logo} alt={b.name} className="w-full h-full object-contain" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest">{b.name}</span>
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* --- CONTROLS & FILTER --- */}
        <div className="bg-white/50 border-b border-slate-100 p-6 sm:px-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between backdrop-blur-sm sticky top-0 z-10">
           
           {/* Gender Toggle */}
           <div className="w-full lg:w-auto bg-slate-100/80 p-1.5 rounded-2xl flex relative">
              <div 
                className="absolute bg-white shadow-sm rounded-xl h-[calc(100%-12px)] transition-all duration-300 ease-out"
                style={{ 
                  width: 'calc(33.33% - 8px)', 
                  left: selectedGender === 'men' ? '4px' : selectedGender === 'women' ? '33.33%' : 'calc(66.66% - 4px)'
                }}
              />
              {[
                { id: 'men', icon: User, label: t.men },
                { id: 'women', icon: UserPlus, label: t.women },
                { id: 'kids', icon: Baby, label: t.kids }
              ].map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => { setSelectedGender(cat.id as Gender); setSearchSize(''); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl relative z-10 transition-colors ${
                    selectedGender === cat.id ? 'text-slate-950' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <cat.icon size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">{cat.label}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest sm:hidden">{cat.label.substring(0,3)}</span>
                </button>
              ))}
           </div>

           {/* Search Input */}
           <div className="w-full lg:w-72 relative group">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-700 transition-colors">
               <Search size={18} />
             </div>
             <input 
               type="text"
               placeholder="Beden Ara (örn: 42 veya 27)"
               value={searchSize}
               onChange={(e) => setSearchSize(e.target.value)}
               className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
             />
           </div>
        </div>

        {/* --- TABLE CONTENT --- */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
           {/* Sticky Header Wrapper */}
           <div className="flex-1 overflow-y-auto overflow-x-auto p-0 sm:p-8">
             <div className="min-w-full inline-block align-middle">
               <div className="border border-slate-200 sm:rounded-[2rem] overflow-hidden bg-white shadow-sm">
                 <table className="min-w-full divide-y divide-slate-100">
                   <thead className="bg-slate-50 sticky top-0 z-10">
                     <tr>
                       {[
                         { lbl: t.euShort, sub: 'EUROPE' },
                         { lbl: t.usShort, sub: 'USA' },
                         { lbl: t.ukShort, sub: 'UK' },
                         { lbl: t.cmShort, sub: 'CENTIMETERS', highlight: true }
                       ].map((header, idx) => (
                         <th key={idx} scope="col" className={`px-6 py-5 text-left group ${header.highlight ? 'bg-blue-50/50' : ''}`}>
                           <div className="flex flex-col">
                             <span className={`text-base font-black brand-font tracking-tight ${header.highlight ? 'text-blue-700' : 'text-slate-900'}`}>{header.lbl}</span>
                             <span className="text-[8px] font-bold text-slate-400 tracking-widest">{header.sub}</span>
                           </div>
                         </th>
                       ))}
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50 bg-white">
                     {filteredChart.length > 0 ? filteredChart.map((row, i) => (
                       <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                         <td className="px-6 py-5 whitespace-nowrap">
                           <span className="text-lg font-black text-slate-900 brand-font">{row.eu}</span>
                         </td>
                         <td className="px-6 py-5 whitespace-nowrap">
                           <span className="text-sm font-bold text-slate-500 group-hover:text-slate-700">{row.us}</span>
                         </td>
                         <td className="px-6 py-5 whitespace-nowrap">
                           <span className="text-sm font-bold text-slate-500 group-hover:text-slate-700">{row.uk}</span>
                         </td>
                         <td className="px-6 py-5 whitespace-nowrap bg-blue-50/10 group-hover:bg-blue-50/30">
                           <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <span className="text-lg font-black text-blue-700 brand-font">{row.cm}</span>
                           </div>
                         </td>
                       </tr>
                     )) : (
                       <tr>
                         <td colSpan={4} className="px-6 py-24 text-center">
                            <div className="flex flex-col items-center justify-center opacity-50">
                               <Info size={48} className="text-slate-300 mb-4" />
                               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Sonuç Bulunamadı</p>
                               <button onClick={() => setSearchSize('')} className="mt-4 text-blue-700 text-xs font-black uppercase tracking-widest hover:underline">Filtreyi Temizle</button>
                            </div>
                         </td>
                       </tr>
                     )}
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="bg-white border-t border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left z-20">
           <div className="flex items-center gap-3 opacity-60">
              <img src={brand.logo} alt={brand.name} className="h-6 object-contain grayscale" />
              <div className="h-4 w-px bg-slate-300"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">OFFICIAL SIZE GUIDE</span>
           </div>
           <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
              Last Updated: 2025 • Version 2.1
           </p>
        </div>

      </div>
    </div>
  );
};

export default BrandGuides;
