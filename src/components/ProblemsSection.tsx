import { VideoOff, AlertTriangle, ShieldOff, RefreshCw, FileX, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: VideoOff,
    text: "Cameras not recording when footage is required",
  },
  {
    icon: AlertTriangle,
    text: "Boom barriers failing during operation",
  },
  {
    icon: ShieldOff,
    text: "Access systems bypassed manually",
  },
  {
    icon: RefreshCw,
    text: "Repeat complaints for the same issue",
  },
  {
    icon: FileX,
    text: "AMC without real preventive maintenance",
  },
  {
    icon: HelpCircle,
    text: "No clarity on service scope or closure",
  },
];

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Security Reality
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
            Real Problems Clients Face
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Most clients approach us after facing these issues.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-card border-l-4 border-l-destructive border border-border"
            >
              <problem.icon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium text-sm">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
