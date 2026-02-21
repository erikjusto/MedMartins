import React from 'react';
import { FileText, MessageSquare, AlertCircle, Search, ClipboardCheck, Scale } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: "Parecer Técnico Prévio",
      description: "Análise minuciosa da documentação médica para avaliar a viabilidade da ação antes do ingresso judicial."
    },
    {
      icon: MessageSquare,
      title: "Elaboração de Quesitos",
      description: "Perguntas estratégicas formuladas para conduzir o perito judicial às conclusões favoráveis à tese do seu cliente."
    },
    {
      icon: AlertCircle,
      title: "Impugnação de Laudo",
      description: "Contestação técnica fundamentada quando o laudo pericial oficial apresentar inconsistências ou erros médicos."
    },
    {
      icon: ClipboardCheck,
      title: "Análise Documental",
      description: "Organização e tradução da 'linguagem médica' para termos jurídicos compreensíveis para o magistrado."
    },
    {
      icon: Scale,
      title: "Assistência Completa",
      description: "Acompanhamento do início ao fim do processo, garantindo suporte técnico em todas as fases da perícia."
    },
    {
      icon: FileText,
      title: "Parecer Ad Hominem",
      description: "Parecer detalhado focado especificamente na capacidade laborativa ou nexo causal do periciado."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">O que oferecemos</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Soluções Técnicas para Advogados
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Transformamos complexidade médica em clareza jurídica, aumentando as chances de êxito do seu processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group bg-slate-50 p-8 rounded-2xl hover:bg-white border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-2xl"></div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-100 text-brand-600 rounded-xl mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;