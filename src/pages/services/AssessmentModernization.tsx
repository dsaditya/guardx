import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/assessment-modernization.jpg";

const AssessmentModernization = () => (
  <ServicePage
    seoTitle="Security Infrastructure Company Hyderabad | Security Assessment & Modernization | GuardX360"
    seoDescription="Structured audits and modernization roadmaps for existing gated-community security infrastructure across Hyderabad and surrounding areas. Replace patchwork systems with a planned upgrade."
    eyebrow="Service 08"
    title="Security Infrastructure Assessment & Modernization"
    description="From a patchwork of legacy systems to a planned, documented infrastructure."
    image={serviceImage}
    imageAlt="Engineer reviewing infrastructure documentation on-site"
    intro="Many communities are running security systems installed years ago by multiple vendors, with no documentation, inconsistent maintenance history and components that no longer integrate. The result is a patchwork that creates more operational burden than security value."
    bullets={[
      "Structured assessment of current surveillance, access control, vehicle management and perimeter protection.",
      "Identification of coverage gaps, failure risks and integration opportunities.",
      "Modernization roadmap that improves reliability and integrates existing systems where possible.",
      "Planned replacement schedule for obsolete infrastructure — not a reactive one.",
    ]}
  />
);

export default AssessmentModernization;
