
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Shield, Database } from 'lucide-react';
import { useTranslation } from '../../App';

interface HeroProps {
  onStartClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  const { t } = useTranslation();
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-64 bg-[#0B0F1A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white/70 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-8"
          >
            {t.hero.title_start} <br />
            <span className="relative inline-block px-6 py-2">
              <span className="relative z-10 text-white">{t.hero.title_pharmacy}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl -rotate-1 shadow-[0_0_30px_rgba(37,99,235,0.4)]"></span>
            </span> {t.hero.title_end}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              onClick={onStartClick}
              className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-12 py-5 rounded-full shadow-2xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 mb-16"
            >
              {t.nav.cta}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-white mb-24 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center gap-3">
              <Layout className="text-white/40 w-8 h-8" />
              <span className="text-xl font-bold">{t.hero.stats_offices}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Database className="text-white/40 w-8 h-8" />
              <span className="text-xl font-bold">{t.hero.stats_products}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Shield className="text-white/40 w-8 h-8" />
              <span className="text-xl font-bold">{t.hero.stats_uptime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-5xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-[2.5rem] p-4 border border-white/10 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="z-20 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/50 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl mb-2">ToonaPHAR</p>
                    <p className="text-white/50 text-sm">{t.hero.tagline}</p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660feac88?q=80&w=1000&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale blur-sm"
                  alt="Background"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
