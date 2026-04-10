import { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

const features = [
  { icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418', title: 'Multi-Language', desc: 'Sinhala, Tamil, English & more' },
  { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z', title: 'Law Search', desc: 'Smart legal search engine' },
  { icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', title: 'Legal Articles', desc: 'Free educational content' },
  { icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25', title: 'Case Law DB', desc: 'Browse landmark cases' },
  { icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z', title: 'Doc Templates', desc: 'Ready-to-use legal forms' },
  { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Rights Guide', desc: 'Know your fundamental rights' },
  { icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6', title: 'Constitutional Law', desc: 'Constitution explained simply' },
  { icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z', title: 'Criminal Law', desc: 'Offenses & penalties guide' },
  { icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z', title: 'Civil Law', desc: 'Disputes & resolutions' },
  { icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z', title: 'Family Law', desc: 'Marriage, divorce & custody' },
  { icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0', title: 'Labor Law', desc: 'Employee rights & protections' },
  { icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z', title: 'Property Law', desc: 'Land & real estate guide' },
  { icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z', title: 'Tax Law', desc: 'Tax regulations & filing' },
  { icon: 'M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z', title: 'Immigration', desc: 'Visas, passports & citizenship' },
  { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', title: 'Business Law', desc: 'Company & corporate law' },
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', title: 'Consumer Protection', desc: 'Your rights as a consumer' },
  { icon: 'M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25', title: 'Legal Dictionary', desc: 'Simplified legal terms' },
  { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5', title: 'Legal News', desc: 'Latest law updates & alerts' },
  { icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z', title: 'Ask a Lawyer', desc: 'Q&A with legal experts' },
  { icon: 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z', title: 'Dark Mode', desc: 'Comfortable night reading' },
];

const chatIcon = 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z';

const ComingSoon = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useDarkMode();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="font-sans antialiased bg-[#030304] text-white">
      <div className="noise"></div>
      <div className="min-h-screen bg-mesh grid-bg relative flex flex-col">
        {/* Top Accent Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

        {/* Navigation Bar */}
        <nav className="w-full px-5 md:px-10 py-5 flex items-center justify-between relative z-50 anim-fade-up">
          <div className="flex items-center gap-3">
            <div className="relative" style={{ filter: 'drop-shadow(0 0 10px rgba(239,68,68,.2))' }}>
              <svg className="w-9 h-9" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="30" fill="#101015" stroke="rgba(255,255,255,.06)" strokeWidth=".5" />
                <ellipse cx="40" cy="40" rx="18" ry="30" stroke="rgba(255,255,255,.08)" strokeWidth=".5" fill="none" />
                <ellipse cx="40" cy="40" rx="30" ry="10" stroke="rgba(255,255,255,.08)" strokeWidth=".5" fill="none" />
                <line x1="40" y1="22" x2="40" y2="46" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="34" y1="24" x2="46" y2="24" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="40" y1="28" x2="26" y2="36" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
                <line x1="40" y1="28" x2="54" y2="36" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
                <path d="M22 36Q26 40 30 36" stroke="#fff" strokeWidth=".8" fill="none" />
                <line x1="23" y1="36" x2="29" y2="36" stroke="#fff" strokeWidth=".8" />
                <path d="M50 36Q54 40 58 36" stroke="#fff" strokeWidth=".8" fill="none" />
                <line x1="51" y1="36" x2="57" y2="36" stroke="#fff" strokeWidth=".8" />
                <rect x="33" y="46" width="14" height="2" rx=".5" fill="#ef4444" opacity=".5" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">Global<span className="text-red-500">Law</span></span>
          </div>
          <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-widest uppercase hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={chatIcon} /></svg>
            Support
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center px-5 md:px-10 py-10 md:py-16 relative">
          {/* Floating Badge */}
          <div className="anim-fade-up delay-1 mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-red-500/10 bg-[#101015]/40 backdrop-blur-md" style={{ boxShadow: '0 0 30px rgba(239,68,68,.06),inset 0 1px 0 rgba(255,255,255,.03)' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" style={{ animation: 'pulse-ring 2s ease-in-out infinite' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[11px] font-semibold tracking-[.15em] uppercase text-red-400/80">Coming Soon</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto anim-fade-up delay-2 float-anim">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4" style={{ textShadow: '0 0 80px rgba(239,68,68,.1)' }}>
              Demystifying Law<br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">for Everyone.</span>
            </h1>
          </div>

          {/* Sub Text */}
          <p className="text-center text-sm md:text-base font-light leading-relaxed text-white/40 max-w-xl mx-auto mt-6 mb-8 anim-fade-up delay-3">
            A comprehensive, multi-language platform making global and local laws accessible, understandable, and completely free — for every citizen.
          </p>

          {/* Progress */}
          <div className="max-w-[240px] w-full mx-auto anim-fade-up delay-4">
            <div className="h-[2px] w-full rounded-full bg-[#222230] overflow-hidden">
              <div className="progress-shimmer h-full rounded-full" style={{ width: '62%' }}></div>
            </div>
            <p className="mt-2.5 text-[10px] font-medium tracking-[.12em] uppercase text-white/20 text-center">Development Progress — 62%</p>
          </div>

          {/* Scroll Hint */}
          <div className="mt-10 anim-fade-up delay-5 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[.15em] uppercase text-white/15">Explore Features</span>
            <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-red-500/60" style={{ animation: 'float 2s ease-in-out infinite' }}></div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-5 md:px-10 pb-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 anim-fade-up delay-5">
              <p className="text-[10px] font-semibold tracking-[.2em] uppercase text-red-500/50 mb-3">What's Coming</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">Planned Features</h2>
              <p className="text-sm text-white/25 mt-2">Everything we're building to transform legal access</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {features.map((f, i) => (
                <FeatureCard key={i} feature={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-5 md:px-10 pb-20">
          <div className="max-w-2xl mx-auto text-center anim-fade-up delay-6">
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/[.04] bg-[#101015]/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/[.03] to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">Need to Get in Touch?</h3>
                <p className="text-sm text-white/35 mb-8 max-w-sm mx-auto">For partnerships, official inquiries, or any questions — our support team is ready to help.</p>
                <button onClick={() => setModalOpen(true)} className="btn-support inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#101015] text-white text-sm font-semibold tracking-wide hover:text-red-400 transition-colors duration-300 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={chatIcon} /></svg>
                  Contact & Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-5 md:px-10 py-6 border-t border-white/[.03]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] tracking-[.1em] uppercase text-white/15">© 2026 GlobalLaw. All rights reserved.</p>
            <p className="text-[10px] tracking-[.1em] uppercase text-white/15">Powered by <a href="https://vezlo.dev" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-red-400 transition-colors duration-200">Vezlo</a></p>
          </div>
        </footer>

        {/* Bottom Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      </div>

      {/* Floating Support Button (Mobile) */}
      <button onClick={() => setModalOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:shadow-red-500/40 hover:scale-105 active:scale-95 transition-all duration-200 md:hidden cursor-pointer" style={{ boxShadow: '0 4px 20px rgba(239,68,68,.3)' }}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={chatIcon} /></svg>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-400 rounded-full border-2 border-[#030304]"></span>
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-md" style={{ animation: 'fade-up .4s cubic-bezier(.16,1,.3,1) forwards' }}>
            <div className="bg-[#101015] border border-white/[.06] rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 80px rgba(239,68,68,.08),0 25px 50px rgba(0,0,0,.5)' }}>

              {/* Modal Header */}
              <div className="relative px-7 pt-7 pb-5">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={chatIcon} /></svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Contact & Support</h3>
                      <p className="text-[11px] text-white/30">We'll get back to you as soon as possible</p>
                    </div>
                  </div>
                  <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-lg bg-white/[.03] border border-white/[.06] flex items-center justify-center hover:bg-white/[.08] transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              <div className="mx-7 h-[1px] bg-white/[.04]"></div>

              {/* Contact Items */}
              <div className="p-7 space-y-1">
                {/* Email */}
                <a href="mailto:chat.dmkaawya@gmail.com" className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-white/[.02] transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-red-500/[.07] border border-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/[.12] transition-colors">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/25 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-white/70 group-hover:text-red-400 transition-colors truncate">chat.dmkaawya@gmail.com</p>
                  </div>
                  <svg className="w-4 h-4 text-white/10 flex-shrink-0 ml-auto group-hover:text-red-400/50 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </a>

                {/* Phone */}
                <a href="tel:+94775048455" className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-white/[.02] transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-red-500/[.07] border border-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/[.12] transition-colors">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/25 mb-0.5">Phone / WhatsApp</p>
                    <p className="text-sm font-medium text-white/70 group-hover:text-red-400 transition-colors">+94 77 504 8455</p>
                  </div>
                  <svg className="w-4 h-4 text-white/10 flex-shrink-0 ml-auto group-hover:text-red-400/50 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </a>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl">
                  <div className="w-11 h-11 rounded-xl bg-white/[.02] border border-white/[.05] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/25 mb-0.5">Working Hours</p>
                    <p className="text-sm font-medium text-white/40">Mon – Sat, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mx-7 h-[1px] bg-white/[.04]"></div>

              {/* Modal Footer */}
              <div className="px-7 py-5 flex items-center justify-between">
                <p className="text-[10px] text-white/15 tracking-wide">For official authorities & partnerships</p>
                <button onClick={() => setModalOpen(false)} className="text-[11px] font-semibold tracking-wider uppercase text-red-400/70 hover:text-red-400 transition-colors cursor-pointer">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ feature, index }: { feature: { icon: string; title: string; desc: string }; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card-glow anim-fade-up rounded-xl border border-white/[.04] bg-[#101015]/30 backdrop-blur-sm p-4 md:p-5 cursor-default transition-all duration-300 hover:border-red-500/10 hover:bg-[#18181f]/30"
      style={{ animationDelay: `${0.5 + index * 0.04}s` }}
    >
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-red-500/[.06] border border-red-500/10 flex items-center justify-center mb-3">
        <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-red-400/70" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} /></svg>
      </div>
      <h3 className="text-xs md:text-sm font-semibold text-white/80 mb-1 leading-snug">{feature.title}</h3>
      <p className="text-[10px] md:text-[11px] text-white/25 leading-relaxed">{feature.desc}</p>
    </div>
  );
};

export default ComingSoon;
