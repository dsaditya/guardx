import { ClipboardList, PenTool, Hammer, Users, Calendar, FileText } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Site Survey & Scope Definition",
    description: "Thorough assessment and documented requirements",
  },
  {
    icon: PenTool,
    title: "System Design",
    description: "Planned design with proper material selection",
  },
  {
    icon: Hammer,
    title: "Disciplined Installation",
    description: "Proper execution with testing and labeling",
  },
  {
    icon: Users,
    title: "Structured Handover",
    description: "Clear client explanation and documentation",
  },
  {
    icon: Calendar,
    title: "Preventive Maintenance",
    description: "Scheduled checks to prevent failures",
  },
  {
    icon: FileText,
    title: "Documentation & Reporting",
    description: "Complete service records and closure",
  },
];

const ExecutionPhilosophy = () => {
  return (
    <section id="execution" className="section-padding bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Our Execution Philosophy
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            First-time-right execution and reliable systems — without repeated follow-ups.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-accent p-2 rounded-lg">
                  <step.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <span className="text-3xl font-bold text-primary-foreground/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionPhilosophy;
