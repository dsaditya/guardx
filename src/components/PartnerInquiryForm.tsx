import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export type PartnerField = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  maxLength?: number;
};

interface Props {
  fields: PartnerField[];
  submitLabel?: string;
  formName: string;
}

const buildSchema = (fields: PartnerField[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  fields.forEach((f) => {
    let v: z.ZodString = z.string().trim().max(f.maxLength ?? 1000);
    if (f.type === "email") v = v.email("Enter a valid email");
    if (f.type === "tel") v = v.min(10, "Enter a valid phone number").max(15);
    if (f.required) v = v.min(1, `${f.label} is required`);
    shape[f.name] = f.required ? v : v.optional().or(z.literal(""));
  });
  return z.object(shape);
};

const PartnerInquiryForm = ({ fields, submitLabel = "Submit Inquiry", formName }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const schema = buildSchema(fields);
  const defaults = Object.fromEntries(fields.map((f) => [f.name, ""]));

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });

  const onSubmit = (data: Record<string, string>) => {
    console.log(`${formName} submitted:`, data);
    setSubmitted(true);
    toast({
      title: "Inquiry received",
      description: "The GuardX360 team will get back to you within 2 business days.",
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-section-alt border border-border p-8 md:p-12">
        <div className="bg-accent/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Thank You</h3>
        <p className="text-secondary text-lg mb-6">
          Your inquiry has been received. A GuardX360 representative will contact you within 2 business days.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
          variant="outline"
          className="border-primary text-primary uppercase tracking-wide"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {fields.map((f) => (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name}
              render={({ field }) => (
                <FormItem className={f.type === "textarea" ? "sm:col-span-2" : ""}>
                  <FormLabel className="text-sm uppercase tracking-wide text-secondary">
                    {f.label}
                    {f.required && " *"}
                  </FormLabel>
                  <FormControl>
                    {f.type === "textarea" ? (
                      <Textarea
                        placeholder={f.placeholder}
                        className="min-h-[120px] resize-none border-border"
                        {...field}
                      />
                    ) : (
                      <Input
                        type={f.type ?? "text"}
                        placeholder={f.placeholder}
                        className="border-border"
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
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

export default PartnerInquiryForm;
