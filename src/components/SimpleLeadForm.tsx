import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { submitZohoLead } from "@/lib/zoho";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255),
});

type FormData = z.infer<typeof schema>;

interface SimpleLeadFormProps {
  submitLabel?: string;
}

const SimpleLeadForm = ({ submitLabel = "Submit Request" }: SimpleLeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      submitZohoLead({
        name: data.name,
        phone: data.phone,
        email: data.email,
      });

      await supabase.functions.invoke("send-checklist-lead", {
        body: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          community: "",
          checklistName: "Security Assessment Request",
        },
      });
    } catch (err) {
      console.error("Lead submit failed", err);
    }

    setIsSubmitted(true);
    toast({
      title: "Thanks! We'll be in touch shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl text-center bg-section-alt border border-border p-8 md:p-12">
        <div className="bg-accent/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
          Thanks! We'll be in touch shortly.
        </h3>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          variant="outline"
          className="border-primary text-primary uppercase tracking-wide"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+91" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold uppercase tracking-wide"
        >
          {submitLabel}
          <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
};

export default SimpleLeadForm;
