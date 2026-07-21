import { Link } from "react-router-dom";
import { ArrowRight, Shield, MapPin, CheckCircle2, Wrench, Camera, Car, Fingerprint, Zap, ScanLine, ClipboardCheck, ShieldCheck, Network, Cable, FileText, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const trustPoints = [
  { icon: ShieldCheck, text: "Transparency & visibility of the service" },
  { icon: Shield, text: "YEARS OF SECURITY INDUSTRY EXPERIENCE" },
  { icon: CheckCircle2, text: "One vendor. One accountability. End-to-end." },
  { icon: Wrench, text: "AMC support with preventive maintenance & priority response" },
];

const services = [
  { icon: Camera, title: "CCTV Surveillance", path: "/services/cctv-surveillance" },
  { icon: Car, title: "Boom Barrier & Vehicle Access", path: "/services/boom-barrier-vehicle-access" },
  { icon: Fingerprint, title: "Biometric & Access Control", path: "/services/biometric-access-control" },
  { icon: Zap, title: "Solar Fencing", path: "/services/solar-fencing" },
  { icon: ScanLine, title: "ANPR & UHF Vehicle Access", path: "/services/anpr-uhf-vehicle-access" },
  { icon: Wrench, title: "Annual Maintenance Contracts", path: "/services/annual-maintenance-contracts" },
  { icon: ClipboardCheck, title: "Assessment & Modernization", path: "/services/security-assessment-modernization" },
  { icon: ShieldCheck, title: "Security Health Score", path: "/services/security-health-score" },
];

const failurePoints = [
  { icon: Network, text: "Incorrect network and switch design" },
  { icon: Cable, text: "Poor-quality cabling, connectors and power arrangements" },
  { icon: FileText, text: "No camera-to-switch mapping or documentation" },
  { icon: Server, text: "Equipment added without considering network capacity" },
  { icon: Users, text: "Multiple vendors with nobody taking complete responsibility" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-section-dark py-12 md:py-16 flex items-center min-h-[420px] md:min-h-[480px]">
        <div className="container-narrow w-full min-w-0">
          <div className="max-w-4xl min-w-0">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-6">
              Gated Community Security Infrastructure • Hyderabad
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading break-words">
              Security Infrastructure That Keeps Gated Communities Operational
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-10 leading-relaxed">
              GuardX360 audits, designs, implements and maintains CCTV, access control, boom barriers and perimeter security—with documented networks, accountable service and one point of contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6 sm:px-8 py-6 font-semibold uppercase tracking-wide h-auto whitespace-normal text-center">
                <Link to="/contact">
                  Request a Community Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-primary text-base px-6 sm:px-8 py-6 font-medium h-auto whitespace-normal text-center">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-background border-b border-border">
        <div className="container-narrow py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* STATS */}
      <section className="bg-background section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-accent font-heading mb-2">10+</p>
                <p className="text-sm uppercase tracking-wide text-secondary font-medium">
                  Years of Security Industry Experience
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-accent font-heading mb-2">1,000+</p>
                <p className="text-sm uppercase tracking-wide text-secondary font-medium">
                  Customers Served Across Telangana & Andhra Pradesh
                </p>
              </div>
            </AnimatedSection>
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

      {/* WHY SECURITY SYSTEMS FAIL */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Common Failure Points
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                Why Security Systems Fail After Installation
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-10">
            {failurePoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-12 w-12 rounded-full border border-accent bg-accent flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs uppercase tracking-wide text-secondary leading-relaxed font-medium">
                    {point.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-center text-lg md:text-xl font-semibold text-primary max-w-3xl mx-auto">
              GuardX360 solves the entire infrastructure—not just the faulty camera.
            </p>
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
              <AnimatedSection key={s.path} delay={i * 0.05}>
                <Link
                  to={s.path}
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
                  Request a Community Security Assessment
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
