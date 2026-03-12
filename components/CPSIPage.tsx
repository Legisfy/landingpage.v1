
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ChevronDown, 
  ArrowLeft, 
  Building2, 
  ShieldCheck, 
  Zap, 
  Users,
  FileCheck,
  Scale,
  ClipboardCopy,
  ChevronRight,
  X
} from 'lucide-react';
import ContactForm from './ContactForm';

const CPSIPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  const faqItems = [
    {
      q: "A Câmara pode contratar tecnologia usando CPSI?",
      a: "Sim. O CPSI foi criado justamente para permitir que órgãos públicos testem e contratem soluções inovadoras quando ainda não existe uma solução consolidada no mercado ou quando o problema exige inovação tecnológica."
    },
    {
      q: "O CPSI substitui licitação?",
      a: "Não exatamente. O CPSI é um instrumento legal próprio, previsto no Marco Legal das Startups, que permite testar soluções inovadoras antes de uma contratação definitiva."
    },
    {
      q: "A Legisfy pode ser testada antes da contratação?",
      a: "Sim. O modelo de CPSI permite que a Câmara avalie a solução na prática, verificando se ela realmente resolve os problemas administrativos e de gestão parlamentar."
    },
    {
      q: "Quem pode propor o CPSI dentro da Câmara?",
      a: "A proposta pode partir de Vereadores, Presidente da Câmara, Diretoria administrativa, Procuradoria jurídica ou Setor de tecnologia ou inovação."
    },
    {
      q: "O CPSI é legal para Câmaras Municipais?",
      a: "Sim. O instrumento pode ser utilizado por entes da administração pública, incluindo Câmaras Municipais."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </motion.button>
          
          <div className="flex items-center justify-center">
            <img 
              src="https://wvvxstgpjodmfxpekhkf.supabase.co/storage/v1/object/public/LEGISFY/legisfy%20branco.png" 
              alt="Legisfy Logo" 
              className="h-8 md:h-12 w-auto brightness-110"
            />
          </div>
          
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8"
            >
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider italic">Modernização Legislativa</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold mb-8 text-gradient leading-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Como levar a Legisfy para <br /> sua Câmara Municipal
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-8"
            >
              A modernização da gestão legislativa já é realidade em diversas instituições públicas. 
              Com a Legisfy, Câmaras Municipais podem organizar gabinetes, melhorar o atendimento à população e digitalizar processos internos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12 space-y-24">
              
              {/* Intro CPSI */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <FileCheck className="text-blue-500 w-8 h-8" />
                    O que é o CPSI
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    O CPSI (Contrato Público para Solução Inovadora) é um modelo de contratação criado pela **Lei Complementar nº 182/2021**, conhecida como Marco Legal das Startups.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Ele permite que órgãos públicos contratem e testem soluções inovadoras quando ainda não existe no mercado uma solução consolidada para resolver determinado problema.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Esse modelo foi criado justamente para permitir que governos adotem tecnologias modernas, sem precisar seguir processos de licitação tradicionais que muitas vezes não se encaixam em soluções inovadoras.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <Scale className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 italic">Adoção Legal</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    A adoção da plataforma pode ser feita por meio de mecanismos legais que permitem ao poder público testar e contratar soluções tecnológicas inovadoras.
                  </p>
                  <div className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                    <ShieldCheck className="text-blue-400 w-6 h-6" />
                    <span className="text-blue-300 font-semibold">Total Segurança Jurídica</span>
                  </div>
                </div>
              </section>

              {/* Por que Legisfy */}
              <section className="space-y-12">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Por que a Legisfy se encaixa nesse modelo</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Resolvemos problemas crônicos da gestão parlamentar com uma infraestrutura digital única.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Desorganização no atendimento de demandas",
                    "Falta de controle sobre atividades dos gabinetes",
                    "Dificuldade de acompanhar indicações e projetos",
                    "Falta de integração vereadores e administração",
                    "Baixa digitalização de processos internos"
                  ].map((problem, i) => (
                    <div key={i} className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                      <Zap className="text-yellow-500 w-6 h-6 shrink-0 mt-1" />
                      <span className="text-gray-300 font-medium">{problem}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefícios */}
              <section className="space-y-12">
                <h2 className="text-4xl font-bold text-center">Benefícios para a Câmara Municipal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: <Users />, title: "Gestão Centralizada", desc: "Organização de eleitores e demandas em uma única plataforma." },
                    { icon: <Zap />, title: "Eficiência Administrativa", desc: "Redução de retrabalho e maior controle das equipes." },
                    { icon: <FileCheck />, title: "Transparência", desc: "Acompanhamento estruturado de indicadores e atividades." },
                    { icon: <Building2 />, title: "Modernização", desc: "Ferramentas alinhadas com as melhores práticas de inovação." }
                  ].map((benefit, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                      <div className="mb-6 p-3 bg-white/10 rounded-2xl inline-block text-blue-400">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Como Funciona */}
              <section className="py-20 bg-white/[0.02] border-y border-white/10 -mx-6 px-6">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold mb-16 text-center">Como funciona o processo</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                      { num: "01", title: "Solicitação", desc: "Apresentação institucional da plataforma para a Câmara." },
                      { num: "02", title: "Avaliação", desc: "Análise técnica de como a plataforma resolve os problemas." },
                      { num: "03", title: "Estruturação", desc: "Formatação do contrato CPSI conforme a legislação." },
                      { num: "04", title: "Implementação", desc: "Uso prático para avaliar os benefícios reais da solução." }
                    ].map((step, i) => (
                      <div key={i} className="relative group">
                        <div className="text-6xl font-black text-white/[0.03] absolute -top-10 left-0 group-hover:text-blue-500/10 transition-colors">{step.num}</div>
                        <h4 className="text-xl font-bold mb-4 pt-4 relative z-10">{step.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        {i < 3 && <ChevronRight className="hidden md:block absolute top-1/2 -right-4 w-6 h-6 text-white/10" />}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quem pode iniciar */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-bold mb-8 italic">Quem pode iniciar esse processo</h2>
                  <div className="space-y-4">
                    {["Vereadores", "Presidente da Câmara", "Servidores da administração", "Setores de inovação ou tecnologia", "Procuradoria ou setor jurídico"].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Apoio no processo</h3>
                  <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                    A equipe da Legisfy auxilia a Câmara em todas as etapas: apresentações, esclarecimentos técnicos e suporte institucional.
                  </p>
                  <a href="#contato" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2">
                    Falar com especialista <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section className="space-y-12">
                <h2 className="text-4xl font-bold text-center">Perguntas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  {faqItems.map((item, i) => (
                    <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="font-bold text-lg">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4"
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>

              {/* Modelos */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Modelo 1 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Justificativa para Proposta</h3>
                    <button 
                      onClick={() => copyToClipboard(`Considerando a necessidade de modernização da gestão parlamentar e melhoria na organização das demandas da população atendidas pelos gabinetes, propõe-se a avaliação da plataforma Legisfy como solução tecnológica para digitalização e centralização dessas atividades.\n\nA solução pode ser analisada dentro do modelo de Contrato Público para Solução Inovadora (CPSI), conforme previsto na Lei Complementar nº 182/2021, permitindo à Câmara avaliar a tecnologia e seus benefícios para a gestão legislativa.`)}
                      className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors uppercase font-bold tracking-widest"
                    >
                      <ClipboardCopy className="w-3.5 h-3.5" />
                      {copyStatus === 'copied' ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                  <div className="p-8 bg-black border border-white/10 rounded-3xl text-sm text-gray-400 italic font-medium leading-relaxed shadow-inner">
                    "Considerando a necessidade de modernização da gestão parlamentar e melhoria na organização das demandas da população atendidas pelos gabinetes, propõe-se a avaliação da plataforma Legisfy como solução tecnológica para digitalização e centralização dessas atividades. A solução pode ser analisada dentro do modelo de Contrato Público para Solução Inovadora (CPSI), conforme previsto na Lei Complementar nº 182/2021, permitindo à Câmara avaliar a tecnologia e seus benefícios para a gestão legislativa."
                  </div>
                </div>

                {/* Modelo 2 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Ofício para Apresentação</h3>
                    <button 
                      onClick={() => copyToClipboard(`Assunto: Avaliação de solução tecnológica para modernização da gestão parlamentar\n\nÀ Presidência da Câmara Municipal,\n\nVenho por meio deste sugerir a avaliação da plataforma Legisfy, solução tecnológica desenvolvida para organizar e digitalizar atividades parlamentares, incluindo gestão de demandas da população, acompanhamento de indicações e organização de atividades de gabinete.\n\nA solução pode ser analisada dentro do modelo de Contrato Público para Solução Inovadora (CPSI), previsto no Marco Legal das Startups, permitindo que esta Casa avalie a tecnologia e seus benefícios para a gestão legislativa.\n\nSugere-se a realização de uma apresentação institucional da plataforma para conhecimento da administração desta Câmara.`)}
                      className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors uppercase font-bold tracking-widest"
                    >
                      <ClipboardCopy className="w-3.5 h-3.5" />
                      {copyStatus === 'copied' ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                  <div className="p-8 bg-black border border-white/10 rounded-3xl text-sm text-gray-400 italic font-medium leading-relaxed shadow-inner">
                    "Assunto: Avaliação de solução tecnológica para modernização da gestão parlamentar. À Presidência da Câmara Municipal, sugere-se a avaliação da plataforma Legisfy, ferramenta para digitalizar atividades parlamentares e gerir demandas. A análise pode ocorrer via CPSI, permitindo avaliar a tecnologia antes da contratação institucional."
                  </div>
                </div>
              </section>

              {/* The Smart Form */}
              <div className="pt-24 border-t border-white/10">
                <ContactForm 
                  title="Solicitar apresentação da Legisfy"
                  subtitle="Se você faz parte de uma Câmara Municipal e deseja entender como a Legisfy pode ser implementada, preencha o formulário abaixo."
                  sourceType="cpsi_request"
                />
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CPSIPage;
