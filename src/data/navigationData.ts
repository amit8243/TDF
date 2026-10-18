export interface NavServiceGroup {
  category: string;
  items: {
    name: string;
    slug: string;
    path: string;
    shortDesc: string;
    icon: string;
    badge?: string;
  }[];
}

export const servicesMegaMenuGroups: NavServiceGroup[] = [
  {
    category: "Organic Search & SEO",
    items: [
      {
        name: "SEO Services",
        slug: "seo-services",
        path: "/services/seo-services",
        shortDesc: "Enterprise search optimization for long-term pipeline.",
        icon: "Search"
      },
      {
        name: "International SEO",
        slug: "international-seo",
        path: "/services/international-seo",
        shortDesc: "Hreflang, multi-language & global market expansion.",
        icon: "Globe",
        badge: "Global Growth"
      },
      {
        name: "Local SEO",
        slug: "local-seo",
        path: "/services/local-seo",
        shortDesc: "Google Maps 3-Pack and regional visibility.",
        icon: "MapPin"
      },
      {
        name: "Ecommerce SEO",
        slug: "ecommerce-seo",
        path: "/services/ecommerce-seo",
        shortDesc: "Faceted navigation & product rich schemas.",
        icon: "ShoppingCart"
      },
      {
        name: "Link Building Services",
        slug: "link-building",
        path: "/services/link-building",
        shortDesc: "Editorial digital PR & authoritative backlink acquisition.",
        icon: "Link2"
      }
    ]
  },
  {
    category: "Paid Media & Advertising",
    items: [
      {
        name: "PPC Management",
        slug: "ppc-management",
        path: "/services/ppc-management",
        shortDesc: "Full-funnel search & display optimized for profitable ROAS.",
        icon: "TrendingUp"
      },
      {
        name: "Google Ads Management",
        slug: "google-ads",
        path: "/services/google-ads",
        shortDesc: "Search & Performance Max customer capture.",
        icon: "Target",
        badge: "Premier Partner"
      },
      {
        name: "Facebook Ads Management",
        slug: "facebook-ads",
        path: "/services/facebook-ads",
        shortDesc: "Meta creative testing frameworks & Conversions API.",
        icon: "Share2"
      }
    ]
  },
  {
    category: "Web & Conversion",
    items: [
      {
        name: "Website Design & Development",
        slug: "web-design-development",
        path: "/services/web-design-development",
        shortDesc: "Fast, responsive web apps built for Core Web Vitals.",
        icon: "Layout"
      },
      {
        name: "Conversion Rate Optimization",
        slug: "conversion-rate-optimization",
        path: "/services/conversion-rate-optimization",
        shortDesc: "Scientific A/B testing and friction elimination.",
        icon: "PieChart",
        badge: "High ROI"
      },
      {
        name: "Website Maintenance",
        slug: "website-maintenance",
        path: "/services/website-maintenance",
        shortDesc: "24/7 security, uptime monitoring & technical upkeep.",
        icon: "ShieldCheck"
      }
    ]
  },
  {
    category: "Strategy & Next-Gen Search",
    items: [
      {
        name: "Generative Engine Optimization (GEO)",
        slug: "geo-ai-seo",
        path: "/services/geo-ai-seo",
        shortDesc: "Citations in ChatGPT, Perplexity & Google AI Overviews.",
        icon: "Cpu",
        badge: "AI Search"
      },
      {
        name: "SEO Auditing",
        slug: "seo-audit",
        path: "/services/seo-audit",
        shortDesc: "Forensic log analysis & technical crawl diagnostics.",
        icon: "ClipboardCheck"
      }
    ]
  }
];

export const mainNavLinks = [
  { name: "Services", path: "/services", hasMegaMenu: true },
  { name: "Industries", path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" }
];
