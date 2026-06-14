import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  HeartPulse, 
  Activity, 
  Binary, 
  Stethoscope, 
  Scissors, 
  HelpingHand, 
  Sparkles, 
  Bath, 
  PhoneCall,
  CheckCircle,
  Clock,
  User,
  CheckCircle2,
  ChevronDown,
  Award
} from 'lucide-react';
import { STAFF_MEMBERS } from '../data';

const STAFF_FALLBACKS_MAP: Record<string, string[]> = {
  isabella: [
    '/Isabella.jpg',
    '/isabella.jpg',
    '/assets/Isabella.jpg',
    '/assets/isabella.jpg',
  ],
  'maria-eduarda': [
    '/Maria Eduarda.jpg',
    '/maria-eduarda.jpg',
    '/Maria-Eduarda.jpg',
    '/maria_eduarda.jpg',
    '/assets/Maria Eduarda.jpg',
    '/assets/maria-eduarda.jpg',
  ],
  giulia: [
    '/Giulia.jpg',
    '/giulia.jpg',
    '/assets/Giulia.jpg',
    '/assets/giulia.jpg',
  ],
  renata: [
    '/Renata.jpg',
    '/renata.jpg',
    '/assets/Renata.jpg',
    '/assets/renata.jpg',
  ],
  larissa: [
    '/Larissa.jpg',
    '/larissa.jpg',
    '/assets/Larissa.jpg',
    '/assets/larissa.jpg',
  ],
  'maria-luiza': [
    '/Maria Luiza.jpg',
    '/maria-luiza.jpg',
    '/Maria-Luiza.jpg',
    '/maria_luiza.jpg',
    '/assets/Maria Luiza.jpg',
    '/assets/maria-luiza.jpg',
  ],
  'maria-natalia': [
    '/Maria Natália.jpg',
    '/maria-natalia.jpg',
    '/Maria-Natalia.jpg',
    '/maria_natalia.jpg',
    '/Maria Natalia.jpg',
    '/assets/Maria Natália.jpg',
    '/assets/maria-natalia.jpg',
  ]
};

// Define localized role data extracted directly from the user slides
const SLIDE_ROLES_MAP: Record<string, { roleTitle: string, icon: any, points: string[] }[]> = {
  isabella: [
    {
      roleTitle: 'Médico Veterinário - Cirurgião Geral',
      icon: Scissors,
      points: [
        'Cirurgias como castração, retirada de tumores...',
        'Avaliação pré e pós cirúrgica.'
      ]
    },
    {
      roleTitle: 'Médico Veterinário - Clínico Geral',
      icon: Stethoscope,
      points: [
        'Faz consultas clínicas.',
        'Diagnóstico de doenças.',
        'Prescreve medicamentos.',
        'Aplica vacinas.',
        'Solicitar ou realizar exames.',
        'Orientar os tutores.'
      ]
    }
  ],
  'maria-eduarda': [
    {
      roleTitle: 'Médico Veterinário - Clínico Geral',
      icon: Stethoscope,
      points: [
        'Faz consultas clínicas.',
        'Diagnóstico de doenças.',
        'Prescreve medicamentos.',
        'Aplica vacinas.',
        'Solicitar ou realizar exames.',
        'Orientar os tutores.'
      ]
    },
    {
      roleTitle: 'Auxiliar de Limpeza',
      icon: Sparkles,
      points: [
        'Limpeza e desinfecção das salas.',
        'Higienização das gaiolas e equipamentos.',
        'Descarte correto dos resíduos.',
        'Organização geral do ambiente.'
      ]
    }
  ],
  giulia: [
    {
      roleTitle: 'Médico Veterinário Responsável',
      icon: ShieldCheck,
      points: [
        'Responsabilidade sanitária.',
        'Supervisão do banho e tosa.',
        'Controle de medicamentos.',
        'Procedimentos clínicos.',
        'Treinamento da equipe.',
        'Documentação e legislação.'
      ]
    },
    {
      roleTitle: 'Médico Profissional de Banho e Tosa',
      icon: Bath,
      points: [
        'Banho.',
        'Tose higiênica ou estética.',
        'Corte de unhas.',
        'Limpeza e escovação.'
      ]
    }
  ],
  renata: [
    {
      roleTitle: 'Recepcionista',
      icon: PhoneCall,
      points: [
        'Faz o atendimento ao cliente.',
        'Organização da agenda.',
        'Parte administrativa.',
        'Vendas.',
        'Orientar os tutores.'
      ]
    },
    {
      roleTitle: 'Médico Veterinário - Auxiliar Veterinário',
      icon: HelpingHand,
      points: [
        'Contenção dos animais durante exames.',
        'Auxiliar geral em atendimento e cirurgias.',
        'Coleta de sangue e exames simples.'
      ]
    }
  ],
  larissa: [
    {
      roleTitle: 'Médico Veterinário - Anestesiologista',
      icon: Activity,
      points: [
        'Orientar os tutores.',
        'Anestesia em cirurgias.',
        'Acompanhamento pós operatório.'
      ]
    }
  ],
  'maria-luiza': [
    {
      roleTitle: 'Médico Veterinário - Diagnóstico por Imagem',
      icon: Binary,
      points: [
        'Ultrassom e raio-x.',
        'Laudo para o médico veterinário especialista que fez o pedido do exame.'
      ]
    },
    {
      roleTitle: 'Médico Veterinário - Auxiliar Veterinário',
      icon: HelpingHand,
      points: [
        'Contenção dos animais durante exames.',
        'Auxiliar geral em atendimento e cirurgias.',
        'Coleta de sangue e exames simples.'
      ]
    },
    {
      roleTitle: 'Médico Profissional de Banho e Tosa',
      icon: Bath,
      points: [
        'Banho.',
        'Tose higiênica ou estética.',
        'Corte de unhas.',
        'Limpeza e escovação.'
      ]
    }
  ],
  'maria-natalia': [
    {
      roleTitle: 'Médico Veterinário - Cardiologista',
      icon: HeartPulse,
      points: [
        'Atender em casos específicos da especialidade.',
        'Procedimentos clínicos.',
        'Bem-estar animal.',
        'Realizar os exames específicos.',
        'Acompanhar o tratamento.',
        'Prescrever medicamento.'
      ]
    }
  ]
};

export default function EquipeView() {
  // Store dynamic active selected sub-role for each staff card to switch their responsibility bullets
  const [activeSubRoleMap, setActiveSubRoleMap] = useState<Record<string, number>>({
    isabella: 0,
    'maria-eduarda': 0,
    giulia: 0,
    renata: 0,
    larissa: 0,
    'maria-luiza': 0,
    'maria-natalia': 0
  });

  // Persistent photo uploader storage inside browser localStorage
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('petvida_custom_staff_photos');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });



  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16 bg-gradient-to-b from-[#fbfcfc] to-[#f4f7f6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title section */}
        <div className="text-center mb-16">
          <span className="text-[#874d60] font-bold text-xs uppercase tracking-widest bg-[#ffd9e2] px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
            A Nova Qualidade Clínica
          </span>
          <h1 className="font-display text-4xl font-extrabold text-[#1a3038] tracking-tight sm:text-5xl">
            Corpo Clínico & Responsabilidades
          </h1>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto mt-4 font-semibold text-sm leading-relaxed">
            Substituímos os slides pela nossa matriz de responsabilidade real e interativa. Clique em cada atribuição de papel abaixo de nossos profissionais para visualizar suas tarefas regulatórias exatas escritas nos slides.
          </p>

        </div>

        {/* Dynamic Bento Cards Grid for Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {STAFF_MEMBERS.map((staff) => {
            const rolesList = SLIDE_ROLES_MAP[staff.id] || [];
            const activeSubIndex = activeSubRoleMap[staff.id] ?? 0;
            const currentActiveRole = rolesList[activeSubIndex] || rolesList[0];

            return (
              <div 
                key={staff.id} 
                className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-8 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar and Profile Details */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-100 pb-6 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md relative bg-gray-50 flex items-center justify-center">
                        <img 
                          alt={staff.name} 
                          className="w-full h-full object-cover object-center" 
                          src={customPhotos[staff.id] || staff.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=250'}
                          referrerPolicy="no-referrer"
                          data-error-idx="0"
                          onError={(e) => {
                            // Only try fallbacks if they haven't uploaded a custom photo that's currently failing
                            if (customPhotos[staff.id]) return;
                            const currentTarget = e.currentTarget;
                            const currentIdx = parseInt(currentTarget.getAttribute('data-error-idx') || '0', 10);
                            const fallbacks = STAFF_FALLBACKS_MAP[staff.id] || [];
                            const nextIdx = currentIdx + 1;
                            if (nextIdx < fallbacks.length) {
                              currentTarget.setAttribute('data-error-idx', String(nextIdx));
                              currentTarget.src = fallbacks[nextIdx];
                            }
                          }}
                        />
                      </div>

                      <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1.5 rounded-full shadow-md z-10">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                        <h2 className="font-display font-bold text-xl text-gray-900 leading-tight">
                          {staff.name}
                        </h2>
                      </div>
                      <span className="bg-[#e4ebed] text-primary text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider font-display inline-block mb-3">
                        {staff.role}
                      </span>
                      <p className="font-sans text-xs text-gray-600 font-semibold leading-relaxed">
                        {staff.description}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Interactive Slide responsibilities tabs with active sub-roles */}
                  {rolesList.length > 0 && (
                    <div className="mt-4">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans block mb-3">
                        Matriz de Atribuição (Clique para alternar):
                      </span>
                      
                      {/* Sub-roles Tab list buttons */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {rolesList.map((roleObj, idx) => {
                          const IconComp = roleObj.icon;
                          const isActive = idx === activeSubIndex;
                          return (
                            <button
                              key={roleObj.roleTitle}
                              onClick={() => setActiveSubRoleMap(prev => ({ ...prev, [staff.id]: idx }))}
                              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display font-semibold transition-all cursor-pointer border ${
                                isActive 
                                  ? 'bg-[#dbe9ec] text-primary border-[#aad0d8] font-bold shadow-xs' 
                                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                              }`}
                            >
                              <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                              <span className="max-w-[150px] truncate">{roleObj.roleTitle.replace('Médico Veterinário - ', '')}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Content details: Specific bullet points belonging to that sub-role */}
                      {currentActiveRole && (
                        <div className="bg-[#fcfdfe] rounded-2xl p-5 border border-gray-100/90 relative overflow-hidden transition-all duration-350">
                          <div className="flex items-center gap-2 mb-3.5 border-b border-gray-50 pb-2">
                            <span className="w-1.5 h-3 rounded-full bg-secondary shrink-0" />
                            <h4 className="font-display font-bold text-sm text-gray-800">
                              {currentActiveRole.roleTitle}
                            </h4>
                          </div>

                          <ul className="space-y-2.5">
                            {currentActiveRole.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span className="font-sans text-[12.5px] text-gray-700 font-semibold leading-relaxed">
                                  {pt}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card footer: Quick visual check indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary font-sans">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Registro Oficial PetVida</span>
                  </div>
                  <span className="bg-[#f0f4f5] text-primary px-2.5 py-1 rounded-md text-[10px] tracking-wide font-display font-extrabold uppercase">
                    Em Atividade
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Standard Care CTA Box */}
        <div className="mt-20 bg-[#1a3038] rounded-3xl p-8 md:p-12 text-white border border-transparent shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 select-none pointer-events-none">
            <HeartPulse className="w-96 h-96 text-white" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="bg-[#874d60] text-[#ffd9e2] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider font-display inline-block mb-3">
              Certificação e Conformidade
            </span>
            <h2 className="font-display text-2.5xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Qualidade Técnica Supervisionada Diariamente
            </h2>
            <p className="font-sans text-gray-300 text-sm leading-relaxed font-semibold mb-6">
              Todos os nossos funcionários clínicos e de atendimento atuam sob estrita conformidade com o Manual de Biossegurança Integrativa da PetVida. Desde a contenção acolhedora do tutor à higienização molecular profunda de leitos, zelamos pelo amor incondicional sem estresse (Fear Free).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold font-sans">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Supervisão Veterinária Técnica Integral Doméstica</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Práticas Clínicas Isentas de Estresse Acústico</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
