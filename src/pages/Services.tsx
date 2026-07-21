import { Link } from "react-router-dom";
import { ArrowRight, Camera, Car, Fingerprint, Zap, ScanLine, Wrench, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const slugMap: Record<string, string> = {
  cctv: "cctv-surveillance",
  "boom-barrier": "boom-barrier-vehicle-access",
  biometric: "biometric-access-control",
  "solar-fencing": "solar-fencing",
  "anpr-uhf": "anpr-uhf-vehicle-access",
  amc: "annual-maintenance-contracts",
  assessment: "security-assessment-modernization",
  audit: "security-health-score",
};

const services = [
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV Surveillance Systems",
    keywords: "CCTV installation Hyderabad · CCTV for gated community Hyderabad · IP camera installation apartment complex",
    paragraphs: [
      "A CCTV system is only as reliable as the quality of its design and the consistency of its maintenance. A camera positioned at the wrong angle, a recorder with insufficient storage, or a network dropping frames under load will all fail you at the exact moment you need the system most.",
      "GuardX360 begins every CCTV project with a thorough site assessment. We identify coverage requirements, entry and exit points, lighting conditions, and blind spots before a single camera is specified. We then design a high-definition IP camera system built for full perimeter coverage, configure remote access and motion alerts, and set storage retention periods that meet your community's security policy.",
      "Post-installation, our AMC program includes quarterly preventive maintenance visits covering camera dome cleaning, recording continuity verification, hard drive health checks, firmware updates, and system performance review.",
      "If your existing CCTV system was installed by another vendor and is underperforming, we also offer diagnostic audits and remediation services.",
    ],
  },
  {
    id: "boom-barrier",
    icon: Car,
    title: "Boom Barrier & Vehicle Access Management",
    keywords: "boom barrier for apartment Hyderabad · vehicle access management gated community · ANPR boom barrier Hyderabad",
    paragraphs: [
      "Uncontrolled vehicle movement is one of the most common security complaints in gated communities. Manual registers, ad-hoc guard decisions, and broken boom barriers create gaps that expose residents to unauthorized access, parking disputes, and security incidents.",
      "GuardX360 designs and installs automated boom barrier systems for vehicle entry and exit points, with ANPR and UHF vehicle identification integration available for communities requiring seamless, guard-free access management.",
      "We handle end-to-end delivery including site assessment, barrier type selection, installation, commissioning, and annual maintenance contracts. For communities upgrading from older barrier systems, we offer modernization services that improve reliability and integrate existing entry infrastructure into a unified access management ecosystem.",
    ],
  },
  {
    id: "biometric",
    icon: Fingerprint,
    title: "Biometric & Access Control Systems",
    keywords: "biometric access control Hyderabad · access control system for apartment · RFID access control gated community Hyderabad",
    paragraphs: [
      "Controlling who enters your community and when is the foundation of physical security. Access control systems eliminate dependence on manual entry registers and guard judgment for routine access decisions, and create a reliable digital audit trail of every entry and exit event.",
      "GuardX360 designs and installs access control systems ranging from standalone biometric readers for pedestrian gates to multi-zone networked systems for large communities and residential townships. We integrate access control with CCTV surveillance for visual verification at controlled entry points and with boom barriers for unified vehicle and pedestrian access management.",
      "Our systems support fingerprint, RFID card, face recognition, and mobile-based access, and can be configured for time-based access windows, visitor pre-authorization, and role-based permission levels for staff, residents, and delivery personnel.",
    ],
  },
  {
    id: "solar-fencing",
    icon: Zap,
    title: "Solar Fencing Systems",
    keywords: "solar fencing for apartments Hyderabad · perimeter protection gated community · solar electric fence installation Hyderabad",
    paragraphs: [
      "Perimeter protection is the first and most critical layer of a community's security infrastructure. A weak or unmaintained perimeter fence creates an easy entry point for intruders — regardless of how sophisticated your internal surveillance or access control systems are.",
      "GuardX360 designs and installs solar-powered electric fencing systems that provide a strong physical and psychological deterrent along the full community perimeter. The systems operate on solar power with battery backup, include alarm output on breach, and are designed for low maintenance and long operational life.",
      "We cover complete project delivery including perimeter assessment, system design, installation, testing, and AMC support.",
    ],
  },
  {
    id: "anpr-uhf",
    icon: ScanLine,
    title: "ANPR & UHF Vehicle Access Systems",
    keywords: "ANPR system for apartments Hyderabad · UHF vehicle access gated community · automatic vehicle entry system Hyderabad",
    paragraphs: [
      "High-traffic residential communities require vehicle access management that is fast, accurate, and does not depend on manual verification at every gate. ANPR (Automatic Number Plate Recognition) and UHF long-range vehicle identification systems eliminate queues, reduce guard dependency, and create a verifiable digital record of every vehicle entering and exiting the community.",
      "GuardX360 designs and integrates ANPR and UHF access systems with existing boom barriers and CCTV infrastructure, creating a unified vehicle management ecosystem at community entry and exit points.",
    ],
  },
  {
    id: "amc",
    icon: Wrench,
    title: "Annual Maintenance Contracts (AMC)",
    keywords: "AMC for security systems Hyderabad · CCTV annual maintenance contract · security system maintenance gated community",
    paragraphs: [
      "A security system that is not maintained is a security liability. Camera faults, boom barrier failures, access control outages, and solar fence downtime are almost always the result of deferred maintenance — not equipment failure.",
      "GuardX360 offers structured Annual Maintenance Contracts for gated community security infrastructure covering CCTV systems, boom barriers, biometric access control, and solar fencing.",
      "Our AMC programs include scheduled preventive maintenance visits, breakdown support, health checks, system cleaning and testing, firmware updates, spare part replacement, and performance reporting — so your community's security infrastructure remains operational and accountable throughout the year.",
      "We also offer AMC services for systems installed by other vendors, including diagnostic assessments before contract commencement.",
    ],
  },
  {
    id: "assessment",
    icon: ClipboardCheck,
    title: "Security Infrastructure Assessment & Modernization",
    keywords: "security infrastructure audit Hyderabad · security system modernization gated community · legacy CCTV upgrade RWA",
    paragraphs: [
      "Many communities are running security systems that were installed years ago by multiple vendors, with no documentation, inconsistent maintenance history, and components that no longer integrate with each other. The result is a patchwork of systems that creates more operational burden than security value.",
      "GuardX360 offers structured security infrastructure assessments that evaluate the current state of your community's surveillance, access control, vehicle management, and perimeter protection systems — identifying gaps, failure risks, and upgrade opportunities.",
      "Following the assessment, we design and implement a modernization roadmap that improves reliability, integrates existing systems where possible, and replaces obsolete infrastructure on a planned schedule rather than a reactive one.",
    ],
  },
  {
    id: "audit",
    icon: ShieldCheck,
    title: "Annual Security Audit",
    keywords: "annual security audit gated community · yearly security system audit Hyderabad · security infrastructure audit RWA",
    paragraphs: [
      "An AMC keeps individual systems running. An Annual Security Audit steps back and evaluates the whole infrastructure — coverage, integration, documentation, compliance, and readiness — against your community's current Security Health Score.",
      "Once a year, GuardX360 conducts a full infrastructure review covering every camera, access point, boom barrier, and fence line, benchmarks the results against the previous year, and delivers a written report to the committee with a prioritized action plan. This keeps security spending planned and evidence-based, rather than reactive.",
    ],
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end security infrastructure services for gated communities in Hyderabad."
        subtitle="Guardx360 provides end-to-end security infrastructure services for gated communities across Hyderabad. From security assessment and solution design through installation, integration, and long-term maintenance, we manage the complete lifecycle of your community's security systems under one accountable partner."
      />

      {/* On-page nav */}
      <section className="bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container-narrow">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-wide text-secondary hover:text-primary border border-border hover:border-primary transition-colors"
              >
                {s.title.replace(/ Systems?$| \(AMC\)$/, "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-background">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding scroll-mt-32 ${index % 2 === 1 ? "bg-section-alt" : "bg-background"}`}
          >
            <div className="container-narrow">
              <AnimatedSection>
                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-primary/20 font-heading">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <service.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-heading leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs text-secondary uppercase tracking-wide leading-relaxed" aria-label="Primary keywords">
                      {service.keywords}
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-4 text-secondary text-base leading-relaxed">
                    {service.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    <div className="pt-4 flex flex-wrap gap-3">
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide">
                        <Link to="/contact">
                          Request a Community Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {slugMap[service.id] && (
                        <Button asChild variant="outline" className="font-semibold uppercase tracking-wide">
                          <Link to={`/services/${slugMap[service.id]}`}>
                            View full details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Services;
