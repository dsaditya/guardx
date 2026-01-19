import { CheckSquare, Gauge, AlertCircle, FileText, Search, RefreshCw } from "lucide-react";

const amcFeatures = [
  {
    icon: CheckSquare,
    text: "Preventive system checks",
  },
  {
    icon: Gauge,
    text: "Performance verification",
  },
  {
    icon: AlertCircle,
    text: "Breakdown handling as per scope",
  },
  {
    icon: FileText,
    text: "Service documentation",
  },
  {
    icon: Search,
    text: "Identification of recurring issues",
  },
  {
    icon: RefreshCw,
    text: "Renewal and improvement recommendations",
  },
];

const AMCSection = () => {
  return (
    <section id="amc" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Preventive Maintenance (AMC)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AMC model is designed to prevent failures, not just respond to breakdowns.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {amcFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border"
            >
              <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMCSection;
