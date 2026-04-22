import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShoppingCart, Heart, Share2, ArrowLeft, Star, ShieldCheck, Truck, RefreshCw, Check, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'rituals'>('desc');

  const product = products.find(p => p.id === id);
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
         <div className="text-center space-y-6">
            <h2 className="serif text-5xl italic text-brand-forest">Lost in the forest</h2>
            <p className="text-brand-forest/60 max-w-xs mx-auto">This botanical treasure seems to have vanished or never existed.</p>
            <Link to="/shop" className="inline-block px-12 py-4 bg-brand-forest text-brand-cream rounded-full font-bold uppercase tracking-widest text-xs">Return to Studio</Link>
         </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-cream pb-32">
       {/* Breadcrumbs */}
       <div className="max-w-7xl mx-auto px-4 py-8">
          <button onClick={() => navigate(-1)} className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-forest transition-colors mb-8">
             <ArrowLeft size={14} className="mr-2" /> Back
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-4">
               <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-brand-forest/5 shadow-2xl bg-white">
                  <motion.img 
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={product.images[activeImg]} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <button className="absolute top-8 right-8 p-3 bg-white/80 backdrop-blur-sm rounded-full text-brand-forest hover:bg-white transition-colors">
                    <Heart size={20} />
                  </button>
               </div>
               <div className="flex space-x-4">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={cn(
                        "w-24 h-24 rounded-3xl overflow-hidden border-2 transition-all",
                        activeImg === idx ? "border-brand-gold scale-105" : "border-brand-forest/5 opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
               <div className="space-y-4 pb-8 border-b border-brand-forest/10">
                  <p className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold">{product.category}</p>
                  <h1 className="text-5xl md:text-6xl serif italic text-brand-forest">{product.name}</h1>
                  <div className="flex items-center space-x-4">
                     <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "var(--color-brand-gold)" : "none"} className="text-brand-gold" />)}
                     </div>
                     <span className="text-xs font-bold tracking-widest text-brand-forest/40 uppercase">24 Reviews • Verified Formula</span>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                     <span className="text-4xl serif text-brand-forest">${product.price}</span>
                     {product.originalPrice && (
                       <>
                         <span className="text-2xl serif text-brand-forest/30 line-through">${product.originalPrice}</span>
                         <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-gold/20">Save ${product.originalPrice - product.price}</span>
                       </>
                     )}
                  </div>
               </div>

               <div className="py-8 space-y-8">
                  <p className="text-brand-forest/70 text-sm leading-relaxed">{product.description}</p>
                  
                  {/* Purchase Actions */}
                  <div className="flex flex-wrap gap-4 items-center">
                     <div className="flex items-center bg-white border border-brand-forest/10 rounded-full px-4 py-3 space-x-6">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-brand-forest hover:text-brand-gold transition-colors"><Minus size={18} /></button>
                        <span className="font-bold text-sm w-4 text-center">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="text-brand-forest hover:text-brand-gold transition-colors"><Plus size={18} /></button>
                     </div>
                     <button 
                       onClick={() => addToCart(product.id, quantity)}
                       className="flex-1 min-w-[200px] h-14 bg-brand-forest text-brand-cream rounded-full uppercase text-xs font-bold tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-brand-gold hover:text-brand-forest transition-colors shadow-xl"
                     >
                        <ShoppingCart size={18} />
                        <span>Add to Collection</span>
                     </button>
                  </div>

                  {/* Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                     {[
                       { icon: <Truck size={18} />, text: 'Next Day Delivery' },
                       { icon: <RefreshCw size={18} />, text: '30-Day Ritual Return' },
                       { icon: <ShieldCheck size={18} />, text: 'Ph-Balanced Formula' }
                     ].map((item, i) => (
                       <div key={i} className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-3xl border border-brand-forest/5">
                          <div className="text-brand-gold">{item.icon}</div>
                          <span className="text-[9px] uppercase font-bold tracking-widest text-brand-forest/60">{item.text}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Tabs Section */}
               <div className="mt-8">
                  <div className="flex border-b border-brand-forest/10">
                     {[
                       { id: 'desc', label: 'Details' },
                       { id: 'specs', label: 'Specifications' },
                       { id: 'rituals', label: 'Daily Rituals' }
                     ].map(tab => (
                       <button
                         key={tab.id}
                         onClick={() => setActiveTab(tab.id as any)}
                         className={cn(
                           "px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all relative",
                           activeTab === tab.id ? "text-brand-forest" : "text-brand-forest/40 hover:text-brand-forest"
                         )}
                       >
                         {tab.label}
                         {activeTab === tab.id && <motion.div layoutId="tab" className="absolute bottom-0 left-8 right-8 h-1 bg-brand-gold rounded-t-full" />}
                       </button>
                     ))}
                  </div>
                  <div className="py-8 min-h-[150px]">
                     {activeTab === 'desc' && (
                       <div className="space-y-4 text-sm text-brand-forest/70 leading-relaxed">
                          <p>Our commitment to botanical excellence is reflected in every artisan batch. Hand-poured in our Nairobi studio, this product represents the pinnacle of natural luxury.</p>
                          <ul className="grid grid-cols-2 gap-2">
                             {['Cruelty-Free', 'Paraben-Free', 'Vegan Certified', 'Wild-Harvested', 'Forest-Grown Ingredients'].map(item => (
                               <li key={item} className="flex items-center space-x-2">
                                  <Check size={14} className="text-brand-gold" />
                                  <span className="text-xs">{item}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                     )}
                     {activeTab === 'specs' && (
                       <table className="w-full text-sm">
                          <tbody>
                            {Object.entries(product.specs).map(([key, val]) => (
                               <tr key={key} className="border-b border-brand-forest/5">
                                  <td className="py-4 font-bold uppercase text-[10px] tracking-widest text-brand-gold w-1/3">{key}</td>
                                  <td className="py-4 text-brand-forest/70">{val}</td>
                               </tr>
                            ))}
                          </tbody>
                       </table>
                     )}
                     {activeTab === 'rituals' && (
                       <div className="space-y-4">
                          <div className="p-6 bg-brand-forest text-brand-cream rounded-[40px] relative overflow-hidden">
                             <div className="relative z-10 space-y-4">
                                <h4 className="serif italic text-2xl">The Golden Hour Ritual</h4>
                                <p className="text-xs text-brand-cream/60 leading-relaxed">Morning: Apply 3 drops to cleansed skin. Massage in upward circular motions for 60 seconds to stimulate circulation. Follow with your favorite botanical moisturizer.</p>
                             </div>
                             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-xl" />
                          </div>
                       </div>
                     )}
                  </div>
               </div>
            </div>
          </div>
       </div>

       {/* Related */}
       <section className="max-w-7xl mx-auto px-4 mt-32">
          <div className="text-center mb-16 space-y-4">
             <p className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.4em]">Completion</p>
             <h2 className="text-4xl serif italic text-brand-forest">Complementary Treasures</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {relatedProducts.map(p => (
               <div key={p.id}>
                 <ProductCard product={p} />
               </div>
             ))}
          </div>
       </section>
    </div>
  );
}
