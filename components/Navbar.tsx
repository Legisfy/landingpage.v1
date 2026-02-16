
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-gray-950/90 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="transition-transform hover:scale-105 active:scale-95">
            <img
              src="https://zdgapmcalocdvdgvbwsj.supabase.co/storage/v1/object/public/AuraLogo/image-removebg-preview.png"
              alt="Legisfy - Gestão Política"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#funcionalidades">Funcionalidades</NavLink>
          <NavLink href="#tecnologia">Tecnologia</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#precos">Preços</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.legisfy.app.br" className="text-gray-400 hover:text-white transition-colors px-4 py-2 font-medium">Login</a>
          <a href="#precos" className="bg-white text-black hover:bg-gray-200 transition-all px-6 py-2.5 rounded-full font-bold flex items-center gap-2 group shadow-lg shadow-white/10">
            Começar Agora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-6 px-6">
          <NavLink href="#funcionalidades" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</NavLink>
          <NavLink href="#tecnologia" onClick={() => setMobileMenuOpen(false)}>Tecnologia</NavLink>
          <NavLink href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</NavLink>
          <NavLink href="#precos" onClick={() => setMobileMenuOpen(false)}>Preços</NavLink>
          <hr className="w-full border-white/10" />
          <a href="https://app.legisfy.app.br" className="w-full py-4 text-center font-bold text-gray-400">Login</a>
          <a href="#precos" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 bg-white rounded-xl font-bold text-black shadow-xl shadow-white/10 text-center">Começar Agora</a>
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
