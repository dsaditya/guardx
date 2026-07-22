import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { useSEO } from "@/hooks/use-seo";

export interface ServicePageProps {
  afterContent?: ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro?: string;
  bullets: string[];
  closing?: string;
  seoTitle: string;
  seoDescription: string;
}

const ServicePage = ({
  eyebrow = "Service",
  title,
  description,
  image,
  imageAlt,
  intro,
  bullets,
  closing,
  seoTitle,
  seoDescription,
}: ServicePageProps) => {
  useSEO({ title: seoTitle, description: seoDescription });

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={description} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-6">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="w-full h-auto object-cover border border-border"
                />
              </div>
              <div className="md:col-span-6 space-y-5 text-secondary text-base leading-relaxed">
                {intro && <p>{intro}</p>}
                <ul className="space-y-3">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 bg-accent flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {closing && <p>{closing}</p>}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-4">
              Ready to strengthen your community's security?
            </h2>
            <p className="text-secondary max-w-2xl mx-auto mb-8">
              Book a site assessment. We'll evaluate your current infrastructure and share a clear, prioritized plan.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide"
            >
              <Link to="/contact">
                Request a Community Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
