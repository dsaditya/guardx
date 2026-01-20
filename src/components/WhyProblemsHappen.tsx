import { ClipboardX, Layers, WrenchIcon, CalendarX, FileQuestion, UserX } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const causes = [
  {
    icon: ClipboardX,
    text: "Incomplete or rushed site survey",
  },
  {
    icon: Layers,
    text: "Poor system design",
  },
  {
    icon: WrenchIcon,
    text: "Improper installation and testing",
  },
  {
    icon: CalendarX,
    text: "Lack of preventive maintenance",
  },
  {
    icon: FileQuestion,
    text: "Undefined service scope",
  },
  {
    icon: UserX,
    text: "No ownership after installation",
  },
];

const WhyProblemsHappen = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Process Education
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              Why These Problems Happen
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              These failures are not random. They are operational.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {causes.map((cause, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-5 bg-section-alt border border-border h-full">
                <cause.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-foreground text-sm">{cause.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProblemsHappen;
