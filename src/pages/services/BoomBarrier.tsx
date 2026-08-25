import ServicePage from "@/components/ServicePage";
import AnimatedSection from "@/components/AnimatedSection";
import serviceImage from "@/assets/services/boom-barrier.jpg";

const BoomBarrier = () => (
  <ServicePage
    seoTitle="Boom Barrier Installation Hyderabad | Vehicle Access Control System | GuardX360"
    seoDescription="Boom barrier installation and vehicle access control systems for gated communities across Hyderabad and surrounding areas. ANPR/UHF ready, installed and maintained by GuardX360."
    eyebrow="Service 02"
    title="Boom Barrier Installation & Vehicle Access Control Systems"
    description="Controlled, auditable vehicle movement at every community gate."
    image={serviceImage}
    imageAlt="Boom barrier at a controlled vehicle entry gate"
    intro="Uncontrolled vehicle movement is one of the most common security complaints in gated communities. Manual registers, ad-hoc guard decisions and broken barriers create gaps that expose residents to unauthorized access, parking disputes and incidents."
    bullets={[
      "Automated boom barrier systems designed for vehicle entry and exit points with the right duty cycle for your traffic volume.",
      "Optional ANPR and UHF vehicle identification integration for seamless, guard-free access management.",
      "End-to-end delivery: site assessment, barrier selection, installation, commissioning and annual maintenance.",
      "Modernization of older barrier systems into a unified access management ecosystem.",
    ]}
    afterContent={
      <section className="section-padding bg-background border-t border-border">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                Boom Barrier Installation Hyderabad
              </h2>
              <p className="text-secondary leading-relaxed">
                We install and maintain boom barriers for gated communities across Hyderabad and
                surrounding areas, sizing each barrier to the gate's actual traffic volume rather than
                to a catalogue specification.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight pt-4">
                Vehicle Access Control System Design
              </h2>
              <p className="text-secondary leading-relaxed">
                A vehicle access control system is more than a barrier arm. It covers detection, reader
                placement, power arrangement, safety loops and the entry record that follows each
                movement — designed as one layer, documented, and maintained under AMC.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    }
  />
);

export default BoomBarrier;
