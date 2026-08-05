import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/boom-barrier.jpg";

const BoomBarrier = () => (
  <ServicePage
    seoTitle="Boom Barrier & Vehicle Access Hyderabad | GuardX360"
    seoDescription="Automated boom barriers and vehicle access systems for gated communities in Hyderabad. ANPR/UHF ready, installed and maintained by GuardX360."
    eyebrow="Service 02"
    title="Boom Barrier & Vehicle Access Management"
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
  />
);

export default BoomBarrier;
