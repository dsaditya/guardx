interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => (
  <section className="bg-section-dark pt-16 pb-16 md:pt-24 md:pb-20">
    <div className="container-narrow">
      <div className="max-w-4xl">
        {eyebrow && (
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
