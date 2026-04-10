import { useEffect, useRef } from 'react';
import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import {
  Target, BookOpen, Search, FileText, ListChecks, HelpCircle,
  ShieldCheck, Eye, Sparkles, Accessibility, Mail, Database,
  Palette, Code2, AlertTriangle
} from 'lucide-react';

const stats = [
  { value: 75, label: 'Laws Explained', suffix: '+' },
  { value: 8, label: 'Categories', suffix: '' },
  { value: 2, label: 'Languages', suffix: '' },
  { value: null, label: 'Free Forever', display: '100%' },
];

const howItWorks = [
  { num: '1', icon: Search, title: 'Search or Browse', desc: 'Find laws by category or use our smart search bar', color: 'bg-red-50 dark:bg-red-900/15', iconColor: 'text-brand-red' },
  { num: '2', icon: FileText, title: 'Read TL;DR First', desc: '30-second summary before diving into details', color: 'bg-blue-50 dark:bg-blue-900/10', iconColor: 'text-blue-500' },
  { num: '3', icon: ListChecks, title: 'Key Points', desc: 'Understand the important sections in bullet points', color: 'bg-green-50 dark:bg-green-900/10', iconColor: 'text-green-500' },
  { num: '4', icon: HelpCircle, title: 'Quick FAQ', desc: 'Get answers from the FAQ section below each law', color: 'bg-amber-50 dark:bg-amber-900/10', iconColor: 'text-amber-500' },
];

const coreValues = [
  { icon: ShieldCheck, title: 'Accuracy', desc: 'All information verified against official Gazette notifications and government sources', color: 'bg-red-50 dark:bg-red-900/15', iconColor: 'text-brand-red' },
  { icon: Eye, title: 'Transparency', desc: 'Open about our sources, methodology, and any limitations', color: 'bg-blue-50 dark:bg-blue-900/10', iconColor: 'text-blue-500' },
  { icon: Sparkles, title: 'Simplicity', desc: 'Legal jargon removed — only clear, plain language explanations', color: 'bg-green-50 dark:bg-green-900/10', iconColor: 'text-green-500' },
  { icon: Accessibility, title: 'Accessibility', desc: 'Screen reader friendly, mobile optimized, works on any device', color: 'bg-purple-50 dark:bg-purple-900/10', iconColor: 'text-purple-500' },
];

const milestones = [
  { num: 1, label: 'The Idea', labelColor: 'text-brand-red', title: 'Concept Born', desc: 'After experiencing the gap in legal awareness firsthand, the idea for GlobalLaw was conceptualized to democratize legal knowledge.', active: true },
  { num: 2, label: 'Research', labelColor: 'text-blue-500', title: 'Deep Legal Research', desc: 'Months of studying Sri Lankan statutes, Gazette notifications, and consulting with legal professionals to build accurate content foundations.', active: false },
  { num: 3, label: 'Development', labelColor: 'text-green-500', title: 'Platform Built', desc: 'Designed and developed a fast, mobile-first platform with bilingual support, dark mode, and advanced search capabilities.', active: false },
  { num: 4, label: 'Launch', labelColor: 'text-amber-500', title: 'Sri Lanka Launch', desc: 'Launched with 75+ laws across 8 categories in English and Sinhala, completely free for all citizens.', active: false },
  { num: 5, label: 'Future', labelColor: 'text-purple-500', title: 'Tamil Language & More', desc: 'Expanding to Tamil language support, adding video tutorials, lawyer directory, and more countries in the GlobalLaw network.', shimmer: true },
];

const techItems = [
  { emoji: '⚡', label: 'Fast Loading' },
  { emoji: '🌙', label: 'Dark Mode' },
  { emoji: '📱', label: 'Mobile First' },
  { emoji: '🔍', label: 'Smart Search' },
  { emoji: '♿', label: 'Accessible' },
  { emoji: '🔒', label: 'No Tracking' },
];

function useScrollAnim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.anim').forEach(child => obs.observe(child));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useCounterAnim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt((entry.target as HTMLElement).dataset.count || '0');
          if (!target) return;
          let current = 0;
          const step = target / (1500 / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            (entry.target as HTMLElement).textContent = Math.floor(current) + '+';
          }, 16);
          obs.unobserve(entry.target);
        }
      }),
      { threshold: 0.5 }
    );
    el.querySelectorAll('[data-count]').forEach(child => obs.observe(child));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const LKAbout = () => {
  const scrollRef = useScrollAnim();
  const counterRef = useCounterAnim();

  return (
    <div ref={scrollRef} className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="about" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: 'About Us' }]} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="anim d1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-900/15 border border-red-100 dark:border-red-900/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              <span className="text-[11px] font-semibold text-brand-red tracking-wide uppercase">About GlobalLaw Sri Lanka</span>
            </div>
            <h1 className="anim d2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
              Making Sri Lankan Law<br />
              <span className="text-brand-red">Understandable</span> for Everyone
            </h1>
            <p className="anim d3 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
              We break down complex legal jargon into simple, clear language — so every Sri Lankan can know their rights without needing a law degree.
            </p>
          </div>
          {/* Decorative */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 float-y opacity-[0.04] dark:opacity-[0.06]">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16" ref={counterRef}>
        {/* Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="anim card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/15 border border-red-100 dark:border-red-900/25 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-brand-red" />
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-3">Our Mission</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                We believe every person deserves to understand their rights. We take complex legal language and simplify it into plain language so anyone can know their rights without needing a lawyer.
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                Sri Lanka has over 75+ active laws but most people don't know their basic rights. We fill that gap with simple, easy-to-read Sinhala/English explanations — completely free.
              </p>
            </div>
          </div>
          <div className="anim d1 card-lift bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-100 dark:border-brand-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-50 dark:bg-orange-900/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/15 border border-orange-100 dark:border-orange-900/25 flex items-center justify-center mb-5">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-3">Our Story</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                A student got scammed in an online fraud but couldn't find any simple Sinhala explanation of their legal options. That frustration sparked the idea for GlobalLaw.
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                What started as a one-person project has grown into a dedicated team committed to making law accessible to all Sri Lankans — regardless of language, education level, or background.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="anim d2 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Our Impact</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">GlobalLaw in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {stats.map(s => (
              <div key={s.label} className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 md:p-6 text-center group">
                {s.value !== null ? (
                  <div className="stat-num text-3xl md:text-4xl font-extrabold text-brand-red mb-1" data-count={s.value}>0</div>
                ) : (
                  <div className="stat-num text-3xl md:text-4xl font-extrabold text-brand-red mb-1">{s.display}</div>
                )}
                <div className="text-[11px] md:text-xs text-neutral-400 font-medium">{s.label}</div>
                <div className="w-8 h-[2px] bg-brand-red/20 rounded-full mx-auto mt-3 group-hover:w-14 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="anim d3 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Simple Process</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map(item => (
              <div key={item.num} className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 relative overflow-hidden group">
                <div className="absolute top-3 right-3 text-5xl font-black text-neutral-100 dark:text-brand-border/50">{item.num}</div>
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-[12px] text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="anim d4 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">What We Stand For</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map(v => (
              <div key={v.title} className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 group">
                <div className={`w-10 h-10 rounded-xl ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-5 h-5 ${v.iconColor}`} />
                </div>
                <h3 className="font-bold text-sm mb-1.5">{v.title}</h3>
                <p className="text-[12px] text-neutral-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div className="anim d5 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Our Journey</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">Key Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="timeline-line anim" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.num} className={`anim d${i + 1} flex gap-5 relative`}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 ${m.active ? 'bg-brand-red text-white shadow-lg shadow-red-500/20' : 'bg-neutral-200 dark:bg-brand-border-light text-neutral-600 dark:text-neutral-300'}`}>
                      {m.num}
                    </div>
                  </div>
                  <div className={`bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-5 flex-1 card-lift ${m.shimmer ? 'shimmer-bg' : ''}`}>
                    <div className={`text-[11px] font-bold ${m.labelColor} tracking-wide uppercase mb-1`}>{m.label}</div>
                    <h3 className="font-bold text-sm mb-1">{m.title}</h3>
                    <p className="text-[12px] text-neutral-400 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="anim d6 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Why GlobalLaw</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-lift bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-brand-card border border-red-100 dark:border-red-900/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🇱🇰</div>
              <h3 className="font-bold text-sm mb-2">Built for Sri Lanka</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed">Not a generic legal platform — every law, every explanation is specifically tailored for Sri Lankan context and citizens</p>
            </div>
            <div className="card-lift bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-brand-card border border-blue-100 dark:border-blue-900/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="font-bold text-sm mb-2">Your Language</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed">Read in Sinhala or English — switch with one click. No dictionary needed, no law degree needed</p>
            </div>
            <div className="card-lift bg-gradient-to-br from-green-50 to-white dark:from-green-900/10 dark:to-brand-card border border-green-100 dark:border-green-900/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="font-bold text-sm mb-2">Always Free</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed">No paywalls, no subscriptions, no hidden fees. Legal knowledge should be free for everyone — period</p>
            </div>
          </div>
        </div>

        {/* Technology & Design */}
        <div className="anim d7 mb-10 md:mb-16">
          <div className="bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-100 dark:border-brand-border rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Built With</p>
              <h2 className="text-xl md:text-2xl font-extrabold">Technology & Design</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {techItems.map(t => (
                <div key={t.label} className="bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-4 text-center card-lift">
                  <div className="text-2xl mb-2">{t.emoji}</div>
                  <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credits & Sources */}
        <div className="anim d8 mb-10 md:mb-16">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-red/60 mb-2">Acknowledgements</p>
            <h2 className="text-2xl md:text-3xl font-extrabold">Credits & Sources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/lk/credits" className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 group flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-brand-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                <Database className="w-5 h-5 text-neutral-400 group-hover:text-brand-red transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-0.5 group-hover:text-brand-red transition-colors">Data Sources</h3>
                <p className="text-[12px] text-neutral-400">Official Gazette, Ministry of Justice, Parliament archives</p>
              </div>
            </Link>
            <Link to="/lk/credits" className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 group flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-brand-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                <Palette className="w-5 h-5 text-neutral-400 group-hover:text-brand-red transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-0.5 group-hover:text-brand-red transition-colors">Design Assets</h3>
                <p className="text-[12px] text-neutral-400">Icons, illustrations, and visual components used</p>
              </div>
            </Link>
            <a href="https://vezlo-web.vercel.app" target="_blank" rel="noopener noreferrer" className="card-lift bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-brand-card border border-red-100 dark:border-red-900/20 rounded-2xl p-5 group flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-0.5 text-brand-red group-hover:text-brand-red-dark transition-colors">Developed by Vezlo</h3>
                <p className="text-[12px] text-neutral-400">Design, development & hosting</p>
              </div>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="anim mb-10 md:mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/25 rounded-2xl p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1">Important Disclaimer</h3>
                <p className="text-[12px] text-amber-700 dark:text-amber-400/70 leading-relaxed">
                  GlobalLaw is an <strong>educational platform only</strong>. The content provided is for informational purposes and does not constitute legal advice. For specific legal matters, please consult a qualified attorney. We strive for accuracy but cannot guarantee that all information is complete or up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="anim">
          <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Have Questions or Feedback?</h2>
              <p className="text-red-100 text-sm mb-6 max-w-md mx-auto">We'd love to hear from you. Whether it's a suggestion, correction, or partnership inquiry — reach out anytime.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/lk/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red rounded-xl font-bold text-sm hover:bg-neutral-100 transition-colors shadow-lg">
                  <Mail className="w-4 h-4" /> Contact Us
                </Link>
                <a href="https://wa.me/94775048455" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LKFooter activePage="about" />
      <WhatsAppButton />
    </div>
  );
};

export default LKAbout;
