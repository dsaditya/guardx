import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const checklists = [
  "Gated Community Security Audit Checklist",
  "CCTV Buyer's Checklist for RWAs",
  "Boom Barrier Maintenance Checklist",
  "AMC Evaluation Checklist for Housing Societies",
  "Security Vendor Evaluation Guide",
  "Annual Security Audit Preparation Guide",
];

const articles = [
  {
    title: "How to Choose a CCTV System for Your Gated Community in Hyderabad",
    keyword: "CCTV for gated community Hyderabad",
    length: "900–1,100 words",
    outline: [
      "Why most gated community CCTV systems fail (wrong design, poor maintenance)",
      "Key factors: camera resolution, placement, coverage, storage, network setup",
      "Fixed vs PTZ cameras — which does your community need?",
      "What to ask a vendor before signing a contract",
      "Why AMC matters more than the equipment brand",
    ],
    cta: "Request a free CCTV assessment from GuardX360",
  },
  {
    title: "Access Control vs Security Guards: What Does a Gated Community Actually Need?",
    keyword: "access control system for gated community Hyderabad",
    length: "900–1,100 words",
    outline: [
      "The limitations of relying entirely on security guards",
      "What access control systems actually do (and what they don't)",
      "The case for an integrated approach: technology + human oversight",
      "Types of access control: biometric, RFID, face recognition, mobile",
      "How integration with CCTV and boom barriers strengthens access management",
    ],
    cta: "Talk to GuardX360 about access control for your community",
  },
  {
    title: "What Is an AMC for Security Systems and Why Does Your Housing Society Need One?",
    keyword: "AMC for security systems · annual maintenance contract CCTV Hyderabad",
    length: "900–1,100 words",
    outline: [
      "What an AMC covers (and what it typically excludes)",
      "The real cost of not having a maintenance contract",
      "Preventive vs reactive maintenance — why the difference matters",
      "What to look for in a security system AMC",
      "Questions to ask before signing an AMC",
    ],
    cta: "Get an AMC quote from GuardX360",
  },
  {
    title: "Boom Barriers for Apartments: Everything Your RWA Needs to Know",
    keyword: "boom barrier for apartment Hyderabad",
    length: "900–1,100 words",
    outline: [
      "Why vehicle access management matters in gated communities",
      "Types of boom barriers and which is right for your community",
      "ANPR and UHF integration — what it means and when you need it",
      "Installation process: what to expect from a professional vendor",
      "Common boom barrier problems and how preventive maintenance prevents them",
    ],
    cta: "Get a boom barrier assessment from GuardX360",
  },
  {
    title: "7 Signs Your Gated Community Security System Needs an Upgrade",
    keyword: "security system upgrade for gated community Hyderabad",
    length: "900–1,100 words",
    outline: [
      "CCTV footage is blurry or storage runs out quickly",
      "Boom barriers break down more than twice a year",
      "Access control system has no audit trail",
      "Your community is still using manual entry registers",
      "Multiple vendors, no single point of accountability",
      "No documentation of what systems are installed or where",
      "Residents are raising recurring security complaints",
    ],
    cta: "Book a security infrastructure assessment with GuardX360",
  },
  {
    title: "Solar Fencing for Residential Communities: Is It Right for Your Apartment or Villa Complex?",
    keyword: "solar fencing for apartments Hyderabad",
    length: "800–1,000 words",
    outline: [
      "What solar fencing is and how it works",
      "Why perimeter protection is the first layer of community security",
      "Legal and safety considerations in Telangana and Andhra Pradesh",
      "Solar fencing vs boundary wall cameras — which is more effective?",
      "What to look for in a solar fencing installation vendor",
    ],
    cta: "Request a perimeter protection assessment from GuardX360",
  },
  {
    title: "What Is Your Community's Security Health Score? A Committee's Guide to Self-Assessment",
    keyword: "security health score gated community · security audit checklist RWA",
    length: "800–1,000 words",
    outline: [
      "Why committees need a single benchmark, not five vendor opinions",
      "The six parameters behind a Security Health Score",
      "How to read your score and prioritize fixes",
      "How an Annual Security Audit keeps the score current",
      "Turning a low score into a modernization roadmap",
    ],
    cta: "Get your community's free Security Health Score from GuardX360",
  },
];

const KnowledgeCenter = () => {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="GuardX360 Community Knowledge Center — Guides, Checklists & Insights for Gated Communities"
        subtitle="Practical, non-sales guidance for committees, RWAs, and facility managers running secure, well-maintained communities."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-4xl mb-16">
              <p className="text-xs text-secondary uppercase tracking-wide mb-6 leading-relaxed" aria-label="Primary keywords">
                Gated community security guide · RWA security checklist · Housing society security tips Hyderabad
              </p>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                The Knowledge Center is where committees, RWAs, and facility managers can find
                practical, non-sales guidance on running secure, well-maintained communities —
                including downloadable checklists, buyer's guides, and articles written by the
                GuardX360 team.
              </p>
            </div>
          </AnimatedSection>

          {/* Checklists */}
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Downloadable Resources
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-heading">
                Checklists & Guides
              </h2>
              <p className="text-secondary text-base max-w-2xl">
                Free, practical resources committees can use immediately — no equipment purchase required.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {checklists.map((title, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-section-alt border border-border p-6 h-full flex flex-col">
                  <Download className="h-5 w-5 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-primary mb-4 font-heading leading-snug">
                    {title}
                  </h3>
                  <Button asChild variant="outline" size="sm" className="mt-auto border-primary text-primary uppercase tracking-wide text-xs self-start">
                    <Link to="/contact">Download Your Free Checklist</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog articles */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Blog Articles
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-heading">
                Long-form articles for committees & RWAs
              </h2>
              <p className="text-secondary text-base max-w-2xl">
                Deep-dive guides covering CCTV, access control, AMC, boom barriers, solar fencing,
                and security auditing — written specifically for gated community decision-makers.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {articles.map((article, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <article className="bg-background border border-border p-6 md:p-8">
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-1">
                      <span className="text-3xl font-bold text-primary/20 font-heading">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-3 font-heading leading-snug">
                        {article.title}
                      </h3>
                      <ul className="space-y-1.5 mb-4">
                        {article.outline.map((point, j) => (
                          <li key={j} className="text-sm text-secondary leading-relaxed flex gap-2">
                            <span className="text-accent flex-shrink-0">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/5 px-0 uppercase tracking-wide text-xs font-semibold">
                        <Link to="/contact">
                          {article.cta} <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="md:col-span-3 space-y-3 text-xs">
                      <div>
                        <p className="text-secondary uppercase tracking-widest mb-1">Primary Keyword</p>
                        <p className="text-foreground leading-relaxed">{article.keyword}</p>
                      </div>
                      <div className="flex items-center gap-2 text-secondary">
                        <Clock className="h-3 w-3" />
                        <span>{article.length}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary">
                        <FileText className="h-3 w-3" />
                        <span>Article outline</span>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeCenter;
