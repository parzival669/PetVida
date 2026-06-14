import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Dna, 
  Heart, 
  ShieldCheck, 
  ShowerHead,
  Sparkles, 
  ShoppingBag, 
  ChevronRight, 
  CheckCircle2, 
  Check, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data';

import { Product } from '../types';

interface ServicosViewProps {
  setCurrentPage: (page: string) => void;
  addToCart: (product: Product) => void;
}

export default function ServicosView({ setCurrentPage, addToCart }: ServicosViewProps) {
  const [selectedCareTab, setSelectedCareTab] = useState<'banho' | 'tosa' | 'hidratacao' | 'unhas'>('banho');
  const [checkoutProduct, setCheckoutProduct] = useState<string | null>(null);

  const aestheticDetails = {
    banho: {
      title: 'Banho Dermatológico Hipoalergênico',
      desc: 'Mais que estética, um tratamento preventivo de barreira cutânea. Indicado para peles sensíveis.',
      benefits: ['Apenas shampoos neutros e marcas dermatológicas recomendadas', 'Temperatura da água rigorosamente controlada', 'Secadores de baixo ruído para redução extrema do estresse', 'Algodão protetor de ouvido contra infiltração de água'],
      duration: '45-60 min'
    },
    tosa: {
      title: 'Tosa Higiênica e Estética de Raça',
      desc: 'Remoção cirúrgica de pelos em focos de sujeira acumulada e modelagem específica do padrão de raça.',
      benefits: ['Lâminas esterilizadas antialérgicas', 'Modelagem estética na tesoura por especialistas certificados', 'Limpeza da região das patinhas e períneo', 'Finalização suave Fear Free sem pressa'],
      duration: '60-90 min'
    },
    hidratacao: {
      title: 'Hidratação Profunda & Carding de Subpelo',
      desc: 'Especial para animais de pelo duplo ou longo. Combate embaraços severos e reduz queda em até 80%.',
      benefits: ['Máscaras reconstrutoras com óleos essenciais pet-safe', 'Carding técnico de subpelos sem ferir a epiderme', 'Desembaraço indolor com condicionador bifásico', 'Toque de brilho e maciez estendidos'],
      duration: '50-80 min'
    },
    unhas: {
      title: 'Corte de Unhas & Higiene Otológica',
      desc: 'Higiene básica essencial para prevenir acidentes com unhas compridas e otites silenciosas de ouvido.',
      benefits: ['Cortadores anatômicos e pós hemostático de segurança', 'Lixamento contra pontas pontiagudas irritadiças', 'Limpeza de orelhas com loções de extrato de calêndula', 'Inspeção do conduto auditivo por profissional treinado'],
      duration: '20 min'
    }
  };

  const handleBuyClick = (prod: Product) => {
    addToCart(prod);
    setCheckoutProduct(prod.name);
    setTimeout(() => {
      setCheckoutProduct(null);
    }, 4500);
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
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
            Hospitalidade & Saúde
          </span>
          <h1 className="font-display text-4xl font-extrabold text-[#111] tracking-tight">
            Nossos Serviços Integrados
          </h1>
          <p className="font-sans text-gray-600 max-w-xl mx-auto mt-4 font-semibold text-sm">
            Da prevenção inteligente à medicina diagnóstica de alta complexidade. Um fluxo contínuo de cuidado focado no bem-estar.
          </p>
        </div>

        {/* Dynamic Alert for Virtual Purchase */}
        {checkoutProduct && (
          <div className="fixed bottom-10 right-10 z-50 bg-[#d7e5bd] text-[#5a6747] border-2 border-[#5a6747]/20 p-5 rounded-2xl shadow-2xl max-w-md animate-bounce flex items-start gap-3">
            <Check className="w-5 h-5 shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold">Produto adicionado ao carrinho!</p>
              <p className="font-sans text-xs mt-1 font-semibold">O item "{checkoutProduct}" foi incluído na sua conta móvel virtual "PetVida". Finalize seu pedido na nossa recepção!</p>
            </div>
          </div>
        )}

        {/* 3 Core Blocks Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Preventivo */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-extrabold text-[#141f06] text-xl mb-3">Clínica & Prevenção</h3>
              <p className="font-sans text-xs font-semibold text-gray-500 leading-relaxed mb-6">
                Consultas de rotina, rastreamento geriátrico, controle sanitário de ectoparasitas e esquemas completos de vacinação das principais marcas internacionais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Check-ups integrados de saúde</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Aplicação ética de vacinas V10 e Raiva</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Laudo e monitoria de endocrinologia</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-50 mt-8 pt-6">
              <span className="text-[10px] text-gray-400 font-bold tracking-wider font-sans uppercase">Atenção Fear Free</span>
            </div>
          </div>

          {/* Centro Cirúrgico */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 flex items-center justify-center text-tertiary mb-6">
                <Dna className="w-6 h-6 text-tertiary" />
              </div>
              <h3 className="font-display font-extrabold text-[#141f06] text-xl mb-3">Centro Cirúrgico Seguro</h3>
              <p className="font-sans text-xs font-semibold text-gray-500 leading-relaxed mb-6">
                Centro anestésico equipado com ventilador microprocessado, eletrocardiograma contínuo e médico veterinário anestesiologista dedicado em tempo integral.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-tertiary" />
                  <span>Cirurgia de tecidos moles e castração</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-tertiary" />
                  <span>Ortopedia reconstrutiva veterinária</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-tertiary" />
                  <span>Monitoramento cardiológico invasivo</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-50 mt-8 pt-6">
              <span className="text-[10px] text-tertiary font-bold tracking-wider font-sans uppercase">Anestesia Inalatória Segura</span>
            </div>
          </div>

          {/* Imagem e Laboratório */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary mb-6">
                <Heart className="w-6 h-6 text-[#5a6747]" />
              </div>
              <h3 className="font-display font-extrabold text-[#141f06] text-xl mb-3">Diagnóstico Integrado</h3>
              <p className="font-sans text-xs font-semibold text-gray-500 leading-relaxed mb-6">
                Ultrassonografia com doppler vascular avançado e raio-X digital. O especialista clínico recebe o laudo detalhado e imagens para decisões rápidas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Ecocardiografia de alta frequência</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Patologia clínica (sangue, urina e fezes)</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-gray-700 font-bold font-sans">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Ultrassonografia abdominal preventiva</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-50 mt-8 pt-6">
              <span className="text-[10px] text-secondary font-bold tracking-wider font-sans uppercase">Resultados Rápidos</span>
            </div>
          </div>

        </div>

        {/* Estética & Bem-Estar Estético Section */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-14 border border-gray-150 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Pampering Cover Image left side */}
            <div className="relative">
              <img 
                alt="Banho fofinho" 
                className="rounded-3xl shadow-lg w-full object-cover max-h-[440px]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNjLWxNpuyqq-TEkCNtQYwIItY4xBlb805O2GHpFUi1cjLARINeQOv-R_FMzTqEZelb-bbg75AcrfzGdy5g_ENWVa5IPvUsBzeJGkjshxRGEurprO2rdl7tSzFx7Z2cNI0FdjrIqhfsjntNut3zT787Pv_mTBdnleUZJggZ36Z2cdezakTT6mZI4fPcU1exglwtfJMIEqr3F-vt2aSYsrjHlK_QiiYkSkFZWGSZrJqi7gwOyytxONaCO_4Az9gnNPnGC2EHcUpfk" 
              />
              <div className="absolute top-4 left-4 bg-white/95 px-4 font-display font-bold py-1.5 rounded-full text-xs text-primary shadow-sm">
                Estética Compassiva PetVida
              </div>
            </div>

            {/* Interactive Aesthetics block */}
            <div>
              <span className="text-[#874d60] font-bold text-xs uppercase tracking-widest bg-[#ffd9e2] px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
                Estética Integrada
              </span>
              <h2 className="font-display text-2.5xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug mb-2">
                Banho & Tosa Especializados
              </h2>
              <p className="font-sans text-xs text-gray-500 font-bold mb-6">
                Clique nos botões abaixo para ver as abordagens, durações e benefícios exclusivos do nosso spa.
              </p>

              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(Object.keys(aestheticDetails) as Array<keyof typeof aestheticDetails>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCareTab(key)}
                    className={`px-4.5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wide cursor-pointer transition-colors ${
                      selectedCareTab === key
                        ? 'bg-[#566343] text-white'
                        : 'bg-white text-gray-600 border border-gray-150 hover:bg-gray-100'
                    }`}
                  >
                    {key === 'banho' && 'Banho'}
                    {key === 'tosa' && 'Tosa Higiênica'}
                    {key === 'hidratacao' && 'Hidratação'}
                    {key === 'unhas' && 'Corte & Orelha'}
                  </button>
                ))}
              </div>

              {/* Active Tab Panel */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150/60 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-display font-bold text-base text-gray-900 leading-snug">
                    {aestheticDetails[selectedCareTab].title}
                  </h4>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md font-sans text-xs font-bold shrink-0">
                    Duração: {aestheticDetails[selectedCareTab].duration}
                  </span>
                </div>
                
                <p className="font-sans text-xs text-gray-500 font-semibold mb-4 leading-relaxed">
                  {aestheticDetails[selectedCareTab].desc}
                </p>

                <ul className="space-y-2.5">
                  {aestheticDetails[selectedCareTab].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 font-sans text-xs font-bold text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Curated Pet Shop Boutique showcase */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 tracking-tight">
              Boutique & Farmácia Integrada
            </h3>
            <p className="font-sans text-gray-500 font-bold text-xs mt-1">
              Curadoria seleta disponível na recepção da PetVida. Toque para incluir na sua conta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <div 
                key={prod.id} 
                className="group bg-white rounded-2xl p-4 border border-gray-150 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 mb-4 h-40">
                    <img 
                      alt={prod.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={prod.image}
                    />
                    <span className="absolute top-2 left-2 bg-primary text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                      {prod.badge}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-base">{prod.name}</h4>
                  <p className="font-sans text-xs text-gray-600 mt-1 font-semibold leading-relaxed mb-4">
                    {prod.tagline}
                  </p>
                </div>
                <button 
                  onClick={() => handleBuyClick(prod)}
                  className="w-full bg-gray-50 text-primary font-sans font-bold text-xs hover:bg-primary hover:text-white transition-all py-3 rounded-xl inline-flex items-center justify-center gap-1.5 cursor-pointer border border-gray-100 uppercase tracking-wider"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  Incluir na conta
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
