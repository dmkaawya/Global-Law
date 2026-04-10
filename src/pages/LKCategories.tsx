import { useState, useMemo } from 'react';
import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import Toast from '@/components/Toast';
import { CATEGORIES } from '@/data/categories';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { Search, Layers, CheckCircle, Clock, X } from 'lucide-react';

const LKCategories = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState({ visible: false, message: '' });

  const totalActive = CATEGORIES.filter(c => c.file !== null).length;
  const totalSoon = CATEGORIES.length - totalActive;

  const filtered = useMemo(() => {
    return CATEGORIES.filter(cat => {
      const name = t(cat.title);
      const nameEn = cat.title.en;
      const nameSi = cat.title.si;
      const term = search.toLowerCase().trim();
      const matchSearch = !term || name.toLowerCase().includes(term) || nameEn.toLowerCase().includes(term) || nameSi.includes(term);

      let matchFilter = true;
      if (filter === 'active') matchFilter = cat.file !== null;
      else if (filter === 'soon') matchFilter = cat.file === null;
      else if (filter === 'popular') matchFilter = cat.tag === 'popular';
      else if (filter === 'new') matchFilter = cat.tag === 'new';

      return matchSearch && matchFilter;
    });
  }, [search, filter, lang, t]);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: '✅ Active' },
    { id: 'soon', label: '🕐 Coming Soon' },
    { id: 'popular', label: '🔥 Popular' },
    { id: 'new', label: '🆕 New' },
  ];

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="categories" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: 'Categories' }]} />

      {/* Header */}
      <section className="relative overflow-hidden bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="absolute inset-0 dot-bg opacity-[0.02] dark:opacity-[0.04]"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-8 md:pt-14 md:pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Law Categories</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base max-w-xl">Select a category to browse related laws explained in simple language.</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Layers className="w-3.5 h-3.5 text-brand-red" />
              <span className="font-semibold text-neutral-600 dark:text-neutral-200">{CATEGORIES.length}</span>
              <span>Categories</span>
            </div>
            <div className="w-px h-3.5 bg-neutral-200 dark:bg-brand-dark-border"></div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span className="font-semibold text-green-600 dark:text-green-400">{totalActive}</span>
              <span>Active</span>
            </div>
            <div className="w-px h-3.5 bg-neutral-200 dark:bg-brand-dark-border"></div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-yellow-500" />
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">{totalSoon}</span>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-14 md:top-16 z-40 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-lg border-b border-neutral-100 dark:border-brand-dark-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search categories..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-neutral-200 dark:bg-brand-dark-border flex items-center justify-center hover:bg-brand-red hover:text-white transition text-neutral-500">
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {filters.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`fpill shrink-0 text-[11px] font-semibold px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-brand-dark-border transition hover:border-brand-red ${filter === f.id ? 'active' : 'text-neutral-500 dark:text-neutral-400'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          {(search || filter !== 'all') && (
            <div className="mt-2 text-[11px] text-neutral-400">
              Showing <span className="font-semibold text-neutral-600 dark:text-neutral-200">{filtered.length}</span> of {CATEGORIES.length} results
            </div>
          )}
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-8 md:py-12 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
              {filtered.map((cat, i) => {
                const isSoon = cat.file === null;
                const name = t(cat.title);
                return (
                  <div
                    key={i}
                    onClick={() => isSoon ? setToast({ visible: true, message: 'Coming Soon' }) : navigate(cat.file!)}
                    className={`cat-card ${isSoon ? 'soon' : ''} bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-4 sm:p-5 md:p-6 text-center cursor-pointer`}
                  >
                    {isSoon && (
                      <div className="absolute inset-0 bg-white/60 dark:bg-brand-dark/60 backdrop-blur-[1px] rounded-2xl z-20 flex items-center justify-center">
                        <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[9px] sm:text-[10px] font-bold px-2.5 py-1.5 rounded-lg">🚧 Coming Soon</div>
                      </div>
                    )}
                    {cat.tag === 'popular' && <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full z-10">🔥 POPULAR</div>}
                    {cat.tag === 'new' && <div className="absolute top-2 right-2 bg-brand-red text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full z-10">NEW</div>}
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mx-auto mb-2 sm:mb-3 md:mb-4">{cat.icon}</div>
                    <h3 className="font-bold text-[11px] sm:text-sm md:text-base mb-0.5 sm:mb-1 leading-snug">{name}</h3>
                    <p className="text-brand-red text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">{cat.laws} Laws</p>
                    <div className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold ${isSoon ? 'text-neutral-400' : 'text-brand-red hover:gap-2'} transition-all`}>
                      <span>{isSoon ? '🔒 ' : ''}View Laws →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-brand-dark-card flex items-center justify-center text-3xl mx-auto mb-4">🔍</div>
              <h3 className="font-bold text-lg mb-1">No categories found</h3>
              <p className="text-neutral-400 text-sm mb-4">Try a different search term or filter.</p>
              <button onClick={() => { setSearch(''); setFilter('all'); }} className="text-brand-red text-sm font-semibold hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      <LKFooter activePage="categories" />
      <WhatsAppButton />
      <Toast message={toast.message} visible={toast.visible} onHide={() => setToast({ ...toast, visible: false })} success={false} />
    </div>
  );
};

export default LKCategories;
