# ApexGrowth | Enterprise Digital Marketing Agency Website

A premium, high-conversion digital marketing agency website inspired by the design quality, depth, and information architecture of **HigherVisibility**. Built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**.

---

## 🌟 Key Features & Highlights

1. **Original Brand Identity & Tailored Content**:
   - Modern, authoritative navy (`#0B1528`) & vibrant blue accent design system.
   - Clean whitespace, modern card layouts, subtle shadows, and responsive typography.
   - 100% original, enterprise-grade written content with zero generic placeholder text.

2. **Complete 13-Service Mega Menu & Dedicated Pages**:
   - **Critical Mandate Followed**: *Franchise SEO is completely replaced with International SEO everywhere.*
   - Dedicated, custom-engineered landing page for **International SEO** (`/services/international-seo`) featuring:
     - All 15 required subsections (Hreflang validation, ccTLD vs subdirectory modeling, localized keyword research, international link building, etc.)
     - 6-step global expansion process
     - Interactive **Country Targeting Enquiry Planner**
     - 6 in-depth FAQs with accessible accordion interactions
   - Dedicated landing pages for all 13 services:
     1. SEO Services (`/services/seo-services`)
     2. International SEO (`/services/international-seo`)
     3. Local SEO (`/services/local-seo`)
     4. Ecommerce SEO (`/services/ecommerce-seo`)
     5. Link Building Services (`/services/link-building`)
     6. PPC Management (`/services/ppc-management`)
     7. Google Ads Management (`/services/google-ads`)
     8. Facebook Ads Management (`/services/facebook-ads`)
     9. Website Design and Development (`/services/web-design-development`)
     10. Conversion Rate Optimization (`/services/conversion-rate-optimization`)
     11. SEO Auditing (`/services/seo-audit`)
     12. Website Maintenance (`/services/website-maintenance`)
     13. Generative Engine Optimization / AI SEO (`/services/geo-ai-seo`)

3. **Homepage Sections (A through L)**:
   - **Section A**: Premium two-column Hero with exact required copy, 3 trust points, and high-fidelity visual analytics composition.
   - **Section B**: Horizontal Trust & Credibility bar with verified platform accreditations (Google Premier Partner, Meta Partner, HubSpot).
   - **Section C**: Full Services Overview with category filter tabs and interactive cards.
   - **Section D**: Business Challenges ("Marketing Should Deliver More Than Clicks" - 3 visual problem/solution cards).
   - **Section E**: Our 6-Step Growth Process.
   - **Section F**: Why Choose Us (6 core pillars with zero unsupported guarantees).
   - **Section G**: Case Studies & Results with metric badges, data transparency notes, and read links.
   - **Section H**: Industries We Serve (all 8 sectors with dedicated links).
   - **Section I**: Client Testimonials with transparent demonstration labels.
   - **Section J**: Latest Strategic Insights & Research blog cards.
   - **Section K**: Lead Generation CTA section.
   - **Section L**: Full-depth enterprise Footer with all services, industries, legal links, and editable config placeholders.

4. **Dedicated Sub-Pages & Portals**:
   - **About Us** (`/about`): Story, mission, approach, core values, and editable team leadership profiles.
   - **Case Studies** (`/case-studies` & `/case-studies/:slug`): Filterable portfolio (SEO, International SEO, Ecommerce, PPC, Web Design, Lead Gen) with deep breakdowns of challenge, strategy, execution, results, and lessons learned.
   - **Industries Hub** (`/industries` & `/industries/:slug`): Specialized sector playbooks with custom metrics.
   - **Blog & Content Engine** (`/blog` & `/blog/:slug`): Category filters, search bar, table of contents, author bios, and structured schema.
   - **Contact & Proposal Portal** (`/contact`): Comprehensive form with field validation, local demo mode feedback, and CRM integration readiness.
   - **Legal Compliance**: `/privacy-policy` and `/terms-and-conditions`.
   - **Custom 404 Recovery**: `/404` and catch-all routing.

5. **SEO & Technical Architecture**:
   - Dynamic `SEOHead` component supporting unique titles, meta descriptions, canonical URLs, and OpenGraph social cards.
   - Rich JSON-LD Schemas: `MarketingAgency`, `Service`, `Article`, and `FAQPage`.
   - `public/robots.txt` and `public/sitemap.xml` configured for production.
   - `_redirects` and `vercel.json` included for direct URL refresh on static hosts.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Fonts**: Inter & Plus Jakarta Sans

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory with code splitting for fast Core Web Vitals.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🔌 External Integrations & Configuration

### Lead & Proposal Webhook Endpoint
The proposal form operates in **Local Demo Mode** by default (capturing and validating submissions locally in session storage). To route inquiries to a real CRM (HubSpot, Salesforce), n8n workflow, or email service:

1. Create a `.env` file in the root directory:
```env
VITE_PROPOSAL_WEBHOOK_URL="https://your-crm-or-n8n-webhook-url.com/lead-capture"
```
2. The form will automatically dispatch a `POST` request with JSON payload:
```json
{
  "fullName": "Jane Doe",
  "workEmail": "jane@enterprise.com",
  "phone": "+1 (555) 000-0000",
  "companyName": "Acme Corp",
  "websiteUrl": "https://acme.com",
  "targetCountry": "United Kingdom, Germany",
  "serviceRequired": "international-seo",
  "monthlyBudget": "$10,000 - $25,000 / month",
  "mainGoal": "Expand Search Rankings Internationally",
  "message": "Planning Q1 expansion into DACH region.",
  "consent": true
}
```

### Contact & Business Info Configuration
All company phone numbers, email addresses, office locations, and platform partner badges are managed centrally in:
```
src/data/siteConfig.ts
```
Edit this file to update your phone number, email address, physical location, or social links globally across the entire site.
