import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/hooks/useLanguage';
import { CYBER_LAWS } from '@/data/categories';

const T = {
  en: {
    catBadge: 'Digital & Technology',
    pageTitle: 'Cyber Laws',
    pageDesc: 'Key legal frameworks governing the internet, data protection, and digital transactions in Sri Lanka. Understand your rights and penalties in the digital space.',
    listTitle: 'Legislation & Acts',
    sortBy: 'Sort by:',
    optRelevance: 'Relevance',
    optYear: 'Year (Newest)',
    lblPenalty: 'Penalty',
    btnRead: 'Read Full Law →',
  },
  si: {
    catBadge: 'ඩිජිටල් හා තාක්ෂණය',
    pageTitle: 'සයිබර් නීති',
    pageDesc: 'අන්තර්ජාලය, දත්ත ආරක්ෂණය සහ ශ්‍රී ලංකාවේ ඩිජිටල් ගනුදෙනු පාලනය කරන ප්‍රධාන නීතිමය රාමු. ඩිජිටල් අවකාශයේ ඔබේ අයිතිවාසිකම් සහ දඩ මුදල් පිළිබඳව දැනගන්න.',
    listTitle: 'පනත් සහ ප්‍රඥප්ති',
    sortBy: 'සැකසීම:',
    optRelevance: 'ප්‍රමුඛත්වය',
    optYear: 'වසර (අලුත්ම)',
    lblPenalty: 'දඬුවම',
    btnRead: 'නීතිය සම්පූර්ණයෙන් කරුණු බලන්න →',
  }
};

const LKCyber = () => {
  const { lang, t } = useLanguage();
  const [sortBy, setSortBy] = useState('relevance');
  const tr = (key: string) => (T[lang] as Record<string, string>)?.[key] || (T.en as Record<string, string>)[key] || '';

  const sortedLaws = [...CYBER_LAWS].sort((a, b) => {
    if (sortBy === 'year') {
      const yearA = parseInt(a.year.split('/')[0]);
      const yearB = parseInt(b.year.split('/')[0]);
      return yearB - yearA;
    }
    return 0;
  });

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="categories" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: lang === 'si' ? 'කාණ්ඩ' : 'Categories', to: '/lk/categories' }, { label: tr('pageTitle') }]} />

      {/* Header */}
      <section className="relative overflow-hidden bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="absolute inset-0 dot-bg opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-brand-red text-[10px] font-bold uppercase tracking-wider mb-3">
                <ShieldAlert className="w-3 h-3" />
                <span>{tr('catBadge')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5">{tr('pageTitle')}</h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                {tr('pageDesc')}
              </p>
            </div>
            <div className="hidden md:flex">
              <div className="w-20 h-20 bg-white dark:bg-brand-dark-card rounded-2xl shadow-xl border border-neutral-100 dark:border-brand-dark-border flex items-center justify-center text-4xl">💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Law Cards */}
      <section className="py-8 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span>{tr('listTitle')}</span>
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-brand-dark-border text-neutral-500">{CYBER_LAWS.length}</span>
            </h2>
            <div className="flex items-center gap-2 text-[11px] text-neutral-400">
              <span>{tr('sortBy')}</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-transparent font-medium text-neutral-700 dark:text-neutral-300 focus:outline-none cursor-pointer"
              >
                <option value="relevance">{tr('optRelevance')}</option>
                <option value="year">{tr('optYear')}</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {sortedLaws.map(law => (
              <div
                key={law.id}
                className="law-card bg-white dark:bg-brand-dark-card rounded-2xl p-5 md:p-6 border border-neutral-100 dark:border-brand-dark-border flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl icon-bg flex items-center justify-center text-2xl shadow-sm border border-neutral-100 dark:border-brand-dark-border">
                    {law.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-neutral-400 bg-neutral-50 dark:bg-brand-dark px-2 py-1 rounded-md">{law.year}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug text-neutral-900 dark:text-white">{t(law.title)}</h3>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-grow">
                  {t(law.tldr)}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-brand-dark-border">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">{tr('lblPenalty')}</span>
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-brand-dark/50 p-2 rounded-lg border border-neutral-100 dark:border-brand-dark-border">
                      {t(law.penalty)}
                    </p>
                  </div>
                  <Link
                    to={`/lk/law/${law.id}`}
                    className="block w-full text-center py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold transition shadow-lg shadow-red-500/20"
                  >
                    {tr('btnRead')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LKFooter activePage="categories" />
      <WhatsAppButton />
    </div>
  );
};

export default LKCyber;
