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
  Layers,
  Route,
  ListChecks,
  FileCheck,
  Footprints,
  Map,
  Check,
  X,
  Building2,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SimpleLeadForm from "@/components/SimpleLeadForm";
import { useSEO } from "@/hooks/use-seo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/lp/gated-entrance.jpg";
import rackImage from "@/assets/lp/network-rack.jpg";
import founderAsset from "@/assets/guardx360-founder.png.asset.json";

const trustStats = [
  { value: "10+ Years", label: "Security industry experience" },
  { value: "1,000+", label: "Customers served across Telangana & Andhra Pradesh" },
  { value: "Dual Sector", label: "Gated communities + industrial sites" },
  { value: "Hyderabad", label: "Locally based team" },
];

const problems = [
  { icon: Network, text: "Incorrect network and switch design" },
  { icon: Cable, text: "Poor-quality cabling, connectors and power arrangements" },
  { icon: FileText, text: "No camera-to-switch mapping or documentation" },
  { icon: Server, text: "Equipment added without considering network capacity" },
  { icon: Users, text: "Multiple vendors with nobody taking complete responsibility" },
];

const layers = [
  {
    n: "01",
    title: "Perimeter",
    text: "Solar fencing and boundary protection that defines where the site starts.",
    to: "/services/solar-fencing",
  },
  {
    n: "02",
    title: "Vehicle Access",
    text: "Boom barriers, ANPR and UHF readers controlling every vehicle entry and exit.",
    to: "/services/anpr-uhf-vehicle-access",
  },
  {
    n: "03",
    title: "People Access",
    text: "Biometric and card-based access control for gates, clubhouse and utility areas.",
    to: "/services/biometric-access-control",
  },
  {
    n: "04",
    title: "Surveillance",
    text: "CCTV coverage designed around actual entry points, blind spots and lighting.",
    to: "/services/cctv-surveillance",
  },
  {
    n: "05",
    title: "Maintenance",
    text: "Preventive maintenance and priority response so the system stays operational.",
    to: "/services/annual-maintenance-contracts",
  },
];

const comparison = [
  { point: "Ownership", traditional: "Multiple vendors, split responsibility", gx: "One vendor, one point of accountability" },
  { point: "Design", traditional: "Devices added as budget allows", gx: "Audit first, then a documented design" },
  { point: "Network", traditional: "Switches and cabling chosen by cost", gx: "Network capacity engineered for the load" },
  { point: "Documentation", traditional: "No mapping or as-built records", gx: "Camera-to-switch mapping and formal handover" },
  { point: "Support", traditional: "Reactive call-outs after failure", gx: "Preventive maintenance with defined scope" },
];

const healthAreas = [
  "Surveillance coverage",
  "Vehicle access control",
  "People access control",
  "Perimeter protection",
  "Network & power",
  "Documentation & maintenance",
];

const process = [
  { icon: Footprints, title: "Site walkthrough", text: "Structured walkthrough of gates, perimeter and technical rooms." },
  { icon: Search, title: "Diagnostic review", text: "System-level review of what exists and what is failing." },
  { icon: FileText, title: "Findings report", text: "Documented findings with an independent technical evaluation." },
  { icon: Route, title: "Execution roadmap", text: "Defined scope, sequence and priorities agreed before work starts." },
  { icon: Wrench, title: "Implementation & AMC", text: "Commissioning, formal documentation and ongoing maintenance." },
];

const solutions = [
  { icon: Camera, title: "CCTV Surveillance", to: "/services/cctv-surveillance" },
  { icon: Car, title: "Boom Barrier & Vehicle Access", to: "/services/boom-barrier-vehicle-access" },
  { icon: Fingerprint, title: "Biometric & Access Control", to: "/services/biometric-access-control" },
  { icon: Zap, title: "Solar Fencing", to: "/services/solar-fencing" },
  { icon: ScanLine, title: "ANPR & UHF Vehicle Access", to: "/services/anpr-uhf-vehicle-access" },
  { icon: Wrench, title: "Annual Maintenance Contracts", to: "/services/annual-maintenance-contracts" },
  { icon: ClipboardCheck, title: "Assessment & Modernization", to: "/services/security-assessment-modernization" },
  { icon: ShieldCheck, title: "Security Health Score", to: "/services/security-health-score" },
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

const faqs = [
  {
    q: "Do you work only with systems you installed?",
    a: "No. We maintain what matters — whether we installed it or not. If a community already has equipment in place, we can assess it and take it under an AMC.",
  },
  {
    q: "What happens during a security assessment?",
    a: "A structured site walkthrough, a system-level diagnostic review, and a documented set of findings with a defined execution roadmap. Any additional work or scope changes are discussed and approved before execution.",
  },
  {
    q: "What does a standard service visit cover?",
    a: "Standard service visits are structured to cover professional diagnosis and basic issue rectification within a defined service window, planned to ensure effective diagnosis and clear next steps.",
  },
  {
    q: "Which areas do you serve?",
    a: "GuardX360 serves gated communities and infrastructure in Hyderabad, with customers across Telangana and Andhra Pradesh.",
  },
  {
    q: "Do you handle both gated communities and industrial sites?",
    a: "Yes. We work with gated communities as well as high-risk industrial locations such as crusher and mining sites with controlled entry points and heavy vehicle movement.",
  },
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-4">{children}</p>
);

const GatedCommunitySecurityHyderabad = () => {
  const [open, setOpen] = useState(false);

  useSEO({
    title: "Security Infrastructure for Gated Communities in Hyderabad | GuardX360",
    description:
      "GuardX360 audits, designs and maintains integrated security infrastructure for gated communities in Hyderabad — CCTV, access control, ANPR, boom barriers, solar fencing and AMC.",
  });

  const primaryCta = (
    <Button
      size="lg"
      onClick={() => setOpen(true)}
      className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
    >
      Request a Security Assessment
      <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
    </Button>
  );

  const secondaryCta = (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
    >
      <Link to="/services/security-health-score">Get Your Community Security Score</Link>
    </Button>
  );

  return (
    <>
      {/* HERO */}
      <section className="relative bg-section-dark">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gated community entrance with boom barrier and ANPR camera at dusk in Hyderabad"
            className="w-full h-full object-cover"
            width={1600}
            height={1000}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />
        </div>
        <div className="container-narrow relative py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
                Gated Community Security Infrastructure • Hyderabad
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
                Security Infrastructure for Gated Communities in Hyderabad
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
                GuardX360 audits, designs, implements and maintains CCTV, access control, ANPR,
                boom barriers, solar fencing and perimeter security — with documented networks,
                accountable service and one point of contact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCta}
                {secondaryCta}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-white/15 bg-black/50 p-8">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-6">
                  What the assessment covers
                </p>
                <ul className="space-y-4">
                  {healthAreas.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="text-white/85 text-sm leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS ROW */}
      <section className="bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {trustStats.map((s) => (
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

      {/* PROBLEMS */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>The problem</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              Why security systems fail after installation
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={p.text} delay={i * 0.05}>
                <div className="border border-border p-6 h-full">
                  <div className="bg-accent p-3 w-fit mb-4">
                    <p.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5-LAYER STANDARD */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>The framework</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10 max-w-3xl">
              The 5-Layer Security Standard
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {layers.map((l, i) => (
              <AnimatedSection key={l.n} delay={i * 0.05}>
                <Link
                  to={l.to}
                  className="bg-background p-6 h-full block hover:bg-primary group transition-colors"
                >
                  <p className="text-accent font-heading font-bold text-lg mb-3">{l.n}</p>
                  <h3 className="text-base font-semibold text-primary font-heading mb-2 group-hover:text-white transition-colors">
                    {l.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed group-hover:text-white/70 transition-colors">
                    {l.text}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>The difference</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Traditional vendor vs GuardX360
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border border-border overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="p-4 text-xs uppercase tracking-widest text-white/60 font-medium">
                      Area
                    </th>
                    <th className="p-4 text-xs uppercase tracking-widest text-white/60 font-medium">
                      Traditional vendor
                    </th>
                    <th className="p-4 text-xs uppercase tracking-widest text-accent font-medium">
                      GuardX360
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.point} className="border-t border-border">
                      <td className="p-4 text-sm font-semibold text-primary align-top">{r.point}</td>
                      <td className="p-4 text-sm text-secondary align-top">
                        <span className="flex gap-2">
                          <X className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          {r.traditional}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-foreground align-top bg-section-alt">
                        <span className="flex gap-2">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          {r.gx}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECURITY HEALTH SCORE */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Label>Security Health Score</Label>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-6">
                Know where your community stands
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                A structured evaluation of your existing security systems across six areas. It
                shows what is working, what is failing silently, and what needs correction first.
              </p>
              {secondaryCta}
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="border border-white/15 bg-black/40 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                  {healthAreas.map((a) => (
                    <div key={a} className="bg-section-dark p-5">
                      <p className="text-xs uppercase tracking-wide text-white/60 mb-2">{a}</p>
                      <div className="h-1 bg-white/10">
                        <div className="h-1 bg-accent w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-6 leading-relaxed">
                  Illustrative dashboard. Actual scoring is based on your site assessment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>Assessment process</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              How the assessment runs
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {process.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <div className="bg-background p-6 h-full border-t-2 border-accent">
                  <s.icon className="h-5 w-5 text-accent mb-4" strokeWidth={1.5} />
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">
                    Step {i + 1}
                  </p>
                  <h3 className="text-base font-semibold text-primary font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATED SOLUTIONS */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>Integrated solutions</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Systems we handle
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.04}>
                <Link
                  to={s.to}
                  className="bg-background border border-border p-6 h-full flex items-start gap-4 hover:border-accent transition-colors group"
                >
                  <div className="bg-primary p-3 group-hover:bg-accent transition-colors">
                    <s.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-primary font-heading leading-snug">
                    {s.title}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>Where we work</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Sites we secure
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="border border-border p-8 h-full">
                <Building2 className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-primary font-heading mb-3">
                  Gated communities
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  Entry gates, clubhouse and common areas, perimeter and visitor movement — designed
                  as one system with a single point of accountability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="border border-border p-8 h-full">
                <Factory className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-primary font-heading mb-3">
                  Crusher & mining sites
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  High-risk industrial locations with controlled entry points, heavy vehicle
                  movement, and critical security requirements.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="mt-8">
              <Link
                to="/case-studies"
                className="text-sm font-semibold uppercase tracking-wide text-accent inline-flex items-center gap-2"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ENGINEERING STANDARDS */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={rackImage}
                alt="Network rack with PoE switches and labelled cabling for a CCTV system"
                className="w-full h-full object-cover"
                width={1400}
                height={1000}
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <Label>Engineering standards</Label>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-8">
                The network decides whether the system works
              </h2>
              <ul className="space-y-5">
                {standards.map((s) => (
                  <li key={s.text} className="flex items-start gap-4">
                    <s.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-white/75 text-sm leading-relaxed">{s.text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>What you receive</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Customer deliverables
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverables.map((d, i) => (
              <AnimatedSection key={d.text} delay={i * 0.05}>
                <div className="border border-border p-6 h-full">
                  <div className="bg-accent p-3 w-fit mb-4">
                    <d.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <AnimatedSection>
              <div className="lg:col-span-4">
                <img
                  src={founderAsset.url}
                  alt="Founder of GuardX360"
                  className="w-full max-w-sm object-cover"
                  width={772}
                  height={771}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="lg:col-span-8">
                <Label>Founder story</Label>
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-6">
                  Built by people who service what they install
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  GuardX360 was started in Hyderabad after seeing the same pattern repeat across
                  communities: systems installed quickly, documented poorly, and abandoned once the
                  invoice was paid.
                </p>
                <p className="text-secondary leading-relaxed">
                  The response was to build a security engineering practice instead of a supply
                  business — audit first, design for the network, document the work, and stay
                  accountable through maintenance. We maintain what matters, whether we installed
                  it or not.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>FAQ</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Frequently asked questions
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="max-w-3xl border-t border-border">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-primary font-heading">
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

      {/* LEAD FORM */}
      <section className="section-padding bg-section-alt" id="assessment-form">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>Start here</Label>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-8">
              Request a security assessment
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="max-w-3xl bg-background border border-border p-6 md:p-8">
              <SimpleLeadForm submitLabel="Request a Security Assessment" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Label>Coverage</Label>
            <div className="border border-border p-8 flex items-start gap-4 max-w-3xl">
              <Map className="h-6 w-6 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
              <p className="text-foreground text-lg leading-relaxed">
                GuardX360 serves gated communities and infrastructure in Hyderabad, with customers
                across Telangana and Andhra Pradesh.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-8">
            Ready to assess your community?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta}
            {secondaryCta}
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary font-heading">
              Request a Security Assessment
            </DialogTitle>
            <DialogDescription className="text-secondary">
              Share your details and a GuardX360 engineer will get in touch.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <SimpleLeadForm submitLabel="Request a Security Assessment" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GatedCommunitySecurityHyderabad;
