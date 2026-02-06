
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-glass rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que migrar para o <span className="text-blue-400">Aura</span>?</h2>
          <p className="text-gray-400 text-lg">Pare de lutar com ferramentas que não foram feitas para o seu negócio.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-black/20 p-8 rounded-2xl border border-red-500/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-2">
              <XCircle size={24} />
              Método Tradicional
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                Planilhas manuais propensas a erro humano
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                Falta de visibilidade em tempo real
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                Estoque parado ou falta súbita de material
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                Dificuldade em auditar baixas de estoque
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-blue-500/5 p-8 rounded-2xl border border-blue-500/30 ring-1 ring-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <CheckCircle2 size={24} />
              Aura Inteligente
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-200">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                Descobre onde o almoxarifado está perdendo dinheiro
              </li>
              <li className="flex items-center gap-4 text-gray-200">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                Prevê compras antes da emergência
              </li>
              <li className="flex items-center gap-4 text-gray-200">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                Evita estoque parado e compras por impulso
              </li>
              <li className="flex items-center gap-4 text-gray-200">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                Alerta de consumo Anômalo e alerta de risco
              </li>
              <li className="flex items-center gap-4 text-gray-200">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                Gestão baseada em dados, não em achismo
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
