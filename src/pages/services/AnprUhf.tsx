import ServicePage from "@/components/ServicePage";
import serviceImage from "@/assets/services/anpr-uhf.jpg";

const AnprUhf = () => (
  <ServicePage
    seoTitle="ANPR & UHF Vehicle Access Systems Hyderabad | GuardX360"
    seoDescription="ANPR number plate recognition and UHF long-range vehicle access for apartments and townships in Hyderabad. Integrated with existing boom barriers and CCTV."
    eyebrow="Service 05"
    title="ANPR & UHF Vehicle Access Systems"
    description="No queues, no manual checks — verified vehicle entry at community speed."
    image={serviceImage}
    imageAlt="Vehicle at an automated access gate with number plate visible"
    intro="High-traffic residential communities require vehicle access management that is fast, accurate and does not depend on manual verification at every gate. ANPR and UHF long-range identification eliminate queues, reduce guard dependency and create a verifiable digital record of every vehicle."
    bullets={[
      "Automatic Number Plate Recognition (ANPR) cameras tuned to your gate geometry and lighting.",
      "UHF long-range tag readers for resident vehicles with fast, hands-free entry.",
      "Integrated with existing boom barriers and CCTV for a unified vehicle management ecosystem.",
      "Digital logs of every entry and exit event, available for committee review and incident investigation.",
    ]}
  />
);

export default AnprUhf;
