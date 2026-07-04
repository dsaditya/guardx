import { Link } from "react-router-dom";
import { ArrowRight, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { resources, groups } from "@/data/checklists";
import { useSEO } from "@/hooks/use-seo";

const ChecklistsIndex = () => {
  useSEO({
    title: "Checklists & Guides | GuardX360 Knowledge Center",
    description:
      "Free, engineering-grade checklists and guides for gated community security audits, industrial site preparedness, and preventive maintenance.",
  });

  return (
    <>
      <PageHero
        eyebrow="Knowledge Center · Checklists & Guides"
        title="Working checklists and buyer's guides for real security decisions"
        subtitle="The same documents GuardX360 engineers use in the field — available for committees, admin teams, and site managers to use directly."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Center", to: "/knowledge-center" },
          { label: "Checklists & Guides" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {groups.map((g) => {
            const groupItems = resources.filter((r) => r.group === g.id);
            if (groupItems.length === 0) return null;
            return (
              <div key={g.id}>
                <AnimatedSection>
                  <div className="mb-8 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-heading">
                      {g.title}
                    </h2>
                    <p className="text-secondary text-base leading-relaxed">{g.subtitle}</p>
                  </div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {groupItems.map((r, i) => {
                    const Icon = r.type === "Checklist" ? ClipboardCheck : FileText;
                    return (
                      <AnimatedSection key={r.slug} delay={i * 0.05}>
                        <div className="bg-section-alt border border-border p-6 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                            <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 border border-primary text-primary">
                              {r.type}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-primary mb-3 font-heading leading-snug">
                            {r.title}
                          </h3>
                          <p className="text-sm text-secondary leading-relaxed mb-5 flex-1">
                            {r.description}
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="mt-auto border-primary text-primary uppercase tracking-wide text-xs self-start"
                          >
                            <Link to={`/knowledge-center/checklists-guides/${r.slug}`}>
                              View {r.type} <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ChecklistsIndex;
