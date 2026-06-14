import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Target, 
  Compass, 
  Award, 
  FolderCheck, 
  CheckCircle2, 
  ChevronRight, 
  Heart, 
  Sparkles,
  Search,
  UserCheck,
  ClipboardList
} from 'lucide-react';
import { CLINICAL_RESPONSIBILITIES } from '../data';

export default function SobreNosView() {
  const [selectedRole, setSelectedRole] = useState(CLINICAL_RESPONSIBILITIES[0].roleTitle);

  const activeRoleData = CLINICAL_RESPONSIBILITIES.find(r => r.roleTitle === selectedRole) || CLINICAL_RESPONSIBILITIES[0];

  const coreValues = [
    { title: 'Amor Incondicional', desc: 'Tratamos cada paciente como um familiar querido, respeitando o tempo, temperamento e sensibilidade individual.' },
    { title: 'Excelência diagnóstica', desc: 'Investimento perene em inovação diagnóstica do mercado para tomadas de decisão rápidas e precisas.' },
    { title: 'Abordagem Fear Free', desc: 'Ambiente livre de traumas, barulho de metal e estresse desnecessário para o pet e seu tutor.' },
    { title: 'Ética & Transparência', desc: 'Clareza plena na comunicação diagnóstica e financeira.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/40 px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
              Nossa Essência
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Amor inabalável pela medicina veterinária
            </h1>
            <p className="font-sans text-[#333] font-semibold text-sm leading-relaxed mb-6">
              Fundada em 2018 com o intuito de se tornar um verdadeiro porto seguro para animais e seus tutores, a PetVida nasceu da convergência de dois valores indissociáveis: excelência técnica irrestrita e carinho humanitário compassivo.
            </p>
            <p className="font-sans text-gray-600 text-sm leading-relaxed font-medium mb-8">
              Acreditamos que um bom atendimento veterinário vai muito além de prescrever remédios. Envolve entender o contexto do tutor, acolher o estresse do animal em sofrimento, adaptar técnicas de manipulação para acalmar mentes agitadas e garantir bem-estar cirúrgico de ponta.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-150 pt-8">
              <div>
                <span className="font-display font-black text-3xl text-primary block">10k+</span>
                <span className="font-sans text-xs text-gray-500 font-bold block mt-1">Exames diagnósticos efetuados</span>
              </div>
              <div>
                <span className="font-display font-black text-3xl text-secondary block">100%</span>
                <span className="font-sans text-xs text-gray-500 font-bold block mt-1">Dedicação Fear Free comprovada</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <img 
              alt="Cirurgia ou Exame" 
              className="rounded-3xl shadow-xl w-full object-cover max-h-[480px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhB18xxYFLhXSlwxV4lYCozfhKDsKsij95qfKHjD4zR5RRWqWXMOCF0R5eJ0NYAbLOzsA0ZIjxOykWiWf0t4ObmGSYx8S9BfyNUCXt0C9sg4JCSqZfMhsC6RznJSOFk0cSLjKpBhCbej7yqf8jRs8awCv4gLIFQsHdhqF_5nwOeYPqYurKbwOPyeUopOxbu0_8S57Nb7y2DCveHQ2XIyOU_s3tsCKkGd99bDxcNQMoPHN2uS8imaAzBtXOwxGiuCS3RWgo_E23NjE" 
            />
          </div>
        </div>

        {/* Mission, Vision, Values Container */}
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-xl mb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
              <Target className="w-6 h-6 text-[#355461]" />
            </div>
            <h3 className="font-display font-bold text-[#141f06] text-xl">Nossa Missão</h3>
            <p className="font-sans text-sm text-gray-600 font-semibold leading-relaxed">
              Proteger e elevar a saúde dos pets com excelência diagnóstica, prestando apoio compassivo e educação proativa aos tutores comprometidos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
              <Compass className="w-6 h-6 text-[#5a6747]" />
            </div>
            <h3 className="font-display font-bold text-[#141f06] text-xl">Nossa Visão</h3>
            <p className="font-sans text-sm text-gray-600 font-semibold leading-relaxed">
              Ser a principal referência em atendimento veterinário carinhoso e clínica preventiva moderna, harmonizando medicina integrada e bem-estar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center text-tertiary">
              <Heart className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="font-display font-bold text-[#141f06] text-xl">Nossos Valores</h3>
            <p className="font-sans text-sm text-gray-600 font-semibold leading-relaxed">
              Respeito incondicional à vida animal, gentileza total com tutores, ética sem concessões e melhoria técnica científica acadêmica ininterrupta.
            </p>
          </div>
        </div>

        {/* Interactive slide-based organizational tree */}
        <div className="bg-[#f2f6f8] rounded-3xl p-8 md:p-12 border border-gray-200/60">
          <div className="text-center mb-10">
            <span className="text-[#874d60] font-bold text-xs uppercase tracking-widest bg-[#ffd9e2] px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
              Matriz de Responsabilidade
            </span>
            <h2 className="font-display text-2.5xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Estrutura Organizacional Clínica
            </h2>
            <p className="font-sans font-semibold text-xs text-gray-500 max-w-lg mx-auto mt-2.5 leading-relaxed">
              Como cada papel essencial é estruturado na PetVida para garantir o fluxo perfeito do acolhimento à liberação (Verbatim dos Slides).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Roles Buttons list on left */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin">
              {CLINICAL_RESPONSIBILITIES.map((role) => (
                <button
                  key={role.roleTitle}
                  onClick={() => setSelectedRole(role.roleTitle)}
                  className={`w-full text-left py-4 px-5 rounded-xl font-display font-semibold text-sm flex items-center justify-between transition-all cursor-pointer ${
                    selectedRole === role.roleTitle
                      ? 'bg-primary text-white shadow-md font-bold'
                      : 'bg-white text-gray-700 hover:bg-gray-150 border border-gray-150'
                  }`}
                >
                  <span className="truncate">{role.roleTitle}</span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    selectedRole === role.roleTitle ? 'translate-x-1' : ''
                  }`} />
                </button>
              ))}
            </div>

            {/* Selected responsibilities checklist card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-gray-150 shadow-sm min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider font-sans block">Função Ativa</span>
                    <h3 className="font-display text-xl font-bold text-gray-900 mt-1">{activeRoleData.roleTitle}</h3>
                  </div>
                  {activeRoleData.personName && (
                    <div className="bg-[#d7e5bd] text-[#5a6747] px-3.5 py-1.5 rounded-full font-sans text-xs font-bold leading-normal">
                      Titular: {activeRoleData.personName}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 font-sans mb-3">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  <span>Atribuições e Deveres Clínicos de Inspeção:</span>
                </div>

                {/* Checklist from slides */}
                <ul className="space-y-3.5 pl-1">
                  {activeRoleData.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-gray-700 font-semibold leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-sans text-gray-400 font-bold">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Em plena conformidade sanitária e veterinária</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Details Grid */}
        <div className="py-20">
          <div className="text-center mb-12">
            <h3 className="font-display font-extrabold text-2xl text-gray-900">
              Pilares de Nosso Compromisso Ético
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-primary mb-3">{val.title}</h4>
                  <p className="font-sans text-xs text-gray-600 font-semibold leading-relaxed">{val.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-gray-300 block mt-4 select-none">PILAR {i+1}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
