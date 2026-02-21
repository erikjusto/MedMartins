import React, { useState, useEffect } from 'react';
import { MapPin, Globe, MessageCircle, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://blog.ipog.edu.br/wp-content/uploads/2017/08/perito-m%C3%A9dico.jpg",
      alt: "Médico perito analisando documentos"
    },
    {
      url: "https://cdn.dev.portal.estacio.br/tmp412k6ro7_ffb2139029.jpeg",
      alt: "Medicina e Direito"
    },
    {
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
      alt: "Análise técnica de processos"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1500; // Consistent slower duration
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[85vh] flex flex-col justify-center bg-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Added a backdrop to text content to ensure readability without masking the whole image */}
        <div className="text-center max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
            <span className="text-sm font-medium text-brand-800 tracking-wide uppercase">Assistência Técnica Médica Especializada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6 drop-shadow-sm">
            Traduzindo a medicina para o <span className="text-brand-700 relative whitespace-nowrap">
               sucesso jurídico
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-900 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Potencialize seus resultados com pareceres técnicos robustos e quesitos estratégicos.
            Atuação remota em todo o Brasil e presencial na região de Minas Gerais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToId('contato')} 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-brand-700 hover:bg-brand-800 shadow-lg shadow-brand-700/30 transition-all transform hover:-translate-y-1"
            >
              <FileText className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </button>
            <button 
              onClick={() => scrollToId('ai-consult')} 
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white/80 backdrop-blur hover:bg-white hover:border-brand-300 transition-all shadow-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Fazer Pré-Análise
            </button>
          </div>

          {/* Feature Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                <Globe className="h-6 w-6 text-brand-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Atendimento Brasil (Remoto)</h3>
                <p className="text-sm text-slate-600 mt-1">Análise documental, pareceres técnicos e elaboração de quesitos para processos em qualquer estado.</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-3 rounded-lg shrink-0">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Perícias Presenciais (MG)</h3>
                <p className="text-sm text-slate-600 mt-1">Acompanhamento in loco em São João del-Rei, Juiz de Fora e Barbacena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;