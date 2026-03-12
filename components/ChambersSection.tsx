
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, ArrowRight, BarChart3, Clock, Lock } from 'lucide-react';

const ChambersSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Gestão Unificada dos Gabinetes",
      description: "Todos os vereadores e suas equipes trabalham na mesma plataforma, com organização de eleitores, demandas e atividades parlamentares.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Atendimento eficiente ao cidadão",
      description: "Demandas da população são registradas, acompanhadas e resolvidas com mais rapidez, evitando perda de informações e retrabalho.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Transparência e Prestação de Contas",
      description: "A Câmara pode acompanhar indicadores, ações dos gabinetes e impacto das atividades legislativas em tempo real.",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Segurança Institucional",
      description: "Sistema com controle de acesso, criptografia e armazenamento seguro de dados sensíveis da atividade parlamentar.",
      color: "from-orange-500/20 to-amber-500/20"
    }
  ];

  const steps = [
    {
      num: "1",
      title: "Apresentação da Solução",
      desc: "Um vereador, servidor ou membro da mesa diretora pode solicitar uma apresentação institucional da Legisfy para conhecer a plataforma."
    },
    {
      num: "2",
      title: "Análise pela Câmara",
      desc: "A administração da Câmara avalia a solução, verificando como a Legisfy pode melhorar a organização e eficiência administrativa."
    },
    {
      num: "3",
      title: "Contratação por CPSI",
      desc: "A implementação pode ser realizada via CPSI (Marco Legal das Startups), permitindo contratar tecnologia inovadora com segurança jurídica."
    },
    {
      num: "4",
      title: "Implementação na Câmara",
      desc: "Após a contratação, a Legisfy é implantada e disponibilizada para vereadores, assessores e administração."
    }
  ];

  const handleCpsiClick = () => {
    window.location.href = '/cpsi';
  };

  return (
    <section id="camaras" className="py-24 relative overflow-hidden bg-black text-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Building2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Soluções Institucionais</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-gradient tracking-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            A Plataforma que Organiza e <br /> Moderniza Toda a Câmara Municipal
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            A Legisfy centraliza a gestão de gabinetes, demandas da população e atividades legislativas em um único sistema. 
            Mais organização para os vereadores. Mais eficiência para a Câmara. Mais transparência para o cidadão.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            O que a Legisfy melhora na Câmara
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { val: "+70%", label: "mais organização das demandas da população" },
               { val: "Redução", label: "do retrabalho entre gabinetes" },
               { val: "Centralização", label: "completa das atividades parlamentares" }
             ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-4xl font-bold mb-2 text-white">{stat.val}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Como levar a Legisfy para sua Câmara</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Processo simples e previsto em lei, com toda a segurança jurídica necessária.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6"
              >
                <div className="text-5xl font-bold text-white/10 absolute -top-4 left-0">{step.num}</div>
                <h4 className="text-lg font-bold mb-3 mt-4 relative z-10">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Quer entender como levar a Legisfy para sua Câmara?</h3>
            <p className="text-gray-400 text-lg">
              Veja o passo a passo completo sobre o processo de contratação e implementação da plataforma.
            </p>
          </div>
          <button 
            onClick={handleCpsiClick}
            className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shrink-0"
          >
            👉 Como levar a Legisfy para minha Câmara
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChambersSection;
