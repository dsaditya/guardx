import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerInquiryForm from "@/components/PartnerInquiryForm";
import AnimatedSection from "@/components/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { MapPin, Package, LineChart } from "lucide-react";

const points = [
  { icon: MapPin, title: "Regional Territory", body: "Represent GuardX360 across a defined territory in Telangana or Andhra Pradesh with clear boundaries and support." },
  { icon: Package, title: "Product & Training Support", body: "Access to the full GuardX360 product line — CCTV, boom barriers, biometrics, ANPR, solar fencing — with technical training." },
  { icon: LineChart, title: "Margins & AMC Share", body: "Structured dealer margins on hardware, installation revenue share, and recurring AMC participation." },
];

const requirements = [
  "Existing security, electrical, or IT infrastructure business with local field presence",
  "Ability to hold basic inventory and run a small installation team",
  "Willingness to follow GuardX360's documentation and handover standards",
  "Registered business entity with GST and required trade licenses",
];

const BecomeADealer = () => {
  useSEO({
    title: "Become a GuardX360 Dealer | Security Systems Dealership",
    description: "Apply for a GuardX360 dealership across Telangana and Andhra Pradesh. Represent our integrated CCTV, access control, and perimeter security systems.",
  });

  return (
    <>
      <PageHero
        eyebrow="Dealership Program"
        title="Represent GuardX360 in your region."
        subtitle="A structured dealership program for established security, electrical, and IT infrastructure businesses across Telangana and Andhra Pradesh."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partner With Us", to: "/partner-with-us" },
          { label: "Become a Dealer" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {points.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-section-alt border border-border p-6 md:p-8 h-full">
                  <p.icon className="h-6 w-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide font-heading">
                    {p.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-section-alt border border-border p-6 md:p-10 mb-10 md:mb-12 max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 font-heading uppercase tracking-wide">
                Dealer Requirements
              </h2>
              <ul className="space-y-3">
                {requirements.map((r, i) => (
                  <li key={i} className="flex gap-3 text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-bold">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-section-alt border border-border p-6 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-heading">
                Dealership Inquiry
              </h2>
              <p className="text-secondary mb-8">
                Share a few details about your business. Our regional lead will connect for a qualification call.
              </p>
              <PartnerInquiryForm
                formName="Become a Dealer"
                submitLabel="Submit Dealership Inquiry"
                fields={[
                  { name: "business", label: "Business Name", placeholder: "Registered business name", required: true },
                  { name: "contact", label: "Contact Person", placeholder: "Full name", required: true },
                  { name: "email", label: "Email", placeholder: "you@business.com", type: "email", required: true },
                  { name: "phone", label: "Phone Number", placeholder: "+91", type: "tel", required: true },
                  { name: "city", label: "City", placeholder: "e.g. Vijayawada", required: true },
                  { name: "businessType", label: "Current Business Type", placeholder: "e.g. Security systems, Electrical, IT infra", required: true },
                  { name: "message", label: "Message", placeholder: "Tell us about your team, current product lines, and territory.", type: "textarea" },
                ]}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default BecomeADealer;
