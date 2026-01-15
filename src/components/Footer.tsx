import { Shield } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#execution" },
  { label: "AMC", href: "#amc" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7" />
              <span className="text-xl font-bold tracking-tight">GUARDX360</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md text-sm leading-relaxed">
              GUARDX360 is a security systems engineering and operations company 
              focused on reliability, preventive maintenance, and disciplined execution 
              for gated communities and critical infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>
                <a href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:contact@guardx360.com" className="hover:text-primary-foreground transition-colors">
                  contact@guardx360.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} GUARDX360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
