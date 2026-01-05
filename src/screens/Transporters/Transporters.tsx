import { useState } from 'react';
import { CheckCircle2, MapPin, Truck, Smartphone, ShieldCheck, Thermometer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const content = {
	en: {
		title: 'Poultry Transport Services',
		subtitle: 'Reliable and temperature-controlled transport for chicks, chickens, and eggs',
		breadcrumb: 'Home · Transporters',
		overviewTitle: 'Built for safe, on-time poultry movement',
		overviewDesc:
			'Transporters keep the poultry chain moving. Henly connects you to verified transport partners for live chicks, broiler chickens, and eggs across Pakistan.',
		overviewPoints: [
			'Role of transporters in the poultry supply chain',
			'On-time, humane, and safe movement of live birds and eggs',
			'Coverage across Pakistan with vetted partners'
		],
		servicesLabel: 'Service Types',
		serviceTypes: ['Chicks', 'Chickens', 'Eggs', 'Temperature-controlled vehicles'],
		bullets: ['Live chicks transport', 'Broiler chicken transport', 'Egg transport', 'Temperature-controlled vehicles'],
		cardsTitle: 'Transport partners available on Henly',
		contactStatus: 'Available via Henly App',
		cta: 'Request Transport via App',
		howTitle: 'How transport works',
		steps: [
			{ title: 'Download Henly App', desc: 'Install from Google Play or App Store.' },
			{ title: 'Register as Buyer or Seller', desc: 'Create your profile and set your city.' },
			{ title: 'Select Transport Service', desc: 'Choose chicks, chickens, or eggs and share pickup/drop.' },
			{ title: 'Track Delivery in App', desc: 'Live status, confirmations, and proof of delivery.' }
		],
		coverageTitle: 'Coverage & Scale',
		stats: [
			{ label: 'Registered Transporters', value: '500+' },
			{ label: 'All Major Cities Covered', value: 'Nationwide' },
			{ label: 'Daily Poultry Shipments', value: 'Active Daily' }
		],
		appTitle: 'Transport services are available through the Henly mobile app',
		appSubtitle: 'No transport booking on website. Use the Henly app to request and track.',
		downloadPlay: 'Google Play',
		downloadStore: 'App Store',
		noWebBooking: 'No transport booking on website',
		serviceAreas: 'Service Area',
		coverageLabel: 'Coverage',
		availability: 'Availability',
		heroImageAlt: 'Poultry transport truck with temperature-controlled container'
	},
	ur: {
		title: 'پولٹری ٹرانسپورٹ سروسز',
		subtitle: 'چوزوں، مرغیوں اور انڈوں کی محفوظ اور درجہ حرارت کنٹرول ٹرانسپورٹ',
		breadcrumb: 'ہوم · ٹرانسپورٹرز',
		overviewTitle: 'محفوظ اور بروقت ٹرانسپورٹ کے لیے تیار',
		overviewDesc:
			'ٹرانسپورٹرز پولٹری چین کو آگے بڑھاتے ہیں۔ Henly آپ کو تصدیق شدہ ٹرانسپورٹ پارٹنرز سے جوڑتا ہے جو پاکستان بھر میں چوزوں، برائلر مرغیوں اور انڈوں کو پہنچاتے ہیں۔',
		overviewPoints: [
			'پولٹری سپلائی چین میں ٹرانسپورٹرز کا کردار',
			'وقت پر، محفوظ اور ذمہ دارانہ ٹرانسپورٹ',
			'تصدیق شدہ پارٹنرز کے ساتھ ملک گیر کوریج'
		],
		servicesLabel: 'سروس کی اقسام',
		serviceTypes: ['چوزے', 'مرغیاں', 'انڈے', 'درجہ حرارت کنٹرول گاڑیاں'],
		bullets: ['چوزوں کی ٹرانسپورٹ', 'برائلر مرغیوں کی ٹرانسپورٹ', 'انڈوں کی ٹرانسپورٹ', 'درجہ حرارت کنٹرول گاڑیاں'],
		cardsTitle: 'Henly پر دستیاب ٹرانسپورٹ پارٹنرز',
		contactStatus: 'Henly ایپ کے ذریعے دستیاب',
		cta: 'ایپ کے ذریعے ٹرانسپورٹ کی درخواست دیں',
		howTitle: 'ٹرانسپورٹ کیسے کام کرتا ہے',
		steps: [
			{ title: 'Henly ایپ ڈاؤن لوڈ کریں', desc: 'گوگل پلے یا ایپ اسٹور سے انسٹال کریں۔' },
			{ title: 'خریدار یا فروخت کنندہ کے طور پر رجسٹر کریں', desc: 'اپنی پروفائل بنائیں اور شہر منتخب کریں۔' },
			{ title: 'ٹرانسپورٹ سروس منتخب کریں', desc: 'چوزے، مرغیاں یا انڈے منتخب کریں اور پک اپ/ڈراپ شیئر کریں۔' },
			{ title: 'ایپ میں ڈیلیوری ٹریک کریں', desc: 'لائیو اسٹیٹس، تصدیقات، اور ثبوتِ ڈیلیوری۔' }
		],
		coverageTitle: 'کوریج اور اسکیل',
		stats: [
			{ label: 'رجسٹرڈ ٹرانسپورٹرز', value: '500+' },
			{ label: 'تمام بڑے شہر کور', value: 'ملک گیر' },
			{ label: 'روزانہ پولٹری شپمنٹس', value: 'فعال روزانہ' }
		],
		appTitle: 'ٹرانسپورٹ سروسز Henly موبائل ایپ پر دستیاب ہیں',
		appSubtitle: 'ویب سائٹ پر بُکنگ نہیں۔ درخواست اور ٹریکنگ ایپ میں کریں۔',
		downloadPlay: 'گوگل پلے',
		downloadStore: 'ایپ اسٹور',
		noWebBooking: 'ویب سائٹ پر ٹرانسپورٹ بُکنگ نہیں',
		serviceAreas: 'سروس ایریا',
		coverageLabel: 'کوریج',
		availability: 'دستیابی',
		heroImageAlt: 'درجہ حرارت کنٹرول کنٹینر کے ساتھ پولٹری ٹرک'
	}
};

const transporters = [
	{ name: 'Alpha Poultry Logistics', services: ['Chicks', 'Chickens', 'Eggs'], area: 'Lahore, Punjab' },
	{ name: 'Karachi Cold Fleet', services: ['Chicks', 'Eggs'], area: 'Karachi, Sindh' },
	{ name: 'Northern Poultry Movers', services: ['Chicks', 'Chickens', 'Eggs'], area: 'Islamabad & Rawalpindi' },
	{ name: 'Punjab Fresh Haulers', services: ['Chickens', 'Eggs'], area: 'Faisalabad, Multan' },
	{ name: 'Coastal Poultry Carriers', services: ['Chicks', 'Chickens'], area: 'Hyderabad, Sindh' },
	{ name: 'Frontier Agri Transport', services: ['Eggs', 'Chicks'], area: 'Peshawar, Khyber Pakhtunkhwa' }
];

const heroImage = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80';

export default function Transporters() {
	const [language, setLanguage] = useState<'en' | 'ur'>('en');
	const isUrdu = language === 'ur';
	const t = content[language];
	const serviceLabelMap: Record<string, string> = {
		Chicks: isUrdu ? 'چوزے' : 'Chicks',
		Chickens: isUrdu ? 'مرغیاں' : 'Chickens',
		Eggs: isUrdu ? 'انڈے' : 'Eggs'
	};

	return (
		<div className="min-h-screen bg-white" dir={isUrdu ? 'rtl' : 'ltr'}>
			<SEO
				title="Poultry Transport Services | Henly"
				description="Learn how Henly connects you to verified poultry transporters for chicks, chickens, and eggs. Request and track transport via the Henly mobile app."
				url="https://henly.co/transporters"
				canonical="https://henly.co/transporters"
			/>

			<Header language={language} setLanguage={setLanguage} />

			<main className={`${isUrdu ? 'font-urdu' : ''}`}>
				{/* Page Header */}
				<section className="bg-white border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<p className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
							{t.breadcrumb}
						</p>
						<h1 className="text-4xl md:text-5xl font-extrabold text-[#B22222] mb-4">
							{t.title}
						</h1>
						<p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
							{t.subtitle}
						</p>
					</div>
				</section>

				{/* Overview */}
				<section className="bg-[#F5F5F5]">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
							<div className="space-y-6">
								<div>
									<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t.overviewTitle}</h2>
									<p className="text-gray-700 leading-relaxed">{t.overviewDesc}</p>
								</div>
								<ul className="space-y-3 text-gray-700">
									{t.bullets.map((point, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<CheckCircle2 className="w-5 h-5 text-[#B22222] mt-1" aria-hidden="true" />
											<span>{point}</span>
										</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-3" aria-label={t.servicesLabel}>
									{t.serviceTypes.map((svc, idx) => (
										<span
											key={idx}
											className="px-4 py-2 rounded-full bg-white text-[#B22222] font-semibold border border-[#B22222]/20"
										>
											{svc}
										</span>
									))}
								</div>
							</div>
							<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
								<img
									src={heroImage}
									alt={t.heroImageAlt}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Transporter Cards */}
				<section className="bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="flex items-center justify-between mb-8">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.cardsTitle}</h2>
							<div className="hidden md:flex items-center gap-3 text-gray-600">
								<Thermometer className="w-5 h-5 text-[#B22222]" aria-hidden="true" />
								<span>{t.coverageLabel}: Pakistan</span>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{transporters.map((item) => (
								<article
									key={item.name}
									className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
								>
									<div className="h-1.5 bg-[#B22222]"></div>
									<div className="p-6 space-y-4">
										<header className="flex items-start justify-between gap-3">
											<div>
												<h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
												<p className="text-sm text-gray-600 flex items-center gap-2">
													<MapPin className="w-4 h-4 text-[#B22222]" aria-hidden="true" />
													<span>{item.area}</span>
												</p>
											</div>
											<div className="flex items-center gap-2 text-[#B22222] font-semibold text-sm" aria-label={t.availability}>
												<ShieldCheck className="w-4 h-4" aria-hidden="true" />
												<span>{t.contactStatus}</span>
											</div>
										</header>
										<div>
											<p className="text-sm text-gray-700 font-semibold mb-2">{t.servicesLabel}</p>
											<div className="flex flex-wrap gap-2">
												{item.services.map((svc) => (
													<span
														key={svc}
														className="px-3 py-1.5 bg-[#F5F5F5] text-gray-800 rounded-full text-sm border border-gray-200"
													>
														{serviceLabelMap[svc] ?? svc}
													</span>
												))}
											</div>
										</div>
										<button
											className="w-full min-h-[44px] px-4 py-3 bg-[#B22222] text-white font-semibold rounded-lg hover:bg-[#9b1d1d] shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2"
											aria-label={t.cta}
										>
											{t.cta}
										</button>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* How it works */}
				<section className="bg-white border-t border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="flex items-center gap-3 mb-8">
							<Truck className="w-6 h-6 text-[#B22222]" aria-hidden="true" />
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.howTitle}</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
							{t.steps.map((step, idx) => (
								<div
									key={step.title}
									className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-3"
								>
									<div className="w-12 h-12 rounded-full bg-[#B22222] text-white flex items-center justify-center text-lg font-bold">
										{idx + 1}
									</div>
									<h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
									<p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Coverage */}
				<section className="bg-[#F5F5F5]">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="flex items-center gap-3 mb-8">
							<Thermometer className="w-6 h-6 text-[#B22222]" aria-hidden="true" />
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.coverageTitle}</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{t.stats.map((stat) => (
								<div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
									<p className="text-sm text-gray-600 mb-2">{stat.label}</p>
									<p className="text-3xl font-extrabold text-[#B22222]">{stat.value}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* App CTA */}
				<section className="bg-[#B22222] text-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Smartphone className="w-6 h-6" aria-hidden="true" />
									<p className="text-sm uppercase tracking-wide font-semibold">Henly App</p>
								</div>
								<h2 className="text-3xl md:text-4xl font-extrabold">{t.appTitle}</h2>
								<p className="text-white/90 text-lg">{t.appSubtitle}</p>
								<div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold">
									<ShieldCheck className="w-4 h-4" aria-hidden="true" />
									<span>{t.noWebBooking}</span>
								</div>
							</div>
							<div className="flex flex-wrap gap-4 md:justify-end">
								<a
									href="https://play.google.com/store"
									className="min-h-[44px] px-5 py-3 bg-white text-[#B22222] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B22222]"
									aria-label="Download on Google Play"
								>
									{t.downloadPlay}
								</a>
								<a
									href="https://www.apple.com/app-store/"
									className="min-h-[44px] px-5 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B22222]"
									aria-label="Download on App Store"
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
