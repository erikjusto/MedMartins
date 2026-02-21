import React, { useState } from 'react';
import { Menu, X, Stethoscope, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: 'servicos' },
    { name: 'Áreas de Atuação', href: 'areas' },
    { name: 'Corpo Técnico', href: 'equipe' },
    { name: 'Localização', href: 'localizacao' },
    { name: 'Pré-Análise IA', href: 'ai-consult' },
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // Height of the fixed navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1500; // Duration in milliseconds (slower scroll)
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function: easeInOutQuad
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 text-brand-700">
              <Stethoscope className="h-8 w-8" />
              <span className="font-serif font-bold text-lg lg:text-xl tracking-tight uppercase">MEDMARTINS<span className="text-slate-600"> PERÍCIAS</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToId(link.href)}
                className="text-slate-600 hover:text-brand-600 px-1.5 lg:px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToId('contato')}
              className="inline-flex items-center bg-brand-700 text-white px-4 lg:px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-800 transition-colors shadow-lg shadow-brand-700/20 whitespace-nowrap"
            >
              <MessageSquare className="mr-2 h-4 w-4 shrink-0" />
              Falar com Especialista
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToId(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToId('contato')}
              className="flex items-center justify-center w-full mt-4 bg-brand-700 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-brand-800"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Falar com Especialista
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;