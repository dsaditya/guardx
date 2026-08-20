import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Car,
  Camera,
  Fingerprint,
  Server,
  CameraOff,
  RefreshCw,
  Wifi,
  FileQuestion,
  UserX,
  TrendingUp,
  ParkingCircle,
  Network,
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
import heroImage from "@/assets/lp2/standard-hero.jpg";

const stats = [
  { value: "10+", label: "Years", sub: "Security Industry Experience" },
  { value: "1,000+", label: "Homes & Communities Served" },
  { value: "Dual-Sector", label: "Gated Communities + Large Infrastructure Sites" },
  { value: "Hyderabad Based", label: "Local Team. Faster Response." },
];

const layers = [
  {
    num: "01",
    title: "Perimeter Protection",
    icon: Shield,
    desc: "Protect the outer boundary before a threat reaches the community.",
  },
  {
    num: "02",
    title: "Smart Entry & Exit",
    icon: Car,
    desc: "Control and record vehicle movement through barriers, ANPR and UHF access.",
  },
  {
    num: "03",
    title: "Surveillance & Evidence",
    icon: Camera,
    desc: "Ensure critical areas are covered and footage is available when required.",
  },
  {
    num: "04",
    title: "People & Access Control",
    icon: Fingerprint,
    desc: "Manage staff, housekeeping and restricted-area access systematically.",
  },
  {
    num: "05",
    title: "Network, Power & Reliability",
    icon: Server,
    desc: "Build the infrastructure that keeps every security system connected, documented and maintainable.",
  },
];

const problems = [
  {
    icon: CameraOff,
    title: "Cameras Installed. But Footage Unavailable.",
    desc: "Everything appears to be working until an incident happens — and the required recording cannot be found.",
  },
  {
    icon: RefreshCw,
    title: "The Same Complaints Keep Returning.",
    desc: "A camera is replaced. Then a switch. Then a connector. But nobody investigates why the failures keep happening.",
  },
  {
    icon: Wifi,
    title: "CCTV Is Lagging or Buffering.",
    desc: "The problem may not be the camera. Poor network design, overloaded switches, uplink limitations or incorrect architecture can affect the complete system.",
  },
  {
    icon: FileQuestion,
    title: "Nobody Has Complete System Documentation.",
    desc: "There is no clear record of which camera connects to which switch, switch port, NVR or network segment.",
  },
  {
    icon: UserX,
    title: "Your System Is Vendor Dependent.",
    desc: "If your existing technician or vendor disappears tomorrow, another engineer has to understand the entire installation from scratch.",
  },
  {
    icon: TrendingUp,
    title: "Maintenance Costs Keep Increasing.",
    desc: "Repeated replacements solve individual complaints — but not the structural reason behind them.",
  },
];

const layerDetails = [
  {
    num: "01",
    title: "Perimeter Security",
    icon: Shield,
    intro: "Protect the community at its outermost boundary.",
    systems: [
      "Solar fencing",
      "Intrusion deterrence",
      "Boundary protection",
      "Entry-point risk identification",
      "Vulnerable perimeter-zone assessment",
    ],
    objective: "Detect, deter or delay unauthorized access before it reaches residential areas.",
  },
  {
    num: "02",
    title: "Entry & Exit Control",
    icon: ParkingCircle,
    intro: "Know who and what is entering the community.",
    systems: [
      "Boom barriers",
      "ANPR",
      "UHF vehicle access",
      "RFID-based access",
      "Visitor vehicle control",
      "Entry/exit CCTV integration",
    ],
    objective: "Create controlled, traceable and reliable vehicle movement at community entrances.",
  },
  {
    num: "03",
    title: "Surveillance & Evidence",
    icon: Camera,
    intro: "Coverage is not enough. Evidence must be available when required.",
    systems: [
      "Camera placement",
      "Blind spots",
      "Image quality",
      "Night performance",
      "Recording health",
      "Storage retention",
      "Network stability",
      "Camera availability",
      "Critical-zone coverage",
    ],
    objective: "Ensure CCTV is not merely installed — but actually useful during an incident.",
  },
  {
    num: "04",
    title: "People & Access Control",
    icon: Fingerprint,
    intro: "Control access to sensitive and restricted areas.",
    systems: [
      "Biometric attendance",
      "Staff access control",
      "Housekeeping access",
      "Restricted-area control",
      "Door access systems",
      "Employee movement management",
    ],
    objective: "Ensure authorized people have the right access — and unauthorized access is restricted.",
  },
  {
    num: "05",
    title: "Network, Power & Reliability",
    icon: Network,
    intro: "The hidden infrastructure behind every reliable security system.",
    systems: [
      "Network architecture",
      "Gigabit backbone",
      "OFC requirements",
      "Switch capacity",
      "Uplink design",
      "Structured cabling",
      "UPS backup",
      "Power distribution",
      "Camera IP documentation",
      "Switch and port labeling",
      "Rack management",
      "Preventive maintenance",
    ],
    objective: "Make the system reliable, scalable, easy to troubleshoot and less dependent on any single technician.",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
    {children}
  </p>
);

const SecurityStandard = () => {
  const [open, setOpen] = useState(false);

  useSEO({
    title: "5-Layer Security Standard for Gated Communities | GuardX360 Hyderabad",
    description:
      "GuardX360 audits, designs, standardizes and maintains integrated security infrastructure for gated communities in Hyderabad — CCTV, access control, boom barriers and preventive maintenance.",
  });

  const scrollToApproach = () => {
    document.getElementById("five-layer-standard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-section-dark">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gated community security entrance with CCTV and boom barrier infrastructure"
            className="w-full h-full object-cover"
            width={1600}
            height={1000}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/55" />
        </div>
        <div className="container-narrow relative py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <Eyebrow>
                Integrated Security Infrastructure for Gated Communities — Hyderabad
              </Eyebrow>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
                The 5-Layer Security Standard for Gated Communities
              </h1>
              <div className="space-y-4 text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
                <p>
                  GuardX360 audits, designs, standardizes and maintains security systems that work
                  when they are actually needed.
                </p>
                <p>
                  From CCTV and entrance automation to access control, perimeter protection, network
                  infrastructure and preventive maintenance, we approach community security as one
                  integrated system — not as individual products.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
                >
                  Request a Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToApproach}
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-6 h-auto font-semibold uppercase tracking-wide whitespace-normal"
                >
                  See How Our Approach Works
                </Button>
              </div>
            </div>

            {/* Right-side card */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 md:p-8 border border-border shadow-none">
                <h2 className="text-lg font-bold text-primary font-heading mb-6">
                  Security Works Better When It Works Together
                </h2>
                <div className="space-y-5">
                  {layers.map((layer) => (
                    <div key={layer.num} className="flex items-start gap-4">
                      <div className="bg-accent p-2.5 flex-shrink-0">
                        <layer.icon className="h-4 w-4 text-accent-foreground" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-accent tracking-widest mb-0.5">
                          {layer.num}
                        </p>
                        <h3 className="text-sm font-semibold text-primary font-heading mb-1">
                          {layer.title}
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary px-6 py-8">
                <p className="text-2xl md:text-3xl font-bold text-accent font-heading mb-2">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60 leading-relaxed">
                  {s.label}
                </p>
                {s.sub && (
                  <p className="text-xs text-white/50 leading-relaxed mt-1">{s.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Common Issues</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-heading">
              Is Your Community Facing Any of These Problems?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="bg-accent border border-border p-6 h-full">
                  <div className="bg-primary/20 p-3 w-fit mb-4">
                    <p.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for anchor target */}
      <section id="five-layer-standard" className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>The standard</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              5-Layer Security Standard
            </h2>
            <p className="text-secondary max-w-2xl">
              Detailed framework content will follow in the next section.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead form dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Request a Security Assessment</DialogTitle>
            <DialogDescription className="text-secondary">
              Share your details and our team will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <SimpleLeadForm submitLabel="Request a Security Assessment" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecurityStandard;
