import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Clock } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import Toast from '@/components/Toast';

const countries = [
  { flag: '🇱🇰', name: 'Sri Lanka', native: 'ශ්‍රී ලංකාව', available: true, route: '/lk' },
  { flag: '🇺🇸', name: 'United States', native: 'USA', available: false },
  { flag: '🇬🇧', name: 'United Kingdom', native: 'UK', available: false },
  { flag: '🇮🇳', name: 'India', native: 'भारत', available: false },
  { flag: '🇰🇷', name: 'South Korea', native: '대한민국', available: false },
  { flag: '🇯🇵', name: 'Japan', native: '日本', available: false },
  { flag: '🇦🇺', name: 'Australia', native: 'AU', available: false },
  { flag: '🇨🇦', name: 'Canada', native: 'CA', available: false },
  { flag: '🇩🇪', name: 'Germany', native: 'Deutschland', available: false },
  { flag: '🇫🇷', name: 'France', native: 'FR', available: false },
  { flag: '🌍', name: 'Other', native: 'More countries', available: false },
];

const CountrySelector = () => {
  const { isDark, toggle } = useDarkMode();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ visible: false, message: '' });

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-neutral-200 dark:border-brand-dark-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-brand-red">Global</span><span className="dark:text-white text-neutral-900">Law</span>
          </Link>
          <button onClick={toggle} className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-neutral-100 dark:hover:bg-brand-dark-card transition" title="Toggle Theme">
            {isDark ? <Sun className="w-[18px] h-[18px] text-yellow-400" /> : <Moon className="w-[18px] h-[18px] text-neutral-600" />}
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.02] dark:opacity-[0.04]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-red/5 dark:bg-brand-red/[0.03] rounded-full blur-[100px]"></div>
        <div className="relative w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 fade-in">
              <span>Know Your Rights.</span><br />
              <span className="text-brand-red">Understand the Law.</span>
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-md mx-auto fade-in fade-in-d1">
              Select your country to browse local laws explained simply
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 fade-in fade-in-d2">
            {countries.map(c => (
              <button
                key={c.name}
                onClick={() => c.available && c.route ? navigate(c.route) : setToast({ visible: true, message: `${c.name} is coming soon! 🚧` })}
                className={`country-card ${c.available ? 'available' : 'soon'} bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4 md:p-5 text-center ${c.name === 'Other' ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="text-3xl md:text-4xl mb-2">{c.flag}</div>
                <div className="font-semibold text-sm md:text-base">{c.name}</div>
                <div className="text-xs text-neutral-400 mt-1">{c.native}</div>
                {c.available ? (
                  <div className="mt-2 text-[10px] font-bold text-brand-red bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full inline-block">✓ Available</div>
                ) : (
                  <div className="mt-2 text-[10px] font-bold text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full inline-block">Coming Soon</div>
                )}
              </button>
            ))}
          </div>
          <p className="text-neutral-400 text-xs mt-8 fade-in fade-in-d3">
            More countries being added regularly. Currently available: <span className="text-brand-red font-semibold">Sri Lanka</span>
          </p>
        </div>
      </main>

      <footer className="bg-neutral-900 dark:bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-brand-red">Global</span><span className="text-white">Law</span>
          </div>
          <p className="text-neutral-500 text-xs text-center">Copyright © 2026 GlobalLaw. All Rights Reserved.</p>
          <p className="text-neutral-500 text-xs">
            Powered by <a href="https://vezlo.dev" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-semibold">Vezlo</a>
          </p>
        </div>
      </footer>

      <Toast message={toast.message} visible={toast.visible} onHide={() => setToast({ ...toast, visible: false })} success={false} />
    </div>
  );
};

export default CountrySelector;
