
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingDown, FileSpreadsheet, AlertTriangle, ShoppingCart, Sparkles } from 'lucide-react';

const features = [
    {
        icon: <Brain className="text-cyan-400" />,
        title: "Relatórios Inteligentes",
        description: "Insights automáticos que traduzem dados complexos em decisões simples para economizar."
    },
    {
        icon: <FileSpreadsheet className="text-cyan-400" />,
        title: "Planilhas sob Demanda",
        description: "Peça e a Aura IA gera planilhas personalizadas formatadas exatamente como você precisa."
    },
    {
        icon: <AlertTriangle className="text-cyan-400" />,
        title: "Alertas de Anomalia",
        description: "Notificações em tempo real sobre consumos atípicos, furtos ou riscos de ruptura de estoque."
    },
    {
        icon: <ShoppingCart className="text-cyan-400" />,
        title: "Sugestão de Compras",
        description: "Algoritmos que analisam o giro histórico para sugerir o estoque mínimo ideal e evitar perdas."
    }
];

const AuraIASection: React.FC = () => {
    return (
        <section id="aura-ia" className="py-20 relative overflow-hidden">
            {/* Background AI Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-5">
                            <Sparkles size={14} />
                            AURA IA: Inteligência Artificial
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                            A inteligência que foca em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Gerar Economia Real
                            </span>
                        </h2>

                        <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-xl">
                            A Aura IA não apenas armazena dados; ela os interpreta para o seu negócio.
                            Focada no almoxarifado, nossa IA analisa cada movimentação para reduzir custos.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="p-2 bg-cyan-500/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(feature.icon as React.ReactElement, { size: 18 })}
                                    </div>
                                    <h3 className="font-bold text-base mb-1.5 text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>
                        <div className="relative rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
                                alt="Aura IA Interface"
                                className="w-full h-[480px] object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 z-20 max-w-xs">
                                <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Análise em Tempo Real</span>
                                    </div>
                                    <p className="text-xs text-gray-200">
                                        "Identificamos um consumo anômalo de Materiais Elétricos no Setor B. Redução potencial de 12% no custo mensal."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuraIASection;
