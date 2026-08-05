import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/cctv-surveillance.jpg";

const CCTVSurveillance = () => (
  <ServicePage
    seoTitle="CCTV Surveillance Systems Hyderabad | GuardX360"
    seoDescription="IP CCTV design, installation and AMC for gated communities in Hyderabad. Full perimeter coverage, remote access, verified recording continuity."
    eyebrow="Service 01"
    title="CCTV Surveillance Systems"
    description="High-definition IP surveillance designed around your site — not sold from a catalogue."
    image={serviceImage}
    imageAlt="Dome CCTV camera mounted on an exterior wall"
    intro="A CCTV system is only as reliable as the quality of its design and the consistency of its maintenance. A camera at the wrong angle, a recorder with insufficient storage or a network dropping frames under load will all fail at the moment the footage matters most."
    bullets={[
      "Site assessment covering coverage requirements, entry and exit points, lighting conditions and blind spots before any camera is specified.",
      "High-definition IP camera system with full perimeter coverage, remote access, motion alerts and defined storage retention.",
      "Quarterly preventive maintenance under AMC: dome cleaning, recording continuity checks, hard drive health, firmware updates and performance review.",
      "Diagnostic audits and remediation for underperforming CCTV systems installed by other vendors.",
    ]}
  />
);

export default CCTVSurveillance;
