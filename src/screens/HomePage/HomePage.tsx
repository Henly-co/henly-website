import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import MarketRatesSection from './components/MarketRatesSection';
import MarketplaceSection from './components/MarketplaceSection';
import EducationSection from './components/EducationSection';
import MobileAppSection from './components/MobileAppSection';
import AppScreenshotsSection from './components/AppScreenshotsSection';
import SEO from '../../components/SEO';

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

export default function HomePage({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en');

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Henly | Pakistan's Poultry Marketplace — Eggs, Chicken, Chicks & Feed"
        description="Henly is Pakistan's leading poultry marketplace. Check daily egg, chicken and chicks rates for Karachi, Lahore, Islamabad, and connect with farmers, traders, and suppliers."
        url="https://henly.co/"
        canonical="https://henly.co/"
      />
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <MarketRatesSection language={language} />
        <MarketplaceSection language={language} />
        <EducationSection language={language} />
        <MobileAppSection language={language} />
  <AppScreenshotsSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
