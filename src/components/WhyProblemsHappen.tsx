import { ClipboardX, Layers, WrenchIcon, CalendarX, FileQuestion, UserX } from "lucide-react";

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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why These Problems Happen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These failures are not random. They are operational.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-section-alt rounded-lg"
            >
              <cause.icon className="h-6 w-6 text-secondary flex-shrink-0" />
              <p className="text-foreground">{cause.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProblemsHappen;
