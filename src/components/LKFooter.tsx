import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';

interface LKFooterProps {
  activePage?: string;
}

const LKFooter = ({ activePage }: LKFooterProps) => (
  <footer className="bg-neutral-900 dark:bg-black text-white border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-extrabold tracking-tight mb-2.5">
            <span className="text-brand-red">Global</span>Law <span className="text-base">🇱🇰</span>
          </div>
          <p className="text-neutral-400 text-xs leading-relaxed mb-3">Making Sri Lanka's law accessible to everyone.</p>
          <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-2.5 text-[10px] text-yellow-400 leading-relaxed">
            ⚠️ Disclaimer: Educational platform only. Not legal advice.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-wider mb-3 text-neutral-300">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/lk" className={`${activePage === 'home' ? 'text-brand-red' : 'text-neutral-400 hover:text-brand-red'} transition`}>Home</Link></li>
            <li><Link to="/lk/categories" className={`${activePage === 'categories' ? 'text-brand-red' : 'text-neutral-400 hover:text-brand-red'} transition`}>Categories</Link></li>
            <li><Link to="/lk/about" className={`${activePage === 'about' ? 'text-brand-red' : 'text-neutral-400 hover:text-brand-red'} transition`}>About Us</Link></li>
            <li><Link to="/lk/contact" className={`${activePage === 'contact' ? 'text-brand-red' : 'text-neutral-400 hover:text-brand-red'} transition`}>Support</Link></li>
            <li><Link to="/lk/credits" className={`${activePage === 'credits' ? 'text-brand-red' : 'text-neutral-400 hover:text-brand-red'} transition`}>Credits</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-wider mb-3 text-neutral-300">Legal Links</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="text-neutral-400">Privacy Policy</span></li>
            <li><span className="text-neutral-400">Terms of Use</span></li>
            <li><a href="https://www.justice.gov.lk" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-brand-red transition">Ministry of Justice ↗</a></li>
            <li><a href="https://www.cert.gov.lk" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-brand-red transition">CERT Sri Lanka ↗</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-wider mb-3 text-neutral-300">Contact</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-1.5 text-neutral-400">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <a href="mailto:chat.dmkaawya@gmail.com" className="hover:text-brand-red transition">chat.dmkaawya@gmail.com</a>
            </li>
            <li className="flex items-center gap-1.5 text-neutral-400">
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <a href="https://wa.me/94775048455" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition">WhatsApp</a>
            </li>
            <li className="flex items-center gap-1.5 text-neutral-400">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+94 77 504 8455</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-neutral-500 text-[11px]">Copyright © 2026 GlobalLaw. All Rights Reserved.</p>
        <p className="text-neutral-500 text-[11px]">
          Powered by <a href="https://vezlo.dev" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-semibold">Vezlo</a>
          <span className="text-neutral-600 mx-0.5">|</span> DMC Group
        </p>
      </div>
    </div>
  </footer>
);

export default LKFooter;
