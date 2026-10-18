import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, CheckCircle2, AlertTriangle, ArrowRight 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { CountryTargetingForm } from '../components/forms/CountryTargetingForm';
import { ProposalForm } from '../components/forms/ProposalForm';
import { servicesData } from '../data/servicesData';

export const InternationalSeoPage: React.FC = () => {
  const internationalService = servicesData.find(s => s.slug === 'international-seo')!;

  const internationalFaqs = [
    {
      question: "What is international SEO?",
      answer: "International SEO is the process of optimizing your website so search engines can easily identify which countries you want to reach and which languages you use to speak to customers in those territories. It involves technical signals like hreflang annotations, URL architecture decisions (ccTLDs, subdomains, or subdirectories), localized content adaptation, and country-specific backlink authority."
    },
    {
      question: "How is international SEO different from local SEO?",
      answer: "Local SEO focuses on capturing searchers within a specific neighborhood, city, or metropolitan area—relying heavily on Google Business Profiles, localized map pack rankings, and local directory citations. International SEO operates across sovereign nations and language barriers, focusing on cross-border search engine algorithms, multilingual taxonomy, currency handling, and global site architecture."
    },
    {
      question: "How do hreflang tags work?",
      answer: "Hreflang tags (rel='alternate' hreflang='x') are HTML annotations that inform search engines of the specific language and geographic targeting of a web page. When searchers in France search for your services, Google reads the hreflang tag and serves the French version rather than the English counterpart, preventing duplicate content confusion."
    },
    {
      question: "Should we use country-specific domains (ccTLDs), subdomains, or subdirectories?",
      answer: "Subdirectories (e.g., example.com/de/) are generally the most cost-effective and SEO-friendly solution for most brands because they consolidate all backlink authority into a single domain. Country-code top-level domains (ccTLDs like example.de) provide the strongest local trust signal but require substantial domain authority building for each domain individually. We evaluate your budget, CMS capabilities, and corporate footprint to choose the ideal setup."
    },
    {
      question: "How long does international SEO take to gain traction?",
      answer: "When expanding to new international markets with subdirectories on an established authoritative root domain, results can appear within 3 to 6 months. For new ccTLD setups requiring fresh domain authority, meaningful results typically take 6 to 12 months of coordinated localization and regional link acquisition."
    },
    {
      question: "Which countries and languages should we target first?",
      answer: "We recommend prioritizing markets based on a combination of existing unassisted international traffic, market purchasing power, payment gateway compatibility, shipping/fulfillment logistics, and organic competitive saturation."
    }
  ];

  const commonChallenges = [
    {
      title: "Incorrect Language Targeting",
      description: "Search engines serving US English pages to UK, Australian, or Canadian buyers, displaying wrong currencies, phone numbers, and regional spellings."
    },
    {
      title: "Duplicate Regional Content",
      description: "Identical English pages served across multiple territories triggering duplicate content filters and keyword cannibalization."
    },
    {
      title: "Hreflang Syntax & Return Tag Errors",
      description: "Broken bi-directional return tags, missing x-default tags, or pointing hreflang to 301 redirects, causing search bots to disregard regional directives."
    },
    {
      title: "Weak In-Country Relevance",
      description: "Lacking local country-code backlink signals, local business citations, or regional entity verification in local knowledge graphs."
    },
    {
      title: "Poor Country-Specific Landing Pages",
      description: "Literal machine translations without cultural search nuance, local case studies, or native customer support touchpoints."
    }
  ];

  const coreSubsections = [
    {
      title: "International SEO Strategy & Market Selection",
      desc: "Prioritize foreign markets based on total search volume, regulatory barriers, fulfillment logistics, and revenue opportunity."
    },
    {
      title: "Country & Language Keyword Research",
      desc: "Native linguistic analysis to discover how target populations actually search, avoiding misleading literal translations."
    },
    {
      title: "Hreflang Implementation & Validation",
      desc: "Flawless XML sitemap or HTTP header hreflang deployment with bi-directional verification to prevent duplicate indexing."
    },
    {
      title: "Country-Specific URL Structure Planning",
      desc: "Evaluating the commercial and technical trade-offs between ccTLDs, subdomains, and subdirectories for your specific CMS."
    },
    {
      title: "ccTLD, Subdomain & Subdirectory Evaluation",
      desc: "Data-backed architectural evaluation balancing domain authority consolidation against local sovereign trust signals."
    },
    {
      title: "International Site Architecture",
      desc: "Clean global navigation, geo-IP redirection best practices, and fallback selector UX that search engines can easily crawl."
    },
    {
      title: "Multilingual Content Localization",
      desc: "Transcreation of core service, product, and category hubs tailored to native dialects and localized cultural buyer motivations."
    },
    {
      title: "Search Intent & Cultural Adaptation",
      desc: "Aligning on-page messaging, payment options, and legal trust symbols with the cultural expectations of local buyers."
    },
    {
      title: "International Technical SEO Audits",
      desc: "Inspecting server response times across international edge CDNs, server header status codes, and multi-currency caching."
    },
    {
      title: "Canonical & Indexing Management",
      desc: "Harmonizing canonical tags with hreflang alternate rules so search engines index the appropriate localized variant."
    },
    {
      title: "Local Search Engine Research",
      desc: "Optimizing for dominant regional search engines beyond Google, including Baidu in China, Yandex in Eastern Europe, and Naver in Korea."
    },
    {
      title: "International Link Acquisition",
      desc: "Securing authoritative contextual backlinks from in-country news publications, trade associations, and local university domains."
    },
    {
      title: "Country-Specific Competitor Analysis",
      desc: "Benchmarking the search footprint, backlink velocity, and content strategies of top local competitors in each target country."
    },
    {
      title: "International Analytics & Reporting",
      desc: "Configuring country-segmented Google Search Console properties and GA4 regional funnels to track foreign market pipeline."
    },
    {
      title: "Global SEO Migration Support",
      desc: "Consolidating legacy international sites or transitioning from fragmented domains to unified multi-region subdirectories with zero traffic loss."
    }
  ];

  const sixStepProcess = [
    { step: 1, title: "Global Opportunity Research", description: "Evaluating market demand, search volume, regulatory factors, and competitor footprints across target territories." },
    { step: 2, title: "Country and Language Prioritization", description: "Prioritizing tier-1 international expansion markets based on revenue potential and entry barriers." },
    { step: 3, title: "Technical & Website Structure Audit", description: "Selecting optimal URL structure (ccTLD, subdirectory, or subdomain) and designing error-free hreflang architecture." },
    { step: 4, title: "Localization & Content Optimization", description: "Adapting content with native search intent, local currency signals, address schemas, and cultural context." },
    { step: 5, title: "Authority Building in Target Markets", description: "Securing in-country backlinks, regional press mentions, and citations from top local domains." },
    { step: 6, title: "Country-Level Measurement & Optimization", description: "Segmenting analytics by market to monitor local click-through rates, conversion funnels, and revenue." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": internationalFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="International SEO Services | Global Multi-Language SEO Agency"
        description="Expand your business into global search markets with enterprise International SEO. Multi-language keyword strategy, hreflang tag validation, and regional URL architecture."
        canonicalPath="/services/international-seo"
        jsonLd={faqSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "International SEO" }
            ]}
            className="text-slate-400 mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span>CROSS-BORDER SEARCH ENGINE VISIBILITY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Expand Your Business Into{' '}
                <span className="text-gradient-blue">Global Search Markets</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                Build international search visibility with a strategy designed around your target countries, languages, audiences and business goals.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button to="#country-planner" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Get an International SEO Strategy
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-slate-700 text-white bg-transparent hover:bg-navy-800">
                  Book a Global Discovery Call
                </Button>
              </div>

              {/* Trust badges */}
              <div className="pt-6 border-t border-navy-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Hreflang Zero-Error Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>ccTLD vs Subdirectory Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Coverage in 40+ Global Locales</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-navy-700 shadow-2xl bg-navy-900">
                <img
                  src={internationalService.heroImage}
                  alt="International SEO global map visualization and multi-region search architecture"
                  className="w-full h-80 sm:h-96 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                    GLOBAL SEARCH ATTRIBUTION
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    +284% Non-Domestic Revenue Lift
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Multi-lingual hreflang architecture deployed for enterprise scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common International SEO Challenges */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CROSS-BORDER PITFALLS"
            title="Common International SEO Challenges Ambitious Brands Face"
            description="Expanding globally without a sound technical search architecture often fragments authority and leads to costly indexing penalties."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-blue-300 transition-all shadow-subtle group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Opportunity Card */}
            <div className="p-6 rounded-2xl bg-blue-600 text-white flex flex-col justify-between shadow-card">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Avoid Fatal Cross-Border Mistakes
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                  Our senior international strategists perform complete audits of your hreflang setup, canonical logic, and server configurations before launch.
                </p>
              </div>
              <Button to="/contact" variant="white" size="sm">
                Get a Global SEO Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Subsections: Scope of International SEO Capabilities */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FULL-SPECTRUM GLOBAL ARCHITECTURE"
            title="Comprehensive International SEO Capabilities & Deliverables"
            description="Every technical, linguistic, and authoritative dimension required to win top search positions in sovereign markets."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSubsections.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center font-mono">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-navy-950">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six-Step Process */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EXECUTION ROADMAP"
            title="Our Six-Step International Search Expansion Framework"
            description="A structured, risk-mitigated pathway to capturing foreign search demand and scaling international pipeline."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixStepProcess.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center font-mono">
                      0{step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Country Targeting Form Section */}
      <section id="country-planner" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountryTargetingForm />
        </div>
      </section>

      {/* Case Study Spotlight: Novapay International Expansion */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                VERIFIED CASE STUDY · INTERNATIONAL SEO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How Novapay Scaled Cross-Border Search Across 6 European & LATAM Markets
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                By consolidating fragmented ccTLDs into clean subdirectories, automating bi-directional hreflang tags, and securing in-country financial citations, Novapay generated $4.2M in new international pipeline.
              </p>
              <div className="pt-2">
                <Button to="/case-studies/global-fintech-international-seo" variant="primary" size="md">
                  Read Full International Case Study
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">+284%</div>
                <div className="text-xs text-slate-400 mt-1">Non-US Organic Traffic</div>
              </div>
              <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">$4.2M</div>
                <div className="text-xs text-slate-400 mt-1">Attributed Pipeline</div>
              </div>
              <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">0</div>
                <div className="text-xs text-slate-400 mt-1">Hreflang Syntax Errors</div>
              </div>
              <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-300">+195%</div>
                <div className="text-xs text-slate-400 mt-1">Enterprise RFP Surge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive International SEO FAQs */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GLOBAL SEARCH CLARITY"
            title="Frequently Asked Questions About International SEO"
            description="Clear, expert answers to the most common questions regarding hreflang tags, domain structures, and foreign search engine dynamics."
            align="center"
          />

          <FAQAccordion faqs={internationalFaqs} />
        </div>
      </section>

      {/* Related Services Internal Links */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-navy-950">
              Complementary Growth Services
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Maximize your global organic momentum with these interrelated search capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/services/seo-services"
              className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-subtle transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-navy-950 group-hover:text-blue-600 transition-colors">
                  Enterprise SEO Services
                </span>
                <span className="text-xs text-slate-500">Core organic optimization</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/services/ecommerce-seo"
              className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-subtle transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-navy-950 group-hover:text-blue-600 transition-colors">
                  Ecommerce SEO
                </span>
                <span className="text-xs text-slate-500">Global product catalogues</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/services/seo-audit"
              className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-subtle transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-navy-950 group-hover:text-blue-600 transition-colors">
                  Technical SEO Auditing
                </span>
                <span className="text-xs text-slate-500">Server logs & hreflang health</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/services/geo-ai-seo"
              className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-subtle transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-navy-950 group-hover:text-blue-600 transition-colors">
                  GEO & AI SEO
                </span>
                <span className="text-xs text-slate-500">Multilingual LLM citations</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Lead Generation Proposal Form */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProposalForm
            initialService="international-seo"
            title="Request Your Free International SEO Strategy Proposal"
            subtitle="Tell us which global countries you are targeting. Our senior international architects will conduct a preliminary hreflang and architecture evaluation within 48 hours."
          />
        </div>
      </section>
    </>
  );
};
