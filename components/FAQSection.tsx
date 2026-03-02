
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Como a Legisfy ajuda na gestão de eleitores?",
        answer: "A Legisfy centraliza todos os dados dos eleitores, permitindo registrar demandas, endereços e histórico de contatos. Isso facilita a personalização do atendimento e a fidelidade da sua base."
    },
    {
        question: "O assistente de IA substitui meus assessores?",
        answer: "Não, ele potencializa o trabalho deles. A IA atende dúvidas frequentes de munícipes e automatiza processos burocráticos, liberando sua equipe para focar em articulação política e estratégia."
    },
    {
        question: "Posso exportar os dados do sistema?",
        answer: "Sim, você tem total controle sobre seus dados. A qualquer momento você pode exportar relatórios, listas de contatos e demandas em formatos Excel ou CSV."
    },
    {
        question: "Como funciona a organização da agenda da equipe?",
        answer: "O sistema permite criar agendas compartilhadas, definir metas de produtividade e acompanhar o status de cada tarefa delegada aos seus assessores em tempo real."
    },
    {
        question: "Os dados dos meus eleitores estão seguros?",
        answer: "Segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD para garantir que as informações do seu mandato e dos eleitores fiquem protegidas."
    },
    {
        question: "A Legisfy serve para mandatos federais ou apenas municipais?",
        answer: "A plataforma é flexível e atende desde vereadores e prefeitos até deputados federais e senadores, adaptando-se à escala e complexidade de cada gabinete."
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4 text-white text-[10px] uppercase tracking-widest font-bold">
                            <HelpCircle size={14} />
                            Perguntas Frequentes
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tire suas dúvidas <br /><span className="text-gradient">sobre a Legisfy.</span></h2>
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
                                    ? 'bg-white/10 border-white/30'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <span className={`font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-gray-100'}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-white' : 'text-gray-500'}`}>
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
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 text-center"
                >
                    <p className="text-gray-300 mb-6">Ainda tem alguma dúvida específica?</p>
                    <a
                        href="https://wa.me/5511999999999?text=Olá,%20tenho%20uma%20dúvida%20sobre%20a%20Legisfy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-bold hover:underline"
                    >
                        Conversar com um especialista agora <Plus size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
