# Relatório de Desenvolvimento & Arquitetura — PetVida 🐾

Este documento descreve detalhadamente o processo de desenvolvimento, decisões de design, estrutura técnica e canais funcionais da plataforma web **PetVida**, projetada especificamente para cães e felinos com abordagem **Fear Free** e medicina veterinária integrada.

---

## 1. Visão Geral do Aplicativo
O **PetVida** é uma plataforma digital responsiva completa de suporte, agenciamento, prontuários computadorizados e telemetria básica de saúde para animais de estimação. O aplicativo integra de forma transparente:
* **Centro Clínico Especializado**: Foco em cardiologia, oncologia de acompanhamento e dermatologia.
* **Complexo Cirúrgico de Alta Segurança**: Monitoria anestésica integrada de ponta com Dra. Maria Eduarda Pintos.
* **Spa & Estética Integrada**: Banhos dermatológicos hipoalergênicos, tosas estéticas por padrões de raça e lixamento de garras.
* **Mini-Boutique e Farmácia**: Suplementação premium e brinquedos inteligentes de cognição.
* **Portal de Prontuário Digital**: Controle vacinal, registros de cardiopatias e históricos médicos sob medida.

---

## 2. Decisões de Identidade Visual, Tipografia e Cores

O design foi estruturado em conformidade com as referências, priorizando tons modernos, amigáveis, acolhedores e profissionais que induzem sensação de calma e higiene clínica.

### 🎨 Paleta de Cores (Definida no Tailwind CSS)
* **Primária (`#446371`)**: Azul ardósia profundo que remete à autoridade científica e serenidade profissional.
* **Secundária (`#566343`)**: Verde oliva suave sugerindo bem-estar natural, botânica saudável e equilíbrio térmico.
* **Terciária (`#874d60`)**: Rosa bordeaux elegante focado em alertas de vacinação pendente e destaque estético.
* **Fundo Extra (`#f8f9fa`)**: Off-white limpo sem reflexos cansativos aos olhos dos tutores.

### ✍️ Tipografia Premium
* **Display (Títulos e Destaques)**: `Plus Jakarta Sans` — moderna, expressiva, com kerning de alta legibilidade.
* **Sans (Corpo e Formulários)**: `Open Sans` — humanista, estável, recomendada para longas leituras de blogs.
* **Mono (Códigos e Status)**: `JetBrains Mono` — para rotulagem técnica e registros do Prontuário Digital.

---

## 3. Arquitetura Modular Baseada em React & Vite

Para assegurar isolamento contra falhas de estouro de tokens de compilação e garantir facilidade na manutenção científica, o aplicativo foi subdividido em módulos independentes:

* `/src/types.ts`: Definições estritas de TypeScript para Staffs, Blog, Produtos e Prontuários (Segurança contra erros de tipificação).
* `/src/data.ts`: Centralização estável de conteúdos textuais extraídos da apresentação de slides (Especialidades, Matriz de Atribuições de Médicos Responsáveis).
* `/src/components/Navbar.tsx`: Cabeçalho de alta fidelidade com hamburger responsivo e acionadores de Reserva de Vaga de Consulta.
* `/src/components/Footer.tsx`: Rodapé estruturado com indicações de suporte e faturamento de forma síncrona.
* `/src/components/InicioView.tsx`: Primeira página contendo Hero, Bento Grid de serviços e seções de depoimentos.
* `/src/components/SobreNosView.tsx`: Histórico corporativo que integra de forma interativa a **Matriz de Responsabilidade Clínica** retirada dos Slides.
* `/src/components/ServicosView.tsx`: Serviços preventivos, reabilitação física, catálogo de bem-estar e estética animal Fear Free.
* `/src/components/EquipeView.tsx`: Exibição elegante do conselho médico veterinário liderado pela Dra. Isabella Romeiro.
* `/src/components/AgendamentoView.tsx`: Prontuário do Pet Bento (Golden Retriever) mostrando vacinas aplicadas, dieta balanceada e criador dinâmico de agendamentos.
* `/src/components/BlogView.tsx`: Artigos informativos científicos veterinários com sistema integrado de busca.
* `/src/components/ContatoView.tsx`: Formas de faturamento, canais de Whatsapp e **Mapa Inteligente Vetorial** de coordenadas PetVida.

---

## 4. Diferenciais de Micro-Interações & Funcionalidades Clínicas

1. **Simulador Inteligente de Prontuário Computadorizado**: Permite conferir o histórico completo do pet ativo Bento, conferindo vacinas urgentes ou pendentes de forma clara.
2. **Booker Expresso de Consultas**: Formulário clínico transparente que integra datas, horários fixos de expediente e especialistas recomendados.
3. **Painel de Atribuições (Conformidade com Anexos)**: Interface exclusiva desenvolvida a partir de análises dos slides anexados que detalha exatamente as obrigações regulamentares de cada profissional (do cardiologista à equipe de higiene).
4. **Loja de Compras Virtuais**: Simulação de faturamento onde tutores adicionam suplementos e produtos diretamente à conta unificada virtual na recepção do hospital.
