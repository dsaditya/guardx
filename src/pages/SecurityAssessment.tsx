import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  ParkingCircle,
  Fingerprint,
  Sun,
  ScanLine,
  Wrench,
  ClipboardCheck,
  Search,
  FileText,
  Layers,
  ShieldCheck,
  Map,
  ListChecks,
  Route,
  Footprints,
  FileCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { useSEO } from "@/hooks/use-seo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const stats = [
  { value: "10+ Years", label: "Team Experience (as briefed)" },
  { value: "10,000+", label: "Homes & Communities Served (as briefed)" },
  { value: "Dual Sector", label: "Gated Communities + Industrial Sites" },
  { value: "Hyderabad", label: "Locally Based" },
];

const concerns = [
  "What if our system is failing silently?",
  "What if recurring issues are structural?",
  "What if we are overspending on temporary fixes?",
  "What if no one has audited the full system?",
  "What if the real problem hasn't been identified?",
];

const deliverables = [
  { icon: Search, text: "Structured diagnostic review" },
  { icon: Wrench, text: "One-time structural correction" },
  { icon: Layers, text: "System-level assessment" },
  { icon: FileText, text: "Documentation transparency" },
  { icon: ShieldCheck, text: "Independent technical evaluation" },
];

const services = [
  { icon: Camera, title: "CCTV Surveillance" },
  { icon: ParkingCircle, title: "Boom Barrier & Vehicle Access" },
  { icon: Fingerprint, title: "Biometric & Access Control" },
  { icon: Sun, title: "Solar Fencing" },
  { icon: ScanLine, title: "ANPR & UHF Vehicle Access" },
  { icon: Wrench, title: "Annual Maintenance Contracts" },
  { icon: ClipboardCheck, title: "Security Assessment & Modernization" },
];

const projectIncludes = [
  { icon: Route, text: "Defined execution roadmap" },
  { icon: ListChecks, text: "Testing and commissioning checklist" },
  { icon: FileCheck, text: "Formal documentation" },
  { icon: Footprints, text: "Structured site walkthrough" },
  { icon: ClipboardCheck, text: "Clear scope confirmation" },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-secondary uppercase tracking-wide mb-4 leading-relaxed">
    {children}
  </p>
);

const SecurityAssessment = () => {
  const [open, setOpen] = useState(false);

  useSEO({
    title: "Security Assessment for Gated Communities & Industrial Sites | GuardX360",
    description:
      "Independent security assessment in Hyderabad — CCTV, boom barriers, ANPR, biometric access and perimeter security audited, designed, installed and maintained by GuardX360.",
  });

  const cta = (
    <Button
      size="lg"
      onClick={() => setOpen(true)}
      className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold uppercase tracking-wide"
    >
      Request a Security Assessment
    </Button>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-section-dark py-12 md:py-16">
        <div className="container-narrow">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Gated community &amp; industrial security · Hyderabad
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
              Reliable Security Systems for Gated Communities &amp; Industrial Sites
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mb-8">
              GuardX360 audits, designs, installs and maintains CCTV, boom barriers, ANPR,
              biometric access and perimeter security for gated communities in Hyderabad — with a
              focus on reliability, preventive maintenance, and disciplined execution.
            </p>
            {cta}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-12">
            {stats.map((s) => (
              <div key={s.value} className="bg-section-dark p-6">
                <p className="text-2xl md:text-3xl font-bold text-accent font-heading mb-2">
                  {s.value}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns We Address */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionLabel>
              Quoted directly from the "Fears" column of your funnel research (New / Acquisition
              stage).
            </SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-heading">
              Concerns We Address
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns.map((q, i) => (
              <AnimatedSection key={q} delay={i * 0.05}>
                <div className="bg-section-alt border border-border p-6 h-full">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                    From research doc
                  </span>
                  <p className="text-foreground text-base leading-relaxed mt-3">{q}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionLabel>
              Quoted directly from the "Needs" column of your funnel research (New / Acquisition
              stage).
            </SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-heading">
              What We Deliver
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverables.map((d, i) => (
              <AnimatedSection key={d.text} delay={i * 0.05}>
                <div className="bg-background border border-border p-6 h-full">
                  <div className="bg-accent p-3 w-fit mb-4">
                    <d.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionLabel>Exactly as listed in your approved content-buckets document.</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-heading">
              Services
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <div className="bg-section-alt border border-border p-6 h-full flex items-start gap-4">
                  <div className="bg-primary p-3">
                    <s.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-primary font-heading leading-snug">
                    {s.title}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Project Includes */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionLabel>
              Quoted directly from the "Needs" column of your funnel research (Qualified / Site
              Visit stage).
            </SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-heading">
              What Every Project Includes
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {projectIncludes.map((p, i) => (
              <AnimatedSection key={p.text} delay={i * 0.05}>
                <div className="bg-background border border-border p-6 h-full">
                  <div className="bg-accent p-3 w-fit mb-4">
                    <p.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionLabel>As published on the GuardX360 website.</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-heading">
              Coverage
            </h2>
            <div className="bg-section-alt border border-border p-8 flex items-start gap-4 max-w-3xl">
              <Map className="h-6 w-6 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-foreground text-lg leading-relaxed">
                  GuardX360 serves gated communities and industrial sites in Hyderabad.
                </p>
                <span className="inline-block mt-4 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  From guardx360.com
                </span>
              </div>
            </div>
            <div className="mt-10">{cta}</div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
            Ready to assess your site?
          </h2>
          <div className="flex justify-center">{cta}</div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary font-heading">
              Request a Security Assessment
            </DialogTitle>
            <DialogDescription className="text-secondary">
              Share your site's requirements. A GuardX360 engineer will respond within 24 hours on
              working days.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <LeadForm showEmail submitLabel="Submit Request" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecurityAssessment;
