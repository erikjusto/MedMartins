import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState({
    name: 'Juiz de Fora',
    query: 'Juiz+de+Fora,Minas+Gerais'
  });

  const locationsList = [
    { name: 'Juiz de Fora', query: 'Juiz+de+Fora,Minas+Gerais' },
    { name: 'São João del-Rei', query: 'São+João+del-Rei,Minas+Gerais' },
    { name: 'Barbacena', query: 'Barbacena,Minas+Gerais' },
    { name: 'Região Vertentes', query: 'São+João+del-Rei,Minas+Gerais' }
  ];

  return (
    <section id="localizacao" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="bg-slate-100 rounded-3xl p-2 h-[480px] relative overflow-hidden shadow-inner transition-all duration-300">
                <iframe 
                  key={activeLocation.name} // Force reload on change
                  width="100%" 
                  height="100%" 
                  className="rounded-2xl w-full h-full"
                  frameBorder="0" 
                  title={`Mapa de Atuação - ${activeLocation.name}`}
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${activeLocation.query}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                >
                </iframe>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium text-slate-600 shadow-sm pointer-events-none border border-slate-200">
                  Visualizando: {activeLocation.name}
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Onde Atuamos</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center text-xl font-bold text-brand-700 mb-3">
                  <span className="bg-brand-100 p-1.5 rounded-md mr-3">🇧🇷</span>
                  Atendimento Nacional (Remoto)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Para análises documentais, elaboração de quesitos e impugnações, a geografia não é barreira. 
                  Recebemos a documentação digitalizada, analisamos e entregamos o parecer técnico em PDF assinado digitalmente.
                  <br/><span className="text-sm font-semibold mt-2 block">Ideal para: Previdenciário, Trabalhista e Securitário em qualquer estado.</span>
                </p>
              </div>

              <div className="h-px bg-slate-100 w-full"></div>

              <div>
                <h3 className="flex items-center text-xl font-bold text-brand-700 mb-3">
                  <span className="bg-brand-100 p-1.5 rounded-md mr-3">📍</span>
                  Atendimento Presencial (Regional)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Quando o caso exige acompanhamento in loco da perícia oficial (exame físico do periciado), 
                  atuamos com deslocamento para as seguintes cidades e arredores. 
                  <span className="text-sm text-brand-600 font-medium ml-1">Clique para ver no mapa:</span>
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {locationsList.map((loc) => (
                    <li 
                      key={loc.name}
                      onClick={() => setActiveLocation(loc)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                        activeLocation.name === loc.name 
                        ? 'bg-brand-50 border-brand-300 text-brand-700 shadow-sm ring-1 ring-brand-200' 
                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-white hover:border-brand-200 hover:text-brand-600'
                      }`}
                    >
                      <MapPin className={`h-4 w-4 ${activeLocation.name === loc.name ? 'text-brand-600 fill-brand-100' : 'text-slate-400'}`} /> 
                      {loc.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;