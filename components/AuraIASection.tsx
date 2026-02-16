
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingDown, FileSpreadsheet, AlertTriangle, ShoppingCart, Sparkles } from 'lucide-react';
import SplineRobot from './SplineRobot';

const features = [
    {
        icon: <Brain className="text-white" />,
        title: "Inteligência de Votos",
        description: "Análise preditiva de intenção de votos e mapeamento de lideranças por região."
    },
    {
        icon: <FileSpreadsheet className="text-white" />,
        title: "Ofícios Automatizados",
        description: "Geração automática de ofícios e documentos oficiais com base nas demandas recebidas."
    },
    {
        icon: <AlertTriangle className="text-white" />,
        title: "Alertas de Crise",
        description: "Monitoramento de redes sociais e canais de atendimento para identificar crises de imagem."
    },
    {
        icon: <ShoppingCart className="text-white" />,
        title: "Mapa de Demandas",
        description: "Visualização geográfica de todas as solicitações para priorização de ações do mandato."
    }
];

const AuraIASection: React.FC = () => {
    return (
        <section id="aura-ia" className="py-20 relative overflow-hidden">
            {/* Background AI Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold mb-5">
                            <Sparkles size={14} />
                            ASSESSOR IA: Inteligência Política
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                            A inteligência que foca em <br />
                            <span className="text-gradient">
                                Maximizar sua Atuação
                            </span>
                        </h2>

                        <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-xl">
                            O Assessor IA não apenas armazena dados; ele os interpreta para o seu mandato.
                            Focada no gabinete, nossa IA analisa cada demanda para potencializar seus resultados.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group"
                                >
                                    <div className="p-2 bg-white/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
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
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-white/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 pointer-events-none"></div>
                            <div className="w-full h-full min-h-[500px] lg:min-h-[650px] bg-[#030712]/50">
                                <SplineRobot />
                            </div>
                            <div className="absolute bottom-6 left-6 z-20 max-w-xs">
                                <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Análise em Tempo Real</span>
                                    </div>
                                    <p className="text-xs text-gray-200">
                                        "Identificamos um aumento de 25% nas demandas por iluminação pública no Setor Norte. Recomendamos priorizar indicação parlamentar para a região."
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
