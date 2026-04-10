import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Send, HelpCircle, AlertTriangle, Clock, Zap, Mail, Phone, Code2, Lock, ChevronDown, ArrowRight, ArrowUpRight, RotateCcw, Check, ClipboardCheck } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Is this legal advice?', a: 'No. GlobalLaw is an <strong>educational platform only</strong>. We explain laws in simple language — we do NOT provide legal advice. Always consult a qualified lawyer for legal matters.' },
  { q: 'Can I suggest a new law to add?', a: 'Yes! Use the contact form above and select "Suggest Law". We review suggestions weekly and prioritize the most requested ones.' },
  { q: 'How fast do you reply?', a: 'We aim to respond within 48 hours via WhatsApp. Bug reports and partnership inquiries get priority. For emergencies, call 119 immediately.' },
  { q: 'Is my data safe?', a: "Yes. We don't store any data on our servers. The contact form opens WhatsApp directly — your information stays between you and WhatsApp." },
  { q: 'Can I contribute as a lawyer?', a: 'Absolutely! We welcome legal professionals to join our advisory team. Contact us via WhatsApp or email to discuss how you can help.' },
  { q: 'Is GlobalLaw really free?', a: '100% free. No paywalls, no premium plans, no ads. We believe legal knowledge should be accessible to everyone regardless of their financial situation.' },
  { q: 'Will you add Tamil language?', a: "Yes, Tamil language support is on our roadmap. We're looking for Tamil-speaking legal volunteers to help with translations. Contact us if you can help!" },
];

const emergencies = [
  { icon: '🚔', name: 'Police', sub: 'Emergency', num: '119' },
  { icon: '🛡️', name: 'CERT', sub: 'Cyber Crime', num: '1919' },
  { icon: '👶', name: 'Child Protection', sub: 'NCPA', num: '1929' },
  { icon: '🚑', name: 'Ambulance', sub: 'Suwasariya', num: '1990' },
  { icon: '🔥', name: 'Fire', sub: 'Emergency', num: '1190' },
];

const reportTypes = [
  { emoji: '🐛', label: 'Bug Report', value: '🐛 Bug Report' },
  { emoji: '💡', label: 'Suggest Law', value: '💡 Suggest a Law' },
  { emoji: '💬', label: 'Feedback', value: '💬 Feedback' },
  { emoji: '🤝', label: 'Partnership', value: '🤝 Partnership' },
  { emoji: '⚖️', label: 'Legal Question', value: '⚖️ Legal Question' },
  { emoji: '📝', label: 'Other', value: '📝 Other' },
];

const quickActions = [
  { emoji: '💻', label: 'Report Cyber Crime', to: '/lk/categories?cat=cyber' },
  { emoji: '🛡️', label: 'Fundamental Rights', to: '/lk/categories?cat=fundamental' },
  { emoji: '🚔', label: 'Criminal Laws', to: '/lk/categories?cat=criminal' },
  { emoji: '🛒', label: 'Consumer Protection', to: '/lk/categories?cat=consumer' },
];

function useScrollAnim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    ref.current?.querySelectorAll('.anim').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useOfficeStatus() {
  const [status, setStatus] = useState('Checking status...');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const time = now.getHours() + now.getMinutes() / 60;
      let open = false;
      if (day >= 1 && day <= 5 && time >= 9 && time < 18) open = true;
      if (day === 6 && time >= 9 && time < 13) open = true;
      setIsOpen(open);
      setStatus(open ? 'Currently Online — Ready to help' : 'Currently Offline — Leave a message');
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);
  return { status, isOpen };
}

const LKContact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedReport, setSelectedReport] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [checklist, setChecklist] = useState([false, false, false, false]);
  const containerRef = useScrollAnim();
  const { status, isOpen } = useOfficeStatus();

  const toggleCheck = (i: number) => {
    setChecklist(prev => prev.map((v, idx) => idx === i ? !v : v));
  };

  const handleSend = () => {
    if (!name.trim()) return;
    if (!msg.trim()) return;
    const subject = selectedReport || 'General Inquiry';
    const waMsg = `📋 *GlobalLaw — Contact Form*\n\n👤 Name: ${name}\n📧 Email: ${email || 'Not provided'}\n📌 Subject: ${subject}\n🇱🇰 Country: Sri Lanka\n\n💬 Message:\n${msg}`;
    window.open('https://wa.me/94775048455?text=' + encodeURIComponent(waMsg), '_blank');
  };

  const resetForm = () => {
    setName(''); setEmail(''); setMsg(''); setSelectedReport('');
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="contact" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: 'Support' }]} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="anim d1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-900/15 border border-red-100 dark:border-red-900/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red dot-pulse"></span>
              <span className="text-[11px] font-semibold text-brand-red tracking-wide uppercase">Support Center</span>
            </div>
            <h1 className="anim d2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Need <span className="text-brand-red">Help</span>?
            </h1>
            <p className="anim d3 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
              We're here to help. Send us a message, find emergency contacts, or browse our FAQ below.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-2 mb-8 md:mb-12 relative z-20">
        <div className="anim d3 grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {[{ val: '~48h', label: 'Avg Response' }, { val: '24/7', label: 'WhatsApp' }, { val: 'Free', label: 'Always' }].map(s => (
            <div key={s.label} className="bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-xl p-3 text-center card-lift">
              <div className="text-lg md:text-xl font-extrabold text-brand-red">{s.val}</div>
              <div className="text-[10px] text-neutral-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">

        {/* Before You Contact Checklist */}
        <div className="anim d4 max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/25 rounded-2xl p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ClipboardCheck className="w-[18px] h-[18px] text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-3 text-blue-800 dark:text-blue-300">Before You Contact Us — Quick Checklist</h3>
                <div className="space-y-2">
                  {[
                    <>I've checked the <Link to="/lk/categories" className="underline font-semibold hover:text-blue-900 dark:hover:text-blue-200">Categories page</Link> for my topic</>,
                    'I\'ve read the FAQ section below',
                    <>This is NOT a legal emergency (if yes, call <a href="tel:119" className="underline font-semibold">119</a> now)</>,
                    'I understand GlobalLaw is educational, not legal advice',
                  ].map((text, i) => (
                    <label key={i} onClick={() => toggleCheck(i)} className={`checklist-item flex items-center gap-2.5 cursor-pointer text-sm text-blue-700 dark:text-blue-400/70 ${checklist[i] ? 'checked' : ''}`}>
                      <div className={`w-[18px] h-[18px] rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checklist[i] ? 'bg-brand-red border-brand-red' : 'border-blue-300 dark:border-blue-700'}`}>
                        {checklist[i] && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span>{text}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <div className="anim d4 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/15 flex items-center justify-center">
                  <Send className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Send Us a Message</h2>
                  <p className="text-[11px] text-neutral-400">Fills directly into our WhatsApp — no data stored</p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-3.5 mb-6 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-[12px] text-red-600 dark:text-red-400 leading-relaxed">
                  <strong>For urgent legal emergencies, call 119 immediately.</strong> GlobalLaw is educational only — we are not law enforcement.
                </p>
              </div>

              {/* Report Type */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2.5">What is this about?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {reportTypes.map(r => (
                    <div key={r.label} onClick={() => setSelectedReport(r.value)}
                      className={`report-card border rounded-xl p-3 text-center cursor-pointer relative transition-all ${selectedReport === r.value ? 'selected border-brand-red bg-brand-red/[0.04] dark:bg-brand-red/[0.08]' : 'border-neutral-200 dark:border-brand-border'}`}>
                      <div className="text-xl mb-1">{r.emoji}</div>
                      <span className="text-[11px] font-medium">{r.label}</span>
                      {selectedReport === r.value && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-brand-red flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">Full Name <span className="text-brand-red">*</span></label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} maxLength={100} placeholder="Your full name"
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-200 dark:border-brand-border rounded-xl text-sm transition-all focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-200 dark:border-brand-border rounded-xl text-sm transition-all focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" />
                </div>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">Message <span className="text-brand-red">*</span></label>
                <textarea value={msg} onChange={e => setMsg(e.target.value)} rows={5} maxLength={1000} placeholder="Describe your issue or question in detail..."
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-200 dark:border-brand-border rounded-xl text-sm resize-none transition-all focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)]" />
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-neutral-400">Tip: Be specific for faster responses</span>
                  <span className={`text-[10px] font-mono ${msg.length > 900 ? 'text-brand-red' : 'text-neutral-400'}`}>{msg.length}/1000</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleSend} className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.98]">
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
                <button onClick={resetForm} className="flex items-center justify-center gap-2 px-5 py-3 bg-neutral-100 dark:bg-brand-border hover:bg-neutral-200 dark:hover:bg-brand-border-light text-neutral-600 dark:text-neutral-400 font-semibold rounded-xl text-sm transition-all active:scale-[0.98]">
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="anim d6 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/15 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Frequently Asked Questions</h2>
                  <p className="text-[11px] text-neutral-400">Quick answers to common questions</p>
                </div>
              </div>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="faq-item border border-neutral-100 dark:border-brand-border rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-medium hover:bg-neutral-50 dark:hover:bg-brand-border/50 transition-colors">
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-neutral-400 faq-arrow flex-shrink-0 ml-2 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className="faq-content" style={{ maxHeight: openFaq === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)' }}>
                      <p className="px-4 pb-3.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-5">
            {/* Emergency */}
            <div className="anim d4 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-5 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2 relative z-10">
                <AlertTriangle className="w-4 h-4" /> Emergency Contacts
              </h3>
              <div className="space-y-2 relative z-10">
                {emergencies.map(e => (
                  <a key={e.num} href={`tel:${e.num}`} className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-3.5 py-2.5 transition-colors text-sm">
                    <span className="text-base">{e.icon}</span>
                    <div className="flex-1"><div className="font-bold text-[13px]">{e.name}</div><div className="text-[11px] text-red-200">{e.sub}</div></div>
                    <span className="font-extrabold text-lg">{e.num}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="anim d5 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-red" /> Office Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400">Mon – Fri</span>
                  <span className="font-semibold">9:00 AM – 6:00 PM</span>
                </div>
                <div className="h-[1px] bg-neutral-100 dark:bg-brand-border"></div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400">Saturday</span>
                  <span className="font-semibold">9:00 AM – 1:00 PM</span>
                </div>
                <div className="h-[1px] bg-neutral-100 dark:bg-brand-border"></div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400">Sunday</span>
                  <span className="font-semibold text-neutral-400">Closed</span>
                </div>
                <div className="h-[1px] bg-neutral-100 dark:bg-brand-border"></div>
                <div className="flex items-center gap-2 pt-1">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 dot-pulse' : 'bg-neutral-400'}`}></span>
                  <span className={`text-[11px] font-medium ${isOpen ? 'text-green-600 dark:text-green-400' : 'text-neutral-400'}`}>{status}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="anim d6 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-brand-red" /> Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map(a => (
                  <Link key={a.label} to={a.to} className="flex items-center gap-3 bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-100 dark:border-brand-border rounded-xl p-3 hover:border-brand-red/50 transition-all text-sm group">
                    <span>{a.emoji}</span>
                    <span className="flex-1 text-neutral-600 dark:text-neutral-400 group-hover:text-brand-red transition-colors">{a.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="anim d7">
              <a href="https://wa.me/94775048455" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl p-5 transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] group">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Chat on WhatsApp</div>
                  <div className="text-[11px] text-green-100">+94 77 504 8455 — Usually replies fast</div>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Email */}
            <div className="anim d8 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2"><Mail className="w-4 h-4 text-brand-red" /> Official Email</h3>
              <a href="mailto:chat.dmkaawya@gmail.com" className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors px-3.5 py-2.5 bg-neutral-50 dark:bg-brand-dark-2 rounded-xl border border-neutral-100 dark:border-brand-border hover:border-brand-red/30">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">chat.dmkaawya@gmail.com</span>
              </a>
              <p className="text-[10px] text-neutral-400 mt-2 px-1">For partnerships, legal inquiries, and official matters</p>
            </div>

            {/* Phone */}
            <div className="anim d8 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2"><Phone className="w-4 h-4 text-brand-red" /> Phone</h3>
              <a href="tel:+94775048455" className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors px-3.5 py-2.5 bg-neutral-50 dark:bg-brand-dark-2 rounded-xl border border-neutral-100 dark:border-brand-border hover:border-brand-red/30">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+94 77 504 8455</span>
              </a>
              <p className="text-[10px] text-neutral-400 mt-2 px-1">Available during office hours</p>
            </div>

            {/* Developer */}
            <div className="anim d9 bg-white dark:bg-brand-card border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2"><Code2 className="w-4 h-4 text-brand-red" /> Developer</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">KC</div>
                <div>
                  <div className="font-bold text-sm">Kaawya Chandrasekara</div>
                  <div className="text-[10px] text-neutral-400">Lead Developer & Founder</div>
                </div>
              </div>
              <a href="https://vezlo-web.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-brand-red hover:text-brand-red-dark transition-colors px-3.5 py-2.5 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20 hover:border-brand-red/40">
                <span className="font-bold">Vezlo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Privacy Note */}
            <div className="anim d9 bg-neutral-50 dark:bg-brand-dark-2 border border-neutral-100 dark:border-brand-border rounded-2xl p-5">
              <div className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[12px] mb-1">Privacy Note</h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">This form sends data directly to WhatsApp. We do not collect, store, or process any personal information on our servers. Your privacy is fully protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="anim mt-10 md:mt-14">
          <div className="cta-gradient rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-3xl mb-4">🤝</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Want to Partner With Us?</h2>
              <p className="text-red-100 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                We're open to partnerships with law firms, universities, government bodies, and NGOs who share our vision of accessible legal education.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://wa.me/94775048455?text=Hi%2C%20I%27m%20interested%20in%20partnering%20with%20GlobalLaw." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red rounded-xl font-bold text-sm hover:bg-neutral-100 transition-colors shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Discuss Partnership
                </a>
                <a href="mailto:chat.dmkaawya@gmail.com?subject=Partnership%20Inquiry" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <Mail className="w-4 h-4" /> Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LKFooter activePage="contact" />
      <WhatsAppButton />
    </div>
  );
};

export default LKContact;
