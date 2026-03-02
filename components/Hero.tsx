
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const words = ["Poder", "Estratégia", "Ambição", "Inteligência", "Tecnologia"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setDisplayText(prev =>
        shouldDelete
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      setTypingSpeed(shouldDelete ? 75 : 150);

      if (!shouldDelete && displayText === currentWord) {
        setTypingSpeed(2000); // Pause at end of word
        setIsDeleting(true);
      } else if (shouldDelete && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed, words]);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-10 pb-12 md:pt-16 md:pb-16 px-6 z-30 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo Principal (SVG Calibrado - Assimétrico) */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col items-center justify-center"
          >
            <img
              src="https://wvvxstgpjodmfxpekhkf.supabase.co/storage/v1/object/public/LEGISFY/legisfy%20branco.png"
              alt="Legisfy Logo"
              className="h-20 md:h-28 w-auto brightness-125"
            />
          </motion.div>

          {/* Social Proof Pill flights */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 backdrop-blur-sm"
          >
            <div className="flex -space-x-2.5">
              {[
                "1507003211169-0a1dd7228f2d",
                "1500648767791-00dcc994a43e",
                "1472099645785-5658abf4ff4e",
                "1542909168-82c3e7fdca5c"
              ].map((id, i) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=100&h=100`}
                  alt="Parlamentar"
                  className="w-6 h-6 rounded-full border-2 border-[#000] object-cover"
                />
              ))}
            </div>
            <span className="text-gray-300 text-xs font-medium pr-1">
              <span className="text-white font-bold">+ 200 parlamentares</span> utilizando a plataforma
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight mb-2 leading-tight pb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            <span className="text-gradient">Recursos poderosos para um gabinete</span> <br />
            <span className="flex items-center justify-center gap-2">
              <span className="text-gradient">movido por</span>
              <div className="relative flex items-center">
                <span className="text-gradient block min-h-[1.2em]">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                  className="w-[3px] h-[0.8em] bg-white/50 ml-1 inline-block"
                />
              </div>
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-5 max-w-2xl mx-auto leading-relaxed">
            Demandas organizadas, indicações monitoradas, eleitores próximos e assessores produtivos. A estrutura completa do seu gabinete em um único sistema.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
