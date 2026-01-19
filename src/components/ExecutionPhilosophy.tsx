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
    <section id="execution" className="section-padding bg-section-dark">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
            Our Execution Philosophy
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            First-time-right execution and reliable systems — without repeated follow-ups.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white/20 font-heading">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
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