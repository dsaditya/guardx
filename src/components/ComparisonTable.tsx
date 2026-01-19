import { X, Check } from "lucide-react";

const comparisons = [
  { typical: "Installation-focused", guardx: "Reliability-focused" },
  { typical: "Reactive service", guardx: "Preventive approach" },
  { typical: "Vague AMC scope", guardx: "Clearly defined scope" },
  { typical: "Repeat complaints", guardx: "Root-cause resolution" },
  { typical: "Multiple follow-ups", guardx: "Structured closure" },
];

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Case Learnings
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
            Typical Vendor vs GUARDX360
          </h2>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden border border-border">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="bg-muted p-4 md:p-6 text-center border-r border-border">
              <h3 className="font-semibold text-secondary uppercase tracking-wide text-sm">Typical Vendor</h3>
            </div>
            <div className="bg-section-dark p-4 md:p-6 text-center">
              <h3 className="font-semibold text-white uppercase tracking-wide text-sm">GUARDX360</h3>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-border"
            >
              <div className="p-4 md:p-5 flex items-center gap-3 bg-card border-r border-border">
                <X className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-secondary text-sm">{row.typical}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center gap-3 bg-section-dark/5">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{row.guardx}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;