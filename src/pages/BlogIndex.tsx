import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, User, Clock, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, categories } from "@/data/blog-posts";
import { useSEO } from "@/hooks/use-seo";

const PAGE_SIZE = 6;

const BlogIndex = () => {
  useSEO({
    title: "GuardX360 Blog | Security Systems Insights for Communities & Industrial Sites",
    description:
      "Engineering-led articles on preventive maintenance, gated community security, and industrial site design — from the GuardX360 team.",
  });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = category ? p.category === category : true;
      const q = query.trim().toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const visiblePosts = filtered.slice(0, visible);
  const recent = blogPosts.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Center · Blog"
        title="Insights from the GuardX360 engineering team"
        subtitle="Practical, non-marketing writing on how security systems for gated communities and industrial sites actually behave in the field."
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Center", to: "/knowledge-center" },
          { label: "Blog" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main column */}
            <div className="lg:col-span-8">
              {/* Search + filter */}
              <div className="mb-8 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
                  <Input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setVisible(PAGE_SIZE);
                    }}
                    placeholder="Search articles…"
                    className="pl-9 border-border"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setCategory(null);
                      setVisible(PAGE_SIZE);
                    }}
                    className={`px-3 py-1 text-xs uppercase tracking-wide border ${
                      category === null
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-secondary hover:border-primary"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCategory(c);
                        setVisible(PAGE_SIZE);
                      }}
                      className={`px-3 py-1 text-xs uppercase tracking-wide border ${
                        category === c
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-secondary hover:border-primary"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {visiblePosts.length === 0 ? (
                <p className="text-secondary text-sm">No articles match your search.</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {visiblePosts.map((post, i) => (
                    <AnimatedSection key={post.slug} delay={i * 0.04}>
                      <article className="bg-section-alt border border-border h-full flex flex-col">
                        <Link
                          to={`/knowledge-center/blog/${post.slug}`}
                          className="aspect-[16/9] bg-primary/5 border-b border-border flex items-center justify-center text-secondary"
                          aria-label={post.title}
                        >
                          <Camera className="h-8 w-8 text-primary/30" strokeWidth={1.5} />
                        </Link>
                        <div className="p-5 flex flex-col flex-1">
                          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">
                            {post.category}
                          </span>
                          <h3 className="text-base font-bold text-primary mb-2 font-heading leading-snug">
                            <Link
                              to={`/knowledge-center/blog/${post.slug}`}
                              className="hover:text-accent transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-[11px] text-secondary uppercase tracking-wide border-t border-border pt-3">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" /> {post.author.split(" ")[0]}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {post.date}
                            </span>
                          </div>
                          <Link
                            to={`/knowledge-center/blog/${post.slug}`}
                            className="mt-4 text-xs uppercase tracking-wide text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            Read more <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              )}

              {filtered.length > visible && (
                <div className="mt-10 text-center">
                  <Button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    variant="outline"
                    className="border-primary text-primary uppercase tracking-wide"
                  >
                    Load more articles
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-section-alt border border-border p-5">
                <h3 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recent.map((p) => (
                    <li key={p.slug} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <Link
                        to={`/knowledge-center/blog/${p.slug}`}
                        className="text-sm text-primary hover:text-accent font-medium font-heading leading-snug block mb-1"
                      >
                        {p.title}
                      </Link>
                      <span className="text-[11px] text-secondary uppercase tracking-wide">
                        {p.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-section-alt border border-border p-5">
                <h3 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setCategory(c)}
                        className="text-sm text-primary hover:text-accent text-left w-full"
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-section-dark p-6 text-white">
                <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-3">
                  Free Assessment
                </p>
                <h3 className="text-lg font-bold font-heading mb-3 leading-snug">
                  Get your community's Security Health Score.
                </h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  An on-site GuardX360 engineer will rate your existing system across six parameters — no obligation.
                </p>
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wide text-xs font-semibold"
                >
                  <Link to="/contact">Request Assessment</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
