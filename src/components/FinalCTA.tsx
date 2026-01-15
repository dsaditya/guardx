import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
          If your security systems are critical, their operations must be disciplined.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
          >
            Request a Site Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            Talk to a Security Engineer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
