import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactInfoProps {
  language: 'en' | 'ur';
}

export default function ContactInfo({ language }: ContactInfoProps) {
  const isUrdu = language === 'ur';

  const contactDetails = [
    {
      icon: Mail,
      titleEn: 'Email',
      titleUr: 'ای میل',
  contentEn: 'info@henly.co',
  contentUr: 'info@henly.co',
      linkType: 'email',
  link: 'mailto:info@henly.co',
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleUr: 'فون',
      contentEn: '+92-301-0900903',
      contentUr: '+92-301-0900903',
      linkType: 'phone',
      link: 'tel:+923010900903',
    },
    {
      icon: MapPin,
      titleEn: 'Address',
      titleUr: 'پتہ',
      contentEn: 'Henly, Kotli Azad Kashmir, Pakistan',
      contentUr: 'Henly, Kotli Azad Kashmir, Pakistan',
      linkType: 'address',
      link: '#',
    },
    {
      icon: Clock,
      titleEn: 'Response Time',
      titleUr: 'جواب کا وقت',
      contentEn: '7-14 Business Days',
      contentUr: '7-14 کاروباری دن',
      linkType: 'hours',
      link: '#',
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, idx) => {
        const Icon = detail.icon;
        const title = isUrdu ? detail.titleUr : detail.titleEn;
        const content = isUrdu ? detail.contentUr : detail.contentEn;

        return (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-[#8b0000] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8b0000]/10 rounded-lg flex-shrink-0">
                <Icon className="w-6 h-6 text-[#8b0000]" />
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold text-gray-900 mb-2 ${isUrdu ? 'font-urdu text-right' : ''}`}>
                  {title}
                </h3>
                {detail.linkType === 'email' ? (
                  <a
                    href={detail.link}
                    className={`text-[#8b0000] hover:underline font-medium break-all ${isUrdu ? 'font-urdu text-right block' : ''}`}
                  >
                    {content}
                  </a>
                ) : detail.linkType === 'phone' ? (
                  <a
                    href={detail.link}
                    className={`text-[#8b0000] hover:underline font-medium ${isUrdu ? 'font-urdu text-right block' : ''}`}
                  >
                    {content}
                  </a>
                ) : (
                  <p className={`text-gray-700 ${isUrdu ? 'font-urdu text-right' : ''}`}>{content}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Quick Response Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className={`font-semibold text-blue-900 mb-3 ${isUrdu ? 'font-urdu text-right' : ''}`}>
          {isUrdu ? 'ہمیں ای میل کریں' : 'Email Us'}
        </h3>
        <p className={`text-sm text-blue-800 leading-relaxed ${isUrdu ? 'font-urdu text-right' : ''}`}>
          {isUrdu
            ? 'براہ کرم یقینی بنائیں کہ آپ نے صحیح ای میل اور فون نمبر درج کیا ہے تاکہ ہم آپ سے رابطہ کر سکیں۔'
            : 'Please ensure you provide the correct email and phone number so we can respond to your inquiry.'}
        </p>
      </div>
    </div>
  );
}
