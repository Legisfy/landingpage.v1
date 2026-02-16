import React from 'react';
import { ClipboardList, GitMerge, Calendar, Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <ClipboardList className="text-white" />,
      title: "Demandas",
      description: "Centralize, acompanhe e priorize todas as demandas do gabinete com rastreabilidade completa."
    },
    {
      icon: <GitMerge className="text-white" />,
      title: "Indicações",
      description: "Gerencie indicações com histórico, status e responsáveis definidos em um fluxo organizado."
    },
    {
      icon: <Calendar className="text-white" />,
      title: "Agenda",
      description: "Estruture compromissos e prazos com visão clara da rotina do mandato."
    },
    {
      icon: <Users className="text-white" />,
      title: "Equipe",
      description: "Coordene assessores, tarefas e responsabilidades em um painel unificado."
    },
    {
      icon: <Zap className="text-white" />,
      title: "Assessor IA",
      description: "Assistente inteligente 24/7 para atendimento, triagem e automação interna."
    },
    {
      icon: <Trophy className="text-white" />,
      title: "Gamificação",
      description: "Metas, pontuação e performance para engajar a equipe e elevar a produtividade."
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
