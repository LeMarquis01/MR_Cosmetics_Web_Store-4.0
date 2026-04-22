import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sparkles, Award, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '../lib/utils';

export default function Home() {
  const categories = [
    { name: 'Skincare', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600', icon: <Leaf size={20} /> },
    { name: 'Haircare', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800', icon: <Sparkles size={20} /> },
    { name: 'Body', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600', icon: <ShieldCheck size={20} /> },
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
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <h1 className="text-6xl md:text-8xl serif text-brand-cream font-light leading-none">
                Natural Beauty <br />
                <span className="italic font-normal text-brand-gold underline decoration-brand-gold/30 underline-offset-8">Wellness</span> <br />
                Found Here
              </h1>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-48 h-72 md:w-[320px] md:h-[480px] shrink-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover rounded-[32px] border border-brand-gold/30 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  alt="Wellness and Radiance"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
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
                src="/input_file_0.png"
                alt="Wellness and Radiance"
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


      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 marble-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-block p-3 rounded-full bg-brand-gold/10 text-brand-gold animate-float">
            <Mail size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl serif text-brand-forest leading-tight">Join the <span className="italic">Botanical</span> Circle</h2>
          <p className="text-brand-forest/60 text-lg max-w-xl mx-auto font-light">
             Be the first to receive exclusive invites to our Nairobi studio events and early access to artisanal batch releases.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email adress" 
              className="flex-1 px-6 py-4 rounded-full border border-brand-forest/10 bg-white focus:outline-none focus:border-brand-gold transition-colors text-sm" 
            />
            <button className="px-8 py-4 bg-brand-forest text-brand-cream rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-brand-gold hover:text-brand-forest transition-all shrink-0">
              Subscribe
            </button>
          </form>
          <p className="text-[8px] uppercase tracking-widest text-brand-forest/30">Respecting your privacy as we do our ingredients.</p>
        </div>
      </section>
    </div>
  );
}
