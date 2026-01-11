import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const content = {
	en: {
		title: 'Henly Marketplace',
		subtitle: 'A connected ecosystem of poultry stakeholders across Pakistan',
		intro: 'Henly connects farmers, traders, wholesalers, suppliers, and service providers through one trusted platform. Discover who is available on Henly and how they work together.',
		
		// Farmers
		farmersTitle: 'Farmers',
		farmersUrdu: 'کاشتکار',
		farmersDesc: 'Broiler, layer, and breeder farmers access transparent market rates, verified buyers, and logistics coordination through the Henly app.',
		farmersStat1: '15,000+',
		farmersStat1Label: 'Registered Farmers',
		farmersStat2: 'Nationwide',
		farmersStat2Label: 'Coverage',
		farmersCta: 'How Farmers Use Henly',
		
		// Wholesalers
		wholesalersTitle: 'Wholesalers',
		wholesalersUrdu: 'تھوک فروش',
		wholesalersDesc: 'Bulk egg and poultry distributors connect with verified producers and retailers, managing volume orders and pricing with market intelligence.',
		wholesalersStat1: '5,000+',
		wholesalersStat1Label: 'Active Wholesalers',
		wholesalersStat2: 'Direct Access',
		wholesalersStat2Label: 'To Producers',
		wholesalersCta: 'Learn More',
		
		// Traders
		tradersTitle: 'Traders',
		tradersUrdu: 'تاجر',
		tradersDesc: 'Licensed poultry traders and distributors match demand with supply, access market rates, and coordinate sales across regions.',
		tradersStat1: '2,500+',
		tradersStat1Label: 'Poultry Traders',
		tradersStat2: 'Regional',
		tradersStat2Label: 'Network',
		tradersCta: 'Explore Trading Network',
		
		// Pharma & Feed
		pharmaTitle: 'Pharma & Feed',
		pharmaUrdu: 'دوائیں اور خوراک',
		pharmaDesc: 'Veterinary medicines, vaccines, and premium poultry feed suppliers connect with farms and hatcheries to support disease prevention and productivity.',
		pharmaStat1: '1,200+',
		pharmaStat1Label: 'Pharma & Feed Partners',
		pharmaStat2: 'Quality Assured',
		pharmaStat2Label: 'Products',
		pharmaCta: 'View Services',
		
		// Transporters
		transportersTitle: 'Transporters',
		transportersUrdu: 'ٹرانسپورٹرز',
		transportersDesc: 'Specialized poultry and egg transport with temperature-controlled vehicles ensures safe, on-time delivery across Pakistan.',
		transportersStat1: '500+',
		transportersStat1Label: 'Registered Transporters',
		transportersStat2: 'Temperature',
		transportersStat2Label: 'Controlled',
		transportersCta: 'Transport via Henly App',
		
		// CTA Section
		ctaTitle: 'Join Henly today',
		ctaSubtitle: 'Download the app to start buying, selling, or providing services',
		downloadPlay: 'Google Play',
		downloadStore: 'App Store',
	},
	ur: {
		title: 'ہنلی مارکیٹ پلیس',
		subtitle: 'پاکستان بھر میں پولٹری سٹیک ہولڈرز کی منسلک ایکوسسٹم',
		intro: 'Henly کاشتکاروں، تاجروں، تھوک فروشوں، سپلائرز اور سروس فراہمین کو ایک قابلِ اعتماد پلیٹ فارم کے ذریعے جوڑتا ہے۔ دریافت کریں کہ Henly پر کون دستیاب ہے اور وہ کیسے کام کرتے ہیں۔',
		
		farmersTitle: 'کاشتکار',
		farmersUrdu: 'برائلر، لیئر، اور بریڈر فارمز',
		farmersDesc: 'برائلر، لیئر، اور بریڈر کاشتکار Henly ایپ کے ذریعے شفاف مارکیٹ ریٹس، تصدیق شدہ خریداری، اور لاجسٹکس تعاون حاصل کرتے ہیں۔',
		farmersStat1: '15,000+',
		farmersStat1Label: 'رجسٹرڈ کاشتکار',
		farmersStat2: 'ملک گیر',
		farmersStat2Label: 'کوریج',
		farmersCta: 'کاشتکار Henly استعمال کیسے کرتے ہیں',
		
		wholesalersTitle: 'تھوک فروش',
		wholesalersUrdu: 'بلک انڈے اور پولٹری ڈسٹری بیوٹرز',
		wholesalersDesc: 'تھوک فروش تصدیق شدہ پیدا کنندگان اور ریٹیلرز کے ساتھ رابطہ، بلک آرڈرز اور قیمتوں کا انتظام کرتے ہیں۔',
		wholesalersStat1: '5,000+',
		wholesalersStat1Label: 'فعال تھوک فروش',
		wholesalersStat2: 'براہ راست رسائی',
		wholesalersStat2Label: 'پیدا کنندگان تک',
		wholesalersCta: 'مزید جانیں',
		
		tradersTitle: 'تاجر',
		tradersUrdu: 'لائسنس یافتہ پولٹری تاجر',
		tradersDesc: 'لائسنس یافتہ پولٹری تاجر طلب اور رفتار میل کرتے ہیں، مارکیٹ ریٹس تک رسائی حاصل کرتے ہیں، اور اِقلیمی بیچنا کے نقالی کرتے ہیں۔',
		tradersStat1: '2,500+',
		tradersStat1Label: 'پولٹری تاجر',
		tradersStat2: 'علاقائی',
		tradersStat2Label: 'نیٹ ورک',
		tradersCta: 'ٹریڈنگ نیٹ ورک دریافت کریں',
		
		pharmaTitle: 'دوائیں اور خوراک',
		pharmaUrdu: 'ویٹرنری ادویات اور فیڈ سپلائرز',
		pharmaDesc: 'ویٹرنری ادویات، ویکسینز، اور پریمیم پولٹری خوراک سپلائرز فارمز اور ہیچری کے ساتھ رابطہ کرتے ہیں۔',
		pharmaStat1: '1,200+',
		pharmaStat1Label: 'دوا اور خوراک پارٹنرز',
		pharmaStat2: 'معیار کی تصدیق',
		pharmaStat2Label: 'پروڈکٹس',
		pharmaCta: 'خدمات دیکھیں',
		
		transportersTitle: 'ٹرانسپورٹرز',
		transportersUrdu: 'خصوصی پولٹری اور انڈے ٹرانسپورٹ',
		transportersDesc: 'درجہ حرارت کنٹرول گاڑیوں کے ساتھ خصوصی پولٹری اور انڈے ٹرانسپورٹ پاکستان بھر میں محفوظ، وقت پر ڈیلیوری یقینی کرتا ہے۔',
		transportersStat1: '500+',
		transportersStat1Label: 'رجسٹرڈ ٹرانسپورٹرز',
		transportersStat2: 'درجہ حرارت',
		transportersStat2Label: 'کنٹرول',
		transportersCta: 'Henly ایپ کے ذریعے ٹرانسپورٹ',
		
		ctaTitle: 'آج ہی Henly میں شامل ہوں',
		ctaSubtitle: 'خریدنا، فروخت کرنا، یا سروسز فراہم کرنا شروع کرنے کے لیے ایپ ڈاؤن لوڈ کریں',
		downloadPlay: 'گوگل پلے',
		downloadStore: 'ایپ اسٹور',
	}
};

// SVG placeholder images for each section
const illustrations = {
	farmers: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='g1' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' stop-color='%23fff'/><stop offset='100%' stop-color='%23f5f5f5'/></linearGradient></defs><rect width='500' height='400' fill='url(%23g1)'/><rect x='40' y='60' width='420' height='280' rx='20' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><circle cx='120' cy='150' r='40' fill='%23fff' stroke='%23b22222' stroke-width='3'/><circle cx='100' cy='130' r='15' fill='%23fff' stroke='%23b22222' stroke-width='2'/><circle cx='140' cy='130' r='15' fill='%23fff' stroke='%23b22222' stroke-width='2'/><circle cx='120' cy='120' r='8' fill='%23b22222'/><polygon points='125,115 140,110 125,105' fill='%23b22222'/><path d='M105 160 Q120 185 135 160' fill='%23fff' stroke='%23b22222' stroke-width='3'/><circle cx='280' cy='150' r='40' fill='%23fff' stroke='%23b22222' stroke-width='3'/><circle cx='260' cy='130' r='15' fill='%23fff' stroke='%23b22222' stroke-width='2'/><circle cx='300' cy='130' r='15' fill='%23fff' stroke='%23b22222' stroke-width='2'/><circle cx='280' cy='120' r='8' fill='%23b22222'/><polygon points='285,115 300,110 285,105' fill='%23b22222'/><path d='M265 160 Q280 185 295 160' fill='%23fff' stroke='%23b22222' stroke-width='3'/><rect x='60' y='240' width='380' height='60' rx='8' fill='%23b22222' opacity='0.08'/><text x='250' y='275' text-anchor='middle' font-family='Arial' font-size='18' fill='%23333' font-weight='700'>Poultry Farms</text></svg>`,
	wholesalers: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='g2' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' stop-color='%23fff'/><stop offset='100%' stop-color='%23f5f5f5'/></linearGradient></defs><rect width='500' height='400' fill='url(%23g2)'/><rect x='50' y='80' width='140' height='220' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><rect x='210' y='60' width='140' height='240' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><rect x='370' y='90' width='140' height='210' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><text x='120' y='200' text-anchor='middle' font-family='Arial' font-size='24' fill='%23b22222' font-weight='700'>📦</text><text x='280' y='180' text-anchor='middle' font-family='Arial' font-size='24' fill='%23b22222' font-weight='700'>📦</text><text x='440' y='195' text-anchor='middle' font-family='Arial' font-size='24' fill='%23b22222' font-weight='700'>📦</text><path d='M100 320 L120 340 M140 320 L120 340 M220 300 L240 320 M260 300 L240 320 M380 315 L400 335 M420 315 L400 335' stroke='%23b22222' stroke-width='2' stroke-linecap='round'/><text x='250' y='365' text-anchor='middle' font-family='Arial' font-size='16' fill='%23333' font-weight='700'>Wholesale Distribution</text></svg>`,
	traders: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='g3' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' stop-color='%23fff'/><stop offset='100%' stop-color='%23f5f5f5'/></linearGradient></defs><rect width='500' height='400' fill='url(%23g3)'/><rect x='60' y='100' width='100' height='120' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><rect x='200' y='70' width='100' height='150' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><rect x='340' y='100' width='100' height='120' rx='8' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='2'/><circle cx='110' cy='160' r='8' fill='%23b22222'/><circle cx='250' cy='145' r='8' fill='%23b22222'/><circle cx='390' cy='160' r='8' fill='%23b22222'/><path d='M110 170 Q180 200 250 155' stroke='%23b22222' stroke-width='2' fill='none' stroke-dasharray='4'/><path d='M250 165 Q310 195 390 170' stroke='%23b22222' stroke-width='2' fill='none' stroke-dasharray='4'/><text x='250' y='320' text-anchor='middle' font-family='Arial' font-size='18' fill='%23333' font-weight='700'>Market Network</text></svg>`,
	pharma: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='g4' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' stop-color='%23fff'/><stop offset='100%' stop-color='%23f5f5f5'/></linearGradient></defs><rect width='500' height='400' fill='url(%23g4)'/><rect x='80' y='60' width='60' height='140' rx='4' fill='%23b22222' opacity='0.15' stroke='%23b22222' stroke-width='2'/><rect x='180' y='40' width='60' height='160' rx='4' fill='%23b22222' opacity='0.15' stroke='%23b22222' stroke-width='2'/><rect x='280' y='60' width='60' height='140' rx='4' fill='%23b22222' opacity='0.15' stroke='%23b22222' stroke-width='2'/><rect x='380' y='50' width='60' height='150' rx='4' fill='%23b22222' opacity='0.15' stroke='%23b22222' stroke-width='2'/><rect x='95' y='85' width='30' height='35' rx='2' fill='%23b22222'/><rect x='195' y='70' width='30' height='40' rx='2' fill='%23b22222'/><rect x='295' y='85' width='30' height='35' rx='2' fill='%23b22222'/><rect x='395' y='78' width='30' height='38' rx='2' fill='%23b22222'/><text x='250' y='290' text-anchor='middle' font-family='Arial' font-size='20' fill='%23333' font-weight='700'>💊 Medical Supplies</text></svg>`,
	transporters: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='g5' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' stop-color='%23fff'/><stop offset='100%' stop-color='%23f5f5f5'/></linearGradient></defs><rect width='500' height='400' fill='url(%23g5)'/><rect x='80' y='120' width='280' height='120' rx='12' fill='%23b22222' opacity='0.1' stroke='%23b22222' stroke-width='3'/><rect x='100' y='140' width='240' height='80' rx='8' fill='%23b22222' opacity='0.15'/><circle cx='150' cy='260' r='20' fill='%23b22222' opacity='0.2' stroke='%23b22222' stroke-width='2'/><circle cx='350' cy='260' r='20' fill='%23b22222' opacity='0.2' stroke='%23b22222' stroke-width='2'/><line x1='170' y1='280' x2='330' y2='280' stroke='%23b22222' stroke-width='3'/><text x='250' y='155' text-anchor='middle' font-family='Arial' font-size='16' fill='%23333' font-weight='700'>Temp Controlled</text><text x='250' y='310' text-anchor='middle' font-family='Arial' font-size='18' fill='%23333' font-weight='700'>Logistics Network</text></svg>`,
};

type Language = 'en' | 'ur';

interface Props {
  language?: Language;
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}

type SectionImageAlignment = 'left' | 'right';

interface MarketplaceSection {
	id: string;
	titleEn: string;
	titleUr: string;
	descEn: string;
	descUr: string;
	stat1Value: string;
	stat1Label: string;
	stat2Value: string;
	stat2Label: string;
	ctaText: string;
	ctaUrl: string;
	imagePosition: SectionImageAlignment;
	illustration: string;
}

export default function Marketplace({ language: initialLanguage, setLanguage: initialSetLanguage }: Props) {
	const [language, setLanguage] = useState<Language>(initialLanguage || 'en');
	const isUrdu = language === 'ur';
	const t = content[language];

	const sections: MarketplaceSection[] = [
		{
			id: 'farmers',
			titleEn: content.en.farmersTitle,
			titleUr: content.ur.farmersTitle,
			descEn: content.en.farmersDesc,
			descUr: content.ur.wholesalersDesc,
			stat1Value: content.en.farmersStat1,
			stat1Label: content.en.farmersStat1Label,
			stat2Value: content.en.farmersStat2,
			stat2Label: content.en.farmersStat2Label,
			ctaText: content.en.farmersCta,
			ctaUrl: '/farmers',
			imagePosition: 'left',
			illustration: illustrations.farmers,
		},
		{
			id: 'wholesalers',
			titleEn: content.en.wholesalersTitle,
			titleUr: content.ur.wholesalersTitle,
			descEn: content.en.wholesalersDesc,
			descUr: content.ur.wholesalersDesc,
			stat1Value: content.en.wholesalersStat1,
			stat1Label: content.en.wholesalersStat1Label,
			stat2Value: content.en.wholesalersStat2,
			stat2Label: content.en.wholesalersStat2Label,
			ctaText: content.en.wholesalersCta,
			ctaUrl: '/#services',
			imagePosition: 'right',
			illustration: illustrations.wholesalers,
		},
		{
			id: 'traders',
			titleEn: content.en.tradersTitle,
			titleUr: content.ur.tradersTitle,
			descEn: content.en.tradersDesc,
			descUr: content.ur.tradersDesc,
			stat1Value: content.en.tradersStat1,
			stat1Label: content.en.tradersStat1Label,
			stat2Value: content.en.tradersStat2,
			stat2Label: content.en.tradersStat2Label,
			ctaText: content.en.tradersCta,
			ctaUrl: '/#services',
			imagePosition: 'left',
			illustration: illustrations.traders,
		},
		{
			id: 'pharma',
			titleEn: content.en.pharmaTitle,
			titleUr: content.ur.pharmaTitle,
			descEn: content.en.pharmaDesc,
			descUr: content.ur.pharmaDesc,
			stat1Value: content.en.pharmaStat1,
			stat1Label: content.en.pharmaStat1Label,
			stat2Value: content.en.pharmaStat2,
			stat2Label: content.en.pharmaStat2Label,
			ctaText: content.en.pharmaCta,
			ctaUrl: '/#services',
			imagePosition: 'right',
			illustration: illustrations.pharma,
		},
		{
			id: 'transporters',
			titleEn: content.en.transportersTitle,
			titleUr: content.ur.transportersTitle,
			descEn: content.en.transportersDesc,
			descUr: content.ur.transportersDesc,
			stat1Value: content.en.transportersStat1,
			stat1Label: content.en.transportersStat1Label,
			stat2Value: content.en.transportersStat2,
			stat2Label: content.en.transportersStat2Label,
			ctaText: content.en.transportersCta,
			ctaUrl: '/transporters',
			imagePosition: 'left',
			illustration: illustrations.transporters,
		},
	];

	const renderSection = (section: MarketplaceSection, idx: number) => {
		const bgColor = idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]';
		const title = isUrdu ? section.titleUr : section.titleEn;
		const description = isUrdu ? section.descUr : section.descEn;

		const contentBlock = (
			<div className="flex flex-col justify-center space-y-6">
				<div>
					<h2 className="text-4xl md:text-5xl font-extrabold text-[#B22222] mb-4">{title}</h2>
					<p className="text-lg text-gray-700 leading-relaxed max-w-lg">{description}</p>
				</div>
				<div className="grid grid-cols-2 gap-4 max-w-sm">
					<div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
						<p className="text-2xl font-extrabold text-[#B22222]">{section.stat1Value}</p>
						<p className="text-sm text-gray-600 mt-1">{section.stat1Label}</p>
					</div>
					<div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
						<p className="text-2xl font-extrabold text-[#B22222]">{section.stat2Value}</p>
						<p className="text-sm text-gray-600 mt-1">{section.stat2Label}</p>
					</div>
				</div>
				<a
					href={section.ctaUrl}
					className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B22222] text-[#B22222] font-bold rounded-lg hover:bg-[#B22222] hover:text-white transition-all w-fit min-h-[44px]"
				>
					{section.ctaText}
					<ArrowRight className="w-4 h-4" aria-hidden="true" />
				</a>
			</div>
		);

		const imageBlock = (
			<div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
				<img
					src={section.illustration}
					alt={`${title} illustration`}
					className="w-full h-full object-cover min-h-96"
					loading="lazy"
				/>
			</div>
		);

		return (
			<section key={section.id} className={`${bgColor} border-b border-gray-100`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div
						className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
						dir={isUrdu ? 'rtl' : 'ltr'}
					>
						{section.imagePosition === 'left' && !isUrdu ? (
							<>
								{imageBlock}
								{contentBlock}
							</>
						) : section.imagePosition === 'right' && !isUrdu ? (
							<>
								{contentBlock}
								{imageBlock}
							</>
						) : isUrdu && section.imagePosition === 'left' ? (
							<>
								{contentBlock}
								{imageBlock}
							</>
						) : (
							<>
								{imageBlock}
								{contentBlock}
							</>
						)}
					</div>
				</div>
			</section>
		);
	};

	return (
		<div className="min-h-screen bg-white" dir={isUrdu ? 'rtl' : 'ltr'}>
			<SEO
				title="Henly Marketplace | Poultry Ecosystem Pakistan"
				description="Discover Henly Marketplace - the connected ecosystem of farmers, wholesalers, traders, suppliers, and transporters across Pakistan's poultry industry."
				url="https://henly.co/marketplace"
				canonical="https://henly.co/marketplace"
			/>

			<Header language={language} setLanguage={setLanguage} />

			<main className={`${isUrdu ? 'font-urdu' : ''}`}>
				{/* Hero Section */}
				<section className="bg-white border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
						<div className="text-center max-w-3xl mx-auto">
							<h1 className="text-5xl md:text-6xl font-extrabold text-[#B22222] mb-6">{t.title}</h1>
							<p className="text-2xl text-gray-800 font-semibold mb-6">{t.subtitle}</p>
							<p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
						</div>
					</div>
				</section>

				{/* Marketplace Sections */}
				{sections.map((section, idx) => renderSection(section, idx))}

				{/* CTA Section */}
				<section className="bg-[#B22222] text-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
						<div className="text-center max-w-2xl mx-auto">
							<h2 className="text-4xl md:text-5xl font-extrabold mb-6">{t.ctaTitle}</h2>
							<p className="text-xl text-white/90 mb-8">{t.ctaSubtitle}</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="https://play.google.com/store"
									className="min-h-[44px] px-8 py-3 bg-white text-[#B22222] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
									aria-label={t.downloadPlay}
								>
									{t.downloadPlay}
								</a>
								<a
									href="https://www.apple.com/app-store/"
									className="min-h-[44px] px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
									aria-label={t.downloadStore}
								>
									{t.downloadStore}
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer language={language} />
		</div>
	);
}
