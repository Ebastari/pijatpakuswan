
import React, { useState } from 'react';
import { getMassageAdvice } from '../services/geminiService';

const HealthTips: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await getMassageAdvice(query);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section id="ai-tips" className="py-24 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="bg-emerald-600 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <i className="fas fa-robot text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Asisten Terapi AI Pak Kuswan</h3>
            <p className="text-emerald-100">Apa keluhan kesehatan yang Anda rasakan hari ini? Dapatkan saran pijat instan.</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Contoh: Leher kaku dan pusing..."
                  className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <i className="fas fa-circle-notch animate-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                  Tanya AI
                </button>
              </div>
            </form>

            {advice && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4 text-emerald-800 font-bold">
                  <i className="fas fa-lightbulb"></i>
                  <h4>Saran untuk Anda:</h4>
                </div>
                <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {advice}
                </div>
                <div className="mt-6 pt-6 border-t border-emerald-100 flex items-center justify-between text-sm text-slate-500">
                  <p>*Saran ini hanya referensi awal, konsultasikan dengan terapis.</p>
                  <button 
                    onClick={() => {setAdvice(null); setQuery('');}}
                    className="text-emerald-600 hover:underline"
                  >
                    Bersihkan
                  </button>
                </div>
              </div>
            )}

            {!advice && !loading && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Kaki pegal', 'Sakit pinggang', 'Masuk angin', 'Stres kerja', 'Leher kaku'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="bg-slate-100 hover:bg-emerald-100 hover:text-emerald-700 py-2 px-4 rounded-full text-sm text-slate-600 transition-colors text-center"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
