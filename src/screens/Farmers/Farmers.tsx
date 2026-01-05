import { useState } from 'react';
import { CheckCircle2, BadgeCheck, Layers, MapPin, Smartphone, ShieldCheck } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const content = {
	en: {
		title: 'Poultry Farmers',
		subtitle: 'Connecting poultry farmers with buyers, traders, and services across Pakistan',
		breadcrumb: 'Home · Farmers',
		overviewTitle: 'Built for Pakistan’s poultry farmers',
		overviewDesc:
			'Henly supports broiler and layer farmers with market transparency, fair pricing, logistics coordination, and verified access to buyers — all through the Henly mobile app.',
		overviewPoints: [
			'Broiler and layer farms across Pakistan',
			'Fair, transparent access to buyers and traders',
			'Logistics support and transport coordination via app',
			'Real-time market signals to plan production'
		],
		farmerTypesTitle: 'Types of poultry farmers',
		farmerTypes: [
			{
				title: 'Broiler Farmers',
				desc: 'Grow meat birds with rapid cycles; need steady demand and reliable transport.'
			},
			{
				title: 'Layer Farmers',
				desc: 'Produce table eggs; prioritize feed quality, health, and reliable buyers.'
			},
			{
				title: 'Breeder / Chick Farmers',
				desc: 'Manage breeding flocks and day-old chicks for hatcheries and farms.'
			}
		],
		howTitle: 'How farmers use Henly',
		steps: [
			{ title: 'Register on Henly App', desc: 'Create your account in minutes.' },
			{ title: 'Add Farm & Production Details', desc: 'Share locations, capacity, and availability.' },
			{ title: 'Receive Market Rates & Demand', desc: 'View daily signals and buyer interest.' },
			{ title: 'Sell via App & Arrange Transport', desc: 'Confirm orders and coordinate delivery.' }
		],
		howNote: 'All buying and selling is done through the Henly mobile application.',
		statsTitle: 'Farmers at scale',
		stats: [
			{ label: 'Registered Poultry Farmers', value: '15,000+' },
			{ label: 'Coverage Across Provinces', value: 'All Major Provinces' },
			{ label: 'Daily Market Rate Updates', value: 'Every day' }
		],
		benefitsTitle: 'Benefits for farmers',
		benefits: [
			{ title: 'Transparent daily market rates', desc: 'Stay updated with verified rate signals.' },
			{ title: 'Access to verified buyers & traders', desc: 'Connect to trusted demand channels.' },
			{ title: 'Reduced dependency on middlemen', desc: 'Direct visibility to demand and pricing.' },
			{ title: 'Transport coordination via app', desc: 'Arrange poultry transport with vetted partners.' },
			{ title: 'Industry news & disease alerts', desc: 'Stay informed on health and market advisories.' }
		],
		appTitle: 'Farmers can sell and manage orders using the Henly mobile app',
		appSubtitle: 'The website provides information only',
		downloadPlay: 'Google Play',
		downloadStore: 'App Store',
		noWebBooking: 'No buying or selling on website',
		heroImageAlt: 'Poultry farm with broiler chickens',
		stepsLabel: 'Steps',
	},
	ur: {
		title: 'پولٹری فارمرز',
		subtitle: 'پاکستان بھر میں خریداروں، تاجروں اور خدمات سے پولٹری فارمرز کو جوڑنا',
		breadcrumb: 'ہوم · فارمرز',
		overviewTitle: 'پاکستان کے پولٹری فارمرز کے لیے تیار',
		overviewDesc:
			'Henly برائلر اور لیئر فارمز کو مارکیٹ شفافیت، منصفانہ قیمتیں، لاجسٹکس تعاون، اور تصدیق شدہ خریداروں تک رسائی فراہم کرتا ہے — سب کچھ Henly موبائل ایپ کے ذریعے۔',
		overviewPoints: [
			'برائلر اور لیئر فارمز پاکستان بھر میں',
			'منصفانہ، شفاف رسائی خریداروں اور تاجروں تک',
			'لاجسٹکس مدد اور ٹرانسپورٹ کوآرڈینیشن ایپ کے ذریعے',
			'پیداوار کی منصوبہ بندی کے لیے حقیقی وقت کے سگنلز'
		],
		farmerTypesTitle: 'پولٹری فارمرز کی اقسام',
		farmerTypes: [
			{
				title: 'برائلر فارمرز',
				desc: 'گوشت کے لیے پرندے پالتے ہیں؛ مستحکم طلب اور قابلِ اعتماد ٹرانسپورٹ درکار۔'
			},
			{
				title: 'لیئر فارمرز',
				desc: 'ٹیبل انڈوں کی پیداوار؛ خوراک، صحت، اور قابلِ اعتماد خریدار اہم ہیں۔'
			},
			{
				title: 'بریڈر / چِک فارمرز',
				desc: 'بریڈنگ فلوکس اور ڈے اولڈ چوزے ہیچری اور فارمز کے لیے فراہم کرتے ہیں۔'
			}
		],
		howTitle: 'فارمرز Henly کو کیسے استعمال کرتے ہیں',
		steps: [
			{ title: 'Henly ایپ پر رجسٹر کریں', desc: 'چند منٹ میں اکاؤنٹ بنائیں۔' },
			{ title: 'فارم اور پیداوار کی تفصیل شامل کریں', desc: 'مقام، صلاحیت، اور دستیابی درج کریں۔' },
			{ title: 'مارکیٹ ریٹس اور ڈیمانڈ حاصل کریں', desc: 'روزانہ سگنلز اور خریدار دلچسپی دیکھیں۔' },
			{ title: 'ایپ کے ذریعے فروخت اور ٹرانسپورٹ کا انتظام', desc: 'آرڈر کنفرم کریں اور ڈیلیوری کوآرڈینیٹ کریں۔' }
		],
		howNote: 'تمام خرید و فروخت Henly موبائل ایپ کے ذریعے ہوتی ہے۔',
		statsTitle: 'فارمرز کا اسکیل',
		stats: [
			{ label: 'رجسٹرڈ پولٹری فارمرز', value: '15,000+' },
			{ label: 'تمام بڑے صوبوں میں کوریج', value: 'ملک گیر' },
			{ label: 'روزانہ مارکیٹ ریٹ اپ ڈیٹس', value: 'ہر روز' }
		],
		benefitsTitle: 'فارمرز کے فوائد',
		benefits: [
			{ title: 'شفاف روزانہ مارکیٹ ریٹس', desc: 'تصدیق شدہ ریٹ سگنلز کے ساتھ باخبر رہیں۔' },
			{ title: 'تصدیق شدہ خریداروں اور تاجروں تک رسائی', desc: 'قابلِ اعتماد ڈیمانڈ چینلز سے جڑیں۔' },
			{ title: 'دلالوں پر کم انحصار', desc: 'طلب اور قیمتوں تک براہِ راست رسائی۔' },
			{ title: 'ایپ کے ذریعے ٹرانسپورٹ کوآرڈینیشن', desc: 'تصدیق شدہ پارٹنرز کے ساتھ ٹرانسپورٹ طے کریں۔' },
			{ title: 'انڈسٹری نیوز اور بیماری کی الرٹس', desc: 'صحت اور مارکیٹ ایڈوائزری سے باخبر رہیں۔' }
		],
		appTitle: 'فارمرز Henly موبائل ایپ کے ذریعے آرڈر مینیج اور فروخت کر سکتے ہیں',
		appSubtitle: 'ویب سائٹ صرف معلومات فراہم کرتی ہے',
		downloadPlay: 'گوگل پلے',
		downloadStore: 'ایپ اسٹور',
		noWebBooking: 'ویب سائٹ پر خرید و فروخت نہیں',
		heroImageAlt: 'برائلر پولٹری فارم کی تصویر',
		stepsLabel: 'مراحل',
	},
};

const heroImage = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 540' role='img' aria-label='Illustration of poultry farm with chickens'>
	<defs>
		<linearGradient id='g' x1='0%' y1='0%' x2='0%' y2='100%'>
			<stop offset='0%' stop-color='%23ffffff'/>
			<stop offset='100%' stop-color='%23f5f5f5'/>
		</linearGradient>
	</defs>
	<rect width='800' height='540' fill='url(%23g)'/>
	<rect x='60' y='320' width='680' height='140' rx='24' fill='%23fdecec' stroke='%23b22222' stroke-width='4'/>
	<rect x='90' y='180' width='620' height='170' rx='28' fill='%23fff' stroke='%23b22222' stroke-width='4'/>
	<rect x='120' y='210' width='560' height='110' rx='18' fill='%23f5f5f5'/>
	<path d='M180 260 L620 260' stroke='%23b22222' stroke-width='6' stroke-linecap='round'/>
	<circle cx='240' cy='330' r='46' fill='%23fff' stroke='%23b22222' stroke-width='4'/>
	<circle cx='210' cy='320' r='20' fill='%23fff' stroke='%23b22222' stroke-width='3'/>
	<circle cx='275' cy='320' r='20' fill='%23fff' stroke='%23b22222' stroke-width='3'/>
	<circle cx='240' cy='305' r='10' fill='%23b22222'/>
	<path d='M248 310 Q260 300 272 310' stroke='%23333' stroke-width='3' fill='none'/>
	<polygon points='250,300 270,295 250,290' fill='%23b22222'/>
	<path d='M215 350 Q240 380 265 350' fill='%23fff' stroke='%23b22222' stroke-width='4'/>
	<circle cx='520' cy='330' r='46' fill='%23fff' stroke='%23b22222' stroke-width='4'/>
	<circle cx='490' cy='320' r='20' fill='%23fff' stroke='%23b22222' stroke-width='3'/>
	<circle cx='555' cy='320' r='20' fill='%23fff' stroke='%23b22222' stroke-width='3'/>
	<circle cx='520' cy='305' r='10' fill='%23b22222'/>
	<polygon points='530,300 550,295 530,290' fill='%23b22222'/>
	<path d='M495 350 Q520 380 545 350' fill='%23fff' stroke='%23b22222' stroke-width='4'/>
	<rect x='150' y='150' width='80' height='40' rx='8' fill='%23b22222'/>
	<rect x='570' y='150' width='80' height='40' rx='8' fill='%23b22222'/>
	<text x='190' y='176' text-anchor='middle' font-family='Inter, Arial' font-size='16' fill='%23fff'>Henly</text>
	<text x='610' y='176' text-anchor='middle' font-family='Inter, Arial' font-size='16' fill='%23fff'>Henly</text>
	<text x='400' y='430' text-anchor='middle' font-family='Inter, Arial' font-size='22' font-weight='700' fill='%23b22222'>Poultry Farm — Broilers & Layers</text>
</svg>`;

export default function Farmers() {
	const [language, setLanguage] = useState<'en' | 'ur'>('en');
	const isUrdu = language === 'ur';
	const t = content[language];

	return (
		<div className="min-h-screen bg-white" dir={isUrdu ? 'rtl' : 'ltr'}>
			<SEO
				title="Poultry Farmers | Henly"
				description="Learn how poultry farmers work with Henly for transparent market rates, verified buyers, and transport coordination. All orders happen in the Henly mobile app."
				url="https://henly.co/farmers"
				canonical="https://henly.co/farmers"
			/>

			<Header language={language} setLanguage={setLanguage} />

			<main className={`${isUrdu ? 'font-urdu' : ''}`}>
				{/* Page Header */}
				<section className="bg-white border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<p className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
							{t.breadcrumb}
						</p>
						<h1 className="text-4xl md:text-5xl font-extrabold text-[#B22222] mb-4">{t.title}</h1>
						<p className="text-lg text-gray-700 max-w-3xl leading-relaxed">{t.subtitle}</p>
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
									{t.overviewPoints.map((point, idx) => (
										<li key={idx} className="flex items-start gap-3">
											<CheckCircle2 className="w-5 h-5 text-[#B22222] mt-1" aria-hidden="true" />
											<span>{point}</span>
										</li>
									))}
								</ul>
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

				{/* Farmer Types */}
				<section className="bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t.farmerTypesTitle}</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
							{t.farmerTypes.map((card) => (
								<article
									key={card.title}
									className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2"
									tabIndex={0}
								>
									<h3 className="text-xl font-bold text-[#B22222] mb-3">{card.title}</h3>
									<p className="text-gray-700 leading-relaxed">{card.desc}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* How Farmers Use Henly */}
				<section className="bg-[#F5F5F5]">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="flex items-center gap-3 mb-6">
							<BadgeCheck className="w-6 h-6 text-[#B22222]" aria-hidden="true" />
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.howTitle}</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
							{t.steps.map((step, idx) => (
								<div
									key={step.title}
									className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col gap-3 focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2"
									tabIndex={0}
								>
									<div className="w-12 h-12 rounded-full bg-[#B22222] text-white flex items-center justify-center text-lg font-bold">
										{idx + 1}
									</div>
									<h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
									<p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
								</div>
							))}
						</div>
						<p className="mt-6 text-sm text-gray-600 flex items-start gap-2">
							<ShieldCheck className="w-4 h-4 text-[#B22222] mt-0.5" aria-hidden="true" />
							<span>{t.howNote}</span>
						</p>
					</div>
				</section>

				{/* Stats */}
				<section className="bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{t.statsTitle}</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{t.stats.map((stat) => (
								<div
									key={stat.label}
									className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2"
									tabIndex={0}
								>
									<p className="text-sm text-gray-600 mb-2">{stat.label}</p>
									<p className="text-3xl font-extrabold text-[#B22222]">{stat.value}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Benefits */}
				<section className="bg-white border-t border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
						<div className="flex items-center gap-3 mb-6">
							<Layers className="w-6 h-6 text-[#B22222]" aria-hidden="true" />
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.benefitsTitle}</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{t.benefits.map((benefit) => (
								<div
									key={benefit.title}
									className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-offset-2"
									tabIndex={0}
								>
									<CheckCircle2 className="w-5 h-5 text-[#B22222] mt-0.5" aria-hidden="true" />
									<div>
										<h3 className="text-base font-semibold text-gray-900">{benefit.title}</h3>
										<p className="text-sm text-gray-700 leading-relaxed">{benefit.desc}</p>
									</div>
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
