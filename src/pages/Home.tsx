import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, MapPin, CheckCircle2, Wrench, Camera, Car, Fingerprint, Zap, ScanLine, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const trustPoints = [
  { icon: ShieldCheck, text: "Transparency & visibility of the service" },
  { icon: Shield, text: "10+ years of security industry experience" },
  { icon: Users, text: "1,000+ customers served across Telangana & Andhra Pradesh" },
  { icon: CheckCircle2, text: "One vendor. One accountability. End-to-end." },
  { icon: Wrench, text: "AMC support with preventive maintenance & priority response" },
];

const services = [
  { icon: Camera, title: "CCTV Surveillance", hash: "cctv" },
  { icon: Car, title: "Boom Barrier & Vehicle Access", hash: "boom-barrier" },
  { icon: Fingerprint, title: "Biometric & Access Control", hash: "biometric" },
  { icon: Zap, title: "Solar Fencing", hash: "solar-fencing" },
  { icon: ScanLine, title: "ANPR & UHF Vehicle Access", hash: "anpr-uhf" },
  { icon: Wrench, title: "Annual Maintenance Contracts", hash: "amc" },
  { icon: ClipboardCheck, title: "Assessment & Modernization", hash: "assessment" },
  { icon: ShieldCheck, title: "Annual Security Audit", hash: "audit" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-section-dark py-16 md:py-24 flex items-center min-h-[520px] md:min-h-[600px]">
        <div className="container-hero">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-6">
              Gated Community Security Infrastructure • Hyderabad
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Security systems that work when they're needed most.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-10 leading-relaxed">
              GuardX360 designs, implements, and maintains complete security systems —
              CCTV surveillance, boom barriers, UHF reader, ANPR camera, biometric access
              control, and solar fencing — built as one reliable infrastructure for your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold uppercase tracking-wide">
                <Link to="/contact">
                  Request a Free Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-primary text-base px-8 py-6 font-medium">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-background border-b border-border">
        <div className="container-narrow py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3">
                  <point.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-xs uppercase tracking-wide text-secondary leading-relaxed font-medium">
                    {point.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Why GuardX360 Exists
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading leading-tight">
                Most gated communities deal with the same frustrating reality.
              </h2>
              <div className="space-y-5 text-secondary text-base md:text-lg leading-relaxed">
                <p>
                  CCTV from one vendor, boom barriers from another, biometric access from a third,
                  and no single point of accountability when something breaks down.
                </p>
                <p className="text-primary font-medium">
                  GuardX360 was built to solve exactly this problem.
                </p>
                <p>
                  We specialize exclusively in gated community security infrastructure. Every
                  solution we deliver combines surveillance, perimeter protection, vehicle access
                  management, and people access control into one integrated, maintainable system
                  — designed around your community's specific requirements.
                </p>
                <p>
                  We call this approach <span className="text-primary font-semibold">Security as a Standard™</span>.
                </p>
                <p>
                  It is not about selling you equipment. It is about building security infrastructure
                  that is reliable, documented, and supported for the long term.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                What We Handle
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                One integrated security infrastructure. Eight capabilities.
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Every component designed, installed and maintained by the same accountable team.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.hash} delay={i * 0.05}>
                <Link
                  to={`/services#${s.hash}`}
                  className="flex flex-col gap-3 p-5 bg-section-alt border border-border h-full hover:border-primary transition-colors group"
                >
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="font-semibold text-primary text-sm uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <span className="text-xs text-accent uppercase tracking-wide mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Security as a Standard™
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto font-heading">
              Start with a free Security Health Score for your community.
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              An on-site engineer will assess your existing systems and give you a data-backed
              rating across six parameters — no obligation, no sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold uppercase tracking-wide">
                <Link to="/contact">
                  Request a Free Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-primary text-base px-8 py-6 font-medium">
                <Link to="/why-guardx360">Why GuardX360</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-8">
              <MapPin className="h-4 w-4" />
              <span>Serving apartment complexes, villa communities & townships across Hyderabad</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
