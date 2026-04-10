import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, Globe, ChevronDown } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLanguage, Lang } from '@/hooks/useLanguage';

interface LKNavbarProps {
  activePage?: string;
}

const LKNavbar = ({ activePage }: LKNavbarProps) => {
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, setLang } = useLanguage();
  const [mobOpen, setMobOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const links = [
    { to: '/lk', label: 'Home', id: 'home' },
    { to: '/lk/categories', label: 'Categories', id: 'categories' },
    { to: '/lk/court-system', label: 'Court System', id: 'court-system' },
    { to: '/lk/about', label: 'About Us', id: 'about' },
    { to: '/lk/contact', label: 'Contact', id: 'contact' },
  ];

  const isActive = (id: string) => activePage === id;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-lg border-b border-neutral-200 dark:border-brand-dark-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/lk" className="flex items-center gap-1.5 shrink-0">
            <span className="text-lg md:text-2xl font-extrabold tracking-tight">
              <span className="text-brand-red">Global</span>
              <span className="dark:text-white">Law</span>
            </span>
            <span className="text-base md:text-lg">🇱🇰</span>
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-[13px] font-medium">
            {links.map(link => (
              <Link
                key={link.id}
                to={link.to}
                className={isActive(link.id)
                  ? 'text-brand-red border-b-2 border-brand-red pb-0.5'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-brand-red transition'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:gap-2.5">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1.5 rounded-lg border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition"
              >
                <Globe className="w-3 h-3" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="w-2.5 h-2.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-lg shadow-xl overflow-hidden z-50">
                  <button onClick={() => { setLang('en'); setLangOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-neutral-50 dark:hover:bg-brand-dark-border transition text-left">
                    <span>🇬🇧</span><span>English</span>{lang === 'en' && <span className="ml-auto text-brand-red">✓</span>}
                  </button>
                  <button onClick={() => { setLang('si'); setLangOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2.5 text-sm hover:bg-neutral-50 dark:hover:bg-brand-dark-border transition text-left">
                    <span>🇱🇰</span><span>සිංහල</span>{lang === 'si' && <span className="ml-auto text-brand-red">✓</span>}
                  </button>
                </div>
              )}
            </div>

            <button onClick={toggleDark} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-brand-dark-card transition" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-neutral-500" />}
            </button>

            <button onClick={() => setMobOpen(!mobOpen)} className="md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-brand-dark-card transition" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-200 dark:border-brand-dark-border pt-3 mob-menu-anim">
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              {links.map(link => (
                <Link
                  key={link.id}
                  to={link.to}
                  onClick={() => setMobOpen(false)}
                  className={isActive(link.id)
                    ? 'text-brand-red py-1'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-brand-red py-1'}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/lk/credits" onClick={() => setMobOpen(false)} className="text-neutral-500 dark:text-neutral-400 hover:text-brand-red py-1">
                Credits
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LKNavbar;
