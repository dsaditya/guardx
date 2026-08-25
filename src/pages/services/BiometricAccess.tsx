import ServicePage from "@/components/ServicePage";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import serviceImage from "@/assets/services/biometric-access.jpg";

const BiometricAccess = () => (
  <ServicePage
    seoTitle="Access Control Solutions & Biometric Systems Hyderabad | GuardX360"
    seoDescription="Access control solutions for gated communities across Hyderabad and surrounding areas — biometric, RFID and face recognition, designed, installed and maintained by GuardX360."
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
    afterContent={
      <section className="section-padding bg-background border-t border-border">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                Access Control Solutions for Gated Communities in Hyderabad
              </h2>
              <p className="text-secondary leading-relaxed">
                Our access control solutions cover pedestrian gates, clubhouses, lift lobbies, utility
                rooms and staff entry points for communities across Hyderabad and surrounding areas.
                Each installation is designed around who needs access, when, and how that access is
                recorded — then documented so it can be handed over and maintained.
              </p>
              <p className="text-secondary leading-relaxed">
                Communities that need a structured entry record for guests and staff usually pair this
                with a{" "}
                <Link to="/services/visitor-management" className="text-accent underline">
                  visitor management system
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    }
  />
);

export default BiometricAccess;
