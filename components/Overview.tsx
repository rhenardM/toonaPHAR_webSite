
import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, Ban, HeartPulse, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../App';

const Overview: React.FC = () => {
  const { t } = useTranslation();
  
  const icons = [
    <PackageSearch className="w-8 h-8 text-blue-600" />,
    <Ban className="w-8 h-8 text-red-600" />,
    <HeartPulse className="w-8 h-8 text-green-600" />,
    <ShieldCheck className="w-8 h-8 text-purple-600" />
  ];

  const colors = ["bg-blue-50", "bg-red-50", "bg-green-50", "bg-purple-50"];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">{t.overview.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">{t.overview.title}</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.overview.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.overview.items.map((item: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`${colors[idx]} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {icons[idx]}
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
