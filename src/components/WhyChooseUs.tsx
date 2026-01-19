import { Target, FileCheck, ClipboardCheck, Receipt, UserCheck, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Target,
    text: "First-time-right execution",
  },
  {
    icon: FileCheck,
    text: "Clear scope and expectations",
  },
  {
    icon: ClipboardCheck,
    text: "Disciplined service closure",
  },
  {
    icon: Receipt,
    text: "Transparent billing",
  },
  {
    icon: UserCheck,
    text: "Ownership-driven mindset",
  },
  {
    icon: ShieldCheck,
    text: "Zero tolerance for repeat failures",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Brand Assurance
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
            Why Clients Choose GUARDX360
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <reason.icon className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <p className="text-foreground font-medium text-sm">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;