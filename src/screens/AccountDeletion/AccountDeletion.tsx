import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccountDeletionForm from './components/AccountDeletionForm';
import SEO from '../../components/SEO';

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

export default function AccountDeletion({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en');
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Delete Account | Henly Poultry Marketplace"
        description="Request deletion of your Henly account. We care about your privacy and handle data removal securely."
        url="https://henly.co/account-deletion"
        canonical="https://henly.co/account-deletion"
        robots="index,follow"
      />
      <Header language={language} setLanguage={setLanguage} />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-[#8b0000]/90 to-gray-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {isUrdu ? 'اکاؤنٹ حذفی' : 'Account Deletion'}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {isUrdu
                  ? 'اپنے Henly اکاؤنٹ کو ہٹانے کی درخواست کریں'
                  : 'Request to delete your Henly account'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AccountDeletionForm language={language} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
