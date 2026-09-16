import ServicePage from "@/components/ServicePage";
import AnimatedSection from "@/components/AnimatedSection";
import serviceImage from "@/assets/services/boom-barrier.jpg";
import anprImage from "@/assets/services/anpr-uhf.jpg";

const BoomBarrier = () => (
  <ServicePage
    seoTitle="Boom Barrier, ANPR & UHF Vehicle Access Hyderabad | GuardX360"
    seoDescription="Boom barrier installation with ANPR and UHF vehicle access control for gated communities across Hyderabad and surrounding areas — designed, installed and maintained by GuardX360."
    eyebrow="Service 02"
    title="Boom Barrier, ANPR & UHF Vehicle Access Control"
    description="Controlled, auditable vehicle movement at every community gate."
    image={serviceImage}
    imageAlt="Boom barrier at a controlled vehicle entry gate"
    intro="Uncontrolled vehicle movement is one of the most common security complaints in gated communities. Manual registers, ad-hoc guard decisions and broken barriers create gaps that expose residents to unauthorized access, parking disputes and incidents. The barrier and the identification layer behind it are designed together as one system."
    bullets={[
      "Automated boom barrier systems designed for vehicle entry and exit points with the right duty cycle for your traffic volume.",
      "ANPR number plate recognition cameras tuned to your gate geometry and lighting conditions.",
      "UHF long-range tag readers for resident vehicles with fast, hands-free entry.",
      "Integrated with CCTV for visual verification, with digital logs of every entry and exit event.",
      "End-to-end delivery: site assessment, barrier and reader selection, installation, commissioning and annual maintenance.",
      "Modernization of older barrier systems into a unified access management ecosystem.",
    ]}
    afterContent={
      <section className="section-padding bg-background border-t border-border">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-7 space-y-5">
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight pt-4">
                  ANPR & UHF Vehicle Identification
                </h2>
                <p className="text-secondary leading-relaxed">
                  High-traffic communities need entry that is fast, accurate and not dependent on manual
                  verification at every gate. ANPR reads the number plate; UHF reads a long-range tag on
                  the resident's vehicle. Both trigger the same barrier, write to the same log, and can
                  be reviewed by the committee after an incident.
                </p>
              </div>
              <div className="md:col-span-5">
                <img
                  src={anprImage}
                  alt="Vehicle at an automated access gate with number plate recognition"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    }
  />
);

export default BoomBarrier;
