
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Users, Zap, ArrowUpRight, CheckCircle2, UserPlus } from 'lucide-react';

export const TechDashboard: React.FC = () => {
    const [demandas, setDemandas] = useState(142);
    const [activeActions, setActiveActions] = useState([
        { id: 1, name: "Atendimento concluído", user: "Assessor Paulo", status: "Concluído", value: "Demanda #42", time: "Agora", icon: <CheckCircle2 size={14} className="text-green-400" /> },
        { id: 2, name: "Novo Eleitor Cadastrado", user: "Assessora Maria", status: "Sucesso", value: "João Silva", time: "2m", icon: <UserPlus size={14} className="text-blue-400" /> },
        { id: 3, name: "Indicação Atualizada", user: "Chefe de Gabinete", status: "Pendente", value: "Rua das Flores", time: "5m", icon: <ClipboardList size={14} className="text-amber-400" /> },
    ]);

    // Simulate live data
    useEffect(() => {
        const interval = setInterval(() => {
            setDemandas(prev => prev + (Math.random() > 0.7 ? 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[450px] bg-gray-900/40 rounded-3xl border border-white/10 p-6 overflow-hidden backdrop-blur-sm shadow-2xl aura-glow">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -mr-20 -mt-20" />

            <div className="relative h-full flex flex-col gap-6">
                {/* Header Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <ClipboardList size={14} className="text-blue-400" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Demandas Ativas</span>
                        </div>
                        <div className="text-2xl font-black text-white">
                            {demandas}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 ml-2 mb-1"
                            />
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Zap size={14} className="text-white" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Indicações</span>
                        </div>
                        <div className="text-2xl font-black text-white">86 Concluídas</div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-5 gap-4 overflow-hidden">
                    {/* Activity Feed */}
                    <div className="col-span-3 flex flex-col gap-3">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Atividade de Assessores</span>
                        <div className="space-y-2">
                            <AnimatePresence mode="popLayout">
                                {activeActions.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-xl group hover:bg-white/[0.08] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-200">{item.name}</div>
                                                <div className="text-[10px] text-gray-400 italic">{item.user}</div>
                                                <div className="text-[9px] text-gray-500">{item.time} atrás</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-xs font-black ${item.status === 'Saída' ? 'text-red-400' :
                                                item.status === 'Concluído' ? 'text-green-400' :
                                                    item.status === 'Sucesso' ? 'text-blue-400' : 'text-amber-400'
                                                }`}>
                                                {item.value}
                                            </div>
                                            <div className="text-[9px] text-gray-600 uppercase font-black">{item.status}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Chart columns */}
                    <div className="col-span-2 bg-white/[0.02] rounded-2xl p-4 border border-white/5 flex flex-col gap-4">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Crescimento de Eleitores</span>
                        <div className="flex-grow flex items-end justify-between gap-2 px-2 pb-2">
                            {[40, 55, 65, 80, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                    className="w-full bg-gradient-to-t from-white/10 to-white/40 rounded-t-lg relative group"
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 invisible group-hover:visible bg-white text-black text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
                                        + {h}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-gray-400 font-medium">Gabinete Online</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-[10px] font-bold cursor-pointer hover:underline">
                        Acessar Painel de Gestão <ArrowUpRight size={10} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechDashboard;
