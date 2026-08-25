import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/solar-fencing.jpg";

const SolarFencing = () => (
  <ServicePage
    seoTitle="Solar Fencing for Apartments Hyderabad | GuardX360"
    seoDescription="Solar-powered perimeter electric fencing for gated communities and apartments across Hyderabad and surrounding areas. Designed, installed and maintained by GuardX360."
    eyebrow="Service 05"
    title="Solar Fencing Systems"
    description="Perimeter deterrent that runs quietly on solar — day and night."
    image={serviceImage}
    imageAlt="Solar panels powering a perimeter security installation"
    intro="Perimeter protection is the first and most critical layer of a community's security infrastructure. A weak or unmaintained perimeter fence creates an easy entry point for intruders — regardless of how sophisticated your internal surveillance or access control systems are."
    bullets={[
      "Solar-powered electric fencing that provides a strong physical and psychological deterrent along the full perimeter.",
      "Battery backup for uninterrupted overnight operation and alarm output on breach.",
      "Designed for low maintenance and long operational life in Hyderabad's climate.",
      "Complete project delivery: perimeter assessment, system design, installation, testing and AMC support.",
    ]}
  />
);

export default SolarFencing;
