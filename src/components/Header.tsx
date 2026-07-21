import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/guardx360-logo.png";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Founder's Say", to: "/about#founders-say" },
      { label: "Our Approach", to: "/about#our-approach" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "CCTV Surveillance", to: "/services#cctv" },
      { label: "Boom Barrier & Vehicle Access", to: "/services#boom-barrier" },
      { label: "Biometric & Access Control", to: "/services#biometric" },
      { label: "Solar Fencing", to: "/services#solar-fencing" },
      { label: "ANPR & UHF Vehicle Access", to: "/services#anpr-uhf" },
      { label: "Annual Maintenance Contracts", to: "/services#amc" },
      { label: "Security Assessment & Modernization", to: "/services#assessment" },
      { label: "Security Health Score", to: "/why-guardx360#health-score" },
    ],
  },
  {
    label: "Why GuardX360",
    to: "/why-guardx360",
    children: [{ label: "Delivery Process", to: "/why-guardx360#delivery-process" }],
  },
  { label: "Case Studies", to: "/case-studies" },
  {
    label: "Knowledge Center",
    to: "/knowledge-center",
    children: [
      { label: "Blog", to: "/knowledge-center/blog" },
      { label: "Checklists & Guides", to: "/knowledge-center/checklists-guides" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
  {
    label: "Partner With Us",
    to: "/partner-with-us",
    children: [
      { label: "Join Our Team", to: "/partner-with-us/join-our-team" },
      { label: "Become Our Channel Partner", to: "/partner-with-us/channel-partner" },
      { label: "Become a Dealer", to: "/partner-with-us/become-a-dealer" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
  }, [location.pathname, location.hash]);

  const handleAnchorNav = (to: string) => {
    const [path, hash] = to.split("#");
    if (hash && location.pathname === path) {
      // same page — force scroll
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-section-dark border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="GuardX360 home">
            <img
              src={logo}
              alt="GuardX360 logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-8">
            {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => navigate(item.to)}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-[11px] lg:text-xs font-medium uppercase tracking-wide py-4 whitespace-nowrap"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3 w-3" />}
                  </button>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 min-w-[240px] z-50">
                      <div className="bg-section-dark border border-white/10 py-2 shadow-lg">
                        {item.children.map((child) => (
                          <button
                            key={child.to}
                            onClick={() => handleAnchorNav(child.to)}
                            className="block w-full text-left px-4 py-2 text-xs text-white/70 hover:text-accent hover:bg-white/5 transition-colors uppercase tracking-wide"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </nav>

          <div className="hidden md:flex flex-shrink-0">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide text-[11px] lg:text-xs whitespace-nowrap"
              size="sm"
            >
              Request a Community Security Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 max-h-[80vh] overflow-y-auto">

            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigate(item.to);
                      }}
                      className="flex-1 text-left text-white/80 py-3 uppercase tracking-wide text-sm font-medium"
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <button
                        onClick={() =>
                          setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)
                        }
                        className="p-3 text-white/60"
                        aria-label="Expand"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileGroup === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openMobileGroup === item.label && (
                    <div className="pb-3 pl-4">
                      {item.children.map((child) => (
                        <button
                          key={child.to}
                          onClick={() => handleAnchorNav(child.to)}
                          className="block w-full text-left py-2 text-xs text-white/60 hover:text-accent uppercase tracking-wide"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                onClick={() => navigate("/contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4 font-semibold uppercase tracking-wide"
              >
                Request a Community Security Assessment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
