import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerInquiryForm from "@/components/PartnerInquiryForm";
import AnimatedSection from "@/components/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { Handshake, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Handshake, title: "Standardized Delivery", body: "Offer your clients a documented security infrastructure model — installation, AMC, and reporting handled to a fixed engineering standard." },
  { icon: TrendingUp, title: "Recurring AMC Revenue", body: "Structured commission on new installations and ongoing annual maintenance contracts within your portfolio." },
  { icon: ShieldCheck, title: "Engineering Backing", body: "GuardX360 site engineers support every project — from survey and BOQ to commissioning and handover." },
];

const ChannelPartner = () => {
  useSEO({
    title: "Channel Partner Program | GuardX360 Security Systems",
    description: "Partner with GuardX360 to offer standardized security infrastructure — CCTV, access control, AMC — to gated communities and industrial sites.",
  });

  return (
    <>
      <PageHero
        eyebrow="Channel Partner Program"
        title="Extend disciplined security infrastructure to your clients."
        subtitle="A structured partnership for facility management companies, RWA consultants, and infrastructure firms serving gated communities and industrial sites."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partner With Us", to: "/partner-with-us" },
          { label: "Channel Partner" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-section-alt border border-border p-6 md:p-8 h-full">
                  <b.icon className="h-6 w-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide font-heading">
                    {b.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{b.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-section-alt border border-border p-6 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-heading">
                Partner Inquiry
              </h2>
              <p className="text-secondary mb-8">
                Who this is for: facility management firms, RWA consultants, real estate advisors, and infrastructure companies with active gated community or industrial engagements.
              </p>
              <PartnerInquiryForm
                formName="Channel Partner"
                submitLabel="Submit Partner Inquiry"
                fields={[
                  { name: "company", label: "Company Name", placeholder: "Your company", required: true },
                  { name: "contact", label: "Contact Person", placeholder: "Full name", required: true },
                  { name: "email", label: "Email", placeholder: "you@company.com", type: "email", required: true },
                  { name: "phone", label: "Phone Number", placeholder: "+91", type: "tel", required: true },
                  { name: "city", label: "City", placeholder: "e.g. Hyderabad", required: true },
                  { name: "message", label: "Message", placeholder: "Tell us about your client base and how you'd like to partner.", type: "textarea" },
                ]}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ChannelPartner;
