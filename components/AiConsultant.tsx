import React, { useState } from 'react';
import { Sparkles, MessageCircle, Send } from 'lucide-react';

const AiConsultant: React.FC = () => {
  const [caseDescription, setCaseDescription] = useState('');

  const handleConsultation = () => {
    if (!caseDescription.trim()) return;

    const phoneNumber = '5532987132926';
    const message = encodeURIComponent(`Olá, gostaria de uma pré-análise do seguinte caso:\n\n${caseDescription}`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="ai-consult" className="py-20 bg-brand-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-1 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-xs font-bold text-brand-800 uppercase tracking-wider">Análise Preliminar</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Pré-Análise de Caso</h2>
          <p className="mt-3 text-slate-600">
            Descreva brevemente o caso do seu cliente. Envie os detalhes e receba um retorno <br/>
            sobre a viabilidade técnica diretamente no seu WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="space-y-4">
              <label htmlFor="case-input" className="block text-sm font-medium text-slate-700">
                Resumo do seu Caso (ex: "Homem de 45 anos, metalúrgico, com hérnia de disco lombar, INSS negou auxílio.")
              </label>
              <textarea
                id="case-input"
                rows={4}
                className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all resize-none"
                placeholder="Digite aqui os detalhes médicos e jurídicos básicos..."
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
              />
              
              <div className="flex justify-end">
                <button
                  onClick={handleConsultation}
                  disabled={!caseDescription.trim()}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-green-600/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar para consultor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiConsultant;