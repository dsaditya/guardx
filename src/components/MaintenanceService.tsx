import { User, Stethoscope, Wrench, Clock, Info } from "lucide-react";

const serviceItems = [
  {
    icon: User,
    text: "Technician visit",
  },
  {
    icon: Stethoscope,
    text: "Professional system diagnosis",
  },
  {
    icon: Wrench,
    text: "Basic rectification",
  },
  {
    icon: Clock,
    text: "Within a defined service window",
  },
];

const MaintenanceService = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Maintenance & Service Model
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent, time-bound, and professional service.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-section-alt rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Standard Service Visit Includes
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg"
                >
                  <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Standard service visits are structured to cover professional diagnosis and basic rectification within a defined service window. 
                Any additional work or scope changes are discussed and approved before execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceService;
