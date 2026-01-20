import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  "Approved scope and BOQ",
  "Planned execution and scheduling",
  "Testing and commissioning",
  "Structured client handover",
  "Formal completion and feedback",
];

const InstallationProcess = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Process Education
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                Installation Process
              </h2>
              <p className="text-lg text-secondary">
                Every installation is treated as a long-term responsibility.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4 bg-card p-5 border border-border">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white font-bold flex-shrink-0 font-heading">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{step}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
