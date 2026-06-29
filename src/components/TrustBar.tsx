import { Award, Users, ShieldCheck, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: Award,
    text: "10+ Years of Security Industry Experience",
  },
  {
    icon: Users,
    text: "1,000+ Customers Served Across Hyderabad & Telangana",
  },
  {
    icon: ShieldCheck,
    text: "One Vendor. One Accountability. End-to-End.",
  },
  {
    icon: Wrench,
    text: "AMC Support with Preventive Maintenance & Priority Response",
  },
];

const TrustBar = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-narrow py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <AnimatedSection key={item.text} delay={index * 0.08}>
              <div className="flex items-start gap-3">
                <item.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-secondary leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
