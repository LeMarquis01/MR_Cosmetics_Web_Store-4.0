import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import { cn } from '../lib/utils';

export default function Home() {
  const { products } = useAppContext();
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: 'Skincare', img: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=600', icon: <Leaf size={20} /> },
    { name: 'Haircare', img: 'https://images.unsplash.com/photo-1527799822367-4748a1db3c0c?auto=format&fit=crop&q=80&w=600', icon: <Sparkles size={20} /> },
    { name: 'Body', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden marble-bg min-h-[90vh] flex items-center pt-20 pb-32 px-4 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
              <Sparkles size={12} />
              <span>Est. Nairobi 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl serif text-brand-cream font-light leading-none">
              Natural Beauty <br />
              <span className="italic font-normal text-brand-gold underline decoration-brand-gold/30 underline-offset-8">Wellness</span> <br />
              Found Here
            </h1>
            <p className="text-brand-cream/70 text-lg max-w-md leading-relaxed font-light">
              Experience the convergence of ancient botanical wisdom and modern luxury. MR Cosmetics brings the forest's purity to your vanity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop" className="px-8 py-4 bg-brand-gold text-brand-forest rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center group">
                Shop Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link to="/about" className="px-8 py-4 border border-brand-cream/30 text-brand-cream rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-cream hover:text-brand-forest transition-all">
                The Heritage
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="w-[450px] h-[550px] relative">
              <img 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
                alt="Luxury Serum"
                className="w-full h-full object-cover rounded-[100px] border-2 border-brand-gold/20 shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              {/* Artistic Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-gold/20 rounded-full animate-orbit" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 marble-bg rounded-full border border-brand-gold/20 animate-float opacity-50 blur-sm" />
              <div className="absolute top-1/2 -left-20 w-32 h-32 border border-brand-gold/10 rounded-full animate-orbit" style={{ animationDelay: '-5s' }} />
            </div>
          </motion.div>
        </div>
        
        {/* Slogan Band */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-gold py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-slow space-x-12 px-6">
             {[...Array(10)].map((_, i) => (
                <span key={i} className="text-[10px] text-brand-forest font-bold uppercase tracking-[0.3em] flex items-center">
                  <Leaf size={14} className="mr-2" /> NATURAL BEAUTY AND WELLNESS • ARTISANAL • RADIANCE FOUND
                </span>
             ))}
          </div>
        </div>
      </section>

      {/* Categories Bento */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.3em]">Curation</p>
          <h2 className="text-4xl md:text-5xl serif text-brand-forest italic">Our Natural Realms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
          {categories.map((cat, idx) => (
            <Link 
              to={`/shop?cat=${cat.name}`} 
              key={cat.name}
              className={cn(
                "relative group overflow-hidden rounded-3xl",
                idx === 0 || idx === 4 ? "col-span-1 md:col-span-1" : "col-span-1 md:col-span-1"
              )}
            >
              <img 
                src={cat.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                alt={cat.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-forest/20 group-hover:bg-brand-forest/40 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-[8px] uppercase tracking-widest font-bold opacity-70 mb-1">Explore</p>
                  <h3 className="text-xl serif italic">{cat.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:border-brand-gold transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[40px] aspect-square object-cover shadow-xl"
                  alt="Laboratory"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[40px] aspect-square object-cover shadow-xl mt-12"
                  alt="Bottles"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute inset-0 border-2 border-brand-gold/10 rounded-[60px] translate-x-4 translate-y-4 -z-10" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
             <p className="text-brand-gold uppercase text-[10px] font-bold tracking-[0.4em]">Our Essence</p>
             <h2 className="text-4xl md:text-6xl serif text-brand-forest leading-tight">Crafted in the Heart of the <span className="italic">Forest</span></h2>
             <p className="text-brand-forest/70 leading-relaxed font-light text-lg">
                For over a decade, MR Cosmetics has been a pioneer in extracting the most potent botanical essences from sustainably managed forest ecosystems. Our Nairobi-based studio is where science meets artisanal tradition.
             </p>
             <div className="space-y-6">
                {[
                  { t: 'Purity First', d: 'Zero synthetic preservatives or fragrances.' },
                  { t: 'Artisan Mindset', d: 'Every bottle is hand-numbered and batch-certified.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                     <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mt-1">
                        <Sparkles size={12} />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-brand-forest">{item.t}</h4>
                        <p className="text-sm text-brand-forest/60">{item.d}</p>
                     </div>
                  </div>
                ))}
             </div>
             <Link to="/shop" className="inline-flex items-center space-x-4 text-brand-forest group font-bold uppercase text-xs tracking-widest border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
                <span>Discover the Collection</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Brand Values / Sustainability */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: 'Forest Sourced', desc: 'Every ingredient is sustainably harvested from wild forest estates.', icon: <Leaf size={32} /> },
             { title: 'Artisanal Batch', desc: 'Crafted in small quantities in our Nairobi studio to ensure peak potency.', icon: <Award size={32} /> },
             { title: 'Pure Radiance', desc: 'No synthetic fillers, just the honest glow of nature at your fingertips.', icon: <Sparkles size={32} /> }
           ].map((val, i) => (
             <div key={i} className="text-center space-y-6 group">
                <div className="mx-auto w-16 h-16 border-2 border-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-forest group-hover:text-white transition-all cursor-default relative">
                  {val.icon}
                  <div className="absolute -inset-2 border border-brand-gold/10 rounded-full group-hover:animate-orbit" />
                </div>
                <h3 className="text-2xl serif text-brand-forest italic">{val.title}</h3>
                <p className="text-brand-forest/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {val.desc}
                </p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
