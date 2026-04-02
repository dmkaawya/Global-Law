// =============================================================
// ⚖️ GLOBALLAW SRI LANKA - MASTER DATABASE (lk-laws-db.js)
// =============================================================

const LAWS_DB = [
  {
    id: 'cca-2007',
    category: 'cyber',
    
    // 1. Basic Info
    title: { en: 'Computer Crime Act', si: 'පරිගණක අපරාධ පනත' },
    actNo: { en: 'Act No. 24 of 2007', si: '2007 අංක 24 දරණ පනත' },
    type: { en: 'Parliamentary Act (Law)', si: 'පාර්ලිමේන්තු පනතකි (නීතියකි)' },
    meaning: { 
        en: 'A formal law passed by parliament to govern digital activities.', 
        si: 'ඩිජිටල් ක්‍රියාකාරකම් පාලනය කිරීම සඳහා පාර්ලිමේන්තුව විසින් සම්මත කරන ලද විධිමත් නීතියකි.' 
    },
    tldr: { 
        en: 'The main law for hacking, data theft, and unauthorized computer access.', 
        si: 'පරිගණක හැක් කිරීම, දත්ත සොරකම් කිරීම සහ අනවසර ප්‍රවේශය පිළිබඳ ප්‍රධාන නීතිය.' 
    },
    longDesc: {
        en: '<p class="mb-3">The Computer Crime Act was introduced to combat digital crimes. It makes unauthorized access to computer systems (Hacking) a serious offense.</p><p>It also covers digital fraud and damage to computer infrastructure.</p>',
        si: '<p class="mb-3">ඩිජිටල් අපරාධ මැඩලීම සඳහා මෙම පරිගණක අපරාධ පනත හඳුන්වා දෙන ලදී. පරිගණක පද්ධතිවලට අනවසරයෙන් ඇතුළුවීම (Hacking) බරපතල වරදක් බව මෙයින් කියවේ.</p><p>ඩිජිටල් වංචා සහ පරිගණක යටිතල පහසුකම් වලට හානි කිරීම ද මෙයින් ආවරණය වේ.</p>'
    },

    // 2. Penalties & Courts
    penalties: {
        jail: { en: 'Up to 5 Years', si: 'වසර 5 දක්වා සිරදඬුවම්' },
        fine: { en: 'Rs. 100,000 - Rs. 300,000', si: 'රු. 100,000 - රු. 300,000 ක දඩයක්' },
        compensation: { en: 'Full damage recovery', si: 'සිදුවූ හානියට සම්පූර්ණ වන්දි' }
    },
    courtDetails: {
        courtType: { en: 'Magistrate Court / High Court', si: 'මහේස්ත්‍රාත් / මහාධිකරණය' },
        duration: { en: 'Approx. 2 - 4 Years', si: 'දළ වශයෙන් වසර 2 සිට 4 දක්වා' }
    },

    // 3. Process & Support
    process: {
        step1: { en: 'Go to CID Cyber Crime Division or local police station.', si: 'CID සයිබර් අපරාධ අංශයට හෝ ප්‍රාදේශීය පොලිස් ස්ථානයට යන්න.' },
        whoToMeet: { en: 'Officer In-Charge (OIC) - Cyber Unit', si: 'ස්ථානාධිපති (OIC) - සයිබර් අංශය' },
        docs: { en: 'Screenshot, URL, Chat logs, ID proof', si: 'තිරපිටපත්, ලින්ක්, චැට් වාර්තා, හැඳුනුම්පත' },
        contact: '119 / 011 232 2822'
    },

    // 4. Real-time Incidents
    incidents: [
        {
            date: '2024 Jan',
            desc: { en: 'A person was arrested for Facebook hacking.', si: 'ෆේස්බුක් හැක් කිරීම සම්බන්ධයෙන් පුද්ගලයෙකු අත්අඩංගුවට ගැනුණි.' },
            outcome: { en: '3 years in prison.', si: 'වසර 3ක සිරදඬුවම් නියම විය.' }
        }
    ],

    // 5. Expert Consultants
    experts: [
        {
            name: 'Kaawya Chandrasekara',
            role: { en: 'Lead Web Architect', si: 'ප්‍රධාන වෙබ් නිර්මාණකරු' },
            photo: '👨‍💻',
            desc: { en: 'Consultant for web security and digital legal platforms.', si: 'වෙබ් ආරක්ෂාව සහ ඩිජිටල් නීතිමය වේදිකා පිළිබඳ උපදේශක.' },
            wa: '94775048455'
        }
    ]
  }
];
