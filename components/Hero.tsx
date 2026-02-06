
import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-6 z-30">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Social Proof Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm"
          >
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="User"
                  className="w-6 h-6 rounded-full border-2 border-[#030712] object-cover"
                />
              ))}
            </div>
            <span className="text-gray-300 text-xs font-medium pr-1">
              <span className="text-blue-400 font-bold">+ R$ 50mil</span> em custos reduzidos
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-4 leading-[1.1]">
            Almoxarifado Inteligente <br />
            Com Foco em <span className="text-gradient">Gestão de Economia</span> <br />
            para Sua Empresa
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Elimine planilhas obsoletas. Aura centraliza, automatiza e otimiza seu almoxarifado com inteligência artificial de última geração para reduzir custos operacionais.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a href="#precos" className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 transition-all rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 text-white">
              Testar Agora
              <ArrowRight size={18} />
            </a>
            <a href="#demonstracao" className="w-full sm:w-auto px-6 py-2.5 bg-white/5 hover:bg-white/10 transition-all border border-white/10 rounded-full font-bold text-base flex items-center justify-center gap-2 text-white">
              <Play size={18} className="fill-white" />
              Ver Demonstração
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
