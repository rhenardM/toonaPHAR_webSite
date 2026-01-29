
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';
import { useTranslation } from '../../App';

interface NavbarProps {
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const { language, setLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.products, href: '#features' },
    { name: t.nav.useCases, href: '#overview' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.devs, href: '#' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ln', label: 'Lingala', flag: '🇨🇩' },
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-header border-b border-slate-200 py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Toona<span className="text-blue-500">PHAR</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "font-medium transition-colors flex items-center gap-1",
                isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
              {(link.name === t.nav.products || link.name === t.nav.devs) && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Action Buttons & Lang */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all",
                isScrolled ? "text-slate-600 border-slate-200 bg-slate-50" : "text-white/80 border-white/10 hover:bg-white/5"
              )}
            >
              <span className="text-lg">{currentLang?.flag}</span>
              <span className="text-xs font-bold uppercase">{language}</span>
              <ChevronDown className={cn("w-3 h-3 transition-transform", langMenuOpen && "rotate-180")} />
            </button>
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-w-[140px] animate-in fade-in zoom-in-95 duration-200">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code as any); setLangMenuOpen(false); }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center gap-3",
                      language === lang.code ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={onLoginClick}
            className={cn(
              "font-medium px-4 py-2 transition-colors",
              isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"
            )}
          >
            {t.nav.login}
          </button>
          <button 
            onClick={onLoginClick}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden",
            isScrolled ? "text-slate-900" : "text-white"
          )} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 py-3 border-t border-slate-50">
            {languages.map((lang) => (
              <button 
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)} 
                className={cn(
                  "flex-1 px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border transition-all",
                  language === lang.code ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-500 border-slate-100"
                )}
              >
                <span>{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
          <hr className="border-slate-100" />
          <button onClick={onLoginClick} className="w-full text-center py-3 font-medium text-slate-600">
            {t.nav.login}
          </button>
          <button onClick={onLoginClick} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
