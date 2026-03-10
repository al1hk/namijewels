import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Droplets, ShieldCheck, Sparkles, Heart, ArrowRight, ArrowDown, Instagram } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Gold Chain",
    price: "$45",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Stacked Bangle Set",
    price: "$68",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Pearl Drop Necklace",
    price: "$52",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Minimalist Ring",
    price: "$35",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?auto=format&fit=crop&q=80&w=800",
  }
];

const IG_FEED = [
  "https://images.unsplash.com/photo-1573408301145-b98c46544405?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-nami-bg text-nami-text selection:bg-nami-gold selection:text-nami-bg overflow-x-hidden font-sans">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-nami-bg/80 backdrop-blur-md py-4 border-b border-nami-border' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <button 
            className="md:hidden text-nami-text"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1} />
          </button>

          <nav className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-nami-gold transition-colors">Shop</a>
            <a href="#" className="hover:text-nami-gold transition-colors">Collections</a>
            <a href="#" className="hover:text-nami-gold transition-colors">About</a>
          </nav>

          <a href="#" className="text-3xl md:text-4xl font-serif italic tracking-tight text-center absolute left-1/2 -translate-x-1/2">
            nami jewels
          </a>

          <div className="flex items-center gap-8">
            <button className="hidden md:block text-[10px] tracking-[0.2em] uppercase hover:text-nami-gold transition-colors">
              Log In
            </button>
            <button className="relative group p-2">
              <ShoppingBag size={20} strokeWidth={1} className="text-nami-text group-hover:text-nami-gold transition-colors" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-nami-gold text-nami-bg text-[9px] flex items-center justify-center rounded-full font-medium">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-nami-bg p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-serif italic">nami jewels</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-4xl font-serif font-light">
              <a href="#" className="hover:text-nami-gold transition-colors">Shop All</a>
              <a href="#" className="hover:text-nami-gold transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-nami-gold transition-colors">Necklaces</a>
              <a href="#" className="hover:text-nami-gold transition-colors">Bracelets</a>
              <a href="#" className="hover:text-nami-gold transition-colors">Rings</a>
              <a href="#" className="hover:text-nami-gold transition-colors mt-8 text-2xl italic text-nami-text/60">Our Story</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full pt-32 pb-20 flex items-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[800px] bg-nami-gold/[0.07] blur-[120px] rounded-full -translate-y-1/4 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-nami-gold/[0.06] blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content - Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center pt-12 lg:pt-0">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[1px] bg-nami-gold"></div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-nami-gold">The New Standard</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-tight font-light uppercase relative z-20"
              >
                <span className="block">Redefining</span>
                <span className="font-serif italic text-nami-gold lowercase text-6xl md:text-8xl lg:text-[8.5rem] block -mt-2 md:-mt-6 ml-8 md:ml-16">elegance</span>
                <span className="block mt-2 md:mt-4">For Daily Wear</span>
              </motion.h1>

              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-10 max-w-md text-sm font-light leading-relaxed text-nami-text/70 ml-1 md:ml-2"
              >
                Discover our latest collection of 18k gold plated jewelry. Waterproof, tarnish-free, and designed to live with you through every moment.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 flex items-center gap-8 ml-1 md:ml-2"
              >
                <a href="#collection" className="px-10 py-5 bg-nami-gold text-nami-bg text-[10px] tracking-[0.2em] uppercase hover:bg-nami-text transition-colors duration-500">
                  Shop Collection
                </a>
                <a href="#collection" className="group flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-nami-text/80 hover:text-nami-gold transition-colors">
                  View Lookbook
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Content - Editorial Image Composition */}
            <div className="lg:col-span-5 relative h-[500px] md:h-[600px] lg:h-[800px] w-full mt-12 lg:mt-0">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-[85%] h-[85%] z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Stacked gold jewelry" 
                  className="w-full h-full object-cover rounded-t-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-nami-gold/30 rounded-t-full -translate-x-4 translate-y-4 -z-10"></div>
              </motion.div>
              
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-[55%] h-[45%] z-20 border-8 border-nami-bg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?auto=format&fit=crop&q=80&w=800" 
                  alt="Gold Chain" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 rotate-90 origin-center text-[9px] tracking-[0.4em] uppercase text-nami-text/30 z-0 hidden md:block"
              >
                Nami Jewels &copy; {new Date().getFullYear()}
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative border-y border-nami-border bg-nami-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nami-gold/[0.04] to-transparent pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-nami-border max-w-[1600px] mx-auto">
          {[
            { icon: Sparkles, text: "18k Gold Plated" },
            { icon: Heart, text: "Hypoallergenic" },
            { icon: ShieldCheck, text: "Tarnish-Free" },
            { icon: Droplets, text: "Waterproof" }
          ].map((feature, idx) => (
            <div key={idx} className="p-10 md:p-16 flex flex-col items-center text-center gap-6 group hover:bg-nami-text/5 transition-colors">
              <feature.icon size={28} strokeWidth={1} className="text-nami-gold group-hover:scale-110 transition-transform duration-500" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-nami-text/80">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The Collection */}
      <section id="collection" className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] bg-nami-gold/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight">
            The <span className="italic text-nami-gold">Collection</span>
          </h2>
          <a href="#" className="text-[10px] tracking-[0.2em] uppercase border-b border-nami-border pb-1 hover:text-nami-gold hover:border-nami-gold transition-colors">
            View All Pieces
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#111]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <h3 className="font-serif text-xl md:text-2xl font-light">{product.name}</h3>
                <span className="text-[11px] tracking-[0.2em] text-nami-gold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-32 relative overflow-hidden border-t border-nami-border">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-nami-gold/[0.05] blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-nami-gold/[0.03] blur-[100px] rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto">
             <div className="absolute inset-0 border border-nami-gold/30 translate-x-4 translate-y-4 rounded-t-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000" 
               alt="Woman wearing jewelry"
               className="w-full h-full object-cover rounded-t-full relative z-10 opacity-90"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="flex flex-col justify-center md:pl-12">
            <div className="text-[10px] tracking-[0.3em] uppercase text-nami-gold mb-8">Our Philosophy</div>
            <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-8">
              Jewelry that <br/>
              <span className="italic">lives with you.</span>
            </h2>
            <p className="text-sm font-light leading-relaxed text-nami-text/70 max-w-md mb-12">
              We believe your favorite pieces shouldn't have to be taken off before you shower, swim, or sweat. Crafted from premium stainless steel and thickly plated in 18k gold to ensure they never lose their shine.
            </p>
            <a 
              href="#" 
              className="w-fit px-10 py-5 border border-nami-border rounded-full text-[10px] tracking-[0.2em] uppercase hover:bg-nami-text hover:text-nami-bg transition-all duration-500"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-32 relative border-t border-nami-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-nami-gold/[0.04] blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 text-center mb-16 px-6">
          <a href="https://instagram.com/namijewels.co" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-nami-gold hover:text-nami-text transition-colors mb-6">
            <Instagram size={24} strokeWidth={1} />
          </a>
          <h2 className="text-4xl font-serif font-light mb-4">@namijewels.co</h2>
          <p className="text-[10px] tracking-[0.2em] uppercase text-nami-text/60">Tag us to be featured</p>
        </div>
        
        <div className="relative z-10 flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-1 px-6 md:px-12 min-w-max">
            {IG_FEED.map((img, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="relative w-72 h-72 md:w-96 md:h-96 snap-center group overflow-hidden block bg-[#111]"
              >
                <img 
                  src={img} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={32} strokeWidth={1} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#050505] pt-32 pb-12 border-t border-nami-border overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-nami-gold/30 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nami-gold/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <h3 className="text-4xl font-serif italic mb-8">nami jewels</h3>
              <p className="text-sm font-light leading-relaxed text-nami-text/60 max-w-sm mb-10">
                18k gold plated, hypoallergenic, tarnish-free, waterproof jewelry designed to be worn & stacked daily.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-nami-border flex items-center justify-center hover:bg-nami-gold hover:border-nami-gold transition-colors">
                  <Instagram size={18} strokeWidth={1} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-8">
              <h4 className="text-[10px] tracking-[0.2em] uppercase mb-8 text-nami-gold">Shop</h4>
              <ul className="space-y-5 text-sm font-light text-nami-text/60">
                <li><a href="#" className="hover:text-nami-text transition-colors">All Jewelry</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Necklaces</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Bracelets</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Rings</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Earrings</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-[10px] tracking-[0.2em] uppercase mb-8 text-nami-gold">Help</h4>
              <ul className="space-y-5 text-sm font-light text-nami-text/60">
                <li><a href="#" className="hover:text-nami-text transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Jewelry Care</a></li>
                <li><a href="#" className="hover:text-nami-text transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-nami-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.1em] uppercase text-nami-text/40">
            <p>&copy; {new Date().getFullYear()} Nami Jewels. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-nami-text transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-nami-text transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
