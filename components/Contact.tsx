import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Parecer Técnico (Remoto)',
    message: ''
  });

  const maskPhone = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength <= 2) return phoneNumber;
    if (phoneNumberLength <= 6) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    if (phoneNumberLength <= 10) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      setFormData(prev => ({ ...prev, [id]: maskPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5532987132926';
    
    const text = `*Nova Solicitação de Contato - MEDMARTINS*\n\n` +
                 `*Nome:* ${formData.name}\n` +
                 `*Serviço:* ${formData.service}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Telefone:* ${formData.phone}\n` +
                 `*Mensagem:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 relative scroll-mt-20">
      <style>{`
        @keyframes subtle-pulse {
          0%, 80%, 100% { transform: scale(1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          90% { transform: scale(1.03); box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.4); }
        }
        @keyframes float-bubble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .whatsapp-pulse {
          animation: subtle-pulse 5s infinite ease-in-out;
        }
        .whatsapp-pulse:hover {
          animation: none;
        }
        .float-bubble {
          animation: float-bubble 3s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Vamos analisar seu caso?</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Envie uma mensagem para agendar uma conversa inicial ou solicitar um orçamento para parecer técnico.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-800 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Telefone / WhatsApp</p>
                      <p className="text-lg font-semibold">(32) 98713-2926</p>
                    </div>
                  </div>
                  
                  <a 
                    href="mailto:medmartinsservicosmedicos@gmail.com" 
                    className="flex items-center gap-4 group/email transition-colors hover:text-brand-300"
                  >
                    <div className="bg-slate-800 p-3 rounded-full group-hover/email:bg-slate-700 transition-colors">
                      <Mail className="h-6 w-6 text-brand-400" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-lg font-semibold break-all leading-tight">medmartinsservicosmedicos@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="mt-10 rounded-2xl overflow-hidden border border-slate-700/50 relative h-48 group shadow-lg">
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10 duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Análise de documentação médica" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-20 z-20"></div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-slate-500">
                  *Sigilo médico e profissional garantido em todas as comunicações.
                </p>
              </div>
            </div>

            <div className="p-10 lg:p-16">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="mt-1 block w-full rounded-lg border-slate-300 border p-3 shadow-sm focus:border-brand-500 focus:ring-brand-500" 
                    placeholder="Seu nome ou escritório"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="mt-1 block w-full rounded-lg border-slate-300 border p-3 shadow-sm focus:border-brand-500 focus:ring-brand-500" 
                      placeholder="nome@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      maxLength={15}
                      className="mt-1 block w-full rounded-lg border-slate-300 border p-3 shadow-sm focus:border-brand-500 focus:ring-brand-500" 
                      placeholder="(32) 98713-2926"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">Interesse Principal</label>
                  <select 
                    id="service" 
                    className="mt-1 block w-full rounded-lg border-slate-300 border p-3 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Parecer Técnico (Remoto)</option>
                    <option>Acompanhamento de Perícia (MG)</option>
                    <option>Elaboração de Quesitos</option>
                    <option>Impugnação de Laudo</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    className="mt-1 block w-full rounded-lg border-slate-300 border p-3 shadow-sm focus:border-brand-500 focus:ring-brand-500" 
                    placeholder="Breve descrição da demanda..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="flex items-center justify-center w-full bg-brand-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                  Enviar Solicitação
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Contacts Group */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Chat Bubble */}
        <div className="mb-1 bg-white text-slate-800 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 text-sm font-medium float-bubble relative hidden sm:block">
          Dúvidas? Fale comigo agora.
          <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
        </div>
        
        {/* Call Button */}
        <a 
          href="tel:+5532987132926" 
          className="bg-brand-600 text-white p-4 rounded-full shadow-2xl hover:bg-brand-700 hover:scale-110 transition-all flex items-center gap-2 group"
          title="Ligar para a MEDMARTINS"
        >
          <Phone className="h-6 w-6" />
          <span className="overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap font-medium max-w-0 group-hover:max-w-xs px-0 group-hover:px-2">
            Ligar Agora
          </span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/5532987132926" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center gap-2 group whatsapp-pulse"
          title="Falar no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap font-medium max-w-0 group-hover:max-w-xs px-0 group-hover:px-2">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;