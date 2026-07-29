import { useState } from "react";
import { z } from "zod";
import { MessageSquare, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  community: z.string().trim().min(2, "Enter your community name").max(150),
  message: z.string().trim().max(1000).optional(),
});

const GetInTouchButton = () => {
  const [open, setOpen] = useState(false);
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
      community: form.community.trim(),
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
          checklistName: `Get in Touch enquiry${data.message ? ` — ${data.message}` : ""}`,
        },
      });


      toast({ title: "Thanks! We'll be in touch shortly." });
      setForm({ name: "", phone: "", email: "", community: "", message: "" });
      setOpen(false);
    } catch (err) {
      console.error("Get in Touch submit failed", err);
      toast({ title: "Thanks! We'll be in touch shortly." });
      setOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Get in touch"
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 flex items-center gap-2 bg-accent text-accent-foreground shadow-lg rounded-l-md px-2 py-3 md:px-4 md:py-4 font-semibold uppercase tracking-wide text-[10px] md:text-xs hover:bg-accent/90 transition-colors"
      >
        <MessageSquare className="h-4 w-4 flex-shrink-0" />
        <span className="hidden md:inline [writing-mode:vertical-rl] rotate-180 tracking-widest">
          Get in Touch
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">Get in touch</DialogTitle>
            <DialogDescription>
              Share your details and our team will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="git-name" className="text-xs uppercase tracking-wide">Name</Label>
              <Input id="git-name" value={form.name} onChange={update("name")} required maxLength={100} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="git-phone" className="text-xs uppercase tracking-wide">Phone</Label>
              <Input id="git-phone" type="tel" value={form.phone} onChange={update("phone")} required maxLength={20} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="git-email" className="text-xs uppercase tracking-wide">Email</Label>
              <Input id="git-email" type="email" value={form.email} onChange={update("email")} required maxLength={255} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="git-community" className="text-xs uppercase tracking-wide">Community Name</Label>
              <Input id="git-community" value={form.community} onChange={update("community")} required maxLength={150} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="git-message" className="text-xs uppercase tracking-wide">Message (optional)</Label>
              <Textarea id="git-message" value={form.message} onChange={update("message")} maxLength={1000} rows={3} className="mt-1" />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide"
            >
              {submitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetInTouchButton;
