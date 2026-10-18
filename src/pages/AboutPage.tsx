import React from 'react';
import { Target, ShieldCheck, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/sections/CTASection';

export const AboutPage: React.FC = () => {
  // Editable Team Profile Placeholders (transparently marked as leadership placeholders)
  const teamMembers = [
    {
      name: "Marcus Vance",
      title: "Managing Partner & Search Strategist",
      roleDesc: "Specializes in enterprise search architecture, revenue modeling, and international multi-region expansions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      isPlaceholder: true
    },
    {
      name: "Elena Rostova",
      title: "Director of Technical SEO & Engineering",
      roleDesc: "Leads technical audits, log file analytics, JavaScript rendering optimization, and Core Web Vitals engineering.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
      isPlaceholder: true
    },
    {
      name: "Alexander Hayes",
      title: "Head of Paid Media & Attribution",
      roleDesc: "Architects server-side tracking, value-based Google Smart Bidding, and enterprise paid media funnels.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      isPlaceholder: true
    },
    {
      name: "Sophia Martinez",
      title: "Lead Conversion Rate Strategist (CRO)",
      roleDesc: "Drives qualitative behavioral user research, multivariate A/B testing frameworks, and landing page UX design.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      isPlaceholder: true
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Commercial Relevance Over Vanity Metrics",
      desc: "We measure our success by pipeline generation, CAC reduction, and bottom-line profit, not arbitrary impressions or hollow clicks."
    },
    {
      icon: ShieldCheck,
      title: "Radical Operational Transparency",
      desc: "Clients own 100% of their data, accounts, and creative assets. We report on both wins and challenges with complete candor."
    },
    {
      icon: Lightbulb,
      title: "Engineering-First Problem Solving",
      desc: "We treat search engines and digital advertising platforms as complex algorithmic systems that reward technical precision."
    },
    {
      icon: Heart,
      title: "Sustainable Long-Term Value",
      desc: "We strictly avoid short-sighted spam or algorithmic shortcuts that jeopardize brand credibility during future core updates."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Our Agency | Mission, Values & Leadership Team"
        description="Learn about ApexGrowth's mission, engineering-led approach, core values, and the senior digital strategists driving enterprise search results."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-8 pb-20 lg:pt-12 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            className="text-slate-400 mb-8"
          />

          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
              AGENCY STORY & MISSION
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              An Enterprise Digital Agency Built for Measurable Revenue
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              ApexGrowth was founded to bridge the divide between technical search architecture and commercial business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 leading-tight">
                Why We Built ApexGrowth
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  For years, enterprise leadership teams have expressed frustration with conventional agency models: agencies that celebrate keyword rankings while sales pipelines remain empty, or media teams that spend budgets without closed-loop attribution.
                </p>
                <p>
                  We established ApexGrowth on a different premise: that modern search marketing requires the technical rigor of software engineering paired with the commercial focus of a CFO.
                </p>
                <p>
                  Today, we partner with enterprise B2B SaaS companies, global fintechs, high-growth ecommerce retailers, and multi-location institutions to build owned search assets and profitable paid acquisition channels that compound over time.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-navy-950 font-mono">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Client Data Ownership</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-extrabold text-blue-600 font-mono">48-Hour</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Audit Delivery SLA</div>
                </div>
              </div>
            </div>

            {/* Right Column Mission Box */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-card space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">
                  Our Mission
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  "To turn digital channels into predictable, scalable revenue engines for ambitious businesses by applying relentless technical excellence, transparent communication, and customer-first conversion strategy."
                </p>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>No junior account handoffs; work directly with senior practitioners</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Live Looker Studio dashboards with real-time CRM attribution</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Proactive recommendations rather than passive task-taking</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OPERATIONAL PILLARS"
            title="The Values That Guide Our Client Partnerships"
            description="Our culture is defined by accountability, technical depth, and an unwavering commitment to business results."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Senior Team Section (Editable Profile Placeholders) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STRATEGIC LEADERSHIP"
            title="Meet the Practice Leaders Driving Your Growth"
            description="Our practice directors have managed multi-million dollar search portfolios across enterprise tech, global commerce, and healthcare."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-subtle overflow-hidden flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-slate-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    {member.isPlaceholder && (
                      <span className="absolute top-3 right-3 text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/60 text-slate-300 backdrop-blur-sm border border-white/10">
                        Profile Placeholder
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-950">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mb-3">
                      {member.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.roleDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-400">
            * Team biographies and imagery are modular configuration placeholders ready to be customized for your exact internal leadership roster.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};
