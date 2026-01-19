import { Building, Factory, Home, HardHat } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Gated Communities",
    description: "RWAs and management committees requiring reliable entry control and surveillance",
  },
  {
    icon: HardHat,
    title: "Crusher & Mining Sites",
    description: "High-risk industrial locations with controlled entry points, heavy vehicle movement, and critical security requirements",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Office spaces, retail centers, and mixed-use facilities",
  },
  {
    icon: Factory,
    title: "Industrial Sites",
    description: "Manufacturing plants, warehouses, and crusher sites with perimeter security needs",
  },
];

const WhoWeServe = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with environments where system failure is not acceptable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-card p-6 md:p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
