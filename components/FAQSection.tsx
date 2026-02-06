
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Preciso de algum equipamento caro para começar?",
        answer: "De forma alguma! A Aura foi desenhada para rodar em qualquer celular ou tablet que você já possui. Transformamos seu dispositivo comum em um terminal de almoxarifado potente via navegador."
    },
    {
        question: "Como a IA realmente reduz meus custos?",
        answer: "Nossa IA analisa padrões de consumo e giro em tempo real. Ela identifica automaticamente anomalias que indicam furtos ou desperdícios e sugere compras baseadas na demanda real, evitando capital parado em estoque desnecessário."
    },
    {
        question: "É difícil migrar meus dados de planilhas para a Aura?",
        answer: "É instantâneo. Temos um importador inteligente que aceita arquivos Excel ou CSV. Em poucos segundos, todo o seu histórico e inventário são organizados e categorizados pela nossa tecnologia."
    },
    {
        question: "Tenho suporte especializado se precisar de ajuda?",
        answer: "Sim! Oferecemos suporte humanizado 24 horas por dia, 7 dias por semana. Seja via WhatsApp ou Chat, nossa equipe técnica está sempre pronta para garantir que sua gestão nunca pare."
    },
    {
        question: "Posso cancelar se não me adaptar à ferramenta?",
        answer: "Com certeza. Acreditamos na liberdade dos nossos parceiros, por isso não trabalhamos com multas ou contratos de fidelidade. Se a Aura não fizer sentido para você, o cancelamento é feito com um clique."
    },
    {
        question: "A Aura serve para qualquer tamanho de empresa?",
        answer: "Sim. Nossos planos escalam conforme sua necessidade, desde pequenos negócios que estão saindo do papel até grandes operações que exigem múltiplos centros de custo e inteligência preditiva."
    }
];

export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 bg-gray-900/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 text-blue-400 text-[10px] uppercase tracking-widest font-bold">
                            <HelpCircle size={14} />
                            Dúvidas Comuns
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tire suas dúvidas <br /><span className="text-gradient">sobre a Aura.</span></h2>
                        <p className="text-gray-400 text-lg">
                            Tudo o que você precisa saber para digitalizar sua gestão hoje mesmo.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full p-6 text-left flex items-center justify-between gap-4 rounded-2xl border transition-all duration-300 ${openIndex === i
                                        ? 'bg-blue-600/10 border-blue-500/30'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <span className={`font-bold transition-colors ${openIndex === i ? 'text-blue-400' : 'text-gray-100'}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-400' : 'text-gray-500'}`}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 text-gray-400 leading-relaxed text-base pt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Helper */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/5 to-transparent border border-white/5 text-center"
                >
                    <p className="text-gray-300 mb-6">Ainda tem alguma dúvida específica?</p>
                    <a
                        href="https://wa.me/5527999205531?text=Olá,%20tenho%20uma%20dúvida%20específica%20sobre%20a%20Aura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline"
                    >
                        Conversar com um consultor agora <Plus size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
