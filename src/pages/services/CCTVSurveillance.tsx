import ServicePage from "@/components/ServicePage";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import serviceImage from "@/assets/services/cctv-surveillance.jpg";

const relatedReading = [
  {
    to: "/knowledge-center/blog/gated-community-security-systems-5-layers",
    label: "Gated Community Security Systems — Why One Layer Isn't Enough",
  },
  {
    to: "/knowledge-center/blog/annual-maintenance-contract-why-security-service-should-not-depend-on-one-technician",
    label: "Why Security Service Should Not Depend on One Technician",
  },
  {
    to: "/knowledge-center/blog/integrated-security-solutions-gated-community-security-one-system",
    label: "Why Gated Community Security Works Best as One Integrated System",
  },
];

const CCTVSurveillance = () => (
  <ServicePage
    seoTitle="CCTV Camera Installation Hyderabad | CCTV Surveillance Systems | GuardX360"
    seoDescription="CCTV camera installation, design and AMC for gated communities across Hyderabad and surrounding areas. Full perimeter coverage, remote access, verified recording continuity."
    eyebrow="Service 01"
    title="CCTV Surveillance Systems"
    description="High-definition IP surveillance designed around your site — not sold from a catalogue."
    image={serviceImage}
    imageAlt="Dome CCTV camera mounted on an exterior wall"
    intro="A CCTV system is only as reliable as the quality of its design and the consistency of its maintenance. A camera at the wrong angle, a recorder with insufficient storage or a network dropping frames under load will all fail at the moment the footage matters most."
    bullets={[
      "Site assessment covering coverage requirements, entry and exit points, lighting conditions and blind spots before any camera is specified.",
      "High-definition IP camera system with full perimeter coverage, remote access, motion alerts and defined storage retention.",
      "Quarterly preventive maintenance under AMC: dome cleaning, recording continuity checks, hard drive health, firmware updates and performance review.",
      "Diagnostic audits and remediation for underperforming CCTV systems installed by other vendors.",
    ]}
    afterContent={
      <section className="section-padding bg-background border-t border-border">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                CCTV Camera Installation Hyderabad
              </h2>
              <p className="text-secondary leading-relaxed">
                We handle CCTV camera installation for gated communities across Hyderabad and
                surrounding areas — apartment complexes, villa communities and townships. If you are
                searching for CCTV installation near me, the practical question is not which brand of
                camera, but who designs the network, documents the cabling and stays accountable for
                recording continuity afterwards.
              </p>
              <p className="text-secondary leading-relaxed">
                Every installation is delivered with a camera-to-switch map, labelled cabling and a
                written handover, so the next engineer on site is not starting from guesswork.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="mt-12 border border-border p-6 bg-section-alt max-w-3xl">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 font-heading">
                Related reading
              </h3>
              <ul className="space-y-3">
                {relatedReading.map((r) => (
                  <li key={r.to} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 bg-accent flex-shrink-0" />
                    <Link to={r.to} className="text-secondary hover:text-primary underline">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    }
  />
);

export default CCTVSurveillance;
