import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Play, 
  Heart, 
  ShowerHead, 
  ShoppingBag, 
  Home, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { PRODUCTS } from '../data';

interface InicioViewProps {
  setCurrentPage: (page: string) => void;
  openBookingModal: () => void;
}

export default function InicioView({ setCurrentPage, openBookingModal }: InicioViewProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setNewsletterSuccess(false);
      }, 5000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-100 py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Capa PetVida" 
            className="w-full h-full object-cover object-center" 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/40 md:bg-transparent p-6 md:p-0 rounded-2xl backdrop-blur-sm md:backdrop-blur-none">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-[#d7e5bd] text-[#5a6747] px-4 py-1.5 rounded-full font-sans text-xs font-bold mb-6 tracking-wide uppercase"
            >
              🐾 Seu pet em boas mãos
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Cuidado completo para o seu <span className="text-primary font-black relative">melhor amigo!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-base sm:text-lg text-gray-700 mb-10 max-w-lg leading-relaxed font-medium"
            >
              Oferecemos o que há de mais moderno em medicina veterinária de ponta, exames integrados e serviços estéticos, com o carinho e dedicação Fear Free que eles merecem.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={openBookingModal}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#324a56] hover:shadow-xl active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
              <button 
                onClick={() => setCurrentPage('servicos')}
                className="bg-white/95 text-primary border border-gray-200 px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                <Play className="w-4 h-4 fill-current text-primary" />
                Ver Serviços
              </button>
            </motion.div>
          </div>
        </div>


      </section>

      {/* Services Bento Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#874d60] font-bold text-xs uppercase tracking-widest bg-[#ffd9e2] px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
              Portfólio de Cuidado
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Nossos Serviços Integrados
            </h2>
            <p className="font-sans text-gray-600 max-w-xl mx-auto mt-4 font-semibold text-sm">
              Tudo o que seu pet precisa em diagnóstico, rotina e bem-estar em um só local seguro, climatizado e confortável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* LARGE CLINIC CARD (Spans 2 columns, 2 rows equivalent) */}
            <div className="md:col-span-2 md:row-span-2 bg-[#abcbdb]/50 hover:bg-[#96bdcf]/65 border border-primary/10 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 shadow-sm flex flex-col justify-between h-[360px] md:h-[440px]">
              <div className="relative z-10">
                <span className="bg-primary text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider font-display inline-block mb-4">
                  Especialidade Médica
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1a3440] mb-2">Clínica Veterinária</h3>
                <p className="font-sans text-[#2c4754] text-sm max-w-sm font-medium leading-relaxed">
                  Consultas clínicas com profissionais apaixonados, vacinação importada ética, exames de diagnósticos rápidos de urgência e reabilitação.
                </p>
              </div>
              <div className="relative z-10">
                <button 
                  onClick={() => setCurrentPage('servicos')}
                  className="bg-white/40 text-[#1a3440] font-sans font-bold text-xs hover:bg-white/75 transition-colors px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Saiba mais sobre a clínica
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <img 
                alt="Clínica Veterinária"
                className="absolute right-0 bottom-0 top-0 h-full w-full object-cover object-left opacity-35 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhB18xxYFLhXSlwxV4lYCozfhKDsKsij95qfKHjD4zR5RRWqWXMOCF0R5eJ0NYAbLOzsA0ZIjxOykWiWf0t4ObmGSYx8S9BfyNUCXt0C9sg4JCSqZfMhsC6RznJSOFk0cSLjKpBhCbej7yqf8jRs8awCv4gLIFQsHdhqF_5nwOeYPqYurKbwOPyeUopOxbu0_8S57Nb7y2DCveHQ2XIyOU_s3tsCKkGd99bDxcNQMoPHN2uS8imaAzBtXOwxGiuCS3RWgo_E23NjE" 
              />
            </div>

            {/* BANHO E TOSA */}
            <div 
              onClick={() => setCurrentPage('servicos')}
              className="md:col-span-2 bg-[#d7e5bd]/50 hover:bg-[#c9daab]/70 border border-[#566343]/10 rounded-3xl p-8 flex items-center justify-between group cursor-pointer transition-all duration-300 shadow-sm overflow-hidden min-h-[200px]"
            >
              <div className="max-w-[65%]">
                <span className="text-[#3f4b2d] font-bold text-[10px] uppercase tracking-widest bg-[# dae8c0] px-2 py-1 rounded-full mb-3 inline-block">
                  Aesthetics & Spa
                </span>
                <h3 className="font-display text-2xl font-bold text-[#232c18] mb-1">Banho & Tosa</h3>
                <p className="font-sans text-[#445232] text-sm font-medium leading-relaxed">
                  Estética animal de excelência com produtos hipoalergênicos premium.
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-secondary shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <ShowerHead className="w-8 h-8 text-[#566343]" />
              </div>
            </div>

            {/* PET SHOP */}
            <div 
              onClick={() => setCurrentPage('servicos')}
              className="bg-[#fbb2c8]/30 hover:bg-[#faa1b9]/40 border border-[#874d60]/10 rounded-3xl p-8 group cursor-pointer transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[210px] overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-white/75 flex items-center justify-center text-tertiary">
                <ShoppingBag className="w-5 h-5 text-tertiary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#552735] mb-1">Pet Shop</h3>
                <p className="font-sans text-[#6f3d4c] text-xs font-semibold leading-relaxed">
                  Melhores marcas de rações, suprimentos essenciais e brinquedos.
                </p>
              </div>
              <span className="text-xs font-bold text-tertiary flex items-center gap-1.5 mt-2 group-hover:pl-1 transition-all">
                Ver Loja <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* HOTEL */}
            <div 
              onClick={() => setCurrentPage('servicos')}
              className="bg-gray-100 hover:bg-gray-200/80 border border-gray-200/50 rounded-3xl p-8 group cursor-pointer transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[210px] overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-primary">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-gray-800 mb-1">Hotel Pet</h3>
                <p className="font-sans text-gray-600 text-xs font-semibold leading-relaxed">
                  Acomodações limpas, entretenimento monitorado e afeto constante.
                </p>
              </div>
              <span className="text-xs font-bold text-primary flex items-center gap-1.5 mt-2 group-hover:pl-1 transition-all">
                Conhecer Hotel <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust Block */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image container */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#d7e5bd]/40 rounded-full blur-3xl pointer-events-none" />
              <img 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square max-h-[500px]" 
                alt="Dono amando o cão" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXAdVgkmAAm0VMM7TBr9C4PdAR03SWYPmNIXAPEkui3hX7aYm8MnEWZelJsZS5xc_HLzi5Gpwqgdg_IBOvmAnqpUQ82QMk5UDJ5SXUSRFdq8NFMlxtsHfvaIbBn3Kfv2ZRalBnndpVZ81SG4UU78GzP7Mx1jFEJvikKKBqB_jtU3bPd8inyXE_KcAX77qlLgcMXm9UV5z40lyhN4SIfh44PwGTap2jLCNS7QKSPq1I0pvdqLvnTvQERUbdtkupYCxWMOz1phvOrS4" 
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl z-20 shadow-2xl max-w-[210px] hidden sm:block">
                <p className="font-display font-black text-4xl mb-1">10+</p>
                <p className="font-sans text-[13px] font-bold opacity-90 leading-relaxed">Anos de experiência clínica e dedicação plena.</p>
              </div>
            </div>

            {/* Right Pillars List */}
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/40 px-3 py-1.5 rounded-full inline-block mb-3 font-display">
                Por que a PetVida?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                Por que somos a escolha ideal para confiar seu amigo?
              </h2>

              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-primary flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-[#355461]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-gray-900">Equipe Altamente Especializada</h4>
                    <p className="font-sans text-sm text-gray-600 font-semibold mt-1 leading-relaxed">
                      Veterinários focados em constante atualização científica de ponta nas especialidades cardiológica, anestésica e medicina felina exclusiva.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d7e5bd] text-secondary flex items-center justify-center shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-[#5a6747]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-gray-900">Abordagem Humanizada Fear Free</h4>
                    <p className="font-sans text-sm text-gray-600 font-semibold mt-1 leading-relaxed">
                      Linguagem e tato carinhoso. Minimizar ruídos, usar luz tênue e feromônios relaxantes para reduzir o estresse de cães e gatos de forma pioneira.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fbb2c8] text-tertiary flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-gray-900">Estrutura Diagnóstica de Ponta</h4>
                    <p className="font-sans text-sm text-gray-600 font-semibold mt-1 leading-relaxed">
                      Ultrassonografia de alta definição e laboratório próprio integrado, gerando laudos diagnósticos assertivos imediatos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Mini Catalog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary-container px-3.5 py-1.5 rounded-full inline-block mb-3 font-display">
                Catálogo Selecionado
              </span>
              <h2 className="font-display text-2.5xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Destaques do Nosso Pet Shop
              </h2>
              <p className="font-sans text-xs text-gray-500 font-bold mt-1">
                Curadoria seleta de nutrição e acessórios que incentivam o desenvolvimento do seu parceiro.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('servicos')}
              className="text-primary font-display font-bold text-sm flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4 cursor-pointer"
            >
              Ver loja completa
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <div 
                key={prod.id} 
                className="group cursor-pointer bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all"
                onClick={() => setCurrentPage('servicos')}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-200 mb-4 h-56 w-full">
                  <img 
                    alt={prod.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={prod.image}
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm shadow-sm text-xs text-primary font-bold px-3 py-1 rounded-full">
                    {prod.badge}
                  </span>
                </div>
                <h4 className="font-display font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                  {prod.name}
                </h4>
                <p className="font-sans text-xs text-gray-600 mt-1 leading-relaxed font-semibold">
                  {prod.tagline}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">Ver Detalhes</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Newsletter Campaign CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          {/* Abstract paw vector simulation */}
          <div className="absolute -top-10 -right-10 text-white/5 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4 select-none">
            <span className="font-display font-black text-[320px]">🐾</span>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 items-center gap-8 md:gap-14">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Quer receber dicas essenciais dos nossos médicos?
              </h2>
              <p className="font-sans text-white/80 font-medium text-sm leading-relaxed">
                Inscreva-se em nossa newsletter mensal de cuidados preventivos. Sem spam, apenas saúde prática e amor e dedicação aos pets.
              </p>
            </div>
            
            <div className="bg-white/10 p-2 rounded-2xl md:rounded-full backdrop-blur-sm border border-white/20">
              {newsletterSuccess ? (
                <div className="px-6 py-4 flex items-center gap-3 text-[#d7e5bd] font-bold font-sans text-sm bg-[#566343]/35 rounded-xl md:rounded-full">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Inscrição realizada com sucesso! Obrigado pelo carinho!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input 
                    className="flex-1 rounded-xl md:rounded-full px-6 py-4 text-gray-900 border-none bg-white font-sans text-sm placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#abcbdb]" 
                    placeholder="Digite seu melhor e-mail" 
                    required 
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button 
                    className="bg-[#d7e5bd] text-[#3f4b2d] px-8 py-4 rounded-xl md:rounded-full font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors cursor-pointer w-full sm:w-auto"
                    type="submit"
                  >
                    Inscrever-se
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
