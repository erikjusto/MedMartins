import React from 'react';
import { Briefcase, HeartPulse, UserCheck, ShieldAlert } from 'lucide-react';

const Areas: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Áreas de Atuação Especializada</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Nossa expertise cobre as principais demandas onde a medicina e o direito se cruzam. 
              Entendemos as nuances de cada vara e as exigências específicas de cada tipo de ação.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-800/50 p-3 rounded-lg h-fit">
                  <UserCheck className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Previdenciário (INSS)</h3>
                  <p className="text-slate-400 text-sm">Auxílio-doença, aposentadoria por invalidez, BPC/LOAS. Análise de incapacidade laborativa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-800/50 p-3 rounded-lg h-fit">
                  <Briefcase className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Trabalhista & Acidentário</h3>
                  <p className="text-slate-400 text-sm">Doenças ocupacionais, LER/DORT, acidentes de trabalho, nexo causal e concausalidade.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-800/50 p-3 rounded-lg h-fit">
                  <HeartPulse className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Planos de Saúde</h3>
                  <p className="text-slate-400 text-sm">Negativas de cobertura, cirurgias, medicamentos de alto custo e tratamentos experimentais.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-800/50 p-3 rounded-lg h-fit">
                  <ShieldAlert className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Danos & Indenizações</h3>
                  <p className="text-slate-400 text-sm">Erro médico, danos estéticos e corporais (Seguros/DPVAT).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-3 opacity-20"></div>
            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
               <h3 className="text-xl font-bold mb-6 text-brand-300">Por que contratar um Assistente Técnico?</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="h-6 w-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                   <p className="text-slate-300 text-sm">O Juiz é leigo em medicina; ele confia no Perito. Você precisa de alguém que fale a língua do Perito.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="h-6 w-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                   <p className="text-slate-300 text-sm">Quesitos genéricos recebem respostas genéricas. Quesitos técnicos forçam a análise correta.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="h-6 w-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                   <p className="text-slate-300 text-sm">Identificação de falhas no laudo oficial que podem reverter uma sentença desfavorável.</p>
                 </li>
               </ul>
               <div className="mt-8 pt-6 border-t border-slate-700">
                 <p className="italic text-slate-400 text-sm text-center">"O processo não se ganha apenas com leis, mas com provas técnicas robustas."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;