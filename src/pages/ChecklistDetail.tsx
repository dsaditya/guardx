import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Printer, Download, CheckCircle2, ArrowRight, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { resources, getResource } from "@/data/checklists";
import { useSEO } from "@/hooks/use-seo";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().min(2, "Community or company required").max(150),
});
type LeadData = z.infer<typeof leadSchema>;

const ChecklistDetail = () => {
  const { slug } = useParams();
  const resource = slug ? getResource(slug) : undefined;
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  useSEO({
    title: resource
      ? `${resource.title} | GuardX360 ${resource.type}`
      : "Checklist | GuardX360",
    description: resource?.metaDescription,
  });

  const form = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", company: "" },
  });

  if (!resource) return <Navigate to="/knowledge-center/checklists-guides" replace />;

  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);
  const Icon = resource.type === "Checklist" ? ClipboardCheck : FileText;

  const onSubmit = (data: LeadData) => {
    console.log("PDF request:", { resource: resource.slug, ...data });
    setSubmitted(true);
    toast({
      title: "Request received",
      description: "We'll email the PDF within one business day.",
    });
  };

  const handlePrint = () => window.print();

  return (
    <>
      <section className="bg-section-dark pt-16 pb-12 md:pt-20 md:pb-16 print:hidden">
        <div className="container-narrow max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 border border-accent text-accent">
              {resource.type}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 font-heading">
            {resource.title}
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
            {resource.description}
          </p>
        </div>
      </section>

      <div className="print:hidden">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Knowledge Center", to: "/knowledge-center" },
            { label: "Checklists & Guides", to: "/knowledge-center/checklists-guides" },
            { label: resource.title },
          ]}
        />
      </div>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Action bar */}
          <div className="flex flex-wrap gap-3 justify-end mb-8 print:hidden">
            <Button variant="outline" size="sm" onClick={handlePrint} className="border-primary text-primary uppercase tracking-wide text-xs">
              <Printer className="h-3 w-3 mr-2" /> Print
            </Button>
            <Button
              size="sm"
              onClick={() => document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wide text-xs"
            >
              <Download className="h-3 w-3 mr-2" /> Download PDF
            </Button>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Content */}
            <div className="lg:col-span-8">
              <p className="text-lg text-primary leading-relaxed mb-10 font-medium">
                {resource.intro}
              </p>

              <div className="space-y-10">
                {resource.sections.map((s, i) => (
                  <AnimatedSection key={i} delay={i * 0.03}>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 font-heading">
                        {s.heading}
                      </h2>
                      {s.paragraphs && (
                        <div className="space-y-3 text-secondary text-base leading-relaxed mb-4">
                          {s.paragraphs.map((p, j) => (
                            <p key={j}>{p}</p>
                          ))}
                        </div>
                      )}
                      {s.items && (
                        <ul className="space-y-3">
                          {s.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex gap-3 items-start bg-section-alt border border-border p-3 text-sm text-primary"
                            >
                              <span className="mt-0.5 h-4 w-4 border border-primary flex-shrink-0" aria-hidden />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Sticky lead form */}
            <aside className="lg:col-span-4 print:hidden">
              <div id="download-form" className="lg:sticky lg:top-24 bg-section-alt border border-border p-6 scroll-mt-24">
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="bg-accent/10 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary font-heading mb-2">
                      PDF request received
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      We'll email the {resource.type.toLowerCase()} within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-3">
                      Download as PDF
                    </p>
                    <h3 className="text-lg font-bold text-primary font-heading mb-4 leading-snug">
                      Get a printable copy delivered to your inbox
                    </h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] uppercase tracking-wide text-secondary">Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" className="border-border" {...field} />
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
                              <FormLabel className="text-[11px] uppercase tracking-wide text-secondary">Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" className="border-border" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] uppercase tracking-wide text-secondary">Community / Company</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Prestige Towers" className="border-border" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wide text-xs font-semibold"
                        >
                          <Download className="h-3 w-3 mr-2" /> Email me the PDF
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-section-alt print:hidden">
        <div className="container-narrow">
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
            Related Resources
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-8">
            More from the Knowledge Center
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => {
              const RIcon = r.type === "Checklist" ? ClipboardCheck : FileText;
              return (
                <div key={r.slug} className="bg-background border border-border p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <RIcon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 border border-primary text-primary">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-4 font-heading leading-snug flex-1">
                    {r.title}
                  </h3>
                  <Link
                    to={`/knowledge-center/checklists-guides/${r.slug}`}
                    className="text-xs uppercase tracking-wide text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View {r.type} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChecklistDetail;
