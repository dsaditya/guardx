import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const COMMUNITY_TYPES = [
  "Gated Community",
  "Apartment Community",
  "Villa Community",
  "Commercial Property",
  "Industrial Property",
  "Other",
];

const REQUIREMENTS = [
  "Existing CCTV audit",
  "CCTV modernization",
  "New CCTV installation",
  "Recurring CCTV complaints",
  "Boom barrier",
  "ANPR",
  "UHF",
  "Biometric / access control",
  "Solar fencing",
  "AMC",
  "Complete security assessment",
  "Not sure — need consultation",
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  community: z.string().trim().min(2, "Community / property name is required").max(150),
  communityType: z.string().trim().max(60).optional(),
  location: z.string().trim().min(2, "Location is required").max(150),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  requirement: z.string().trim().max(80).optional(),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

const labelClass = "text-sm uppercase tracking-wide text-secondary";

const AssessmentLeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      community: "",
      communityType: "",
      location: "",
      phone: "",
      email: "",
      requirement: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const description = [
      `Community Type: ${data.communityType || "Not provided"}`,
      `Location / Area: ${data.location}`,
      `Looking For: ${data.requirement || "Not provided"}`,
      `Problem / Requirement: ${data.message || "Not provided"}`,
    ].join("\n");

    try {
      submitZohoLead({
        name: data.name,
        phone: data.phone,
        email: data.email,
        community: data.community,
        message: description,
      });

      await supabase.functions.invoke("send-checklist-lead", {
        body: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          community: data.community,
          checklistName: "Security Assessment Request",
          message: description,
        },
      });
    } catch (err) {
      console.error("Lead submit failed", err);
    }

    setIsSubmitted(true);
    toast({ title: "Thanks! We'll be in touch shortly." });
  };

  if (isSubmitted) {
    return (
      <div className="bg-section-alt border border-border p-8 md:p-12 text-center">
        <div className="bg-accent/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
          Request received. Our team will contact you shortly.
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
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="community"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Community / Property Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Community or property name" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="communityType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Community Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COMMUNITY_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Location / Area *</FormLabel>
                <FormControl>
                  <Input placeholder="Area, city" className="border-border" {...field} />
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
                <FormLabel className={labelClass}>Phone Number *</FormLabel>
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
                <FormLabel className={labelClass}>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="requirement"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>What Are You Looking For?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select a requirement" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {REQUIREMENTS.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Tell Us About the Problem</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="border-border"
                  placeholder="Briefly describe your existing security setup, recurring problem or requirement."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold uppercase tracking-wide"
        >
          Request My Security Assessment
          <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
};

export default AssessmentLeadForm;
