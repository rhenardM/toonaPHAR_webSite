
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft, Loader2, Phone } from 'lucide-react';
import Logo from './Logo';

interface LoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    numero: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.numero) {
        setError('Veuillez entrer votre numéro de téléphone');
        return;
      }
      if (formData.numero.length < 9) {
        setError('Le numéro de téléphone doit contenir au moins 9 chiffres');
        return;
      }
      setStep(2);
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    setError('');
    if (!formData.password) {
      setError('Veuillez entrer votre mot de passe');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full py-6 px-6 border-b border-slate-50">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-900 font-bold group">
            <Logo className="w-10 h-10" />
            <span className="text-xl tracking-tight">Toona<span className="text-blue-500">PHAR</span></span>
          </button>
          <button onClick={onBack} className="text-slate-500 hover:text-slate-900 transition-colors">
            Retour à l'accueil
          </button>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[540px]"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {step === 1 ? 'Connectez-vous à ToonaPHAR' : 'Entrez votre mot de passe'}
            </h1>
            <p className="text-lg text-slate-500">
              {step === 1 
                ? "Utilisez le numéro de téléphone associé à votre officine."
                : `Saisissez le mot de passe pour ${formData.numero}`
              }
            </p>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl"
              >
                <p className="text-sm font-medium text-red-800">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleContinue} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      name="numero"
                      value={formData.numero}
                      onChange={handleChange}
                      placeholder="Numéro de téléphone"
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
                      autoFocus
                      disabled={isLoading}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mot de passe"
                      className="w-full px-4 py-4 pr-14 text-lg border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
                      autoFocus
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-2"
                    >
                      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-4 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-bold"
                  >
                    <ArrowLeft size={16} /> Modifier le numéro
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Connexion...
                </>
              ) : step === 1 ? (
                'Continuer'
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          {step === 2 && (
            <div className="mt-6 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                Mot de passe oublié ?
              </button>
            </div>
          )}

          <div className="mt-12 text-center text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            En continuant, vous accédez à votre espace sécurisé ToonaPHAR. 
            Besoin d'aide ? <button className="text-blue-600 font-bold hover:underline">Contactez le support</button>
          </div>
        </motion.div>
      </div>

      <footer className="w-full py-8 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} ToonaPHAR. Tous droits réservés.</p>
          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Conditions</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
