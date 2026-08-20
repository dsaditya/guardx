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
  X,
  Check,
  ClipboardList,
  AlertTriangle,
  BarChart3,
  Map,
  IndianRupee,
  ScanLine,
  Sun,
  Wrench,
  Search,
  FileText,
  Cable,
  Tag,
  Plug,
  Battery,
  ClipboardCheck,
  ShieldCheck,
  TrendingDown,
  Users,
  Maximize2,
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
import cctvImg from "@/assets/services/cctv-surveillance.jpg";
import boomBarrierImg from "@/assets/services/boom-barrier.jpg";
import anprImg from "@/assets/services/anpr-uhf.jpg";
import biometricImg from "@/assets/services/biometric-access.jpg";
import solarImg from "@/assets/services/solar-fencing.jpg";
import amcImg from "@/assets/services/amc.jpg";
import assessmentImg from "@/assets/services/assessment-modernization.jpg";

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

const typicalInstallation = [
  "Camera quantity becomes the main focus",
  "Cheapest available network switch is selected",
  "10/100 switches are used without checking network load",
  "No structured network architecture",
  "Cameras installed wherever mounting is convenient",
  "No switch-port mapping",
  "No camera naming standard",
  "No documentation after installation",
  "Complaints are handled individually",
  "Equipment is replaced without root-cause analysis",
  "Maintenance happens after breakdown",
  "Complete system depends on one vendor or technician",
];

const guardxStandard = [
  "Every camera has a defined security purpose",
  "Network load is calculated before switch selection",
  "Gigabit / OFC backbone is planned where required",
  "Coverage and blind spots are assessed",
  "Cameras, switches and ports are labeled",
  "IP and network mapping is maintained",
  "Root cause is identified before repeated replacement",
  "Testing and commissioning checklist is completed",
  "As-built documentation is handed over",
  "Preventive maintenance is scheduled",
  "System is designed for future troubleshooting",
  "Recommendations are based on requirements, not product quantity",
];

const healthScores = [
  { label: "CCTV Reliability", score: 72 },
  { label: "Network Health", score: 48 },
  { label: "Entry Security", score: 83 },
  { label: "Perimeter Protection", score: 61 },
  { label: "Documentation & Maintainability", score: 35 },
];

const processSteps = [
  {
    num: "01",
    title: "System Audit",
    icon: ClipboardList,
    desc: "We inspect your existing security infrastructure including: CCTV, NVRs, switches, network architecture, entry systems, access control, perimeter systems, power backup, documentation.",
  },
  {
    num: "02",
    title: "Risk & Failure Identification",
    icon: AlertTriangle,
    desc: "We identify: recurring complaint patterns, blind spots, network bottlenecks, overloaded switches, cabling issues, recording gaps, poor equipment placement, maintenance risks, undocumented infrastructure.",
  },
  {
    num: "03",
    title: "Security Health Scoring",
    icon: BarChart3,
    desc: "The system is evaluated against defined parameters for: coverage, reliability, evidence availability, network health, maintainability, infrastructure quality, documentation, risk exposure.",
  },
  {
    num: "04",
    title: "Improvement Roadmap",
    icon: Map,
    desc: "We classify recommendations into: Immediate Attention (issues affecting reliability or security today), Planned Upgrade (areas that should be improved within the next phase), Future Modernization (long-term upgrades that improve scalability and performance).",
  },
  {
    num: "05",
    title: "Budget Prioritization",
    icon: IndianRupee,
    desc: "Your committee receives clarity on: what needs immediate expenditure, what can be repaired, what should be replaced, what can continue, and where unnecessary spending can be avoided.",
  },
];

const serviceCards = [
  {
    icon: Camera,
    title: "CCTV Surveillance",
    desc: "IP CCTV systems designed around actual surveillance requirements, coverage, evidence quality and network capacity.",
    includes: [
      "IP cameras",
      "NVR systems",
      "CCTV modernization",
      "Camera relocation",
      "Blind-spot correction",
      "Recording optimization",
      "CCTV network redesign",
    ],
    image: cctvImg,
    to: "/services/cctv-surveillance",
  },
  {
    icon: ParkingCircle,
    title: "Boom Barrier & Vehicle Access",
    desc: "Structured vehicle entry and exit control for residents, staff, visitors and vendors.",
    includes: [
      "Boom barriers",
      "RFID",
      "UHF readers",
      "Vehicle tags",
      "Loop detectors",
      "Entry/exit integration",
    ],
    image: boomBarrierImg,
    to: "/services/boom-barrier-vehicle-access",
  },
  {
    icon: ScanLine,
    title: "ANPR & UHF Vehicle Access",
    desc: "Automatic identification and controlled vehicle access using ANPR and long-range UHF technology. Ideal for communities requiring faster, traceable and automated entry management.",
    includes: [],
    image: anprImg,
    to: "/services/anpr-uhf-vehicle-access",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    desc: "Control staff movement and restricted-area access through structured access-control systems.",
    includes: [
      "Housekeeping",
      "Maintenance staff",
      "Security teams",
      "Office areas",
      "Restricted rooms",
      "Employee attendance",
    ],
    image: biometricImg,
    to: "/services/biometric-access-control",
  },
  {
    icon: Sun,
    title: "Solar Fencing",
    desc: "Perimeter protection designed to deter unauthorized entry and strengthen community boundary security.",
    includes: [],
    image: solarImg,
    to: "/services/solar-fencing",
  },
  {
    icon: Network,
    title: "Network & Security Infrastructure",
    desc: "The performance of CCTV depends heavily on its underlying infrastructure.",
    includes: [
      "Network switches",
      "Gigabit uplinks",
      "OFC backbone",
      "Racks",
      "Structured cabling",
      "Power distribution",
      "UPS",
      "Camera addressing",
      "Switch architecture",
    ],
    image: assessmentImg,
    to: "/services/security-assessment-modernization",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    desc: "Preventive maintenance designed to reduce repeated complaints and improve system uptime.",
    includes: [
      "Preventive checks",
      "Complaint response",
      "Recurring-fault identification",
      "Equipment health",
      "Network health",
      "Documentation",
      "Recommendation tracking",
    ],
    image: amcImg,
    to: "/services/annual-maintenance-contracts",
  },
  {
    icon: Search,
    title: "Security Assessment & Modernization",
    desc: "Already have an existing system? We audit the installation before recommending replacement. Where possible, existing infrastructure is retained, corrected or upgraded instead of replacing everything.",
    includes: [],
    image: assessmentImg,
    to: "/services/security-assessment-modernization",
  },
];

const caseStudies = [
  {
    title: "CCTV Lag & Repeated Network Complaints",
    problem: "The site faced recurring CCTV lag and intermittent recording issues. Individual cameras and network components were repeatedly checked, but the complaints continued.",
    diagnosis: "The underlying network architecture and switching design were not suitable for the size of the CCTV system.",
    approach: "The network was studied at system level instead of treating individual camera complaints independently. Switching, uplinks and network structure were reviewed and corrected.",
    result: "A more stable network architecture with easier troubleshooting and improved reliability.",
    lesson: "Sometimes the camera is not the problem. The infrastructure behind the camera is.",
  },
  {
    title: "Cameras Repeatedly Going Offline",
    problem: "Multiple cameras experienced repeated offline complaints. Individual faults were attended whenever reported.",
    diagnosis: "Poor physical connections, inadequate protection and the absence of structured preventive maintenance were contributing to repeated failures.",
    approach: "Connections were standardized and protected, and preventive maintenance practices were introduced.",
    result: "Reduced recurring failures and improved system reliability.",
    lesson: "Fixing a complaint is different from fixing the reason the complaint keeps returning.",
  },
];

const engineeringStandards = [
  {
    icon: Network,
    title: "Gigabit Network Backbone",
    desc: "Network architecture is selected based on actual camera traffic and system size — not simply on the number of available switch ports.",
  },
  {
    icon: Cable,
    title: "OFC for Long-Distance Connectivity",
    desc: "Fiber connectivity is recommended wherever distance, scale or bandwidth makes copper unsuitable.",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    desc: "Cables are routed, terminated and dressed systematically for reliability and future troubleshooting.",
  },
  {
    icon: Tag,
    title: "Camera Labeling",
    desc: "Every camera receives a unique identification.",
  },
  {
    icon: Tag,
    title: "Switch Labeling",
    desc: "Switches are clearly named and mapped.",
  },
  {
    icon: Map,
    title: "Port Mapping",
    desc: "Camera-to-switch and switch-port relationships are documented.",
  },
  {
    icon: Server,
    title: "Rack Dressing",
    desc: "Racks are organized to simplify maintenance and avoid accidental disconnection.",
  },
  {
    icon: Plug,
    title: "Proper Glands & Termination",
    desc: "Connections are protected against physical and environmental damage wherever applicable.",
  },
  {
    icon: Battery,
    title: "UPS & Power Planning",
    desc: "Critical security infrastructure is planned with proper power and backup requirements.",
  },
  {
    icon: FileText,
    title: "IP Documentation",
    desc: "Camera and network IP information is maintained systematically.",
  },
  {
    icon: Map,
    title: "Network Map",
    desc: "The handover documentation clearly shows how the system is interconnected.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    desc: "Projects are tested against a structured commissioning checklist before handover.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "More Reliable Systems",
    desc: "Reduce failures created by poor infrastructure.",
  },
  {
    icon: Wrench,
    title: "Easier Maintenance",
    desc: "Technicians can quickly identify equipment and connections.",
  },
  {
    icon: Search,
    title: "Faster Troubleshooting",
    desc: "A documented system reduces unnecessary trial-and-error.",
  },
  {
    icon: TrendingDown,
    title: "Lower Total Cost of Ownership",
    desc: "Solve structural causes instead of repeatedly replacing individual components.",
  },
  {
    icon: Users,
    title: "Reduced Vendor Dependency",
    desc: "Future engineers can understand the system through proper documentation.",
  },
  {
    icon: Maximize2,
    title: "Easier Expansion",
    desc: "A structured network makes future camera or access-system additions easier.",
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

      {/* 5-Layer Standard */}
      <section id="five-layer-standard" className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              The GuardX360 5-Layer Security Standard
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-primary font-heading mb-4">
              One Community. One Integrated Security System.
            </h3>
            <p className="text-secondary max-w-3xl leading-relaxed mb-12">
              Security does not come from installing more cameras. Real security comes from making
              multiple protection layers work together — while ensuring the underlying network,
              power, documentation and maintenance are reliable.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {layerDetails.map((layer, i) => (
              <AnimatedSection key={layer.num} delay={i * 0.08}>
                <div className="bg-background border border-border p-6 md:p-8">
                  <div className="grid md:grid-cols-[80px_1fr] gap-6">
                    <div className="flex md:flex-col items-center md:items-start gap-3">
                      <div className="bg-accent p-3">
                        <layer.icon
                          className="h-6 w-6 text-accent-foreground"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-xs font-bold text-accent tracking-widest uppercase">
                        Layer {layer.num}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary font-heading mb-2">
                        {layer.title}
                      </h3>
                      <p className="text-secondary leading-relaxed mb-4">{layer.intro}</p>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                          {layer.num === "03"
                            ? "Assessed"
                            : layer.num === "05"
                            ? "Evaluated"
                            : "Typical systems include"}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {layer.systems.map((s) => (
                            <li
                              key={s}
                              className="text-sm text-secondary flex items-start gap-2"
                            >
                              <span className="text-accent mt-1">—</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm font-semibold text-primary">
                        Objective: <span className="font-normal text-secondary">{layer.objective}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Comparison</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Traditional Installation vs GuardX360 Standard
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
            {/* Left column */}
            <AnimatedSection>
              <div className="bg-section-alt p-6 md:p-8 h-full">
                <h3 className="text-lg font-bold text-primary font-heading mb-6">
                  Typical Security Installation
                </h3>
                <ul className="space-y-4">
                  {typicalInstallation.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-primary/10 p-1 flex-shrink-0 mt-0.5">
                        <X className="h-4 w-4 text-secondary" strokeWidth={2} />
                      </span>
                      <span className="text-secondary text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Right column */}
            <AnimatedSection delay={0.1}>
              <div className="bg-accent p-6 md:p-8 h-full">
                <h3 className="text-lg font-bold text-accent-foreground font-heading mb-6">
                  GuardX360 Standard
                </h3>
                <ul className="space-y-4">
                  {guardxStandard.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-accent-foreground/20 p-1 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-accent-foreground" strokeWidth={2.5} />
                      </span>
                      <span className="text-accent-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Health Score Section */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
              How Healthy Is Your Community's Security System?
            </h2>
            <p className="text-white/70 max-w-3xl leading-relaxed mb-10">
              A security system can appear functional while carrying multiple hidden risks. GuardX360
              evaluates the complete installation across multiple parameters and converts the findings
              into a simple Security Health Score.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {healthScores.map((h, i) => (
                <AnimatedSection key={h.label} delay={i * 0.05}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{h.label}</span>
                      <span className="text-sm font-bold text-accent">
                        {h.score}
                        <span className="text-white/50 font-normal">/100</span>
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/15">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${h.score}%` }}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary border border-white/10 p-8 md:p-10">
                <div className="text-center mb-6">
                  <div className="text-6xl md:text-7xl font-bold text-white font-heading">
                    60<span className="text-3xl md:text-4xl text-white/50">/100</span>
                  </div>
                  <div className="inline-block mt-4 px-4 py-1.5 bg-accent text-accent-foreground text-xs uppercase tracking-wide font-semibold">
                    Needs Attention
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed text-center mb-8">
                  The objective is not simply to identify faults. It is to show your management
                  committee: what is working, what is at risk, what needs immediate attention, what
                  can wait, and where future expenditure should be prioritized.
                </p>
                <div className="flex justify-center">
                  <Link to="/services/security-health-score">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 h-auto font-semibold uppercase tracking-wide"
                    >
                      Get Your Community Security Score
                      <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Our Security Assessment Process
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="bg-accent p-3 relative z-10">
                        <step.icon
                          className="h-6 w-6 text-accent-foreground"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="md:hidden text-xs font-bold text-accent tracking-widest uppercase">
                        Step {step.num}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="hidden md:block text-xs font-bold text-accent tracking-widest uppercase">
                          Step {step.num}
                        </p>
                        <h3 className="text-lg font-bold text-primary font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              Integrated Security Solutions for Gated Communities
            </h2>
            <p className="text-secondary max-w-3xl leading-relaxed mb-10">
              Every layer of community security requires the right product, installed correctly,
              connected reliably and maintained on schedule.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.05}>
                <Link to={card.to} className="group block bg-section-alt border border-border h-full hover:border-accent transition-colors">
                  <div className="aspect-[16/10] overflow-hidden bg-primary/5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-accent p-2 flex-shrink-0">
                        <card.icon className="h-4 w-4 text-accent-foreground" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-bold text-primary font-heading leading-snug">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed mb-3">{card.desc}</p>
                    {card.includes.length > 0 && (
                      <ul className="space-y-1">
                        {card.includes.slice(0, 4).map((item) => (
                          <li key={item} className="text-xs text-secondary flex items-start gap-2">
                            <span className="text-accent mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-10">
              Problems We Have Seen on Real Sites
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={study.title} delay={i * 0.1}>
                <div className="bg-background border border-border p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-accent p-2">
                      <FileText className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-primary font-heading leading-snug">
                      {study.title}
                    </h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-primary mb-1">Problem</p>
                      <p className="text-secondary leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Diagnosis</p>
                      <p className="text-secondary leading-relaxed">{study.diagnosis}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">GuardX360 Approach</p>
                      <p className="text-secondary leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Result</p>
                      <p className="text-secondary leading-relaxed">{study.result}</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="font-semibold text-accent mb-1">Lesson</p>
                      <p className="text-secondary leading-relaxed">{study.lesson}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <Link to="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto font-semibold uppercase tracking-wide"
                >
                  View All Case Studies
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Engineering Standard</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              The GuardX360 Installation & Engineering Standard
            </h2>
            <p className="text-secondary max-w-3xl leading-relaxed mb-10">
              A security system should remain understandable and maintainable even years after
              installation. That is why our projects follow structured installation standards
              wherever applicable.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringStandards.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.04}>
                <div className="bg-section-alt border border-border p-6 h-full">
                  <div className="bg-accent p-2 inline-flex mb-4">
                    <item.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-primary font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-section-dark">
        <div className="container-narrow">
          <AnimatedSection>
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">
              Better Installation Is Not About Appearance. It Is About Reliability.
            </h2>
            <p className="text-white/70 max-w-3xl leading-relaxed mb-10">
              Structured security infrastructure results in:
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.05}>
                <div className="bg-primary border border-white/10 p-6 h-full">
                  <div className="bg-accent p-2 inline-flex mb-4">
                    <benefit.icon className="h-5 w-5 text-accent-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
