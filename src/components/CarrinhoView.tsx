import React from 'react';
import { motion } from 'motion/react';
import { Trash2, ShoppingCart, Plus, Minus, ArrowRight, HeartHandshake } from 'lucide-react';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CarrinhoViewProps {
  cart: CartItem[];
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
  setCurrentPage: (page: string) => void;
}

export default function CarrinhoView({ 
  cart, 
  updateQuantity, 
  removeFromCart, 
  setCurrentPage 
}: CarrinhoViewProps) {
  
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingMin = 150;
  const isFreeShipping = subtotal >= freeShippingMin;
  const shippingCost = subtotal === 0 ? 0 : (isFreeShipping ? 0 : 15.00);
  const total = subtotal + shippingCost;

  const handleGoToPayment = () => {
    setCurrentPage('pagamento');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeepShopping = () => {
    setCurrentPage('servicos');
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary-container px-3 py-1.5 rounded-full inline-block mb-2.5 font-display">
            Seu Pedido
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#111] tracking-tight">
            Carrinho de Compras
          </h1>
          <p className="font-sans text-gray-500 font-semibold text-xs mt-1">
            Revise os itens seletos de nossa boutique veterinária antes de finalizar.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-gray-150 p-12 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-display text-gray-950 font-bold text-lg mb-2">Seu carrinho está vazio</h3>
            <p className="font-sans text-xs text-gray-500 font-semibold leading-relaxed mb-8 max-w-sm mx-auto">
              Nossa Boutique Pet está cheia de produtos selecionados por nossas médicas veterinárias para garantir a alta qualidade de vida do seu cão ou gato.
            </p>
            <button
              onClick={handleKeepShopping}
              className="px-6 py-3 bg-primary text-white font-sans font-bold text-xs rounded-xl hover:bg-[#324a56] transition-all cursor-pointer shadow-md inline-flex items-center gap-2 uppercase tracking-wide"
            >
              Ver Boutique de Produtos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: List of items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.product.id} 
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-150/70 shadow-sm flex gap-4 items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase font-display bg-primary/5 px-2 py-0.5 rounded">
                        {item.product.category}
                      </span>
                      <h3 className="font-display font-bold text-gray-950 text-base mt-1">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-gray-500 font-semibold mt-0.5 line-clamp-1">
                        {item.product.tagline}
                      </p>
                      <p className="font-display font-extrabold text-sm text-primary mt-1.5">
                        R$ {item.product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-6">
                    {/* Quantity selectors */}
                    <div className="flex items-center bg-gray-50 border border-gray-150 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-1 px-1.5 rounded-md hover:bg-white text-gray-500 transition-colors cursor-pointer border-none"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-xs font-bold text-gray-900 px-3 select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-1 px-1.5 rounded-md hover:bg-white text-gray-500 transition-colors cursor-pointer border-none"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Trash buttons */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors border-none bg-transparent cursor-pointer"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-3">
                <button
                  onClick={handleKeepShopping}
                  className="text-xs font-bold font-sans text-primary hover:underline cursor-pointer flex items-center gap-1.5"
                >
                  ← Continuar comprando na boutique
                </button>
              </div>
            </div>

            {/* Right Column: Totals summary card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-150 shadow-sm h-fit">
              <h3 className="font-display font-extrabold text-[#111] text-lg mb-4">
                Resumo do Pedido
              </h3>
              
              <div className="space-y-3.5 pb-5 border-b border-gray-100">
                <div className="flex justify-between items-center text-xs font-sans text-gray-500 font-semibold">
                  <span>Subtotal</span>
                  <span className="font-mono text-gray-900 font-bold">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-xs font-sans text-gray-500 font-semibold">
                  <span>Entrega Veterinária</span>
                  {shippingCost === 0 ? (
                    <span className="text-secondary font-bold text-xs uppercase font-display bg-secondary-container px-2 py-0.5 rounded">
                      Grátis
                    </span>
                  ) : (
                    <span className="font-mono text-gray-900 font-bold">
                      R$ {shippingCost.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>

                {/* Free shipping progression bar */}
                <div className="bg-gray-50 border border-gray-150/60 rounded-xl p-3 mt-2">
                  {isFreeShipping ? (
                    <div className="flex items-start gap-2">
                      <HeartHandshake className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <p className="text-[10px] text-gray-600 font-bold font-sans leading-tight">
                        Parabéns! Sua compra atingiu os <span className="text-secondary">R$ 150</span> e ganhou frete grátis nacional.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[10px] text-gray-500 font-semibold font-sans leading-tight">
                        Faltam <span className="font-extrabold text-primary">R$ {(freeShippingMin - subtotal).toFixed(2).replace('.', ',')}</span> para desbloquear **Frete Grátis**!
                      </p>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mt-2">
                        <div 
                          className="bg-primary h-full transition-all duration-300"
                          style={{ width: `${(subtotal / freeShippingMin) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Total Row */}
              <div className="flex justify-between items-center py-5">
                <span className="font-display font-bold text-gray-950 text-sm">Valor Total</span>
                <span className="font-display font-extrabold text-xl text-primary font-mono">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={handleGoToPayment}
                className="w-full bg-primary text-white font-sans font-bold text-xs py-4 rounded-xl hover:bg-[#324a56] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 uppercase tracking-wide my-1"
              >
                Ir para o Pagamento
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-[9px] text-gray-400 font-semibold font-sans text-center mt-3 leading-normal">
                Transações monitoradas de segurança e processadas sob estritos termos de proteção à privacidade.
              </p>
            </div>

          </div>
        )}

      </div>
    </motion.div>
  );
}
