
import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "Vereador",
    subtitle: "Ideal para Início",
    monthlyPrice: "497,00",
    annualPrice: "4.490,00",
    description: "Perfeito para mandatos parlamentares que buscam organizar o atendimento básico.",
    features: [
      "Até 5.000 eleitores",
      "Gestão de Demandas Básica",
      "Agenda do Parlamentar",
      "Relatórios Mensais",
      "Suporte via E-mail"
    ],
    buttonText: "Começar Agora",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=vereador&cycle=monthly",
      yearly: "https://pay.legisfy.app.br/?plan=vereador&cycle=yearly"
    },
    discount: "25%",
    popular: false
  },
  {
    name: "Deputado",
    subtitle: "Mais Popular",
    monthlyPrice: "997,00",
    annualPrice: "8.900,00",
    description: "A solução completa para gabinetes com alto volume de demandas e equipe.",
    features: [
      "Eleitores Ilimitados",
      "Assessoria com IA Básica",
      "Gestão de Equipe Completa",
      "Metas e Produtividade",
      "Suporte via WhatsApp"
    ],
    buttonText: "Começar Agora",
    links: {
      monthly: "https://pay.legisfy.app.br/?plan=deputado&cycle=monthly",
      yearly: "https://pay.legisfy.app.br/?plan=deputado&cycle=yearly"
    },
    discount: "26%",
    popular: true
  },
  {
    name: "Business",
    subtitle: "Gestão de Equipe",
    monthlyPrice: "497,00",
    annualPrice: "4.400,00",
    description: "Ideal para empresas que dividem o estoque por departamentos ou centros de custo.",
    features: [
      "Capacidade: Até 03 Usuários | Até 500 Produtos",
      "Controle por Setores (Centros de Custo)",
      "Relatórios Gerenciais para decisão",
      "Tudo do Plano Pro"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=business&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=business&cycle=yearly"
    },
    discount: "26%",
    popular: true
  },
  {
    name: "Intelligence",
    subtitle: "Poder da IA 💎",
    monthlyPrice: "997,00",
    annualPrice: "8.900,00",
    description: "O nível máximo de eficiência. A Aura IA trabalha para você, prevendo erros.",
    features: [
      "Capacidade: Até 05 Usuários | Ilimitados",
      "Aura IA: Analisa giro e sugere compras",
      "Alertas de Anomalia automáticos",
      "Relatórios Inteligentes (Insights)",
      "Tudo do Plano Business"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=intelligence&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=intelligence&cycle=yearly"
    },
    discount: "26%",
    popular: false
  },
];

const enterprisePlan = {
  name: "Enterprise",
  subtitle: "Sob Demanda",
  description: "Para empresas que precisam de recursos específicos e integrações customizadas. Podemos desenvolver soluções exclusivas para o seu negócio.",
  features: [
    "Recursos Específicos sob demanda",
    "Desenvolvimento Customizado",
    "Integrações de API ilimitadas",
    "Gerente de Conta Próprio",
    "Suporte via WhatsApp 24/7"
  ],
  buttonText: "Falar com Especialista",
  link: "https://wa.me/5511999999999" // TODO: Update with real link
};

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="precos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A ferramenta que se <br /><span className="text-gradient">paga logo no primeiro mês.</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            Escolha hoje o plano que melhor se adapta à realidade da sua empresa e <span className="text-blue-400 font-bold whitespace-nowrap">teste grátis por 07 dias.</span>
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-bold transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>MENSAL</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                className="w-5 h-5 bg-white rounded-full shadow-lg shadow-white/50"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>ANUAL</span>
              <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-green-500/30">
                ECONOMIZE ~26%
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative p-6 rounded-3xl border flex flex-col ${plan.popular
              ? 'bg-blue-600/10 border-blue-500/50 z-10 shadow-2xl shadow-blue-600/20'
              : 'bg-white/5 border-white/10'
              } transition-all duration-300 group`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                Mais Popular
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-300">{plan.subtitle}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{plan.description}</p>
            </div>

            <div className="mb-6 h-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingCycle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline gap-1"
                >
                  {plan.monthlyPrice !== "Personalizado" && (
                    <span className="text-gray-400 font-medium text-sm">R$</span>
                  )}
                  <span className={`${plan.monthlyPrice === "Personalizado" ? 'text-2xl' : 'text-4xl'} font-black text-white`}>
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  {plan.monthlyPrice !== "Personalizado" && (
                    <span className="text-gray-500 text-xs">
                      {billingCycle === 'monthly' ? '/mês' : '/ano'}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              key={billingCycle}
              href={billingCycle === 'monthly' ? plan.links.monthly : plan.links.yearly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                ? 'bg-white hover:bg-gray-200 text-black shadow-lg shadow-white/10'
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
            >
              {plan.buttonText}
            </motion.a>

            <div className="mt-4 flex items-center justify-center gap-1 text-[9px] text-gray-500 uppercase tracking-tight">
              <Info size={10} />
              Sem multas ou fidelidade
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32 rounded-full" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-4 justify-center lg:justify-start">
              <h3 className="text-2xl md:text-3xl font-bold">{enterprisePlan.name}</h3>
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {enterprisePlan.subtitle}
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl">
              {enterprisePlan.description}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              {enterprisePlan.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-blue-500" />
                  {feature}
                </div>
              ))}
              <span className="text-blue-400 text-sm font-bold flex items-center gap-1">
                + muito mais
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto text-center">
            <div className="mb-6">
              <span className="text-sm text-gray-500 block mb-1">Inicie seu projeto agora</span>
              <span className="text-3xl font-black text-white">Preço Adaptável</span>
            </div>
            <motion.a
              href={enterprisePlan.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all rounded-2xl font-bold text-lg shadow-xl shadow-white/5"
            >
              {enterprisePlan.buttonText}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
