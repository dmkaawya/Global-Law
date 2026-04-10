import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Database, Landmark, Newspaper, Shield, Crown, Code2, ExternalLink, Palette, Gauge, Info, Users, Heart, ListChecks, Lock, AlertTriangle, CheckCircle, XCircle, X, Check, Hash, Tag, Calendar, RefreshCw, Globe, Layers, FileText, Folder, Scale, ShieldCheck, PenTool, Type, Wind, BookOpen, Building2, FileCheck, Flag } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useScrollAnim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    ref.current?.querySelectorAll('.anim, .line-anim').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const sources = [
  { icon: Landmark, title: 'Parliament of Sri Lanka', desc: 'Primary source for Acts of Parliament, amendments, and bills', url: 'https://www.parliament.lk', color: 'bg-blue-50 dark:bg-blue-900/10', hoverColor: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20', iconColor: 'text-blue-500', linkHoverColor: 'group-hover:text-blue-500', tags: [{label:'Legislation',color:'bg-blue-50 dark:bg-blue-900/15 text-blue-600 dark:text-blue-400'},{label:'Bills',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'},{label:'Amendments',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Newspaper, title: 'Government Gazette', desc: 'Extraordinary & ordinary gazettes for regulations and notifications', url: '#', color: 'bg-amber-50 dark:bg-amber-900/10', hoverColor: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-900/20', iconColor: 'text-amber-500', linkHoverColor: 'group-hover:text-amber-500', tags: [{label:'Gazettes',color:'bg-amber-50 dark:bg-amber-900/15 text-amber-600 dark:text-amber-400'},{label:'Regulations',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Scale, title: 'Ministry of Justice', desc: 'Legal reforms, policy documents, and justice sector updates', url: '#', color: 'bg-red-50 dark:bg-red-900/10', hoverColor: 'group-hover:bg-red-100 dark:group-hover:bg-red-900/20', iconColor: 'text-brand-red', linkHoverColor: 'group-hover:text-brand-red', tags: [{label:'Policy',color:'bg-red-50 dark:bg-red-900/15 text-red-600 dark:text-red-400'},{label:'Reforms',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Crown, title: 'Supreme Court of SL', desc: 'Landmark judgments, fundamental rights cases, and precedents', url: 'https://www.supremecourt.lk', color: 'bg-purple-50 dark:bg-purple-900/10', hoverColor: 'group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20', iconColor: 'text-purple-500', linkHoverColor: 'group-hover:text-purple-500', tags: [{label:'Case Law',color:'bg-purple-50 dark:bg-purple-900/15 text-purple-600 dark:text-purple-400'},{label:'Judgments',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Shield, title: 'CERT Sri Lanka', desc: 'Cybercrime statistics, advisories, and Computer Crime Act references', url: 'https://www.cert.gov.lk', color: 'bg-green-50 dark:bg-green-900/10', hoverColor: 'group-hover:bg-green-100 dark:group-hover:bg-green-900/20', iconColor: 'text-green-500', linkHoverColor: 'group-hover:text-green-500', tags: [{label:'Cyber',color:'bg-green-50 dark:bg-green-900/15 text-green-600 dark:text-green-400'},{label:'Advisories',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: BookOpen, title: 'Sri Lanka LawNet', desc: 'Official legal database with statutes, case law, and legal publications', url: 'https://www.lawnet.gov.lk', color: 'bg-indigo-50 dark:bg-indigo-900/10', hoverColor: 'group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/20', iconColor: 'text-indigo-500', linkHoverColor: 'group-hover:text-indigo-500', tags: [{label:'Database',color:'bg-indigo-50 dark:bg-indigo-900/15 text-indigo-600 dark:text-indigo-400'},{label:'Statutes',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Building2, title: 'Official Bonds Commission', desc: 'Anti-corruption reports and Bribery Act references', url: '#', color: 'bg-cyan-50 dark:bg-cyan-900/10', hoverColor: 'group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/20', iconColor: 'text-cyan-500', linkHoverColor: 'group-hover:text-cyan-500', tags: [{label:'Anti-Corruption',color:'bg-cyan-50 dark:bg-cyan-900/15 text-cyan-600 dark:text-cyan-400'}] },
  { icon: Heart, title: 'NCPA', desc: 'National Child Protection Authority — child rights laws and guidelines', url: 'https://www.childprotection.gov.lk', color: 'bg-pink-50 dark:bg-pink-900/10', hoverColor: 'group-hover:bg-pink-100 dark:group-hover:bg-pink-900/20', iconColor: 'text-pink-500', linkHoverColor: 'group-hover:text-pink-500', tags: [{label:'Child Rights',color:'bg-pink-50 dark:bg-pink-900/15 text-pink-600 dark:text-pink-400'},{label:'NCPA',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: FileCheck, title: 'ERD Sri Lanka', desc: 'Exchange control regulations and international trade laws', url: 'https://www.erd.gov.lk', color: 'bg-teal-50 dark:bg-teal-900/10', hoverColor: 'group-hover:bg-teal-100 dark:group-hover:bg-teal-900/20', iconColor: 'text-teal-500', linkHoverColor: 'group-hover:text-teal-500', tags: [{label:'Trade',color:'bg-teal-50 dark:bg-teal-900/15 text-teal-600 dark:text-teal-400'},{label:'Exchange',color:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
];

const designAssets = [
  { icon: PenTool, title: 'Lucide Icons', desc: 'Open source icon library used for all interface icons', url: 'https://lucide.dev', color: 'bg-orange-50 dark:bg-orange-900/10', iconColor: 'text-orange-500', hColor: 'group-hover:text-orange-500', licenses: [{l:'ISC License',c:'bg-green-50 dark:bg-green-900/15 text-green-600 dark:text-green-400'},{l:'Free',c:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Type, title: 'Inter Font', desc: 'Primary typeface — designed by Rasmus Andersson for screen readability', url: 'https://fonts.google.com/specimen/Inter', color: 'bg-sky-50 dark:bg-sky-900/10', iconColor: 'text-sky-500', hColor: 'group-hover:text-sky-500', licenses: [{l:'SIL OFL',c:'bg-green-50 dark:bg-green-900/15 text-green-600 dark:text-green-400'},{l:'Free',c:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
  { icon: Wind, title: 'Tailwind CSS', desc: 'Utility-first CSS framework powering the entire visual design system', url: 'https://tailwindcss.com', color: 'bg-cyan-50 dark:bg-cyan-900/10', iconColor: 'text-cyan-500', hColor: 'group-hover:text-cyan-500', licenses: [{l:'MIT License',c:'bg-green-50 dark:bg-green-900/15 text-green-600 dark:text-green-400'},{l:'Free',c:'bg-neutral-100 dark:bg-brand-border text-neutral-500'}] },
];

const LKCredits = () => {
  const containerRef = useScrollAnim();
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div ref={containerRef} className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="credits" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: 'Credits' }]} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="anim d1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-900/15 border border-red-100 dark:border-red-900/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red dot-pulse"></span>
              <span className="text-[11px] font-semibold text-brand-red tracking-wide uppercase">Transparency</span>
            </div>
            <h1 className="anim d2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Credits & <span className="text-brand-red">Sources</span>
            </h1>
            <p className="anim d3 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
              Every resource, tool, and person that made GlobalLaw possible. Full transparency — no hidden dependencies.
            </p>
          </div>
        </div>
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 float-y opacity-[0.03] dark:opacity-[0.05]">
          <svg width="280" height="280" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        {/* Stats */}
        <div className="anim d3 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-12 md:mb-16">
          {[['12+', 'Official Sources'], ['8', 'Technologies'], ['6+', 'Open Source Tools'], ['100%', 'Attributed']].map(([v, l]) => (
            <div key={l} className="bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-4 text-center card-lift">
              <div className="text-2xl font-extrabold text-brand-red">{v}</div>
              <div className="text-[10px] text-neutral-400 font-medium mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        {/* Data Sources */}
        <div className="anim d4 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/15 flex items-center justify-center"><Database className="w-5 h-5 text-blue-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Official Data Sources</h2><p className="text-[11px] text-neutral-400">Government & legal databases we reference</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map(src => (
              <a key={src.title} href={src.url} target="_blank" rel="noopener noreferrer" className="card-lift card-glow bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 group block">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl ${src.color} ${src.hoverColor} flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <src.icon className={`w-5 h-5 ${src.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm truncate">{src.title}</h3>
                      <ExternalLink className={`w-3 h-3 text-neutral-300 ${src.linkHoverColor} transition-colors flex-shrink-0`} />
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed mb-2.5">{src.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {src.tags.map(tag => (
                        <span key={tag.label} className={`source-badge text-[10px] font-semibold px-2 py-0.5 rounded-md ${tag.color}`}>{tag.label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Design Assets */}
        <div className="anim d5 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/15 flex items-center justify-center"><Palette className="w-5 h-5 text-purple-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Design Assets & Tools</h2><p className="text-[11px] text-neutral-400">Icons, fonts, colors, and design resources used</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designAssets.map(a => (
              <a key={a.title} href={a.url} target="_blank" rel="noopener noreferrer" className="card-lift card-glow bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5 group block">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl ${a.color} flex items-center justify-center flex-shrink-0`}><a.icon className={`w-5 h-5 ${a.iconColor}`} /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1"><h3 className="font-bold text-sm">{a.title}</h3><ExternalLink className={`w-3 h-3 text-neutral-300 ${a.hColor} transition-colors`} /></div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed mb-2">{a.desc}</p>
                    <div className="flex items-center gap-2">{a.licenses.map(l => (<span key={l.l} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${l.c}`}>{l.l}</span>))}</div>
                  </div>
                </div>
              </a>
            ))}
            {/* Color System */}
            <div className="card-lift card-glow bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-rose-50 dark:bg-rose-900/10 flex items-center justify-center flex-shrink-0"><Palette className="w-5 h-5 text-rose-500" /></div>
                <div className="flex-1"><h3 className="font-bold text-sm mb-1">Color System</h3><p className="text-[11px] text-neutral-400 leading-relaxed mb-2">Custom brand color palette built on Tailwind's design token system</p>
                  <div className="flex items-center gap-1.5">
                    {['#DC2626','#B91C1C','#050505','#141414','#1E1E1E'].map(c => (<div key={c} className="w-5 h-5 rounded-md border border-black/5" style={{ background: c }} />))}
                    <div className="w-5 h-5 rounded-md bg-neutral-100 border border-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
            {/* Emoji */}
            <div className="card-lift card-glow bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-yellow-50 dark:bg-yellow-900/10 flex items-center justify-center flex-shrink-0"><span className="text-xl">😀</span></div>
                <div className="flex-1"><h3 className="font-bold text-sm mb-1">Unicode Emoji</h3><p className="text-[11px] text-neutral-400 leading-relaxed mb-2">Native emoji used for visual category markers and UI decorations</p>
                  <div className="flex items-center gap-2"><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-brand-border text-neutral-500">No License Needed</span></div>
                </div>
              </div>
            </div>
            {/* SVG */}
            <div className="card-lift card-glow bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-900/10 flex items-center justify-center flex-shrink-0"><Layers className="w-5 h-5 text-violet-500" /></div>
                <div className="flex-1"><h3 className="font-bold text-sm mb-1">Custom SVG Graphics</h3><p className="text-[11px] text-neutral-400 leading-relaxed mb-2">Logo, decorative elements, and illustrations — hand-crafted SVG code</p>
                  <div className="flex items-center gap-2"><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-red/10 text-brand-red">Original</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-brand-border text-neutral-500">Hand-coded</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="anim d6 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/15 flex items-center justify-center"><Code2 className="w-5 h-5 text-green-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Technology Stack</h2><p className="text-[11px] text-neutral-400">Every technology powering GlobalLaw under the hood</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[{e:'🌐',t:'HTML5',s:'Structure'},{e:'🎨',t:'Tailwind CSS',s:'Styling'},{e:'⚡',t:'React + TS',s:'Framework'},{e:'🌙',t:'Dark Mode',s:'CSS + JS'},{e:'📱',t:'Responsive',s:'Mobile First'},{e:'🔍',t:'Search',s:'Client-side'},{e:'💾',t:'LocalStorage',s:'Preferences'},{e:'🚀',t:'Static Hosting',s:'Vercel Edge'}].map(tech => (
              <div key={tech.t} className="tech-icon bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{tech.e}</div>
                <div className="text-xs font-bold mb-0.5">{tech.t}</div>
                <div className="text-[10px] text-neutral-400">{tech.s}</div>
              </div>
            ))}
          </div>
          <div className="bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
            <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><Gauge className="w-4 h-4 text-brand-red" />Performance Characteristics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[['0 KB','JS Framework'],['100%','Static HTML'],['0','API Calls'],['0','Tracking Scripts']].map(([v,l]) => (
                <div key={l} className="text-center"><div className="text-lg font-extrabold text-green-500">{v}</div><div className="text-[10px] text-neutral-400">{l}</div></div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Metadata */}
        <div className="anim d7 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/15 flex items-center justify-center"><Info className="w-5 h-5 text-amber-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Project Metadata</h2><p className="text-[11px] text-neutral-400">Technical details about the platform build</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl overflow-hidden">
            <div className="divide-y divide-neutral-100 dark:divide-brand-border">
              {[
                [Hash,'Project Name','GlobalLaw Sri Lanka',false],
                [Tag,'Version','v2.0.0',true],
                [Calendar,'First Released','2025',false],
                [RefreshCw,'Last Updated',lastUpdated,false],
                [Globe,'Languages','English, සිංහල',false],
                [Layers,'Total Pages','15+',false],
                [FileText,'Laws Covered','75+',false],
                [Folder,'Categories','8',false],
                [Scale,'License','All Rights Reserved',false],
                [ShieldCheck,'Privacy','Zero Tracking',false],
              ].map(([Icon, label, value, mono]) => (
                <div key={label as string} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />{label as string}
                  </span>
                  <span className={`text-xs font-bold ${mono ? 'font-mono' : ''} ${label === 'License' ? 'text-brand-red' : label === 'Privacy' ? 'text-green-500' : ''}`}>{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="anim d8 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/15 flex items-center justify-center"><Users className="w-5 h-5 text-brand-red" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Team & Contributors</h2><p className="text-[11px] text-neutral-400">The people behind GlobalLaw Sri Lanka</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-lift bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-brand-card border border-red-100 dark:border-red-900/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-red-500/20">KC</div>
                  <div>
                    <h3 className="font-extrabold text-lg">Kaawya Chandrasekara</h3>
                    <div className="text-[11px] text-brand-red font-semibold">Founder & Lead Developer</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">Concept → Design → Development → Launch</div>
                  </div>
                </div>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">Solo-built the entire platform from scratch — research, content writing in 2 languages, UI/UX design, frontend development, and deployment.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Full-Stack','UI/UX','Content','Legal Research'].map(t => (<span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-red/10 text-brand-red">{t}</span>))}
                </div>
              </div>
            </div>
            <a href="https://vezlo-web.vercel.app" target="_blank" rel="noopener noreferrer" className="card-lift bg-gradient-to-br from-neutral-50 to-white dark:from-brand-border/30 dark:to-brand-card border border-neutral-200 dark:border-brand-border rounded-2xl p-6 block relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-200/30 dark:bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 dark:from-neutral-700 dark:to-neutral-900 flex items-center justify-center text-white font-extrabold text-lg shadow-lg group-hover:shadow-brand-red/10 transition-shadow">V</div>
                  <div><h3 className="font-extrabold text-lg">Vezlo</h3><div className="text-[11px] text-neutral-500 font-semibold">Design & Development Studio</div><div className="text-[10px] text-neutral-400 mt-0.5">via DMC Group</div></div>
                </div>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">Responsible for the visual design system, premium animations, dark mode implementation, responsive architecture, and overall technical direction.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Design System','Animations','Architecture'].map(t => (<span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-brand-border text-neutral-500">{t}</span>))}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-red/10 text-brand-red group-hover:bg-brand-red/15 transition-colors">Visit →</span>
                </div>
              </div>
            </a>
          </div>
          {/* Volunteers */}
          <div className="mt-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/25 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">🤝</div>
              <div>
                <h3 className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1">Legal Review Volunteers Wanted</h3>
                <p className="text-[12px] text-amber-700 dark:text-amber-400/70 leading-relaxed">We're looking for qualified lawyers and law students to volunteer as content reviewers. <Link to="/lk/contact" className="underline font-semibold hover:text-amber-900 dark:hover:text-amber-200 transition-colors">Contact us to join →</Link></p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Thanks */}
        <div className="anim d9 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/15 flex items-center justify-center"><Heart className="w-5 h-5 text-pink-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Special Thanks</h2><p className="text-[11px] text-neutral-400">Organizations and communities that inspired us</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[{e:'🇱🇰',t:'Sri Lankan Legal Community',d:'For keeping law accessible'},{e:'⚖️',t:'Legal Aid Commission',d:'Free legal services inspiration'},{e:'🎓',t:'SL Law Faculties',d:'Academic excellence in law'},{e:'🌍',t:'Open Source Community',d:'Tools that made this possible'}].map(s => (
              <div key={s.t} className="card-lift bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{s.e}</div><h4 className="text-xs font-bold mb-0.5">{s.t}</h4><p className="text-[10px] text-neutral-400">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Methodology */}
        <div className="anim d10 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/15 flex items-center justify-center"><ListChecks className="w-5 h-5 text-indigo-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">Content Methodology</h2><p className="text-[11px] text-neutral-400">How we create and verify our legal explanations</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[{n:1,c:'bg-brand-red',t:'Source Identify',d:'Find the original Act, Gazette, or official document'},{n:2,c:'bg-blue-500',t:'Deep Read',d:'Read and understand every section of the law'},{n:3,c:'bg-green-500',t:'Simplify',d:'Convert legal jargon to plain language'},{n:4,c:'bg-amber-500',t:'Bilingual Write',d:'Write in both English and Sinhala carefully'},{n:5,c:'bg-purple-500',t:'Verify & Publish',d:'Cross-check against sources before publishing'}].map(s => (
              <div key={s.n} className="bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-4 text-center">
                <div className={`w-8 h-8 rounded-full ${s.c} text-white text-sm font-bold flex items-center justify-center mx-auto mb-3`}>{s.n}</div>
                <h4 className="text-xs font-bold mb-1">{s.t}</h4>
                <p className="text-[10px] text-neutral-400 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Disclaimer */}
        <div className="anim d11 mb-12 md:mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/25 rounded-2xl p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1.5">Accuracy & Limitations</h3>
                <div className="text-[12px] text-amber-700 dark:text-amber-400/70 leading-relaxed space-y-2">
                  <p>• While we strive for accuracy, legal interpretations can vary. Our summaries are <strong>not substitutes</strong> for reading the original legislation.</p>
                  <p>• Laws change frequently through amendments. We update content periodically but cannot guarantee real-time accuracy.</p>
                  <p>• If you find an error, please <Link to="/lk/contact" className="underline font-semibold hover:text-amber-900 dark:hover:text-amber-200 transition-colors">report it immediately</Link>.</p>
                  <p>• All content is provided "as is" without warranties of any kind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* License */}
        <div className="anim d11 mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-brand-border flex items-center justify-center"><Lock className="w-5 h-5 text-neutral-500" /></div>
            <div><h2 className="text-xl md:text-2xl font-extrabold">License & Intellectual Property</h2><p className="text-[11px] text-neutral-400">What you can and cannot do with GlobalLaw content</p></div>
          </div>
          <div className="shimmer-line h-[1px] w-full rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/25 rounded-2xl p-5">
              <h3 className="font-bold text-sm text-green-800 dark:text-green-300 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" />You CAN</h3>
              <ul className="space-y-2 text-[12px] text-green-700 dark:text-green-400/70 leading-relaxed">
                {['Read and learn from the content freely','Share links to specific law pages','Cite GlobalLaw as a reference in academic work','Use for educational purposes in classrooms','Suggest corrections and improvements'].map(t => (
                  <li key={t} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/25 rounded-2xl p-5">
              <h3 className="font-bold text-sm text-red-800 dark:text-red-300 mb-3 flex items-center gap-2"><XCircle className="w-4 h-4" />You CANNOT</h3>
              <ul className="space-y-2 text-[12px] text-red-700 dark:text-red-400/70 leading-relaxed">
                {['Copy, reproduce, or redistribute our content','Use our design, code, or assets commercially','Remove or alter credits/attribution','Create derivative works from our content','Scrape or automatedly extract our data'].map(t => (
                  <li key={t} className="flex items-start gap-2"><X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="anim d12">
          <div className="cta-gradient rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-3xl mb-4">🐛</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Found an Error?</h2>
              <p className="text-red-100 text-sm mb-6 max-w-md mx-auto leading-relaxed">Legal accuracy matters. If you spot any mistake, outdated info, or misleading content — please let us know immediately.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/lk/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red rounded-xl font-bold text-sm hover:bg-neutral-100 transition-colors shadow-lg">
                  <Flag className="w-4 h-4" /> Report an Error
                </Link>
                <a href="https://wa.me/94775048455?text=Hi%2C%20I%20found%20an%20error%20on%20GlobalLaw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LKFooter activePage="credits" />
      <WhatsAppButton />
    </div>
  );
};

export default LKCredits;
