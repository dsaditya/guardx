import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Wrench, MessageSquare, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const caseStudyFormat = [
  { icon: Building2, label: "Community profile: type, size, and location" },
  { icon: ClipboardCheck, label: "Before: starting Security Health Score and key gaps identified" },
  { icon: TrendingUp, label: "Challenges: specific incidents, complaints, or vendor issues" },
  { icon: Wrench, label: "Solution: integrated GuardX360 systems designed and installed" },
  { icon: TrendingUp, label: "After: updated Security Health Score and measurable outcomes" },
  { icon: MessageSquare, label: "Resident and committee feedback" },
];

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Gated Community Security Case Studies — Before vs After Transformations"
        subtitle="Every GuardX360 project starts with a Security Health Score and ends with a measurable improvement in it."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-4xl mb-12">
              <p className="text-xs text-secondary uppercase tracking-wide mb-6 leading-relaxed" aria-label="Primary keywords">
                Gated community security case study Hyderabad · Security system transformation apartment complex · Before after CCTV upgrade
              </p>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                This page documents real before-and-after transformations across apartment complexes,
                villa communities, and residential townships — showing the gaps identified, the
                integrated infrastructure installed, and the outcome for residents and committees.
              </p>
            </div>
          </AnimatedSection>

          {/* Case study format */}
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Case Study Format
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-heading">
                How every GuardX360 case study is structured
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {caseStudyFormat.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-section-alt border border-border p-5">
                  <f.icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-foreground text-sm leading-relaxed">{f.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Placeholder card */}
          <AnimatedSection>
            <div className="bg-section-dark p-8 md:p-12 border border-border text-center">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
                Documented Case Studies Coming Soon
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading">
                We publish case studies only with client consent.
              </h3>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Request a case study specific to your community type — apartment complex, villa
                community, or residential township — and our team will share relevant transformation
                examples during your consultation.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide">
                <Link to="/contact">
                  Request a Case Study Relevant to Your Community Type
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Our Clients
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                Communities & organizations that trust GuardX360
              </h2>
              <p className="text-secondary text-base max-w-2xl mx-auto">
                Client logos will appear here — apartment complexes, villa communities, and
                residential townships across Hyderabad, Telangana, and Andhra Pradesh.
              </p>
            </div>
          </AnimatedSection>

          {/* Logo grid placeholder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="aspect-[3/2] bg-background border border-border flex items-center justify-center">
                  <span className="text-secondary/40 text-xs uppercase tracking-widest">
                    Client {i + 1}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
