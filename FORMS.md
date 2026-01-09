# Henly Website Forms Documentation

## Overview

This document explains how forms work in the Henly website. **This is NOT a Next.js website** - it's a **React + Vite** single-page application (SPA) that uses React Router for client-side routing.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (NOT Next.js)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Backend**: PHP for form submission endpoints (deployed on Namecheap shared hosting)
- **Deployment**: Static files via GitHub Actions to FTP (Namecheap cPanel)

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Henly Website (React SPA)                │
│                                                               │
│  ┌─────────────────┐         ┌─────────────────┐           │
│  │  Contact Form   │         │ Account Deletion│           │
│  │  (React State)  │         │  Form (React)   │           │
│  └────────┬────────┘         └────────┬────────┘           │
│           │                           │                     │
│           │ Simulated Submission      │ POST JSON          │
│           │ (No Backend Yet)          │                     │
│           │                           │                     │
│           ▼                           ▼                     │
│  ┌─────────────────┐         ┌─────────────────┐           │
│  │  Success State  │         │   PHP Endpoint  │           │
│  │  (Client Only)  │         │  /api/request-  │           │
│  └─────────────────┘         │  account-       │           │
│                               │  deletion.php   │           │
│                               └────────┬────────┘           │
│                                        │                     │
│                                        │ PHP mail()         │
│                                        ▼                     │
│                               ┌─────────────────┐           │
│                               │ Email to        │           │
│                               │ info@henly.co   │           │
│                               └─────────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

## Forms in the Website

### 1. Contact Form (`/contact` route)

**Location**: `src/screens/ContactUs/components/ContactForm.tsx`

**Purpose**: Allows users to send messages/inquiries to Henly support team.

**Features**:
- ✅ Bilingual support (English/Urdu)
- ✅ Client-side validation
- ✅ Form fields: Name, Email, Phone, Subject, Message
- ✅ Success/Error states with visual feedback
- ❌ **Currently simulated** - no actual backend submission yet

**Current Implementation**:
```typescript
// Simulated submission (lines 65-72)
try {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In production, this would send to a backend API
  // For now, we'll simulate a successful submission
  setFormState('success');
  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
}
```

**Form Fields**:
1. **Name** (required) - Full name of the user
2. **Email** (required) - Valid email address
3. **Phone** (required) - Pakistani phone number (min 10 digits)
4. **Subject** (required) - Dropdown with options:
   - General Inquiry
   - Technical Support
   - Feedback
   - Partnership
   - Other
5. **Message** (required) - Text area for detailed message

**Validation**:
- Name: Must not be empty
- Email: Must contain '@' symbol
- Phone: Must be at least 10 characters
- Subject: Must be selected
- Message: Must not be empty
- All validations show error messages in both English and Urdu

**States**:
- `idle` - Initial state
- `submitting` - During form submission (shows spinner)
- `success` - After successful submission (shows thank you message)
- `error` - When validation fails (shows error message)

**Next Steps for Production**:
To enable real form submission, you need to:
1. Create a backend API endpoint (similar to account deletion)
2. Update the `handleSubmit` function to POST to the endpoint
3. Handle email delivery to `info@henly.co`

---

### 2. Account Deletion Form (`/account-deletion` route)

**Location**: `src/screens/AccountDeletion/components/AccountDeletionForm.tsx`

**Purpose**: Allows Henly mobile app users to request deletion of their account data.

**Features**:
- ✅ Bilingual support (English/Urdu)
- ✅ Client-side validation
- ✅ **Real backend integration** via PHP endpoint
- ✅ Honeypot spam protection
- ✅ Email notifications to support team
- ✅ GDPR/data privacy compliance

**Backend Endpoint**: `/api/request-account-deletion.php`

**Form Fields**:
1. **Email** (required) - Email registered with Henly account
2. **Phone** (required) - Phone number registered with Henly account
3. **Reason** (optional) - Text area for deletion reason
4. **Confirmation Checkbox** (required) - User must acknowledge permanent deletion
5. **Website** (hidden honeypot) - Spam trap field

**Validation**:
- Email: Must be valid email format
- Phone: Must be at least 10 characters
- Confirmation: Checkbox must be checked
- Honeypot: If filled, silently returns success without sending email (spam trap)

**Backend Flow**:

```typescript
// Frontend submission (lines 55-83)
try {
  const res = await fetch('/api/request-account-deletion.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      website: formData.website, // honeypot
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error('Request failed');
  }

  setFormState('success');
} catch {
  // Fallback: Direct user to email support
  setErrorMessage('Service unavailable. Please email info@henly.co directly.');
  setFormState('error');
}
```

**PHP Backend** (`public/api/request-account-deletion.php`):
1. Accepts POST requests with JSON body
2. Validates email format and phone length
3. Sanitizes all inputs (strips tags, limits length)
4. Checks honeypot field (if filled, pretends success but doesn't send email)
5. Sends email to `info@henly.co` with:
   - User's email and phone
   - Deletion reason
   - Timestamp
   - IP address and User Agent for logging
6. Returns JSON response: `{ "ok": true }` or error

**Email Format**:
```
Subject: Henly Account Deletion Request

A new account deletion request was submitted:

Email: user@example.com
Phone: +923001234567
Reason: (user's reason or "not provided")
Submitted at: 2024-01-15T10:30:00Z
IP: 123.456.789.0
UA: Mozilla/5.0...
```

**Security Features**:
- Input sanitization (email, phone, reason)
- Honeypot spam protection
- Rate limiting via server (not implemented in code, handled by hosting)
- Reply-To header set to user's email for easy response
- From header set to `noreply@henly.co` for deliverability

**Note on Mail Failure Handling**:
The existing PHP endpoint returns `{ "ok": true, "warning": "mail_failed" }` even when mail() fails. This is an intentional UX decision to not block users when the mail server has issues. Admins should check cPanel Email Trace or mail logs if emails don't arrive. For production, consider implementing proper error handling with retry logic or SMTP library.

**States**:
- `idle` - Initial state
- `submitted` - During form submission (shows spinner)
- `success` - After successful submission (shows confirmation with next steps)
- `error` - When validation fails or API is unavailable

**Success Message Includes**:
- Confirmation that request was received
- Timeline (30 days to process)
- Next steps (review, contact if needed, completion)
- Support email for questions
- Links to contact support or return home

---

## How to Add Backend to Contact Form

Currently, the Contact Form only simulates submission. To add real backend support:

### Option 1: Add PHP Endpoint (Like Account Deletion)

1. Create `public/api/contact-form.php`:

```php
<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

// Extract and sanitize
$name = isset($data['name']) ? substr(strip_tags($data['name']), 0, 100) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? substr(preg_replace('/[^0-9+]/', '', $data['phone']), 0, 32) : '';
$subject = isset($data['subject']) ? substr(strip_tags($data['subject']), 0, 200) : '';
$message = isset($data['message']) ? substr(strip_tags($data['message']), 0, 5000) : '';

// Validate
if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($phone) < 7 || !$subject || !$message) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

// Compose email
$to = 'info@henly.co';
$emailSubject = 'Henly Contact Form: ' . $subject;
$lines = [
    'New contact form submission:',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    'Submitted at: ' . date('c'),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
];
$body = implode("\n", $lines);

$from = 'noreply@henly.co';
$headers = [];
$headers[] = 'From: Henly <' . $from . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($to, $emailSubject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    // Option A: Match existing account deletion behavior (always return ok:true)
    // echo json_encode(['ok' => true, 'warning' => 'mail_failed']);
    
    // Option B: Return proper error (recommended for new implementations)
    // This allows the frontend to handle failures more appropriately
    http_response_code(500); // Internal Server Error (mail function failed)
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
}
```

**Note**: The existing account deletion endpoint (Option A) returns `ok:true` even on mail failure to avoid blocking UX. For new implementations, Option B provides better error handling by returning proper error states. Choose based on your UX requirements.

2. Update `ContactForm.tsx` to use the endpoint:

```typescript
// Replace the simulated API call (around line 65) with:
try {
  const res = await fetch('/api/contact-form.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error('Request failed');
  }

  setFormState('success');
  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
} catch {
  setErrorMessage(
    isUrdu 
      ? 'کوئی خرابی ہوئی۔ براہ کرم info@henly.co پر ای میل کریں'
      : 'An error occurred. Please email info@henly.co directly'
  );
  setFormState('error');
}
```

### Option 2: Use Supabase (Already Available)

The project has `@supabase/supabase-js` in dependencies. You can:

1. Set up Supabase project
2. Create `contact_submissions` table
3. Use Supabase client to insert form data
4. Set up database triggers or Edge Functions to send emails

---

## Form State Management

Both forms use React's `useState` hook for local state management:

```typescript
type FormState = 'idle' | 'submitting' | 'success' | 'error';

const [formState, setFormState] = useState<FormState>('idle');
const [formData, setFormData] = useState({ /* fields */ });
const [errorMessage, setErrorMessage] = useState('');
```

**State Flow**:
```
idle → submitting → (success | error) → idle (on new submission)
```

## Bilingual Support

Both forms fully support English and Urdu:

```typescript
interface ContactFormProps {
  language: 'en' | 'ur';
}

const isUrdu = language === 'ur';

// All text uses conditional rendering:
{isUrdu ? 'اردو متن' : 'English text'}
```

Features:
- RTL (right-to-left) direction for Urdu: `dir={isUrdu ? 'rtl' : 'ltr'}`
- Urdu font class: `font-urdu` (Noto Nastaliq Urdu)
- Right-aligned text for Urdu inputs
- All labels, placeholders, buttons, and messages translated

## Form Accessibility

Both forms implement accessibility best practices:
- Semantic HTML (`<form>`, `<label>`, `<input>`)
- Required field indicators (*)
- Clear error messages
- Disabled state during submission
- Loading indicators (spinner icons)
- Focus states with visual feedback
- Proper input types (`email`, `tel`, `text`)

## Validation Strategy

**Client-side validation** (immediate feedback):
- Prevents empty required fields
- Validates email format
- Validates phone number length
- Shows error messages inline

**Server-side validation** (Account Deletion only):
- PHP validates email format with `FILTER_VALIDATE_EMAIL`
- Sanitizes all inputs to prevent XSS
- Checks phone number length
- Returns 422 status for invalid data

**No validation** is skipped on the frontend - all checks run before submission.

## Error Handling

Both forms handle errors gracefully:

1. **Validation Errors**: Show inline error message with icon
2. **Network Errors**: Show generic error + suggest direct email
3. **Server Errors**: Caught and displayed to user
4. **Success**: Clear form and show confirmation message

Example error display:
```tsx
{formState === 'error' && (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
    <AlertCircle className="w-5 h-5 text-red-600" />
    <p className="text-red-800">{errorMessage}</p>
  </div>
)}
```

## Deployment

Forms are deployed as part of the Vite build:

1. **Frontend**: React components bundled by Vite → `dist/` folder
2. **Backend**: PHP files in `public/api/` → deployed to `public_html/api/`
3. **GitHub Action**: Builds frontend + uploads via FTP to Namecheap
4. **`.htaccess`**: Ensures SPA routing works (all routes → `index.html`)

The `.htaccess` file in `public/` contains:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

This allows `/contact` and `/account-deletion` routes to work properly.

## Testing Forms Locally

### Contact Form (Simulated):
1. Run `npm run dev`
2. Navigate to `http://localhost:5173/contact`
3. Fill out the form
4. Click "Send Message"
5. See success message (no actual email sent)

### Account Deletion Form (Requires Backend):
1. Run `npm run dev`
2. Navigate to `http://localhost:5173/account-deletion`
3. Fill out the form
4. Click "Request Account Deletion"
5. **Note**: Will fail locally unless you have PHP server running
6. To test locally with PHP:
   ```bash
   # Build the app
   npm run build
   
   # Serve with PHP built-in server
   cd dist
   php -S localhost:8000
   
   # Visit http://localhost:8000/account-deletion
   ```

## Security Considerations

### Account Deletion Form:
- ✅ Input sanitization (strips HTML tags)
- ✅ Email validation
- ✅ Honeypot spam protection
- ✅ Length limits on all fields
- ✅ From header uses domain email (deliverability)
- ✅ Logs IP and User Agent for audit trail
- ⚠️ No CSRF protection (could add token)
- ⚠️ No rate limiting in code (relies on hosting)

### Contact Form:
- ✅ Client-side validation only (currently)
- ⚠️ Needs backend with similar security measures

### Recommendations:
1. Add rate limiting (e.g., max 5 submissions per IP per hour)
2. Add CAPTCHA for production (Google reCAPTCHA)
3. Implement CSRF tokens
4. Add email verification step for account deletion
5. Log all submissions to database for audit
6. **Use configuration constants**: Define support email and other settings in a config file:
   ```php
   // public/api/config.php
   define('SUPPORT_EMAIL', 'info@henly.co');
   define('NOREPLY_EMAIL', 'noreply@henly.co');
   ```
   This makes maintenance easier when contact details need to change.

## Configuration Best Practices

For maintainability, consider creating a configuration file for common values:

**`public/api/config.php`**:
```php
<?php
// Email configuration
define('SUPPORT_EMAIL', 'info@henly.co');
define('NOREPLY_EMAIL', 'noreply@henly.co');

// Rate limiting
define('MAX_SUBMISSIONS_PER_HOUR', 5);

// Response times
define('TYPICAL_RESPONSE_DAYS', '7-14');
define('ACCOUNT_DELETION_DAYS', 30);
```

Then include in your PHP endpoints (e.g., `public/api/contact-form.php`):
```php
<?php
// Assuming both config.php and this endpoint are in public/api/ directory
require_once __DIR__ . '/config.php';

$to = SUPPORT_EMAIL;
$from = NOREPLY_EMAIL;
// ... rest of code
```

This approach:
- ✅ Centralizes configuration
- ✅ Makes updates easier (change once, apply everywhere)
- ✅ Reduces hardcoded values
- ✅ Improves maintainability

## Future Enhancements

1. **Contact Form Backend**: Implement real PHP endpoint (see Option 1 above)
2. **Database Logging**: Store all submissions in MySQL/Supabase
3. **Email Templates**: Use HTML email templates instead of plain text
4. **Confirmation Emails**: Send confirmation email to user after submission
5. **Admin Dashboard**: View and manage form submissions
6. **Spam Protection**: Add CAPTCHA or more sophisticated bot detection
7. **Rate Limiting**: Implement server-side rate limiting
8. **Webhooks**: Integrate with Slack/Discord for instant notifications
9. **Analytics**: Track form submission rates and success/failure

## Troubleshooting

### Form submission fails with 404:
- **Cause**: PHP endpoint not deployed or incorrect path
- **Fix**: Ensure `public/api/*.php` files are uploaded to `public_html/api/`

### Form submission fails with CORS error:
- **Cause**: API endpoint on different domain
- **Fix**: Add CORS headers to PHP:
  ```php
  header('Access-Control-Allow-Origin: https://henly.co');
  header('Access-Control-Allow-Methods: POST');
  ```

### Email not received:
- **Cause**: PHP `mail()` function may fail on shared hosting
- **Fix**: Check cPanel Email Trace or use SMTP library:
  - Install PHPMailer or use SMTP directly
  - Configure with email provider credentials

### Form shows error in production but works locally:
- **Cause**: PHP version differences or missing extensions
- **Fix**: Check cPanel PHP version and ensure `mail()` function is enabled

### Urdu text not displaying correctly:
- **Cause**: Font not loaded or encoding issues
- **Fix**: Ensure `index.html` has UTF-8 charset and Urdu font is loaded

## Summary

- ✅ This is a **React + Vite** website (NOT Next.js)
- ✅ **Contact Form**: Client-side only, simulated submission
- ✅ **Account Deletion Form**: Full backend integration with PHP
- ✅ Both forms: Bilingual, validated, accessible
- ✅ Deployment: Static frontend + PHP backend on Namecheap
- ⚠️ Contact Form needs backend implementation for production use

For questions, contact: info@henly.co
