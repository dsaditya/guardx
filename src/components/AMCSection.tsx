import { CheckSquare, Gauge, AlertCircle, FileText, Search, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Lifecycle Management
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              Preventive Maintenance (AMC)
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our AMC model is designed to prevent failures, not just respond to breakdowns.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {amcFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-5 bg-card border border-border h-full">
                <feature.icon className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-foreground font-medium text-sm">{feature.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMCSection;
