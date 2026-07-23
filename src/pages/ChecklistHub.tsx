import { useState } from "react";
import { z } from "zod";
import { ChevronDown, Check, Download, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/use-seo";
import { supabase } from "@/integrations/supabase/client";
import cctvAsset from "@/assets/checklists/GuardX360-CCTV-Surveillance-Readiness-Checklist.pdf.asset.json";
import boomAsset from "@/assets/checklists/GuardX360-Boom-Barrier-Installation-Checklist.pdf.asset.json";
import bioAsset from "@/assets/checklists/GuardX360-Biometric-Access-Control-Checklist.pdf.asset.json";
import amcAsset from "@/assets/checklists/GuardX360-AMC-Readiness-Checklist.pdf.asset.json";

type ChecklistKey = "cctv" | "boom" | "biometric" | "amc";

interface ChecklistDef {
  key: ChecklistKey;
  label: string;
  fileName: string;
  url: string;
  items: string[];
}

const CHECKLISTS: ChecklistDef[] = [
  {
    key: "cctv",
    label: "CCTV Surveillance",
    fileName: cctvAsset.original_filename,
    url: cctvAsset.url,
    items: [
      "Site walkthrough for blind spots",
      "Camera count matches entry-exit + common areas",
      "Dome + bullet mix confirmed",
      "Night vision / IR range adequate",
      "NVR storage sized for 30-day retention",
      "UPS backup for cameras + recorder",
      "Cabling protected from tampering / weather",
      "Remote viewing app configured",
      "Footage export process defined",
    ],
  },
  {
    key: "boom",
    label: "Boom Barrier Installation",
    fileName: boomAsset.original_filename,
    url: boomAsset.url,
    items: [
      "Entry / exit points mapped, traffic flow confirmed",
      "Barrier arm length matches driveway",
      "Power + backup battery sized for cycles/day",
      "RFID / tag reader planned",
      "Manual override defined",
      "Safety loop sensors installed",
      "Visitor / resident lanes separated",
      "AMC schedule set post-install",
    ],
  },
  {
    key: "biometric",
    label: "Biometric Access Control",
    fileName: bioAsset.original_filename,
    url: bioAsset.url,
    items: [
      "Resident-only access points identified",
      "Enrollment plan scheduled",
      "Visitor workflow defined",
      "Staff / vendor access levels separate",
      "Offline fallback defined",
      "Access logs reviewed periodically",
      "CCTV cross-verification integrated",
    ],
  },
  {
    key: "amc",
    label: "AMC Readiness",
    fileName: amcAsset.original_filename,
    url: amcAsset.url,
    items: [
      "Equipment inventory documented",
      "Preventive maintenance schedule defined",
      "Response SLA agreed",
      "Spare parts confirmed",
      "Escalation contact shared",
      "Annual health-check report format agreed",
      "Renewal reminder set (60 days prior)",
    ],
  },
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  community: z.string().trim().min(2, "Enter your community name").max(150),
});

const ChecklistHub = () => {
  useSEO({
    title: "Security Checklist Hub | GuardX360",
    description:
      "Download field-tested security checklists for CCTV, boom barriers, biometric access and AMC readiness. Built by GuardX360 engineers.",
  });

  const [selectedKey, setSelectedKey] = useState<ChecklistKey>("cctv");
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", community: "" });

  const selected = CHECKLISTS.find((c) => c.key === selectedKey)!;

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-checklist-lead", {
        body: {
          ...parsed.data,
          checklistName: selected.label,
        },
      });
      if (error) throw error;

      // Trigger download
      const a = document.createElement("a");
      a.href = selected.url;
      a.download = selected.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      toast({ title: "Thanks! Downloading your checklist." });
      setForm({ name: "", phone: "", email: "", community: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Security Checklist Hub"
        subtitle="Pick a checklist, review the items, and get the printable PDF. The same working documents our engineers use on site."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Resources" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-10">
          {/* LEFT: Checklist selector + preview */}
          <AnimatedSection>
            <Label className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Select a checklist
            </Label>
            <div className="relative mt-2">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between border border-border bg-section-alt px-4 py-3 text-left text-primary font-medium"
              >
                <span>{selected.label}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && (
                <div className="absolute left-0 right-0 top-full z-10 border border-border bg-background shadow-lg">
                  {CHECKLISTS.map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => {
                        setSelectedKey(c.key);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-section-alt ${
                        c.key === selectedKey ? "text-accent font-semibold" : "text-primary"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 border border-border bg-section-alt p-6">
              <h3 className="text-lg font-bold text-primary font-heading mb-4">
                {selected.label} Checklist
              </h3>
              <ul className="space-y-3">
                {selected.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-primary">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center border border-primary">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* RIGHT: Lead form */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border bg-background p-6 md:p-8">
              <h2 className="text-xl font-bold text-primary font-heading mb-2">
                Get the PDF
              </h2>
              <p className="text-sm text-secondary mb-6">
                Enter your details and we'll email a copy to our team plus download the checklist to your device.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-wide">Name</Label>
                  <Input id="name" value={form.name} onChange={update("name")} required maxLength={100} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wide">Phone</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={update("phone")} required maxLength={20} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-wide">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={update("email")} required maxLength={255} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="community" className="text-xs uppercase tracking-wide">Community Name</Label>
                  <Input id="community" value={form.community} onChange={update("community")} required maxLength={150} className="mt-1" />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide"
                >
                  {submitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <><Download className="mr-2 h-4 w-4" /> Download Checklist</>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ChecklistHub;
