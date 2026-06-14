import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  QrCode, 
  Receipt, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface PagamentoViewProps {
  cart: CartItem[];
  clearCart: () => void;
  setCurrentPage: (page: string) => void;
}

export default function PagamentoView({ cart, clearCart, setCurrentPage }: PagamentoViewProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'boleto'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  
  // Form Card values
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [fullName, setFullName] = useState('Mariana Albuquerque');
  const [email, setEmail] = useState('mariana.tutora@gmail.com');
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [copiedPix, setCopiedPix] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= 150;
  const shippingCost = subtotal === 0 ? 0 : (isFreeShipping ? 0 : 15.00);
  const total = subtotal + shippingCost;

  // Mock values
  const pixKey = '00020126480014BR.GOV.BCB.PIX01145375371073932560014PetVidaClinic5204000053039865406' + total.toFixed(2) + '5802BR5915PETVIDA CLINICA6009SAO PAULO62070503***6304ECE3';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    setIsProcessing(true);
    // Simulate high-fidelity processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 2800);
  };

  const handleFinishAndClear = () => {
    clearCart();
    setCurrentPage('inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container px-3.5 py-1.5 rounded-full inline-block mb-2.5 font-display">
            Finalização
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#111] tracking-tight">
            Checkout de Pagamento
          </h1>
          <p className="font-sans text-gray-500 font-semibold text-xs mt-1">
            Escolha o método mais prático e finalize o pedido de sua conta de forma segura.
          </p>
        </div>

        {isPaid ? (
          /* SUCCESS TRANSACTION VIEW */
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white border-2 border-green-550/20 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600 mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            
            <h2 className="font-display font-extrabold text-[#1a3822] text-2.5xl leading-tight">
              Pagamento Confirmado!
            </h2>
            <p className="font-sans text-xs text-gray-500 font-semibold max-w-md mx-auto mt-2 leading-relaxed">
              Obrigado! Seu pagamento de <strong className="text-secondary-dark font-extrabold font-mono">R$ {total.toFixed(2).replace('.', ',')}</strong> foi recebido com sucesso pela **Clínica PetVida**. A auditoria hospitalar está preparando os códigos de retirada.
            </p>

            <div className="my-8 bg-gray-50 rounded-2xl p-6 border border-gray-150 text-left space-y-3.5">
              <h4 className="font-display font-bold text-gray-900 text-sm border-b border-gray-200 pb-2">Informações da Fatura</h4>
              
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-sans text-gray-500 font-semibold">
                <div>Comprador:</div>
                <div className="text-gray-900 text-right font-bold">{fullName}</div>
                
                <div>E-mail de Envio:</div>
                <div className="text-gray-900 text-right font-bold font-mono">{email}</div>
                
                <div>Modo:</div>
                <div className="text-gray-900 text-right font-bold uppercase">
                  {paymentMethod === 'pix' && 'PIX Oficial'}
                  {paymentMethod === 'cartao' && 'Cartão de Crédito'}
                  {paymentMethod === 'boleto' && 'Boleto Digital'}
                </div>

                <div>Código da Transação:</div>
                <div className="text-gray-900 text-right font-bold font-mono text-[10px]">PV-{Math.floor(Math.random() * 900000 + 100000)}</div>

                <div className="border-t border-dashed border-gray-200 pt-2 font-bold text-gray-800">Total Pago:</div>
                <div className="border-t border-dashed border-gray-200 pt-2 text-right text-primary font-extrabold text-sm font-mono">
                  R$ {total.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold block mb-2 font-sans uppercase">Produtos a serem retirados ou entregues:</span>
                <ul className="space-y-1">
                  {cart.map(item => (
                    <li key={item.product.id} className="text-xs font-sans text-gray-700 font-bold flex justify-between">
                      <span>• {item.product.name} ({item.quantity}x)</span>
                      <span className="font-mono text-gray-550">R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={handleFinishAndClear}
              className="px-8 py-3.5 bg-primary text-white font-sans font-bold text-xs rounded-xl hover:bg-[#324a56] transition-all cursor-pointer shadow-md uppercase tracking-wider"
            >
              Voltar para a Página Inicial
            </button>
          </motion.div>
        ) : cart.length === 0 ? (
          /* EMPTY CHECKOUT ALERT */
          <div className="bg-white rounded-3xl border border-gray-150 p-12 text-center max-w-md mx-auto shadow-sm">
            <div className="w-14 h-14 bg-amber-50 text-amber-550 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="font-display text-gray-950 font-bold text-base mb-1.5">Nenhum item para pagar</h3>
            <p className="font-sans text-xs text-gray-500 font-semibold leading-relaxed mb-6">
              Por favor, vá para a Boutique de Serviços, inclua algum produto veterinário no carrinho primeiro para poder prosseguir ao pagamento.
            </p>
            <button
              onClick={() => setCurrentPage('servicos')}
              className="px-6 py-2.5 bg-primary text-white font-sans font-bold text-xs rounded-xl hover:bg-[#324a56] transition-all cursor-pointer border-none"
            >
              Ver Boutique
            </button>
          </div>
        ) : (
          /* ACTIVE CHECKOUT FORM */
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            
            {/* Payment selections (Left 3 columns) */}
            <div className="md:col-span-3 space-y-6">
              
              {/* Payment Method Tabs */}
              <div className="bg-white rounded-2xl border border-gray-150 p-4.5 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5ba19c] font-sans block mb-3">Opções de Pagamento</span>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                    }`}
                  >
                    <QrCode className="w-5 h-5 shrink-0" />
                    <span className="font-sans font-bold text-[11px] uppercase tracking-wide">PIX</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      paymentMethod === 'cartao'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 shrink-0" />
                    <span className="font-sans font-bold text-[11px] uppercase tracking-wide text-center">Cartão</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      paymentMethod === 'boleto'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-500'
                    }`}
                  >
                    <Receipt className="w-5 h-5 shrink-0" />
                    <span className="font-sans font-bold text-[11px] uppercase tracking-wide text-center">Boleto</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Details panels */}
              <form onSubmit={handleProcessPayment} className="space-y-4">
                
                {/* Billing Info block (Shared) */}
                <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans block mb-1">Identificação do Tutor</span>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-semibold"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">E-mail</label>
                      <input
                        type="email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-mono font-semibold"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">Celular / WhatsApp</label>
                      <input
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-semibold"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submethod displays */}
                {paymentMethod === 'pix' && (
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm text-center flex flex-col items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#5ba19c] font-display mb-2.5 block">Transferência PIX Segura</span>
                    
                    {/* Simulated High-fidelity QR Code */}
                    <div className="bg-[#fcfdfd] border-2 border-gray-100 p-4 rounded-2xl shadow-inner mb-4 w-44 h-44 flex items-center justify-center">
                      <div className="relative w-36 h-36 border border-gray-300 bg-white p-2.5 rounded-lg flex flex-col justify-between items-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
                        <span className="text-[10.5px] font-mono text-gray-400 select-none overflow-hidden blur-[0.6px] leading-[1.3] block">
                          ▒███▒▓▓████▒
                          ▒███▒▓▓████▒
                          ░░░░█░▄░█▀▀░
                          █▀███▀▀██▀█░
                          ▀████▒▒▒▒█▒
                          ▒█░░█▒▓█▒░░▒
                        </span>
                        <div className="absolute inset-0 m-auto w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg font-display text-[9.5px] font-extrabold text-[#5ca0a1]">
                          PIX
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-[11px] text-gray-500 font-semibold mb-4 leading-normal max-w-sm">
                      Escaneie o QR Code acima no aplicativo do seu banco ou utilize a chave copia-e-cola abaixo. O processamento é instantâneo.
                    </p>

                    <div className="w-full flex gap-2 items-center bg-gray-50 border border-gray-150 p-2 rounded-xl mb-4">
                      <input
                        type="text"
                        readOnly
                        className="bg-transparent border-none text-[10px] text-gray-500 font-mono focus:outline-none flex-grow overflow-hidden text-ellipsis whitespace-nowrap pl-2 font-bold"
                        value={pixKey}
                      />
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="px-3.5 py-2 bg-primary text-white text-[10px] font-bold font-sans rounded-lg hover:bg-[#324a56] transition-colors cursor-pointer border-none flex items-center gap-1.5 shrink-0"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {paymentMethod === 'cartao' && (
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans block mb-1">Dados do Cartão de Crédito</span>
                    
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-mono font-bold"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">Nome Gravado no Cartão</label>
                      <input
                        type="text"
                        placeholder="MARIANA ALBUQUERQUE"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-bold uppercase"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">Validade</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-mono font-bold"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 font-sans uppercase mb-1">CVV</label>
                        <input
                          type="password"
                          placeholder="000"
                          maxLength={4}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 font-sans text-xs focus:ring-2 focus:ring-primary font-mono font-bold"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'boleto' && (
                  <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-sm space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#5ba19c] font-display block mb-1">Boleto Digital PetVida</span>
                    <p className="font-sans text-[11px] text-gray-500 font-semibold leading-relaxed">
                      Ao selecionar o Boleto, o documento em PDF de faturamento será gerado com vencimento de 2 dias úteis. A confirmação bancária poderá levar de 24 a 48 horas para ser totalmente integrada ao prontuário digital clínico.
                    </p>
                    <div className="bg-amber-50/50 border border-amber-250 p-3 rounded-lg text-[10px] font-sans font-bold text-amber-700 flex items-start gap-2 leading-snug">
                      <AlertCircle className="w-4.5 h-4.5 shrink-0 text-amber-600 mt-0.5" />
                      <span>Sua reserva de produtos ou vacinação na recepção será assegurada apenas após a plena liquidação do boleto.</span>
                    </div>
                  </div>
                )}

                {/* Submit Pay button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full font-sans font-bold text-xs py-4 rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isProcessing 
                      ? 'bg-gray-200 text-gray-500' 
                      : 'bg-primary text-white hover:bg-[#324a56]'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4.5 h-4.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>Processando Pagamento...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                      <span>Confirmar e Pagar R$ {total.toFixed(2).replace('.', ',')}</span>
                    </>
                  )}
                </button>
              </form>

              <button
                onClick={() => setCurrentPage('carrinho')}
                className="text-xs font-bold font-sans text-gray-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar e revisar o carrinho
              </button>

            </div>

            {/* Sticky summary sidebar (Right 2 columns) */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-gray-150 p-5 shadow-sm h-fit space-y-4">
              <h4 className="font-display font-bold text-gray-950 text-sm pb-2 border-b border-gray-100 flex items-center gap-2">
                <DollarSign className="w-4.5 h-4.5 text-primary" />
                <span>Revisão do Pedido</span>
              </h4>

              <div className="space-y-3 pb-3 border-b border-gray-100">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-start gap-3">
                    <div className="text-xs font-sans text-gray-700 font-bold leading-tight">
                      <span className="text-primary font-mono">{item.quantity}x</span> {item.product.name}
                      <p className="text-[10px] text-gray-400 font-semibold italic font-sans">{item.product.category}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-900 shrink-0">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs font-sans font-semibold text-gray-500">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span className="font-mono text-gray-900 font-bold">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Entrega:</span>
                  <span className="font-mono text-gray-900 font-bold">
                    {shippingCost === 0 ? 'Grátis' : `R$ ${shippingCost.toFixed(2).replace('.', ',')}`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pt-2.5 border-t border-gray-100 text-gray-900">
                  <span className="font-display font-bold text-sm">Total Geral:</span>
                  <span className="font-display font-extrabold text-[#47575d] text-base font-mono">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <div className="bg-[#f0f4f5]/60 rounded-xl p-3 text-[10px] font-sans font-bold text-gray-500 leading-normal flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                <span>Seus dados de pagamento são criptografados end-to-end com certificado PCI-DSS nível 1.</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </motion.div>
  );
}
