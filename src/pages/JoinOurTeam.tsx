import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import PartnerInquiryForm from "@/components/PartnerInquiryForm";
import AnimatedSection from "@/components/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";
import { Wrench, ClipboardCheck, HardHat } from "lucide-react";

const roles = [
  { icon: Wrench, title: "Field Engineers", body: "CCTV, access control, boom barrier, and solar fencing installation and commissioning." },
  { icon: ClipboardCheck, title: "AMC Technicians", body: "Preventive maintenance visits, health checks, and documented service reporting." },
  { icon: HardHat, title: "Project Managers", body: "Site coordination, handover documentation, and client communication for new installations." },
];

const JoinOurTeam = () => {
  useSEO({
    title: "Careers at GuardX360 | Join Our Security Engineering Team",
    description: "Join GuardX360's field engineering, AMC, and project management teams. We build disciplined, documented security infrastructure across Hyderabad.",
  });

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a team that builds security systems the right way."
        subtitle="GuardX360 hires field engineers, AMC technicians, and project managers who value discipline, documentation, and long-term site reliability."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Partner With Us", to: "/partner-with-us" },
          { label: "Join Our Team" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {roles.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-section-alt border border-border p-6 md:p-8 h-full">
                  <r.icon className="h-6 w-6 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide font-heading">
                    {r.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{r.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-section-alt border border-border p-6 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-heading">
                Apply Now
              </h2>
              <p className="text-secondary mb-8">
                Tell us about yourself and the role you're interested in. Shortlisted candidates will be contacted for a technical conversation.
              </p>
              <PartnerInquiryForm
                formName="Join Our Team"
                submitLabel="Submit Application"
                fields={[
                  { name: "name", label: "Full Name", placeholder: "Your full name", required: true },
                  { name: "email", label: "Email", placeholder: "you@example.com", type: "email", required: true },
                  { name: "phone", label: "Phone Number", placeholder: "+91", type: "tel", required: true },
                  { name: "role", label: "Role Interested In", placeholder: "e.g. Field Engineer, AMC Technician", required: true },
                  { name: "message", label: "Message", placeholder: "Briefly describe your experience and availability.", type: "textarea" },
                ]}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default JoinOurTeam;
