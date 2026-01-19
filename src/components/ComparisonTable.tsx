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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Typical Vendor vs GUARDX360
          </h2>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-lg border border-border">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="bg-muted p-4 md:p-6 text-center border-r border-border">
              <h3 className="font-semibold text-muted-foreground">Typical Vendor</h3>
            </div>
            <div className="bg-primary p-4 md:p-6 text-center">
              <h3 className="font-semibold text-primary-foreground">GUARDX360</h3>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-border"
            >
              <div className="p-4 md:p-5 flex items-center gap-3 bg-card border-r border-border">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">{row.typical}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center gap-3 bg-primary/5">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm md:text-base">{row.guardx}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
