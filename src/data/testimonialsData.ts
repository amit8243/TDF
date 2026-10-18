export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  image: string;
  quote: string;
  service: string;
  isDemoSample: boolean; // Transparency flag
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "VP of Digital Growth",
    company: "Novapay Global Systems",
    industry: "Fintech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "ApexGrowth transformed our global organic search engine presence. Expanding across 6 international markets with flawless hreflang execution and zero duplicate indexing penalties drove over $4M in new enterprise pipeline.",
    service: "International SEO",
    isDemoSample: true
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "DataGrid Cloud Solutions",
    industry: "B2B SaaS",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Unlike agencies that boast about meaningless keyword volume, ApexGrowth focuses entirely on pipeline and qualified demo bookings. Their technical SEO audit and bottom-of-funnel content strategy tripled our enterprise SQLs.",
    service: "Enterprise SEO",
    isDemoSample: true
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Head of Ecommerce",
    company: "Lumina Home Goods",
    industry: "Retail / D2C",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Their team resolved our massive faceted navigation index bloat within weeks. Our organic collection page rankings skyrocketed, driving a 168% increase in organic revenue during our peak holiday quarter.",
    service: "Ecommerce SEO",
    isDemoSample: true
  },
  {
    id: "test-4",
    name: "Sarah Jenkins, MD",
    role: "Managing Director",
    company: "Aegis Orthopedic Centers",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Managing search visibility across 32 medical clinics seemed daunting until we partnered with ApexGrowth. Their local SEO framework placed 89% of our locations into the Google 3-Pack while maintaining strict HIPAA compliance.",
    service: "Local SEO",
    isDemoSample: true
  },
  {
    id: "test-5",
    name: "Julian Thorne",
    role: "Chief Technology Officer",
    company: "CyberShield Security",
    industry: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "The web development and CRO team achieved a 100/100 Core Web Vitals score on our enterprise flagship. Our page load dropped to 0.8 seconds and demo conversions surged by 145%. Exceptional engineering standard.",
    service: "Website Design & CRO",
    isDemoSample: true
  }
];
