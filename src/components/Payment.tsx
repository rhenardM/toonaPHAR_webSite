
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, ChevronLeft, Loader2, Smartphone, ShieldCheck, Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { cn } from '../lib/utils';

interface PaymentProps {
  planId: string;
  months: number;
  onBack: () => void;
}

const Payment: React.FC<PaymentProps> = ({ planId, months, onBack }) => {
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
    { number: 1, title: 'Client', icon: <Check size={18} /> },
    { number: 2, title: 'Paiement', icon: <Smartphone size={18} /> },
    { number: 3, title: 'Confirmation', icon: <ShieldCheck size={18} /> },
  ];

  const handleNext = () => {
    if (currentStep === 2 && (!formData.telephone || !formData.provider)) {
      setError('Veuillez remplir tous les champs de paiement');
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
      if (count >= 15) {
        clearInterval(interval);
        setIsLoading(false);
        setPaymentSuccess(true);
        setCurrentStep(4);
      }
    }, 1000);
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
            <span className="hidden md:inline text-sm text-slate-500 font-medium">
              Pharmacie de Garde • ID #8293
            </span>
            <button onClick={onBack} className="text-sm font-bold text-slate-600 flex items-center gap-1 hover:text-blue-600 transition-colors">
              <ChevronLeft size={16} /> Annuler
            </button>
          </div>
        </div>
      </header>

      {/* Stepper */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center relative">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    currentStep > step.number ? "bg-green-500 text-white" :
                    currentStep === step.number ? "bg-blue-600 text-white ring-4 ring-blue-50" :
                    "bg-slate-100 text-slate-400"
                  )}>
                    {currentStep > step.number ? <Check size={20} strokeWidth={3} /> : step.number}
                  </div>
                  <span className={cn(
                    "absolute -bottom-7 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap",
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
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm min-h-[400px]">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div key="st1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-bold mb-2">Vérification de l'officine</h2>
                    <p className="text-slate-500 mb-10">Confirmez que ces informations sont exactes avant de procéder.</p>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <label className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Propriétaire</label>
                        <p className="font-bold text-slate-900">Dr. Jean Dupont</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <label className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Numéro Registre</label>
                        <p className="font-bold text-slate-900">PH-2024-001293</p>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex justify-end">
                      <button onClick={handleNext} className="bg-blue-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div key="st2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-bold mb-2">Mode de paiement</h2>
                    <p className="text-slate-500 mb-8">Sélectionnez votre opérateur Mobile Money.</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {providers.map(p => (
                        <button 
                          key={p.id} 
                          onClick={() => setFormData(f => ({...f, provider: p.id}))}
                          className={cn(
                            "flex flex-col items-center gap-4 p-6 rounded-2xl border-2 transition-all",
                            formData.provider === p.id ? "border-blue-600 bg-blue-50 ring-4 ring-blue-100" : "border-slate-100 hover:border-slate-200"
                          )}
                        >
                          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg", p.color)}>
                            {p.icon}
                          </div>
                          <span className="text-xs font-bold text-slate-900">{p.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold text-slate-700">Numéro de téléphone pour le débit</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          value={formData.telephone}
                          onChange={e => setFormData(f => ({...f, telephone: e.target.value}))}
                          placeholder="0812345678"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 pl-6 text-lg font-bold focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <Info size={14} /> Le code USSD de confirmation sera envoyé à ce numéro.
                      </p>
                    </div>

                    {error && (
                      <div className="mt-6 flex items-center gap-3 bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                        <AlertCircle size={18} /> {error}
                      </div>
                    )}

                    <div className="mt-12 flex justify-between items-center">
                      <button onClick={() => setCurrentStep(1)} className="text-slate-500 font-bold hover:text-slate-900">Précédent</button>
                      <button onClick={handleNext} className="bg-blue-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div key="st3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-bold mb-2">Finaliser le paiement</h2>
                    <p className="text-slate-500 mb-8">Prêt à activer votre abonnement {selectedPlan.name}.</p>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 mb-8 text-center">
                      <p className="text-slate-500 text-sm mb-2 uppercase tracking-widest font-bold">Montant à régler</p>
                      <p className="text-5xl font-black text-blue-900">{totalPrice.toLocaleString()} FCFA</p>
                    </div>

                    {isLoading ? (
                      <div className="py-8 space-y-6">
                        <div className="flex flex-col items-center gap-6">
                          <Loader2 className="w-16 h-16 text-blue-600 animate-spin" strokeWidth={3} />
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-900">En attente de confirmation...</p>
                            <p className="text-sm text-slate-500">Vérifiez votre téléphone et entrez votre code PIN.</p>
                          </div>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: `${(pollingCount / 15) * 100}%` }}
                            className="h-full bg-blue-600"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <button onClick={() => setCurrentStep(2)} className="text-slate-500 font-bold hover:text-slate-900">Précédent</button>
                        <button onClick={handleSubmit} className="bg-green-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95 flex items-center gap-2">
                          <CheckCircle2 size={20} /> Confirmer le paiement
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div key="st4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={48} strokeWidth={3} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Paiement Réussi !</h2>
                    <p className="text-slate-500 mb-10 max-w-sm mx-auto">Votre officine est maintenant passée au plan <strong>{selectedPlan.name}</strong>. Vos fonctionnalités ont été activées instantanément.</p>
                    <button onClick={onBack} className="bg-blue-600 text-white font-bold px-12 py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all active:scale-95">
                      Aller au tableau de bord
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-4 text-slate-400 bg-white p-6 rounded-2xl border border-slate-100">
              <ShieldCheck size={24} className="text-green-500" />
              <p className="text-xs">Toutes les transactions sont chiffrées en AES-256 et traitées par notre passerelle de paiement sécurisée certifiée PCI-DSS.</p>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <CreditCard size={20} className="text-blue-500" /> Récapitulatif
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Plan</span>
                  <span className="font-bold text-slate-900">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Période</span>
                  <span className="font-bold text-slate-900">{isAnnual ? 'Annuelle (-20%)' : 'Mensuelle'}</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-50">
                  <span className="text-slate-500">Sous-total</span>
                  <span className="font-bold text-slate-900">{totalPrice.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Taxes (0%)</span>
                  <span className="font-bold text-slate-900">0 FCFA</span>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-dashed border-slate-100 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Total à payer</p>
                  <p className="text-2xl font-black text-blue-600">{totalPrice.toLocaleString()} FCFA</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-6 text-white text-center">
              <p className="text-sm font-bold mb-4">Besoin d'aide pour le paiement ?</p>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2 rounded-xl transition-all w-full text-sm">
                Appeler le support
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Payment;
