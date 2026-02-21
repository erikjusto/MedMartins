import React from 'react';
import { Stethoscope, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex items-center gap-2 text-white">
          <Stethoscope className="h-6 w-6" />
          <span className="font-serif font-bold text-lg uppercase">MEDMARTINS PERÍCIAS</span>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="transform hover:scale-110 hover:text-brand-400 transition-all duration-200" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="transform hover:scale-110 hover:text-brand-400 transition-all duration-200" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="transform hover:scale-110 hover:text-brand-400 transition-all duration-200" aria-label="YouTube">
            <Youtube className="h-6 w-6" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-1">Assistência Técnica Médica Judiciária.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;