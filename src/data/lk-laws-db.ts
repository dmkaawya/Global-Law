/**
 * lk-laws-db.js
 * 
 * Comprehensive Legal Database for GlobalLaw Sri Lanka.
 * Contains detailed objects for Sri Lankan laws with full English (en) and Sinhala (si) translations.
 */

export const LAWS_DB = [
  // =============================================================
  // 1. Computer Crime Act No. 24 of 2007
  // =============================================================
  {
    id: 'cca-2007',
    category: {
      en: 'Procedural Law',
      si: 'පියවර ගැනීමේ නීති'
    },
    title: {
      en: 'Evidence (Special Provisions) Act',
      si: 'සාක්ෂි (විශේෂ ප්‍රතිපාදන) පනත'
    },
    actNo: {
      en: 'Evidence (Special Provisions) Act No. 14 of 1995',
      si: 'සාක්ෂි (විශේෂ ප්‍රතිපාදන) පනත අංක 14 දරණ 1995'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
      en: 'Modernizes the law of evidence to admit electronic documents and computer output as valid evidence in court.',
      si: 'ඉලෙක්ට්‍රොනික ලේඛන සහ පරිගණක ප්‍රතිදානයන් අධිකරණයේදී වලංගු සාක්ෂි ලෙස භාවිතා කිරීම සඳහා සාක්ෂි නීතිය නවීකරණය කරයි.'
    },
    tldr: {
      en: 'Makes digital documents, emails, and server logs admissible in Sri Lankan courts.',
      si: 'ශ්‍රී ලංකා අධිකරණවලට ඩිජිටල් ලේඛන, විද්‍යුත් තැපැල් සහ සර්වර් ලොග ඉදිරිපත් කිරීමට අවසර දෙයි.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">Before this Act, Sri Lankan courts relied heavily on the Evidence Ordinance of 1895, which did not account for digital technology. This Act was a landmark update.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Key Provisions</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Section 5:</strong> Admissibility of computer-generated documents (e.g., bank statements, chat logs).</li>
            <li><strong>Section 6:</strong> Presumptions regarding electronic signatures and secure electronic signatures.</li>
            <li><strong>Authentication:</strong> Certificates issued by the Controller of Certifying Authorities are considered valid proof.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">Impact</h3>
          <p>This is the foundational law that allows the Computer Crime Act to be effectively prosecuted, as without it, digital evidence could be rejected in court.</p>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4">මෙම පනත සම්මත වීමට පෙර, ශ්‍රී ලංකා අධිකරණ 1895 සාක්ෂි ආඥාපනතට විශාල ලෙස රඳා පැවතුණි, එය ඩිජිටල් තාක්ෂණය සඳහා සැලකිලිමත් නොවීය. මෙම පනත විශාල වෙනසක් විය.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ප්‍රධාන විධිවිධාන</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>5 වගන්තිය:</strong> පරිගණකයෙන් ජනනය කරන ලද ලේඛන (උදාහරණයක් ලෙස, බැංකු ගිණුම් ප්‍රකාශ, කතා ලොග) පිළිගැනීම.</li>
            <li><strong>6 වගන්තිය:</strong> ඉලෙක්ට්‍රොනික අත්සන් සහ ආරක්ෂිත ඉලෙක්ට්‍රොනික අත්සන් පිළිබඳ උපකල්පනයන්.</li>
            <li><strong>සත්‍යාපනය:</strong> සහතිකකරුවන්ගේ පාලකයා විසින් නිකුත් කරන ලද සහතික වලංගු සාක්ෂි ලෙස සැලකේ.</li>
          </ul>
          <h3 class="text-xl font-bold mb-2">බලපෑම</h3>
          <p>මෙය පරිගණක අපරාධ පනත සාර්ථකව ක්‍රියාත්මක කිරීමට ඉඩ සලසන මූලික නීතියයි. මෙය නොමැති නම්, ඩිජිටල් සාක්ෂි අධිකරණයේදී ප්‍රතික්ෂේප විය හැක.</p>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'N/A (Procedural Law).',
        si: 'නොමැත (පියවර ගැනීමේ නීතියකි).'
      },
      fine: {
        en: 'N/A.',
        si: 'නොමැත.'
      },
      compensation: {
        en: 'Facilitates the claiming of compensation by validating evidence.',
        si: 'සාක්ෂි වලංගු කිරීමෙන් වන්දි ලබා ගැනීමට පහසුකම් සපයයි.'
      },
      courtType: {
        en: 'All Courts.',
        si: 'සියලුම අධිකරණ.'
      },
      duration: {
        en: 'N/A.',
        si: 'නොමැත.'
      }
    },
    process: {
      step1: {
        en: 'Ensure digital evidence is preserved in a read-only format and hashed (to prove it hasn\'t been altered).',
        si: 'ඩිජිටල් සාක්ෂි කියවීමට පමණක් හැකි ආකෘතියකින් සහ හෑෂ් (hash) කිරීමෙන් ආරක්ෂා කරන්න (වෙනස් කර නොමැති බව ඔප්පු කිරීමට).'
      },
      whoToMeet: {
        en: 'A lawyer specializing in digital evidence to certify the documents under Section 5.',
        si: '5 වගන්තිය යටතේ ලේඛන සහතික කිරීම සඳහා ඩිජිටල් සාක්ෂි පිළිබඳ විශේෂඥ නීතීඥවරයෙකු.'
      },
      docs: [
        { en: 'Original digital files and hash values.', si: 'මුල් ඩිජිටල් ගොනු සහ හෑෂ් අගයන්.' },
        { en: 'Affidavit from the person who recovered the data.', si: 'දත්ත සොයාගත් පුද්ගලයාගේ ප්‍රකාශ පත්‍රය.' }
      ],
      contact: [
        { org: 'Bar Association of Sri Lanka', number: '011-2382708' }
      ]
    },
    incidents: [
      {
        date: '2018-06-15',
        desc: {
          en: 'In a major fraud case, the defense argued that bank emails were forged. The prosecution used this Act to authenticate the server logs.',
          si: 'විශාල වංචා නඩුවකදී, බැංකු විද්‍යුත් තැපැල් ප්‍රකාශ බවට චෝදනා කළේය. පැමිණිල්ලෝ සර්වර් ලොග සත්‍යාපනය කිරීමට මෙම පනත භාවිතා කළහ.'
        },
        outcome: {
          en: 'Evidence admitted, leading to a conviction.',
          si: 'සාක්ෂි පිළිගැනීම හේතුවෙන් වැරදිකරු විය.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Nimali De Silva', si: 'නිමාලි ද සිල්වා' },
        role: { en: 'IT Forensic Expert', si: 'IT විද්‍යාත්මක විශේෂඥ' },
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        desc: {
          en: 'Certified trainer on digital evidence handling in Sri Lanka.',
          si: 'ශ්‍රී ලංකාවේ ඩිජිටල් සාක්ෂි හැසිරවීම පිළිබඳ සහතික කළ පුහුණුකරු.'
        },
        wa_number: '94712345678'
      }
    ]
  },

  // =============================================================
  // 4. Payment Devices and Services Act No. 28 of 2006
  // =============================================================
  {
    id: 'pdsa-2006',
    category: {
      en: 'Fintech & Banking',
      si: 'ෆින්ටෙක් සහ බැංකු'
    },
    title: {
      en: 'Payment Devices and Services Act',
      si: 'ගෙවීම් උපකරණ සහ සේවා පනත'
    },
    actNo: {
      en: 'Payment Devices and Services Act No. 28 of 2006',
      si: 'ගෙවීම් උපකරණ සහ සේවා පනත අංක 28 දරණ 2006'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
      en: 'Regulates the issuance and use of payment cards (credit/debit) and electronic payment systems to ensure security and stability.',
      si: 'ආරක්ෂාව සහ ස්ථායිතාවය සහතික කිරීම සඳහා ගෙවීම් කාඩ්පත් (ණය/ගෙවීම්) සහ ඉලෙක්ට්‍රොනික ගෙවීම් පද්ධති නිකුත් කිරීම සහ භාවිතය නියාමනය කරයි.'
    },
    tldr: {
      en: 'The law governing credit cards, ATMs, and mobile money transfers in Sri Lanka.',
      si: 'ශ්‍රී ලංකාවේ ණය කාඩ්පත්, ATM සහ ජංගම මුදල් හුවමාරු පාලනය කරන නීතිය.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">This Act empowers the Central Bank of Sri Lanka to regulate entities that issue payment instruments. It is crucial for preventing electronic fraud.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Key Regulations</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Licensing:</strong> No one can operate a payment scheme without Central Bank approval.</li>
            <li><strong>Security Standards:</strong> Mandates encryption and secure data storage for card details.</li>
            <li><strong>Dispute Resolution:</strong> Sets out how customers can claim refunds for unauthorized transactions.</li>
          </ul>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4">මෙම පනත ගෙවීම් උපකරණ නිකුත් කරන ආයතන නියාමනය කිරීමට ශ්‍රී ලංකා මහ බැංකුවට බලය ලබා දෙයි. ඉලෙක්ට්‍රොනික වංචා වැළැක්වීම සඳහා මෙය අත්‍යවශ්‍ය වේ.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ප්‍රධාන රෙගුලාසි</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>බලපත්‍රකරණය:</strong> මහ බැංකුවේ අනුමැතියකින් තොරව කිසිවෙකුට ගෙවීම් ක්‍රමවේදයක් මෙහෙයවිය නොහැක.</li>
            <li><strong>ආරක්ෂක සම්මත:</strong> කාඩ්පත් විස්තර සඳහා සංකේතනය (encryption) සහ ආරක්ෂිත දත්ත ගබඩා කිරීම අනිවාර්ය කරයි.</li>
            <li><strong>ආරවුල් විසඳීම:</strong> පාරිභෝගිකයින්ට අවසර නොමැති ගනුදෙනු සඳහා මුදල් ආපසු ලබා ගැනීමේ ක්‍රම සකස් කර ඇත.</li>
          </ul>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 2 years imprisonment for operating without a license.',
        si: 'බලපත්‍රයකින් තොරව කටයුතු කිරීම සඳහා වසර 2 දක්වා සිර දඬුවම.'
      },
      fine: {
        en: 'Fines up to LKR 1,000,000 or twice the amount involved in the transaction.',
        si: 'රු. 1,000,000 දක්වා දඩ මුදලක් හෝ ගනුදෙනුවේ වටිනාකම මෙන් දෙගුණයක්.'
      },
      compensation: {
        en: 'Banks are required to refund unauthorized transactions if reported within a specific timeframe.',
        si: 'නිශ්චිත කාලයක් තුළ වාර්තා කරන්නේ නම්, බැංකු විසින් අවසර නොමැති ගනුදෙනු ආපසු ගෙවිය යුතුය.'
      },
      courtType: {
        en: 'Commercial High Court or Magistrate Court.',
        si: 'වාණිජ මහාධිකරණය හෝ මහේස්ත්‍රාත් අධිකරණය.'
      },
      duration: {
        en: '6 months to 2 years.',
        si: 'මාස 6 සිට 2 වසර දක්වා.'
      }
    },
    process: {
      step1: {
        en: 'Immediately call the bank hotline to block the card. Check transaction history.',
        si: 'වහාම බැංකු හොට්ලයිනයට කතා කර කාඩ්පත අවහිර කරන්න. ගනුදෙනු ඉතිහාසය පරීක්ෂා කරන්න.'
      },
      whoToMeet: {
        en: 'Bank Fraud Investigation Unit or the Central Bank of Sri Lanka (Department of Supervision of Non-Bank Financial Institutions).',
        si: 'බැංකු වංචා විමර්ශන ඒකකය හෝ ශ්‍රී ලංකා මහ බැංකුව (බැංකු නොවන මූල්‍ය ආයතන අධීක්ෂණ දෙපාර්තමේන්තුව).'
      },
      docs: [
        { en: 'Bank Statement showing the fraud.', si: 'වංචාව පෙන්නන බැංකු ගිණුම් ප්‍රකාශය.' },
        { en: 'Police Entry regarding the complaint.', si: 'පැමිණිල්ල පිළිබඳ පොලිස් ප්‍රවේශය.' },
        { en: 'NIC of the account holder.', si: 'ගිණුම් හිමිකරුගේ NIC.' }
      ],
      contact: [
        { org: 'CBSL Fraud Hotline', number: '011-2477477' },
        { org: 'Police CID', number: '011-2422176' }
      ]
    },
    incidents: [
      {
        date: '2022-08-05',
        desc: {
          en: 'A skimming device was found at a prominent ATM in Colombo, cloning over 50 cards.',
          si: 'කොළඹ ප්‍රධාන ATM එකක ස්කිමිං උපාංගයක් සොයාගෙන ඇති අතර කාඩ්පත් 50ක් පමණ ක්ලෝනිකරණය කර ඇත.'
        },
        outcome: {
          en: 'Bank refunded victims. CCTV footage led to an arrest under this Act.',
          si: 'බැංකුව වින්දිතයින්ට මුදල් ආපසු ගෙවීය. CCTV දර්ශන මගින් මෙම පනත යටතේ අත්අඩංගුවට ගැනීමක් සිදු විය.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Tharaka Rajapaksa', si: 'තාරක රාජපක්ෂ' },
        role: { en: 'Banking & Finance Lawyer', si: 'බැංකු සහ මූල්‍ය නීතීඥ' },
        photo: 'https://randomuser.me/api/portraits/men/22.jpg',
        desc: {
          en: 'Advises major banks on regulatory compliance and electronic fraud.',
          si: 'ප්‍රධාන බැංකු සඳහා රෙගුලාසි අනුකූලතාව සහ ඉලෙක්ට්‍රොනික වංචා පිළිබඳ උපදෙස් දෙයි.'
        },
        wa_number: '94770000000'
      }
    ]
  },

  // =============================================================
  // 5. Intellectual Property Act No. 36 of 2003
  // =============================================================
  {
    id: 'ipa-2003',
    category: {
      en: 'Intellectual Property',
      si: 'බුද්ධිමය දේපළ'
    },
    title: {
      en: 'Intellectual Property Act',
      si: 'බුද්ධිමය දේපළ පනත'
    },
    actNo: {
      en: 'Intellectual Property Act No. 36 of 2003',
      si: 'බුද්ධිමය දේපළ පනත අංක 36 දරණ 2003'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
      en: 'Provides legal protection for copyrights, trademarks, and industrial designs. It criminalizes software piracy and unauthorized distribution of digital content.',
      si: 'කතෘ අයිතිය, වෙළඳ ලකුණු සහ කාර්මික සැලසුම් සඳහා නීතිමය ආරක්ෂාව සපයයි. මෘදුකාංග පිටපත් කිරීම සහ ඩිජිටල් අන්තර්ගතයන් අනවසරයෙන් බෙදා හැරීම අපරාධ ලෙස සැලකේ.'
    },
    tldr: {
      en: 'Protects creative work online, including software, music, and videos, from piracy.',
      si: 'මෘදුකාංග, සංගීත සහ වීඩියෝ ඇතුළු මාර්ගගත නිර්මාණ පිටපත් කිරීමෙන් ආරක්ෂා කරයි.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">The <strong>Intellectual Property Act</strong> aligns Sri Lankan law with international standards (WIPO/TRIPS). It is vital for the digital economy.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Digital Relevance</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Copyright Infringement:</strong> Downloading or sharing paid software/movies without a license.</li>
            <li><strong>Circumvention:</strong> Breaking DRM (Digital Rights Management) locks is prohibited.</li>
            <li><strong>Online Piracy:</strong> Operating websites that stream copyrighted content illegally.</li>
          </ul>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4"><strong>බුද්ධිමය දේපළ පනත</strong> ශ්‍රී ලංකා නීතිය ජාත්‍යන්තර ප්‍රමිතීන්ට (WIPO/TRIPS) ගැලපෙන පරිදි සකස් කර ඇත. ඩිජිටල් ආර්ථිකය සඳහා මෙය අත්‍යවශ්‍ය වේ.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ඩිජිටල් ඵලදායීතාව</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>කතෘ අයිතිය උල්ලංඝනය කිරීම:</strong> බලපත්‍රයකින් තොරව ගෙවීම් සහිත මෘදුකාංග/චිත්‍රපට බාගත කිරීම හෝ බෙදා හැරීම.</li>
            <li><strong>වළකලා ගැනීම:</strong> DRM (ඩිජිටල් අයිතිය කළමනාකරණය) අගුලු බිඳ දැමීම තහනම්.</li>
            <li><strong>මාර්ගගත පිටපත් කිරීම:</strong> කතෘ අයිතිය ඇති අන්තර්ගතයන් නීති විරෝධී ලෙස විකාශනය කරන වෙබ් අඩවි පවත්වාගෙන යාම.</li>
          </ul>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 6 months imprisonment for first offense; up to 3 years for subsequent offenses.',
        si: 'මුල් වරට වරද කළහොත් මාස 6 දක්වා සිර දඬුවම; පසුව වරද කළහොත් වසර 3 දක්වා.'
      },
      fine: {
        en: 'Fine up to LKR 500,000.',
        si: 'රු. 500,000 දක්වා දඩ මුදලක්.'
      },
      compensation: {
        en: 'Court can order the infringer to pay damages to the copyright owner based on lost profits.',
        si: 'අධිකරණයට උල්ලංඝනකරුගෙන් නැතිවූ ලාභ මත පදනම්ව කතෘ අයිතිකරුට වන්දි ගෙවන ලෙස නියෝග කළ හැක.'
      },
      courtType: {
        en: 'Magistrate Court (IP Division) or High Court.',
        si: 'මහේස්ත්‍රාත් අධිකරණය (IP කොට්ඨාශය) හෝ මහාධිකරණය.'
      },
      duration: {
        en: '1 to 2 years.',
        si: 'වසර 1 සිට 2 දක්වා.'
      }
    },
    process: {
      step1: {
        en: 'Document the infringement (URLs, screenshots). Do not engage with the infringer directly.',
        si: 'උල්ලංඝනය (URLs, තිර රූප) ලේඛනගත කරන්න. උල්ලංඝනකරු සමඟ කටයුතු කරන්න එපා.'
      },
      whoToMeet: {
        en: 'National Intellectual Property Office (NIPO) or a specialized IP lawyer.',
        si: 'ජාතික බුද්ධිමය දේපළ කාර්යාංශය (NIPO) හෝ විශේෂඥ IP නීතීඥවරයෙකු.'
      },
      docs: [
        { en: 'Certificate of Registration (if applicable).', si: 'ලියාපදිංචි සහතිකය (අදාළ නම්).' },
        { en: 'Proof of ownership (source code, original files).', si: 'අයිතිය ඔප්පු කිරීම (මූල කේතය, මුල් ගොනු).' }
      ],
      contact: [
        { org: 'NIPO', number: '011-2393933' },
        { org: 'CID', number: '011-2422176' }
      ]
    },
    incidents: [
      {
        date: '2021-03-10',
        desc: {
          en: 'A local software company sued a competitor for copying their source code into a new product.',
          si: 'ප්‍රාදේශීය මෘදුකාංග සමාගමක් තම මූල කේතය අලුත් නිෂ්පාදනයකට පිටපත් කළ තරඟකරුවෙකුට එරෙහිව නඩු පවරා ඇත.'
        },
        outcome: {
          en: 'Settlement reached out of court with a substantial licensing fee.',
          si: 'අධිකරණයෙන් පිටත විශාල බලපත්‍ර ගාස්තුවක් යටතේ විසඳුමක් ලබා ගන්නා ලදී.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Ayesha Gunawardena', si: 'ආයේෂා ගුණවර්ධන' },
        role: { en: 'IP Rights Specialist', si: 'IP අයිතිය විශේෂඥ' },
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        desc: {
          en: 'Expert in software patents and copyright enforcement.',
          si: 'මෘදුකාංග පේටන්ට් සහ කතෘ අයිතිය බලාත්මක කිරීම පිළිබඳ විශේෂඥ.'
        },
        wa_number: '94771112233'
      }
    ]
  },

  // =============================================================
  // 6. Official Secrets Act No. 32 of 1982
  // =============================================================
  {
    id: 'osa-1982',
    category: {
      en: 'National Security',
      si: 'ජාතික ආරක්ෂක'
    },
    title: {
      en: 'Official Secrets Act',
      si: 'රාජ්‍ය රහස් පනත'
    },
    actNo: {
      en: 'Official Secrets Act No. 32 of 1982',
      si: 'රාජ්‍ය රහස් පනත අංක 32 දරණ 1982'
    },
    type: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaning: {
      en: 'Prevents the disclosure of information that could affect national security, defense, or international relations. Highly relevant to whistleblowing and state data leaks.',
      si: 'ජාතික ආරක්ෂය, ආරක්ෂක හෝ ජාත්‍යන්තර සබඳතාවලට බලපෑ හැකි තොරතුරු හෙළි කිරීම වැළැක්වීම. හොරි නිවේදන සහ රාජ්‍ය දත්ත මුදා හැරීම් සම්බන්ධයෙන් ඉතා වැදගත් වේ.'
    },
    tldr: {
      en: 'A strict law against leaking government documents, memos, or classified digital data.',
      si: 'රජයේ ලේඛන, ගැටලු සටහන් හෝ වර්ගීකරණය කරන ලද ඩිජිටල් දත්ත මුදා හැරීමට එරෙහිව දැඩි නීතියකි.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">The <strong>Official Secrets Act</strong> is one of the oldest strict laws in Sri Lanka regarding information handling. In the digital age, it applies to leaks of classified emails or hacked government databases.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Key Offenses</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Spying:</strong> Obtaining official documents for the enemy.</li>
            <li><strong>Unauthorized Disclosure:</strong> Sharing state secrets with the public or media.</li>
            <li><strong>Interception:</strong> Hacking into government communication systems.</li>
          </ul>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4"><strong>රාජ්‍ය රහස් පනත</strong> තොරතුරු හැසිරවීම පිළිබඳ ශ්‍රී ලංකාවේ ඇති පැරණිතම දැඩි නීතිවලින් එකකි. ඩිජිටල් යුගයේ දී, මෙය වර්ගීකරණය කරන ලද විද්‍යුත් තැපැල් හෝ හැක් කළ රජයේ දත්ත ගබඩා මුදා හැරීමට ද වළක්වයි.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ප්‍රධාන වරදවල්</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>ඔත්තු බැලීම:</strong> ප්‍රතිවාදියා වෙනුවෙන් නිල ලේඛන ලබා ගැනීම.</li>
            <li><strong>අනවසර හෙළිදරව් කිරීම:</strong> රාජ්‍ය රහස් ප්‍රසිද්ධියට හෝ මාධ්‍යට බෙදා හැරීම.</li>
          </ul>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 14 years of rigorous imprisonment for spying.',
        si: 'ඔත්තු බැලීම සඳහා වසර 14 දක්වා දැඩි සිර දඬුවම.'
      },
      fine: {
        en: 'Substantial fines at the discretion of the court.',
        si: 'අධිකරණයේ අභිමතය පරිදි සැලකිය යුතු දඩ මුදල්.'
      },
      compensation: {
        en: 'N/A (State crime).',
        si: 'නොමැත (රාජ්‍ය අපරාධයකි).'
      },
      courtType: {
        en: 'High Court.',
        si: 'මහාධිකරණය.'
      },
      duration: {
        en: '2 to 5 years.',
        si: 'වසර 2 සිට 5 දක්වා.'
      }
    },
    process: {
      step1: {
        en: 'If you possess leaked state data, do not publish it. Report immediately to relevant authorities.',
        si: 'ඔබ සතුව රාජ්‍ය දත්ත ඇත්නම්, ඒවා ප්‍රකාශයට පත් නොකරන්න. වහාම අදාළ බලධාරීන්ට වාර්තා කරන්න.'
      },
      whoToMeet: {
        en: 'State Intelligence Service (SIS) or CID Terrorism Investigation Division.',
        si: 'රාජ්‍ය බුද්ධි සේවය (SIS) හෝ CID ත්‍රස්තවාදී විමර්ශන කොට්ඨාශය.'
      },
      docs: [
        { en: 'Classification of the document (if known).', si: 'ලේඛනයේ වර්ගීකරණය (දන්නේ නම්).' },
        { en: 'Source of the leak.', si: 'දත්ත මුදා හැරීමේ මූලාශ්‍රය.' }
      ],
      contact: [
        { org: 'SIS', number: '011-2354354' },
        { org: 'Police Emergency', number: '119' }
      ]
    },
    incidents: [
      {
        date: '2023-01-15',
        desc: {
          en: 'An individual attempted to sell classified Ministry of Defense plans on the dark web.',
          si: 'පුද්ගලයෙකු ආරක්ෂක අමාත්‍යාංශයේ රහස්‍ය සැලසුම් ඩාර්ක් වෙබ් අඩවියක විකිණීමට උත්සාහ කළේය.'
        },
        outcome: {
          en: 'Arrested by SIS in a sting operation.',
          si: 'SIS ආයතනය විසින් විශේෂ මෙහෙයුමකදී අත්අඩංගුවට ගැනීම.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Jayantha Wijesinghe', si: 'ජයන්ත විජේසිංහ' },
        role: { en: 'Constitutional Lawyer', si: 'ආණ්ඩුක්‍රම ව්‍යවස්ථා නීතීඥ' },
        photo: 'https://randomuser.me/api/portraits/men/52.jpg',
        desc: {
          en: 'Advises on state security laws and media freedom.',
          si: 'රාජ්‍ය ආරක්ෂක නීති සහ මාධ්‍ය නිදහස පිළිබඳ උපදෙස් දෙයි.'
        },
        wa_number: '94777998877'
      }
    ]
  },

  // =============================================================
  // 7. Penal Code (Amendment) Act No. 22 of 1995 (Fraud Sections)
  // =============================================================
  {
    id: 'pc-1995',
    category: {
      en: 'Criminal Law',
      si: 'දණ්ඩ නීති'
    },
    title: {
      en: 'Penal Code (Fraud & Cheating)',
      si: 'දණ්ඩ නීති සංග්‍රහය (වංචා සහ රස්තියාදු)'
    },
    actNo: {
      en: 'Penal Code (Amendment) Act No. 22 of 1995',
      si: 'දණ්ඩ නීති සංග්‍රහය (සංශෝධන) පනත අංක 22 දරණ 1995'
    },
    type: {
      en: 'Amendment to Penal Code',
      si: 'දණ්ඩ නීති සංග්‍රහයට සංශෝධනයකි'
    },
    meaning: {
      en: 'While the Computer Crime Act handles the technical aspect, the Penal Code handles the criminal intent (mens rea) of cheating, forgery, and criminal misappropriation.',
      si: 'පරිගණක අපරාධ පනත තාක්ෂණික පැත්ත සලකා බැලුවද, දණ්ඩ නීති සංග්‍රහය වංචා කිරීම, ව්‍යාජ ලේඛන සකස් කිරීම සහ අපරාධමය අයිතිය ව්‍යාජාත්මක කිරීමේ අපරාධාභිචාරය (mens rea) සලකා බලයි.'
    },
    tldr: {
      en: 'Used to prosecute phishing, romance scams, and online financial fraud that traditional laws cover.',
      si: 'ෆිෂිං, පෙම්වතුන් රවටාගැනීමේ වංචා සහ මාර්ගගත මූල්‍ය වංචා වලට එරෙහිව නඩු පවරනු වස් භාවිතා කරයි.'
    },
    longDesc: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <p class="mb-4">Even in the digital age, the <strong>Penal Code</strong> remains the primary weapon against fraud. Cybercrimes like phishing are often prosecuted under Section 390 (Cheating) and Section 463 (Forgery).</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">Key Sections</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Section 390 (Cheating):</strong> Deceiving someone to deliver property.</li>
            <li><strong>Section 463 (Forgery):</strong> Making false electronic documents.</li>
            <li><strong>Section 420 (Cheating and Dishonestly inducing delivery):</strong> Commonly used for large scale online scams.</li>
          </ul>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none" dir="ltr">
          <p class="mb-4">ඩිජිටල් යුගයේදීත් <strong>දණ්ඩ නීති සංග්‍රහය</strong> වංචාවලට එරෙහි ප්‍රධාන ආයුධය වේ. ෆිෂිං වැනි සයිබර් අපරාධ බොහෝ විට 390 වගන්තිය (වංචා කිරීම) සහ 463 වගන්තිය (ව්‍යාජ ලේඛන) යටතේ විභාග කරනු ලැබේ.</p>
          <h3 class="text-xl font-bold mb-2 text-brand-red">ප්‍රධාන වගන්ති</h3>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>390 වගන්තිය (වංචා කිරීම):</strong> දේපළ ලබා ගැනීම සඳහා කෙනෙකු රවටා ගැනීම.</li>
            <li><strong>463 වගන්තිය (ව්‍යාජ):</strong> අසත්‍ය ඉලෙක්ට්‍රොනික ලේඛන සෑදීම.</li>
            <li><strong>420 වගන්තිය:</strong> විශාල මාර්ගගත ප්‍රතිලාභ අවබෝධ කර ගැනීම.</li>
          </ul>
        </div>
      `
    },
    penalties: {
      jail: {
        en: 'Up to 3 years for simple cheating; up to 5 years for forgery.',
        si: 'සරල වංචා සඳහා වසර 3 දක්වා; ව්‍යාජ කිරීම සඳහා වසර 5 දක්වා.'
      },
      fine: {
        en: 'Variable based on the amount cheated.',
        si: 'වංචා කළ මුදල මත පදනම්ව විචල්‍ය.'
      },
      compensation: {
        en: 'Courts often order the fraudster to return the stolen amount.',
        si: 'අධිකරණයට බොහෝ විට වංචාකරුගෙන් සොරාගත් මුදල් ආපසු ගෙවන ලෙස නියෝග කළ හැක.'
      },
      courtType: {
        en: 'Magistrate Court or High Court.',
        si: 'මහේස්ත්‍රාත් අධිකරණය හෝ මහාධිකරණය.'
      },
      duration: {
        en: '6 months to 3 years.',
        si: 'මාස 6 සිට 3 වසර දක්වා.'
      }
    },
    process: {
      step1: {
        en: 'Stop communication with the scammer. Preserve all chat logs and bank transfer receipts.',
        si: 'වංචාකරු සමඟ සන්නිවේදනය නතර කරන්න. සියලුම කතා ලොග සහ බැංකු හුවමාරු ධාවන පත් සුරක්ෂිත කරන්න.'
      },
      whoToMeet: {
        en: 'Police Financial Crimes Investigation Division (FCID) or local police station.',
        si: 'පොලිස් මූල්‍ය අපරාධ විමර්ශන කොට්ඨාශය (FCID) හෝ ප්‍රාදේශීය පොලිස් ස්ථානය.'
      },
      docs: [
        { en: 'Bank transaction slips.', si: 'බැංකු ගනුදෙනු පත්‍ර.' },
        { en: 'Screenshots of the conversation.', si: 'සංවාදයේ තිර රූප.' }
      ],
      contact: [
        { org: 'FCID', number: '011-2322233' },
        { org: 'Police', number: '119' }
      ]
    },
    incidents: [
      {
        date: '2023-09-12',
        desc: {
          en: 'A Facebook lottery scam defrauded hundreds of citizens of small cash sums.',
          si: 'Facebook ලොතරැයි වංචාවක් මගින් පුරවැසියන් සිය ගණනකු ඉතා අඩු මුදල් වංචා කරන ලදී.'
        },
        outcome: {
          en: 'Police traced the bank account to a scam ring. Several arrests made.',
          si: 'පොලිසිය බැංකු ගිණුම වංචා කණ්ඩායමකට සම්බන්ධ කර ගත්තේය. අත්අඩංගුවට ගැනීම් කිහිපයක් සිදු විය.'
        }
      }
    ],
    experts: [
      {
        name: { en: 'Saman Kumara', si: 'සමන් කුමාර' },
        role: { en: 'Criminal Defense Lawyer', si: 'අපරාධ නීතීඥ' },
        photo: 'https://randomuser.me/api/portraits/men/11.jpg',
        desc: {
          en: 'Specializes in financial fraud and asset recovery.',
          si: 'මූල්‍ය වංචා සහ වත්කම් අහිමි වීම සම්බන්ධයෙන් විශේෂඥ.'
        },
        wa_number: '94712223344'
      }
    ]
  }
];
