
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pronto para digitalizar seu estoque?</h2>
          <p className="text-blue-50 text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Junte-se a milhares de empresas que já otimizaram seus almoxarifados com a Aura e transforme custos em economia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#precos" className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 hover:bg-blue-50 transition-all rounded-full font-bold text-xl flex items-center justify-center gap-3">
              Testar Agora
              <ArrowRight size={24} />
            </a>
            <a
              href="https://wa.me/5527999205531?text=Olá,%20quero%20conhecer%20a%20Aura%20Almoxarifado%20Inteligente"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-black/20 hover:bg-black/30 transition-all border border-white/20 rounded-full font-bold text-xl text-white flex items-center justify-center"
            >
              Falar com Especialista
            </a>
          </div>
          <p className="mt-8 text-blue-200 text-sm">Teste grátis por 07 dias. Sem compromisso.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
