import React, { useState } from 'react';
import { Award, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const Team: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Dr. João Heber Martins da Costa",
      crm: "MG-22933",
      rqe: "8505",
      qualifications: [
        "Médico pela Faculdade de Medicina da Universidade Federal Fluminense – RJ (1990).",
        "Residência médica em Cirurgia Geral pelo Hospital Metropolitano Odilon Behrens (HOB).",
        "Médico Legista Nível Especial (13ºDPC/ 3aDRPC-MG), com atuação de 1993 a 2020.",
        "Ex-diretor do Posto de Perícias Integradas/PPI da 3ª DRPC (2006-2020).",
        "Ex-chefe do Posto Médico Legal da 3ª DRPC (1993-2020).",
        "Médico Perito credenciado do INSS (1995-2006).",
        "Médico Perito coordenador da SEPLAG- Núcleo Regional de Perícias Médicas de São João Del Rei.",
        "Ex-Médico Perito coordenador da Divisão de Perícia Médica do IPSEMG.",
        "Pós-graduado em Medicina do Trabalho e Saúde Ocupacional (FCMMG).",
        "Pós-graduado em Perícias Médicas pela Universidade Gama Filho/Fundação Unimed.",
        "Médico do Trabalho com Registro no Ministério do Trabalho (nº 8505).",
        "Médico do Trabalho coordenador do Departamento de Saúde Ocupacional da UNIMED SJDR.",
        "Aprovado em Concurso Público para Médico Perito do INSS (2004).",
        "Ex-Médico Perito credenciado do Instituto Municipal de Previdência de SJDR.",
        "Ex-Médico Coordenador do Conselho fiscal da UNIMED SJDR.",
        "Professor de Medicina Legal do curso de medicina do UNIPTAN / AFYA."
      ],
      image: "https://medmartinspericias.com.br/wp-content/uploads/2026/02/Dr.-Joao-Heber-Martins-da-Costa.webp"
    },
    {
      name: "Dra. Giovanna de Abreu Martins",
      crm: "MG-99728",
      qualifications: [
        "Médica pelo Centro Universitário Presidente Tancredo de Almeida Neves - UNIPTAN - Afya",
        "Pós-graduada em Dermatologia pelo Sabin Ensino Hospital Albert Sabin",
        "Pós-Graduada em Perícia Médica pela Faculdade Unimed"
      ],
      image: "https://medmartinspericias.com.br/wp-content/uploads/2026/02/Dra.-Giovanna-de-Abreu-Martins.webp"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="equipe" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Nossa Equipe</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Corpo Técnico Especializado
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Experiência médica e pericial de alto nível para fundamentar suas demandas judiciais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {team.map((doc, index) => {
            const isExpanded = expandedIndex === index;
            const hasMore = doc.qualifications.length > 3;
            const displayedQualifications = isExpanded ? doc.qualifications : doc.qualifications.slice(0, 3);

            return (
              <div key={index} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-500 flex flex-col h-full">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-brand-50 shadow-sm transition-transform hover:scale-[1.02]">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{doc.name}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                          <Award className="h-4 w-4 text-brand-600" />
                          <span className="font-semibold">CRM:</span> {doc.crm}
                        </div>
                        {doc.rqe && (
                          <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Award className="h-4 w-4 text-brand-600" />
                            <span className="font-semibold">RQE:</span> {doc.rqe}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 relative flex-1 flex flex-col">
                    <h4 className="flex items-center gap-2 text-brand-800 font-bold mb-4 border-b border-brand-50 pb-2">
                      <GraduationCap className="h-5 w-5" />
                      Qualificações e Experiência
                    </h4>
                    
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {displayedQualifications.map((item, qIndex) => (
                          <li key={qIndex} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      {hasMore ? (
                        <button 
                          onClick={() => toggleExpand(index)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold hover:bg-brand-100 transition-all group w-full md:w-auto justify-center"
                        >
                          {isExpanded ? (
                            <>
                              Ver menos <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                          ) : (
                            <>
                              Ver todas qualificações <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                            </>
                          )}
                        </button>
                      ) : (
                        <div className="h-[36px]"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;