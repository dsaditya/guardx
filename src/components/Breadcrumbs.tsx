import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="bg-background border-b border-border">
    <div className="container-narrow py-3">
      <ol className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-wide text-secondary">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {item.to && !last ? (
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-primary font-medium" : ""}>{item.label}</span>
              )}
              {!last && <ChevronRight className="h-3 w-3 text-secondary/60" />}
            </li>
          );
        })}
      </ol>
    </div>
  </nav>
);

export default Breadcrumbs;
