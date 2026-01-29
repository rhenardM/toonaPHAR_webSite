
import React from 'react';
import { Linkedin, Facebook, Twitter, Github, ChevronDown, Globe } from 'lucide-react';
import Logo from '../assets/images/logo.png';
import { useTranslation } from '../../App';
import { cn } from '../lib/utils';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  
  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ln', label: 'Lingala', flag: '🇨🇩' },
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <footer className="bg-[#0B0F1A] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.footer.newsletter_title}
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <input 
              type="email" 
              placeholder={t.footer.newsletter_placeholder} 
              className="bg-white px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              {t.footer.newsletter_btn}
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <img src={Logo} alt="Logo" className="w-20 h-16 object-contain" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Toona<span className="text-blue-500">PHAR</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              {t.hero.tagline}. {t.footer.tagline}
            </p>
            <div className="relative group/lang">
              <div className="flex items-center gap-2 text-white bg-white/5 border border-white/10 px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10 transition-colors w-fit">
                <span className="text-lg">{currentLang?.flag}</span>
                <span className="text-sm font-medium uppercase">{currentLang?.label}</span>
                <ChevronDown size={14} className="text-slate-500" />
              </div>
              <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-w-[140px] opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 transform translate-y-2 group-hover/lang:translate-y-0">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)} 
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-xs font-bold transition-colors flex items-center gap-3",
                      language === lang.code ? "bg-blue-50 text-blue-600" : "hover:bg-slate-50 text-slate-700"
                    )}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{t.nav.products}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Toona PHAR Mass Payout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toona PHAR Collect</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toona PHAR Payment Links</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toona PHAR School Fees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toona PHAR API Direct</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{t.nav.devs}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Bien démarrer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bibliothèque</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriel de base</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Statut</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Ressources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Étude de cas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emplois</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">ToonaPHAR</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 font-medium">
            ©  {new Date().getFullYear()} <a href="https://calculus-system.cd" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-400">calculus-system.cd</a> &mdash; {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
