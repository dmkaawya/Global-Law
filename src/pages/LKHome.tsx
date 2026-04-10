import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, Shield, Baby, HeartPulse, Flame, ArrowRight, Star, ChevronDown, ChevronRight, Mail, AlertTriangle, X } from 'lucide-react';
import LKNavbar from '@/components/LKNavbar';
import LKFooter from '@/components/LKFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import Toast from '@/components/Toast';
import { useLanguage } from '@/hooks/useLanguage';

const T = {
  en: {
    announce: '🚀 52 law categories now available! Browse Sri Lanka\'s complete legal guide.',
    heroBadge: 'Sri Lanka',
    heroT1: 'Know Your Rights.',
    heroT2: 'Understand the Law.',
    heroSub: '52 categories. 200+ laws explained simply. Search, browse, and understand your legal rights in minutes.',
    searchPH: 'Try "Cyber Crime Act" or "Land Dispute"...',
    searchBtn: 'Search',
    emLabel: '🚨 Emergency:',
    emPolice: 'Police - 119',
    emCERT: 'CERT - 1919',
    emChild: 'Child Protection - 1929',
    emAmb: 'Ambulance - 1990',
    emFire: 'Fire - 1190',
    qsTitle: "What's your situation?",
    qsSub: 'Tap to find relevant laws instantly',
    qsArrest: 'Got Arrested?', qsArrestS: 'Know your rights',
    qsCyber: 'Cyber Bullying?', qsCyberS: 'Report & protect',
    qsLand: 'Land Dispute?', qsLandS: 'Property laws',
    qsWork: 'Workplace Issue?', qsWorkS: 'Labor rights',
    qsFam: 'Family Issue?', qsFamS: 'Marriage & divorce',
    qsMotor: 'Traffic Accident?', qsMotorS: 'Vehicle laws',
    qsTax: 'Tax Problem?', qsTaxS: 'Tax laws',
    qsEnv: 'Environmental Issue?', qsEnvS: 'Protection laws',
    qsCons: 'Consumer Complaint?', qsConsS: 'Your rights',
    qsIP: 'IP Infringement?', qsIPS: 'Copyright & patents',
    catTitle: 'Browse Law Categories',
    catSub: '52 categories covering every aspect of Sri Lankan law',
    viewAll: 'View All 52 →',
    readMore: 'Read More',
    cCyber: 'Cyber Laws', cCyberD: 'Computer and internet laws, cyber crime, online safety, and digital privacy.',
    cCrim: 'Criminal Laws', cCrimD: 'Fraud, theft, assault, penalties, weapons, and criminal procedure codes.',
    cFund: 'Fundamental Rights', cFundD: 'Constitutional rights, equality, freedom of speech, and human rights.',
    cCivil: 'Civil Laws', cCivilD: 'Land disputes, contracts, tort, compensation, and civil procedure.',
    cLab: 'Corporate / Labor Laws', cLabD: 'Employment rights, EPF, ETF, company registration, securities.',
    cTax: 'Tax Laws', cTaxD: 'Income tax, VAT, customs, excise, and revenue regulations.',
    cEnv: 'Environmental Laws', cEnvD: 'Wildlife, forestry, water, marine, mining, and pollution control.',
    cMotor: 'Motor Vehicle Laws', cMotorD: 'Traffic regulations, fines, license laws, railway, and aviation.',
    cFam: 'Family Laws', cFamD: 'Marriage, divorce, child custody, inheritance, domestic violence.',
    cProp: 'Property & Land Laws', cPropD: 'Land ownership, transfers, leases, mortgages, housing, construction.',
    cCons: 'Consumer Protection', cConsD: 'Consumer rights, contracts, insurance, cooperatives, tourism.',
    cIP: 'Intellectual Property', cIPD: 'Copyright, trademarks, patents, data protection, AI & tech laws.',
    moreHealth: 'Health', moreEdu: 'Education', moreElect: 'Elections', moreHR: 'Human Rights', moreMedia: 'Media', moreMil: 'Military',
    moreTeaser: '+ 40 more categories including Agriculture, Banking, Maritime, Sports, Gambling & more →',
    trTitle: '🔥 Trending Laws', trSub: 'Most searched in Sri Lanka right now',
    tr1: 'Online Safety Bill', tr1S: 'New digital safety regulations affecting social media users',
    tr2: 'Child Protection Laws', tr2S: 'Child rights, abuse prevention & reporting procedures',
    tr3: 'Traffic Fine Updates', tr3S: 'New penalty amounts, demerit points & traffic rules',
    tr4: 'Cyber Crime Act', tr4S: 'Hacking, online fraud, identity theft penalties',
    tr5: 'Domestic Violence Act', tr5S: 'Protection orders, rights & legal remedies',
    tr6: 'EPF & ETF Regulations', tr6S: 'Employee fund benefits, withdrawal & calculation',
    tr7: 'Anti-Corruption Laws', tr7S: 'Bribery commission, asset declarations & penalties',
    tr8: 'Intellectual Property Act', tr8S: 'Copyright, trademark registration & infringement penalties',
    tr9: 'Environmental Protection', tr9S: 'NEA regulations, EIA requirements & pollution controls',
    trHot: 'HOT', trRise: 'RISING', trUpd: 'UPDATED',
    lotwBadge: 'LAW OF THE WEEK',
    lotwTitle: 'Penal Code (No. 2 of 1883)',
    lotwDesc: "Sri Lanka's primary criminal law defining offences and punishments. Recently amended with cyber crime and online harassment provisions. Understanding this helps you know your rights if accused or reporting a crime.",
    lotwBtn: 'Read Full Explanation', lotwLink: 'View full details →',
    lotwSec: 'Sections', lotwYr: 'Enacted', lotwUpd: 'Last Amended', lotwTime: 'Read Time',
    statTitle: 'GlobalLaw Sri Lanka in Numbers', statLaws: 'Laws Explained', statCat: 'Categories', statLang: 'Languages', statFree: 'Free Forever', statBrowse: 'Browse all →', statLearn: 'Learn more →',
    spotTitle: 'Explore by Domain', spotSub: '52 categories organized into key legal areas',
    spotPop: 'Popular', spotPopS: 'Most viewed', spotNew: 'Newly Added', spotNewS: 'Latest updates',
    spotRights: 'Rights & Freedoms', spotRightsS: '12 categories', spotBiz: 'Business & Trade', spotBizS: '8 categories',
    spotCrime: 'Crime & Enforcement', spotCrimeS: '10 categories', spotNature: 'Nature & Resources', spotNatureS: '8 categories',
    rpTitle: 'Report a Cyber Crime',
    rpDesc: "Victim of cyber bullying, hacking, or online fraud? Don't wait — report it now to the authorities.",
    rpCERT: 'Report to CERT (1919)', rpCID: 'Call CID',
    rpWarn: 'For emergencies, call 119 immediately. GlobalLaw is educational, not law enforcement.',
    rpMore: 'View all emergency contacts & reporting guide →',
    courtTitle: "Sri Lanka's Court System", courtSub: 'How the legal system works, simplified',
    courtMore: 'Learn how the court system works in detail',
    nlTitle: 'Stay Updated', nlDesc: 'Get new law explanations to your email. No spam.',
    nlPH: 'Enter your email', nlBtn: 'Subscribe', nlPriv: 'We respect your privacy. Unsubscribe anytime.',
  },
  si: {
    announce: '🚀 52 නීති කාණ්ඩ දැන් ලබා ගන්න! ශ්‍රී ලංකාවේ සම්පූර්ණ නීති මාර්ගෝපදේශය.',
    heroBadge: 'ශ්‍රී ලංකාව',
    heroT1: 'ඔබේ අයිතිවාසිකම්',
    heroT2: 'සරලව දන්න.',
    heroSub: '52 කාණ්ඩ. 200+ නීති සරලව පැහැදිලි කරලා. මිනිත්තු කිහිපයකින් අයිතිවාසිකම් තේරුම් ගන්න.',
    searchPH: '"සයිබර් අපරාධ" හෝ "ඉඩම් ආරවුල" උත්සාහ කරන්න...',
    searchBtn: 'සොයන්න',
    emLabel: '🚨 හදිසි:',
    emPolice: 'පොලිසිය - 119',
    emCERT: 'CERT - 1919',
    emChild: 'ළමා ආරක්ෂාව - 1929',
    emAmb: 'ඇම්බියුලන්ස් - 1990',
    emFire: 'ගිනි නිවන - 1190',
    qsTitle: 'ඔබේ තත්ත්වය කුමක්ද?', qsSub: 'ඔබ්බට ඔබන්න, අදාළ නීති හොයන්න',
    qsArrest: 'අත්අඩංගුවට ගත්තොත්?', qsArrestS: 'අයිතිවාසිකම්',
    qsCyber: 'සයිබර් බුලියින්ග්?', qsCyberS: 'වාර්තා කරන්න',
    qsLand: 'ඉඩම් ආරවුලක්ද?', qsLandS: 'දේපළ නීති',
    qsWork: 'රැකියා ප්‍රශ්නයක්ද?', qsWorkS: 'කම්කරු අයිතිවාසිකම්',
    qsFam: 'පවුල් ප්‍රශ්නයක්ද?', qsFamS: 'විවාහ & දික්කෙරීම',
    qsMotor: 'රථ වාහන අනතුරක්ද?', qsMotorS: 'වාහන නීති',
    qsTax: 'බදු ප්‍රශ්නයක්ද?', qsTaxS: 'බදු නීති',
    qsEnv: 'පරිසර ප්‍රශ්නයක්ද?', qsEnvS: 'ආරක්ෂණ නීති',
    qsCons: 'පාරිභෝගික පැමිණිල්ලක්ද?', qsConsS: 'ඔබේ අයිතිවාසිකම්',
    qsIP: 'බුද්ධිමය දේපළ උල්ලංඝනයක්ද?', qsIPS: 'ප්‍රකාශන හා පේටන්ට්',
    catTitle: 'නීති කාණ්ඩ බලන්න', catSub: 'ශ්‍රී ලංකාවේ නීතියේ සෑම අංශයක්ම ආවරණය කරන 52 කාණ්ඩ',
    viewAll: 'සියල්ල 52 බලන්න →', readMore: 'වැඩි කියවන්න',
    cCyber: 'සයිබර් නීති', cCyberD: 'පරිගණක සහ අන්තර්ජාල නීති, සයිබර් අපරාධ, මාර්ගගත ආරක්ෂාව.',
    cCrim: 'අපරාධ නීති', cCrimD: 'වංචා, හොරකම්, පහරදීම්, දඬුවම්, ආයුධ, අපරාධ විධිවිධාන.',
    cFund: 'මූලික අයිතිවාසිකම්', cFundD: 'ව්‍යවස්ථාමූලික අයිතිවාසිකම්, සමානාත්මතාව, ප්‍රකාශන නිදහස.',
    cCivil: 'සිවිල් නීති', cCivilD: 'ඉඩම් ආරවුල්, ගිවිසුම්, වැරදි ක්‍රියා, වන්දි, සිවිල් විධිවිධාන.',
    cLab: 'කෝපරේට් / කම්කරු නීති', cLabD: 'රැකියා අයිතිවාසිකම්, EPF, ETF, සමාගම් ලියාපදිංචිය.',
    cTax: 'බදු නීති', cTaxD: 'ආදායම් බද්ද, VAT, රේගු, බලපත්‍ර, ආදායම් රෙගුලාසි.',
    cEnv: 'පරිසර නීති', cEnvD: 'වන සතුන්, වන, ජල, මුහුදු, ඛනිජ, දූෂණ පාලනය.',
    cMotor: 'මෝටර් රථ නීති', cMotorD: 'මාර්ග රීති, දඩ, බලපත්‍ර, දුම්රිය, ගුවන් සේවා.',
    cFam: 'පවුල් නීති', cFamD: 'විවාහ, දික්කෙරීම, ළමා භාරකාරිත්වය, උරුමය.',
    cProp: 'දේපළ හා ඉඩම් නීති', cPropD: 'ඉඩම් හිමිකම්, හුවමාරු, බද්ද, බලපත්‍රකරණය, නිවාස, ඉදිකිරීම්.',
    cCons: 'පාරිභෝගික ආරක්ෂණය', cConsD: 'පාරිභෝගික අයිතිවාසිකම්, ගිවිසුම්, රක්ෂණ, සංගම්, සංචාරක.',
    cIP: 'බුද්ධිමය දේපළ', cIPD: 'ප්‍රකාශන, වෙළඳ ලකුණු, පේටන්ට්, දත්ත ආරක්ෂණ, AI නීති.',
    moreHealth: 'සෞඛ්‍ය', moreEdu: 'අධ්‍යාපන', moreElect: 'මැතිවරණ', moreHR: 'මානව අයිතිවාසිකම්', moreMedia: 'මාධ්‍ය', moreMil: 'හමුදා',
    moreTeaser: '+ කෘෂිකර්ම, බැංකු, නාවික, ක්‍රීඩා, ජූලා ඇතුළු තවත් 40+ කාණ්ඩ →',
    trTitle: '🔥 ජනප්‍රිය නීති', trSub: 'දැන් වැඩියෙන්ම සොයන නීති',
    tr1: 'Online Safety Bill', tr1S: 'සමාජ මාධ්‍ය පරිශීලකයන්ට බලපාන නව ඩිජිටල් ආරක්ෂණ රෙගුලාසි',
    tr2: 'ළමා ආරක්ෂණ නීති', tr2S: 'ළමා අයිතිවාසිකම්, අපචාර වැළැක්වීම සහ වාර්තා කිරීම',
    tr3: 'මාර්ග දඩ යාවත්කාලීන', tr3S: 'නව දඩ මුදල්, demerit points සහ මාර්ග රීති',
    tr4: 'සයිබර් අපරාධ පනත', tr4S: 'හැකිං, මාර්ගගත වංචා, අනන්‍යතාවය සොරකම් දඬුවම්',
    tr5: 'ගෘහස්ථ ප්‍රචණ්ඩත්වය පනත', tr5S: 'ආරක්ෂා ආඥා, අයිතිවාසිකම් සහ නෛතික විසඳුම්',
    tr6: 'EPF & ETF රෙගුලාසි', tr6S: 'සේවක අරමුදල් ප්‍රතිලාභ, ආපසු ගැනීම සහ ගණනය',
    tr7: 'දූෂණ විරෝධී නීති', tr7S: 'අල්ලස් කොමිසම, වත්කම් ප්‍රකාශයන් සහ දඬුවම්',
    tr8: 'බුද්ධිමය දේපළ පනත', tr8S: 'ප්‍රකාශන, වෙළඳ ලකුණු ලියාපදිංචිය සහ උල්ලංඝන දඬුවම්',
    tr9: 'පරිසර ආරක්ෂණය', tr9S: 'NEA රෙගුලාසි, EIA අවශ්‍යතා සහ දූෂණ පාලනය',
    trHot: 'ජනප්‍රිය', trRise: 'ඉහළ යන', trUpd: 'යාවත්කාලීන',
    lotwBadge: 'සතියේ නීතිය',
    lotwTitle: 'දණ්ඩ නීති සංග්‍රහය (1883 අංක 2)',
    lotwDesc: 'ශ්‍රී ලංකාවේ ප්‍රධාන අපරාධ නීතිය. මෑතකදී සයිබර් අපරාධ සඳහා අලුතින් සංශෝධනය කරලා.',
    lotwBtn: 'සම්පූර්ණ පැහැදිලි කියවන්න', lotwLink: 'සම්පූර්ණ විස්තර බලන්න →',
    lotwSec: 'වගන්ති', lotwYr: 'ස්ථාපිත', lotwUpd: 'අවසාන සංශෝධනය', lotwTime: 'කියවීමේ කාලය',
    statTitle: 'GlobalLaw ශ්‍රී ලංකාව ඉලක්කම් වලින්', statLaws: 'නීති පැහැදිලි කරලා', statCat: 'කාණ්ඩ', statLang: 'භාෂා', statFree: 'සදහටම නොමිලේ', statBrowse: 'සියල්ල බලන්න →', statLearn: 'වැඩි දන්න →',
    spotTitle: 'අංශය අනුව ගවේෂණය කරන්න', spotSub: 'ප්‍රධාන නීති ක්ෂේත්‍ර යටතේ සංවිධානය කළ 52 කාණ්ඩ',
    spotPop: 'ජනප්‍රිය', spotPopS: 'වැඩියෙන්ම බලන', spotNew: 'අලුතින් එකතු කළ', spotNewS: 'නවතම යාවත්කාලීන',
    spotRights: 'අයිතිවාසිකම් හා නිදහස්', spotRightsS: '12 කාණ්ඩ', spotBiz: 'ව්‍යාපාර හා වෙළඳාම', spotBizS: '8 කාණ්ඩ',
    spotCrime: 'අපරාධ හා බලාත්මක කිරීම', spotCrimeS: '10 කාණ්ඩ', spotNature: 'ස්වභාවිකය හා සම්පත්', spotNatureS: '8 කාණ්ඩ',
    rpTitle: 'සයිබර් අපරාධයක් වාර්තා කරන්න',
    rpDesc: 'සයිබර් බුලියින්ග්, හැකිං හෝ මාර්ගගත වංචාවක් වුණොත් දැන්ම වාර්තා කරන්න.',
    rpCERT: 'CERT වෙත වාර්තා කරන්න (1919)', rpCID: 'CID ට කතා කරන්න',
    rpWarn: 'හදිසි අවස්ථාවකදී 119 ට කතා කරන්න. GlobalLaw අධ්‍යාපනිකයි.',
    rpMore: 'සියලු හදිසි අංක සහ වාර්තා මාර්ගෝපදේශය බලන්න →',
    courtTitle: 'ශ්‍රී ලංකාවේ උසාවි පද්ධතිය', courtSub: 'නීති පද්ධතිය ක්‍රියා කරන්නේ කොහොමද',
    courtMore: 'උසාවි පද්ධතිය විස්තරව ඉගෙන ගන්න',
    nlTitle: 'යාවත්කාලීන වෙන්න', nlDesc: 'අලුත් නීති පැහැදිලි කිරීම් ඊමේල් එකට ගන්න. ස්පෑම් නෑ.',
    nlPH: 'ඊමේල් ලිපිනය ඇතුළත් කරන්න', nlBtn: 'දාන්න', nlPriv: 'පෞද්ගලිකත්වය ආරක්ෂා කරනවා. ඕනම වෙලාවක නතර කරන්න.',
  }
};

const situations = [
  { emoji: '🚔', key: 'qsArrest', subKey: 'qsArrestS', cat: 'criminal' },
  { emoji: '💬', key: 'qsCyber', subKey: 'qsCyberS', cat: 'cyber' },
  { emoji: '🏠', key: 'qsLand', subKey: 'qsLandS', cat: 'property' },
  { emoji: '💼', key: 'qsWork', subKey: 'qsWorkS', cat: 'labor' },
  { emoji: '👨‍👩‍👧', key: 'qsFam', subKey: 'qsFamS', cat: 'family', colSpan: true },
  { emoji: '🚗', key: 'qsMotor', subKey: 'qsMotorS', cat: 'motor' },
  { emoji: '💰', key: 'qsTax', subKey: 'qsTaxS', cat: 'tax' },
  { emoji: '🌿', key: 'qsEnv', subKey: 'qsEnvS', cat: 'environmental' },
  { emoji: '🛒', key: 'qsCons', subKey: 'qsConsS', cat: 'consumer' },
  { emoji: '💡', key: 'qsIP', subKey: 'qsIPS', cat: 'ip', colSpan: true },
];

const categories = [
  { icon: '💻', key: 'cCyber', descKey: 'cCyberD', count: 12 },
  { icon: '🚔', key: 'cCrim', descKey: 'cCrimD', count: 15, badge: '🔥 POPULAR' },
  { icon: '🛡️', key: 'cFund', descKey: 'cFundD', count: 8 },
  { icon: '🏢', key: 'cCivil', descKey: 'cCivilD', count: 10 },
  { icon: '💼', key: 'cLab', descKey: 'cLabD', count: 9 },
  { icon: '💰', key: 'cTax', descKey: 'cTaxD', count: 8, badge: '🔥 POPULAR' },
  { icon: '🌿', key: 'cEnv', descKey: 'cEnvD', count: 9 },
  { icon: '🚗', key: 'cMotor', descKey: 'cMotorD', count: 7, badge: 'NEW', badgeRed: true },
  { icon: '👨‍👩‍👧', key: 'cFam', descKey: 'cFamD', count: 6 },
  { icon: '🏠', key: 'cProp', descKey: 'cPropD', count: 8 },
  { icon: '🛒', key: 'cCons', descKey: 'cConsD', count: 6 },
  { icon: '💡', key: 'cIP', descKey: 'cIPD', count: 7, badge: 'NEW', badgeRed: true },
];

const moreCategories = [
  { icon: '🏥', key: 'moreHealth' },
  { icon: '📚', key: 'moreEdu' },
  { icon: '🗳️', key: 'moreElect' },
  { icon: '🙌', key: 'moreHR' },
  { icon: '📢', key: 'moreMedia' },
  { icon: '🎖️', key: 'moreMil' },
];

const trendingLaws = [
  { icon: '🛡️', key: 'tr1', subKey: 'tr1S', badge: 'trHot', badgeColor: 'green' },
  { icon: '👶', key: 'tr2', subKey: 'tr2S', badge: 'trRise', badgeColor: 'yellow' },
  { icon: '🚦', key: 'tr3', subKey: 'tr3S', badge: 'trUpd', badgeColor: 'blue' },
  { icon: '💻', key: 'tr4', subKey: 'tr4S', badge: 'trHot', badgeColor: 'green', link: '/lk/law/cyber-crime-act' },
  { icon: '🏠', key: 'tr5', subKey: 'tr5S', badge: 'trRise', badgeColor: 'yellow' },
  { icon: '💰', key: 'tr6', subKey: 'tr6S', badge: 'trUpd', badgeColor: 'blue' },
  { icon: '🔍', key: 'tr7', subKey: 'tr7S', badge: 'trHot', badgeColor: 'green' },
  { icon: '💡', key: 'tr8', subKey: 'tr8S', badge: 'trRise', badgeColor: 'yellow' },
  { icon: '🌿', key: 'tr9', subKey: 'tr9S', badge: 'trUpd', badgeColor: 'blue' },
];

const spotlightItems = [
  { icon: '🔥', key: 'spotPop', subKey: 'spotPopS' },
  { icon: '🆕', key: 'spotNew', subKey: 'spotNewS' },
  { icon: '🛡️', key: 'spotRights', subKey: 'spotRightsS' },
  { icon: '📊', key: 'spotBiz', subKey: 'spotBizS' },
  { icon: '⚖️', key: 'spotCrime', subKey: 'spotCrimeS' },
  { icon: '🌍', key: 'spotNature', subKey: 'spotNatureS' },
];

const badgeColors: Record<string, string> = {
  green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
};

const LKHome = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [showAnnounce, setShowAnnounce] = useState(true);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [searchVal, setSearchVal] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const t = (key: string) => (T[lang] as Record<string, string>)?.[key] || (T.en as Record<string, string>)[key] || '';

  const doSearch = () => {
    const v = searchVal.trim();
    if (v) navigate(`/lk/categories?search=${encodeURIComponent(v)}`);
    else setToast({ visible: true, message: 'Please enter a search term' });
  };

  const qSearch = (term: string) => {
    setSearchVal(term);
    navigate(`/lk/categories?search=${encodeURIComponent(term)}`);
  };

  return (
    <div className="bg-white dark:bg-brand-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-300">

      {/* Announcement Banner */}
      {showAnnounce && (
        <div className="bg-brand-red text-white text-center py-2 px-4 text-xs md:text-sm font-medium relative z-[60]">
          <span>{t('announce')}</span>
          <button onClick={() => setShowAnnounce(false)} className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-60 transition p-1" aria-label="Close">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <LKNavbar activePage="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="absolute inset-0 dot-bg opacity-[0.02] dark:opacity-[0.04]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/[0.04] rounded-full blur-[80px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 pt-14 pb-16 md:pt-20 md:pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-full px-4 py-1.5 text-xs font-medium mb-6 fu">
            <span>🇱🇰</span>
            <span className="text-neutral-500 dark:text-neutral-400">{t('heroBadge')}</span>
            <Link to="/" className="text-neutral-400 hover:text-brand-red transition ml-0.5" aria-label="Change country">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-4 fu fu1">
            <span>{t('heroT1')}</span><br />
            <span className="text-brand-red">{t('heroT2')}</span>
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10 fu fu2">
            {t('heroSub')}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto fu fu3">
            <div className="search-glow flex items-center bg-white dark:bg-brand-dark-card border-2 border-neutral-200 dark:border-brand-dark-border rounded-2xl px-4 py-3 md:px-6 md:py-4 transition-all focus-within:border-brand-red">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                placeholder={t('searchPH')}
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && doSearch()}
                className="flex-1 bg-transparent ml-3 text-sm sm:text-base md:text-lg focus:outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
              />
              <button onClick={doSearch} className="bg-brand-red hover:bg-brand-red-dark text-white rounded-xl px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold transition shrink-0">
                {t('searchBtn')}
              </button>
            </div>
            {/* Quick Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-3.5">
              {[
                { label: '💻 Cyber Crime', term: 'Cyber Crime' },
                { label: '🏠 Land Dispute', term: 'Land Dispute' },
                { label: '💼 Workers Rights', term: 'Workers Rights' },
                { label: '🛡️ Online Safety', term: 'Online Safety Bill' },
                { label: '💰 Tax Laws', term: 'Tax', hidden: true },
                { label: '🌿 Environment', term: 'Environmental', hidden: true },
              ].map(tag => (
                <button
                  key={tag.term}
                  onClick={() => qSearch(tag.term)}
                  className={`text-[11px] sm:text-xs bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-neutral-500 hover:border-brand-red hover:text-brand-red transition ${tag.hidden ? 'hidden sm:inline-flex' : ''}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] sm:text-xs md:text-sm font-medium">
            <span className="font-bold">{t('emLabel')}</span>
            <a href="tel:119" className="flex items-center gap-1 hover:underline"><Phone className="w-3 h-3" /><span>{t('emPolice')}</span></a>
            <a href="tel:1919" className="flex items-center gap-1 hover:underline"><Shield className="w-3 h-3" /><span>{t('emCERT')}</span></a>
            <a href="tel:1929" className="flex items-center gap-1 hover:underline"><Baby className="w-3 h-3" /><span>{t('emChild')}</span></a>
            <a href="tel:1990" className="flex items-center gap-1 hover:underline"><HeartPulse className="w-3 h-3" /><span>{t('emAmb')}</span></a>
            <a href="tel:1190" className="flex items-center gap-1 hover:underline"><Flame className="w-3 h-3" /><span>{t('emFire')}</span></a>
          </div>
        </div>
      </section>

      {/* Quick Situations */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1.5">{t('qsTitle')}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm text-center mb-6 md:mb-8">{t('qsSub')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4">
            {situations.map(s => (
              <Link
                key={s.key}
                to={`/lk/categories?cat=${s.cat}`}
                className={`sit-card bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-3 sm:p-4 text-center hover:border-brand-red group ${s.colSpan ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="text-2xl sm:text-3xl mb-1.5">{s.emoji}</div>
                <div className="font-semibold text-xs sm:text-sm group-hover:text-brand-red transition">{t(s.key)}</div>
                <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">{t(s.subKey)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Law Categories */}
      <section className="py-10 md:py-16 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{t('catTitle')}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-0.5">{t('catSub')}</p>
            </div>
            <Link to="/lk/categories" className="hidden sm:flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-red hover:underline">
              <span>{t('viewAll')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {categories.map(cat => (
              <Link key={cat.key} to="/lk/categories" className="cat-card bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-2xl p-5 hover:border-brand-red group block relative overflow-hidden">
                {cat.badge && (
                  <div className={`absolute top-2.5 right-2.5 ${cat.badgeRed ? 'bg-brand-red text-white' : 'bg-yellow-400 text-yellow-900'} text-[8px] font-bold px-1.5 py-0.5 rounded-full z-10`}>
                    {cat.badge}
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-xl">{cat.icon}</div>
                  <span className="bg-brand-red text-white text-[9px] font-bold px-2 py-0.5 rounded-full">{cat.count} Laws</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-brand-red transition">{t(cat.key)}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-3">{t(cat.descKey)}</p>
                <span className="read-more inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                  {t('readMore')} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center sm:hidden">
            <Link to="/lk/categories" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
              <span>{t('viewAll')}</span><ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* More categories teaser */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {moreCategories.map(mc => (
              <Link key={mc.key} to="/lk/categories" className="text-center py-2.5 px-2 rounded-xl bg-white dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition group text-[10px] sm:text-xs">
                <div className="text-lg sm:text-xl mb-0.5">{mc.icon}</div>
                <div className="font-medium text-neutral-500 group-hover:text-brand-red transition">{t(mc.key)}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/lk/categories" className="text-[11px] text-neutral-400 hover:text-brand-red transition font-medium">{t('moreTeaser')}</Link>
          </div>
        </div>
      </section>

      {/* Trending Laws */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{t('trTitle')}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-0.5">{t('trSub')}</p>
            </div>
            <Link to="/lk/categories" className="hidden sm:flex items-center gap-1 text-xs font-semibold text-brand-red hover:underline">
              <span>{t('viewAll')}</span><ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {trendingLaws.map(tr => (
              <Link key={tr.key} to={tr.link || '/lk/categories'} className="trend-card flex items-start sm:items-center gap-3 sm:gap-4 bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl p-3.5 sm:p-4 group">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-lg shrink-0">{tr.icon}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs sm:text-sm group-hover:text-brand-red transition truncate">{t(tr.key)}</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{t(tr.subKey)}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={`${badgeColors[tr.badgeColor]} text-[9px] font-bold px-1.5 py-0.5 rounded`}>{t(tr.badge)}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-brand-red transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Law of the Week */}
      <section className="py-10 md:py-14 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-brand-red/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-red/5 rounded-full blur-[60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-brand-red/20 text-red-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                <Star className="w-3 h-3" />
                <span>{t('lotwBadge')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2.5">{t('lotwTitle')}</h2>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5">{t('lotwDesc')}</p>
              <Link to="/lk/categories" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition">
                <span>{t('lotwBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="shrink-0 bg-brand-dark-card border border-brand-dark-border rounded-2xl p-5 w-full md:w-64">
              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between"><span className="text-neutral-400 text-xs">{t('lotwSec')}</span><span className="font-bold text-red-400">511</span></div>
                <div className="h-px bg-brand-dark-border"></div>
                <div className="flex justify-between"><span className="text-neutral-400 text-xs">{t('lotwYr')}</span><span className="font-bold">1883</span></div>
                <div className="h-px bg-brand-dark-border"></div>
                <div className="flex justify-between"><span className="text-neutral-400 text-xs">{t('lotwUpd')}</span><span className="font-bold">2024</span></div>
                <div className="h-px bg-brand-dark-border"></div>
                <div className="flex justify-between"><span className="text-neutral-400 text-xs">{t('lotwTime')}</span><span className="font-bold">~8 min</span></div>
              </div>
              <Link to="/lk/categories" className="mt-4 block text-center text-[11px] text-brand-red hover:underline font-medium">{t('lotwLink')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-6">{t('statTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <Link to="/lk/categories" className="text-center p-4 md:p-5 bg-neutral-50 dark:bg-brand-dark-card rounded-2xl border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-red count-anim">200+</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-xs mt-1">{t('statLaws')}</div>
              <div className="text-[10px] text-brand-red mt-1 opacity-0 group-hover:opacity-100 transition">{t('statBrowse')}</div>
            </Link>
            <Link to="/lk/categories" className="text-center p-4 md:p-5 bg-neutral-50 dark:bg-brand-dark-card rounded-2xl border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-red count-anim" style={{ animationDelay: '.1s' }}>52</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-xs mt-1">{t('statCat')}</div>
              <div className="text-[10px] text-brand-red mt-1 opacity-0 group-hover:opacity-100 transition">{t('statBrowse')}</div>
            </Link>
            <Link to="/lk/about" className="text-center p-4 md:p-5 bg-neutral-50 dark:bg-brand-dark-card rounded-2xl border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-red count-anim" style={{ animationDelay: '.2s' }}>2</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-xs mt-1">{t('statLang')}</div>
              <div className="text-[10px] text-brand-red mt-1 opacity-0 group-hover:opacity-100 transition">EN / සිංහල →</div>
            </Link>
            <Link to="/lk/about" className="text-center p-4 md:p-5 bg-neutral-50 dark:bg-brand-dark-card rounded-2xl border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-red count-anim" style={{ animationDelay: '.3s' }}>100%</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-xs mt-1">{t('statFree')}</div>
              <div className="text-[10px] text-brand-red mt-1 opacity-0 group-hover:opacity-100 transition">{t('statLearn')}</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Spotlight */}
      <section className="py-10 md:py-14 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5">{t('spotTitle')}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">{t('spotSub')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {spotlightItems.map(sp => (
              <Link key={sp.key} to="/lk/categories" className="group text-center p-4 bg-white dark:bg-brand-dark-card rounded-2xl border border-neutral-200 dark:border-brand-dark-border hover:border-brand-red transition">
                <div className="text-3xl mb-2">{sp.icon}</div>
                <div className="font-bold text-xs sm:text-sm group-hover:text-brand-red transition">{t(sp.key)}</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">{t(sp.subKey)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Report Cyber Crime */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <div className="text-4xl sm:text-5xl mb-3">🚨</div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{t('rpTitle')}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-6 max-w-md mx-auto">{t('rpDesc')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/lk/contact#report" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-xl text-sm transition w-full sm:w-auto justify-center">
              <Shield className="w-4 h-4" />
              <span>{t('rpCERT')}</span>
            </Link>
            <Link to="/lk/contact#report" className="inline-flex items-center gap-2 bg-neutral-50 dark:bg-brand-dark-card hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-semibold px-6 py-3 rounded-xl border border-neutral-200 dark:border-brand-dark-border transition w-full sm:w-auto justify-center">
              <Phone className="w-4 h-4" />
              <span>{t('rpCID')}</span>
            </Link>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg px-3 py-2 text-[10px] sm:text-xs text-red-600 dark:text-red-400">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>{t('rpWarn')}</span>
          </div>
          <Link to="/lk/contact" className="inline-block mt-3 text-[11px] text-brand-red hover:underline font-medium">{t('rpMore')}</Link>
        </div>
      </section>

      {/* Court Hierarchy */}
      <section className="py-10 md:py-14 bg-neutral-50 dark:bg-brand-dark transition-colors">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{t('courtTitle')}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">{t('courtSub')}</p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-2.5">
            <Link to="/lk/court-system" className="bg-brand-red text-white font-bold px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm w-full max-w-[260px] text-center hover:bg-brand-red-dark transition">Supreme Court</Link>
            <ChevronDown className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
            <Link to="/lk/court-system#appeal" className="bg-neutral-800 dark:bg-neutral-700 text-white font-semibold px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm w-full max-w-[260px] text-center hover:bg-neutral-700 dark:hover:bg-neutral-600 transition">Court of Appeal</Link>
            <ChevronDown className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
            <Link to="/lk/court-system#high" className="bg-neutral-600 text-white font-medium px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm w-full max-w-[260px] text-center hover:bg-neutral-500 transition">High Court</Link>
            <ChevronDown className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
            <Link to="/lk/court-system#district" className="bg-neutral-400 dark:bg-neutral-600 text-neutral-900 dark:text-white font-medium px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm w-full max-w-[260px] text-center hover:bg-neutral-300 dark:hover:bg-neutral-500 transition">District Court</Link>
            <ChevronDown className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
            <Link to="/lk/court-system#magistrate" className="bg-neutral-200 dark:bg-neutral-500 text-neutral-700 dark:text-white font-medium px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm w-full max-w-[260px] text-center hover:bg-neutral-100 dark:hover:bg-neutral-400 transition">Magistrate Court</Link>
          </div>
          <div className="text-center mt-5">
            <Link to="/lk/court-system" className="read-more inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
              {t('courtMore')} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 md:py-14 bg-white dark:bg-brand-dark transition-colors">
        <div className="max-w-md mx-auto px-4 md:px-6 text-center">
          <Mail className="w-8 h-8 text-brand-red mx-auto mb-3" />
          <h2 className="text-base sm:text-lg font-bold mb-1.5">{t('nlTitle')}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-5">{t('nlDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input type="email" placeholder={t('nlPH')} className="flex-1 px-3.5 py-2.5 bg-neutral-50 dark:bg-brand-dark-card border border-neutral-200 dark:border-brand-dark-border rounded-xl text-sm focus:outline-none focus:border-brand-red transition" />
            <button onClick={() => setToast({ visible: true, message: 'Thanks for subscribing! 🎉' })} className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition shrink-0">
              {t('nlBtn')}
            </button>
          </div>
          <p className="text-[10px] text-neutral-400 mt-2.5">{t('nlPriv')}</p>
        </div>
      </section>

      <LKFooter activePage="home" />
      <WhatsAppButton />
      <Toast message={toast.message} visible={toast.visible} onHide={() => setToast({ ...toast, visible: false })} success={true} />
    </div>
  );
};

export default LKHome;
