import { Building, Factory, Home, HardHat } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Target Audience
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              Who We Serve
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              We work with environments where system failure is not acceptable.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {audiences.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="bg-card p-6 md:p-8 border border-border hover:border-primary/40 transition-colors h-full">
                <item.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-primary mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
