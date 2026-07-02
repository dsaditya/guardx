import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const partnerTracks = [
  { icon: Users, title: "Join Our Team", body: "Field engineers, project managers, and AMC technicians who take pride in disciplined, documented security delivery." },
  { icon: Handshake, title: "Become Our Channel Partner", body: "Facility management companies, RWAs, and consultants looking to offer standardized security infrastructure to their communities." },
  { icon: Building, title: "Become a Dealer", body: "Regional partners across Telangana and Andhra Pradesh interested in representing GuardX360's integrated security systems." },
];

const PartnerWithUs = () => {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Build the standard for gated community security — with us."
        subtitle="GuardX360 works with the right people to expand our standardized security infrastructure model across Hyderabad and beyond."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {partnerTracks.map((track, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-section-alt border border-border p-6 md:p-8 h-full">
                  <track.icon className="h-6 w-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide font-heading">
                    {track.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{track.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-section-dark p-8 md:p-12 border border-border text-center">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
                Partner Content Coming Soon
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                Detailed partner information is being finalized.
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                In the meantime, reach out to the GuardX360 team directly to discuss employment,
                channel partnership, or dealership opportunities.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
