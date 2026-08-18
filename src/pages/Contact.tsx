import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { submitZohoLead } from "@/lib/zoho";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  community: z.string().trim().max(150).optional(),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    community: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const data = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      community: form.community.trim() || "Not provided",
      message: form.message.trim(),
    };

    try {
      submitZohoLead(data);

      await supabase.functions.invoke("send-checklist-lead", {
        body: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          community: data.community,
          checklistName: `Contact Us enquiry${data.message ? ` — ${data.message}` : ""}`,
        },
      });

      toast({ title: "Thanks! We'll be in touch shortly." });
      setForm({ name: "", phone: "", email: "", community: "", message: "" });
    } catch (err) {
      console.error("Contact submit failed", err);
      toast({ title: "Thanks! We'll be in touch shortly." });
    } finally {
      setSubmitting(false);
    }
  };

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

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="contact-name" className="text-xs uppercase tracking-wide text-secondary">
                        Name *
                      </Label>
                      <Input
                        id="contact-name"
                        value={form.name}
                        onChange={update("name")}
                        required
                        maxLength={100}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="text-xs uppercase tracking-wide text-secondary">
                        Phone *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        required
                        maxLength={20}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="contact-email" className="text-xs uppercase tracking-wide text-secondary">
                        Email *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        required
                        maxLength={255}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-community" className="text-xs uppercase tracking-wide text-secondary">
                        Community Name
                      </Label>
                      <Input
                        id="contact-community"
                        value={form.community}
                        onChange={update("community")}
                        maxLength={150}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-xs uppercase tracking-wide text-secondary">
                      Message (optional)
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={form.message}
                      onChange={update("message")}
                      maxLength={1000}
                      rows={4}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>
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
    </>
  );
};

export default Contact;
