import { User, Stethoscope, Wrench, Clock, Info } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const serviceItems = [
  {
    icon: User,
    text: "On-site technician visit",
  },
  {
    icon: Stethoscope,
    text: "Professional system diagnosis",
  },
  {
    icon: Wrench,
    text: "Basic issue rectification",
  },
  {
    icon: Clock,
    text: "Within a defined service window",
    subtext: "(planned to ensure effective diagnosis and clear next steps)",
  },
];

const MaintenanceService = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Service Model
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              Maintenance & Service Model
            </h2>
            <p className="text-lg text-secondary">
              Transparent, time-bound, and professional service.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="bg-section-alt p-8 border border-border">
              <h3 className="text-base font-semibold text-primary mb-6 text-center uppercase tracking-wide">
                Standard Service Visit Includes
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card p-4 border border-border"
                  >
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <span className="text-foreground text-sm">{item.text}</span>
                      {item.subtext && (
                        <span className="block text-xs text-secondary mt-0.5">
                          {item.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 p-4 bg-accent/10 border border-accent/20">
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-secondary">
                  Standard service visits are structured to cover professional diagnosis and basic rectification within a defined service window. 
                  Any additional work or scope changes are discussed and approved before execution.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceService;
