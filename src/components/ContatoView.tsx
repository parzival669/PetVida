import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContatoView() {
  const [name, setName] = useState('');
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // feedback state
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setIsSubmitSuccess(true);
      setName('');
      setPetName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic submission status */}
        {isSubmitSuccess && (
          <div className="mb-8 bg-green-50 text-green-800 border-2 border-green-200 p-6 rounded-2xl flex items-start gap-4 shadow-md max-w-2xl mx-auto animate-bounce">
            <CheckCircle2 className="w-6 h-6 text-green-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-extrabold text-green-900 text-lg">Mensagem enviada com sucesso!</p>
              <p className="font-sans text-xs mt-1 font-semibold">
                Muito obrigado pelo contato! Recebemos sua dúvida técnica ou comercial na central da PetVida. Responderemos você no Whatsapp ou e-mail indicados o mais rápido possível!
              </p>
            </div>
          </div>
        )}

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
            Fale Conosco
          </span>
          <h1 className="font-display text-4xl font-extrabold text-gray-900 tracking-tight">
            Canais de Atendimento PetVida
          </h1>
          <p className="font-sans text-gray-600 max-w-xl mx-auto mt-4 font-semibold text-sm">
            Nossa equipe clínica e comercial está pronta para tirar suas dúvidas e apoiar a reabilitação do seu pet.
          </p>
        </div>

        {/* Grid Contacts and form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Contacts info side - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Telephone card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm flex gap-4 min-h-[110px] items-center">
              <div className="w-12 h-12 rounded-2xl bg-primary-container/40 flex items-center justify-center text-primary shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-base">Atendimento Rápido</h4>
                <p className="font-sans text-xs text-gray-500 font-bold mt-1">(11) 4002-8922</p>
                <p className="font-sans text-[11px] text-gray-400 font-semibold mt-1">Whatsapp e ligação em horário comercial</p>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm flex gap-4 min-h-[110px] items-center">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-base">Email Institucional</h4>
                <p className="font-sans text-xs text-gray-500 font-bold mt-1">contato@petvida.com</p>
                <p className="font-sans text-[11px] text-gray-400 font-semibold mt-1">Garantia de resposta em até 24h úteis</p>
              </div>
            </div>

            {/* Operational hours */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm flex gap-4 min-h-[110px] items-center">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
                <Clock className="w-6 h-6 text-tertiary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-base">Nossos Horários</h4>
                <p className="font-sans text-xs text-gray-500 font-semibold mt-1">
                  <strong>Seg a Sex:</strong> das 8h às 22h
                </p>
                <p className="font-sans text-xs text-gray-500 font-semibold mt-0.5">
                  <strong>Sáb e Dom:</strong> das 9h às 18h
                </p>
              </div>
            </div>

            {/* Local Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm flex gap-4 min-h-[110px] items-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                <MapPin className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-base">Endereço da Clínica</h4>
                <p className="font-sans text-xs text-gray-500 font-semibold mt-1 leading-relaxed">
                  Rua das Patas, 123 - Centro, São Paulo - SP
                </p>
              </div>
            </div>

          </div>

          {/* Form input fields side - Spans 7 columns */}
          <div className="lg:col-span-7 bg-[#f8f9fa] rounded-3xl p-6 sm:p-8 border border-gray-150">
            <h3 className="font-display font-extrabold text-[#111] text-xl mb-1.5">
              Envie-nos um e-mail direto
            </h3>
            <p className="font-sans text-xs text-gray-500 font-semibold mb-6">
              Use o formulário abaixo para enviar dúvidas sobre exames, diagnósticos pendentes, vagas clínicas ou parcerias.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Nome Completo</label>
                  <input 
                    type="text"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Nome do Seu Pet</label>
                  <input 
                    type="text"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Opcional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Seu melhor E-mail</label>
                  <input 
                    type="email"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Celular / Whatsapp</label>
                  <input 
                    type="tel"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 font-sans uppercase mb-1.5">Mensagem ou Dúvida</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-sans font-bold text-xs py-4 rounded-xl hover:bg-opacity-95 transition-colors cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem Rápida
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
