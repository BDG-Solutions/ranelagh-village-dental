// All site content lives here — a single source of truth for treatments, fees,
// opening hours and contact details, taken from the current ranelaghvillagedental.ie.

export const clinic = {
  name: 'Ranelagh Village Dental',
  tagline: 'Family dentistry · Dublin 6',
  phone: '01 496 9681',
  phoneHref: 'tel:+35314969681',
  phone2: '01 497 4176',
  phone2Href: 'tel:+35314974176',
  email: 'info@ranelaghvillagedental.ie',
  addressLines: ['72 Ranelagh Village', 'Ranelagh, Dublin 6', 'D06 P8H2'],
  addressText: '72 Ranelagh Village, Ranelagh, Dublin 6, D06 P8H2',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ranelagh+Village+Dental+72+Ranelagh+Dublin+6+D06+P8H2',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ranelagh+Village+Dental+72+Ranelagh+Dublin+6+D06+P8H2',
  mapEmbed: 'https://www.google.com/maps?q=Ranelagh+Village+Dental,+72+Ranelagh,+Dublin+6,+D06+P8H2&z=16&output=embed',
  rating: { score: '4.8', count: 122, source: 'Google' },
  officialSite: 'https://www.ranelaghvillagedental.ie',
};

// day: 0 = Sunday … 6 = Saturday. open/close in minutes after midnight (Irish time).
export const hours = [
  { day: 1, label: 'Monday', text: '8am – 8pm', open: 480, close: 1200 },
  { day: 2, label: 'Tuesday', text: '8am – 8pm', open: 480, close: 1200 },
  { day: 3, label: 'Wednesday', text: '8am – 8pm', open: 480, close: 1200 },
  { day: 4, label: 'Thursday', text: '8am – 8pm', open: 480, close: 1200 },
  { day: 5, label: 'Friday', text: '8am – 8pm', open: 480, close: 1200 },
  { day: 6, label: 'Saturday', text: '8.30am – 1.30pm', open: 510, close: 810 },
  { day: 0, label: 'Sunday', text: 'Closed' },
];

export const nav = [
  { label: 'Home', path: '' },
  { label: 'About Us', path: 'about' },
  { label: 'Treatments', path: 'treatments' },
  { label: 'Fees', path: 'fees' },
  { label: 'Contact', path: 'contact' },
];

export const highlights = [
  { icon: 'clock', title: 'Open until 8pm', text: 'Weekday evenings and Saturday mornings.' },
  { icon: 'heart', title: 'Nervous patients welcome', text: 'A relaxed, professional practice.' },
  { icon: 'badge', title: 'Free check-up', text: 'Once a year for eligible PRSI and medical card patients.' },
  { icon: 'mapPin', title: 'In the heart of the village', text: '72 Ranelagh, Dublin 6.' },
];

export const team = [
  {
    name: 'Dr Dermott Finnerty',
    role: 'Dentist',
    bio: 'Qualified from the Dublin Dental School, Trinity College Dublin, in 1988.',
    initials: 'DF',
  },
  {
    name: 'Dr Eithne McKenna',
    role: 'Dentist',
    bio: 'Qualified from the Dublin Dental School, Trinity College Dublin, in 1988.',
    initials: 'EM',
  },
];

export const aboutPillars = [
  { icon: 'users', title: 'A family practice', text: 'Dr Finnerty and Dr McKenna are a husband-and-wife team who take a sincere interest in the dental needs of you and your family.' },
  { icon: 'sparkles', title: 'Modern, high-quality care', text: 'Advances in dental technology, applied with a commitment to excellence, give results that are both healthy and natural-looking.' },
  { icon: 'heart', title: 'Relaxed and professional', text: 'The atmosphere at the surgery is calm and unhurried, and nervous patients are particularly welcome.' },
  { icon: 'book', title: 'Always learning', text: 'Our skills are constantly updated through ongoing CPD (Continuing Professional Development) courses.' },
];

// Treatments — wording adapted from the practice's Services & Treatments page.
export const treatments = [
  {
    id: 'examinations', icon: 'search', title: 'Examinations',
    short: 'Regular check-ups to keep your mouth healthy and catch problems early.',
    body: [
      'Dental examinations are necessary to maintain overall health and to screen for oral cancers. We recommend an examination every 6–9 months.',
      'Regular check-ups also help with the early detection of tooth decay and the prevention of gum disease.',
    ],
    fee: 'from €50',
  },
  {
    id: 'fillings', icon: 'tooth', title: 'Fillings',
    short: 'Tooth-coloured or amalgam fillings to restore damaged or decayed teeth.',
    body: [
      'Fillings restore damaged, broken or decayed teeth. We use two types of material: silver-coloured amalgam, which is extremely durable and long-lasting, and tooth-coloured fillings made from composite resin or porcelain, which can be made virtually undetectable.',
      'No one type of filling suits every patient. It depends on the location, size and depth of the filling, and your dentist will suggest the best option for you.',
    ],
    fee: '€55 – €150',
  },
  {
    id: 'crowns', icon: 'crown', title: 'Crowns',
    short: 'Natural-looking covers that protect and restore weakened teeth.',
    body: [
      'Crowns are natural-looking, non-removable covers that fit over prepared teeth and are permanently cemented or bonded into place. They look and function like a normal tooth and generally improve its appearance.',
      'They are used to restore badly broken-down or fractured teeth, or teeth with a large filling. After root canal treatment a crown is often advised, as root-filled teeth can become brittle over time.',
    ],
    fee: 'from €750',
  },
  {
    id: 'bridges', icon: 'bridge', title: 'Bridges',
    short: 'A fixed way to replace one or two missing teeth.',
    body: [
      'Bridges replace missing teeth without the use of a denture, and they are non-removable. They suit patients with one or two missing teeth.',
      'The gap is filled with artificial teeth anchored to the teeth on both sides for strong support, which generally involves crowning the teeth either side of the gap.',
    ],
    fee: '€750 – €850 per unit',
  },
  {
    id: 'implants', icon: 'implant', title: 'Implants',
    short: 'Titanium replacements for missing roots that support crowns or bridges.',
    body: [
      'Implants are titanium replacements for the roots of missing teeth, on which crowns or bridges can be placed to restore full function.',
      'They don’t require any reduction of the neighbouring natural teeth, which makes them a very conservative way of treating gaps.',
    ],
    fee: 'Implant crown €1,200',
  },
  {
    id: 'veneers', icon: 'star', title: 'Veneers',
    short: 'Custom-made covers to improve chipped, discoloured or uneven teeth.',
    body: [
      'Veneers are thin, custom-made covers placed over the natural tooth. They can camouflage broken, discoloured or crooked teeth, fill gaps and straighten the look of your smile.',
      'They are reasonably conservative, with little if any of the natural tooth altered. They are not for everyone, and each case needs careful assessment.',
    ],
    fee: 'On assessment',
  },
  {
    id: 'root-canal', icon: 'root', title: 'Root canal treatment',
    short: 'Treats infection at the centre of a tooth and can save it.',
    body: [
      'Root canal treatment (endodontics) treats a bacterial infection at the centre of a tooth.',
      'It can save even badly broken-down teeth that might otherwise need to be removed.',
    ],
    fee: '€400 – €600',
  },
  {
    id: 'whitening', icon: 'sun', title: 'Teeth whitening',
    short: 'Professional whitening with custom trays for a brighter smile.',
    body: [
      'Teeth whitening uses professional whitening products to restore the natural colour of your teeth, so they blend seamlessly with the rest of your smile.',
      'We use custom-made trays for an even, comfortable result.',
    ],
    fee: '€300',
  },
  {
    id: 'mouthguards', icon: 'shield', title: 'Mouthguards & splints',
    short: 'Custom-fitted sports guards and night splints.',
    body: [
      'We provide only custom-fitted mouthguards, moulded to your teeth and gums. This keeps the guard from moving around your mouth, which would make it ineffective in an impact.',
      'We also make night splints for patients who grind or clench their teeth.',
    ],
    fee: '€75 · night splint €150 – €250',
  },
];

// Fees — from the practice's current fee list ("Fees 2016"). Guide prices only.
export const feeGroups = [
  {
    id: 'check-ups', title: 'Examinations & hygiene', icon: 'search',
    items: [
      ['Examination, diagnosis and treatment plan', '€50'],
      ['Examination, scale and polish', '€70'],
      ['Examination and 2 X-rays', '€70'],
      ['Gum treatment (per half hour)', '€150'],
      ['X-ray (small)', '€25'],
      ['Prescription', '€40'],
    ],
  },
  {
    id: 'restorations', title: 'Fillings & restorations', icon: 'tooth',
    items: [
      ['Routine amalgam filling', '€55 – €125'],
      ['Routine white filling (composite)', '€75 – €150'],
      ['Pin-retained filling', '€100 – €160'],
      ['Restoration of incisal edge', '€100 – €160'],
      ['Fissure sealants', '€50'],
    ],
  },
  {
    id: 'extractions', title: 'Extractions', icon: 'minus',
    items: [
      ['Routine extraction', '€75 – €150'],
      ['Surgical extraction', '€150 – €300'],
    ],
  },
  {
    id: 'root-canal', title: 'Root canal treatment', icon: 'root',
    items: [
      ['Single root', '€400'],
      ['Double root', '€550'],
      ['Molar teeth', '€600'],
    ],
  },
  {
    id: 'crowns', title: 'Crowns & bridges', icon: 'crown', note: 'Patient assessment necessary.',
    items: [
      ['Metal ceramic crown', '€750 – €850'],
      ['Implant crown', '€1,200'],
      ['Bridge (per unit)', '€750 – €850'],
    ],
  },
  {
    id: 'dentures', title: 'Dentures', icon: 'smile',
    items: [
      ['Acrylic (partial)', '€300 – €600'],
      ['Chrome cobalt', '€1,200'],
      ['Full upper and lower', '€1,200 – €1,400'],
      ['Full upper or lower only', '€650 – €850'],
    ],
  },
  {
    id: 'additional', title: 'Additional services', icon: 'sparkles',
    items: [
      ['Whitening (full mouth, custom trays)', '€300'],
      ['Gum shield (custom made)', '€75'],
      ['Night splint', '€150 – €250'],
    ],
  },
];

export const savings = [
  { title: 'Free check-up', text: 'All eligible PRSI and medical card patients are entitled to a free check-up once a year.' },
  { title: '20% back with Med 2', text: 'Claim back 20% on crown and bridgework, root canal treatment and periodontal (gum) treatment with a Med 2 form.' },
  { title: 'Reductions for larger plans', text: 'Reductions are available for extensive treatment plans. Please discuss this with your dentist.' },
  { title: 'Dental insurance', text: 'Further savings are available with dental insurance schemes.' },
];

export const feeNote = 'All costings are for guideline purposes only and may vary once we have seen your case. If you are unsure about anything, please call us on 01 496 9681 to discuss your treatment.';

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Call reception on <a href="tel:+35314969681">01 496 9681</a> or email <a href="mailto:info@ranelaghvillagedental.ie">info@ranelaghvillagedental.ie</a>. We’re open from 8am to 8pm on weekdays and on Saturday mornings.' },
  { q: 'I’m nervous about going to the dentist. Can you help?', a: 'Yes. Nervous patients are particularly welcome, and the atmosphere at the surgery is relaxed and professional. Just let us know when you book.' },
  { q: 'Do you accept PRSI and medical card patients?', a: 'Yes. All eligible PRSI and medical card patients are entitled to a free check-up once a year.' },
  { q: 'How often should I have a check-up?', a: 'We recommend an examination every 6–9 months to catch decay early, prevent gum disease and screen for oral cancer.' },
  { q: 'Can I get tax relief on my treatment?', a: 'You can claim back 20% on crown and bridgework, root canal and gum treatment using a Med 2 form.' },
];
