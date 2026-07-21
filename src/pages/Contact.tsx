import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact GuardX360 — Gated Community Security Infrastructure Specialists in Hyderabad"
        subtitle="Speak with the GuardX360 team about your community's security infrastructure — whether you need a new integrated system, an AMC for existing equipment, or a free Security Health Score assessment. No obligation, no pressure."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <p className="text-xs text-secondary uppercase tracking-wide mb-10 leading-relaxed" aria-label="Primary keywords">
            Contact GuardX360 · Security system quote Hyderabad · Gated community security consultation
          </p>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-section-alt border border-border p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
                  Request a Community Security Assessment
                </h2>
                <p className="text-secondary text-base leading-relaxed mb-8">
                  Share your community's requirements with the GuardX360 team. A senior engineer will review your request and respond within 24 hours on working days.
                </p>
                <Button
                  size="lg"
                  onClick={() => setOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold uppercase tracking-wide"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
                <p className="text-xs text-secondary mt-6">
                  The form opens in a secure popup. If it does not open, please use the direct contact details on the right.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="bg-section-alt border border-border p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <a href="tel:+917095777764" className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary transition-colors group">
                      <div className="bg-primary p-3">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-secondary uppercase tracking-wide">Call Us</p>
                        <p className="font-medium text-foreground">+91 70957 77764</p>
                      </div>
                    </a>
                    <a href="mailto:contact@guardx360.com" className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary transition-colors group">
                      <div className="bg-primary p-3">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-secondary uppercase tracking-wide">Email Us</p>
                        <p className="font-medium text-foreground text-sm">contact@guardx360.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-start gap-3 text-secondary text-sm">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-secondary mb-1">Service Area</p>
                      <p className="text-foreground">
                        Hyderabad, Telangana &<br /> Andhra Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-secondary pt-4 border-t border-border">
                  Response within 24 hours on working days.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary font-heading">
              Request a Community Security Assessment
            </DialogTitle>
            <DialogDescription className="text-secondary">
              Share your community's requirements. A GuardX360 engineer will respond within 24 hours on working days.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <LeadForm showEmail submitLabel="Submit Request" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
