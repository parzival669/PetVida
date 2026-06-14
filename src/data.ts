import { StaffMember, ClinicalRoleResponsibility, Product, PetProfile, HealthPlan, Appointment } from './types';

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'isabella',
    name: 'Dra. Isabella Romeiro',
    role: 'Diretora Clínica & Fundadora',
    description: 'Com ampla experiência em clínica e cirurgia, a Dra. Isabella lidera a PetVida combinando cardiologia avançada, cirurgias complexas e clínica médica sob as diretrizes mais rigorosas de bem-estar animal.',
    image: '/Isabella.jpg',
    department: 'direcao',
    tags: ['Cardiologia', 'Cirurgia Geral', 'Clínica'],
    skills: ['Veterinária de Ponta', 'Ecocardiografia', 'Liderança Médica']
  },
  {
    id: 'maria-eduarda',
    name: 'Dra. Maria Eduarda Pintos',
    role: 'Médica Veterinária - Clínico & Biossegurança',
    description: 'Atua com foco em consultas gerais preventivas e no gerenciamento rigoroso de higiene hospitalar e desinfecção no internamento da clínica.',
    image: '/Maria Eduarda.jpg',
    department: 'especialistas',
    tags: ['Clínica Geral', 'Higiene', 'Biossegurança']
  },
  {
    id: 'giulia',
    name: 'Dra. Giulia Marchetti Balarin',
    role: 'Médica Veterinária Responsável',
    description: 'Responsável técnica da clínica perante os órgãos reguladores. Especialista em conformidade técnica, legislação sanitária, e supervisora de estética pet.',
    image: '/Giulia.jpg',
    department: 'especialistas',
    tags: ['Responsável Técnica', 'Preventiva', 'Estética']
  },
  {
    id: 'renata',
    name: 'Renata',
    role: 'Recepcionista & Auxiliar Veterinário',
    description: 'Responsável pelo atendimento carinhoso ao cliente, vendas, controle da agenda administrativa e apoio fundamental no manejo e contenção de exames.',
    image: '/Renata.jpg',
    department: 'apoio',
    tags: ['Recepção', 'Contenção', 'Atendimento']
  },
  {
    id: 'larissa',
    name: 'Dra. Larissa Zandonadi',
    role: 'Médica Veterinária - Anestesiologista',
    description: 'Especialista em anestesiologia veterinária de alta segurança, com foco em controle agudo de dor nas cirurgias e acompanhamento pós-operatório zeloso.',
    image: '/Larissa.jpg',
    department: 'especialistas',
    tags: ['Anestesia', 'Cirurgia', 'Recuperação']
  },
  {
    id: 'maria-luiza',
    name: 'Dra. Maria Luiza Carvalho',
    role: 'Médica Veterinária - Diagnóstico por Imagem',
    description: 'Especialista em ultrassom abdominal/torácico e exames de raio-x digitais, emitindo laudos detalhados que norteiam tratamentos de alta precisão.',
    image: '/Maria Luiza.jpg',
    department: 'apoio',
    tags: ['Ultrassonografia', 'Radiografia', 'Exames']
  },
  {
    id: 'maria-natalia',
    name: 'Dra. Maria Natália',
    role: 'Médica Veterinária - Cardiologista',
    description: 'Dedicada exclusivamente ao cuidado preventivo e tratamento de doenças cardíacas em pequenos animais, oferecendo exames precisos da especialidade.',
    image: '/Maria Natália.jpg',
    department: 'especialistas',
    tags: ['Cardiologia', 'Check-up', 'Bem-estar']
  }
];

export const CLINICAL_RESPONSIBILITIES: ClinicalRoleResponsibility[] = [
  {
    roleTitle: 'Médico Veterinário Responsável',
    personName: 'Dra. Giulia Marchetti Balarin',
    icon: 'ShieldCheck',
    responsibilities: [
      'Responsabilidade sanitária.',
      'Supervisão do banho e tosa.',
      'Controle de medicamentos.',
      'Procedimentos clínicos.',
      'Treinamento da equipe.',
      'Documentação e legislação.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Cardiologista',
    personName: 'Dra. Maria Natália',
    icon: 'HeartPulse',
    responsibilities: [
      'Atender em casos específicos da especialidade.',
      'Procedimentos clínicos.',
      'Bem-estar animal.',
      'Realizar os exames específicos.',
      'Acompanhar o tratamento.',
      'Prescrever medicamento.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Anestesiologista',
    personName: 'Dra. Larissa Zandonadi',
    icon: 'Activity',
    responsibilities: [
      'Orientar os tutores.',
      'Anestesia em cirurgias.',
      'Acompanhamento pós operatório.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Diagnóstico por Imagem',
    personName: 'Dra. Maria Luiza Carvalho',
    icon: 'Binary',
    responsibilities: [
      'Ultrassom e raio-x.',
      'Laudo para o médico veterinário especialista que fez o pedido do exame.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Clínico Geral',
    personName: 'Dra. Isabella Romeiro / Dra. Maria Eduarda Pintos',
    icon: 'Stethoscope',
    responsibilities: [
      'Faz consultas clínicas.',
      'Diagnóstico de doenças.',
      'Prescreve medicamentos.',
      'Aplica vacinas.',
      'Solicitar ou realizar exames.',
      'Orientar os tutores.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Cirurgião Geral',
    personName: 'Dra. Isabella Romeiro',
    icon: 'Scissors',
    responsibilities: [
      'Cirurgias como castração, retirada de tumores...',
      'Avaliação pré e pós cirúrgica.'
    ]
  },
  {
    roleTitle: 'Médico Veterinário - Auxiliar Veterinário',
    personName: 'Renata / Dra. Maria Luiza Carvalho',
    icon: 'HelpingHand',
    responsibilities: [
      'Contenção dos animais durante exames.',
      'Auxiliar geral em atendimento e cirurgias.',
      'Coleta de sangue e exames simples.'
    ]
  },
  {
    roleTitle: 'Auxiliar de Limpeza',
    personName: 'Dra. Maria Eduarda Pintos',
    icon: 'Sparkles',
    responsibilities: [
      'Limpeza e desinfecção das salas.',
      'Higienização das gaiolas e equipamentos.',
      'Descarte correto dos resíduos.',
      'Organização geral do ambiente.'
    ]
  },
  {
    roleTitle: 'Médico Profissional de Banho e Tosa',
    personName: 'Dra. Maria Luiza Carvalho / Dra. Giulia Marchetti Balarin',
    icon: 'Bath',
    responsibilities: [
      'Banho.',
      'Tose higiênica ou estética.',
      'Corte de unhas.',
      'Limpeza e escovação.'
    ]
  },
  {
    roleTitle: 'Recepcionista',
    personName: 'Renata',
    icon: 'PhoneCall',
    responsibilities: [
      'Faz o atendimento ao cliente.',
      'Organização da agenda.',
      'Parte administrativa.',
      'Vendas.',
      'Orientar os tutores.'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod1',
    name: 'Brinquedos Educativos',
    category: 'Brinquedos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbyYJw9r0Y2rvA4oPeBL_8K5CsYHHAnhItT-5NwrMjdwQTPsc0bW0mgwokaBsCLT0rQDap0vM_YXZ0ij591TSc2qCxddn76OJEdCybkN7b4M9wpvtcNCdVemiHwbF2OQVT_Zb2Xz7HM5G7qhSxQBTt2vAhxIHj2V_aPpc_rqjCBBysDz9KCnDMWEI8gNoJCaJr0bKBHTcyihDYqdtMdzztaSTepgUOsLY3Tb43j4AQ0z7wB3JQZYphRZYGc9NTpcpnBUbu2wwUxPI',
    badge: 'Destaque',
    tagline: 'Estímulo mental e físico.',
    price: 69.90
  },
  {
    id: 'prod2',
    name: 'Rações Premium',
    category: 'Nutrição',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfUtCy-xzmtQjrT0bMpwMgzhNEFmjDp7AwWNVttBm8DjVyIuLdUwVpOTvlRnamW5x-4TmhIWNsPj6vuzAatiSwWQokdrOuDfx0m_-nFhtWizailh9ClAXIBX47DmdtEp8TzGYWiUI0qyJcXNLK1Nl85o1ls18R4LTy6z96esI_P78NgWljTgEpYftmt6uF4jnHdZHcNGPO0FyPCXvPQvb-o55rkhNqIB88B6j97rYpDV5OCatxEwHeZiLG6uryZtKghPuN9LlahLY',
    badge: 'Sob Medida',
    tagline: 'Nutrição de alta performance para diferentes portes.',
    price: 189.90
  },
  {
    id: 'prod3',
    name: 'Conforto & Estilo',
    category: 'Acessórios',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEnylYzXAKbMVXiCBpgUTc9vziA2Z-Z-ku2taUJ3_gO3RfKFk0V5jv92XYFhsUGKHXBsEG0hDr9vWtuBhzDSgqRWtMm7CsUOVJp-IqqYfMzm_UwqyxvtvJJVGZi_TUSliz2Pz6DMcG9IAuurnKUyBFXVJDqu_SMEArIDiPBrlpXuKQ2EUHviLKAsRHBffhOSVFPK2D2DqRF1Zjp0M7aGMIaAdO5a8rDR8y5ZFX_zNnzQ9SKhGBK8kCQQ-kEQwB04YvgT7xUXFCtJY',
    badge: 'Novidades',
    tagline: 'Camas sofisticadas, peles macias e guias resistentes.',
    price: 249.90
  },
  {
    id: 'prod4',
    name: 'Farmácia Pet',
    category: 'Saúde',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEf967J3vNCyVACLquqLOOhoeSmlRxilkFOcM2cC-5wEt1HpuVT9kwUZPX-X6nLoBGuQcdOP9ZdndSMKRz82ktIGZ1SEKaDU9AAgzaJFaAXCycWoAVmkMwvnMVqcN2r-8ZsBRTAm2BWO9baU6Lv48zTwPPPYkrtCJXEHmcoZhiO_zawxlHKxlu7rUTkSs1l1SOj5DDgYZA78AVbhFl4MeFOcN-PwCyoBzx-mwaQ-CmozwU_WSvk0JjzJr7Y6b08U3NBWb5_yR-pwU',
    badge: 'Completa',
    tagline: 'Medicamentos, suplementos e suporte antiparasitário.',
    price: 124.90
  }
];

export const PET_BENTO_PROFILE: PetProfile = {
  name: 'Bento',
  breed: 'Golden Retriever (2 anos)',
  stars: 5,
  photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhB18xxYFLhXSlwxV4lYCozfhKDsKsij95qfKHjD4zR5RRWqWXMOCF0R5eJ0NYAbLOzsA0ZIjxOykWiWf0t4ObmGSYx8S9BfyNUCXt0C9sg4JCSqZfMhsC6RznJSOFk0cSLjKpBhCbej7yqf8jRs8awCv4gLIFQsHdhqF_5nwOeYPqYurKbwOPyeUopOxbu0_8S57Nb7y2DCveHQ2XIyOU_s3tsCKkGd99bDxcNQMoPHN2uS8imaAzBtXOwxGiuCS3RWgo_E23NjE',
  medicalRecords: [
    'Cardiopatia controlada detectada no check-up de filhote.',
    'Exames renais e hepáticos normais - Junho/2026.',
    'Limpeza de dentes preventiva efetuada com sucesso.'
  ],
  vaccines: [
    { name: 'V10 Importada (Obrigatória)', date: 'Março/2026', status: 'completed' },
    { name: 'Antirrábica Ética', date: 'Março/2026', status: 'completed' },
    { name: 'Gripe Canina (Pneumo)', date: 'Março/2026', status: 'completed' },
    { name: 'Leishmaniose (Dose Anual)', date: 'Agosto/2026', status: 'pending' },
    { name: 'Giárdia Protetora', date: 'Setembro/2026', status: 'pending' }
  ],
  diet: [
    'Ração super premium hipoalergênica (Gastrointestinal).',
    'Restrição rígida a petiscos ricos em sódio ou corantes artificiais.',
    'Consumo induzido de 1.2 litros de água limpa por dia.'
  ]
};

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt1',
    petName: 'Bento',
    service: 'Cardiologia Veterinária',
    doctor: 'Dra. Maria Natália',
    date: '2026-06-24',
    time: '14:30',
    status: 'upcoming'
  },
  {
    id: 'apt2',
    petName: 'Mel',
    service: 'Banho & Tosa Higiênica',
    doctor: 'Dra. Giulia Marchetti Balarin',
    date: '2026-06-05',
    time: '10:00',
    status: 'completed'
  },
  {
    id: 'apt3',
    petName: 'Bento',
    service: 'Clínica Geral Preventiva',
    doctor: 'Dra. Maria Eduarda Pintos',
    date: '2026-05-12',
    time: '16:00',
    status: 'completed'
  }
];

export const HEALTH_PLANS: HealthPlan[] = [
  {
    id: 'plan_basic',
    name: 'Plano Básico',
    price: 'R$ 119',
    period: 'mês',
    coverages: [
      'Consultas ilimitadas com clínico geral',
      'Desconto de 15% em vacinas e exames de faturamento',
      'Atendimento ambulatorial de suporte em horário de expediente',
      '1 banho higiênico gratuito ao mês'
    ],
    badgeColor: 'bg-primary-container text-on-primary-container',
    btnStyle: 'border border-primary text-primary hover:bg-primary/5'
  },
  {
    id: 'plan_int',
    name: 'Plano Intermediário',
    price: 'R$ 249',
    period: 'mês',
    coverages: [
      'Consultas ilimitadas (Clínico e Especialistas)',
      'Exames básicos de laboratório e raio-X totalmente inclusos',
      'Internações básicas ambulatoriais inclusas',
      'Coparticipação cirúrgica fixa em procedimentos menores',
      '2 banhos com tora higiênica grátis por mês'
    ],
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    btnStyle: 'bg-secondary text-white hover:opacity-90'
  },
  {
    id: 'plan_premium',
    name: 'Plano Premium Total',
    price: 'R$ 449',
    period: 'mês',
    coverages: [
      'Cuidado Veterinário e Exames complexos ilimitados',
      'Cirurgias vitais de qualquer porte 100% cobertas sem coparticipação',
      'Hemodiálise veterinária de apoio se indicado clinicamente',
      'Banhos ilimitados + tosa estética de qualquer raça inclusa',
      'Clube exclusivo de serviços com hospedagem e hotel grátis'
    ],
    badgeColor: 'bg-tertiary-container text-on-tertiary-container',
    btnStyle: 'bg-primary text-white hover:opacity-90 shadow-lg'
  }
];
