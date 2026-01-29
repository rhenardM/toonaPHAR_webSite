
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

interface HomeProps {
  onLoginClick: () => void;
  onSelectPlan: (id: string, months: number) => void;
}

const Home: React.FC<HomeProps> = ({ onLoginClick, onSelectPlan }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar onLoginClick={onLoginClick} />
      <main className="flex-grow">
        <section id="hero">
          <Hero onStartClick={onLoginClick} />
        </section>
        
        <section id="overview" className="bg-slate-50">
          <Overview />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="pricing" className="bg-slate-50">
          <Pricing onSelectPlan={onSelectPlan} />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="cta">
          <CTASection onStartClick={onLoginClick} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
