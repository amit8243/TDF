export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socials: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube: string;
  };
  certifications: string[];
}

export const siteConfig: SiteConfig = {
  name: "ApexGrowth",
  legalName: "ApexGrowth Digital Media, Inc.",
  tagline: "Turn Your Digital Presence Into Measurable Business Growth",
  description: "Enterprise digital marketing agency delivering measurable growth through advanced organic search, International SEO, paid media, and conversion rate optimization.",
  url: "https://www.apexgrowth.com",
  phone: "+1 (800) 555-0199", // Configurable placeholder
  email: "growth@apexgrowth.com", // Configurable placeholder
  address: {
    street: "500 Enterprise Way, Suite 400",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    country: "United States"
  },
  socials: {
    linkedin: "https://linkedin.com/company/apexgrowth-demo",
    twitter: "https://twitter.com/apexgrowth_demo",
    facebook: "https://facebook.com/apexgrowth.demo",
    youtube: "https://youtube.com/@apexgrowth-demo"
  },
  certifications: [
    "Google Premier Partner",
    "Meta Certified Business Partner",
    "HubSpot Certified Agency Partner",
    "Semrush Certified Agency",
    "Microsoft Advertising Partner"
  ]
};
