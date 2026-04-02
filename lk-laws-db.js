/**
 * lk-laws-db.js
 * 
 * Comprehensive Legal Database for GlobalLaw Sri Lanka.
 * Contains detailed objects for Sri Lankan laws with full English (en) and Sinhala (si) translations.
 */

const LAWS_DB = [
  // =============================================================
  // 1. Computer Crime Act No. 24 of 2007
  // =============================================================
  {
    id: 'cca-2007',
    category: {
      en: 'Cyber Laws',
      si: 'සයිබර් නීති'
    },
    title: {
      en: 'Computer Crime Act',
      si: 'පරිගණක අපරාධ පනත'
    },
    actNo: {
      en: 'Computer Crime Act No. 24 of 2007',
      si: 'පරිගණක අපරාධ පනත අංක 24 දරණ 2007'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
      en: 'Defines "Computer", "Data", and "Program" within a legal context. It establishes that unauthorized access to a computer system with intent to commit an offense is a punishable crime.',
      si: 'නීතිමය ප්‍රසන්ධානයක් තුළ "පරිගණකය", "දත්ත" සහ "වැඩසටහන" අර්ථ දක්වයි. අපරාධයක් සිදු කිරීමේ අරමුණින් පරිගණක පද්ධතියකට අවසර නොමැතිව ඇතුළු වීම දඬුවම් ලැබිය හැකි අපරාධයක් බව මෙයින් ස්ථාපිත කරයි.'
    },
    tldr: {
      en: 'The primary law in Sri Lanka against hacking, illegal data interception, and damaging computer systems.',
      si: 'ශ්‍රී ලංකාවේ හැකිං, නීති විරෝධී දත්ත අතුරුදහන් කිරීම සහ පරිගණක පද්ධති විනාශ කිරීමට එරෙහිව පවතින ප්‍රධාන නීතිය.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">The <strong>Computer Crime Act No. 24 of 2007</strong> was enacted to provide a legal framework to address offenses arising from the use of information and communication technology.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Key Offenses</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Unauthorized Access (Section 3):</strong> Accessing a computer system without permission.</li>
            <li><strong>Illegal Interception (Section 5):</strong> Listening to or recording data transmissions.</li>
            <li><strong>Data Interference (Section 6):</strong> Damaging, deleting, or altering data.</li>
            <li><strong>System Interference (Section 7):</strong> Hindering or disrupting the operation of a computer system.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">Why it matters</h3>
          <p>It empowers the CID to investigate digital crimes and provides a mechanism for victims to seek legal recourse against digital theft and vandalism.</p>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4"><strong>පරිගණක අපරාධ පනත අංක 24 දරණ 2007</strong> තොරතුරු සහ සන්නිවේදන තාක්ෂණයේ භාවිතයෙන් ඇතිවන වරදවල් සඳහා නීතිමය රාමුවක් සැපයීම සඳහා සම්මත කරන ලදී.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ප්‍රධාන වරදවල්</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>අවසර නොමැති ප්‍රවේශය (3 වගන්තිය):</strong> අවසරයකින් තොරව පරිගණක පද්ධතියකට ප්‍රවේශ වීම.</li>
            <li><strong>නීති විරෝධී අතුරුදහන් කිරීම (5 වගන්තිය):</strong> දත්ත සම්ප්‍රේෂණයන් ඇසීම හෝ පටිගත කිරීම.</li>
            <li><strong>දත්ත මැදිහත් වීම (6 වගන්තිය):</strong> දත්ත හානි කිරීම, මකා දැමීම හෝ වෙනස් කිරීම.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">මෙය වැදගත් වන්නේ ඇයි?</h3>
          <p>මෙය CID ආයතනයට ඩිජිටල් අපරාධ විමර්ශනය කිරීමට බලය ලබා දෙන අතර ඩිජිටල් සොරාගැනීම් සහ වන්දි ගෙවීම්වලට එරෙහිව වින්දිතයින්ට නීතිමය සහන ලබා ගැනීමට පහසුකම් සපයයි.</p>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 3 years (Section 3) or 5 years (Section 5) imprisonment.',
        si: 'වසර 3 දක්වා (3 වගන්තිය) හෝ වසර 5 දක්වා (5 වගන්තිය) සිර දඬුවම.'
      },
      fine: {
        en: 'Fine up to LKR 300,000 or both fine and imprisonment.',
        si: 'රු. 300,000 දක්වා දඩ මුදලක් හෝ දඩ සහ සිර දඬුවම දෙවනුවත්.'
      },
      compensation: {
        en: 'Courts may order compensation to victims for data loss or system repair costs.',
        si: 'අධිකරණයට දත්ත අහිමි වීම හෝ පද්ධති අලුත්වැඩියා වියදම් සඳහා වන්දි නියම කළ හැක.'
      },
      courtType: {
        en: 'Magistrate Court (Non-summary) or High Court.',
        si: 'මහේස්ත්‍රාත් අධිකරණය (රහස් නොවන) හෝ මහාධිකරණය.'
      },
      duration: {
        en: '1 to 3 years (Delays due to technical evidence analysis).',
        si: 'වසර 1 සිට 3 දක්වා (තාක්ෂණික සාක්ෂි විශ්ලේෂණය නිසා ප්‍රමාද සිදු වේ).'
      }
    },
    process: {
      step1: {
        en: 'Immediately disconnect the system from the internet. Do not shut down the computer if possible to preserve RAM evidence.',
        si: 'පද්ධතිය වහාම අන්තර්ජාලයෙන් විනිවිද ගන්න. RAM සාක්ෂි සුරක්ෂිත කිරීම සඳහා හැකි නම් පරිගණකය වසා දමන්න එපා.'
      },
      whoToMeet: {
        en: 'Report to the CID Computer Crimes Division or Sri Lanka CERT (CC).',
        si: 'CID පරිගණක අපරාධ කොට්ඨාශය හෝ ශ්‍රී ලංකා සර්ට් (CC) වෙත වාර්තා කරන්න.'
      },
      docs: [
        { en: 'National Identity Card (NIC).', si: 'ජාතික හැඳුනුම්පත (NIC).' },
        { en: 'IP Logs, Screenshots, or Email Headers.', si: 'IP ලොග, තිර රූප හෝ විද්‍යුත් තැපැල් ශීර්ෂ.' },
        { en: 'List of financial losses or data damage.', si: 'මූල්‍ය පාඩු හෝ දත්ත හානි ලැයිස්තුව.' }
      ],
      contact: [
        { org: 'CID', number: '011-2422176' },
        { org: 'SLCERT', number: '011-2691222' },
        { org: 'Police', number: '119' }
      ]
    },
    incidents: [
      {
        date: '2023-11-20',
        desc: {
          en: 'Former employee accessed a private bank\'s server using stolen credentials and leaked customer data.',
          si: 'සොරාගත් ප්‍රවේශ අවසර භාවිතා කරමින් හිටපු සේවකයෙකු පෞද්ගලික බැංකුවක සේවාදායකයට ප්‍රවේශ වී පාරිභෝගික දත්ත ලික්කරණය කළේය.'
        },
        outcome: {
          en: 'Suspect arrested under Section 3. System logs were used as primary evidence.',
          si: 'සැකකරු 3 වගන්තිය යටතේ අත්අඩංගුවට ගැනීම. පද්ධති ලොග ප්‍රාථමික සාක්ෂි ලෙස භාවිතා කරන ලදී.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Ravin Perera', si: 'රවින් පෙරේරා' },
        role: { en: 'Senior Cyber Law Consultant', si: 'විධායක සයිබර් නීති විශේෂඥ' },
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
        desc: {
          en: 'Expert in digital forensics and data privacy litigation.',
          si: 'ඩිජිටල් විද්‍යාත්මක නඩු විභාගය සහ දත්ත පෞද්ගලිකත්වය පිළිබඳ විශේෂඥ.'
        },
        wa_number: '94771234567'
      }
    ]
  },

  // =============================================================
  // 2. Online Safety Act No. 1 of 2024
  // =============================================================
  {
    id: 'osa-2024',
    category: {
      en: 'Cyber Laws',
      si: 'සයිබර් නීති'
    },
    title: {
      en: 'Online Safety Act',
      si: 'අන්තර්ජාල ආරක්ෂිත භාවය පනත'
    },
    actNo: {
      en: 'Online Safety Act No. 1 of 2024',
      si: 'අන්තර්ජාල ආරක්ෂිත භාවය පනත අංක 1 දරණ 2024'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
            en: 'A powerful law designed to regulate online content, curb fake news, and prevent cyber-harassment. It establishes the Online Safety Commission.',
      si: 'අන්තර්ජාල අන්තර්ගතයන් නියාමනය කිරීම, බොරු ආරංචි සහ සයිබර් ප්‍රහාර වැළැක්වීම සඳහා නිර්මාණය කරන ලද බලගතු නීතියකි. මෙය අන්තර්ජාල ආරක්ෂණ කොමිසම ස්ථාපිත කරයි.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">The <strong>Online Safety Act No. 1 of 2024</strong> was enacted to combat the spread of false statements and online harassment. It established a 5-member commission appointed by the President.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Prohibited Content</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>False Statements:</strong> Against the President, Judiciary, or Public Service.</li>
            <li><strong>Cyber Harassment:</strong> Stalking, bullying, or humiliating individuals online.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">Powers of the Commission</h3>
          <p>The Commission can order the removal of prohibited content from social media platforms.</p>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4"><strong>අන්තර්ජාල ආරක්ෂිත භාවය පනත අංක 1 දරණ 2024</strong> අසත්‍ය ප්‍රකාශ සහ අන්තර්ජාලය හරහා හිරිහැර කිරීම වැළැක්වීම සඳහා සම්මත කරන ලදී. ජනාධිපතිවරයා විසින් පත් කරන ලද සාමාජිකයින් 5 දෙනෙකුගෙන් සමන්විත කොමිසමක් මෙමඟින් ස්ථාපිත කරන ලදී.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">තහනම් කළ අන්තර්ගතයන්</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>අසත්‍ය ප්‍රකාශ:</strong> ජනාධිපතිවරයා, අධිකරණය හෝ මහජන සේවයට එරෙහිව.</li>
            <li><strong>සයිබර් හිරිහැර:</strong> පසුපස ගැටීම, ප්‍රහාර එල්ල කිරීම හෝ පුද්ගලයින් අපහාස කිරීම.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">කොමිසමේ බලතල</h3>
          <p>කොමිසමට සමාජ මාධ්‍ය වේදිකාවලින් තහනම් කළ අන්තර්ගතයන් ඉවත් කිරීමට නියෝග කළ හැක.</p>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 5 years of rigorous imprisonment for publishing prohibited statements.',
        si: 'තහනම් කළ ප්‍රකාශ ප්‍රකාශයට පත් කිරීම සඳහා වසර 5 දක්වා දැඩි සිර දඬුවම.'
      },
      fine: {
        en: 'Fines ranging from LKR 500,000 to LKR 5,000,000.',
        si: 'රු. 500,000 සිට රු. 5,000,000 දක්වා වූ දඩ මුදල්.'
      },
      compensation: {
        en: 'Compensation may be awarded to victims of cyber harassment.',
        si: 'සයිබර් ප්‍රහාරවලට ගොදුරු වූවන්ට වන්දි ගෙවිය හැක.'
      },
      courtType: {
        en: 'Magistrate Court (Summary Trial) or High Court.',
        si: 'මහේස්ත්‍රාත් අධිකරණය (සාරාංශ විභාග) හෝ මහාධිකරණය.'
      },
      duration: {
        en: '6 months to 1.5 years (New law, backlog is currently low).',
        si: 'මාස 6 සිට 1.5 වසර දක්වා (අලුත් නීතියකි, මේ වන විට පසුගිය නඩු අඩුය).'
      }
    },
    process: {
      step1: {
        en: 'Take screenshots of the offending post immediately. Report the content to the social media platform (Facebook, X, etc.).',
        si: 'වහාම අපහාසාත්මක පළ කිරීමේ තිර රූප ගන්න. සමාජ මාධ්‍ය වේදිකාව (Facebook, X, ආදිය) හරහා අන්තර්ගතය වාර්තා කරන්න.'
      },
      whoToMeet: {
        en: 'File a complaint with the Online Safety Commission (OSC) or the nearest Police Station.',
        si: 'අන්තර්ජාල ආරක්ෂණ කොමිසම (OSC) හෝ ළඟම ඇති පොලිස් ස්ථානය වෙත පැමිණිල්ලක් ඉදිරිපත් කරන්න.'
      },
      docs: [
        { en: 'NIC of the complainant.', si: 'පැමිණිලිකරුගේ NIC.' },
        { en: 'URL of the specific post/account.', si: 'විශේෂිත පළ කිරීම/ගිණුමේ URL.' },
        { en: 'Screenshot evidence with timestamps.', si: 'වේලා මුද්‍රා සහිත තිර රූප සාක්ෂි.' }
      ],
      contact: [
        { org: 'Online Safety Commission', number: '011-XXXXXXX' },
        { org: 'Police', number: '119' }
      ]
    },
    incidents: [
      {
        date: '2024-02-10',
        desc: {
          en: 'A social media influencer posted a fake news article claiming a new tax on daily wages, causing public unrest.',
          si: 'සමාජ මාධ්‍ය බලධාරියෙකු දෛනික වැටුප් සඳහා නව බද්දක් ඇති බවට බොරු පුවත් පත්‍ර ලිපියක් පළ කළ අතර එය පොදු අසහනයක් ඇති කළේය.'
        },
        outcome: {
          en: 'OSC ordered the takedown. The influencer was fined and issued a warning.',
          si: 'OSC විසින් ඉවත් කිරීමට නියෝග කළේය. බලධාරියාට දඩ නියම වූ අතර අවවාදයක් ලැබුණි.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Kasun Silva', si: 'කසුන් සිල්වා' },
        role: { en: 'Human Rights Lawyer', si: 'මානව හිමිකම් නීතීඥ' },
        photo: 'https://randomuser.me/api/portraits/men/85.jpg',
        desc: {
          en: 'Specializes in constitutional law and defending freedom of expression cases.',
          si: 'ආණ්ඩුක්‍රම ව්‍යවස්ථා නීතිය සහ ප්‍රකාශන නිදහස් නඩු විභාගයන්ට විශේෂඥ.'
        },
        wa_number: '94777654321'
      }
    ]
  }
];
