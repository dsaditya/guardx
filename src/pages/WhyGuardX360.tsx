import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Focus,
  Layers,
  Award,
  Wrench,
  FileCheck,
  BarChart3,
  CheckCircle2,
  Camera,
  KeyRound,
  Car,
  ShieldCheck,
  FileText,
  Calendar,
  ClipboardList,
  PenTool,
  Package,
  ClipboardCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import LeadForm from "@/components/LeadForm";

const reasons = [
  {
    title: "One Vendor. One Accountability.",
    body: "Single point of responsibility across design, implementation, maintenance, and support.",
  },
  {
    title: "Specialized in Gated Communities",
    body: "We focus exclusively on residential communities, so we understand the operational, resident, and committee-level challenges that general security vendors don't.",
  },
  {
    title: "Security Infrastructure, Not Individual Products",
    body: "We design complete security ecosystems where every component works together as an integrated system.",
  },
  {
    title: "Maintenance-First Business Model",
    body: "We invest in long-term relationships through AMC, preventive maintenance, modernization, and lifecycle support.",
  },
  {
    title: "Standardized, Measurable Outcomes",
    body: "Every engagement follows our framework and benchmarks — so quality is built into the system, not left to chance.",
  },
];


const healthScoreParams = [
  { icon: Camera, label: "Camera coverage & uptime" },
  { icon: KeyRound, label: "Access control audit trails" },
  { icon: Car, label: "Boom barrier reliability" },
  { icon: ShieldCheck, label: "Perimeter protection status" },
  { icon: FileText, label: "Documentation completeness" },
  { icon: Calendar, label: "AMC compliance history" },
];

const residentOutcomes = [
  "Faster, queue-free vehicle entry and exit",
  "Verified, time-stamped visitor and staff access records",
  "Fewer security-related resident complaints",
  "Reliable footage available whenever an incident is reported",
  "Consistent system uptime through preventive AMC support",
];

const deliverySteps = [
  {
    icon: ClipboardList,
    title: "Security Infrastructure Assessment",
    body: "On-site evaluation of existing systems, entry points, perimeter, and resident movement, resulting in a baseline Security Health Score.",
  },
  {
    icon: PenTool,
    title: "Integrated Solution Design",
    body: "A system design built around your community's actual layout and requirements — not a generic product list.",
  },
  {
    icon: FileText,
    title: "Proposal & Documentation",
    body: "A transparent proposal with equipment specification, cable schedules, and project timeline for committee sign-off.",
  },
  {
    icon: Package,
    title: "Installation & Commissioning",
    body: "Supply, installation, and commissioning of all systems by trained technicians, with quality checks at every stage.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing, Handover & Training",
    body: "Full system testing, documentation handover, and operational training for security staff and committee members.",
  },
  {
    icon: RefreshCw,
    title: "AMC & Annual Security Audit",
    body: "Ongoing preventive maintenance under AMC, with a full Annual Security Audit each year to track performance and plan upgrades.",
  },
];

const WhyGuardX360 = () => {
  return (
    <>
      <PageHero
        eyebrow="Why GuardX360"
        title="Few solid reasons that you don't get anywhere else."
        subtitle="Communities choose GuardX360 not because we sell security products, but because we run a standardized, documented system for building and maintaining security infrastructure."
      />

      {/* Why choose us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-section-alt rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                {/* Left column */}
                <div className="relative flex md:pl-16">
                  {/* Vertical rotated label */}
                  <span
                    className="hidden md:block absolute left-0 top-0 bottom-0 text-xs tracking-[0.35em] uppercase text-secondary/70 font-medium"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    Why Choose GuardX360
                  </span>
                  {/* Accent bar */}
                  <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[3px] bg-accent" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading leading-[1.15]">
                    Few solid reasons that you don't get anywhere else
                  </h2>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-7 md:gap-8">
                  {reasons.map((r, i) => (
                    <div key={i} className="flex gap-4 md:gap-5">
                      <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Heart className="h-4 w-4 text-accent-foreground fill-current" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-primary mb-1 font-heading">
                          {r.title}
                        </h3>
                        <p className="text-secondary text-sm md:text-[15px] leading-relaxed">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Security Health Score */}
      <section id="health-score" className="section-padding bg-section-dark scroll-mt-24">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Security Health Score
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-heading leading-tight">
                How secure is your community, really?
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every GuardX360 engagement starts with a simple question. Our Security Health
                Score gives your committee a clear, data-backed rating of your current security
                infrastructure across six parameters — assessed on-site by a GuardX360 engineer
                and delivered in a written report.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {healthScoreParams.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5">
                  <p.icon className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-white/80 text-sm uppercase tracking-wide">{p.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide">
              <Link to="/contact">
                Get Your Community's Free Security Health Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resident Safety Outcomes */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Resident Safety Outcomes
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading leading-tight">
                Security infrastructure is ultimately measured by what residents experience day to day.
              </h2>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                Communities running on GuardX360 infrastructure see faster, guard-free vehicle
                entry through ANPR and UHF access, verified visitor logs at every gate, real-time
                alerts on perimeter breaches, and a complete digital audit trail for every entry
                and exit — giving committees confidence and residents peace of mind.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-3 max-w-4xl">
            {residentOutcomes.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-background border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-foreground text-sm leading-relaxed">{o}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section id="delivery-process" className="section-padding bg-background scroll-mt-24">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Delivery Process
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading leading-tight">
                Our Delivery Process — From Assessment to Long-Term Maintenance
              </h2>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                Every GuardX360 project follows the same structured, documented process, regardless
                of community size — this consistency is the foundation of Security as a Standard™.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {deliverySteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-section-alt border border-border p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/20 font-heading">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <step.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-2 uppercase tracking-wide font-heading">
                    Step {i + 1}: {step.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with lead form */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Free Assessment
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-heading leading-tight">
                No obligation. No pressure. Just an honest assessment.
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Our team will visit your community, review your current security setup, identify
                gaps, and recommend an integrated solution — from a team that specializes in
                gated community security.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-background p-6 md:p-10 border border-white/10 max-w-4xl mx-auto">
              <LeadForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default WhyGuardX360;
