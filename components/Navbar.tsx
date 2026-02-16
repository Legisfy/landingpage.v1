
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${isScrolled
        ? 'py-3 bg-[#ffffff03] backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
        : 'py-5 bg-transparent'
        }`}
      style={isScrolled ? {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#funcionalidades">Funcionalidades</NavLink>
          <NavLink href="#aura-ia">Assessor IA</NavLink>
          <NavLink href="#seguranca">Segurança</NavLink>
          <NavLink href="#precos">Planos</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.legisfy.app.br" className="text-gray-400 hover:text-white transition-colors px-4 py-2 font-medium">Entrar</a>
          <a
            href="#precos"
            className="transition-all px-7 py-2.5 rounded-2xl font-bold flex items-center gap-2 group border border-white/10 hover:border-white/20"
            style={{
              background: '#1a1a1a',
              color: '#fff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
            }}
          >
            Começar agora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-6 px-6">
          <NavLink href="#funcionalidades" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</NavLink>
          <NavLink href="#aura-ia" onClick={() => setMobileMenuOpen(false)}>Assessor IA</NavLink>
          <NavLink href="#seguranca" onClick={() => setMobileMenuOpen(false)}>Segurança</NavLink>
          <NavLink href="#precos" onClick={() => setMobileMenuOpen(false)}>Planos</NavLink>
          <hr className="w-full border-white/10" />
          <a href="https://app.legisfy.app.br" className="w-full py-4 text-center font-bold text-gray-400">Entrar</a>
          <a href="#precos" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 bg-white rounded-xl font-bold text-black shadow-xl shadow-white/10 text-center">Começar agora</a>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-400 hover:text-white transition-colors font-medium text-sm lg:text-base"
  >
    {children}
  </a>
);

export default Navbar;
