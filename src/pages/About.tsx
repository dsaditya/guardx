import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const approachStages = [
  {
    title: "Security Infrastructure Assessment",
    body: "We assess your community's current security systems, identify vulnerabilities, and recommend solutions before proposing anything.",
  },
  {
    title: "Integrated Solution Design",
    body: "We design security infrastructure around your community's actual requirements — entry points, perimeter, resident movement, vehicle flow, and operational constraints — not around a product catalog.",
  },
  {
    title: "End-to-End Implementation",
    body: "We supply, install, commission, test, and document every system we deploy. Handover includes complete system documentation, equipment inventory, and operational training.",
  },
  {
    title: "Long-Term Maintenance & Accountability",
    body: "Through AMC programs, preventive maintenance, modernization projects, and lifecycle support, we remain your long-term security infrastructure partner — not a one-time installer.",
  },
];

const trustPoints = [
  "10 years of industry experience across security systems and community projects",
  "1,000+ customers served across Hyderabad, Telangana, and Andhra Pradesh",
  "Exclusive focus on gated community security infrastructure",
  "One vendor. One point of accountability across design, installation, and maintenance",
  "Structured AMC programs with defined maintenance schedules and response commitments",
  "Full system documentation provided on every project",
  "Transparent Security Health Score benchmarking on every assessment",
  "Proven, documented case studies of community security transformations",
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About GuardX360"
        title="Built Around One Belief: Security Is a System, Not a Collection of Products."
      />

      {/* Founding story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-4xl space-y-5 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                GuardX360 was established on 13 February 2026 with a single, focused mission —
                to bring structure, accountability, and standardization to security infrastructure
                in gated communities.
              </p>
              <p>
                The founding team behind GuardX360 brings nearly a decade of experience in the
                security systems industry, having previously designed, installed, and maintained
                security solutions across residential communities, commercial buildings, warehouses,
                hotels, industrial facilities, and infrastructure projects — serving over 1,000
                customers across multiple security technologies.
              </p>
              <p>
                Through that experience, one problem kept showing up across gated communities:
                communities were managing multiple vendors, dealing with inconsistent maintenance,
                facing frequent breakdowns, and operating security systems that worked independently
                rather than as an integrated infrastructure.
              </p>
              <p className="text-primary font-medium text-xl">
                Products were being sold. Security was not being built.
              </p>
              <p>GuardX360 was created to change that.</p>
              <p>
                We specialize exclusively in gated community security infrastructure — apartment
                communities, villa communities, and residential townships — and we deliver integrated
                solutions that combine CCTV surveillance, boom barriers, biometric access control,
                ANPR, UHF vehicle access, and solar fencing into one reliable, documented, and
                maintained security ecosystem.
              </p>
              <p className="text-primary font-semibold">
                We call this Security as a Standard™.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder's Say */}
      <section id="founders-say" className="section-padding bg-section-alt scroll-mt-24">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-4xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Founder's Say
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading leading-tight">
                Why We Started GuardX360
              </h2>
              <div className="space-y-5 text-secondary text-base md:text-lg leading-relaxed border-l-2 border-accent pl-6 md:pl-8">
                <p>
                  GuardX360 was founded by professionals who spent years on the ground installing
                  and maintaining security systems, watching the same pattern repeat at community
                  after community: good equipment, poor coordination. A camera vendor unaware of
                  what the access control vendor had installed. A boom barrier that broke down
                  because nobody owned the maintenance schedule. Committees stuck making calls to
                  three or four different companies every time something went wrong.
                </p>
                <p>
                  That gap — between individual products and a genuinely integrated system —
                  became the founding idea behind GuardX360. Rather than adding another vendor
                  to the list, the founders set out to build a single, standardized infrastructure
                  model that gated communities could rely on for the long term, backed by one
                  team, one documentation standard, and one point of accountability.
                </p>
                <p className="text-primary font-semibold">
                  That founding idea is what GuardX360 calls Security as a Standard™ today.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section id="our-approach" className="section-padding bg-background scroll-mt-24">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                The GuardX360 Standardization Framework
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {approachStages.map((stage, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-section-alt border border-border p-6 md:p-8 h-full">
                  <span className="text-4xl font-bold text-primary/20 font-heading block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide font-heading">
                    {stage.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{stage.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-4xl text-secondary text-base md:text-lg leading-relaxed">
              <p>
                What ties these four stages together is a single Standardization Framework:
                the same assessment method, the same design principles, the same documentation
                format, and the same maintenance benchmarks on every project. It is this framework
                — not any one product — that GuardX360 sells, and it is what allows every community,
                regardless of size, to expect the same standard of delivery and accountability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why communities trust GuardX360 */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Trust
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
                Why Communities Trust GuardX360
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {trustPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-5">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide">
              <Link to="/contact">
                Request a Free Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
