
import React from 'react';
import { Check, ArrowRight, Brain, Map, Users, Target, Zap, Star, Shield, MessageSquare, BarChart3, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';

const mainPlans = [
  {
    name: "Starter",
    subtitle: "Para gabinetes que estão começando",
    monthlyPrice: "197",
    description: "Plano ideal para gabinetes pequenos que precisam sair do papel e começar a organizar eleitores, demandas e atividades do mandato em um único sistema.",
    features: [
      "Até 1 usuário",
      "Até 500 eleitores cadastrados",
      "Até 30 demandas por mês",
      "Até 50 indicações por mês",
      "Agenda integrada",
    ],
    link: "https://pay.legisfy.app.br/?plan=starter&cycle=monthly",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "Para gabinetes em crescimento",
    monthlyPrice: "297",
    description: "Permite visualizar eleitores e demandas no mapa da cidade, ajudando o gabinete a entender onde estão seus apoios e prioridades.",
    features: [
      "Até 2 usuários",
      "Até 800 eleitores cadastrados",
      "Até 50 demandas por mês",
      "Até 80 indicações por mês",
      "Agenda integrada",
      "Mapa Inteligente",
    ],
    link: "https://pay.legisfy.app.br/?plan=pro&cycle=monthly",
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Para gabinetes estruturados",
    monthlyPrice: "397",
    description: "Plano indicado para gabinetes que possuem equipe e precisam acompanhar produtividade, metas e desempenho dos assessores.",
    features: [
      "Até 5 usuários",
      "Até 1000 eleitores cadastrados",
      "Até 80 demandas por mês",
      "Até 100 indicações por mês",
      "Agenda integrada",
      "Mapa Inteligente",
      "Metas e pontuação da equipe",
      "Gestão de equipe",
      "Gestão de projeto de lei",
    ],
    link: "https://pay.legisfy.app.br/?plan=premium&cycle=monthly",
    popular: true,
  },
  {
    name: "MAX",
    subtitle: "Para mandatos com operação maior",
    monthlyPrice: "597",
    description: "Plano completo para gabinetes com grande volume de demandas e equipe maior, oferecendo suporte prioritário e mais capacidade operacional.",
    features: [
      "Até 12 usuários",
      "Até 3000 eleitores cadastrados",
      "Até 200 demandas por mês",
      "Até 300 indicações por mês",
      "Agenda integrada",
      "Mapa Inteligente",
      "Metas e pontuação da equipe",
      "Gestão de equipe",
      "Gestão de projeto de lei",
      "Suporte dedicado",
    ],
    link: "https://pay.legisfy.app.br/?plan=max&cycle=monthly",
    popular: false,
  },
];

const intelligencePlan = {
  name: "Intelligence",
  monthlyPrice: "1.997",
  description: "Para vereadores com mandato estruturado, equipe de gabinete ativa e necessidade de escalar o atendimento ao eleitor com inteligência e controle total.",
  features: [
    { icon: <Users size={16} className="text-gray-300" />, label: "Até 25 usuários" },
    { icon: <Infinity size={16} className="text-gray-300" />, label: "Eleitores ilimitados" },
    { icon: <Infinity size={16} className="text-gray-300" />, label: "Demandas ilimitadas" },
    { icon: <Infinity size={16} className="text-gray-300" />, label: "Indicações ilimitadas" },
    { icon: <Check size={16} className="text-gray-300" />, label: "Agenda integrada" },
    { icon: <Map size={16} className="text-gray-300" />, label: "Mapa Inteligente" },
    { icon: <MessageSquare size={16} className="text-gray-300" />, label: "Envio automático de mensagens de aniversário" },
    { icon: <MessageSquare size={16} className="text-gray-300" />, label: "Envio de mensagens em massa pelo WhatsApp" },
    { icon: <Target size={16} className="text-gray-300" />, label: "Metas e pontuação da equipe" },
    { icon: <Users size={16} className="text-gray-300" />, label: "Gestão completa de equipe" },
    { icon: <Check size={16} className="text-gray-300" />, label: "Gestão de projeto de lei" },
    { icon: <Brain size={16} className="text-gray-300" />, label: "Assessor IA" },
    { icon: <Shield size={16} className="text-gray-300" />, label: "Suporte dedicado prioritário" },
  ],
  link: "https://pay.legisfy.app.br/?plan=intelligence&cycle=monthly",
};

const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white font-semibold tracking-wider uppercase text-sm mb-4 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A ferramenta que se <br /><span className="text-gradient">paga logo no primeiro mês.</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            Escolha hoje o plano que melhor se adapta à realidade do seu gabinete.
          </p>

          {/* Objection Breakers Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Zap size={16} className="text-yellow-400 fill-yellow-400/20" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">07 Dias Gratuitos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Shield size={16} className="text-green-400" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">Cancelamento a qualquer momento</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <MessageSquare size={16} className="text-blue-400" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">Sem contrato de fidelidade</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Plans Grid — 4 cards in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {mainPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative rounded-3xl border flex flex-col overflow-hidden ${
              plan.popular
                ? 'bg-white/5 border-white/40 shadow-2xl shadow-white/10'
                : 'bg-black/40 border-white/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest z-10">
                Popular
              </div>
            )}

            <div className="absolute top-3 left-6">
               <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-black text-green-400 uppercase tracking-tighter">7 DIAS GRÁTIS</span>
               </div>
            </div>

            {/* Header */}
            <div className="p-6 pb-4">
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">{plan.subtitle}</p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-gray-400 font-medium text-sm">R$</span>
                <span className="text-4xl font-bold text-white tracking-tighter">{plan.monthlyPrice}</span>
                <span className="text-gray-500 text-xs font-medium">/mês</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-white/10 pl-3">
                {plan.description}
              </p>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-white/5" />

            {/* Features */}
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check size={14} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-gray-500'}`} />
                    <span className="leading-snug text-xs font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="p-5 pt-2">
              <div className="text-center mb-3">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Cancele quando quiser</p>
              </div>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-white hover:bg-gray-100 text-black shadow-lg shadow-white/10'
                    : 'bg-white/8 hover:bg-white/15 text-white border border-white/15'
                }`}
              >
                Inicie sua prova grátis
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ============================================================= */}
      {/* Intelligence Plan — Full-width highlight card below            */}
      {/* ============================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 40%, #131313 70%, #0d0d0d 100%)',
        }}
      >
        {/* Background glow — white/silver subtle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[30%] w-[500px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[10%] w-[350px] h-[250px] bg-white/[0.02] blur-[100px] rounded-full" />
        </div>

        {/* Top badge */}
        <div className="relative z-10 flex items-center justify-center pt-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-5 py-2">
            <Star size={14} className="text-white fill-white" />
            <span className="text-white text-xs font-black uppercase tracking-widest">Plano Intelligence — Para Vereadores</span>
            <Star size={14} className="text-white fill-white" />
          </div>
        </div>

        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Info */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                Intelligence
              </h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Para vereadores com mandato estruturado e equipe de gabinete</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-gray-400 text-lg font-medium">R$</span>
                <span className="text-6xl font-black text-white tracking-tighter">1.997</span>
                <span className="text-gray-400 text-sm font-medium">/mês</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                {intelligencePlan.description}
              </p>

              {/* Assessor IA callout */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-white/10 rounded-xl">
                    <Brain size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">Assessor IA</p>
                    <p className="text-gray-400 text-xs">Inteligência artificial integrada ao seu gabinete</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  O Assessor IA atua como um assessor digital do gabinete, auxiliando na organização de demandas, sugestão de respostas, criação de textos para indicações, geração de relatórios e priorização de demandas — tudo dentro da plataforma.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={intelligencePlan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-white/10 hover:shadow-white/20 text-sm"
                >
                  <Zap size={18} />
                  Iniciar Prova Grátis no Intelligence
                  <ArrowRight size={16} />
                </a>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-left md:ml-2">
                  7 dias gratuitos • Sem fidelidade • Cancelamento imediato
                </p>
              </div>
            </div>

            {/* Right — Features Grid */}
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-5">Tudo incluso no plano</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {intelligencePlan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl p-3.5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="shrink-0 p-1.5 bg-white/8 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-gray-200 text-xs font-medium leading-snug">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
