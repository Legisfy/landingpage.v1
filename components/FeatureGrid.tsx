
import React from 'react';
import { ShieldCheck, BarChart3, Zap, Layers, Package, MonitorSmartphone, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <MonitorSmartphone className="text-white" />,
      title: "Gestão de Eleitores",
      description: "Organize sua base eleitoral de forma eficiente, registrando demandas e acompanhando cada atendimento."
    },
    {
      icon: <Zap className="text-white" />,
      title: "Assessoria com IA 24/7",
      description: "Um assistente inteligente que atende munícipes e automatiza processos internos do seu gabinete."
    },
    {
      icon: <Layers className="text-white" />,
      title: "Gestão de Agenda e Equipe",
      description: "Coordene compromissos, tarefas e metas da sua equipe em um painel centralizado e intuitivo."
    },
    {
      icon: <BarChart3 className="text-white" />,
      title: "Relatórios de Impacto",
      description: "Acesse dados estratégicos sobre sua atuação parlamentar e o engajamento da população."
    },
    {
      icon: <ShieldCheck className="text-white" />,
      title: "Segurança de Dados",
      description: "Proteção total das informações do seu mandato com criptografia e backups automáticos."
    },
    {
      icon: <Coins className="text-white" />,
      title: "Produtividade Máxima",
      description: "Otimize recursos e tempo da sua equipe com fluxos de trabalho inteligentes e automatizados."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {f.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{f.title}</h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
            {f.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
