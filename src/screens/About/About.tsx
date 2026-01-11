import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

export default function About({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en');
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Henly | Pakistan's Poultry Marketplace"
        description="Learn how Henly connects Pakistan's poultry ecosystem—farmers, traders, wholesalers, transporters, and suppliers—for faster, transparent orders and logistics."
        url="https://henly.co/about"
        canonical="https://henly.co/about"
      />
      <Header language={language} setLanguage={setLanguage} />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-[#8b0000]/90 to-gray-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {isUrdu ? 'ہنلی کے بارے میں' : 'About Henly'}
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {isUrdu
                  ? 'Henly پاکستان کی پولٹری ویلیو چین کو جوڑتا ہے — کسانوں، تاجروں، تھوک فروشوں، ٹرانسپورٹرز اور سپلائرز کے لیے ایک ہی پلیٹ فارم'
                  : "Henly connects Pakistan’s poultry value chain—farmers, traders, wholesalers, transporters, and suppliers—so orders move faster with real‑time clarity."}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
            {/* Mission */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {isUrdu ? 'ہمارا مشن' : 'Our mission'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isUrdu
                  ? 'پاکستان کے پولٹری ایکو سسٹم کو ڈیجیٹائز کرنا تاکہ ہر شرکاء منصفانہ قیمتوں اور بروقت فراہمی کے ساتھ اعتماد کے ساتھ خرید و فروخت کر سکے۔'
                  : 'To digitize Pakistan’s poultry ecosystem so every participant—big or small—can buy, sell, and move goods with confidence, fair pricing, and timely fulfillment.'}
              </p>
            </section>

            {/* What we do / Who we serve */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{isUrdu ? 'ہم کیا کرتے ہیں' : 'What we do'}</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>{isUrdu ? 'چکن اور انڈوں کے لیے تھوک آرڈرز کو آسان بنانا' : 'Streamline wholesale orders for poultry and eggs'}</li>
                  <li>{isUrdu ? 'فیڈ، ادویات، اور ہیچری چوزوں کی خریداری سادہ بنانا' : 'Simplify procurement of feed, medicines, and hatchery chicks'}</li>
                  <li>{isUrdu ? 'ٹرانسپورٹرز کو تصدیق شدہ ڈیلیوری مواقع سے جوڑنا' : 'Connect transporters to verified delivery opportunities'}</li>
                  <li>{isUrdu ? 'حقیقی وقت کی اپ ڈیٹس اور واضح اسٹیٹس کے ساتھ سب کو ہم آہنگ رکھنا' : 'Keep everyone in sync with real‑time updates and clear status'}</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{isUrdu ? 'ہم کن کی خدمت کرتے ہیں' : 'Who we serve'}</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>{isUrdu ? 'کاشتکار: فیڈ، ادویات، اور چوزے آرڈر کریں' : 'Farmers: Order feed, medicines, and hatchery chicks'}</li>
                  <li>{isUrdu ? 'تاجر اور تھوک فروش: چکن اور انڈوں کے آرڈر/بولیاں' : 'Traders & Wholesalers: Manage wholesale orders and bids'}</li>
                  <li>{isUrdu ? 'ٹرانسپورٹرز: متعلقہ ڈیلیوری آرڈرز اور اسٹیٹس اپ ڈیٹس' : 'Transporters: Receive transport orders and update delivery status'}</li>
                  <li>{isUrdu ? 'سپلائرز (فیڈ/فارما): مانگ پوری کریں اور آرڈرز پورے کریں' : 'Suppliers (Feed/Pharma): Reach demand and fulfill at scale'}</li>
                </ul>
              </div>
            </section>

            {/* How it works */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{isUrdu ? 'کیسے کام کرتا ہے' : 'How it works'}</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>{isUrdu ? 'موبائل نمبر کے ساتھ سائن ان کریں (OTP)' : 'Sign in with your mobile number (OTP verification)'}</li>
                <li>{isUrdu ? 'اپنا کردار منتخب کریں: کاشتکار، تاجر، تھوک فروش، ٹرانسپورٹر، سپلائر' : 'Select your role: farmer, trader, wholesaler, transporter, supplier'}</li>
                <li>{isUrdu ? 'نقشے پر اپنی بزنس لوکیشن سیٹ کریں' : 'Set your business location on the map'}</li>
                <li>{isUrdu ? 'آرڈر بنائیں یا بولی لگائیں (آپ کے کردار کے مطابق)' : 'Place an order or bid on available listings'}</li>
                <li>{isUrdu ? 'بڈز، آرڈر، ٹرانسپورٹ اور ادائیگی کی اپ ڈیٹس حاصل کریں' : 'Get real‑time notifications for bids, orders, transport, and payments'}</li>
                <li>{isUrdu ? 'ٹریکنگ کے ساتھ “In progress” سے “Completed” تک' : 'Track progress from “In progress” to “Completed” with clear actions'}</li>
              </ol>
            </section>

            {/* Features Grid */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isUrdu ? 'اہم خصوصیات' : 'Key features'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  isUrdu ? 'رول بیسڈ تجربہ' : 'Role‑based experience',
                  isUrdu ? 'آرڈرنگ اور بولی لگانا' : 'Ordering & bidding',
                  isUrdu ? 'خریداری شامل' : 'Procurement built‑in',
                  isUrdu ? 'ٹرانسپورٹ ورک فلو' : 'Transport workflow',
                  isUrdu ? 'ادائیگیاں: بینک، ایزی پیسہ، جاز کیش، COD' : 'Payments: Bank, Easypaisa, JazzCash, COD',
                  isUrdu ? 'لوکیشن آگاہ' : 'Location‑aware',
                  isUrdu ? 'حقیقی وقت الرٹس' : 'Real‑time alerts',
                  isUrdu ? 'پاکستانی صارفین کے لیے' : 'Local‑first (Pakistan)',
                  isUrdu ? 'کثیر لسانی' : 'Multilingual'
                ].map((title, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm">
                      {isUrdu
                        ? 'مختصر وضاحت دستیاب ہے جو ایپ کے اندر تفصیل سے نظر آئے گی۔'
                        : 'A concise explanation of this capability; more detail appears in‑app where needed.'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Henly & Trust */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{isUrdu ? 'کیوں Henly' : 'Why Henly'}</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>{isUrdu ? 'شفافیت: واضح قیمتیں، بولیاں، اور اسٹیٹس' : 'Transparency: clear pricing, bids, and statuses'}</li>
                  <li>{isUrdu ? 'رفتار: کم فون کالز، زیادہ آٹومیشن' : 'Speed: fewer phone calls, more automation'}</li>
                  <li>{isUrdu ? 'رسائی: وسیع نیٹ ورک تک پہنچ' : 'Reach: access a broader network'}</li>
                  <li>{isUrdu ? 'سادگی: موبائل فرسٹ ڈیزائن' : 'Simplicity: mobile‑first design'}</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{isUrdu ? 'اعتماد اور تحفظ' : 'Trust & safety'}</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>{isUrdu ? 'OTP کے ساتھ توثیق شدہ رسائی' : 'Verified access with OTP'}</li>
                  <li>{isUrdu ? 'مقصد کے مطابق رولز اور رجسٹریشن' : 'Purpose‑built roles and registration'}</li>
                  <li>{isUrdu ? 'محفوظ پروسیسز اور آڈٹ ایبل اپ ڈیٹس' : 'Secure flows and auditable updates'}</li>
                </ul>
              </div>
            </section>

            {/* Get started / Contact */}
            <section className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{isUrdu ? 'آغاز کریں' : 'Get started'}</h3>
              <p className="text-gray-600 mb-4">
                {isUrdu
                  ? 'Henly ایپ ڈاؤن لوڈ کریں، مختصر سیٹ اپ مکمل کریں، اور اپنا پہلا آرڈر دیں یا بولی لگائیں۔'
                  : 'Download the Henly app, complete short setup, and place your first order—or bid on one—with real‑time coordination.'}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/" className="px-5 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-all text-sm font-semibold">
                  {isUrdu ? 'ہوم پر جائیں' : 'Go to Home'}
                </a>
                <a href="/contact" className="px-5 py-3 bg-white border border-gray-200 rounded-lg hover:border-[#8b0000] hover:text-[#8b0000] transition-all text-sm font-semibold">
                  {isUrdu ? 'ہم سے رابطہ' : 'Contact Us'}
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
