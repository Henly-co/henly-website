import { ChevronDown, Lock, Mail, Phone, Shield, FileText, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivacyPolicyContentProps {
  language: 'en' | 'ur';
  activeSection: string;
}

interface Section {
  id: string;
  titleEn: string;
  titleUr: string;
  icon?: LucideIcon;
  subsections?: {
    titleEn: string;
    titleUr: string;
    contentEn: (string | JSX.Element)[];
    contentUr: (string | JSX.Element)[];
  }[];
  contentEn?: (string | JSX.Element)[];
  contentUr?: (string | JSX.Element)[];
}

export default function PrivacyPolicyContent({ language, activeSection }: PrivacyPolicyContentProps) {
  const isUrdu = language === 'ur';
  const [expandedSubsections, setExpandedSubsections] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleSubsection = (id: string) => {
    setExpandedSubsections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const sections: Section[] = [
    {
      id: 'introduction',
      titleEn: '1. Introduction',
      titleUr: '1. تعارف',
      icon: Shield,
      contentEn: [
        'Henly ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("Application" or "App") and our associated services.',
        'Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Application.'
      ],
      contentUr: [
        'Henly ("ہم," "ہماری," "ہماری," یا "کمپنی") آپ کی رازداری کی حفاظت کے لیے پرعزم ہے۔ یہ رازداری کی پالیسی وضاحت کرتی ہے کہ ہم آپ کی معلومات کو کیسے جمع، استعمال، افشاء اور محفوظ کرتے ہیں جب آپ ہماری موبائل ایپلیکیشن ("ایپلیکیشن" یا "ایپ") اور ہماری متعلقہ خدمات کا استعمال کرتے ہیں۔',
        'براہ کرم اس رازداری کی پالیسی کو احتیاط سے پڑھیں۔ اگر آپ ہماری پالیسیوں اور طریقوں سے متفق نہیں ہیں، تو براہ کرم ہماری ایپلیکیشن کا استعمال نہ کریں۔'
      ]
    },
    {
      id: 'information-collected',
      titleEn: '2. Information We Collect',
      titleUr: '2. جو معلومات ہم جمع کرتے ہیں',
      icon: FileText,
      subsections: [
        {
          titleEn: '2.1 Information You Provide Directly',
          titleUr: '2.1 معلومات جو آپ براہ راست فراہم کرتے ہیں',
          contentEn: [
            'Account Registration:',
            '• Full name',
            '• Phone number (for SMS-based OTP verification)',
            '• Email address (optional for support and notifications)',
            '• No password is required; login is via OTP only',
            '• Business type/role (Farmer, Wholesaler, Feed Supplier, Pharma Supplier, Transporter, Trader)',
            '• Business name and details',
            '',
            'Location Information:',
            '• Province/State',
            '• District',
            '• Tehsil/Sub-district',
            '• Address (optional)',
            '',
            'Product & Order Information:',
            '• Product listings you create or post',
            '• Order details and preferences',
            '• Quantity requirements',
            '• Special notes and requirements',
            '• Bidding and pricing information',
            '• Payment information (processed securely via third-party providers)',
            '',
            'Communication:',
            '• Messages between buyers and sellers',
            '• Support requests and inquiries',
            '• Feedback and ratings'
          ],
          contentUr: [
            'اکاؤنٹ رجسٹریشن:',
            '• مکمل نام',
            '• فون نمبر (SMS-based OTP تصدیق کے لیے)',
            '• ای میل ایڈریس (اختیاری — سپورٹ اور نوٹیفکیشنز کے لیے)',
            '• پاس ورڈ درکار نہیں؛ لاگ ان صرف OTP کے ذریعے ہوتا ہے',
            '• کاروباری قسم/کردار (کاشتکار، تھوک فروش، فیڈ سپلائر، فارما سپلائر، ٹرانسپورٹر، تاجر)',
            '• کاروبار کا نام اور تفصیلات',
            '',
            'مقام کی معلومات:',
            '• صوبہ/ریاست',
            '• ضلع',
            '• تحصیل/ذیلی ضلع',
            '• پتہ (اختیاری)',
            '',
            'مصنوعات اور آرڈر کی معلومات:',
            '• مصنوعات کی فہرستیں جو آپ بناتے یا پوسٹ کرتے ہیں',
            '• آرڈر کی تفصیلات اور ترجیحات',
            '• مقدار کی ضروریات',
            '• خصوصی نوٹس اور ضروریات',
            '• بوجھ اور قیمت کی معلومات',
            '• ادائیگی کی معلومات (تیسری فریق کے فراہم کنندگان کے ذریعے محفوظ طریقے سے پروسیس کی جاتی ہے)',
            '',
            'بات چیت:',
            '• خریداروں اور فروخت کنندگان کے درمیان پیغامات',
            '• معاونت کی درخواستیں اور سوالات',
            '• تاثرات اور درجہ بندی'
          ]
        },
        {
          titleEn: '2.2 Information Collected Automatically',
          titleUr: '2.2 خودکار طریقے سے جمع کی گئی معلومات',
          contentEn: [
            'Device Information:',
            '• Device type and model',
            '• Operating system version',
            '• Device identifiers (IMEI, IDFA)',
            '• Mobile network information',
            '',
            'Usage Information:',
            '• Pages/features accessed',
            '• Time and duration of use',
            '• Actions performed in the app',
            '• Search queries',
            '• Clicks and interactions',
            '',
            'Location Data:',
            '• GPS location (only when you enable location services)',
            '• We collect this to show nearby buyers/sellers and recommend relevant listings',
            '',
            'Authentication Data:',
            '• Firebase Authentication logs',
            '• Play Integrity API verification data',
            '• SMS delivery and verification records'
          ],
          contentUr: [
            'ڈیوائس کی معلومات:',
            '• ڈیوائس کی قسم اور ماڈل',
            '• آپریٹنگ سسٹم کا ورژن',
            '• ڈیوائس کی شناخت (IMEI, IDFA)',
            '• موبائل نیٹ ورک کی معلومات',
            '',
            'استعمال کی معلومات:',
            '• صفحات/خصوصیات تک رسائی',
            '• استعمال کا وقت اور مدت',
            '• ایپ میں انجام دی گئی کارروائیاں',
            '• تلاش کے سوالات',
            '• کلکس اور تعاملات',
            '',
            'مقام کے ڈیٹا:',
            '• GPS مقام (صرف اگر آپ مقام کی خدمات فعال کریں)',
            '• ہم یہ جمع کرتے ہیں قریبی خریداروں/فروخت کنندگان کو دکھانے اور متعلقہ فہرستوں کی سفارش کرنے کے لیے',
            '',
            'تصدیق کے ڈیٹا:',
            '• Firebase تصدیق کے لاگز',
            '• Play Integrity API تصدیق کے ڈیٹا',
            '• SMS ڈیلیوری اور تصدیق ریکارڈ'
          ]
        }
      ]
    },
    {
      id: 'how-we-use',
      titleEn: '3. How We Use Your Information',
      titleUr: '3. ہم آپ کی معلومات کا استعمال کیسے کریں',
      icon: Lock,
      subsections: [
        {
          titleEn: '3.1 Core Service Delivery',
          titleUr: '3.1 بنیادی خدمت کی فراہمی',
          contentEn: [
            '• Creating and managing your account',
            '• Processing orders and transactions',
            '• Facilitating communication between buyers and sellers',
            '• Verifying your identity via OTP',
            '• Managing bidding and pricing negotiations'
          ],
          contentUr: [
            '• آپ کے اکاؤنٹ کو بنانا اور منظم کرنا',
            '• آرڈرز اور ٹرانزیکشنز کو پروسیس کرنا',
            '• خریداروں اور فروخت کنندگان کے درمیان رابطہ قائم کرنا',
            '• OTP کے ذریعے آپ کی شناخت کی تصدیق کرنا',
            '• بوجھ اور قیمت کی تفاوضات کو منظم کرنا'
          ]
        },
        {
          titleEn: '3.2 Improving Our Services',
          titleUr: '3.2 ہماری خدمات میں بہتری',
          contentEn: [
            '• Analyzing app usage patterns',
            '• Identifying technical issues',
            '• Developing new features',
            '• Personalizing your experience',
            '• Optimizing app performance'
          ],
          contentUr: [
            '• ایپ کے استعمال کے نمونوں کا تجزیہ',
            '• تکنیکی مسائل کی نشاندہی',
            '• نئی خصوصیات کو تیار کرنا',
            '• آپ کے تجربے کو ذاتی نوعیت دینا',
            '• ایپ کی کارکردگی کو بہتر بنانا'
          ]
        },
        {
          titleEn: '3.3 Communication',
          titleUr: '3.3 رابطہ',
          contentEn: [
            '• Sending order confirmations and updates',
            '• Providing customer support',
            '• Sending promotional content (with your consent)',
            '• Notifying you of policy changes',
            '• Security alerts and verification'
          ],
          contentUr: [
            '• آرڈر کی تصدیقیں اور اپ ڈیٹس بھیجنا',
            '• گاہک کی معاونت فراہم کرنا',
            '• پروموشنل مواد بھیجنا (آپ کی رضامندی کے ساتھ)',
            '• آپ کو پالیسی میں تبدیلیوں سے آگاہ کرنا',
            '• سیکیورٹی الرٹس اور تصدیق'
          ]
        },
        {
          titleEn: '3.4 Security & Compliance',
          titleUr: '3.4 سیکیورٹی اور تعریف',
          contentEn: [
            '• Preventing fraud and unauthorized access',
            '• Protecting against malicious attacks',
            '• Enforcing our Terms of Service',
            '• Complying with legal obligations',
            '• Detecting and investigating suspicious activity'
          ],
          contentUr: [
            '• دھوکہ اور غیر مجاز رسائی سے بچاؤ',
            '• نقصان دہ حملوں سے تحفظ',
            '• ہماری خدمت کی شرائط کو نافذ کرنا',
            '• قانونی ذمہ داریوں کی تعریف کرنا',
            '• مشکوک سرگرمی کی نشاندہی اور تحقیق کرنا'
          ]
        },
        {
          titleEn: '3.5 Business Analytics',
          titleUr: '3.5 کاروباری تجزیات',
          contentEn: [
            '• Aggregated market insights',
            '• Pricing trends',
            '• Supply and demand analysis',
            '• User behavior analytics (anonymized)'
          ],
          contentUr: [
            '• مجموعی مارکیٹ کے اندازے',
            '• قیمت کے رجحانات',
            '• فراہمی اور مانگ کا تجزیہ',
            '• صارف کے رویے کا تجزیہ (نام نہ ظاہر کریں)'
          ]
        }
      ]
    },
    {
      id: 'how-we-share',
      titleEn: '4. How We Share Your Information',
      titleUr: '4. ہم آپ کی معلومات کو کیسے شیئر کرتے ہیں',
      subsections: [
        {
          titleEn: '4.1 With Other Users',
          titleUr: '4.1 دوسری صارفین کے ساتھ',
          contentEn: [
            '• Buyer-Seller Interaction: Your basic profile information (name, business type, location) is visible to other users you interact with',
            '• Public Listings: Products you list are visible to all users in relevant location/category filters',
            '• Ratings & Reviews: Your transaction history and ratings may be displayed to other users'
          ],
          contentUr: [
            '• خریدار-فروخت کنندہ کا تعامل: آپ کی بنیادی پروفائل کی معلومات (نام، کاروبار کی قسم، مقام) دوسری صارفین کے لیے دیکھی جا سکتی ہے',
            '• عوامی فہرستیں: آپ کی فہرست والی مصنوعات متعلقہ مقام/زمرہ کے فلٹرز میں تمام صارفین کے لیے نظر آتی ہیں',
            '• درجہ بندی اور جائزے: آپ کی ٹرانزیکشن کی تاریخ اور درجہ بندی دوسری صارفین کو دکھایا جا سکتا ہے'
          ]
        },
        {
          titleEn: '4.2 With Service Providers',
          titleUr: '4.2 خدمت فراہم کنندگان کے ساتھ',
          contentEn: [
            'We share information with trusted third-party service providers who assist us:',
            '• Firebase (Google): Authentication, analytics, cloud services',
            '• Payment Processors: To process payments (names, phone, transaction amounts)',
            '• SMS Providers: To deliver OTP verification codes',
            '• Analytics Services: To understand app usage',
            '• Cloud Storage Providers: To store your data securely'
          ],
          contentUr: [
            'ہم معلومات کو قابل اعتماد تیسری فریق کے خدمت فراہم کنندگان کے ساتھ شیئر کرتے ہیں جو ہماری مدد کرتے ہیں:',
            '• Firebase (Google): تصدیق، تجزیات، کلاؤڈ خدمات',
            '• ادائیگی کے پروسیسرز: ادائیگی کو پروسیس کرنے کے لیے (نام، فون، ٹرانزیکشن کی رقم)',
            '• SMS فراہم کنندے: OTP تصدیق کوڈز فراہم کرنے کے لیے',
            '• تجزیات کی خدمات: ایپ کے استعمال کو سمجھنے کے لیے',
            '• کلاؤڈ اسٹوریج فراہم کنندے: آپ کے ڈیٹا کو محفوظ طریقے سے محفوظ کرنے کے لیے'
          ]
        },
        {
          titleEn: '4.3 Legal Requirements',
          titleUr: '4.3 قانونی ضروریات',
          contentEn: [
            'We may disclose your information if required by:',
            '• Law enforcement requests',
            '• Court orders or legal process',
            '• Government agencies',
            '• Other legal obligations in Pakistan or relevant jurisdictions'
          ],
          contentUr: [
            'ہم آپ کی معلومات کو افشاء کر سکتے ہیں اگر درکار ہو:',
            '• قانون نافذ کنندہ کی درخواستیں',
            '• عدالت کے احکامات یا قانونی عمل',
            '• سرکاری ایجنسیاں',
            '• پاکستان یا متعلقہ دائرہ اختیار میں دیگر قانونی ذمہ داریاں'
          ]
        },
        {
          titleEn: '4.4 We Do NOT Share',
          titleUr: '4.4 ہم شیئر نہیں کرتے',
          contentEn: [
            '• Your password',
            '• Your complete phone number (only partially to verified contacts)',
            '• Financial account details (shared only with payment processors)',
            '• Your location with the general public (only location-based search results)'
          ],
          contentUr: [
            '• آپ کا پاس ورڈ',
            '• آپ کا مکمل فون نمبر (صرف جانچے گئے رابطوں کو جزوی طور پر)',
            '• مالیاتی اکاؤنٹ کی تفصیلات (صرف ادائیگی کے پروسیسرز کے ساتھ شیئر کی جاتی ہے)',
            '• عام عوام کے ساتھ آپ کا مقام (صرف مقام پر مبنی تلاش کے نتائج)'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      titleEn: '5. Data Security',
      titleUr: '5. ڈیٹا کی سیکیورٹی',
      subsections: [
        {
          titleEn: '5.1 Security Measures',
          titleUr: '5.1 سیکیورٹی کے اقدامات',
          contentEn: [
            'We implement multiple layers of security:',
            '• Encryption: Data transmitted via SSL/TLS encryption',
            '• Authentication: OTP-based login via Firebase Authentication with Play Integrity API verification',
            '• Passwords: We do not use passwords for login; OTP is used instead',
            '• Access Controls: Restricted access to user data on a need-to-know basis',
            '• Regular Updates: Security patches and updates regularly deployed',
            '• Firewalls: Protected servers with firewall protection',
            '• Monitoring: Continuous security monitoring and threat detection'
          ],
          contentUr: [
            'ہم سیکیورٹی کی کئی تہیں لگاتے ہیں:',
            '• تشفیر: SSL/TLS تشفیر کے ذریعے منتقل کیے جانے والے ڈیٹا',
            '• تصدیق: Play Integrity API تصدیق کے ساتھ Firebase محفوظ تصدیق',
            '• پاس ورڈ کی حفاظت: پاس ورڈز ہیش کیے جاتے ہیں، کبھی سادہ متن میں محفوظ نہیں',
            '• رسائی کنٹرول: ضرورت کی بنیاد پر صارف کے ڈیٹا تک محدود رسائی',
            '• مقررہ اپ ڈیٹس: سیکیورٹی پیچز اور اپ ڈیٹس باقاعدگی سے تعینات کیے جاتے ہیں',
            '• فائرو الز: فائروول تحفظ کے ساتھ محفوظ سرورز',
            '• نگرانی: مسلسل سیکیورٹی کی نگرانی اور خطرے کی شناخت'
          ]
        },
        {
          titleEn: '5.2 Limitations',
          titleUr: '5.2 حدود',
          contentEn: [
            'While we use industry-standard security measures, no system is 100% secure. We cannot guarantee absolute security of your information. You are responsible for maintaining the confidentiality of your login credentials.'
          ],
          contentUr: [
            'اگرچہ ہم صنعت کے معیاری سیکیورٹی کے اقدامات استعمال کرتے ہیں، کوئی بھی نظام 100٪ محفوظ نہیں ہے۔ ہم آپ کی معلومات کی مطلق سیکیورٹی کی ضمانت نہیں دے سکتے۔ آپ اپنی لاگ ان کی معلومات کی رازداری برقرار رکھنے کے لیے ذمہ دار ہیں۔'
          ]
        },
        {
          titleEn: '5.3 Data Breach Notification',
          titleUr: '5.3 ڈیٹا کی خلل کی اطلاع',
          contentEn: [
            'In the event of a data breach, we will:',
            '• Notify affected users as soon as practicable',
            '• Provide information about the breach and steps being taken',
            '• Comply with all applicable notification laws'
          ],
          contentUr: [
            'ڈیٹا کی خلل کی صورت میں، ہم:',
            '• متاثرہ صارفین کو جلد از جلد مطلع کریں گے',
            '• خلل اور اٹھائے جانے والے اقدامات کے بارے میں معلومات فراہم کریں گے',
            '• تمام لاگو اطلاع کے قوانین کی تعریف کریں گے'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      titleEn: '6. Your Data Rights',
      titleUr: '6. آپ کے ڈیٹا کے حقوق',
      subsections: [
        {
          titleEn: '6.1 Access Your Data',
          titleUr: '6.1 اپنے ڈیٹا تک رسائی',
          contentEn: [
            'You have the right to request and download all personal data we hold about you.'
          ],
          contentUr: [
            'آپ کو ہمارے پاس آپ کے بارے میں موجود تمام ذاتی ڈیٹا کی درخواست اور ڈاؤن لوڈ کرنے کا حق ہے۔'
          ]
        },
        {
          titleEn: '6.2 Correct Your Data',
          titleUr: '6.2 اپنے ڈیٹا میں اصلاح',
          contentEn: [
            'You can update, modify, or correct inaccurate information through your account settings.'
          ],
          contentUr: [
            'آپ اپنے اکاؤنٹ کی ترتیبات کے ذریعے غلط معلومات کو اپ ڈیٹ، ترمیم یا درست کر سکتے ہیں۔'
          ]
        },
        {
          titleEn: '6.3 Delete Your Account & Data',
          titleUr: '6.3 اپنے اکاؤنٹ اور ڈیٹا کو حذف کریں',
          contentEn: [
            'You have the right to request deletion of your account and associated data. Upon request:',
            '• Your account will be deactivated',
            '• Personal information will be deleted within 30 days',
            '• Business-related transaction records may be retained for compliance purposes',
            '• You can request account deletion through the app or by contacting support'
          ],
          contentUr: [
            'آپ کو اپنے اکاؤنٹ اور متعلقہ ڈیٹا کی حذفی کی درخواست کرنے کا حق ہے۔ درخواست کے بعد:',
            '• آپ کا اکاؤنٹ غیر فعال ہوگا',
            '• ذاتی معلومات 30 دن کے اندر حذف کی جائے گی',
            '• کاروباری ٹرانزیکشن کے ریکارڈ تعریف کے مقاصد کے لیے برقرار رہ سکتے ہیں',
            '• آپ ایپ کے ذریعے یا سپورٹ سے رابطہ کرکے اکاؤنٹ کی حذفی کی درخواست کر سکتے ہیں'
          ]
        },
        {
          titleEn: '6.4 Data Portability',
          titleUr: '6.4 ڈیٹا کی نقل و حرکت',
          contentEn: [
            'You can request your data in a portable format.'
          ],
          contentUr: [
            'آپ اپنے ڈیٹا کو پورٹیبل فارمیٹ میں درخواست کر سکتے ہیں۔'
          ]
        },
        {
          titleEn: '6.5 Withdraw Consent',
          titleUr: '6.5 رضامندی واپس لیں',
          contentEn: [
            'You can withdraw consent for certain data uses at any time through settings or by contacting us.'
          ],
          contentUr: [
            'آپ کسی بھی وقت ترتیبات کے ذریعے یا ہمسے رابطہ کرکے کچھ ڈیٹا کے استعمال کے لیے رضامندی واپس لے سکتے ہیں۔'
          ]
        },
        {
          titleEn: '6.6 Opt-Out Options',
          titleUr: '6.6 آپٹ آؤٹ آپشنز',
          contentEn: [
            '• Marketing Communications: Unsubscribe from promotional emails/SMS',
            '• Location Services: Disable GPS in your device or app settings',
            '• Notifications: Disable push notifications in app settings'
          ],
          contentUr: [
            '• مارکیٹنگ رابطے: پروموشنل ای میلز/SMS سے سبسکرائب ختم کریں',
            '• مقام کی خدمات: اپنے ڈیوائس یا ایپ کی ترتیبات میں GPS غیر فعال کریں',
            '• اطلاعات: ایپ کی ترتیبات میں پش اطلاعات غیر فعال کریں'
          ]
        }
      ]
    },
    {
      id: 'request-rights',
      titleEn: '7. How to Request Your Rights',
      titleUr: '7. اپنے حقوق کی درخواست کیسے کریں',
      contentEn: [
        'To exercise any of your data rights (access, correction, deletion, portability):',
        '',
            'Email: info@henly.co',
        'Phone: +92-301-09000903',
        'Mailing Address: Henly, Kotli Azad Kashmir, Pakistan',
        '',
        'We will respond to your request within 30 days or as required by applicable law.'
      ],
      contentUr: [
        'اپنے کسی بھی ڈیٹا کے حقوق (رسائی، اصلاح، حذفی، نقل و حرکت) کو استعمال کرنے کے لیے:',
        '',
  'ای میل: info@henly.co',
        'فون: +92-301-09000903',
        'ڈاک کا پتہ: Henly, Kotli Azad Kashmir, Pakistan',
        '',
        'ہم 30 دن کے اندر یا لاگو قانون کے مطابق آپ کی درخواست کا جواب دیں گے۔'
      ]
    },
    {
      id: 'data-retention',
      titleEn: '8. Data Retention',
      titleUr: '8. ڈیٹا کی تحفظ',
      contentEn: [
        'We retain your information for as long as:',
        '• Your account is active',
        '• Necessary to provide our services',
        '• Required by law or regulation',
        '• Needed for safety, fraud prevention, or dispute resolution',
        '',
        'Specific Retention Periods:',
        '• Account data: Until account deletion',
        '• Transaction records: 7 years (for tax/compliance)',
        '• Marketing preferences: Until withdrawal of consent',
        '• Analytics data: Up to 2 years (aggregated)',
        '• OTP records: 30 days',
        '• Server logs: 90 days'
      ],
      contentUr: [
        'ہم آپ کی معلومات کو اس وقت تک برقرار رکھتے ہیں:',
        '• آپ کا اکاؤنٹ فعال ہے',
        '• ہماری خدمات فراہم کرنے کے لیے ضروری ہے',
        '• قانون یا ضابطوں کے ذریعے درکار ہے',
        '• سیکیورٹی، دھوکہ سے بچاؤ، یا تنازعات کے حل کے لیے ضروری ہے',
        '',
        'مخصوص تحفظ کی مدتیں:',
        '• اکاؤنٹ کا ڈیٹا: اکاؤنٹ کی حذفی تک',
        '• ٹرانزیکشن ریکارڈز: 7 سال (ٹیکس/تعریف کے لیے)',
        '• مارکیٹنگ کی ترجیحات: رضامندی کی واپسی تک',
        '• تجزیات کا ڈیٹا: 2 سال تک (مجموعی)',
        '• OTP ریکارڈز: 30 دن',
        '• سرور لاگز: 90 دن'
      ]
    },
    {
      id: 'cookies',
      titleEn: '9. Cookies & Tracking Technologies',
      titleUr: '9. کوکیز اور ٹریکنگ ٹیکنالوجیز',
      subsections: [
        {
          titleEn: '9.1 What We Use',
          titleUr: '9.1 ہم کیا استعمال کرتے ہیں',
          contentEn: [
            'Our app uses:',
            '• Local Storage: To remember your preferences and session information',
            '• Firebase Analytics: To track app usage patterns',
            '• Crash Reporting: To identify and fix issues',
            '• Device Identifiers: To prevent fraud and track installations'
          ],
          contentUr: [
            'ہماری ایپ استعمال کرتی ہے:',
            '• مقامی اسٹوریج: آپ کی ترجیحات اور سیشن کی معلومات یاد رکھنے کے لیے',
            '• Firebase تجزیات: ایپ کے استعمال کے نمونوں کو ٹریک کرنے کے لیے',
            '• کریش رپورٹنگ: مسائل کی شناخت اور حل کرنے کے لیے',
            '• ڈیوائس شناخت: دھوکہ سے بچاؤ اور انسٹالیشن کو ٹریک کرنے کے لیے'
          ]
        },
        {
          titleEn: '9.2 Disabling Tracking',
          titleUr: '9.2 ٹریکنگ کو غیر فعال کرنا',
          contentEn: [
            'You can disable some tracking through:',
            '• Device settings (Location Services, Advertising ID reset)',
            '• App settings (Notification preferences, Analytics opt-out)'
          ],
          contentUr: [
            'آپ ذریعے ٹریکنگ کو غیر فعال کر سکتے ہیں:',
            '• ڈیوائس کی ترتیبات (مقام کی خدمات، اشتہار ID ری سیٹ)',
            '• ایپ کی ترتیبات (اطلاع کی ترجیحات، تجزیات آپٹ آؤٹ)'
          ]
        }
      ]
    },
    {
      id: 'third-party',
      titleEn: '10. Third-Party Services',
      titleUr: '10. تیسری فریق کی خدمات',
      subsections: [
        {
          titleEn: '10.1 Third-Party Links',
          titleUr: '10.1 تیسری فریق کے لنکس',
          contentEn: [
            'Our app may contain links to third-party websites and services. We are not responsible for their privacy practices. Review their privacy policies separately.'
          ],
          contentUr: [
            'ہماری ایپ میں تیسری فریق کی ویب سائٹس اور خدمات کے لنکس ہو سکتے ہیں۔ ہم ان کی رازداری کے طریقوں کے لیے ذمہ دار نہیں ہیں۔ ان کی رازداری کی پالیسیوں کو الگ سے دیکھیں۔'
          ]
        },
        {
          titleEn: '10.2 Firebase (Google)',
          titleUr: '10.2 Firebase (Google)',
          contentEn: [
            '• Google Privacy Policy: https://policies.google.com/privacy',
            '• Firebase Terms: https://firebase.google.com/terms/'
          ],
          contentUr: [
            '• Google کی رازداری کی پالیسی: https://policies.google.com/privacy',
            '• Firebase کی شرائط: https://firebase.google.com/terms/'
          ]
        },
        {
          titleEn: '10.3 Play Integrity API',
          titleUr: '10.3 Play Integrity API',
          contentEn: [
            '• Used for app security verification',
            '• Google Play Policy: https://play.google.com/about/play-core/integrity/'
          ],
          contentUr: [
            '• ایپ کی سیکیورٹی کی تصدیق کے لیے استعمال',
            '• Google Play پالیسی: https://play.google.com/about/play-core/integrity/'
          ]
        }
      ]
    },
    {
      id: 'children-privacy',
      titleEn: '11. Children\'s Privacy',
      titleUr: '11. بچوں کی رازداری',
      contentEn: [
        'Henly is not intended for users under 18 years old. We do not knowingly collect information from children under 18.',
        '',
        'If we become aware of such collection, we will:',
        '• Delete the information',
        '• Terminate the account',
        '• Notify the user/guardian'
      ],
      contentUr: [
        'Henly 18 سال سے کم عمر کے صارفین کے لیے نہیں ہے۔ ہم 18 سال سے کم عمر کے بچوں سے معلومات جمع کرنے کا علم نہیں رکھتے۔',
        '',
        'اگر ہمیں اس طرح کے مجموعے کا علم ہو تو ہم:',
        '• معلومات کو حذف کریں گے',
        '• اکاؤنٹ کو ختم کریں گے',
        '• صارف/سرپرست کو مطلع کریں گے'
      ]
    },
    {
      id: 'ccpa',
      titleEn: '12. California Privacy Rights (CCPA)',
      titleUr: '12. کیلیفورنیا میں رازداری کے حقوق (CCPA)',
      contentEn: [
        'If you are a California resident, you have additional rights:',
        '• Right to know what personal data is collected',
        '• Right to know if data is sold or shared',
        '• Right to delete personal information',
        '• Right to opt-out of sales/sharing of data',
        '',
        'Henly does not sell personal data.'
      ],
      contentUr: [
        'اگر آپ کیلیفورنیا کے رہائشی ہیں تو آپ کے پاس اضافی حقوق ہیں:',
        '• یہ جاننے کا حق کہ کون سے ذاتی ڈیٹا جمع کیے جاتے ہیں',
        '• یہ جاننے کا حق کہ کیا ڈیٹا فروخت یا شیئر کیے جاتے ہیں',
        '• ذاتی معلومات کو حذف کرنے کا حق',
        '• ڈیٹا کی فروخت/شیئرنگ سے آپٹ آؤٹ کرنے کا حق',
        '',
        'Henly ذاتی ڈیٹا کو نہیں بیچتا۔'
      ]
    },
    {
      id: 'gdpr',
      titleEn: '13. European Privacy Rights (GDPR)',
      titleUr: '13. یورپی رازداری کے حقوق (GDPR)',
      contentEn: [
        'If you are in the European Union/EEA, you have rights under GDPR:',
        '• Right to access, rectification, erasure',
        '• Right to restrict processing',
        '• Right to data portability',
        '• Right to object',
        '• Right to lodge a complaint with your supervisory authority'
      ],
      contentUr: [
        'اگر آپ یورپی اتحاد/EEA میں ہیں تو آپ کے پاس GDPR کے تحت حقوق ہیں:',
        '• رسائی، ترمیم، حذفی کا حق',
        '• پروسیسنگ کو محدود کرنے کا حق',
        '• ڈیٹا کی نقل و حرکت کا حق',
        '• اعتراض کرنے کا حق',
        '• اپنی نگرانی کے اختیار سے شکایت درج کرنے کا حق'
      ]
    },
    {
      id: 'pakistan-compliance',
      titleEn: '14. Pakistan Data Protection Compliance',
      titleUr: '14. پاکستان میں ڈیٹا کے تحفظ کی تعریف',
      contentEn: [
        'We comply with applicable Pakistan data protection laws and regulations. Your data is primarily stored in secure cloud infrastructure.'
      ],
      contentUr: [
        'ہم پاکستان میں لاگو ڈیٹا حفاظت کے قوانین اور ضابطوں کی تعریف کرتے ہیں۔ آپ کا ڈیٹا بنیادی طور پر محفوظ کلاؤڈ بنیاد ڈھانچے میں محفوظ ہے۔'
      ]
    },
    {
      id: 'policy-changes',
      titleEn: '15. Policy Changes',
      titleUr: '15. پالیسی میں تبدیلیاں',
      contentEn: [
        'We may update this Privacy Policy to reflect changes in our practices or applicable law. We will:',
        '• Post the updated policy with a new "Last Updated" date',
        '• Notify users of material changes via email or in-app notification',
        '• Request your consent if required by law',
        '',
        'Your continued use of the app after changes constitutes acceptance of the updated policy.'
      ],
      contentUr: [
        'ہم اس رازداری کی پالیسی کو اپنے طریقوں یا لاگو قانون میں تبدیلیوں کی عکاسی کے لیے اپ ڈیٹ کر سکتے ہیں۔ ہم:',
        '• نئی تاریخ کے ساتھ اپ ڈیٹ شدہ پالیسی پوسٹ کریں گے',
        '• صارفین کو ای میل یا ایپ اندر اطلاع کے ذریعے اہم تبدیلیوں سے آگاہ کریں گے',
        '• اگر قانون کے ذریعے درکار ہو تو آپ کی رضامندی کی درخواست کریں گے',
        '',
        'تبدیلیوں کے بعد ایپ کا مسلسل استعمال اپ ڈیٹ شدہ پالیسی کی منظوری کا مطلب ہے۔'
      ]
    },
    {
      id: 'international-transfers',
      titleEn: '16. International Data Transfers',
      titleUr: '16. بین الاقوامی ڈیٹا کی منتقلی',
      contentEn: [
        'Your information may be transferred to, stored in, and processed in countries other than Pakistan. By using Henly, you consent to such transfers.',
        '',
        'These countries may have different privacy protections than Pakistan. We take steps to ensure appropriate safeguards are in place:',
        '• Standard contractual clauses',
        '• Adequacy decisions',
        '• Your explicit consent'
      ],
      contentUr: [
        'آپ کی معلومات پاکستان کے علاوہ دوسری ممالک میں منتقل، محفوظ اور پروسیس کی جا سکتی ہے۔ Henly کا استعمال کرتے ہوئے، آپ ایسی منتقلی کی رضامندی دیتے ہیں۔',
        '',
        'ان ممالک میں پاکستان سے مختلف رازداری کی حفاظت ہو سکتی ہے۔ ہم مناسب حفاظتیں یقینی کرنے کے اقدامات کرتے ہیں:',
        '• معیاری معاہدے',
        '• کافیت کے فیصلے',
        '• آپ کی واضح رضامندی'
      ]
    },
    {
      id: 'contact-us',
      titleEn: '17. Contact Us',
      titleUr: '17. ہمسے رابطہ کریں',
      contentEn: [
        'For privacy concerns or to exercise your rights, contact us:',
        '',
            'Email: info@henly.co',
        'Phone: +92-301-09000903',
        'Mailing Address: Henly, Kotli Azad Kashmir, Pakistan',
        '',
        'Response Time: We respond to inquiries within 7-14 business days',
        'Data Protection Officer: Available upon request'
      ],
      contentUr: [
        'رازداری کے خدشات کے لیے یا اپنے حقوق کو استعمال کرنے کے لیے ہمسے رابطہ کریں:',
        '',
  'ای میل: info@henly.co',
        'فون: +92-301-09000903',
        'ڈاک کا پتہ: Henly, Kotli Azad Kashmir, Pakistan',
        '',
        'جواب کا وقت: ہم 7-14 کاروباری دن میں سوالات کا جواب دیتے ہیں',
        'ڈیٹا حفاظت افسر: درخواست پر دستیاب'
      ]
    },
    {
      id: 'complaint-resolution',
      titleEn: '18. Complaint Resolution',
      titleUr: '18. شکایت کی تحقیق',
      contentEn: [
        'If you have concerns about our privacy practices:',
        '',
  '1. Contact Us First: Email info@henly.co with details',
        '2. Resolution Discussion: We will work with you to resolve the issue',
        '3. Escalation: If unresolved, you can file a complaint with:',
        '   - Pakistan Telecommunication Authority (PTA)',
        '   - Relevant data protection authority in your jurisdiction'
      ],
      contentUr: [
        'اگر آپ کو ہماری رازداری کی طریقوں کے بارے میں خدشات ہیں:',
        '',
  '1. پہلے ہمسے رابطہ کریں: تفصیلات کے ساتھ info@henly.co پر ای میل کریں',
        '2. حل کی بحث: ہم مسئلے کو حل کرنے کے لیے آپ کے ساتھ کام کریں گے',
        '3. بڑھتی ہوئی کارروائی: اگر حل نہ ہو تو آپ یہاں شکایت درج کر سکتے ہیں:',
        '   - پاکستان کی ٹیلی کمیونیکیشن اتھارٹی (PTA)',
        '   - آپ کے دائرہ اختیار میں متعلقہ ڈیٹا حفاظت اتھارٹی'
      ]
    }
  ];

  const renderSection = (section: Section) => {
    const content = isUrdu ? section.contentUr : section.contentEn;
    
    return (
      <section key={section.id} className="mb-12 scroll-mt-24" id={section.id}>
        <div className="flex items-start gap-3 mb-6">
          {section.icon && <section.icon className="w-6 h-6 text-[#8b0000] flex-shrink-0 mt-1" />}
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b0000]">
            {isUrdu ? section.titleUr : section.titleEn}
          </h2>
        </div>

        {/* Regular content */}
        {content && !section.subsections && (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {content.map((item, idx) => (
              <p key={idx} className={item.toString().startsWith('•') ? 'ml-4 text-gray-600' : ''}>
                {item}
              </p>
            ))}
          </div>
        )}

        {/* Subsections */}
        {section.subsections && (
          <div className="space-y-4">
            {section.subsections.map((subsection, idx) => {
              const subContent = isUrdu ? subsection.contentUr : subsection.contentEn;
              const subId = `${section.id}-${idx}`;
              const isExpanded = expandedSubsections.includes(subId);

              return (
                <div key={subId} className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#8b0000] transition-colors">
                  <button
                    onClick={() => toggleSubsection(subId)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {isUrdu ? subsection.titleUr : subsection.titleEn}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-[#8b0000] flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        {subContent.map((item, idx) => (
                          <p key={idx} className={item.toString().startsWith('•') ? 'ml-4 text-gray-600' : ''}>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    );
  };

  // Filter sections based on activeSection
  const activeSectionObj = sections.find(s => s.id === activeSection);

  return (
    <div className="space-y-8">
      {activeSectionObj ? renderSection(activeSectionObj) : sections.map(section => renderSection(section))}

      {/* Bottom CTA */}
      <div className="mt-16 pt-8 border-t border-gray-300">
        <div className="bg-gradient-to-r from-[#8b0000]/10 to-red-50 rounded-xl p-8 text-center mb-8">
          <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'اپنے اکاؤنٹ کو حذف کریں' : 'Delete Your Account'}
          </h3>
          <p className={`text-gray-700 mb-6 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'اگر آپ اپنا اکاؤنٹ حذف کرنا چاہتے ہیں تو براہ کرم اپنی درخواست جمع کریں۔'
              : 'If you wish to delete your account, please submit your request here.'}
          </p>
          <button
            onClick={() => navigate('/account-deletion')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-colors font-semibold"
          >
            <FileText className="w-5 h-5" />
            {isUrdu ? 'اکاؤنٹ حذفی کی درخواست' : 'Request Account Deletion'}
          </button>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
          <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'اور سوالات ہیں؟' : 'Have More Questions?'}
          </h3>
          <p className={`text-gray-700 mb-6 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'ہماری کسٹمر سپورٹ ٹیم آپ کی مدد کرنے کے لیے ہمیشہ دستیاب ہے۔'
              : 'Our customer support team is always ready to help you.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@henly.co"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-colors font-semibold"
            >
              <Mail className="w-5 h-5" />
              {isUrdu ? 'ای میل کریں' : 'Send Email'}
            </a>
            <a
              href="tel:+923010900903"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#8b0000] text-[#8b0000] rounded-lg hover:bg-[#8b0000]/5 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              {isUrdu ? 'کال کریں' : 'Call Us'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
