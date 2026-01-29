
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  BellRing, 
  Smartphone, 
  History 
} from 'lucide-react';
import { useTranslation } from '../../App';

const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const iconList = [
    <ShoppingCart />,
    <BarChart3 />,
    <History />,
    <Users />,
    <BellRing />,
    <Smartphone />
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">{t.features.label}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950">{t.features.title}</h3>
          </div>
          <button className="hidden lg:block bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold px-8 py-4 rounded-full border border-slate-200 transition-all">
            {t.features.btn_all}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {t.features.items.map((feature: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                {React.cloneElement(iconList[idx] as React.ReactElement<{ size?: number }>, { size: 24 })}
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-950 mb-2">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
