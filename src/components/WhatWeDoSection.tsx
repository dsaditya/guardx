import { Camera, Car, Fingerprint, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV Surveillance Systems",
    description: "Complete surveillance solutions with reliable recording and monitoring",
  },
  {
    icon: Car,
    title: "Boom Barriers & Vehicle Access",
    description: "Entry and exit control systems for vehicles with fail-safe operation",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    description: "Secure access systems for restricted areas and personnel management",
  },
  {
    icon: Zap,
    title: "Solar Fencing & Perimeter Security",
    description: "Perimeter protection systems with intrusion detection",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    description: "Preventive maintenance and breakdown support with defined scope",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            What We Are Responsible For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just install equipment. We take responsibility for system performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 p-6 bg-section-alt rounded-lg"
            >
              <service.icon className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-primary bg-section-alt py-6 px-8 rounded-lg inline-block">
            If it is installed by us, it is operated and maintained by us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
