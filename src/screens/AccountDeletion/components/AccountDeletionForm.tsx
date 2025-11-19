import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface AccountDeletionFormProps {
  language: 'en' | 'ur';
}

type FormState = 'idle' | 'submitted' | 'success' | 'error';

export default function AccountDeletionForm({ language }: AccountDeletionFormProps) {
  const isUrdu = language === 'ur';
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    reason: '',
    confirmDeletion: false,
    website: '', // honeypot (bots often fill this)
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitted');

    // Validate email
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage(isUrdu ? 'براہ کرم صحیح ای میل درج کریں' : 'Please enter a valid email');
      setFormState('error');
      return;
    }

    // Validate phone
    if (!formData.phone || formData.phone.length < 10) {
      setErrorMessage(isUrdu ? 'براہ کرم صحیح فون نمبر درج کریں' : 'Please enter a valid phone number');
      setFormState('error');
      return;
    }

    // Validate confirmation
    if (!formData.confirmDeletion) {
      setErrorMessage(isUrdu ? 'براہ کرم تصدیق کریں' : 'Please confirm account deletion');
      setFormState('error');
      return;
    }

    try {
      const res = await fetch('/api/request-account-deletion.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          website: formData.website,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw new Error(t || 'Request failed');
      }

      // Success
      setFormState('success');
          setFormData({ email: '', phone: '', reason: '', confirmDeletion: false, website: '' });
    } catch {
      setErrorMessage(
        isUrdu
          ? 'سروس دستیاب نہیں ہے۔ براہ کرم براہ راست info@henly.co پر ای میل کریں۔'
          : 'Service unavailable. Please email info@henly.co directly.'
      );
      setFormState('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Information Box */}
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h2 className={`text-lg font-semibold text-blue-900 mb-3 ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'معلومات' : 'Important Information'}
        </h2>
        <ul className={`space-y-2 text-blue-800 text-sm ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {isUrdu
                ? 'آپ کے اکاؤنٹ کو ہٹانے میں 30 دن تک لگ سکتے ہیں'
                : 'Account deletion may take up to 30 days to process'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {isUrdu
                ? 'تمام ذاتی معلومات ہٹائی جائے گی لیکن ٹیکس کے لیے ٹرانزیکشن ریکارڈ برقرار رہ سکتے ہیں'
                : 'All personal data will be deleted, but transaction records may be retained for tax compliance'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {isUrdu
                ? 'ہم آپ کی درخواست کا جائزہ لے کر ضرورت پڑنے پر ای میل کے ذریعے رابطہ کریں گے'
                : 'We will review your request and contact you via email if needed'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {isUrdu
                ? 'آپ اگر درخواست کے 7 دن میں ای میل تصدیق نہیں کریں تو اسے منسوخ کر دیا جائے گا'
                : 'If you do not confirm within 7 days, the request will be cancelled'}
            </span>
          </li>
        </ul>
      </div>

      {/* Form */}
      {formState !== 'success' ? (
        <form onSubmit={handleSubmit} className={`space-y-6 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {isUrdu ? 'ای میل ایڈریس *' : 'Email Address *'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={isUrdu ? 'آپ کا ای میل' : 'your@email.com'}
              className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
                isUrdu ? 'text-right' : ''
              }`}
              required
            />
            <p className={`text-xs text-gray-600 mt-1 ${isUrdu ? 'text-right' : ''}`}>
              {isUrdu
                ? 'تصدیق کے لیے اسی ای میل کا استعمال کریں جو آپ کے اکاؤنٹ میں ہے'
                : 'Use the email registered with your Henly account'}
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {isUrdu ? 'فون نمبر *' : 'Phone Number *'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={isUrdu ? '+92 فون نمبر' : '+92 Phone Number'}
              className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
                isUrdu ? 'text-right' : ''
              }`}
              required
            />
            <p className={`text-xs text-gray-600 mt-1 ${isUrdu ? 'text-right' : ''}`}>
              {isUrdu
                ? 'تصدیق کے لیے اسی فون نمبر کا استعمال کریں جو آپ کے اکاؤنٹ میں ہے'
                : 'Use the phone number registered with your Henly account'}
            </p>
          </div>

          {/* Reason (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {isUrdu ? 'حذفی کی وجہ (اختیاری)' : 'Reason for Deletion (Optional)'}
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder={
                isUrdu
                  ? 'براہ کرم بتائیں کہ آپ اپنا اکاؤنٹ کیوں حذف کرنا چاہتے ہیں'
                  : 'Please let us know why you want to delete your account'
              }
              rows={4}
              className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors resize-none ${
                isUrdu ? 'text-right' : ''
              }`}
            />
            <p className={`text-xs text-gray-600 mt-1 ${isUrdu ? 'text-right' : ''}`}>
              {isUrdu ? 'یہ ہمیں بہتری میں مدد دیتا ہے' : 'This helps us improve our service'}
            </p>
          </div>

          {/* Error Message */}
          {formState === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className={`text-red-800 text-sm ${isUrdu ? 'font-urdu text-right' : ''}`}>{errorMessage}</p>
            </div>
          )}

          {/* Confirmation Checkbox */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="confirmDeletion"
                checked={formData.confirmDeletion}
                onChange={handleInputChange}
                className="w-5 h-5 mt-1 text-[#8b0000] rounded focus:ring-[#8b0000]"
              />
              <span className={`text-sm font-semibold text-red-900 leading-relaxed ${isUrdu ? 'font-urdu text-right' : ''}`}>
                {isUrdu
                  ? 'میں سمجھتا ہوں کہ میرے اکاؤنٹ کو ہٹانے سے میری تمام معلومات ہٹ جائے گی اور یہ عمل الٹایا نہیں جا سکتا۔ میں آگے بڑھنا چاہتا ہوں۔'
                  : 'I understand that deleting my account will permanently remove all my personal data and this action cannot be undone. I want to proceed.'}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === 'submitted'}
            className={`w-full py-3 bg-[#8b0000] text-white font-semibold rounded-lg hover:bg-[#7a0000] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            {formState === 'submitted' ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                {isUrdu ? 'جمع کر رہے ہیں...' : 'Submitting...'}
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                {isUrdu ? 'حذفی کی درخواست بھیجیں' : 'Request Account Deletion'}
              </>
            )}
          </button>

          <p className={`text-xs text-gray-600 text-center ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'آپ کی معلومات محفوظ ہے اور صرف اسی مقصد کے لیے استعمال ہوگی'
              : 'Your information is secure and will only be used for this request'}
          </p>
        </form>
      ) : (
        /* Success Message */
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h2 className={`text-3xl font-bold text-green-600 mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu ? 'درخواست وصول ہوئی!' : 'Request Received!'}
          </h2>
          <p className={`text-gray-700 mb-6 max-w-md mx-auto ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'ہم نے آپ کی اکاؤنٹ حذفی کی درخواست وصول کر لی ہے۔ ہماری ٹیم اس کا جائزہ لے گی اور ضرورت پڑنے پر info@henly.co سے آپ سے رابطہ کرے گی۔'
              : 'We have received your account deletion request. Our team will review it and contact you from info@henly.co if needed.'}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
            <p className={`text-sm text-blue-900 ${isUrdu ? 'font-urdu text-right' : ''}`}>
              <strong>{isUrdu ? 'اگلی اقدام:' : 'Next Steps:'}</strong>
            </p>
            <ol className={`text-sm text-blue-800 space-y-2 mt-2 ${isUrdu ? 'font-urdu text-right' : ''}`}>
              <li>1. {isUrdu ? 'ہم آپ کی درخواست کا جائزہ لیں گے' : 'We will review your request'}</li>
              <li>2. {isUrdu ? 'ضرورت پڑنے پر ہم info@henly.co سے آپ سے رابطہ کریں گے' : 'If needed, we will contact you from info@henly.co'}</li>
              <li>3. {isUrdu ? 'آپ کی اکاؤنٹ حذفی 30 دن کے اندر مکمل ہو جائے گی' : 'Your account deletion will be completed within 30 days'}</li>
            </ol>
          </div>

          <p className={`text-gray-600 text-sm ${isUrdu ? 'font-urdu' : ''}`}>
            {isUrdu
              ? 'کسی مدد یا تفصیل کے لیے، info@henly.co پر ای میل کریں'
              : 'For any help or details, email us at info@henly.co'}
          </p>

          {/* Support & Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:info@henly.co"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-colors font-semibold"
            >
              <Mail className="w-5 h-5" />
              {isUrdu ? 'سپورٹ سے رابطہ کریں' : 'Contact Support'}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#8b0000] text-[#8b0000] rounded-lg hover:bg-[#8b0000]/5 transition-colors font-semibold"
            >
              {isUrdu ? 'ہوم پر واپس جائیں' : 'Back to Home'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
