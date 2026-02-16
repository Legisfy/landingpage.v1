
import React from 'react';
import {
  BarChart3,
  Layers,
  ScanLine
} from 'lucide-react';
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
import CTASection from './components/CTASection.tsx';
import TechDashboard from './components/TechDashboard.tsx';
import FAQSection from './components/FAQSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-gray-700 selection:text-white">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vh] bg-white/5 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-gray-600/5 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <DemoScrollSection />

          <section id="funcionalidades" className="pt-12 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
            <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Foco em Performance</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Gestão avançada com <br /><span className="text-gradient">Simplicidade e Impacto.</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Legisfy elimina a burocracia do mandato e entrega relatórios estratégicos que potencializam sua atuação política.
            </p>
            </motion.div>
            <FeatureGrid />
          </section>

          <div id="sobre" className="scroll-mt-20">
            <StatsSection />
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
                    icon={<ScanLine className="text-white" />}
                    title="Gestão de Eleitores"
                    description="Organize sua base eleitoral e atenda demandas com agilidade e inteligência."
                  />
                  <TechItem
                    delay={0.2}
                    icon={<BarChart3 className="text-white" />}
                    title="Relatórios de Impacto"
                    description="Mensure o alcance de suas ações e entenda as reais necessidades da população."
                  />
                  <TechItem
                    delay={0.3}
                    icon={<Layers className="text-white" />}
                    title="Inteligência de Mandato"
                    description="Centralize toda a comunicação e dados do gabinete em uma única plataforma."
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
                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl"></div>
                <TechDashboard />
              </motion.div>
            </div>
          </section>

          <TestimonialsSection />

          <AuraIASection />

          <PricingSection />

          <CTASection />

          <FAQSection />
        </main>

        <Footer />
      </div>
    </div>
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
