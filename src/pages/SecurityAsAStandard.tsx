import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Car,
  Fingerprint,
  Zap,
  ScanLine,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Network,
  Cable,
  FileText,
  Server,
  Users,
  Search,
  Route as RouteIcon,
  ListChecks,
  FileCheck,
  Footprints,
  Check,
  Building2,
  Factory,
  HardHat,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SimpleLeadForm from "@/components/SimpleLeadForm";
import { useSEO } from "@/hooks/use-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/lp2/standard-hero.jpg";
import rackImage from "@/assets/lp/network-rack.jpg";

const stats = [
  { value: "10+ Years", label: "Security industry experience" },
  { value: "1,000+", label: "Customers served across Telangana & Andhra Pradesh" },
  { value: "One Vendor", label: "Single point of accountability" },
  { value: "Hyderabad", label: "Locally based engineering team" },
];

const failures = [
  { icon: Network, text: "Incorrect network and switch design" },
  { icon: Cable, text: "Poor-quality cabling, connectors and power arrangements" },
  { icon: FileText, text: "No camera-to-switch mapping or documentation" },
  { icon: Server, text: "Equipment added without considering network capacity" },
  { icon: Users, text: "Multiple vendors with nobody taking complete responsibility" },
];

const disciplines = [
  {
    icon: Search,
    title: "Audit",
    text: "A structured walkthrough of gates, perimeter, technical rooms and existing equipment before anything is quoted.",
  },
  {
    icon: Layers,
    title: "Design",
    text: "A documented design sized to the site — coverage, network load, power and cabling defined in writing.",
  },
  {
    icon: Wrench,
    title: "Implement",
    text: "Installation and commissioning against a testing checklist, with formal handover documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain",
    text: "Preventive maintenance and priority response under an AMC — whether we installed the system or not.",
  },
];

const systems = [
  { icon: Camera, title: "CCTV Surveillance", text: "Coverage designed around actual entry points, blind spots and lighting.", to: "/services/cctv-surveillance" },
  { icon: Car, title: "Boom Barrier & Vehicle Access", text: "Controlled vehicle entry and exit at every gate.", to: "/services/boom-barrier-vehicle-access" },
  { icon: Fingerprint, title: "Biometric & Access Control", text: "Access control for gates, clubhouse and utility areas.", to: "/services/biometric-access-control" },
  { icon: Zap, title: "Solar Fencing", text: "Perimeter protection that defines where the site starts.", to: "/services/solar-fencing" },
  { icon: ScanLine, title: "ANPR & UHF Vehicle Access", text: "Plate and tag based recognition for resident and visitor vehicles.", to: "/services/anpr-uhf-vehicle-access" },
  { icon: Wrench, title: "Annual Maintenance Contracts", text: "Preventive maintenance and breakdown support with defined scope.", to: "/services/annual-maintenance-contracts" },
  { icon: ClipboardCheck, title: "Assessment & Modernization", text: "Independent evaluation of what exists and what needs to change.", to: "/services/security-assessment-modernization" },
  { icon: ShieldCheck, title: "Security Health Score", text: "A yearly benchmarked view of your security readiness, in writing.", to: "/services/security-health-score" },
];

const standards = [
  { icon: Network, text: "Network and switch design sized for the camera load" },
  { icon: Cable, text: "Specified cabling, connectors and power arrangements" },
  { icon: FileText, text: "Camera-to-switch mapping maintained as documentation" },
  { icon: ListChecks, text: "Testing and commissioning checklist before handover" },
];

const deliverables = [
  { icon: Search, text: "Structured diagnostic review" },
  { icon: Layers, text: "System-level assessment" },
  { icon: FileCheck, text: "Formal documentation" },
  { icon: ClipboardCheck, text: "Clear scope confirmation" },
  { icon: ShieldCheck, text: "Independent technical evaluation" },
];

const process = [
  { icon: Footprints, title: "Site walkthrough", text: "Structured walkthrough of gates, perimeter and technical rooms." },
  { icon: Search, title: "Diagnostic review", text: "System-level review of what exists and what is failing." },
  { icon: FileText, title: "Findings report", text: "Documented findings with an independent technical evaluation." },
  { icon: RouteIcon, title: "Execution roadmap", text: "Defined scope, sequence and priorities agreed before work starts." },
  { icon: Wrench, title: "Implementation & AMC", text: "Commissioning, formal documentation and ongoing maintenance." },
];

const siteTypes = [
  { icon: Building2, title: "Gated communities", text: "Multi-gate residential campuses with resident, visitor and vendor movement." },
  { icon: HardHat, title: "Crusher & mining sites", text: "High-risk industrial locations with controlled entry points, heavy vehicle movement and critical security requirements." },
  { icon: Factory, title: "Industrial & infrastructure", text: "Plants, yards and facilities where access and perimeter control are operational requirements." },
];

const faqs = [
  {
    q: "Do you work only with systems you installed?",
    a: "No. We maintain what matters — whether we installed it or not. If a site already has equipment in place, we can assess it and take it under an AMC.",
  },
  {
    q: "What does a standard service visit cover?",
    a: "Standard service visits are structured to cover professional diagnosis and basic issue rectification within a defined service window, planned to ensure effective diagnosis and clear next steps. Any additional work or scope changes are discussed and approved before execution.",
  },
  {
    q: "What do we receive at the end of an assessment?",
    a: "A documented set of findings, an independent technical evaluation and an execution roadmap with defined scope, sequence and priorities.",
  },
  {
    q: "Which areas do you serve?",
    a: "GuardX360 serves gated communities and infrastructure in Hyderabad, with customers across Telangana and Andhra Pradesh.",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-4">{children}</p>
);

const SecurityAsAStandard = () => {
  const [scrollTarget] = useState("assessment-form");

  useSEO({
    title: "Security as a Standard | Security Engineering in Hyderabad | GuardX360",
    description:
      "GuardX360 audits, designs, implements and maintains security infrastructure for gated communities and industrial sites in Hyderabad — documented networks, one accountable partner.",
  });

  const scrollToForm = () => {
    document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-section-dark">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="CCTV camera and cabling on the boundary wall of a gated community in Hyderabad"
            className="w-full h-full object-cover"
            width={1600}
            height={1000}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/55" />
        </div>
        <div className="container-narrow relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Security engineering • Hyderabad
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
              Security as a Standard, not a set of devices
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              GuardX360 audits, designs, implements and maintains CCTV, access control, boom
              barriers and perimeter security — with documented networks, accountable service and
              one point of contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
              >
                Request a Security Assessment
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
              >
                <Link to="/services/security-health-score">Get Your Community Security Score</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.value} className="bg-primary px-6 py-8">
                <p className="text-2xl md:text-3xl font-bold text-accent font-heading mb-2">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60 leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAILURES */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              Why security systems fail after installation
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {failures.map((f, i) => (
              <AnimatedSection key={f.text} delay={i * 0.05}>
                <div className="border border-border p-6 h-full">
                  <div className="bg-accent p-3 w-fit mb-4">
                    <f.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-center text-secondary mt-10 max-w-2xl mx-auto">
              Equipment rarely fails on its own. The engineering around it does.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUR DISCIPLINES */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>The standard</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-10 max-w-3xl">
              Four disciplines, one accountable partner
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {disciplines.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.05}>
                <div className="bg-section-dark p-8 h-full">
                  <d.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white font-heading mb-3">{d.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING STANDARDS + IMAGE */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={rackImage}
                alt="Labelled network rack with PoE switches serving a gated community security system"
                className="w-full h-auto object-cover"
                width={1200}
                height={800}
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Eyebrow>Engineering standards</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
                What we hold ourselves to on every site
              </h2>
              <ul className="space-y-5">
                {standards.map((s) => (
                  <li key={s.text} className="flex items-start gap-4">
                    <s.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground leading-relaxed">{s.text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Systems we handle</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              Integrated security infrastructure under one contract
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {systems.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.04}>
                <Link
                  to={s.to}
                  className="bg-background p-6 h-full block hover:bg-primary group transition-colors"
                >
                  <s.icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-primary font-heading mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed group-hover:text-white/70 transition-colors">
                    {s.text}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Execution framework</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              How an engagement runs
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {process.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="bg-background p-6 h-full border-t-2 border-accent">
                  <p className="text-xs font-semibold text-accent tracking-widest mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p.icon className="h-5 w-5 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-primary font-heading mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SITE TYPES */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              Sites where security is an operational requirement
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {siteTypes.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <div className="border border-border bg-background p-8 h-full">
                  <s.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary font-heading mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>What you receive</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-10 max-w-3xl">
              Every assessment ends in documentation
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
            {deliverables.map((d, i) => (
              <AnimatedSection key={d.text} delay={i * 0.05}>
                <div className="bg-section-dark p-6 h-full flex flex-col gap-4">
                  <d.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <p className="text-sm text-white/75 leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-8">
              Frequently asked
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* FORM */}
      <section id="assessment-form" className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Request an assessment</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              Start with a documented site assessment
            </h2>
            <p className="text-secondary mb-10 max-w-2xl">
              Share your details and our team will contact you shortly to schedule a structured
              site walkthrough.
            </p>
            <SimpleLeadForm submitLabel="Request a Security Assessment" />
          </AnimatedSection>
        </div>
      </section>

      {/* COVERAGE + FINAL CTA */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
                GuardX360 serves gated communities and infrastructure in Hyderabad.
              </h2>
              <p className="text-white/60 leading-relaxed">
                Customers across Telangana and Andhra Pradesh, supported by a locally based team.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border border-white/15 p-8">
                <ul className="space-y-4 mb-8">
                  {["One point of contact", "Documented networks", "Preventive maintenance"].map(
                    (t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                        <span className="text-white/85 text-sm">{t}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
                >
                  Request a Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityAsAStandard;
