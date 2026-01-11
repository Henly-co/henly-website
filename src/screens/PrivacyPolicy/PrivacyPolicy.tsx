import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';
import TableOfContents from './components/TableOfContents';
import SEO from '../../components/SEO';

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

export default function PrivacyPolicy({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en');
  const [activeSection, setActiveSection] = useState('introduction');
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | Henly Poultry Marketplace"
        description="Read Henly's privacy policy to understand how we collect, use, and protect your data on Pakistan's poultry marketplace."
        url="https://henly.co/privacy"
        canonical="https://henly.co/privacy"
        robots="index,follow"
      />
      <Header language={language} setLanguage={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-[#8b0000]/90 to-gray-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy'}
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                {isUrdu 
                  ? 'آخری اپ ڈیٹ: نومبر 19، 2025' 
                  : 'Last Updated: November 19, 2025'}
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isUrdu
                  ? 'Henly آپ کے ڈیٹا کا کنٹرولر ہے اور ہم آپ کی معلومات کی حفاظت کو یقینی بناتے ہیں'
                  : 'Henly is the data controller. Learn how we protect and process your information.'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sidebar */}
            <div className={`lg:col-span-1 ${isUrdu ? 'font-urdu' : ''}`}>
              <TableOfContents 
                language={language} 
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Main Content */}
            <div className={`lg:col-span-3 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <PrivacyPolicyContent 
                language={language}
                activeSection={activeSection}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
