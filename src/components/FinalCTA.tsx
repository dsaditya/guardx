import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-section-dark">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Brand Principle
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto font-heading">
            If your security systems are critical, their operations must be disciplined.
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Security is not about installation. It is about readiness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Talk to a Security Engineer
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
