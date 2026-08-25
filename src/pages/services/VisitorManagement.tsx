import ServicePage from "@/components/ServicePage";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import serviceImage from "@/assets/services/biometric-access.jpg";

const VisitorManagement = () => (
  <ServicePage
    seoTitle="Visitor Management System for Gated Communities Hyderabad | GuardX360"
    seoDescription="Visitor management system design, installation and maintenance for gated communities across Hyderabad and surrounding areas. Gate-level entry records, pre-authorization and CCTV-linked verification."
    eyebrow="Service 04"
    title="Visitor Management Systems"
    description="A verifiable record of every visitor entry — at the gate, not in a notebook."
    image={serviceImage}
    imageAlt="Security personnel recording a visitor entry at a community gate"
    intro="Most visitor disputes in gated communities come down to one thing: there is no reliable record of who entered, when, and on whose authority. A visitor management system replaces paper registers with a structured, searchable entry record that guards can operate without additional training."
    bullets={[
      "Gate-level visitor registration covering guests, domestic staff, delivery personnel, cab drivers and contractors.",
      "Resident pre-authorization for expected visitors, with time-bound validity where the community requires it.",
      "Entry and exit records linked to CCTV footage at the same gate, so any entry can be visually verified later.",
      "Integration with existing biometric readers and boom barriers so pedestrian and vehicle entry share one access record.",
      "Guard-usable interface designed for shift handover, plus periodic checks under AMC to keep records intact.",
    ]}
    closing="We design and maintain visitor management as part of the community's entry layer — not as a separate product bolted on at the gate."
    afterContent={
      <section className="section-padding bg-background border-t border-border">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                Visitor management system for gated communities across Hyderabad and surrounding areas
              </h2>
              <p className="text-secondary leading-relaxed">
                We install and maintain visitor management systems for apartment complexes, villa
                communities and townships across Hyderabad, Telangana and Andhra Pradesh — including
                communities that already run CCTV or biometric access from another vendor.
              </p>
              <p className="text-secondary leading-relaxed">
                Visitor entry works best when it sits inside the wider entry layer. See how it connects
                with{" "}
                <Link to="/services/biometric-access-control" className="text-accent underline">
                  biometric and access control solutions
                </Link>{" "}
                and{" "}
                <Link to="/services/boom-barrier-vehicle-access" className="text-accent underline">
                  vehicle access control
                </Link>
                , or read the{" "}
                <Link to="/security-standard" className="text-accent underline">
                  5-Layer Security Standard
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

export default VisitorManagement;
