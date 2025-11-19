# Henly Poultry Portal - Setup Instructions

## ✅ What's Been Built

A comprehensive **information portal** for Pakistan's poultry industry with:

### 🎨 Design Features
- **Dark Maroon Color Scheme** (#8b0000, #7a0000, #660000) matching your rooster logo
- **Bilingual Support**: Full English ↔ Urdu language toggle that actually works
- **Commercial Poultry Imagery**: Professional broiler chickens, layer hens, white eggs, feed, transport vehicles
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile

### 📱 Key Sections

1. **Header & Navigation**
   - Live market ticker showing current rates
   - Language toggle (EN / اردو)
   - Full navigation menu
   - Sign In/Register and Download App buttons

2. **Hero Section**
   - Commercial poultry farm background
   - Search functionality
   - Platform statistics (15,000+ farmers, 2,500+ traders, etc.)
   - Call-to-action buttons

3. **Daily Market Rates Widget**
   - Interactive tabs: Eggs, Chicken, Chicks
   - Real-time pricing with trend indicators
   - Location selector (Province → City dropdown)
   - Covers all major Pakistani cities across all provinces

4. **Marketplace/Services Section**
   - 6 stakeholder categories with registered numbers
   - Premium listings section for monetization
   - Commercial poultry images for each category

5. **Knowledge Center (Education)**
   - Disease Management guides
   - Best Farming Practices
   - Market Intelligence insights
   - News sidebar with latest updates

6. **Mobile App Promotion**
   - App features showcase
   - Download buttons (App Store & Google Play)
   - Phone mockup with app interface
   - App statistics

7. **Footer**
   - Company information
   - Quick links
   - Contact details
   - Social media links

### 💰 Monetization Features
- Multiple ad placement slots throughout
- Premium/featured listing sections
- Standard web banner sizes (728x90, 300x250)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📸 Logo Setup

**IMPORTANT**: Your Henly logo needs to be added!

1. Prepare your logo file (PNG or SVG)
2. Copy it to the `public/` directory
3. The logo will automatically appear in the header and footer

Current logo path in code: `/assets/images/logo.png` (and optionally `/assets/images/logo.svg`)

## 🌍 Language Toggle

The language toggle is **fully functional**:

- Click "EN" to switch to English
- Click "اردو" to switch to Urdu
- All content, buttons, and text change language
- Urdu text displays with proper RTL (right-to-left) direction
- Uses authentic Noto Nastaliq Urdu font

## 📍 Location Coverage

The market rates widget includes comprehensive Pakistani locations:

**Punjab**: Lahore, Faisalabad, Rawalpindi, Multan, Gujranwala, Sialkot, Bahawalpur, Sargodha

**Sindh**: Karachi, Hyderabad, Sukkur, Larkana, Nawabshah, Mirpurkhas

**Khyber Pakhtunkhwa**: Peshawar, Mardan, Abbottabad, Swat, Kohat, Dera Ismail Khan

**Balochistan**: Quetta, Gwadar, Turbat, Khuzdar, Chaman

**Islamabad Capital Territory**: Islamabad

## 🖼️ Image Sources

All images are from **Pexels** (royalty-free):
- Commercial broiler chickens
- Layer hens
- White eggs
- Poultry feed
- Transport vehicles
- Farm imagery

**No free-range or non-commercial imagery used** - all photos reflect commercial poultry operations.

## 🎯 Next Steps

This is an **information portal only**. For transactions, users will:
1. View information and marketplace on the website
2. Download the mobile app for actual transactions
3. Place orders through the mobile application

The website focuses on:
- ✅ Educational content
- ✅ Market intelligence
- ✅ Stakeholder discovery
- ✅ Industry news and updates
- ✅ Promoting the mobile app

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** - mobile-first approach

## 📱 Mobile App Integration

The portal promotes your mobile app where users can:
- Place direct orders
- Get real-time market rates
- Message suppliers
- View business analytics

## 🎨 Color Palette

- **Primary Maroon**: #8b0000
- **Dark Maroon**: #7a0000
- **Deepest Maroon**: #660000
- **White**: #ffffff
- **Gray scales** for backgrounds and text

## 📞 Support

For questions or issues, contact:
- Email: info@henly.co
- Phone: +92 300 1234567

---

Built with ❤️ for Pakistan's Poultry Industry

---

## 🌐 Custom Domain Setup (henly.co)

### Current Status
✅ Website deployed to: **https://ahsan1o.github.io**

### Steps to Connect henly.co

#### Step 1: Verify Domain Ownership on GitHub
1. Go to: https://github.com/settings/domains
2. Click **"Add domain"**
3. Enter: `henly.co`
4. GitHub will provide a TXT record to add

#### Step 2: Add TXT Record to GoDaddy DNS
1. Log into GoDaddy: https://www.godaddy.com/account
2. **My Products** → **henly.co** → **Manage DNS**
3. Click **Add** new record
   - Type: **TXT**
   - Name: **@**
   - Value: (GitHub will provide this)
   - TTL: **1 hour**
4. Click **Save**

#### Step 3: Verify on GitHub
After DNS propagation (5-10 minutes):
1. Return to: https://github.com/settings/domains
2. Click **Verify** next to henly.co
3. After verification ✓, connect to your repository

#### Step 4: Connect to GitHub Pages
1. Go to: https://github.com/ahsan1o/henly-website/settings/pages
2. Enter custom domain: `henly.co`
3. Click **Save**
4. Check **Enforce HTTPS** after DNS verification

#### Step 5: Update GoDaddy DNS (Final)
In GoDaddy DNS, add/update:

**A Records** (4 total):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME Record**:
- Name: `www`
- Value: `ahsan1o.github.io`

---

### Timeline
- Now: Live at https://ahsan1o.github.io ✓
- After domain verification: henly.co ready
- Total: 24-48 hours for full DNS propagation
