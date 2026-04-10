import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import LKBreadcrumb from '@/components/LKBreadcrumb';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState, useEffect, useRef } from 'react';
import { ChevronsDown, ChevronDown, ArrowDown, Info } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// ===== DATA =====
const TRIBUNALS = [
  {icon:'💼',name:{en:'Labor Tribunal',si:'කම්කරු අධිකරණය'},law:{en:'Industrial Disputes Act',si:'කාර්මික ආරවුල් පනත'},desc:{en:'Handles unfair dismissal, wrongful termination, employment disputes. Can order reinstatement or compensation.',si:'අසාධාරණ ලෙස ඉවත් කිරීම්, රැකියා ආරවුල් සමත් කරයි.'}},
  {icon:'🏭',name:{en:'Industrial Court',si:'කාර්මික අධිකරණය'},law:{en:'Industrial Disputes Act',si:'කාර්මික ආරවුල් පනත'},desc:{en:'Hears appeals from Labor Tribunal decisions. Higher authority in industrial disputes.',si:'කම්කරු අධිකරණ තීන්දුවලින් අභියාදන. කාර්මික ආරවුල්වල ඉහළ අධිකාරිය.'}},
  {icon:'🛒',name:{en:'Consumer Affairs Authority',si:'පාරිභෝගික අධිකාරිය'},law:{en:'CAA Act',si:'CAA පනත'},desc:{en:'Consumer complaints, defective goods, unfair trade practices, price control violations.',si:'පාරිභෝගික පැමිණිලි, දෝෂ සහිත භාණ්ඩ, වෙළඳ පාලන උල්ලංඝනයන්.'}},
  {icon:'🏠',name:{en:'Rent Board',si:'කුලි මණ්ඩලය'},law:{en:'Rent Act No. 7 of 1972',si:'කුලි පනත අංක 7 ක්‍ර. 1972'},desc:{en:'Rent disputes between landlords and tenants of controlled premises.',si:'කුලිකරුවන් සහ අධිකාරි පාලිත රැකියා අතර කුලි ආරවුල්.'}},
  {icon:'🏗️',name:{en:'UDA Tribunal',si:'නාගරික සංවර්ධන අධිකරණය'},law:{en:'UDA Act',si:'UDA පනත'},desc:{en:'Unauthorized construction, building code violations, development plan objections.',si:'අනුමත නොකළ ඉදිකිරීම්, ගොඩනැගිලි විධිවිධින් උල්ලංඝනයන්.'}},
  {icon:'🌾',name:{en:'Agricultural Tribunal',si:'කෘෂිකර්ම අධිකරණය'},law:{en:'Agricultural Lands Act',si:'කෘෂිකර්ම ඉඩම් පනත'},desc:{en:'Agricultural land tenure, cultivation rights, landlord-tenant agricultural relations.',si:'කෘෂිකර්ම ඉඩම් භාවිතය, වගාකිරීම් අයිතිවාසිකම්.'}},
  {icon:'🏦',name:{en:'Financial Crimes Tribunal',si:'මූල්‍ය අපරාධ අධිකරණය'},law:{en:'Financial Crimes Act',si:'මූල්‍ය අපරාධ පනත'},desc:{en:'Money laundering, large-scale banking fraud, market manipulation.',si:'මුදල් විශුද්ධිකරණය, බැංකු වංචා, වෙළඳපොළ මැඩීම්.'}},
  {icon:'🗳️',name:{en:'Election Petition Court',si:'මැතිවරණ පෙත්සම් අධිකරණය'},law:{en:'Parliamentary Elections Act',si:'පාර්ලිමේන්තු මැතිවරණ පනත'},desc:{en:'Election petitions challenging parliamentary and provincial council results.',si:'පාර්ලිමේන්තු සහ පළාත් සභා මැතිවරණ ප්‍රතිඵල අභියෝගය.'}},
  {icon:'⚖️',name:{en:'Bribery Commission',si:'අල්ලස් කොමිෂන් සභාව'},law:{en:'Bribery Act',si:'අල්ලස් පනත'},desc:{en:'Investigates bribery and corruption allegations. Can prosecute.',si:'අල්ලස් හෝ දූෂණ චෝදනා පරීක්ෂා කරයි, නඩු පවරයි.'}},
  {icon:'📝',name:{en:'Board of Quotation',si:'උද්ධෘත මණ්ඩලය'},law:{en:'Board of Quotation Act',si:'උද්ධෘත මණ්ඩල පනත'},desc:{en:'Determines fair market value of government-acquired property.',si:'රජය ලබාගන්නා දේපළවල සාධාරණ වට්ටම තීරණය කරයි.'}},
  {icon:'🔄',name:{en:'Land Claims Tribunal',si:'ඉඩම් හිමිකම් අධිකරණය'},law:{en:'Land Claims Act',si:'ඉඩම් හිමිකම් පනත'},desc:{en:'Resolves disputed land titles due to historical or administrative reasons.',si:'ඓතිහාසික හෝ පරිපාලන හේතූන් මත ඉඩම් හිමිකම් ආරවුල් විසඳයි.'}},
  {icon:'🚢',name:{en:'Admiralty Jurisdiction',si:'අධිරාජ අධිකරණ බලය'},law:{en:'Admiralty Jurisdiction Act',si:'අධිරාජ අධිකරණ බලය පනත'},desc:{en:'Maritime claims, ship arrests, cargo disputes via Commercial Court.',si:'නාවික ඉල්ලීම්, නැව් අත්අඩංගුවට ගැනීම, කාර්ගෝ ආරවුල්.'}}
];

const QUASI = [
  {icon:'🙌',name:{en:'Human Rights Commission',si:'මානව අයිතිවාසිකම් කොමිෂන් සභාව'},desc:{en:'Investigates HR violations, visits prisons, recommends compensation.',si:'මානව අයිතිවාසිකම් උල්ලංඝනයන් පරීක්ෂා කරයි, සිරගෙවල් පරීක්ෂා කරයි, වන්දි නියම කරයි.'}},
  {icon:'🔍',name:{en:'Ombudsman',si:'සාධාරණාධිකාරී'},desc:{en:'Investigates maladministration complaints against government bodies.',si:'රජයේ ආයතන වල වැරදි පරිපාලනය පිළිබඳ පැමිණිලි පරීක්ෂා කරයි.'}},
  {icon:'📢',name:{en:'Press Council',si:'මාධ්‍ය සභාව'},desc:{en:'Complaints against newspapers/journalists for ethical violations.',si:'පුවත්පත්/මාධ්‍යවේදීන්ට එරෙහිව වෘත්තීය සදාචාර උල්ලංඝනයන් පිළිබඳ පැමිණිලි.'}},
  {icon:'📋',name:{en:'National Police Commission',si:'ජාතික පොලිස් කොමිෂන් සභාව'},desc:{en:'Complaints against police officers, can order disciplinary action.',si:'පොලිස් නිලධාරීන්ට එරෙහිව පැමිණිලි, විනයාධිකරණ ක්‍රියාමාර්ග නියම කරයි.'}},
  {icon:'⚖️',name:{en:'Judicial Service Commission',si:'විනිශ්චාරක සේවා කොමිෂන් සභාව'},desc:{en:'Appoints, transfers, promotes, disciplines judicial officers.',si:'විනිශ්චාරකයන් පත් කිරීම, ස්ථානමාරු, උසස් කිරීම, විනයාධිකරණ කටයුතු.'}},
  {icon:'🏛️',name:{en:'Public Service Commission',si:'පොදු සේවා කොමිෂන් සභාව'},desc:{en:'Public service appointments, promotions, disciplinary matters.',si:'පොදු සේවා පත්වීම්, උසස් කිරීම්, විනයාධිකරණ කටයුතු.'}},
  {icon:'📊',name:{en:'Election Commission',si:'මැතිවරණ කොමිෂන් සභාව'},desc:{en:'Conducts elections, investigates complaints, enforces election laws.',si:'මැතිවරණ පවත්වයි, පැමිණිලි විමර්ශනය කරයි, මැතිවරණ නීති බලාත්මක කරයි.'}},
  {icon:'🏦',name:{en:'Central Bank Dispute Resolution',si:'මහ බැංකු ආරවුල් විසඳීම'},desc:{en:'Banking disputes between customers and licensed financial institutions.',si:'පාරිභෝගිකයන් සහ බලපත්‍ර ලත් මූල්‍ය ආයතන අතර බැංකු ආරවුල්.'}},
  {icon:'💡',name:{en:'IP Tribunal',si:'බුද්ධිමය දේපළ අධිකරණය'},desc:{en:'Trademark oppositions, patent revocations, copyright infringement.',si:'වෙළඳ ලකුණු විරෝධතා, පේටන්ට් අවලංගු කිරීම්, ප්‍රකාශන අයිතිය උල්ලංඝනයන්.'}},
  {icon:'🌿',name:{en:'Central Environmental Authority',si:'මධ්‍යම පරිසර අධිකාරිය'},desc:{en:'Issues directives, imposes fines for environmental violations. Reviews EIA.',si:'පරිසර උල්ලංඝනයන් සඳහා නියෝග නිකුත් කරයි, දඩ නියම කරයි, EIA සමාලෝචනය කරයි.'}},
  {icon:'📡',name:{en:'TRC (Telecom Regulator)',si:'විදුලි සංදේශන නියාමක කොමිෂන් සභාව'},desc:{en:'Consumer complaints against telecom operators, enforces licensing.',si:'ටෙලිකොම් පරිපාලකයන්ට එරෙහිව පාරිභෝගික පැමිණිලි, බලපත්‍ර කොන්දේසි බලාත්මක කරයි.'}},
  {icon:'💊',name:{en:'Drug Regulatory Authority',si:'ඖෂධ නියාමක අධිකාරිය'},desc:{en:'Regulates drugs, medical devices, cosmetics. Prosecutes safety violations.',si:'ඖෂධ, වෛද්‍ය උපකරණ, සෞන්දර්ය ද්‍රව්‍ය නියාමනය කරයි.'}},
  {icon:'🏠',name:{en:'Conciliation Board',si:'සමථ මණ්ඩලය'},desc:{en:'Pre-litigation mediation for minor civil and family disputes at village level.',si:'ගම්මට්ටමේ සුළු සිවිල් සහ පවුල් ආරවුල් නඩුවට පෙර සමථ කිරීම.'}},
  {icon:'🚔',name:{en:'National Police Commission (Discipline)',si:'ජාතික පොලිස් කොමිෂන් සභාව (විනය)'},desc:{en:'Separate from police administration. Orders investigations into misconduct.',si:'පොලිස් පරිපාලනයෙන් වෙනස්. වැරදි හැසිරීම් පිළිබඳ විමර්ශන නියම කරයි.'}}
];

const GLOSSARY = [
  {term:'Bail',def:{en:'Release of accused from custody, usually on payment of money or surety, pending trial.',si:'නඩු විභාගය අතරතුර බන්ධනාගාරයෙන් මුදා හැරීම, සාමාන්යයෙන් මුදල් හෝ වගකීම මත.'}},
  {term:'Certiorari',def:{en:'Writ to quash a lower court decision that exceeded jurisdiction or acted illegally.',si:'පහළ අධිකරණයක් තම බලය ඉක්මවා කටයුතු කළ තීන්දුවක් අවලංගු කරන ලිපිනය.'}},
  {term:'Habeas Corpus',def:{en:"'You shall have the body' — writ to produce a detained person before court to check if detention is lawful.",si:'"සිරුර ලබාගන්න" — රඳවාගෙන සිටින පුද්ගලයෙකු අධිකරණයට ඉදිරිපත් කරන ලෙස නියම කරන ලිපිනය.'}},
  {term:'Injunction',def:{en:'Court order to do or refrain from a specific act. Can be temporary or permanent.',si:'නිශ්චිත ක්‍රියාවක් කරන්න හෝ නොකරන්න අධිකරණයෙන් නියම කිරීම.'}},
  {term:'Plaintiff',def:{en:'Person who files a civil lawsuit.',si:'සිවිල් නඩුවක් ගොනු කරන පුද්ගලයා.'}},
  {term:'Defendant',def:{en:'Person against whom a lawsuit is filed or who is accused of a crime.',si:'නඩුවක් ගොනු කර ඇති පුද්ගලයා හෝ අපරාධයකට චෝදනා ලබන පුද්ගලයා.'}},
  {term:'Summons',def:{en:'Court order directing a person to appear before court on a specified date.',si:'නිශ්චිත දිනයක අධිකරණයට පෙනී සිටින ලෙස පුද්ගලයෙකුට නිකුත් කරන අධිකරණ නියෝගය.'}},
  {term:'Warrant',def:{en:'Court authorization for police to arrest, search, or seize property.',si:'පොලිසියට අත්අඩංගුවට ගැනීමට, සෝදිසි කිරීමට හෝ දේපළ අත්අඩංගුවට ගැනීමට අධිකරණ බලපත්‍රය.'}},
  {term:'Sub Judice',def:{en:'Matters before a court that cannot be publicly discussed to avoid influencing the case.',si:'දැනට අධිකරණයක් ඉදිරියේ පවතින කාරණය.'}},
  {term:'Puisne Judge',def:{en:'Supreme Court judge other than the Chief Justice.',si:'ප්‍රධාන විනිශ්චාරකවරයා නොවන ශ්‍රේෂ්ඨාධිකරණ විනිශ්චාරකයෙකු.'}},
  {term:'Prohibition',def:{en:'Writ to prevent a lower court from exceeding its jurisdiction.',si:'පහළ අධිකරණයක් තම බලය ඉක්මවා කටයුතු කිරීම වැළැක්වීමට නිකුත් කරන ලිපිනය.'}},
  {term:'Mandamus',def:{en:'Writ compelling a person or body to perform a public duty they are legally required to do.',si:'නීතියෙන් බැඳී ඇති පොදු වැඩකරුණාවක් සිදු කරන ලෙස බල කරන ලිපිනය.'}},
  {term:'Remand',def:{en:'Court order to keep an accused in custody pending investigation or trial.',si:'විමර්ශනයක් හෝ විභාගයක් අතරතුර චෝදනා ලාභීයා බන්ධනාගාරයේ තබන ලෙස අධිකරණ නියෝගය.'}},
  {term:'Leave to Appeal',def:{en:'Permission from a higher court to file an appeal.',si:'ඉහළ අධිකරණයකින් අභියාදනයක් ගොනු කිරීමට ලබා දෙන අවසරය.'}}
];

const FAQS = [
  {q:{en:'What is the difference between civil and criminal cases?',si:'සිවිල් සහ අපරාධ නඩුවල අතර වෙනස කුමක්ද?'},a:{en:'Civil cases are disputes between private parties (land, contracts, family). Criminal cases are offences against the state (theft, assault, murder). Civil → District Court. Criminal → Magistrate Court.',si:'සිවිල් නඩු = පෞද්ගලික පාර්ශ්ව අතර ආරවුල්. අපරාධ නඩු = රාජ්‍යයට එරෙහිව සිදු වන වැරදි. සිවිල් → දිස්ත්‍රික් අධිකරණය. අපරාධ → මහේස්ත්‍රාත් අධිකරණය.'}},
  {q:{en:'Can I file a case directly in the High Court?',si:'මම සෘජුවම මහා අධිකරණයේ නඩුවක් ගොනු කළ හැකද?'},a:{en:'For most matters, no. High Court mainly handles serious criminal cases committed from Magistrate Court and appeals.',si:'බොහෝ කටයුතු සඳහා නැත. මහා අධිකරණය ප්‍රධාන වශයෙන් බරපතල අපරාධ සහ අභියාදන නඩු බලයෙන් කරයි.'}},
  {q:{en:'How long does a typical court case take?',si:'සාමාන්‍ය නඩුවක් කොපමණ කාලයක් ගතවේද?'},a:{en:'It varies: Magistrate summary — weeks/months. District Court civil — 2-5 years. High Court criminal — 1-3 years. Appeals — 1-3 years each level.',si:'බෙහෙවින් වෙනස් වේ: මහේස්ත්‍රාත් සාරාංශ — සති/මාස. දිස්ත්‍රික් — 2-5 වසර. මහා අධිකරණ — 1-3 වසර.'}},
  {q:{en:'Do I need a lawyer to go to court?',si:'අධිකරණයට යන්න නීතිඥයෙකු අවශ්‍යද?'},a:{en:'Not always. In Magistrate Court you can appear in person for minor matters. For complex cases, a lawyer is strongly recommended.',si:'සෑම විටම නැත. මහේස්ත්‍රාත් අධිකරණයේ සුළු කාරණා සඳහා පෞද්ගලිකව පෙනී සිටිය හැක.'}},
  {q:{en:'What happens if I cannot afford a lawyer?',si:'මට නීතිඥයෙකුගේ ගාස්තු දීමට නොහැකි නම්?'},a:{en:'You can get free legal aid from: Legal Aid Commission, Bar Association clinics, University law faculty clinics, and various NGOs.',si:'නීති ආධාර කොමිෂන් සභාව, BASL ක්ලිනික්, විශ්වවිද්‍යාල නීති පීඨ ක්ලිනික් වලින් නොමිලේ ලබා ගත හැක.'}},
  {q:{en:'Does Sri Lanka have jury trials?',si:'ශ්‍රී ලංකාවේ ජූරි විභාග තිබේද?'},a:{en:'Jury trials were suspended in 1978. Currently all trials are by judge alone.',si:'ජූරි විභාග 1978 දී අත්හිටුවන ලදී. දැනට සියලුම විභාග විනිශ්චාරකවරයෙකු පමණක් විසින් සිදු කරයි.'}},
  {q:{en:'What is a Fundamental Rights petition?',si:'මූලික අයිතිවාසිකම් පෙත්සමක් යනු කුමක්ද?'},a:{en:'A petition filed directly in the Supreme Court under Article 126 alleging violation of a fundamental right. Must be filed within 30 days.',si:'ව්‍යවස්ථාවේ 126 වන ව්‍යවස්ථාව යටතේ ශ්‍රේෂ්ඨාධිකරණයේ සෘජුවම ගොනු කරන පෙත්සමකි. දින 30ක් ඇතුළත ගොනු කළ යුතුය.'}},
];

// Tab component
const TabGroup = ({ id, tabs, children }: { id: string; tabs: { key: string; label: string }[]; children: Record<string, React.ReactNode> }) => {
  const [active, setActive] = useState(tabs[0].key);
  return (
    <>
      <div className="flex gap-1 overflow-x-auto no-scrollbar border-b border-neutral-200 dark:border-brand-dark-border mb-6">
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => setActive(tab.key)}
            className={`text-xs font-semibold px-4 py-2.5 border-b-2 whitespace-nowrap transition ${active === tab.key ? 'text-brand-red border-brand-red' : 'text-neutral-500 border-transparent'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      {children[active]}
    </>
  );
};

const LKCourtSystem = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const quickLinks = [
    { href: '#hierarchy', label: '📜 Hierarchy' },
    { href: '#supreme', label: '🏛️ Supreme' },
    { href: '#appeal', label: '⚖️ Appeal' },
    { href: '#high', label: '🔨 High Court' },
    { href: '#district', label: '📋 District' },
    { href: '#magistrate', label: '📌 Magistrate' },
    { href: '#special', label: '⭐ Special' },
    { href: '#quasi', label: '🏢 Quasi-Judicial' },
    { href: '#glossary', label: '📖 Glossary' },
    { href: '#faq', label: '❓ FAQ' },
  ];

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <LKNavbar activePage="court-system" />
      <LKBreadcrumb crumbs={[{ label: 'GlobalLaw', to: '/' }, { label: '🇱🇰 Sri Lanka', to: '/lk' }, { label: 'Court System' }]} />

      {/* Header */}
      <section className="relative overflow-hidden bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="absolute inset-0 dot-bg opacity-[0.02] dark:opacity-[0.04]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-red/[0.04] rounded-full blur-[80px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 pt-10 pb-8 md:pt-14 md:pb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-full px-4 py-1.5 text-xs font-medium mb-5 fu">
            <span>⚖️</span><span className="text-neutral-500 dark:text-neutral-400">Judicial System Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 fu fu1">Sri Lanka's Court System</h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto fu fu2">Complete guide to every court, tribunal, and quasi-judicial body — explained in simple language.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-5 fu fu3 no-scrollbar overflow-x-auto">
            {quickLinks.map(l => (
              <a key={l.href} href={l.href} className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red hover:text-brand-red transition">{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs font-medium">
            {[['5','Main Courts'],['12','Special Tribunals'],['15+','Quasi-Judicial Bodies'],['54+','District Courts'],['75+','Magistrate Courts']].map(([n,l],i,arr) => (
              <div key={l} className="flex items-center gap-1.5">
                <span className="font-bold text-lg sm:text-xl">{n}</span><span>{l}</span>
                {i < arr.length - 1 && <div className="w-px h-5 bg-white/20 ml-4 hidden sm:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hierarchy */}
      <section id="hierarchy" className="py-10 md:py-16 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">📜 Court Hierarchy</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">Sri Lanka's courts are arranged in a strict hierarchy.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <a href="#supreme" className="court-node bg-brand-red text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-sm sm:text-base text-center w-full max-w-[300px] shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark transition">
              <div className="text-xl sm:text-2xl mb-1">🏛️</div><div>Supreme Court</div><div className="text-[10px] sm:text-xs opacity-80 mt-0.5">Highest court • Final appeals • Constitutional matters</div>
            </a>
            <div className="flex flex-col items-center"><ChevronsDown className="w-5 h-5 text-brand-red/40" /><span className="text-[9px] text-neutral-300 dark:text-neutral-700 -mt-1">Appeals go up ↑</span></div>
            <a href="#appeal" className="court-node bg-neutral-800 dark:bg-neutral-700 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-sm sm:text-base text-center w-full max-w-[300px] hover:bg-neutral-700 dark:hover:bg-neutral-600 transition">
              <div className="text-xl sm:text-2xl mb-1">⚖️</div><div>Court of Appeal</div><div className="text-[10px] sm:text-xs opacity-80 mt-0.5">Appellate jurisdiction • Reviews lower courts</div>
            </a>
            <div className="flex flex-col items-center"><ChevronsDown className="w-5 h-5 text-brand-red/30" /><span className="text-[9px] text-neutral-300 dark:text-neutral-700 -mt-1">Appeals go up ↑</span></div>
            <a href="#high" className="court-node bg-neutral-600 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-sm sm:text-base text-center w-full max-w-[300px] hover:bg-neutral-500 transition">
              <div className="text-xl sm:text-2xl mb-1">🔨</div><div>High Court</div><div className="text-[10px] sm:text-xs opacity-80 mt-0.5">Serious crimes • Original jurisdiction • Bail</div>
            </a>
            <div className="flex flex-col items-center"><ChevronsDown className="w-5 h-5 text-brand-red/20" /><span className="text-[9px] text-neutral-300 dark:text-neutral-700 -mt-1">Appeals go up ↑</span></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[640px]">
              <a href="#district" className="court-node bg-neutral-400 dark:bg-neutral-600 text-neutral-900 dark:text-white font-bold px-6 py-3 sm:py-4 rounded-2xl text-sm text-center hover:bg-neutral-300 dark:hover:bg-neutral-500 transition">
                <div className="text-xl mb-1">📋</div><div>District Court</div><div className="text-[10px] opacity-70 mt-0.5">Civil cases • Land • Family</div>
              </a>
              <a href="#magistrate" className="court-node bg-neutral-200 dark:bg-neutral-500 text-neutral-700 dark:text-white font-bold px-6 py-3 sm:py-4 rounded-2xl text-sm text-center hover:bg-neutral-100 dark:hover:bg-neutral-400 transition">
                <div className="text-xl mb-1">📌</div><div>Magistrate Court</div><div className="text-[10px] opacity-70 mt-0.5">Minor crimes • Summary offences</div>
              </a>
            </div>
          </div>
          <div className="mt-8 bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-4 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                <Info className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">⚠️ Important Note</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">Besides these 5 main courts, Sri Lanka has 12+ Special Tribunals and 15+ Quasi-Judicial Bodies that handle specific types of cases. Scroll down to learn about each one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supreme Court */}
      <section id="supreme" className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-2xl shrink-0">🏛️</div>
            <div><h2 className="text-xl sm:text-2xl font-bold">Supreme Court</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs">ශ්‍රේෂ්ඨාධිකරණය • Article 105</p></div>
          </div>
          <TabGroup id="sc" tabs={[{key:'overview',label:'Overview'},{key:'jurisdiction',label:'Jurisdiction'},{key:'process',label:'Process'},{key:'judges',label:'Judges'}]}>
            {{
              overview: (
                <>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[['Established','1972'],['No. of Judges','11 (incl. CJ)'],['Location','Hulftsdorp, Colombo']].map(([l,v]) => (
                      <div key={l} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="text-[10px] text-neutral-400 mb-1">{l}</div><div className="font-bold text-sm">{v}</div></div>
                    ))}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                    <p>The Supreme Court is the <strong>highest and final court</strong> in Sri Lanka. Its decisions are binding on all other courts.</p>
                    <p>Established under the 1972 Constitution, its powers are defined in <strong>Article 105</strong> of the 1978 Constitution. It has both <strong>original</strong> and <strong>appellate jurisdiction</strong>.</p>
                    <p>The Chief Justice and puisne judges are appointed by the President. The Supreme Court also has power to <strong>review legislation</strong>.</p>
                  </div>
                </>
              ),
              jurisdiction: (
                <div className="space-y-3">
                  {[{e:'📜',t:'Constitutional Jurisdiction',d:'Hears fundamental rights violations (Article 126), determines constitutionality of Bills.'},{e:'⚖️',t:'Appellate Jurisdiction',d:'Hears appeals from Court of Appeal in civil and criminal matters.'},{e:'👑',t:'Advisory Jurisdiction',d:'President may refer questions of law of public importance for advisory opinion.'},{e:'🔗',t:'Revisionary Jurisdiction',d:'Can call for and examine records from any court or tribunal.'},{e:'🌍',t:'Presidential Election Petitions',d:'Exclusive jurisdiction to hear election petitions regarding the President.'}].map(j => (
                    <div key={j.t} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2"><span className="text-lg">{j.e}</span><h4 className="font-bold text-sm">{j.t}</h4></div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{j.d}</p>
                    </div>
                  ))}
                </div>
              ),
              process: (
                <div className="space-y-4">
                  {[{n:1,t:'File Petition',d:'FR petition within 30 days of violation. For appeals, need leave to appeal first.'},{n:2,t:'Notice to Respondents',d:'Court issues notice to respondents. They file objections within granted time.'},{n:3,t:'Hearing',d:'Bench of 3-5 judges hears arguments. Attorney General may be heard in constitutional cases.'},{n:4,t:'Judgment',d:'Court delivers judgment. Can grant compensation, declarations, directives. Final and binding.'}].map(s => (
                    <div key={s.n} className="flex gap-3"><div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0">{s.n}</div><div><h4 className="font-bold text-sm mb-0.5">{s.t}</h4><p className="text-xs text-neutral-500 dark:text-neutral-400">{s.d}</p></div></div>
                  ))}
                </div>
              ),
              judges: (
                <div className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-5">
                  <div className="space-y-3 text-sm">
                    {[['Chief Justice','Appointed by President'],['Puisne Judges','10'],['Minimum Quorum','3 Judges'],['Full Bench','All 11 Judges'],['Retirement Age','65 years'],['FR Bench Size','3-5 Judges'],['Appeal Bench Size','3-5 Judges']].map(([l,v]) => (
                      <div key={l} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-brand-dark-border last:border-0"><span className="font-semibold">{l}</span><span className="text-neutral-500 text-xs">{v}</span></div>
                    ))}
                  </div>
                </div>
              )
            }}
          </TabGroup>
        </div>
      </section>

      {/* Court of Appeal */}
      <section id="appeal" className="py-10 md:py-16 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/10 dark:bg-neutral-700/20 flex items-center justify-center text-2xl shrink-0">⚖️</div>
            <div><h2 className="text-xl sm:text-2xl font-bold">Court of Appeal</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs">අභියාදන උසාවිය • Article 136</p></div>
          </div>
          <TabGroup id="ca" tabs={[{key:'overview',label:'Overview'},{key:'jurisdiction',label:'Jurisdiction'},{key:'process',label:'Appeal Process'}]}>
            {{
              overview: (<><div className="grid md:grid-cols-3 gap-4 mb-6">{[['Established','1978'],['No. of Judges','11-12'],['President','President of CoA']].map(([l,v])=>(<div key={l} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="text-[10px] text-neutral-400 mb-1">{l}</div><div className="font-bold text-sm">{v}</div></div>))}</div><div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3"><p>The Court of Appeal is the <strong>intermediate appellate court</strong>. It hears appeals from High Court, District Courts, and certain Tribunals.</p><p>It does not hear cases for the first time — it reviews decisions to determine if there were errors of law or procedure.</p><p>Sits in benches of 3 judges. Can confirm, reverse, modify lower court decisions, or order a new trial.</p></div></>),
              jurisdiction: (<div className="space-y-3">{[{e:'🔨',t:'High Court Appeals',d:'Criminal appeals generally by right, civil appeals may require leave.'},{e:'📋',t:'District Court Appeals',d:'Civil appeals, usually requires leave unless on a question of law.'},{e:'⭐',t:'Tribunal Appeals',d:'Appeals from Labor Tribunals, Industrial Courts, and other tribunals.'},{e:'📝',t:'Writ Jurisdiction',d:'Certiorari, Prohibition, Mandamus, Quo Warranto, Habeas Corpus.'}].map(j=>(<div key={j.t} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><span>{j.e}</span><h4 className="font-bold text-sm">{j.t}</h4></div><p className="text-xs text-neutral-500 dark:text-neutral-400">{j.d}</p></div>))}</div>),
              process: (<div className="space-y-4">{[{n:1,t:'Notice of Appeal',d:'File within 14-30 days. Pay court fees and security deposit.'},{n:2,t:'Record & Documents',d:'Obtain certified copies. File appeal documents with grounds.'},{n:3,t:'Hearing',d:'Bench of 3 judges. Written or oral arguments.'},{n:4,t:'Decision',d:'Affirm, reverse, modify, or remit. Further appeal to SC requires leave.'}].map(s=>(<div key={s.n} className="flex gap-3"><div className="w-8 h-8 rounded-full bg-neutral-800 text-white flex items-center justify-center text-xs font-bold shrink-0">{s.n}</div><div><h4 className="font-bold text-sm mb-0.5">{s.t}</h4><p className="text-xs text-neutral-500 dark:text-neutral-400">{s.d}</p></div></div>))}</div>)
            }}
          </TabGroup>
        </div>
      </section>

      {/* High Court */}
      <section id="high" className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-600/10 dark:bg-neutral-600/20 flex items-center justify-center text-2xl shrink-0">🔨</div>
            <div><h2 className="text-xl sm:text-2xl font-bold">High Court</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs">මහා අධිකරණය • Article 138</p></div>
          </div>
          <TabGroup id="hc" tabs={[{key:'overview',label:'Overview'},{key:'jurisdiction',label:'Jurisdiction'},{key:'types',label:'Case Types'}]}>
            {{
              overview: (<><div className="grid md:grid-cols-4 gap-4 mb-6">{[['No. of Courts','14'],['Zones','9'],['Judges per Court','1-3'],['Trial Type','Judge alone']].map(([l,v])=>(<div key={l} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="text-[10px] text-neutral-400 mb-1">{l}</div><div className="font-bold text-sm">{v}</div></div>))}</div><div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3"><p>The High Court is a <strong>court of first instance</strong> for serious criminal offences and also exercises appellate jurisdiction over Magistrate Courts.</p><p>Each High Court covers one or more districts. Tries murder, rape, large-scale fraud, dangerous drugs offences.</p><p>Jury trials were suspended in 1978. Maximum penalties include death sentence and life imprisonment.</p></div></>),
              jurisdiction: (<div className="space-y-3">{[{e:'🔪',t:'Original Criminal Jurisdiction',d:'Tries offences punishable with death, life imprisonment, or imprisonment over 7 years.'},{e:'📊',t:'Appellate Criminal Jurisdiction',d:'Hears appeals from Magistrate Court convictions.'},{e:'🔓',t:'Bail Applications',d:'Entertains bail in non-bailable offences where Magistrate refused.'},{e:'📋',t:'Limited Civil Jurisdiction',d:'Election petitions, certain commercial disputes.'}].map(j=>(<div key={j.t} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><span>{j.e}</span><h4 className="font-bold text-sm">{j.t}</h4></div><p className="text-xs text-neutral-500 dark:text-neutral-400">{j.d}</p></div>))}</div>),
              types: (<div className="grid sm:grid-cols-2 gap-3">{[{e:'🔪',t:'Murder & Culpable Homicide',d:'Penal Code Sections 293-304.'},{e:'💊',t:'Dangerous Drugs Offences',d:'Possession, trafficking under Dangerous Drugs Act.'},{e:'🔫',t:'Firearms Offences',d:'Unlawful possession, use, trafficking.'},{e:'💸',t:'Large-Scale Fraud',d:'Cheating, misappropriation, forgery.'},{e:'🚫',t:'Rape & Sexual Offences',d:'Grave sexual abuse, child abuse.'},{e:'🔥',t:'Arson & Property Crimes',d:'Arson, mischief causing damage.'},{e:'🤝',t:'Corruption & Bribery',d:'Certain bribery cases based on severity.'},{e:'💻',t:'Serious Cyber Crime',d:'Serious computer offences referred by Magistrate.'}].map(c=>(<div key={c.t} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><span className="text-lg">{c.e}</span><h4 className="font-bold text-sm mt-1">{c.t}</h4><p className="text-[11px] text-neutral-400 mt-1">{c.d}</p></div>))}</div>)
            }}
          </TabGroup>
        </div>
      </section>

      {/* District Court */}
      <section id="district" className="py-10 md:py-16 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-400/10 dark:bg-neutral-600/20 flex items-center justify-center text-2xl shrink-0">📋</div>
            <div><h2 className="text-xl sm:text-2xl font-bold">District Court</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs">දිස්ත්‍රික් අධිකරණය • One per district</p></div>
          </div>
          <TabGroup id="dc" tabs={[{key:'overview',label:'Overview'},{key:'cases',label:'Case Types'},{key:'fees',label:'Court Fees'}]}>
            {{
              overview: (<><div className="grid md:grid-cols-4 gap-4 mb-6">{[['No. of Courts','54+'],['Court Type','Civil Only'],['Monetary Limit','No limit'],['Appeal To','Court of Appeal']].map(([l,v])=>(<div key={l} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="text-[10px] text-neutral-400 mb-1">{l}</div><div className="font-bold text-sm">{v}</div></div>))}</div><div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3"><p>The District Court is the <strong>primary civil court</strong>. At least one per district.</p><p>Hears <strong>all civil matters</strong> regardless of amount — land disputes, contract breaches, debt recovery, divorce, child custody, inheritance.</p><p>Cases can be filed where the defendant resides, where the cause of action arose, or where the property is located.</p></div></>),
              cases: (<div className="grid sm:grid-cols-2 gap-3">{[{e:'🏠',t:'Land & Property Disputes',d:'Ownership, partition, ejectment, boundary disputes.'},{e:'💰',t:'Debt Recovery',d:'Loans, unpaid invoices, dishonoured cheques.'},{e:'👨‍👩‍👧',t:'Family & Divorce',d:'Divorce (general law), alimony, child custody.'},{e:'🔗',t:'Inheritance & Succession',d:'Letters of administration, probate, succession certificates.'},{e:'📄',t:'Contract Disputes',d:'Breach of contract, specific performance, injunctions.'},{e:'⚖️',t:'Tort Claims',d:'Negligence, defamation, nuisance, trespass.'},{e:'🏢',t:'Landlord-Tenant',d:'Eviction, rent recovery under Rent Act.'}].map(c=>(<div key={c.t} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><span className="text-lg">{c.e}</span><h4 className="font-bold text-sm mt-1">{c.t}</h4><p className="text-[11px] text-neutral-400 mt-1">{c.d}</p></div>))}</div>),
              fees: (<><div className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl overflow-hidden"><div className="grid grid-cols-3 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-brand-dark-border px-4 py-2.5 text-neutral-500"><span>Type</span><span className="text-center">Amount</span><span>Note</span></div><div className="divide-y divide-neutral-100 dark:divide-brand-dark-border text-xs">{[['Civil Summons','Rs. 500-2,500','Based on claim'],['Partition Action','Rs. 1,000-5,000','Per share'],['Divorce (General)','Rs. 1,500','Fixed fee'],['Injunction','Rs. 500-3,000','Varies by type'],['Ejectment','Rs. 500-2,000','Property value'],['Execution','Rs. 250-1,000','Per warrant'],['Appeal to CoA','Rs. 2,500-10,000','Case value']].map(([t,a,n])=>(<div key={t} className="grid grid-cols-3 px-4 py-2.5"><span>{t}</span><span className="text-center">{a}</span><span className="text-neutral-400">{n}</span></div>))}</div></div><p className="text-[10px] text-neutral-400 mt-2">⚠️ Fees are approximate. Consult the court or a lawyer for current fees.</p></>)
            }}
          </TabGroup>
        </div>
      </section>

      {/* Magistrate Court */}
      <section id="magistrate" className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-200/50 dark:bg-neutral-500/20 flex items-center justify-center text-2xl shrink-0">📌</div>
            <div><h2 className="text-xl sm:text-2xl font-bold">Magistrate Court</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs">මහේස්ත්‍රාත් අධිකරණය • Entry-level criminal court</p></div>
          </div>
          <TabGroup id="mc" tabs={[{key:'overview',label:'Overview'},{key:'cases',label:'Case Types'},{key:'bail',label:'Bail Rules'}]}>
            {{
              overview: (<><div className="grid md:grid-cols-4 gap-4 mb-6">{[['No. of Courts','75+'],['Court Type','Criminal Only'],['Max Sentence','7 years / Rs. 15,000'],['Appeal To','High Court']].map(([l,v])=>(<div key={l} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><div className="text-[10px] text-neutral-400 mb-1">{l}</div><div className="font-bold text-sm">{v}</div></div>))}</div><div className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3"><p>The Magistrate Court is the <strong>lowest-level criminal court</strong>. Handles the vast majority of criminal cases.</p><p>Over 75 Magistrate Courts across the country.</p><p>Maximum sentence: <strong>7 years imprisonment and/or Rs. 15,000 fine</strong>. Serious offences are committed to High Court.</p></div></>),
              cases: (<div className="grid sm:grid-cols-2 gap-3">{[{e:'🍶',t:'Minor Offences',d:'Public nuisance, drunkenness, loitering.'},{e:'🤜',t:'Simple Hurt & Assault',d:'Simple hurt, criminal intimidation.'},{e:'👛',t:'Minor Theft',d:'Theft below threshold, shoplifting.'},{e:'🚗',t:'Traffic Offences',d:'DUI, reckless driving, no license.'},{e:'💻',t:'Cyber Crimes (Minor)',d:'Minor computer offences.'},{e:'📋',t:'Summary Trials',d:'Offences triable summarily.'}].map(c=>(<div key={c.t} className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4"><span className="text-lg">{c.e}</span><h4 className="font-bold text-sm mt-1">{c.t}</h4><p className="text-[11px] text-neutral-400 mt-1">{c.d}</p></div>))}</div>),
              bail: (<div className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-5 space-y-4">{[{e:'✅',c:'bg-green-100 dark:bg-green-900/30',t:'Bailable Offences',d:'Bail is a RIGHT. Magistrate MUST grant.'},{e:'⚠️',c:'bg-yellow-100 dark:bg-yellow-900/30',t:'Non-Bailable Offences',d:"Bail at Magistrate's DISCRETION."},{e:'🚫',c:'bg-red-100 dark:bg-red-900/30',t:'Unbailable Offences',d:'Magistrate CANNOT grant bail. Must apply to High Court.'},{e:'🔄',c:'bg-blue-100 dark:bg-blue-900/30',t:'Bail Refused? Your Options',d:'1. Apply to High Court 2. File FR case 3. Apply again with changed circumstances'}].map(b=>(<div key={b.t} className="flex items-start gap-3"><div className={`w-7 h-7 rounded-lg ${b.c} flex items-center justify-center shrink-0 text-sm`}>{b.e}</div><div><h4 className="font-bold text-sm">{b.t}</h4><p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{b.d}</p></div></div>))}</div>)
            }}
          </TabGroup>
        </div>
      </section>

      {/* Special Tribunals */}
      <section id="special" className="py-10 md:py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-red/10 rounded-full blur-[80px]"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">⭐ Special Courts & Tribunals</h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">Specialized bodies created by specific legislation to handle particular types of disputes</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {TRIBUNALS.map(tr => (
              <div key={t(tr.name)} className="bg-neutral-800/80 border border-neutral-700/50 rounded-2xl p-4 md:p-5 hover:border-brand-red/50 transition group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tr.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-red-300 transition">{t(tr.name)}</h3>
                    <p className="text-[10px] text-neutral-500">{t(tr.law)}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{t(tr.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quasi-Judicial */}
      <section id="quasi" className="py-10 md:py-16 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">🏢 Quasi-Judicial Bodies</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">Bodies with powers similar to courts but established under specific statutes</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {QUASI.map(q => (
              <div key={t(q.name)} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-4 md:p-5 hover:border-brand-red/40 transition group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{q.icon}</span>
                  <h3 className="font-bold text-sm group-hover:text-brand-red transition">{t(q.name)}</h3>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t(q.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Flow */}
      <section id="caseflow" className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8"><h2 className="text-xl sm:text-2xl font-bold mb-2">🔄 How a Case Flows</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">Visual guide to the journey of a typical case</p></div>
          <div className="mb-8">
            <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><span className="w-6 h-6 rounded bg-brand-red text-white flex items-center justify-center text-[10px] font-bold">1</span>Criminal Case Flow</h3>
            <div className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-4 md:p-6">
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                {[{e:'🚨',t:'Police Investigation / FIR Filed',c:'bg-red-50 dark:bg-red-900/10'},{e:'📌',t:'Produced before Magistrate Court',c:'bg-red-50 dark:bg-red-900/10'},{e:'🔀',t:'Minor → Magistrate tries | Serious → Committed to High Court',c:'bg-yellow-50 dark:bg-yellow-900/10'},{e:'⚖️',t:'Trial & Judgment',c:'bg-orange-50 dark:bg-orange-900/10'},{e:'🔄',t:'Appeal: Magistrate → High Court → Court of Appeal → Supreme Court',c:'bg-yellow-50 dark:bg-yellow-900/10'}].map((s,i,arr)=>(
                  <div key={i}>
                    <div className={`flex items-center gap-3 p-2.5 ${s.c} rounded-lg`}><span className="text-lg">{s.e}</span><span>{s.t}</span></div>
                    {i < arr.length - 1 && <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-brand-red/40" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4 flex items-center gap-2"><span className="w-6 h-6 rounded bg-brand-red text-white flex items-center justify-center text-[10px] font-bold">2</span>Civil Case Flow</h3>
            <div className="bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-4 md:p-6">
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                {[{e:'📄',t:'Plaint filed in District Court'},{e:'📬',t:'Summons issued to defendant'},{e:'📝',t:'Written submissions, evidence, trial'},{e:'⚖️',t:'Judgment by District Court'},{e:'🔄',t:'Appeal: District Court → Court of Appeal → Supreme Court'}].map((s,i,arr)=>(
                  <div key={i}>
                    <div className="flex items-center gap-3 p-2.5 bg-blue-50 dark:bg-blue-900/10 rounded-lg"><span className="text-lg">{s.e}</span><span>{s.t}</span></div>
                    {i < arr.length - 1 && <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-brand-red/40" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Aid */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6"><h2 className="text-xl sm:text-2xl font-bold mb-2">🆓 Free Legal Aid Services</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">If you can't afford a lawyer, these services can help</p></div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[{t:'Legal Aid Commission',d:'Government body providing free legal assistance for criminal and civil matters.',c:'📞 +94 11 243 3533 | 📍 Colombo'},{t:'Bar Association of SL',d:'BASL runs legal aid clinics with volunteer lawyers.',c:'📞 +94 11 243 3544 | 📍 Hulftsdorp'},{t:'University Legal Aid',d:'Law faculties run legal aid clinics staffed by senior students.',c:'📍 University law faculties'},{t:'NGO Legal Aid',d:'Specialized free legal aid: women\'s rights, child rights, labor disputes.',c:'📍 Multiple organizations'}].map(a=>(
              <div key={a.t} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-4">
                <h4 className="font-bold text-sm mb-1">{a.t}</h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-2">{a.d}</p>
                <div className="text-[10px] text-neutral-400">{a.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6"><h2 className="text-xl sm:text-2xl font-bold mb-2">📖 Legal Glossary</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">Common court terms explained simply</p></div>
          <div className="space-y-1.5">
            {GLOSSARY.map(g => (
              <div key={g.term} className="gloss-item flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-4 py-3 rounded-xl cursor-default">
                <span className="font-bold text-sm text-brand-red shrink-0 sm:w-40">{g.term}</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t(g.def)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 md:py-16 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6"><h2 className="text-xl sm:text-2xl font-bold mb-2">❓ Frequently Asked Questions</h2><p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">Common questions about Sri Lanka's court system</p></div>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-neutral-100 dark:hover:bg-brand-dark-border/50 transition">
                  <span className="font-semibold text-sm leading-snug">{t(f.q)}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-neutral-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-3.5"><p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t(f.a)}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LKFooter />
      <WhatsAppButton />
    </div>
  );
};

export default LKCourtSystem;
