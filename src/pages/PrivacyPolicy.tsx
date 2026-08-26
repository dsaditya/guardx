import { useSEO } from "@/hooks/use-seo";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | GuardX360",
    description:
      "GuardX360 privacy policy: what information we collect, how we use and store it, and your rights regarding personal data.",
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-secondary mb-10">
            Last updated: August 26, 2026
          </p>

          <div className="prose prose-sm max-w-none text-foreground">
            <p className="text-secondary leading-relaxed mb-8">
              At GuardX360, we respect your privacy and are committed to protecting the personal
              information you share with us. This Privacy Policy explains what information we
              collect, how we use it, and the choices you have.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              When you submit a form on our website (such as a request for a security assessment,
              checklist download, or "Get in Touch" inquiry), we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-secondary mb-6">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Community or property name</li>
              <li>Location/area</li>
              <li>Any additional details you choose to share (e.g. security requirements, message content)</li>
            </ul>
            <p className="text-secondary leading-relaxed mb-6">
              We do not knowingly collect sensitive personal information such as financial details,
              government ID numbers, or health information through our website forms.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-secondary leading-relaxed mb-4">We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1 text-secondary mb-6">
              <li>Respond to your inquiry or schedule a security assessment</li>
              <li>Contact you regarding our services</li>
              <li>Send you requested resources (such as checklists or reports)</li>
              <li>Improve our website and services</li>
              <li>Maintain records of client communications</li>
            </ul>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              3. How Your Information Is Stored and Shared
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Information submitted through our forms is stored in our customer relationship
              management (CRM) system and may be used internally by our team to follow up on your
              inquiry. We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              We may share your information with trusted service providers who help us operate our
              business, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-secondary mb-6">
              <li>CRM and lead management tools</li>
              <li>Email service providers (for internal notifications and follow-up communication)</li>
            </ul>
            <p className="text-secondary leading-relaxed mb-6">
              These providers are only permitted to use your information to help us provide our
              services and are not authorized to use it for their own purposes.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Our website may use cookies and similar tracking technologies (including Google Tag
              Manager, Google Ads conversion tracking, and similar analytics tools) to understand
              how visitors use our site and to measure the effectiveness of our advertising. This may
              include information such as your browser type, pages visited, and general location
              data. You can control or disable cookies through your browser settings.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              5. Data Retention
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this policy, respond to your inquiries, or as required by applicable law.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              6. Your Rights
            </h2>
            <p className="text-secondary leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-secondary mb-6">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information, subject to any legal or legitimate business retention requirements</li>
              <li>Withdraw consent for us to contact you at any time</li>
            </ul>
            <p className="text-secondary leading-relaxed mb-6">
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              7. Data Security
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              We take reasonable technical and organizational measures to protect your personal
              information from unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              8. Third-Party Links
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those websites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              9. Children's Privacy
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Our services are intended for businesses, facility managers, and residential
              community representatives. We do not knowingly collect personal information from
              children under the age of 18.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices
              or for legal, operational, or regulatory reasons. Any changes will be posted on this page
              with an updated "Last updated" date.
            </p>

            <h2 className="text-lg font-semibold text-primary font-heading mt-8 mb-3">
              11. Contact Us
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal
              information, please contact us at:
            </p>
            <div className="text-secondary leading-relaxed">
              <p className="font-semibold text-primary">GuardX360</p>
              <p>Email: contact@guardx360.com</p>
              <p>Phone: +91 90597 77944</p>
              <p>
                Address: 3rd Floor, MIG 46/A, KPHB Phase 1, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
