import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/biometric-access.jpg";

const BiometricAccess = () => (
  <ServicePage
    seoTitle="Biometric & Access Control Systems Hyderabad | GuardX360"
    seoDescription="Biometric, RFID and face-recognition access control for gated communities and critical sites in Hyderabad. Designed, installed and maintained by GuardX360."
    eyebrow="Service 03"
    title="Biometric & Access Control Systems"
    description="Digital audit trails for every entry — no more paper registers."
    image={serviceImage}
    imageAlt="Person using a fingerprint biometric access reader"
    intro="Controlling who enters your community and when is the foundation of physical security. Access control eliminates dependence on manual registers and guard judgment for routine access, and creates a reliable digital audit trail of every entry and exit event."
    bullets={[
      "Standalone biometric readers for pedestrian gates through to multi-zone networked systems for large townships.",
      "Support for fingerprint, RFID card, face recognition and mobile-based access.",
      "Time-based access windows, visitor pre-authorization and role-based permissions for staff, residents and delivery personnel.",
      "Integrated with CCTV for visual verification and with boom barriers for unified vehicle and pedestrian access.",
    ]}
  />
);

export default BiometricAccess;
