
import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Play, CheckCircle2, ShieldCheck, BarChart3, Zap, Layers, Globe, Users, Menu, X, ChevronRight, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import { DemoScrollSection } from './components/DemoScrollSection.tsx';
import FeatureGrid from './components/FeatureGrid.tsx';
import ComparisonSection from './components/ComparisonSection.tsx';
import StatsSection from './components/StatsSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import PricingSection from './components/PricingSection.tsx';
import AuraIASection from './components/AuraIASection.tsx';
import SecuritySection from './components/SecuritySection.tsx';
import CTASection from './components/CTASection.tsx';
import TechDashboard from './components/TechDashboard.tsx';
import FAQSection from './components/FAQSection.tsx';
import Footer from './components/Footer.tsx';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000] text-gray-100 selection:bg-gray-800 selection:text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-0">
        {/* Top Center Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-white/[0.03] blur-[120px] rounded-[100%]"></div>

        {/* Subtle Side Reflexes */}
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vh] bg-white/[0.02] blur-[100px] rounded-full rotate-45"></div>
        <div className="absolute top-[10%] right-[-10%] w-[30vw] h-[50vh] bg-white/[0.01] blur-[100px] rounded-full -rotate-12"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <DemoScrollSection />

          <section id="funcionalidades" className="pt-2 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Tecnologia que sustenta <br /> mandatos fortes
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                Automação, inteligência e organização para escalar a atuação política com precisão.
              </p>
            </motion.div>
            <FeatureGrid />
          </section>

          <AuraIASection />

          <SecuritySection />

          <div id="sobre" className="scroll-mt-20">
            <ComparisonSection />
          </div>

          <section id="tecnologia" className="py-24 bg-gray-900/30 overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  Tecnologia focada em <br /> gerar <span className="text-white underline decoration-white/30">Impacto Político</span>.
                </h2>
                <div className="space-y-6">
                  <TechItem
                    delay={0.1}
                    icon={<ClipboardList className="text-white" />}
                    title="Demandas"
                    description="Centralize, priorize e rastreie cada pedido da sua base eleitoral."
                  />
                  <TechItem
                    delay={0.2}
                    icon={<Zap className="text-white" />}
                    title="Indicações"
                    description="Monitore o status e o histórico completo de cada indicação política."
                  />
                  <TechItem
                    delay={0.3}
                    icon={<Users className="text-white" />}
                    title="Eleitores"
                    description="Base organizada com dados estratégicos para uma proximidade real com o cidadão."
                  />
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-3xl"></div>
                <TechDashboard />
              </motion.div>
            </div>
          </section>

          <TestimonialsSection />



          <PricingSection />

          <CTASection />

          <FAQSection />
        </main>

        <Footer />
      </div>
    </div >
  );
};

const TechItem: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
  >
    <div className="p-3 bg-white/10 rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default App;
