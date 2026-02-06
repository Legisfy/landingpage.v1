
import React from 'react';
import { ShieldCheck, BarChart3, Zap, Layers, Package, MonitorSmartphone, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <MonitorSmartphone className="text-blue-400" />,
      title: "Extrema Simplicidade",
      description: "Interface limpa e intuitiva projetada para que qualquer colaborador possa operar o sistema sem treinamentos exaustivos."
    },
    {
      icon: <BarChart3 className="text-blue-400" />,
      title: "Relatórios de Alto Impacto",
      description: "Acesse KPIs valiosos que mostram curvas de consumo, materiais obsoletos e sugestões de otimização instantâneas."
    },
    {
      icon: <Coins className="text-blue-400" />,
      title: "Gestão de Economia",
      description: "Reduza compras desnecessárias e elimine perdas por validade ou má gestão. Foco total na saúde do seu caixa."
    },
    {
      icon: <Zap className="text-blue-400" />,
      title: "Automação Inteligente",
      description: "Reposição automática baseada em inteligência artificial que entende o ritmo da sua empresa e evita falta de insumos."
    },
    {
      icon: <ShieldCheck className="text-blue-400" />,
      title: "Segurança Total",
      description: "Rastreabilidade completa de cada item. Saiba quem, quando e para onde cada material foi retirado do estoque."
    },
    {
      icon: <Layers className="text-blue-400" />,
      title: "Escalabilidade",
      description: "Do pequeno almoxarifado a centros de distribuição complexos. A Aura cresce junto com a sua demanda operacional."
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
          className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
