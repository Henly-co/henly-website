import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import SEO from '../../components/SEO';

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

export default function ContactUs({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en');
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Henly | Poultry Marketplace Support in Pakistan"
        description="Contact Henly for support, partnerships, and inquiries about poultry market rates, suppliers, and services across Pakistan."
        url="https://henly.co/contact"
        canonical="https://henly.co/contact"
      />
      <Header language={language} setLanguage={setLanguage} />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-[#8b0000]/90 to-gray-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {isUrdu ? 'ہمسے رابطہ کریں' : 'Contact Us'}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {isUrdu
                  ? 'کسی بھی سوال یا مدد کے لیے ہمسے براہ راست رابطہ کریں'
                  : 'Get in touch with us for any questions or assistance'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <ContactInfo language={language} />

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm language={language} />
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
