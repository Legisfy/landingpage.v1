
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Diretor de Operações - LogiCorp",
    content: "O que mais me impressionou foi a simplicidade. Implementamos em menos de 48h e minha equipe, que odiava planilhas, se adaptou no primeiro dia. É intuitivo de verdade.",
    rating: 5,
    tag: "Simplicidade"
  },
  {
    name: "Ana Beatriz",
    role: "Gerente de Suprimentos - Indústria Meta",
    content: "Os relatórios preditivos são valiosíssimos. Conseguimos identificar um gargalo de desperdício que nos custava R$ 15 mil por mês. A Aura pagou o investimento em 30 dias.",
    rating: 5,
    tag: "Relatórios & Economia"
  },
  {
    name: "Ricardo Mendes",
    role: "Proprietário - Distribuidora Norte",
    content: "Finalmente uma gestão de economia real. O sistema avisa exatamente o que comprar e quando, evitando estoque parado e capital de giro travado. Essencial.",
    rating: 5,
    tag: "Gestão Financeira"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <span className="text-gray-400 font-medium">4.9/5 estrelas no Google</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">A escolha de quem busca <br/><span className="text-gradient">eficiência e resultado real.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group hover:border-blue-500/30 transition-all"
          >
            <Quote className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={40} />
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 uppercase tracking-wider">
              {t.tag}
            </div>
            <p className="text-gray-300 mb-8 italic leading-relaxed">
              "{t.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-bold text-white shadow-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
