
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from '../App';

interface PricingProps {
  onSelectPlan: (id: string, months: number) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "basic",
      name: "Basique",
      price: 15000,
      description: t.pricing.subtitle, // Simple placeholder
      cta: t.pricing.cta_trial,
      features: [
        "1 point de vente",
        "Gestion de stock",
        "Gestion des ventes",
        "Gestion des fournisseurs",
        "Rapports simples",
        "Support par chat"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      price: 35000,
      description: t.pricing.subtitle,
      recommended: true,
      cta: t.pricing.cta_sub,
      features: [
        "Jusqu'à 3 points de vente",
        "Gestion multi-stocks",
        "Gestion des clients (Fidélité)",
        "Alertes péremption avancées",
        "Rapports financiers complets",
        "Export comptable",
        "Support prioritaire"
      ]
    },
    {
      id: "enterprise",
      name: "Entreprise",
      price: 75000,
      description: t.pricing.subtitle,
      cta: t.pricing.cta_contact,
      features: [
        "Points de vente illimités",
        "Gestion multi-sites",
        "API & Intégrations personnalisées",
        "Accès multi-utilisateurs",
        "Dashboard de groupe",
        "Accompagnement dédié"
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">{t.pricing.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            {t.pricing.subtitle}
          </p>
          
          <div className="inline-flex items-center bg-white border border-slate-200 p-1 rounded-full shadow-sm mb-12">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-8 py-2.5 rounded-full text-sm font-bold transition-all",
                !isAnnual ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {t.pricing.monthly}
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-8 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                isAnnual ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {t.pricing.annual}
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t.pricing.discount}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const displayPrice = isAnnual ? Math.floor(plan.price * 0.8) : plan.price;
            return (
              <div 
                key={idx} 
                className={cn(
                  "relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col",
                  plan.recommended 
                    ? "border-blue-600 shadow-2xl shadow-blue-600/10 scale-105 z-10" 
                    : "border-slate-100 shadow-xl hover:shadow-slate-200/50"
                )}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-blue-950 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-white shadow-lg">
                    {t.pricing.recommended}
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-blue-950 mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-extrabold text-blue-950">{displayPrice.toLocaleString()}</span>
                    <span className="text-slate-400 font-medium">FCFA / {t.pricing.monthly.toLowerCase()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onSelectPlan(plan.id, isAnnual ? 12 : 1)}
                  className={cn(
                    "w-full py-3.5 rounded-xl font-bold transition-all mb-8 shadow-lg",
                    plan.recommended 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/30" 
                      : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
                  )}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 flex-grow">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inclus :</p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button className="text-blue-600 font-bold hover:underline">
            {t.pricing.compare}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
