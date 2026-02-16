
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, EyeOff, CheckCircle2 } from 'lucide-react';

const SecuritySection: React.FC = () => {
    return (
        <section id="seguranca" className="py-24 relative overflow-hidden scroll-mt-20">
            {/* Background Gradients - Adjusted to White/Gray */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <ShieldCheck size={14} />
                        Segurança Militar
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Seus dados blindados contra <br />
                        <span className="text-gradient">
                            vazamentos e acessos indevidos
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Entendemos que a informação é o ativo mais valioso de um mandato.
                        Por isso, utilizamos protocolos de segurança de nível bancário para garantir
                        que apenas você tenha acesso ao que é seu.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Criptografia */}
                    <SecurityCard
                        icon={<Lock className="text-white" size={32} />}
                        title="Criptografia de Ponta a Ponta"
                        description="Todos os dados trafegam e são armazenados com criptografia avançada. Nem mesmo nossa equipe tem acesso ao conteúdo sensível do seu gabinete."
                        delay={0.1}
                    />

                    {/* Card 2: Controle de Acesso */}
                    <SecurityCard
                        icon={<EyeOff className="text-white" size={32} />}
                        title="Hierarquia de Acesso Rigorosa"
                        description="Defina exatamente o que cada assessor pode ver. Contatos estratégicos e informações sensíveis ficam restritos apenas a quem você autorizar."
                        delay={0.2}
                    />

                    {/* Card 3: Infraestrutura */}
                    <SecurityCard
                        icon={<Server className="text-white" size={32} />}
                        title="Infraestrutura Isolada"
                        description="Ambientes de dados segregados garantem que não haja cruzamento de informações entre diferentes gabinetes ou mandatos."
                        delay={0.3}
                    />
                </div>

                {/* Trust Badges / Compliance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <div className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-white/40 group-hover:text-white transition-colors" />
                        <span className="font-semibold text-gray-400 group-hover:text-white transition-colors">Conformidade LGPD</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-white/40 group-hover:text-white transition-colors" />
                        <span className="font-semibold text-gray-400 group-hover:text-white transition-colors">Backups Diários Automáticos</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-white/40 group-hover:text-white transition-colors" />
                        <span className="font-semibold text-gray-400 group-hover:text-white transition-colors">Proteção Anti-DDoS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SecurityCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: number }> = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all group relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/20">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-white transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </motion.div>
);

export default SecuritySection;
