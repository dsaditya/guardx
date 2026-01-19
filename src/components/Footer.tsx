import { Shield } from "lucide-react";

const footerLinks = [
  { label: "Systems We Handle", href: "#services" },
  { label: "Execution Framework", href: "#execution" },
  { label: "AMC", href: "#amc" },
  { label: "Site Assessment", href: "#contact" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-section-dark">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold tracking-tight text-white font-heading uppercase">
                GUARDX360
              </span>
            </div>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              GUARDX360 is a security systems engineering and operations company 
              focused on reliability, preventive maintenance, and disciplined execution 
              for gated communities and critical infrastructure.
            </p>
            <p className="text-white/40 text-sm mt-4 italic">
              "Security is not about installation. It is about readiness."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wide text-sm">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/50 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wide text-sm">Contact</h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>
                <a href="tel:+917095777764" className="hover:text-accent transition-colors">
                  +91 70957 77764
                </a>
              </p>
              <p>
                <a href="mailto:contact@guardx360.com" className="hover:text-accent transition-colors">
                  contact@guardx360.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/40">
            © {new Date().getFullYear()} GUARDX360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;