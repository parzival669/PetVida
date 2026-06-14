import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Sparkles, 
  Check, 
  Trash2, 
  Plus, 
  AlertCircle,
  FileCheck,
  ShieldAlert,
  Dna,
  BadgeAlert
} from 'lucide-react';
import { Appointment, PetProfile, HealthPlan } from '../types';
import { PET_BENTO_PROFILE, HEALTH_PLANS } from '../data';

interface AgendamentoViewProps {
  appointments: Appointment[];
  addAppointment: (newApt: Appointment) => void;
  removeAppointment: (id: string) => void;
}

export default function AgendamentoView({ appointments, addAppointment, removeAppointment }: AgendamentoViewProps) {
  // Booking Form State
  const [petName, setPetName] = useState('Bento');
  const [service, setService] = useState('Cardiologia Veterinária');
  const [doctor, setDoctor] = useState('Dra. Isabella Romeiro');
  const [date, setDate] = useState('2026-06-25');
  const [time, setTime] = useState('09:00');
  
  // UI states
  const [bookedSuccess, setBookedSuccess] = useState<Appointment | null>(null);
  const [signedPlan, setSignedPlan] = useState<string | null>(null);
  const [rescheduleMsg, setRescheduleMsg] = useState<string | null>(null);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newApt: Appointment = {
      id: `apt_${Date.now()}`,
      petName,
      service,
      doctor,
      date,
      time,
      status: 'upcoming'
    };

    addAppointment(newApt);
    setBookedSuccess(newApt);
    
    // Clear form defaults or reset with Bento
    setTimeout(() => {
      setBookedSuccess(null);
    }, 5000);
  };

  const handleSignPlan = (planName: string) => {
    setSignedPlan(planName);
    setTimeout(() => {
      setSignedPlan(null);
    }, 4500);
  };

  const handleRescheduleClick = (appt: Appointment) => {
    setRescheduleMsg(`Para remarcar o agendamento de "${appt.service}" de ${appt.date} às ${appt.time}, entre em contato com nossa recepção central via Whatsapp pelo fone (11) 4002-8922.`);
    setTimeout(() => {
      setRescheduleMsg(null);
    }, 7000);
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
        
        {/* Dynamic Booking Success Alert */}
        {bookedSuccess && (
          <div className="mb-8 bg-green-50 text-green-800 border-2 border-green-200 p-6 rounded-2xl flex items-start gap-4 shadow-md max-w-2xl mx-auto animate-bounce">
            <Check className="w-6 h-6 text-green-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-extrabold text-green-900 text-lg">Consulta agendada com sucesso!</p>
              <p className="font-sans text-xs mt-1 font-semibold">
                Tudo certo! Confirmamos a consulta de <strong>{bookedSuccess.petName}</strong> para o dia <strong>{bookedSuccess.date}</strong> às <strong>{bookedSuccess.time}</strong> com <strong>{bookedSuccess.doctor}</strong>. Guardamos sua vaga!
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Plan Signing Success Alert */}
        {signedPlan && (
          <div className="mb-8 bg-amber-50 text-amber-800 border-2 border-amber-200 p-6 rounded-2xl flex items-start gap-4 shadow-md max-w-2xl mx-auto">
            <Sparkles className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-extrabold text-amber-900 text-lg">Proposta de adesão enviada!</p>
              <p className="font-sans text-xs mt-1 font-semibold">
                Que legal! Sua proposta para assinatura do <strong>{signedPlan}</strong> foi enviada aos consultores da clínica PetVida. Entraremos em contato no telefone de cadastro em até 24 horas úteis.
              </p>
            </div>
          </div>
        )}

        {/* Reschedule Alert Context */}
        {rescheduleMsg && (
          <div className="mb-8 bg-[#f2f6f8] text-[#355461] border border-primary/20 p-5 rounded-2xl flex items-start gap-3 shadow-md max-w-2xl mx-auto">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="font-sans text-xs font-semibold leading-relaxed">
              {rescheduleMsg}
            </p>
          </div>
        )}

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
            Prontuário & Atendimento
          </span>
          <h1 className="font-display text-4xl font-extrabold text-gray-900 tracking-tight">
            Meu Centro de Agendamento
          </h1>
          <p className="font-sans text-xs text-gray-500 font-bold max-w-lg mx-auto mt-2 leading-relaxed">
            Consulte prontuários digitais do seu pet, veja o andamento da vacinação e solicite novos horários de consultas.
          </p>
        </div>

        {/* Profile and Bookings side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* DIGITAL MEDICAL PROFILE (Prontuário do Pet) - Spans 5 columns */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-xl">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5 mb-5">
              <img 
                alt={PET_BENTO_PROFILE.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-secondary" 
                src={PET_BENTO_PROFILE.photo}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-extrabold text-xl text-gray-950 leading-none">
                    {PET_BENTO_PROFILE.name}
                  </h4>
                  <div className="flex gap-0.5 text-amber-500 text-xs">
                    {"★".repeat(PET_BENTO_PROFILE.stars)}
                  </div>
                </div>
                <p className="font-sans text-xs text-gray-500 mt-1.5 font-bold">
                  {PET_BENTO_PROFILE.breed}
                </p>
              </div>
            </div>

            {/* Medical Notes */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 font-sans mb-3">
                <FileCheck className="w-4 h-4 text-primary" />
                <span>Histórico Médico (Prontuário):</span>
              </div>
              <ul className="space-y-2.5">
                {PET_BENTO_PROFILE.medicalRecords.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#f2f6f8] p-3 rounded-xl border border-primary/5">
                    <span className="text-primary font-bold text-xs mt-0.5">•</span>
                    <span className="font-sans text-xs font-bold text-gray-700 leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vaccines list (Completed vs pending) */}
            <div className="mb-6 border-t border-gray-100 pt-5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#874d60] font-sans mb-3.5 bg-[#ffd9e2]/30 px-3 py-1.5 rounded-lg w-fit">
                <BadgeAlert className="w-4 h-4 text-[#874d60]" />
                <span>Calendário de Vacinas:</span>
              </div>
              <div className="space-y-2.5 pl-1">
                {PET_BENTO_PROFILE.vaccines.map((v, i) => (
                  <div key={i} className="flex justify-between items-center bg-gray-50 p-2 px-3.5 rounded-lg border border-gray-150">
                    <span className="font-sans text-xs font-bold text-gray-800">{v.name}</span>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      v.status === 'completed'
                        ? 'bg-[#d7e5bd] text-[#5a6747]'
                        : 'bg-amber-100 text-amber-700 font-black animate-pulse'
                    }`}>
                      {v.status === 'completed' ? 'Aplicada' : `Pendente (${v.date})`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Restricted diet points */}
            <div className="border-t border-gray-100 pt-5">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans block mb-3">Restrições Alimentares</span>
              <ul className="space-y-2 font-sans text-xs text-gray-600 font-semibold pl-1">
                {PET_BENTO_PROFILE.diet.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary font-extrabold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ACTIVE BOOKINGS LIST & NEW BOOKING ENGINE - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Active Bookings list */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-xl">
              <h3 className="font-display font-extrabold text-xl text-gray-900 border-b border-gray-100 pb-3.5 mb-5">
                Meus Agendamentos de Consultas
              </h3>

              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div 
                    key={apt.id} 
                    className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                      apt.status === 'upcoming'
                        ? 'bg-[#abcbdb]/15 border-primary/20'
                        : 'bg-gray-50 border-gray-150 opacity-80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-display font-black text-gray-900 text-base">{apt.petName}</span>
                        <span className={`text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide ${
                          apt.status === 'upcoming'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {apt.status === 'upcoming' ? 'Agendado' : 'Realizado'}
                        </span>
                      </div>
                      
                      <p className="font-sans text-xs font-bold text-gray-700 mt-1.5">{apt.service} — {apt.doctor}</p>
                      
                      <div className="flex items-center gap-4 mt-3 text-[11px] font-sans text-gray-400 font-bold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {apt.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {apt.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-center">
                      {apt.status === 'upcoming' ? (
                        <>
                          <button 
                            onClick={() => handleRescheduleClick(apt)}
                            className="bg-white text-primary border border-gray-200 hover:bg-gray-50 font-sans font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
                          >
                            Remarcar
                          </button>
                          <button 
                            onClick={() => removeAppointment(apt.id)}
                            className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-all border-none cursor-pointer"
                            title="Desmarcar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <span className="text-gray-400 font-sans text-xs font-bold">Consulta Concluída</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Health Plans Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="text-center mb-14">
            <span className="text-[#874d60] font-bold text-xs uppercase tracking-widest bg-[#ffd9e2] px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
              Segurança Familiar
            </span>
            <h2 className="font-display text-2.5xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Planos de Saúde Preventivos PetVida
            </h2>
            <p className="font-sans text-xs text-gray-500 max-w-lg mx-auto mt-2 leading-relaxed font-bold">
              Evite gastos surpresa com internações ou urgências. Escolha a mensalidade adequada do plano corporativo PetVida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HEALTH_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 rounded-full font-sans text-[10px] font-extrabold uppercase ${plan.badgeColor}`}>
                      Mais Vendido
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-xl text-gray-900 mb-2">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-4">
                    <span className="font-display font-black text-3.5xl text-gray-950">{plan.price}</span>
                    <span className="font-sans text-xs text-gray-400 font-semibold">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.coverages.map((cov, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-gray-700 font-semibold leading-relaxed">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{cov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleSignPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wide cursor-pointer text-center ${plan.btnStyle}`}
                >
                  Contratar este Plano
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
