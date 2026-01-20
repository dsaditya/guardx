import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Systems We Handle", href: "#services" },
  { label: "Execution Framework", href: "#execution" },
  { label: "AMC", href: "#amc" },
  { label: "Site Assessment", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-section-dark border-b border-white/10">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-white" strokeWidth={2} />
            <span className="text-lg md:text-xl font-bold text-white tracking-tight font-heading uppercase">
              GUARDX360
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide text-sm"
            >
              Get Assessment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white/70 hover:text-white transition-colors font-medium py-2 uppercase tracking-wide text-sm"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground mt-2 font-semibold uppercase tracking-wide"
              >
                Get Assessment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;