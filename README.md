# Oracle Medicos - Pharmaceutical & Medical Products Trading Website

A modern, responsive, and SEO-optimized business website designed for **Oracle Medicos**, a commercial trading micro-enterprise dealing in pharmaceutical, medical equipment, surgical products, healthcare supplies, and medical consumables based in **Imphal west, Manipur, India**.

---

## 🌟 Business Overview

- **Business Name:** Oracle Medicos
- **Business Type:** Micro Enterprise
- **Major Activity:** Trading &amp; Supply
- **Industry:** Pharmaceutical, Medical, and Surgical Products
- **Location:** Imphal west, Manipur, India
- **Established Date:** 03 July 2023
- **Brand Identity:** Private commercial trading enterprise serving hospitals, clinics, nursing homes, and retail pharmacies across Manipur and North west India.

---

## 🚀 Key Features

1. **Design & Brand Aesthetics:**
   - Premium pharmaceutical/medical visual language.
   - Clean white foundation with rich navy (`#0f172a`, `#1e1b4b`) and royal purple/indigo (`#3730a3`, `#4f46e5`) accents.
   - Modern typography (`Outfit` for crisp corporate headings and `Plus Jakarta Sans` for legible body text).
   - High-resolution, optimized medical and distribution imagery.
   - Subtle shadows, micro-interactions, smooth hover elevations, and rounded cards (`16px-24px`).

2. **Navigation & Responsiveness:**
   - Sticky header with glassmorphism blur and shadow on scroll.
   - Fully responsive across desktop, tablet, and mobile devices.
   - Off-canvas mobile navigation drawer with smooth backdrop transition.
   - One-click "Get a Quote" modal accessible from the header and throughout the page.

3. **Core Sections:**
   - **Hero Section:** Clear value proposition, fast statistics bar, professional warehouse visual, and dual CTAs ("Explore Products", "Contact Us").
   - **Trust Strip:** Key business facts (Est. July 2023, Wholesale & Institutional Supply, Transparent Quotations, Local Manipur Reach).
   - **About Section:** Truthful, professional trading overview with business profile summary box without misleading claims.
   - **Product Categories (5 Interactive Cards):**
     1. _Pharmaceutical Products_ (Tablets, capsules, syrups, injectables)
     2. _Medical Equipment_ (BP monitors, pulse oximeters, nebulizers)
     3. _Surgical Products_ (Blades, sutures, instruments, sterile drapes)
     4. _Healthcare Supplies_ (Masks, hospital sanitizers, first aid kits)
     5. _Medical Consumables_ (Syringes, IV sets, gloves, cannulas, bandages)
     - Interactive **"View Products"** modal that reveals standard supplied items for each category and allows 1-click quotation forwarding.
   - **Services (6 B2B Trading Cards):**
     - Pharmaceutical Product Trading
     - Medical Equipment Supply
     - Surgical Product Supply
     - Bulk Order Support
     - Business-to-Business Supply
     - Product Enquiry & Quotation
   - **Why Choose Us (4 Pillar Cards):**
     - Reliable Supply
     - Professional Service
     - Business-to-Business Support
     - Customer-Focused Approach
   - **Contact Section:**
     - Business address in Imphal west, Manipur, India.
     - Direct WhatsApp chat button & direct phone call button.
     - Interactive contact form with real-time field validation (Name, Phone, Email, Product Category, Message).
     - Automated WhatsApp message formatting that pre-fills user details and sends them directly to WhatsApp.
   - **Footer & Legal Transparency:**
     - Semantic footer with quick links, category navigation, and business details.
     - Interactive modal popups for **Privacy Policy**, **Terms & Conditions**, and **Commercial Disclaimer** clarifying the private trading nature of the business.
   - **Floating Action Dock:**
     - Always-accessible WhatsApp button with hover tooltip.
     - Smooth "Back to Top" button that appears on scroll.

4. **SEO & Technical Excellence:**
   - Semantic HTML5 layout.
   - Open Graph tags for Facebook / LinkedIn / WhatsApp link sharing.
   - Schema.org JSON-LD structured data (`MedicalBusiness`).
   - Clean vanilla JavaScript (no heavy runtime dependencies, zero bloat, blazing fast load times).

---

## 📁 File Structure

```text
oracle-medicos-website/
│
├── index.html        # Main semantic HTML5 webpage with structured data & modals
├── styles.css        # Responsive CSS3 stylesheet with custom design system
├── script.js         # Interactive JavaScript (validation, modals, WhatsApp integration)
└── README.md         # Documentation and deployment guide
```

---

## 💻 How to Run Locally

### Option 1: Direct Browser Launch

Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Option 2: Using Python Simple HTTP Server

Open PowerShell or Terminal inside the folder:

```powershell
cd "C:\Users\Rituraj\.gemini\antigravity\scratch\oracle-medicos-website"
python -m http.server 8080
```

Then visit `http://localhost:8080` in your web browser.

---

## ⚙️ Customization Guide

- **Update Phone Number / WhatsApp:**
  Open `script.js` and edit the `BUSINESS_PHONE` constant at line 10:

  ```javascript
  const BUSINESS_PHONE = "917005118411"; // Active 10-digit mobile number with country code 91
  ```

  Also update phone numbers in `index.html` inside `href="tel:+917005118411"` and WhatsApp link URLs.

- **Update Email Address:**
  Open `script.js` and edit `BUSINESS_EMAIL`:

  ```javascript
  const BUSINESS_EMAIL = "info@oraclemedicos.com";
  ```

  And in `index.html` inside `mailto:` links.

- **Deploying to Hosting:**
  This project is ready for 1-click deployment on:
  - **GitHub Pages** (push repository and enable Pages in Settings)
  - **Netlify / Vercel** (drag-and-drop the folder or connect Git)
  - **Traditional cPanel / Apache / Nginx** (upload files into `public_html`)
