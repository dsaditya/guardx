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
];

const amcService = {
  icon: Wrench,
  title: "Annual Maintenance Contracts",
  description: "Preventive maintenance and breakdown support with defined scope",
};

const WhatWeDoSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Systems We Handle
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
            What We Are Responsible For
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We don't just install equipment. We take responsibility for system performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 p-6 bg-section-alt border border-border"
            >
              <service.icon className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AMC Full Row */}
        <div className="flex gap-4 p-6 bg-section-alt border border-border mb-12">
          <amcService.icon className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={1.5} />
          <div>
            <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wide">
              {amcService.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {amcService.description}
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-section-dark py-6 px-8 inline-block">
            <p className="text-lg md:text-xl font-semibold text-white">
              If it is installed by us, it is operated and maintained by us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;