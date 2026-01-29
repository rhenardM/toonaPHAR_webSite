
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from '../../App';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">{t.faq.title}</h2>
            <p className="text-slate-500">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq: any, idx: number) => (
              <div 
                key={idx} 
                className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-blue-950">{faq.q}</span>
                  <div className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Plus size={120} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t.faq.cta_title}</h3>
            <p className="text-blue-100 mb-10 max-w-lg mx-auto">
              {t.faq.cta_desc}
            </p>
            <button className="bg-white text-blue-600 font-extrabold px-12 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-all">
              {t.faq.cta_btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
