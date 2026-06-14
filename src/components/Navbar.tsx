import React, { useState } from 'react';
import { Menu, X, PawPrint, Calendar } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openBookingModal: () => void;
  cartCount: number;
}

export default function Navbar({ currentPage, setCurrentPage, openBookingModal, cartCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'agendamento', label: 'Agendamento' },
    { id: 'contato', label: 'Contato' },
    { id: 'carrinho', label: 'Carrinho' },
    { id: 'pagamento', label: 'Pagamento' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm h-20 transition-all border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('inicio')} 
          className="flex items-center cursor-pointer group"
        >
          <Logo className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 lg:gap-7 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-[14px] lg:text-[15px] font-semibold transition-all duration-200 cursor-pointer py-1 relative flex items-center gap-1 ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'carrinho' && cartCount > 0 && (
                <span className="bg-red-500 text-white font-sans text-[9px] px-1.5 py-0.5 rounded-full font-bold min-w-[16px] text-center inline-block animate-pulse">
                  {cartCount}
                </span>
              )}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <button 
            onClick={openBookingModal}
            className="px-6 py-2.5 rounded-full font-semibold text-[14px] bg-primary text-white hover:bg-[#324a56] hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Agendar Consulta
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={openBookingModal}
            className="p-2 sm:px-4 sm:py-2 rounded-full bg-primary text-white text-[13px] font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Agendar</span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 z-40 py-4 px-6 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-3 font-semibold text-lg transition-colors border-b border-gray-50/50 flex justify-between items-center ${
                currentPage === item.id 
                  ? 'text-primary pl-2 border-l-4 border-primary' 
                  : 'text-gray-500'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'carrinho' && cartCount > 0 && (
                <span className="bg-red-500 text-white font-sans text-xs px-2.5 py-1 rounded-full font-bold">
                  {cartCount} {cartCount === 1 ? 'item' : 'itens'}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
