import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-section-dark">
      <div className="container-narrow">
        <div className="max-w-4xl">
          {/* Brand Promise Tag */}
          <div className="inline-block mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Security Responsibility
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            Security systems that work when they're needed most.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Professional security systems for gated communities and critical sites — designed, installed, and maintained with discipline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold uppercase tracking-wide"
            >
              Request a Site Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-primary text-base px-8 py-6 font-medium"
            >
              <Phone className="mr-2 h-5 w-5" />
              Speak to a Security Engineer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;