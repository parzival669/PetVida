import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import InicioView from './components/InicioView';
import SobreNosView from './components/SobreNosView';
import ServicosView from './components/ServicosView';
import EquipeView from './components/EquipeView';
import AgendamentoView from './components/AgendamentoView';
import ContatoView from './components/ContatoView';
import CarrinhoView from './components/CarrinhoView';
import PagamentoView from './components/PagamentoView';
import { Appointment, Product } from './types';
import { INITIAL_APPOINTMENTS } from './data';
import { Calendar, Clock, X, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('inicio');
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Modal form states
  const [modalPetName, setModalPetName] = useState('Bento');
  const [modalService, setModalService] = useState('Cardiologia Veterinária');
  const [modalDoctor, setModalDoctor] = useState('Dra. Isabella Romeiro');
  const [modalDate, setModalDate] = useState('2026-06-25');
  const [modalTime, setModalTime] = useState('11:00');
  const [modalSuccess, setModalSuccess] = useState(false);

  const addAppointment = (newApt: Appointment) => {
    setAppointments((prev) => [newApt, ...prev]);
  };

  const removeAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  const handleModalBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newApt: Appointment = {
      id: `modal_apt_${Date.now()}`,
      petName: modalPetName,
      service: modalService,
      doctor: modalDoctor,
      date: modalDate,
      time: modalTime,
      status: 'upcoming'
    };

    addAppointment(newApt);
    setModalSuccess(true);

    setTimeout(() => {
      setModalSuccess(false);
      setIsBookingModalOpen(false);
      setCurrentPage('agendamento');
      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  // Render active page component dynamically
  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <InicioView setCurrentPage={setCurrentPage} openBookingModal={() => setIsBookingModalOpen(true)} />;
      case 'sobre':
        return <SobreNosView />;
      case 'servicos':
        return <ServicosView setCurrentPage={setCurrentPage} addToCart={addToCart} />;
      case 'equipe':
        return <EquipeView />;
      case 'agendamento':
        return (
          <AgendamentoView 
            appointments={appointments}
            addAppointment={addAppointment}
            removeAppointment={removeAppointment}
          />
        );
      case 'carrinho':
        return (
          <CarrinhoView
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'pagamento':
        return (
          <PagamentoView
            cart={cart}
            clearCart={clearCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'contato':
        return <ContatoView />;
      default:
        return <InicioView setCurrentPage={setCurrentPage} openBookingModal={() => setIsBookingModalOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structural Header Navigation */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        openBookingModal={() => setIsBookingModalOpen(true)}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />

      {/* Main body viewport container */}
      <main className="flex-grow pt-20 pb-12">
        {renderPage()}
      </main>

      {/* GLOBAL HIGH FIDELITY BOOKING MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-[2rem] p-6 sm:p-8 relative border border-gray-100 shadow-2xl animate-fade-in-up">
            
            {/* Close button */}
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors border-none text-gray-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSuccess ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-display font-extrabold text-green-900 text-xl">Vaga reservada com sucesso!</h4>
                <p className="font-sans text-xs text-gray-500 font-bold mt-2 leading-relaxed">
                  Redirecionando você para o prontuário digital para examinar seu agendamento especial...
                </p>
              </div>
            ) : (
              <div>
                <span className="text-secondary font-bold text-[10px] uppercase tracking-widest bg-secondary-container px-3 py-1 rounded-full inline-block mb-3.5 font-display">
                  Agendar Consulta Expressa
                </span>
                
                <h3 className="font-display font-extrabold text-xl text-gray-950 mb-1 leading-snug">
                  Solicitação de Atendimento
                </h3>
                <p className="font-sans text-xs text-gray-500 font-semibold mb-6">
                  Preencha os dados e gerencie todo o histórico de consultas a partir do painel da sua conta.
                </p>

                <form onSubmit={handleModalBookingSubmit} className="space-y-4">
                  {/* Pet Name input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Nome de seu Cão ou Gato</label>
                    <input 
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                      value={modalPetName}
                      onChange={(e) => setModalPetName(e.target.value)}
                      required 
                    />
                  </div>

                  {/* Consultation options */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Escolha o Serviço de Especialidade</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                      value={modalService}
                      onChange={(e) => setModalService(e.target.value)}
                    >
                      <option value="Cardiologia Veterinária">Cardiologia Veterinária</option>
                      <option value="Clínica Geral Preventiva">Clínica Geral Preventiva</option>
                      <option value="Anestesia & Avaliação Cirúrgica">Anestesia & Avaliação Cirúrgica</option>
                      <option value="Banho & Tosa Estética">Banho & Tosa Estética</option>
                      <option value="Ultrassom & Exame Doppler">Ultrassom & Exame Doppler</option>
                      <option value="Hospedagem & Hotel Pet">Hospedagem & Hotel Pet</option>
                    </select>
                  </div>

                  {/* Vet Select */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Médico Veterinário Designado</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                      value={modalDoctor}
                      onChange={(e) => setModalDoctor(e.target.value)}
                    >
                      <option value="Dra. Isabella Romeiro">Dra. Isabella Romeiro</option>
                      <option value="Dra. Maria Eduarda Pintos">Dra. Maria Eduarda Pintos</option>
                      <option value="Dra. Giulia Marchetti Balarin">Dra. Giulia Marchetti Balarin</option>
                      <option value="Dra. Larissa Zandonadi">Dra. Larissa Zandonadi</option>
                      <option value="Dra. Maria Luiza Carvalho">Dra. Maria Luiza Carvalho</option>
                      <option value="Dra. Maria Natália">Dra. Maria Natália</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Date Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Escolha o Dia</label>
                      <input 
                        type="date"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                        value={modalDate}
                        onChange={(e) => setModalDate(e.target.value)}
                        required 
                      />
                    </div>

                    {/* Time Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Escolha a Hora</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                        value={modalTime}
                        onChange={(e) => setModalTime(e.target.value)}
                      >
                        <option value="08:00">08:00</option>
                        <option value="09:30">09:30</option>
                        <option value="11:00">11:00</option>
                        <option value="14:30">14:30</option>
                        <option value="16:00">16:00</option>
                        <option value="17:30">17:30</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsBookingModalOpen(false)}
                      className="flex-1 bg-gray-100 text-gray-700 font-sans font-bold text-xs py-3.5 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer border-none"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary text-white font-sans font-bold text-xs py-3.5 rounded-xl hover:bg-[#324a56] transition-colors cursor-pointer shadow-md"
                    >
                      Reservar Vaga
                    </button>
                  </div>

                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
