
import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    subtitle: "O Essencial",
    monthlyPrice: "99,90",
    annualPrice: "890,00",
    description: "Ideal para pequenos negócios que precisam sair do controle manual e profissionalizar o estoque.",
    features: [
      "Capacidade: 01 Usuário | Até 400 Produtos",
      "Gestão de Estoque Completa",
      "Movimentações Diárias em tempo real",
      "Importação Ágil de planilhas",
      "Exportação de Dados (Excel/CSV)"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=starter&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=starter&cycle=yearly"
    },
    discount: "26%",
    popular: false
  },
  {
    name: "Pro",
    subtitle: "Mais Controle",
    monthlyPrice: "297,00",
    annualPrice: "2.600,00",
    description: "Para quem já tem um fluxo constante e precisa de ferramentas de reposição.",
    features: [
      "Capacidade: 01 Usuário | Até 500 Produtos",
      "Módulo de Compras e fornecedores",
      "Suporte Prioritário",
      "Tudo do Plano Starter"
    ],
    buttonText: "Testar Agora",
    links: {
      monthly: "https://pay.auraalmoxarifado.com.br/?plan=pro&cycle=monthly",
      yearly: "https://pay.auraalmoxarifado.com.br/?plan=pro&cycle=yearly"
    },
    discount: "27%",
    popular: false
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
  {
    name: "Enterprise",
    subtitle: "Sob Demanda",
    monthlyPrice: "Personalizado",
    annualPrice: "Personalizado",
    description: "Para empresas que precisam de recursos específicos e integrações customizadas.",
    features: [
      "Recursos Específicos sob demanda",
      "Desenvolvimento Customizado",
      "Integrações de API ilimitadas",
      "Gerente de Conta Próprio",
      "Suporte via WhatsApp 24/7"
    ],
    buttonText: "Entre em Contato",
    links: {
      monthly: "https://wa.me/5511999999999", // Placeholder, ideally a generic contact or WhatsApp
      yearly: "https://wa.me/5511999999999"
    },
    discount: "Custom",
    popular: false
  }
];

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
                className="w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
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
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-blue-300">{plan.subtitle}</span>
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
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
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
    </section>
  );
};

export default PricingSection;
