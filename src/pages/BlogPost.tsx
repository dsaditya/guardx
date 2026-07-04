import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, Share2, Twitter, Linkedin, Link as LinkIcon, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, getPost } from "@/data/blog-posts";
import { useSEO } from "@/hooks/use-seo";
import { useToast } from "@/hooks/use-toast";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useSEO({
    title: post ? `${post.title} | GuardX360 Blog` : "GuardX360 Blog",
    description: post?.metaDescription,
  });

  useEffect(() => {
    if (!post) return;
    const handler = () => {
      let current: string | null = null;
      for (const s of post.sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 140) current = s.id;
      }
      setActiveSection(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [post]);

  if (!post) return <Navigate to="/knowledge-center/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied", description: "Article URL copied to clipboard." });
    } catch {
      toast({ title: "Copy failed", description: "Please copy the URL from the address bar." });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-section-dark pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="container-narrow max-w-4xl">
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-heading">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70 uppercase tracking-wide">
            <span className="flex items-center gap-2"><User className="h-3.5 w-3.5" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Center", to: "/knowledge-center" },
          { label: "Blog", to: "/knowledge-center/blog" },
          { label: post.title },
        ]}
      />

      {/* Featured image */}
      <section className="bg-background pt-10">
        <div className="container-narrow max-w-5xl">
          <div className="aspect-[16/7] bg-section-alt border border-border flex items-center justify-center">
            <Camera className="h-12 w-12 text-primary/30" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* ARTICLE + TOC */}
      <section className="pt-10 pb-20 bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <p className="text-[11px] uppercase tracking-widest text-accent font-semibold mb-4">
                  On this page
                </p>
                <nav>
                  <ul className="space-y-2 border-l border-border">
                    {post.sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`block pl-4 -ml-px border-l text-xs leading-snug py-1 transition-colors ${
                            activeSection === s.id
                              ? "border-accent text-primary font-medium"
                              : "border-transparent text-secondary hover:text-primary"
                          }`}
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Share */}
                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-widest text-accent font-semibold mb-3 flex items-center gap-2">
                    <Share2 className="h-3 w-3" /> Share
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-border hover:border-primary text-primary"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-border hover:border-primary text-primary"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <button
                      onClick={copyLink}
                      className="p-2 border border-border hover:border-primary text-primary"
                      aria-label="Copy link"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-3xl">
              <p className="text-lg md:text-xl text-primary leading-relaxed mb-10 font-medium">
                {post.intro}
              </p>

              {post.sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-secondary text-base leading-relaxed">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.list && (
                    <ul className="mt-5 space-y-2">
                      {s.list.map((li, i) => (
                        <li key={i} className="flex gap-3 text-secondary text-base">
                          <span className="text-accent flex-shrink-0 mt-1">→</span>
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.quote && (
                    <blockquote className="mt-6 border-l-4 border-accent pl-5 py-2 text-primary italic text-lg">
                      {s.quote}
                    </blockquote>
                  )}
                </section>
              ))}

              {/* End CTA */}
              <AnimatedSection>
                <div className="mt-12 bg-section-dark p-8 md:p-10 text-white">
                  <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-3">
                    Security as a Standard™
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 leading-tight">
                    Ready to see how your own system scores?
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Book a free Security Health Score assessment. A GuardX360 engineer will visit your site and produce a written rating across six parameters — no sales pressure.
                  </p>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wide font-semibold">
                    <Link to="/contact">
                      Request a Free Security Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </article>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
            Related Articles
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading mb-8">
            Keep reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <article key={r.slug} className="bg-background border border-border flex flex-col">
                <div className="aspect-[16/9] bg-section-alt border-b border-border flex items-center justify-center">
                  <Camera className="h-8 w-8 text-primary/30" strokeWidth={1.5} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold text-primary mb-3 font-heading leading-snug flex-1">
                    <Link to={`/knowledge-center/blog/${r.slug}`} className="hover:text-accent">
                      {r.title}
                    </Link>
                  </h3>
                  <Link
                    to={`/knowledge-center/blog/${r.slug}`}
                    className="text-xs uppercase tracking-wide text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
