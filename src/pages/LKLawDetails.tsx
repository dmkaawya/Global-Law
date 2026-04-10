import { useParams } from 'react-router-dom';
import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/hooks/useLanguage';
import { LAWS_DB } from '@/data/lk-laws-db';
import { Link } from 'react-router-dom';
import { Lightbulb, AlertTriangle, ListOrdered, History, FileQuestion, Share2 } from 'lucide-react';

const LKLawDetails = () => {
  const { id } = useParams();
  const { lang, t } = useLanguage();

  const law = (LAWS_DB as any[]).find((l: any) => l.id === id);

  if (!law) {
    return (
      <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 min-h-screen">
        <LKNavbar />
        <div className="max-w-2xl mx-auto text-center py-24 px-4">
          <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="w-10 h-10 text-brand-red" />
          </div>
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">Law Not Found</h2>
          <Link to="/lk/categories" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl transition shadow-lg shadow-red-500/20">
            ← Back to Categories
          </Link>
        </div>
        <LKFooter />
      </div>
    );
  }

  const getTrans = (obj: any) => obj?.[lang] || obj?.en || '';

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300 flex flex-col min-h-screen">
      <LKNavbar />
      <LKBreadcrumb crumbs={[
        { label: 'GlobalLaw', to: '/' },
        { label: 'Categories', to: '/lk/categories' },
        { label: getTrans(law.category) },
        { label: getTrans(law.title) },
      ]} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-50 dark:bg-brand-dark pt-8 pb-10 md:pt-12 md:pb-14 transition-colors">
          <div className="absolute inset-0 dot-bg opacity-[0.03] dark:opacity-[0.05]"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-brand-red text-[10px] font-bold uppercase tracking-wider">
                    {getTrans(law.type)}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-2">{getTrans(law.title)}</h1>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-medium">{getTrans(law.actNo)}</p>
              </div>
              <button onClick={() => navigator.clipboard?.writeText(window.location.href)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border text-neutral-600 dark:text-neutral-300 hover:text-brand-red hover:border-brand-red transition shadow-sm text-sm font-semibold">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            {/* TL;DR */}
            <div className="bg-white dark:bg-brand-dark-card rounded-2xl p-5 md:p-6 border border-neutral-200 dark:border-brand-dark-border shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">TL;DR Summary</h3>
                  <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium">{getTrans(law.tldr)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-12 bg-white dark:bg-brand-dark transition-colors">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              <div className="lg:col-span-8 space-y-12">
                {/* Long Description */}
                <article>
                  <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: getTrans(law.longDesc) }} />
                </article>

                {/* Process */}
                {law.process && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                        <ListOrdered className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold">Process & How to Complain</h2>
                    </div>
                    <div className="space-y-4">
                      {law.process.step1 && (
                        <div className="bg-neutral-50 dark:bg-brand-dark-card rounded-xl p-4 border border-neutral-200 dark:border-brand-dark-border">
                          <h4 className="font-bold text-sm mb-1">Step 1: First Action</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">{getTrans(law.process.step1)}</p>
                        </div>
                      )}
                      {law.process.whoToMeet && (
                        <div className="bg-neutral-50 dark:bg-brand-dark-card rounded-xl p-4 border border-neutral-200 dark:border-brand-dark-border">
                          <h4 className="font-bold text-sm mb-1">Who to Meet</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">{getTrans(law.process.whoToMeet)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Incidents */}
                {law.incidents && law.incidents.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                        <History className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold">Related Incidents & Cases</h2>
                    </div>
                    <div className="space-y-4">
                      {law.incidents.map((inc: any, i: number) => (
                        <div key={i} className="bg-neutral-50 dark:bg-brand-dark-card rounded-xl p-4 border border-neutral-200 dark:border-brand-dark-border">
                          <div className="text-[10px] font-mono text-neutral-400 mb-2">{inc.date}</div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{getTrans(inc.desc)}</p>
                          {inc.outcome && <p className="text-xs text-green-600 dark:text-green-400 font-medium">✅ {getTrans(inc.outcome)}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Penalties */}
                {law.penalties && (
                  <div className="bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 p-5 md:p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400">
                      <AlertTriangle className="w-5 h-5" />
                      <h3 className="font-bold text-sm uppercase tracking-wide">Penalties & Fines</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      {law.penalties.jail && <div><span className="font-semibold text-xs text-neutral-500">🔒 Imprisonment:</span><p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{getTrans(law.penalties.jail)}</p></div>}
                      {law.penalties.fine && <div><span className="font-semibold text-xs text-neutral-500">💰 Fine:</span><p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{getTrans(law.penalties.fine)}</p></div>}
                      {law.penalties.courtType && <div><span className="font-semibold text-xs text-neutral-500">⚖️ Court:</span><p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{getTrans(law.penalties.courtType)}</p></div>}
                    </div>
                  </div>
                )}

                {/* Experts */}
                {law.experts && law.experts.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg mb-4">Expert Lawyers</h3>
                    <div className="space-y-3">
                      {law.experts.map((expert: any, i: number) => (
                        <div key={i} className="bg-white dark:bg-brand-dark-card rounded-xl p-4 border border-neutral-200 dark:border-brand-dark-border">
                          <div className="flex items-center gap-3 mb-2">
                            <img src={expert.photo} alt={getTrans(expert.name)} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <div className="font-bold text-sm">{getTrans(expert.name)}</div>
                              <div className="text-[10px] text-neutral-400">{getTrans(expert.role)}</div>
                            </div>
                          </div>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{getTrans(expert.desc)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WhatsApp CTA */}
                <div className="hidden lg:block sticky top-24">
                  <a href="https://wa.me/94775048455" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition shadow-lg shadow-green-500/20">
                    Get Help on WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <LKFooter />
      <WhatsAppButton />
    </div>
  );
};

export default LKLawDetails;
