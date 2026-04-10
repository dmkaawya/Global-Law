import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

const LKBreadcrumb = ({ crumbs }: { crumbs: Crumb[] }) => (
  <div className="bg-neutral-50 dark:bg-brand-dark border-b border-neutral-100 dark:border-brand-dark-border">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5">
      <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-400">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3 opacity-40" />}
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-brand-red transition-colors">{crumb.label}</Link>
            ) : (
              <span className="text-neutral-700 dark:text-neutral-200 font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  </div>
);

export default LKBreadcrumb;
