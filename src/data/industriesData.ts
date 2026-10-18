export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  icon: string;
  metrics: { label: string; value: string }[];
  challenges: { title: string; description: string }[];
  solutions: string[];
  metaTitle: string;
  metaDescription: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "ecommerce-d2c",
    slug: "ecommerce-d2c",
    name: "Ecommerce & D2C",
    shortDescription: "Scale organic revenue, optimize large product catalogues, and decrease reliance on volatile ad spend.",
    heroHeading: "Digital Growth Strategies for High-Growth Ecommerce & D2C Brands",
    heroSubheading: "Capture high-intent shoppers, maximize average order value, and scale organic revenue through data-driven search and conversion optimization.",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    icon: "ShoppingBag",
    metrics: [
      { label: "Organic Revenue Lift", value: "+148%" },
      { label: "ROAS Improvement", value: "3.4x" },
      { label: "Checkout Drop-off Reduction", value: "-24%" }
    ],
    challenges: [
      { title: "Rising Customer Acquisition Costs", description: "Meta and Google ad auction costs making customer acquisition unsustainable without strong organic capture." },
      { title: "Catalogue Crawl Bloat", description: "Thousands of faceted filter combinations exhausting crawl budget and cannibalizing category rankings." }
    ],
    solutions: [
      "Faceted navigation canonical architecture and crawl sculpting",
      "Dynamic schema markup for pricing, inventory, and reviews",
      "Full-funnel Performance Max and Google Shopping optimization",
      "Cart abandonment reduction and checkout A/B testing"
    ],
    metaTitle: "Ecommerce & D2C Digital Marketing Agency | ApexGrowth",
    metaDescription: "Drive predictable revenue for online retailers with specialized ecommerce SEO, PPC, and conversion rate optimization."
  },
  {
    id: "saas-technology",
    slug: "saas-technology",
    name: "SaaS & Technology",
    shortDescription: "Target high-intent B2B software buyers, accelerate product-led growth, and scale pipeline velocity.",
    heroHeading: "Scale ARR and Pipeline Velocity for B2B SaaS & Tech Enterprises",
    heroSubheading: "Turn search engines into your highest-converting pipeline source with bottom-of-funnel keyword capture and conversion-focused demo landing pages.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    icon: "Layers",
    metrics: [
      { label: "Demo Pipeline Increase", value: "+215%" },
      { label: "Customer Acquisition Cost", value: "-38%" },
      { label: "Organic SQL Velocity", value: "+180%" }
    ],
    challenges: [
      { title: "Long Enterprise Sales Cycles", description: "Multiple decision-makers needing distinct technical and commercial validation across buyer stages." },
      { title: "High Cost-Per-Click in Search Ads", description: "Enterprise software queries costing $80+ per click with generic copy failing to qualify leads." }
    ],
    solutions: [
      "Competitor alternative and comparison page architecture",
      "Account-based paid search targeting high-value enterprise accounts",
      "Technical product documentation search optimization",
      "Demo request form friction reduction and instant qualification"
    ],
    metaTitle: "B2B SaaS Digital Marketing & SEO Agency | ApexGrowth",
    metaDescription: "Scale annual recurring revenue (ARR) with high-intent SaaS SEO, paid acquisition, and product-led conversion optimization."
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    shortDescription: "Build patient trust, achieve HIPAA-compliant lead tracking, and dominate local medical search.",
    heroHeading: "Ethical, Patient-Centered Marketing for Healthcare Providers",
    heroSubheading: "Attract and retain patients with authoritative medical content, strict HIPAA-compliant tracking, and dominant local map pack visibility.",
    heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    icon: "Activity",
    metrics: [
      { label: "Patient Appointment Bookings", value: "+92%" },
      { label: "Local 3-Pack Presence", value: "88%" },
      { label: "Medical Content Authority", value: "EEAT Certified" }
    ],
    challenges: [
      { title: "Strict Google EEAT Regulations", description: "Medical content held to rigorous 'Your Money or Your Life' (YMYL) standards requiring verified clinical citations." },
      { title: "Privacy & Compliance Boundaries", description: "Navigating HIPAA regulations regarding pixel tracking and patient data protection." }
    ],
    solutions: [
      "Board-certified physician review schema and author entity optimization",
      "HIPAA-compliant server-side analytics and conversion modeling",
      "Local practice Google Business Profile management at scale",
      "Frictionless online appointment booking flows"
    ],
    metaTitle: "Healthcare SEO & Medical Marketing Agency | ApexGrowth",
    metaDescription: "Grow patient volume with HIPAA-compliant healthcare marketing, medical SEO, and local clinic optimization."
  },
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services & Fintech",
    shortDescription: "Establish institutional trust, conquer competitive financial queries, and maintain strict compliance.",
    heroHeading: "High-Trust Digital Strategies for Financial Institutions & Fintech",
    heroSubheading: "Navigate competitive financial search landscapes with compliant, authoritative content, security-first messaging, and high-intent acquisition.",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    icon: "ShieldAlert",
    metrics: [
      { label: "Qualified Account Openings", value: "+114%" },
      { label: "Average CPL Reduction", value: "-32%" },
      { label: "Brand Trust Score", value: "96/100" }
    ],
    challenges: [
      { title: "Intense Domain Competition", description: "Competing against massive financial portals and established banking incumbents." },
      { title: "Regulatory Advertising Constraints", description: "Adhering to SEC, FINRA, and FTC guidelines without sacrificing compelling messaging." }
    ],
    solutions: [
      "Financial calculator and interactive tool link acquisition",
      "Compliant copy frameworks pre-approved for legal and regulatory standards",
      "High-intent commercial query bidding with negative placement protection",
      "Lead qualification forms that balance security verification with ease of use"
    ],
    metaTitle: "Fintech & Financial Services Marketing Agency | ApexGrowth",
    metaDescription: "Accelerate customer acquisition for fintech and financial services. High-compliance SEO, PPC, and digital trust building."
  },
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    shortDescription: "Drive student enrollment, promote academic credentials, and optimize seasonal recruitment cycles.",
    heroHeading: "Enrollment-Driven Marketing for Universities & EdTech Platforms",
    heroSubheading: "Connect with prospective students and corporate learning leaders through timely, localized, and intent-driven search campaigns.",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    icon: "GraduationCap",
    metrics: [
      { label: "Inquiry Volume Growth", value: "+164%" },
      { label: "Cost Per Enrolled Student", value: "-27%" },
      { label: "Admissions Funnel Yield", value: "+19%" }
    ],
    challenges: [
      { title: "Seasonal Enrollment Surges", description: "Managing budget swings and capture windows tied to semester recruitment cycles." },
      { title: "Multiple Decision Influencers", description: "Engaging both prospective students and parents across different digital channels." }
    ],
    solutions: [
      "Degree and program-specific search landing pages",
      "Dynamic programmatic search campaigns synchronized with admissions deadlines",
      "Alumni outcome story hubs and digital PR",
      "Mobile-optimized prospectus download and inquiry forms"
    ],
    metaTitle: "Higher Education & EdTech Marketing Agency | ApexGrowth",
    metaDescription: "Maximize student inquiries and course enrollments with specialized education marketing, university SEO, and recruitment PPC."
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate & Development",
    shortDescription: "Attract luxury buyers, commercial tenants, and investors with geo-targeted search campaigns.",
    heroHeading: "High-Value Lead Generation for Real Estate Developers & Brokerages",
    heroSubheading: "Showcase prime developments and properties with high-impact visuals, hyperlocal search domination, and targeted investor acquisition.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    icon: "Building2",
    metrics: [
      { label: "Qualified Investor Inquiries", value: "+135%" },
      { label: "Luxury Listing Views", value: "+280%" },
      { label: "Cost Per Tour Booking", value: "-41%" }
    ],
    challenges: [
      { title: "National Aggregator Dominance", description: "Zillow and national portals monopolizing generic residential keywords." },
      { title: "High Capital Commitment Friction", description: "Buyers requiring extensive visual evidence and market data before initiating contact." }
    ],
    solutions: [
      "Hyperlocal neighborhood and development guide optimization",
      "Virtual tour and interactive floor plan landing pages",
      "High-net-worth demographic targeting on Meta and LinkedIn",
      "Private viewing reservation and calendar booking systems"
    ],
    metaTitle: "Real Estate Digital Marketing Agency | ApexGrowth",
    metaDescription: "Drive property inquiries, investor leads, and project sales with specialized real estate SEO and high-intent PPC."
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    shortDescription: "Position law firms, consultancies, and accounting practices as premier trusted authorities.",
    heroHeading: "Authoritative Lead Acquisition for Consultancies & Law Firms",
    heroSubheading: "Turn expertise into inbound corporate opportunities with thought-leadership search strategies, local practice area authority, and targeted B2B media.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    icon: "Briefcase",
    metrics: [
      { label: "Retainer Inbound Leads", value: "+175%" },
      { label: "Practice Area Rankings", value: "Top 3 SERP" },
      { label: "Consultation Bookings", value: "+95%" }
    ],
    challenges: [
      { title: "Reliance on Word-of-Mouth", description: "Unpredictable revenue growth without an owned, scalable inbound digital acquisition channel." },
      { title: "Demonstrating Tangible ROI", description: "Attracting high-value enterprise retainers rather than low-budget price shoppers." }
    ],
    solutions: [
      "Practice area hub architecture and commercial query optimization",
      "Executive thought leadership and LinkedIn sponsored content",
      "Verified local citation authority and legal/consulting schema",
      "High-converting confidential consultation inquiry flows"
    ],
    metaTitle: "Professional Services & Legal Marketing Agency | ApexGrowth",
    metaDescription: "Scale corporate inquiries for law firms, management consultancies, and accounting firms with premier B2B search marketing."
  },
  {
    id: "manufacturing-b2b",
    slug: "manufacturing-b2b",
    name: "Manufacturing & Industrial B2B",
    shortDescription: "Generate high-value RFQs and connect with industrial buyers through technical search optimization.",
    heroHeading: "High-Value Inbound RFQs for Industrial Manufacturers & B2B Suppliers",
    heroSubheading: "Connect with procurement managers and engineers searching for specialized custom parts, OEM solutions, and supply chain partnerships.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    icon: "Factory",
    metrics: [
      { label: "High-Margin RFQs", value: "+190%" },
      { label: "Contract Value Generated", value: "Enterprise Scale" },
      { label: "Target Account Engagement", value: "+84%" }
    ],
    challenges: [
      { title: "Obscure Technical Jargon", description: "Engineers searching for specific DIN/ISO part standards or technical parameters." },
      { title: "Outdated Digital Portals", description: "Legacy manufacturer websites with scanned PDF spec sheets that search engines cannot index." }
    ],
    solutions: [
      "Specification sheet and CAD drawing search indexation",
      "Technical BOM (Bill of Materials) keyword intent mapping",
      "Targeted Google Search campaigns matching exact part numbers",
      "Streamlined multi-file upload Request for Quote (RFQ) forms"
    ],
    metaTitle: "Industrial B2B & Manufacturing SEO Agency | ApexGrowth",
    metaDescription: "Generate qualified inbound RFQs for industrial manufacturers, custom fabricators, and B2B distributors."
  }
];
