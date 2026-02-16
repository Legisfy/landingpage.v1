
import React, { useState } from 'react';
import { Check, Info, ArrowRight, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "Ascensão",
    subtitle: "O início da estrutura",
    monthlyPrice: "Gratuito",
    annualPrice: "Gratuito",
    description: "Para gabinetes que estão saindo do papel e organizando a base. Ascensão é controle essencial: eleitores, demandas e rotina sob comando. Sem excesso, sem complexidade — só o que é necessário para começar certo.",
    targetAudience: "Quem está formando o núcleo do gabinete.",
    features: [
      "Até 5.000 eleitores",
      "Gestão de Demandas Básica",
      "Agenda do Parlamentar",
      "Relatórios Mensais",
      "Suporte via E-mail"
    ],
    buttonText: "Começar Grátis",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=free"
    },
    discount: null,
    popular: false
  },
  {
    name: "Consolidação",
    subtitle: "A ordem interna",
    monthlyPrice: "497,00",
    annualPrice: "4.490,00",
    description: "Aqui o gabinete deixa de sobreviver e passa a operar com método. Equipe organizada, produtividade medida e processos claros. Consolidação é disciplina: cada ação registrada, cada meta acompanhada.",
    targetAudience: "Gabinetes que precisam de estabilidade e controle real.",
    features: [
      "Eleitores Ilimitados",
      "Assessoria com IA Básica",
      "Gestão de Equipe Completa",
      "Metas e Produtividade",
      "Suporte via WhatsApp"
    ],
    buttonText: "Começar Agora",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=consolidacao&cycle=monthly"
    },
    discount: "26%",
    popular: false
  },
  {
    name: "Expansão",
    subtitle: "Crescimento com estratégia",
    monthlyPrice: "997,00",
    annualPrice: "8.900,00",
    description: "O gabinete cresce — e sem sistema, o caos cresce junto. Expansão transforma volume em estratégia: gestão de equipe, escala de eleitores, inteligência operacional e controle total.",
    targetAudience: "Quem quer ampliar influência sem perder o controle.",
    features: [
      "Capacidade: Até 03 Usuários",
      "Monitoramento de Demandas",
      "Controle de Equipe de Gabinete",
      "Relatórios de Eficiência",
      "Tudo do Plano Consolidação"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=expansao&cycle=monthly"
    },
    discount: "26%",
    popular: true
  },
  {
    name: "Domínio",
    subtitle: "Poder por inteligência",
    monthlyPrice: "1.497,00",
    annualPrice: "14.900,00",
    description: "No topo, decisão não é instinto — é dados. Domínio é gabinete guiado por análise, previsibilidade e visão estratégica. A operação deixa de ser reativa e passa a ser calculada.",
    targetAudience: "Quem quer liderar com inteligência, não apenas administrar.",
    features: [
      "Capacidade: Ilimitada de Usuários",
      "Legisfy IA: Análise de sentimento",
      "Alertas de Crise de Imagem",
      "Relatórios Preditivos de Votos",
      "Tudo do Plano Expansão"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=dominio&cycle=monthly"
    },
    discount: "26%",
    popular: false
  },
];



const PricingSection: React.FC = () => {

  return (
    <section id="precos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white font-semibold tracking-wider uppercase text-sm mb-4 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A ferramenta que se <br /><span className="text-gradient">paga logo no primeiro mês.</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            Escolha hoje o plano que melhor se adapta à realidade da sua empresa e <span className="text-white font-bold whitespace-nowrap">teste grátis por 07 dias.</span>
          </p>


        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} index={i} />
        ))}
      </div>


    </section>
  );
};

// Sub-component for individual card with Flip effect
const PricingCard = ({ plan, index }: { plan: any, index: number }) => {
  return (
    <div className="flip-card-container h-[500px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        // The motion.div is now just a wrapper for the animation on entry.
        // The flip logic is inside the `flip-card-inner` div below.
        className="h-full w-full"
      >
        <div className="flip-card-inner">
          {/* ================= FRONT SIDE ================= */}
          <div className={`flip-card-front rounded-3xl border flex flex-col overflow-hidden ${plan.popular
            ? 'bg-white/5 border-white/50 shadow-2xl shadow-white/10'
            : 'bg-black/40 border-white/10'
            }`}>

            {plan.popular && (
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest z-10">
                Popular
              </div>
            )}

            {/* Front Header */}
            <div className="p-6 pb-2">
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                {plan.subtitle}
              </p>
            </div>

            {/* Front Price */}
            <div className="px-6 pb-6 border-b border-white/5">
              <div className="flex items-baseline gap-1">
                {plan.monthlyPrice !== "Gratuito" && (
                  <span className="text-gray-400 font-medium text-sm">R$</span>
                )}
                <span className={`${plan.monthlyPrice === "Gratuito" ? 'text-3xl' : 'text-5xl'} font-bold text-white tracking-tighter`}>
                  {plan.monthlyPrice}
                </span>
                {plan.monthlyPrice !== "Gratuito" && (
                  <span className="text-gray-500 text-xs font-medium">/mês</span>
                )}
              </div>
            </div>

            {/* Front Features */}
            <div className="p-6 flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-gray-500'}`} />
                    <span className="leading-snug text-xs font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hint to Flip */}
            <div className="p-4 text-center border-t border-white/5 bg-white/5">
              <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Info size={12} /> Passe o mouse para detalhes
              </span>
            </div>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div className={`flip-card-back rounded-3xl border flex flex-col p-8 ${plan.popular
            ? 'bg-gradient-to-b from-gray-900 to-black border-white/50'
            : 'bg-gradient-to-b from-gray-900 via-gray-900 to-black border-white/10'
            }`}>
            <div className="flex-grow flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Sobre o Plano</span>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/20 pl-4 italic">
                  "{plan.description}"
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-white" size={20} />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Ideal Para</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed p-4 bg-white/5 rounded-xl border border-white/5">
                  {plan.targetAudience}
                </p>
              </div>
            </div>

            <a
              href={plan.links.monthly}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                ? 'bg-white hover:bg-gray-200 text-black shadow-lg shadow-white/10'
                : plan.monthlyPrice === "Gratuito"
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
            >
              {plan.buttonText}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PricingSection;
