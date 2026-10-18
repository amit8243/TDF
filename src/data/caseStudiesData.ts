export interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  category: 'SEO' | 'International SEO' | 'Ecommerce' | 'PPC' | 'Website Design' | 'Lead Generation';
  badge: string;
  isDemoSample: boolean; // Transparency flag
  title: string;
  summary: string;
  image: string;
  metrics: {
    trafficChange: string;
    leadChange: string;
    revenueChange: string;
    keyStat: string;
  };
  clientOverview: string;
  initialChallenges: string[];
  objectives: string[];
  strategy: string;
  execution: string[];
  results: string[];
  lessonsLearned: string[];
  metaTitle: string;
  metaDescription: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "global-fintech-international-seo",
    slug: "global-fintech-international-seo",
    clientName: "Novapay Global Systems",
    industry: "Financial Technology",
    category: "International SEO",
    badge: "International Expansion",
    isDemoSample: true,
    title: "Scaling Cross-Border Search Visibility Across 6 European & LATAM Markets",
    summary: "How a high-growth payment infrastructure platform implemented an automated hreflang architecture and localized search hubs to generate $4.2M in international pipeline.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "+284% International Organic Traffic",
      leadChange: "+195% Inbound Enterprise RFPs",
      revenueChange: "$4.2M Qualified Pipeline",
      keyStat: "0 Hreflang Syntax Errors Across 6 Locales"
    },
    clientOverview: "Novapay Global is a cross-border payments infrastructure provider servicing enterprise merchants across Europe, Latin America, and North America.",
    initialChallenges: [
      "Duplicate content warnings caused by identical English content served across UK, Germany, and Spain without regional canonicals",
      "Severe hreflang index conflicts causing Google to serve US pricing pages to European enterprise buyers",
      "Low domain trust in newly entered LATAM territories with zero regional backlink profile",
      "Slow server response times for overseas users accessing centralized US-based hosting"
    ],
    objectives: [
      "Establish country-specific subdirectory infrastructure (novapay.com/es/, novapay.com/de/, novapay.com/br/)",
      "Eliminate 100% of hreflang errors and duplicate index bloat across regional clusters",
      "Grow organic enterprise demo bookings in targeted EU and Latin American markets by at least 100%"
    ],
    strategy: "ApexGrowth engineered a comprehensive International SEO architecture: consolidating scattered regional domains into structured subdirectories, automating bi-directional hreflang verification, and executing localized digital PR in tier-1 financial publications in London, Frankfurt, and São Paulo.",
    execution: [
      "Conducted country-specific keyword intent research uncovering regional terminology variations in merchant acquiring",
      "Implemented automated dynamic XML sitemaps with validated x-default and country-specific hreflang tags",
      "Deployed Cloudflare edge caching to reduce server response times for overseas search bots by 64%",
      "Executed targeted digital PR campaigns earning 45+ DR 70+ citations in European and LATAM fintech media",
      "Created localized landing pages with regional compliance badges (GDPR, BaFin, LGPD)"
    ],
    results: [
      "+284% increase in non-US organic search visits within 7 months of subdirectory launch",
      "+195% lift in qualified international enterprise demo inquiries",
      "$4.2M in direct pipeline attributed to localized organic search entry pages",
      "Ranked #1-#3 for 120+ high-intent commercial fintech queries across UK, Germany, and Brazil"
    ],
    lessonsLearned: [
      "Consolidating backlink equity into subdirectories outperforms separate ccTLDs for mid-market expansion brands",
      "Literal machine translations fail commercial intent; cultural localization of financial terminology was critical to conversion"
    ],
    metaTitle: "International SEO Case Study: Global Fintech Growth | ApexGrowth",
    metaDescription: "Read how Novapay scaled international organic traffic by +284% and unlocked $4.2M in pipeline through structured International SEO."
  },
  {
    id: "enterprise-b2b-saas-pipeline",
    slug: "enterprise-b2b-saas-pipeline",
    clientName: "DataGrid Cloud Solutions",
    industry: "B2B SaaS / DevOps",
    category: "SEO",
    badge: "Enterprise Pipeline",
    isDemoSample: true,
    title: "Tripling Organic SQL Pipeline for an Enterprise Cloud Observability Platform",
    summary: "Refocusing content architecture from vanity top-of-funnel queries to high-intent comparison and solution pages, driving a 210% surge in sales-qualified opportunities.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "+142% Organic Search Volume",
      leadChange: "+210% Sales Qualified Leads (SQL)",
      revenueChange: "+$6.8M Attributed ARR Pipeline",
      keyStat: "Top 3 Ranking for 48 High-Intent BOFU Keywords"
    },
    clientOverview: "DataGrid is a SOC-2 certified cloud infrastructure observability and APM platform catering to Fortune 500 engineering leaders.",
    initialChallenges: [
      "Heavy organic traffic focused on basic glossary definitions that generated zero commercial demo requests",
      "Legacy React single-page application (SPA) suffering from client-side rendering indexing delays",
      "Aggressive competition from multi-billion-dollar legacy APM providers with 80+ Domain Ratings"
    ],
    objectives: [
      "Transition organic focus from informational vanity traffic to bottom-of-funnel (BOFU) transactional queries",
      "Resolve JavaScript rendering roadblocks to ensure search engines immediately index product release updates",
      "Lower blended customer acquisition cost (CAC) by generating higher organic demo volume"
    ],
    strategy: "We built an architectural 'Alternative To' and 'Versus' product comparison matrix, resolved client-side hydration issues through server-side rendering enhancements, and established technical thought leadership citations on developer forums and tech portals.",
    execution: [
      "Constructed 28 high-fidelity competitor alternative landing pages addressing real migration pain points",
      "Implemented comprehensive SoftwareApplication schema markup highlighting verified G2/Capterra ratings",
      "Optimized documentation and API reference hubs for developer search queries",
      "Collaborated with DevOps contributors to secure authoritative backlinks from technical engineering hubs"
    ],
    results: [
      "+210% increase in sales-qualified enterprise demo bookings in 9 months",
      "+142% total organic traffic lift with 74% coming from high-intent commercial terms",
      "Attributed $6.8M in pipeline ARR directly to organic search landing pages",
      "Achieved average time-to-index under 4 hours for new product release announcements"
    ],
    lessonsLearned: [
      "Targeting buyer intent queries with lower search volume yielded 8x higher revenue conversion than general tech tutorials",
      "Engineering leaders convert best when pricing models and architectural security specs are transparently presented"
    ],
    metaTitle: "B2B SaaS SEO Case Study: +210% Enterprise Pipeline | ApexGrowth",
    metaDescription: "Discover how DataGrid drove $6.8M in ARR pipeline through high-intent enterprise SEO and architectural search optimization."
  },
  {
    id: "d2c-ecommerce-growth",
    slug: "d2c-ecommerce-growth",
    clientName: "Lumina Home Goods",
    industry: "Ecommerce / D2C",
    category: "Ecommerce",
    badge: "Ecommerce Revenue",
    isDemoSample: true,
    title: "168% Organic Revenue Lift for Multi-Category Home Goods Retailer",
    summary: "Eliminating faceted navigation duplicate indexation and restructuring 400+ collection pages to capture high-margin holiday search demand.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "+185% Category Page Traffic",
      leadChange: "+168% Organic E-commerce Revenue",
      revenueChange: "+3.2x Return on SEO Spend",
      keyStat: "94,000 Wasted Index URLs Pruned"
    },
    clientOverview: "Lumina is a premium sustainable home furnishings and decor retailer operating a Shopify Plus storefront with over 8,000 active SKUs.",
    initialChallenges: [
      "Massive index bloat: over 100,000 filter parameter URLs indexed by Google, diluting crawl equity",
      "Thin product collection descriptions failing to rank for competitive head furniture queries",
      "High reliance on rising Meta ads with declining ROAS year-over-year"
    ],
    objectives: [
      "Sculpt crawl budget by restricting faceted filter variations via robots rules and self-referencing canonicals",
      "Elevate top 50 revenue-generating category hubs into page-one rankings for high-intent search terms",
      "Increase organic share of total GMV (Gross Merchandise Value) from 18% to 35%"
    ],
    strategy: "ApexGrowth executed an aggressive crawl budget sculpting initiative, deployed dynamic JSON-LD Product & Review schema across the catalog, and revamped the collection hierarchy with rich editorial buying guides.",
    execution: [
      "Configured canonical tag logic and robots.txt directives, purging 94,000 low-value filter URLs from Google's index",
      "Restructured collection taxonomy into logical parent-child hierarchies aligned with buyer query patterns",
      "Implemented automated Merchant Center product schema with real-time stock and price synchronization",
      "Executed digital PR gifting campaigns with top interior design publications and architectural blogs"
    ],
    results: [
      "+168% increase in organic revenue over a 12-month period",
      "+185% organic traffic lift to high-margin collection pages",
      "Organic search grew from 18% to 37% of total company revenue, reducing blended CAC by 28%",
      "Secured rich review stars and pricing badges in Google SERPs for 92% of priority SKUs"
    ],
    lessonsLearned: [
      "Pruning index bloat instantly accelerates Google's re-crawling of high-value category pages",
      "High-intent category content placed above and below the product grid satisfies both users and search bots"
    ],
    metaTitle: "Ecommerce SEO Case Study: +168% Organic Revenue | ApexGrowth",
    metaDescription: "See how Lumina Home Goods pruned 94,000 duplicate URLs and grew organic retail revenue by 168%."
  },
  {
    id: "national-healthcare-local-seo",
    slug: "national-healthcare-local-seo",
    clientName: "Aegis Orthopedic Centers",
    industry: "Healthcare / Clinics",
    category: "Lead Generation",
    badge: "Local Search Domination",
    isDemoSample: true,
    title: "Dominating the Local 3-Pack Across 32 Regional Healthcare Clinics",
    summary: "Standardizing NAP citation data, optimizing Google Business Profiles, and building localized condition hubs to drive +94% patient appointment bookings.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "+118% Local Map Views",
      leadChange: "+94% Booked Patient Appointments",
      revenueChange: "-42% Cost Per Patient Acquisition",
      keyStat: "89% of Locations in Top 3 Local Map Pack"
    },
    clientOverview: "Aegis Orthopedic Centers operates 32 specialized outpatient orthopedic and physical rehabilitation clinics across the Midwest.",
    initialChallenges: [
      "Inconsistent clinic phone numbers and addresses across Apple Maps, Google, and health directories",
      "Thin location pages with identical duplicate copy failing to rank in surrounding suburban zip codes",
      "Strict HIPAA compliance requirements preventing typical third-party tracking pixel implementations"
    ],
    objectives: [
      "Achieve top 3 Google Map pack placement for 'orthopedic doctor near me' across all 32 clinic territories",
      "Deploy privacy-safe, HIPAA-compliant call and appointment tracking to quantify patient acquisition",
      "Increase monthly new patient appointment requests from local search by at least 60%"
    ],
    strategy: "ApexGrowth deployed a multi-location local search framework: centralizing Google Business Profile API management, building localized clinic and physician landing pages with MedicalClinic schema, and executing local citation syndication.",
    execution: [
      "Standardized 32 Google Business Profiles with accurate primary categories, provider bios, and geo-coordinates",
      "Built unique localized service hubs for each branch covering specific treatments and insurance acceptance",
      "Integrated HIPAA-compliant CallRail tracking with end-to-end encryption",
      "Implemented a patient review enablement workflow resulting in a 4.8-star average across 2,400+ authentic reviews"
    ],
    results: [
      "89% of clinic locations secured consistent top-3 Google Map Pack rankings within target radii",
      "+94% increase in online patient appointment bookings year-over-year",
      "-42% reduction in blended cost per acquired patient compared to paid search",
      "+118% growth in Google Maps direction requests and direct phone calls"
    ],
    lessonsLearned: [
      "Physician-specific sub-profiles linked to clinic parent profiles dramatically improve medical search visibility",
      "Review response rate and freshness directly correlate with Google Map pack rank stability"
    ],
    metaTitle: "Healthcare Local SEO Case Study: 32 Clinics | ApexGrowth",
    metaDescription: "Learn how Aegis Orthopedic Centers captured top 3 map rankings across 32 clinics, growing patient appointments by +94%."
  },
  {
    id: "b2b-fintech-paid-search-roas",
    slug: "b2b-fintech-paid-search-roas",
    clientName: "Vanguard Capital Partners",
    industry: "Commercial Lending",
    category: "PPC",
    badge: "PPC Efficiency",
    isDemoSample: true,
    title: "Slashing Wasted Ad Spend by 44% While Growing Qualified Commercial Borrowers",
    summary: "Restructuring Google Ads search campaigns with negative match sculpting, offline conversion imports, and value-based bidding.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "-28% Irrelevant Search Clicks",
      leadChange: "+138% Funded Commercial Inquiries",
      revenueChange: "4.8x Return on Ad Spend (ROAS)",
      keyStat: "-44% Reduction in Wasted Media Spend"
    },
    clientOverview: "Vanguard Capital is a commercial real estate lender providing bridge loans and debt financing between $1M and $25M.",
    initialChallenges: [
      "Broad match keywords triggering clicks from retail home buyers seeking personal mortgages",
      "High cost-per-click ($65+) generating high lead volume but exceptionally poor credit qualification",
      "Lack of offline CRM feedback loop leaving Google's Smart Bidding algorithm blind to funded loan outcomes"
    ],
    objectives: [
      "Cut irrelevant ad spend on consumer mortgage terms by 100%",
      "Integrate Salesforce CRM with Google Ads via offline conversion tracking",
      "Improve funded deal ROAS to at least 3.5x within 6 months"
    ],
    strategy: "We built an institutional-grade Google Ads structure with extensive negative lists, exact-match commercial intent clusters, and value-based bidding calibrated against closed-loan revenue in Salesforce.",
    execution: [
      "Added 1,200+ negative keywords covering residential terms, bad credit, and consumer financing",
      "Deployed Google Enhanced Conversions and connected Salesforce via Google Ads API",
      "Created dedicated landing pages with interactive commercial loan criteria calculators",
      "Transitioned bidding to Target ROAS once 50+ verified enterprise conversions were logged"
    ],
    results: [
      "Wasted media spend reduced by 44% in the first 60 days",
      "+138% increase in qualified, funded commercial loan inquiries",
      "Achieved 4.8x ROAS on monthly media spend exceeding $75,000",
      "Cost per qualified commercial lead dropped by 36%"
    ],
    lessonsLearned: [
      "Feeding closed revenue back into Google Ads transforms Smart Bidding from lead-quantity to high-margin quality",
      "Pre-qualifying borrowers through interactive sliders on landing pages filters out sub-prime applicants before ad click waste"
    ],
    metaTitle: "Commercial PPC Case Study: 4.8x ROAS | ApexGrowth",
    metaDescription: "How Vanguard Capital cut 44% in wasted ad spend and scaled qualified commercial loan inquiries by 138%."
  },
  {
    id: "enterprise-web-redesign-cro",
    slug: "enterprise-web-redesign-cro",
    clientName: "CyberShield Security",
    industry: "Cybersecurity",
    category: "Website Design",
    badge: "Web Redesign & CRO",
    isDemoSample: true,
    title: "Modernizing Enterprise Web Experience to Achieve a 145% Demo Conversion Lift",
    summary: "Rebuilding a legacy enterprise cybersecurity site with lightning-fast React components, streamlined navigation, and high-trust conversion touchpoints.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    metrics: {
      trafficChange: "100/100 Core Web Vitals",
      leadChange: "+145% Demo Request Conversions",
      revenueChange: "-58% Bounce Rate Reduction",
      keyStat: "Page Load Reduced From 5.4s to 0.8s"
    },
    clientOverview: "CyberShield is an enterprise threat detection platform protecting cloud workloads for global financial and defense contractors.",
    initialChallenges: [
      "Slow 5.4-second load times causing 60%+ bounce rates on mobile and desktop",
      "Cluttered, outdated visual design that failed to convey enterprise security credibility",
      "Multi-step contact form with 12 mandatory fields causing high abandonment"
    ],
    objectives: [
      "Redesign and re-engineer the digital flagship for maximum trust, speed, and responsiveness",
      "Achieve sub-second page loads and perfect Google Core Web Vitals scores",
      "Increase demo request conversion rate across all marketing channels"
    ],
    strategy: "ApexGrowth engineered a clean, modern digital presence: building a custom component library with Tailwind and TypeScript, streamlining the user journey, and introducing an interactive interactive threat assessment tool.",
    execution: [
      "Conducted 50+ user session audits to map friction points in the previous demo request funnel",
      "Crafted an authoritative, dark-navy enterprise aesthetic with interactive threat visualization widgets",
      "Engineered frontend using modern component architecture, achieving a 0.8s Largest Contentful Paint (LCP)",
      "Redesigned the demo request flow into a frictionless 2-step smart form with work-email enrichment"
    ],
    results: [
      "+145% increase in completed demo requests from organic and paid traffic",
      "Average page load time plummeted from 5.4 seconds to 0.8 seconds (100 Core Web Vitals score)",
      "Mobile bounce rate decreased from 68% to 28%",
      "Enterprise sales cycle velocity improved as prospects arrived better informed"
    ],
    lessonsLearned: [
      "Enterprise buyers value technical clarity and speed over animations; clarity drove the conversion lift",
      "Smart progressive form fields reduce cognitive friction while maintaining high lead qualification standards"
    ],
    metaTitle: "Cybersecurity Web Redesign & CRO Case Study | ApexGrowth",
    metaDescription: "See how CyberShield achieved a 145% lift in demo conversions and sub-second load times through modern web engineering."
  }
];
