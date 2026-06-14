import React from 'react';
import { PawPrint, MapPin, Phone, Mail, Sparkles, Heart } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#dae8c0] text-[#141f06] rounded-t-[2.5rem] mt-24 border-t border-[#beccb3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <div 
              onClick={() => handleFooterLinkClick('inicio')}
              className="flex items-center cursor-pointer group w-fit"
            >
              <Logo className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p className="font-sans text-sm md:text-[15px] leading-relaxed text-[#3f4b2d] opacity-90">
              Elevando o padrão do cuidado animal com tecnologia diagnóstica, abordagem humanizada Fear Free e dedicação incondicional a cada amigo que passa por nossas mãos.
            </p>
            <div className="flex gap-3 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#566343]/10 text-secondary">
                <Heart className="w-3.5 h-3.5 fill-current" />
                Amor & Ética
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#446371]/10 text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Medicina de Ponta
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h6 className="font-display font-bold text-[#141f06] border-b border-[#5a6747]/10 pb-2">
              Navegação
            </h6>
            <ul className="space-y-2.5 font-sans text-sm font-medium text-[#3f4b2d]/90">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('inicio')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Início (Home Page)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('sobre')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Sobre Nós (Estrutura)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('servicos')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('equipe')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Nossa Equipe Médica
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h6 className="font-display font-bold text-[#141f06] border-b border-[#5a6747]/10 pb-2">
              Privacidade & Ajuda
            </h6>
            <ul className="space-y-2.5 font-sans text-sm font-medium text-[#3f4b2d]/90">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('contato')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('sobre')} 
                  className="hover:underline hover:text-primary transition-all cursor-pointer"
                >
                  Trabalhe Conosco (Vagas)
                </button>
              </li>
              <li>
                <span className="hover:underline hover:text-primary cursor-pointer">
                  Diretrizes de Privacidade
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-primary cursor-pointer">
                  Termos e Condições de Uso
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h6 className="font-display font-bold text-[#141f06] border-b border-[#5a6747]/10 pb-2">
              Contato Rápido
            </h6>
            <ul className="space-y-3.5 font-sans text-[13.5px] font-medium text-[#3f4b2d]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Rua das Patas, 123 - Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>
                  (11) 4002-8922
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>
                  contato@petvida.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#5a6747]/15 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-sans text-[13px] font-medium text-[#3f4b2d]/80">
            © {currentYear} PetVida. Cuidando com amor absoluto, dedicação e ética profissional. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#3f4b2d]/65">
            <span>Desenvolvido com React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
