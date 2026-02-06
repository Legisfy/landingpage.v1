
import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img
              src="https://zdgapmcalocdvdgvbwsj.supabase.co/storage/v1/object/public/AuraLogo/image-removebg-preview.png"
              alt="Aura Logo"
              className="h-10 w-auto brightness-110"
            />
          </div>
          <p className="text-gray-500 leading-relaxed mb-6 max-w-xs">
            O software definitivo para gestão de almoxarifados e estoques complexos. Inteligência que move sua operação rumo ao próximo nível.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Linkedin size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Github size={20} />} />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Produto</h4>
          <ul className="space-y-4">
            <FooterLink>Funcionalidades</FooterLink>
            <FooterLink>Dashboard IA</FooterLink>
            <FooterLink>App Mobile</FooterLink>
            <FooterLink>API de Integração</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Recursos</h4>
          <ul className="space-y-4">
            <FooterLink>Documentação</FooterLink>
            <FooterLink>Blog & Novidades</FooterLink>
            <FooterLink>Cases de Sucesso</FooterLink>
            <FooterLink>Central de Ajuda</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Suporte</h4>
          <p className="text-gray-500 mb-4">Dúvidas? Entre em contato.</p>
          <a href="mailto:suporte@auraalmoxarifado.com.br" className="text-blue-400 font-bold text-lg hover:underline block mb-2 transition-colors">suporte@auraalmoxarifado.com.br</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-sm">© 2026 Aura Almoxarifado Inteligente Todos os direitos reservados.</p>
        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-blue-500 hover:bg-blue-500/5 transition-all">
    {icon}
  </a>
);

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>
    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm md:text-base">{children}</a>
  </li>
);

export default Footer;
