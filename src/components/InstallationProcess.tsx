import { CheckCircle2 } from "lucide-react";

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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Installation Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Every installation is treated as a long-term responsibility.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card p-5 rounded-lg border border-border"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{step}</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
