
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../App';

interface CTASectionProps {
  onStartClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onStartClick }) => {
  const { t } = useTranslation();
  return (
    <div className="py-24 bg-slate-50 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
            {t.cta.title}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.cta.desc}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onStartClick}
              className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-12 py-5 rounded-full shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
            >
              {t.cta.btn}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
