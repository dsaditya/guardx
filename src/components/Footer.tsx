import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Company",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Why GuardX360", to: "/why-guardx360" },
      { label: "Case Studies", to: "/case-studies" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "CCTV Surveillance", to: "/services#cctv" },
      { label: "Boom Barrier & Access", to: "/services#boom-barrier" },
      { label: "Biometric Access", to: "/services#biometric" },
      { label: "Solar Fencing", to: "/services#solar-fencing" },
      { label: "Annual Maintenance", to: "/services#amc" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Center", to: "/knowledge-center" },
      { label: "Contact Us", to: "/contact" },
      { label: "Partner With Us", to: "/partner-with-us" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-section-dark">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold tracking-tight text-white font-heading uppercase">
                GUARDX360
              </span>
            </div>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              Integrated security infrastructure for gated communities in Hyderabad —
              CCTV, boom barriers, biometric access control, solar fencing and AMC,
              delivered under one accountable partner.
            </p>
            <p className="text-white/40 text-sm mt-4 italic">
              Security as a Standard™
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-wide text-sm">
                {col.title}
              </h4>
              <nav className="space-y-2">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-white/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} GuardX360. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="tel:+917095777764" className="hover:text-accent transition-colors">
              +91 70957 77764
            </a>
            <a href="mailto:contact@guardx360.com" className="hover:text-accent transition-colors">
              contact@guardx360.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
