/**
 * laws-db.js
 * 
 * Centralized JavaScript Database for GlobalLaw Sri Lanka.
 * This file acts as the backend for the static site.
 * 
 * Structure Definition:
 * - id: Unique identifier for the law.
 * - category: The main classification (e.g., Cyber, Family).
 * - title: Display name of the law.
 * - officialActName: The official legislative name.
 * - tldr: "Too Long; Didn't Read" summary.
 * - isLawOrRule: Type of legislation (Act, Ordinance, Regulation).
 * - meaningOfLawRule: Legal definition/context.
 * 
 * - penalties { Object }:
 *   - jailTime: Imprisonment details.
 *   - fineAmount: Financial penalty details.
 *   - compensation: Damages payable to victim.
 *   - courtType: Where the case is heard.
 *   - averageCaseDuration: Estimated time to resolve.
 * 
 * - complaintProcess { Object }:
 *   - firstStep: Immediate action for the victim.
 *   - whoToMeet: Authority to approach.
 *   - requiredDocuments: List of evidence needed.
 *   - contactNumbers: List of emergency contacts.
 * 
 * - incidents [ Array ]:
 *   - Real-world or hypothetical case studies.
 * 
 * - lawyers [ Array ]:
 *   - Recommended legal experts for this domain.
 * 
 * - longDescription: Full HTML content for the detail page.
 */

const LAWS_DB = [
  // =============================================================
  // EXAMPLE 1: Computer Crime Act No. 24 of 2007
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
    officialActName: {
      en: 'Computer Crime Act No. 24 of 2007',
      si: 'පරිගණක අපරාධ පනත අංක 24 දරණ 2007'
    },
    tldr: {
      en: 'The primary legislation in Sri Lanka to combat computer-related offenses such as hacking, unauthorized access, and data damage. It criminalizes acts that compromise the confidentiality, integrity, or availability of computer systems.',
      si: 'ශ්‍රී ලංකාවේ හැකිං, අවසර නොමැතිව ප්‍රවේශ වීම සහ දත්ත විනාශ කිරීම වැනි පරිගණක සම්බන්ධ අපරාධ වැළැක්වීම සඳහා ප්‍රධාන නීතිය මෙයයි. මෙය පරිගණක පද්ධතිවල රහස්‍යභාවය, අඛණ්ඩතාවය හෝ ලබා ගැනීමේ හැකියාවට බලපෑම් කරන ක්‍රියා අපරාධ ලෙස සැලකීම.'
    },
    isLawOrRule: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaningOfLawRule: {
      en: 'Defines "Computer", "Computer System", "Data", and "Program". It establishes that unauthorized access to any computer system with the intent to commit an offense is a crime.',
      si: '"පරිගණකය", "පරිගණක පද්ධතිය", "දත්ත" සහ "වැඩසටහන" යන්න අර්ථ දක්වයි. අපරාධයක් සිදු කිරීමේ අරමුණින් ඕනෑම පරිගණක පද්ධතියකට අවසර නොමැතිව ඇතුළු වීම අපරාධයක් බව මෙයින් ස්ථාපිත කරයි.'
    },
    penalties: {
      jailTime: {
        en: 'Up to 3 years imprisonment for unauthorized access (Section 3). Up to 5 years for illegal interception (Section 5).',
        si: 'අවසර නොමැති ප්‍රවේශයට වසර 3 දක්වා සිර දඬුවම (3 වගන්තිය). නීති විරෝධී අතුරුදහන් කිරීම සඳහා වසර 5 දක්වා (5 වගන්තිය).'
      },
      fineAmount: {
        en: 'Fine up to LKR 300,000 or both fine and imprisonment.',
        si: 'රු. 300,000 දක්වා දඩ මුදලක් හෝ දඩ සහ සිර දඬුවම දෙවනුවත්.'
      },
      compensation: {
        en: 'Courts may order compensation to the victim for data loss or system damage.',
        si: 'අධිකරණයට දත්ත අහිමි වීම හෝ පද්ධති හානි සඳහා වන්දි නියම කළ හැක.'
      },
      courtType: {
        en: 'Magistrate Court (Non-summary) or High Court depending on severity.',
        si: 'බරපතලත්වය අනුව මහේස්ත්‍රාත් අධිකරණය (රහස් නොවන) හෝ මහාධිකරණය.'
      },
      averageCaseDuration: {
        en: '1 to 3 years (Technical evidence analysis often causes delays).',
        si: 'වසර 1 සිට 3 දක්වා (තාක්ෂණික සාක්ෂි විශ්ලේෂණය නිසා බොහෝ විට ප්‍රමාද සිදු වේ).'
      }
    },
    complaintProcess: {
      firstStep: {
        en: 'Immediately disconnect the affected system from the internet to prevent further damage. Do not turn off the computer if possible to preserve volatile memory (RAM).',
        si: 'තවදුරටත් හානි වැළැක්වීම සඳහා බලපෑමට ලක්වූ පද්ධතිය අන්තර්ජාලයෙන් වහාම විනිවිද ගන්න. අස්ථිර මතකය (RAM) සුරක්ෂිත කිරීම සඳහා හැකි නම් පරිගණකය නිවැරදි නොකරන්න.'
      },
      whoToMeet: {
        en: 'Report to the Criminal Investigation Department (CID) - Computer Crimes Division or Sri Lanka CERT (CC).',
        si: 'අපරාධ විමර්ශන දෙපාර්තමේන්තුව (CID) - පරිගණක අපරාධ කොට්ඨාශය හෝ ශ්‍රී ලංකා සර්ට් (CC) වෙත වාර්තා කරන්න.'
      },
      requiredDocuments: [
        { en: 'National Identity Card (NIC) of the complainant.', si: 'පැමිණිලිකරුගේ ජාතික හැඳුනුම්පත (NIC).' },
        { en: 'Logs of IP addresses, screenshots, or email headers.', si: 'IP ලිපින ලොග, තිර රූප හෝ විද්‍යුත් තැපැල් ශීර්ෂ.' },
        { en: 'List of suspected damages or financial loss.', si: 'සැක කෙරෙන හානි හෝ මූල්‍ය පාඩු ලැයිස්තුව.' }
      ],
      contactNumbers: [
        { org: 'CID', number: '011-2422176 / 011-2323333' },
        { org: 'SLCERT', number: '011-2691222' },
        { org: '1919', number: 'Police Emergency' }
      ]
    },
    incidents: [
      {
        incidentDate: '2023-08-15',
        description: {
          en: 'A private bank\'s database was accessed by a former employee using retained credentials. Customer data was leaked.',
          si: 'හිටපු සේවකයෙකු විසින් තබාගත් ප්‍රවේශ අවසර භාවිතා කරමින් පෞද්ගලික බැංකුවක දත්ත ගබඩාවකට ප්‍රවේශ විය. පාරිභෝගික දත්ත ලික්කරණය විය.'
        },
        outcome: {
          en: 'Suspect arrested under Section 3 of the CCA. Case pending at Colombo Magistrate Court.',
          si: 'සැකකරු CCA පනතේ 3 වගන්තිය යටතේ අත්අඩංගුවට ගැනීම. කොළඹ මහේස්ත්‍රාත් අධිකරණයේ නඩුව විභාග වෙමින් පවතී.'
        }
      }
    ],
    lawyers: [
      {
        id: 'law-001',
        name: { en: 'Ravin Perera', si: 'රවින් පෙරේරා' },
        photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        jobRole: { en: 'Senior Cyber Law Consultant', si: 'විධායක සයිබර් නීති විශේෂඥ' },
        shortDesc: {
          en: 'Specializes in data privacy and digital forensics litigation.',
          si: 'දත්ත පෞද්ගලිකත්වය සහ ඩිජිටල් නීති විද්‍යාත්මක නඩු විභාගයන් සඳහා විශේෂඥ.'
        },
        isAvailable: true
      },
      {
        id: 'law-002',
        name: { en: 'Nimali Fernando', si: 'නිමාලි ප්‍රනාන්දු' },
        photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        jobRole: { en: 'Corporate Technology Lawyer', si: 'කෝපරේට් තාක්ෂණ නීතීඥ' },
        shortDesc: {
          en: 'Expert in intellectual property theft and software licensing disputes.',
          si: 'බුද්ධිමය දේපළ සොරාගැනීම් සහ මෘදුකාංග බලපත්‍ර ආරවුල් වල විශේෂඥ.'
        },
        isAvailable: false
      }
    ],
    longDescription: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <h2 class="text-2xl font-bold mb-4 text-brand-red">Overview of the Act</h2>
          <p class="mb-4">The <strong>Computer Crime Act No. 24 of 2007</strong> is the foundational legal framework in Sri Lanka addressing offenses related to computers and information systems. It was enacted to keep pace with technological advancements and to provide legal remedies for digital crimes.</p>
          
          <h3 class="text-xl font-semibold mb-2">Key Offenses</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Unauthorized Access (Section 3):</strong> Gaining access to a computer system without permission.</li>
            <li><strong>Illegal Interception (Section 5):</strong> Listening to or recording data transmissions.</li>
            <li><strong>Data Interference (Section 6):</strong> Damaging, deleting, or altering data.</li>
            <li><strong>System Interference (Section 7):</strong> Hindering the operation of a computer system.</li>
          </ul>

          <h3 class="text-xl font-semibold mb-2">Why this matters to you</h3>
          <p class="mb-4">If you run a business, this law mandates that you protect customer data. If you are an individual, it protects you from identity theft and cyberstalking to a certain extent. It empowers the CID to investigate digital footprints.</p>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none text-right" dir="ltr">
          <h2 class="text-2xl font-bold mb-4 text-brand-red">පනතෙහි සාරාංශය</h2>
          <p class="mb-4"><strong>පරිගණක අපරාධ පනත අංක 24 දරණ 2007</strong> ශ්‍රී ලංකාවේ පරිගණක සහ තොරතුරු පද්ධති සම්බන්ධ අපරාධ සම්බන්ධයෙන් වන මූලික නීතිමය රාමුව වේ. තාක්ෂණික දියුණුවට ගැලපෙන පරිදි සහ ඩිජිටල් අපරාධ සඳහා නීතිමය සහන සැපයීම සඳහා මෙය සම්මත කරන ලදී.</p>
          
          <h3 class="text-xl font-semibold mb-2">ප්‍රධාන වරදවල්</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>අවසර නොමැති ප්‍රවේශය (3 වගන්තිය):</strong> අවසරයකින් තොරව පරිගණක පද්ධතියකට ප්‍රවේශ වීම.</li>
            <li><strong>නීති විරෝධී අතුරුදහන් කිරීම (5 වගන්තිය):</strong> දත්ත සම්ප්‍රේෂණයන් ඇසීම හෝ පටිගත කිරීම.</li>
            <li><strong>දත්ත මැදිහත් වීම (6 වගන්තිය):</strong> දත්ත හානි කිරීම, මකා දැමීම හෝ වෙනස් කිරීම.</li>
          </ul>
        </div>
      `
    }
  },

  // =============================================================
  // EXAMPLE 2: Online Safety Act No. 1 of 2024
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
    officialActName: {
      en: 'Online Safety Act No. 1 of 2024',
      si: 'අන්තර්ජාල ආරක්ෂිත භාවය පනත අංක 1 දරණ 2024'
    },
    tldr: {
      en: 'A controversial but powerful law designed to regulate online content, curb fake news, and prevent cyber-harassment. It establishes the Online Safety Commission with powers to order takedowns of prohibited content.',
      si: 'අන්තර්ජාල අන්තර්ගතයන් නියාමනය කිරීම, බොරු ආරංචි සහ සයිබර් ප්‍රහාර වැළැක්වීම සඳහා නිර්මාණය කරන ලද බලගතු නීතියකි. තහනම් කළ අන්තර්ගතයන් ඉවත් කිරීමට බලය සහිත අන්තර්ජාල ආරක්ෂණ කොමිසම මෙමඟින් ස්ථාපිත කරයි.'
    },
    isLawOrRule: {
      en: 'Act of Parliament',
      si: 'පාර්ලිමේන්තු පනත'
    },
    meaningOfLawRule: {
      en: 'Defines "Prohibited Statements" including false statements against the President, Judiciary, or Public Order. It gives the Commission authority to deem specific online posts as illegal.',
      si: '"තහනම් කළ ප්‍රකාශ" අර්ථ දක්වයි. මෙය ජනාධිපතිවරයා, අධිකරණය හෝ පොදු සාමයට එරෙහිව ව්‍යාජ ප්‍රකාශ ඇතුළත් වේ. කොමිසමට නිශ්චිත අන්තර්ජාල පළ කිරීම් නීති විරෝධී ලෙස සැලකීමට බලය ඇත.'
    },
    penalties: {
      jailTime: {
        en: 'Up to 5 years of rigorous imprisonment for publishing prohibited statements.',
        si: 'තහනම් කළ ප්‍රකාශ ප්‍රකාශයට පත් කිරීම සඳහා වසර 5 දක්වා දැඩි සිර දඬුවම.'
      },
      fineAmount: {
        en: 'Fines ranging from LKR 500,000 to LKR 5,000,000 depending on the offense.',
        si: 'අපරාධය අනුව රු. 500,000 සිට රු. 5,000,000 දක්වා දඩ මුදල්.'
      },
      compensation: {
        en: 'Compensation may be awarded to victims of cyber harassment or stalking.',
        si: 'සයිබර් ප්‍රහාර හෝ පසුපස ගැටීම්වලට ගොදුරු වූවන්ට වන්දි ගෙවිය හැක.'
      },
      courtType: {
        en: 'Magistrate Court (Summary Trial) or High Court.',
        si: 'මහේස්ත්‍රාත් අධිකරණය (සාරාංශ විභාග) හෝ මහාධිකරණය.'
      },
      averageCaseDuration: {
        en: '6 months to 1.5 years (New law, backlog is currently low).',
        si: 'මාස 6 සිට 1.5 වසර දක්වා (අලුත් නීතියකි, මේ වන විට පසුගිය නඩු අඩුය).'
      }
    },
    complaintProcess: {
      firstStep: {
        en: 'Take screenshots of the offending post immediately. Report the content to the social media platform (Facebook, X, etc.) using their reporting tools.',
        si: 'වහාම කරුණාකර අපහාසාත්මක පළ කිරීමේ තිර රූප ගන්න. සමාජ මාධ්‍ය වේදිකාවේ (Facebook, X, ආදිය) වාර්තා කිරීමේ මෙවලම් භාවිතා කරමින් අන්තර්ගතය වාර්තා කරන්න.'
      },
      whoToMeet: {
        en: 'File a complaint with the Online Safety Commission (OSC) or the nearest Police Station (CID division for complex cases).',
        si: 'අන්තර්ජාල ආරක්ෂණ කොමිසම (OSC) හෝ ළඟම ඇති පොලිස් ස්ථානය (සංකීර්ණ නඩු සඳහා CID කොට්ඨාශය) වෙත පැමිණිල්ලක් ඉදිරිපත් කරන්න.'
      },
      requiredDocuments: [
        { en: 'NIC of the complainant.', si: 'පැමිණිලිකරුගේ NIC.' },
        { en: 'URL of the specific post/account.', si: 'විශේෂිත පළ කිරීම/ගිණුමේ URL.' },
        { en: 'Screenshot evidence with timestamps.', si: 'වේලා මුද්‍රා සහිත තිර රූප සාක්ෂි.' },
        { en: 'Proof of identity if the complainant is acting on behalf of a minor.', si: 'පැමිණිලිකරු ළමයෙකු වෙනුවෙන් කටයුතු කරන්නේ නම් අනන්‍යතා ප්‍රමාණකය.' }
      ],
      contactNumbers: [
        { org: 'Online Safety Commission', number: '011-xxxxxxx (Hotline Coming Soon)' },
        { org: 'CID', number: '011-2323333' }
      ]
    },
    incidents: [
      {
        incidentDate: '2024-02-10',
        description: {
          en: 'A social media influencer posted a fake news article claiming a new tax on daily wages, causing public unrest.',
          si: 'සමාජ මාධ්‍ය බලධාරියෙකු දෛනික වැටුප් සඳහා නව බද්දක් ඇති බවට බොරු පුවත් පත්‍ර ලිපියක් පළ කළ අතර එය පොදු අසහනයක් ඇති කළේය.'
        },
        outcome: {
          en: 'OSC ordered the takedown. The influencer was fined and issued a warning.',
          si: 'OSC විසින් ඉවත් කිරීමට නියෝග කළේය. බලධාරියාට දඩ නියම වූ අතර අවවාදයක් ලැබුණි.'
        }
      }
    ],
    lawyers: [
      {
        id: 'law-003',
        name: { en: 'Kasun Silva', si: 'කසුන් සිල්වා' },
        photoUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
        jobRole: { en: 'Human Rights & Constitutional Lawyer', si: 'මානව හිමිකම් සහ ආණ්ඩුක්‍රම ව්‍යවස්ථා නීතීඥ' },
        shortDesc: {
          en: 'Defends freedom of expression cases and challenges censorship orders.',
          si: 'ප්‍රකාශන නිදහස් නඩු වලට පෙනී සිටීම සහ සෙන්සෝර්ෂිප් නියෝග අභියෝග කිරීම.'
        },
        isAvailable: true
      }
    ],
    longDescription: {
      en: `
        <div class="prose dark:prose-invert max-w-none">
          <h2 class="text-2xl font-bold mb-4 text-brand-red">The Online Safety Commission</h2>
          <p class="mb-4">The <strong>Online Safety Act No. 1 of 2024</strong> established a 5-member commission appointed by the President. Its primary mandate is to detect and suppress online content that violates specific provisions related to public order and national security.</p>

          <h3 class="text-xl font-semibold mb-2">Prohibited Content</h3>
          <p class="mb-2">The Act specifically targets:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>False statements affecting the integrity of the President.</li>
            <li>Content inciting communal violence or hatred.</li>
            <li>Stalking, harassment, or humiliation of individuals.</li>
          </ul>

          <h3 class="text-xl font-semibold mb-2">Powers of the Commission</h3>
          <p class="mb-4">The Commission has the power to issue a "Takedown Order" to any service provider (e.g., Meta, Google) or host. Failure to comply can result in fines for the company and blocking of the service in Sri Lanka.</p>
        </div>
      `,
      si: `
        <div class="prose dark:prose-invert max-w-none text-right" dir="ltr">
          <h2 class="text-2xl font-bold mb-4 text-brand-red">අන්තර්ජාල ආරක්ෂණ කොමිසම</h2>
          <p class="mb-4"><strong>අන්තර්ජාල ආරක්ෂිත භාවය පනත අංක 1 දරණ 2024</strong> ජනාධිපතිවරයා විසින් පත් කරන ලද සාමාජිකයින් 5 දෙනෙකුගෙන් සමන්විත කොමිසමක් ස්ථාපිත කළේය. පොදු සාමය සහ ජාතික ආරක්ෂකය සම්බන්ධයෙන් විශේෂ විධිවිධාන උල්ලංඝනය කරන අන්තර්ජාල අන්තර්ගතයන් හඳුනා ගැනීම සහ මැඬ පැවැත්වීම මෙහි ප්‍රධාන කාර්යය වේ.</p>

          <h3 class="text-xl font-semibold mb-2">තහනම් කළ අන්තර්ගතයන්</h3>
          <p class="mb-2">පනත විශේෂයෙන් ඉලක්ක කර ඇත්තේ:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>ජනාධිපතිවරයාගේ අඛණ්ඩතාවයට බලපාන අසත්‍ය ප්‍රකාශ.</li>
            <li>ප්‍රජා හිංසාව හෝ වෛරය ඇති කරන අන්තර්ගතයන්.</li>
            <li>පුද්ගලයින් අපහාස කිරීම හෝ අවමානය කිරීම.</li>
          </ul>
        </div>
      `
    }
  }
];
