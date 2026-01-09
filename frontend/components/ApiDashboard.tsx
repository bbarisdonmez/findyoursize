import React, { useState, useEffect } from 'react';
import { X, Activity, Shield, Database, Terminal, RefreshCw } from 'lucide-react';

interface ApiDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  apiUrl: string;
}

const ApiDashboard: React.FC<ApiDashboardProps> = ({ isOpen, onClose, apiUrl }) => {
  // 1. HOOK'LAR EN ÜSTTE VE KOŞULSUZ OLMALI
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [latency, setLatency] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  // Fonksiyonları hook'lardan önce tanımlıyoruz
  const addLog = (msg: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 10));
  };

  const checkHealth = async () => {
    setStatus('checking');
    // Eğer kapalıysa log eklemeyelim, sadece arka planda kontrol edelim veya etmeyelim
    // Ama React state güncellemesi olduğu için sorun olmaz.
    const start = Date.now();

    try {
      const res = await fetch(`${apiUrl}/health`);
      const end = Date.now();
      
      if (res.ok) {
        setStatus('online');
        setLatency(end - start);
        if(isOpen) addLog(`BAŞARILI: Sunucu yanıt verdi (${end - start}ms)`);
      } else {
        throw new Error('Sunucu hatası');
      }
    } catch (err) {
      setStatus('offline');
      setLatency(null);
      if(isOpen) addLog('HATA: Sunucuya erişilemiyor!');
    }
  };

  // 2. EFFECT HOOK (Erken return'den ÖNCE olmalı)
  useEffect(() => {
    // Sadece açıkken kontrol etsin istiyorsak bu kontrolü buraya koyabiliriz
    if (isOpen) {
        checkHealth();
        const interval = setInterval(checkHealth, 30000);
        return () => clearInterval(interval);
    }
  }, [isOpen]); // isOpen değişince tetiklenir

  // 3. ERKEN RETURN (Tüm hooklardan SONRA)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Arka Plan */}
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm animate-in fade-in" onClick={onClose}></div>
      
      {/* Ana Kart */}
      <div className="relative w-full max-w-4xl bg-[#0f172a] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row h-[600px] animate-in zoom-in-95">
        
        {/* Sol Panel - Durum */}
        <div className="w-full md:w-1/3 bg-slate-900/50 p-8 border-r border-slate-800 flex flex-col relative overflow-hidden">
           {/* Dekoratif Efekt */}
           <div className={`absolute top-0 left-0 w-full h-1 ${status === 'online' ? 'bg-green-500' : (status === 'checking' ? 'bg-yellow-500' : 'bg-red-500')} shadow-[0_0_20px_currentColor]`}></div>

           <div className="mb-8">
             <h2 className="text-white font-black text-xl brand-font tracking-tight mb-1">API SYSTEM</h2>
             <p className="text-slate-500 text-[10px] font-mono uppercase">v2.5.4-stable</p>
           </div>

           <div className="flex-1 flex flex-col gap-6">
              {/* Status Indicator */}
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                 <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${status === 'online' ? 'bg-green-500 animate-pulse' : (status === 'checking' ? 'bg-yellow-500' : 'bg-red-500')}`}></div>
                    <span className="text-slate-300 font-bold text-xs uppercase">
                      {status === 'online' ? 'SYSTEM ONLINE' : (status === 'checking' ? 'CHECKING...' : 'SYSTEM OFFLINE')}
                    </span>
                 </div>
                 {latency && (
                   <div className="text-3xl font-mono text-white font-bold">{latency}ms</div>
                 )}
              </div>

              {/* İstatistikler */}
              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-slate-800/30 p-3 rounded-xl border border-slate-700/50">
                    <Database size={16} className="text-blue-400 mb-2" />
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Database</div>
                    <div className="text-white font-bold text-sm">MongoDB</div>
                 </div>
                 <div className="bg-slate-800/30 p-3 rounded-xl border border-slate-700/50">
                    <Shield size={16} className="text-purple-400 mb-2" />
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Auth</div>
                    <div className="text-white font-bold text-sm">JWT</div>
                 </div>
              </div>
           </div>

           <button 
             onClick={checkHealth}
             className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs uppercase transition-all active:scale-95"
           >
             <RefreshCw size={14} className={status === 'checking' ? 'animate-spin' : ''} />
             Yeniden Dene
           </button>
        </div>

        {/* Sağ Panel - Detaylar ve Loglar */}
        <div className="flex-1 p-8 bg-[#0f172a] flex flex-col relative">
           <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
             <X size={20} />
           </button>

           <div className="mb-8">
              <h3 className="text-white font-bold text-sm uppercase flex items-center gap-2 mb-4">
                <Terminal size={16} className="text-blue-500" />
                Live Request Logs
              </h3>
              <div className="bg-black/50 rounded-xl border border-slate-800 p-4 h-48 overflow-y-auto font-mono text-[10px] text-green-400/80 space-y-1 shadow-inner custom-scrollbar">
                 {logs.length === 0 ? (
                   <span className="text-slate-600">Waiting for requests...</span>
                 ) : (
                   logs.map((log, i) => (
                     <div key={i} className="animate-in slide-in-from-left-2 duration-300">
                       <span className="text-blue-500 mr-2">{'>'}</span>{log}
                     </div>
                   ))
                 )}
              </div>
           </div>

           <div className="flex-1">
              <h3 className="text-white font-bold text-sm uppercase flex items-center gap-2 mb-4">
                <Activity size={16} className="text-orange-500" />
                Active Endpoints
              </h3>
              <div className="grid grid-cols-1 gap-2">
                 {[
                   { method: 'POST', path: '/api/register', desc: 'User Registration' },
                   { method: 'POST', path: '/api/login', desc: 'Authentication' },
                   { method: 'GET',  path: '/api/me', desc: 'Profile Data (Protected)' },
                   { method: 'POST', path: '/api/usage', desc: 'Quota Management' },
                 ].map((ep, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-800/50 hover:bg-slate-800/50 transition-colors group">
                      <div className="flex items-center gap-3">
                         <span className={`text-[10px] font-black px-2 py-1 rounded bg-slate-800 ${ep.method === 'GET' ? 'text-blue-400' : 'text-green-400'}`}>
                           {ep.method}
                         </span>
                         <span className="text-slate-300 font-mono text-xs">{ep.path}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold group-hover:text-slate-400">{ep.desc}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ApiDashboard;
