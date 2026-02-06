
import React from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    subtitle: "O Essencial",
    price: "99,90",
    description: "Ideal para pequenos negócios que precisam sair do controle manual e profissionalizar o estoque.",
    features: [
      "Capacidade: 01 Usuário | Até 400 Produtos",
      "Gestão de Estoque Completa",
      "Movimentações Diárias em tempo real",
      "Importação Ágil de planilhas",
      "Exportação de Dados (Excel/CSV)"
    ],
    buttonText: "Testar Agora",
    checkoutUrl: "https://pay.cakto.com.br/ki3bj9s",
    popular: false
  },
  {
    name: "Pro",
    subtitle: "Mais Controle",
    price: "297,00",
    description: "Para quem já tem um fluxo constante e precisa de ferramentas de reposição.",
    features: [
      "Capacidade: 01 Usuário | Até 500 Produtos",
      "Módulo de Compras e fornecedores",
      "Suporte Prioritário",
      "Tudo do Plano Starter"
    ],
    buttonText: "Testar Agora",
    checkoutUrl: "https://pay.cakto.com.br/hoq4v27_751230",
    popular: false
  },
  {
    name: "Business",
    subtitle: "Gestão de Equipe",
    price: "497,00",
    description: "Ideal para empresas que dividem o estoque por departamentos ou centros de custo.",
    features: [
      "Capacidade: Até 03 Usuários | Até 500 Produtos",
      "Controle por Setores (Centros de Custo)",
      "Relatórios Gerenciais para decisão",
      "Tudo do Plano Pro"
    ],
    buttonText: "Testar Agora",
    checkoutUrl: "https://pay.cakto.com.br/mk8hcqn",
    popular: true
  },
  {
    name: "Intelligence",
    subtitle: "Poder da IA 💎",
    price: "997,00",
    description: "O nível máximo de eficiência. A Aura IA trabalha para você, prevendo erros.",
    features: [
      "Capacidade: Até 05 Usuários | Ilimitados",
      "Aura IA: Analisa giro e sugere compras",
      "Alertas de Anomalia automáticos",
      "Relatórios Inteligentes (Insights)",
      "Tudo do Plano Business"
    ],
    buttonText: "Testar Agora",
    checkoutUrl: "https://pay.cakto.com.br/3wvss8v",
    popular: false
  }
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
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A ferramenta que se <br /><span className="text-gradient">paga logo no primeiro mês.</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Escolha hoje o plano que melhor se adapta à realidade da sua empresa e <span className="text-blue-400 font-bold whitespace-nowrap">teste grátis por 07 dias.</span>
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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

            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-gray-400 font-medium text-sm">R$</span>
              <span className="text-4xl font-black text-white">{plan.price}</span>
              <span className="text-gray-500 text-xs">/mês</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={plan.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
            >
              {plan.buttonText}
            </a>

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
