
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, ChevronLeft, Loader2, Smartphone, ShieldCheck, Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import { cn } from '../lib/utils';
import { useTranslation } from '../App';

interface PaymentProps {
  planId: string;
  months: number;
  onBack: () => void;
}

const Payment: React.FC<PaymentProps> = ({ planId, months, onBack }) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [pollingCount, setPollingCount] = useState(0);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    telephone: '',
    provider: '',
  });

  const plansData: Record<string, any> = {
    basic: { name: 'Basique', price: 15000, features: ['1 point de vente', 'Gestion de stock'] },
    pro: { name: 'Pro', price: 35000, features: ['3 points de vente', 'Fidélité client'] },
    enterprise: { name: 'Entreprise', price: 75000, features: ['Illimité', 'Multi-sites'] },
  };

  const selectedPlan = plansData[planId] || plansData.pro;
  const isAnnual = months === 12;
  const basePrice = selectedPlan.price;
  const totalPrice = isAnnual ? (basePrice * 12 * 0.8) : (basePrice * months);

  const providers = [
    { id: 'mpesa', name: 'M-PESA', color: 'bg-[#00812F]', icon: 'M' },
    { id: 'orange', name: 'Orange Money', color: 'bg-[#FF7900]', icon: 'O' },
    { id: 'airtel', name: 'Airtel Money', color: 'bg-[#E30613]', icon: 'A' },
  ];

  const steps = [
    { number: 1, title: t.payment.step_client, icon: <Check size={18} /> },
    { number: 2, title: t.payment.step_pay, icon: <Smartphone size={18} /> },
    { number: 3, title: t.payment.step_conf, icon: <ShieldCheck size={18} /> },
  ];

  const handleNext = () => {
    if (currentStep === 2 && (!formData.telephone || !formData.provider)) {
      setError(t.payment.pay_desc);
      return;
    }
    setError('');
    setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setPollingCount(count);
      if (count >= 10) {
        clearInterval(interval);
        setIsLoading(false);
        setPaymentSuccess(true);
        setCurrentStep(4);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="text-lg font-bold">Toona<span className="text-blue-500">PHAR</span></span>
          </button>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs text-slate-500 font-bold uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
              ID #8293-PH
            </span>
            <button onClick={onBack} className="text-sm font-bold text-slate-600 flex items-center gap-1 hover:text-blue-600 transition-colors">
              <ChevronLeft size={16} /> {t.nav.login === "Kokota" ? "Longwa" : "Annuler"}
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center relative">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                    currentStep > step.number ? "bg-green-500 text-white" :
                    currentStep === step.number ? "bg-blue-600 text-white ring-4 ring-blue-50" :
                    "bg-slate-100 text-slate-400"
                  )}>
                    {currentStep > step.number ? <Check size={22} strokeWidth={3} /> : step.number}
                  </div>
                  <span className={cn(
                    "absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
                    currentStep >= step.number ? "text-slate-900" : "text-slate-400"
                  )}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-4 rounded-full bg-slate-100 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: currentStep > step.number ? "100%" : "0%" }}
                      className="absolute inset-0 bg-green-500"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm min-h-[450px]">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div key="st1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-3xl font-extrabold mb-4 text-slate-900">{t.payment.header_title}</h2>
                    <p className="text-slate-500 mb-10 leading-relaxed">{t.payment.header_desc}</p>
                    
                    <div className="grid gap-6">
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-1 block">{t.payment.owner}</label>
                        <p className="font-bold text-slate-900 text-lg">Dr. Jean Dupont</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-1 block">{t.payment.license}</label>
                        <p className="font-bold text-slate-900 text-lg">PH-2024-001293</p>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex justify-end">
                      <button onClick={handleNext} className="bg-blue-600 text-white font-bold px-12 py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                        {t.login.btn_continue}
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div key="st2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-3xl font-extrabold mb-4 text-slate-900">{t.payment.pay_title}</h2>
                    <p className="text-slate-500 mb-8">{t.payment.pay_desc}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {providers.map(p => (
                        <button 
                          key={p.id} 
                          onClick={() => setFormData(f => ({...f, provider: p.id}))}
                          className={cn(
                            "flex flex-col items-center gap-4 p-6 rounded-[2rem] border-2 transition-all duration-300",
                            formData.provider === p.id ? "border-blue-600 bg-blue-50/50 ring-4 ring-blue-50" : "border-slate-100 hover:border-slate-200"
                          )}
                        >
                          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg", p.color)}>
                            {p.icon}
                          </div>
                          <span className="text-xs font-black text-slate-900 tracking-tight">{p.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-black text-slate-700 ml-1">{t.payment.phone_label}</label>
                      <input 
                        type="tel" 
                        value={formData.telephone}
                        onChange={e => setFormData(f => ({...f, telephone: e.target.value}))}
                        placeholder="08xxxxxxxx"
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl p-5 text-xl font-bold focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-300"
                      />
                      <p className="text-xs text-slate-400 flex items-center gap-2 px-2">
                        <Info size={16} className="text-blue-500" /> {t.payment.phone_info}
                      </p>
                    </div>

                    {error && (
                      <div className="mt-8 flex items-center gap-3 bg-red-50 text-red-600 p-5 rounded-2xl text-sm font-bold border border-red-100">
                        <AlertCircle size={20} /> {error}
                      </div>
                    )}

                    <div className="mt-12 flex justify-between items-center">
                      <button onClick={() => setCurrentStep(1)} className="text-slate-500 font-bold hover:text-slate-900 transition-colors">...</button>
                      <button onClick={handleNext} className="bg-blue-600 text-white font-bold px-12 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                        {t.login.btn_continue}
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div key="st3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-3xl font-extrabold mb-4 text-slate-900">{t.payment.final_title}</h2>
                    <p className="text-slate-500 mb-10 leading-relaxed">{t.payment.final_desc}</p>
                    
                    <div className="bg-blue-900 rounded-[2.5rem] p-10 mb-10 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
                      <p className="text-blue-200 text-xs mb-3 uppercase tracking-[0.2em] font-black relative z-10">{t.payment.pay_total}</p>
                      <p className="text-5xl md:text-6xl font-black text-white relative z-10">{totalPrice.toLocaleString()} <span className="text-2xl text-blue-300">FCFA</span></p>
                    </div>

                    {isLoading ? (
                      <div className="py-6 space-y-8">
                        <div className="flex flex-col items-center gap-6">
                          <Loader2 className="w-20 h-20 text-blue-600 animate-spin" strokeWidth={3} />
                          <div className="text-center">
                            <p className="text-xl font-black text-slate-900">...</p>
                            <p className="text-slate-500">...</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <button onClick={() => setCurrentStep(2)} className="text-slate-500 font-bold hover:text-slate-900">...</button>
                        <button onClick={handleSubmit} className="bg-green-600 text-white font-bold px-12 py-5 rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 active:scale-95 flex items-center gap-3">
                          <CheckCircle2 size={24} /> {t.payment.btn_pay}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div key="st4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                    <div className="w-28 h-28 bg-green-50 text-green-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                      <CheckCircle2 size={60} strokeWidth={3} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">{t.payment.success_title}</h2>
                    <p className="text-slate-500 mb-12 max-w-sm mx-auto leading-relaxed">{t.payment.success_desc}</p>
                    <button onClick={onBack} className="bg-blue-600 text-white font-bold px-14 py-5 rounded-3xl shadow-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-blue-600/40">
                      {t.payment.btn_dashboard}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm sticky top-32">
              <h3 className="text-xl font-extrabold mb-8 flex items-center gap-3 text-slate-900">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                Détails
              </h3>
              
              <div className="space-y-5 mb-10">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm font-bold">{t.pricing.title.includes('tarif') ? 'Forfait' : 'Talo'}</span>
                  <span className="font-black text-slate-900 uppercase tracking-tighter">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm font-bold">Cycle</span>
                  <span className="font-bold text-slate-900">{isAnnual ? t.pricing.annual : t.pricing.monthly}</span>
                </div>
              </div>
              
              <div className="pt-8 border-t-4 border-double border-slate-50">
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">{t.payment.pay_total}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-black text-blue-600">{totalPrice.toLocaleString()}</p>
                  <p className="text-sm font-black text-blue-400 uppercase">FCFA</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Payment;
