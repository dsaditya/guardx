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

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  community: z.string().trim().min(2, "Community / property name is required").max(150),
  communityType: z.string().min(1, "Please select a community type"),
  location: z.string().trim().min(2, "Location is required").max(120),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  requirement: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

const communityTypes = [
  "Apartment Complex",
  "Villa Community",
  "Residential Township",
  "Other",
];

interface LeadFormProps {
  showEmail?: boolean;
  submitLabel?: string;
}

const LeadForm = ({ showEmail = false, submitLabel = "Request a Free Security Assessment" }: LeadFormProps) => {
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
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Lead submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Request received",
      description: "The GuardX360 team will contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-section-alt border border-border p-8 md:p-12">
        <div className="bg-accent/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
          Thank You
        </h3>
        <p className="text-secondary text-lg mb-6">
          Your request has been received. A GuardX360 engineer will contact you within 24 hours to schedule your free Security Health Score assessment.
        </p>
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
            name="community"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Community / Property Name *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Prestige Towers" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="communityType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Community Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select community type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {communityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
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
                <FormLabel className="text-sm uppercase tracking-wide text-secondary">Location / Area in Hyderabad *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Gachibowli, Kondapur" className="border-border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
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
          {showEmail && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm uppercase tracking-wide text-secondary">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" className="border-border" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <FormField
          control={form.control}
          name="requirement"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-wide text-secondary">What Are You Looking For?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe your community's security requirement — new installation, AMC, upgrade, or free assessment."
                  className="min-h-[120px] resize-none border-border"
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
          {submitLabel}
          <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
};

export default LeadForm;
