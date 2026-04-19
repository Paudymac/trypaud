/* eslint-disable */
// Generate data/gallery-items.json by unifying image sets from sub-page JSONs
// and the public/icons-mwo.json feed. Run: `node scripts/build-gallery.js`

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));

const mwoIcons = read('public/icons-mwo.json').map(
  (f) => `/images/icons/mwo/${f}`
);
const logosJson = read('data/logos-images.json');
const brandingJson = read('data/branding-images.json');

const mechconPrint = [
  '/images/print/mechcon-2018-img1.webp',
  '/images/print/mechcon-2018-img2.webp',
  '/images/print/mechcon-2018-img3.webp',
  '/images/print/mechcon-2018-img4.webp',
  '/images/print/mechcon-2018-img5.webp',
  '/images/print/mechcon-2018-img6.webp',
  '/images/print/mechcon-2018-img7.webp',
  '/images/print/mechcon-2017-img1.webp',
  '/images/print/mechcon-2017-img2.webp',
  '/images/print/mechcon-2017-img3.webp',
  '/images/print/mechcon-2017-img4.webp',
  '/images/print/mechcon-2017-img5.webp',
  '/images/print/mechcon-2017-img6.webp',
  '/images/print/mechcon-2017-img7.webp',
  '/images/print/mechcon-2017-img8.webp',
  '/images/print/mechcon-2016-img1.webp',
  '/images/print/mechcon-2016-img2.webp',
];

const smarttImages = [
  '/images/branding/Styleguide_PM_V6_Page_01.webp',
  '/images/branding/Styleguide_PM_V6_Page_04.webp',
  '/images/branding/Styleguide_PM_V6_Page_07.webp',
  '/images/branding/smartt-folder-front.webp',
  '/images/branding/smartt-folder.webp',
  '/images/branding/smartt-ad.webp',
];

const clansArt = [
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-mia-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-mia-only.webp',
];

const items = [];
const add = (x) => items.push(x);

// --- UI / WEB ---
add({
  id: 'mw5-clans-ui',
  title: 'MechWarrior 5: Clans',
  category: 'ui',
  year: '2024',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/mw5-clans-homepage.webp',
  images: [
    '/images/ui/mw5-clans-homepage.webp',
    '/images/ui/mw5-clans-news.webp',
    '/images/ui/mw5-clans-dlc.webp',
    '/images/ui/mw5-clans-purchase.webp',
  ],
  url: 'https://mw5clans.com',
});
add({
  id: 'mwol-moonwalker-ui',
  title: 'MWO Legends Product Page',
  category: 'ui',
  year: '2023',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/mwomercs-legends-moonwalker.webp',
  images: [
    '/images/ui/mwomercs-legends-moonwalker.webp',
    '/images/ui/mwomercs-legends-moonwalker2.webp',
  ],
  url: 'https://mwomercs.com/legends/moonwalker',
});
add({
  id: 'mw5-mercs-ui',
  title: 'MechWarrior 5: Mercenaries',
  category: 'ui',
  year: '2021',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/mw5-mercs-homepage.webp',
  images: [
    '/images/ui/mw5-mercs-homepage.webp',
    '/images/ui/mw5-mercs-dlc1.webp',
    '/images/ui/mw5-mercs-dlc2.webp',
    '/images/ui/mw5-mercs-media.webp',
  ],
  url: 'https://mw5mercs.com',
});
add({
  id: 'mechcon-ui',
  title: 'Mech_Con',
  category: 'ui',
  year: '2018',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/mechcon-homepage.webp',
  images: [
    '/images/ui/mechcon-homepage.webp',
    '/images/ui/mechcon-about.webp',
    '/images/ui/mechcon-tickets.webp',
  ],
  url: 'https://mechwarrior.com/mechcon',
});
add({
  id: 'pgi-ui',
  title: 'Piranha Games',
  category: 'ui',
  year: '2017',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/pgi-homepage.webp',
  images: [
    '/images/ui/pgi-homepage.webp',
    '/images/ui/pgi-studio.webp',
    '/images/ui/pgi-careers.webp',
  ],
  url: 'https://piranhagames.com/',
});
add({
  id: 'mwo-product-ui',
  title: 'MWO Product Pages',
  category: 'ui',
  year: '2024',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/mwo-product-page1.webp',
  images: [
    '/images/ui/mwo-product-page1.webp',
    '/images/ui/mwo-product-page2.webp',
    '/images/ui/mwo-product-page3.webp',
    '/images/ui/mwo-product-page4.webp',
    '/images/ui/mwo-product-page5.webp',
    '/images/ui/mwo-product-page6.webp',
    '/images/ui/mwo-product-page7.webp',
  ],
});
add({
  id: 'transverse-ui',
  title: 'Transverse — Crowd Funding Site',
  category: 'ui',
  year: '2014',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/transverse-homepage.webp',
  images: [
    '/images/ui/transverse-homepage.webp',
    '/images/ui/transverse-about.webp',
    '/images/ui/transverse-product.webp',
    '/images/ui/transverse-checkout.webp',
    '/images/ui/transverse-social.webp',
  ],
});
add({
  id: 'ctd-ui',
  title: 'Connect the Doc',
  category: 'ui',
  year: '2012',
  description: 'UI / UX / Front End',
  thumbnail: '/images/ui/ctd-img1.webp',
  images: ['/images/ui/ctd-img1.webp', '/images/ui/ctd-img2.webp'],
  url: 'https://connectthedoc.com/',
});
add({
  id: 'hs-bb-ui',
  title: 'SaaS Desktop Apps',
  category: 'ui',
  year: '2009',
  description: 'UI / UX / Animation',
  thumbnail: '/images/ui/hs-img1.webp',
  images: [
    '/images/ui/hs-img1.webp',
    '/images/ui/hs-img2.webp',
    '/images/ui/bb-img1.webp',
    '/images/ui/bb-img2.webp',
  ],
});

// --- LOGOS ---
add({
  id: 'trypaud-logo',
  title: 'TryPaud',
  category: 'logos',
  year: '2025',
  description: 'Design / Art Direction',
  thumbnail: logosJson.tryPaud[0],
  images: logosJson.tryPaud,
});
add({
  id: 'kwc-logo',
  title: 'KirkWood Carpentry',
  category: 'logos',
  year: '2025',
  description: 'Design / Art Direction',
  thumbnail: logosJson.kirkwoodCarpentry[0],
  images: logosJson.kirkwoodCarpentry,
});
add({
  id: 'mw5-clans-logo',
  title: 'MechWarrior 5: Clans Logo',
  category: 'logos',
  year: '2024',
  description: 'Design / Art Direction',
  thumbnail: logosJson.mw5Clans[0],
  images: logosJson.mw5Clans,
  url: 'https://mw5clans.com/',
});
add({
  id: 'ss-logo',
  title: 'Solaris Showdown',
  category: 'logos',
  year: '2024',
  description: 'Design / Art Direction',
  thumbnail: logosJson.solarisShowdown[0],
  images: logosJson.solarisShowdown,
  url: 'https://mw5mercs.com/dlc/solaris-showdown',
});
add({
  id: 'mwol-logo',
  title: 'MechWarrior Online Legends',
  category: 'logos',
  year: '2023',
  description: 'Design / Art Direction',
  thumbnail: logosJson.mwoLegends[0],
  images: logosJson.mwoLegends,
  url: 'https://mwomercs.com/',
});
add({
  id: 'tdg-logo',
  title: 'The Dragons Gambit',
  category: 'logos',
  year: '2023',
  description: 'Design / Art Direction',
  thumbnail: logosJson["theDevil'sGambit"][0],
  images: logosJson["theDevil'sGambit"],
});
add({
  id: 'ror-logo',
  title: 'Rise of Rasalhague',
  category: 'logos',
  year: '2022',
  description: 'Design / Art Direction',
  thumbnail: logosJson.riseOfRasalhague[0],
  images: logosJson.riseOfRasalhague,
});
add({
  id: 'lotkl-logo',
  title: 'Legends of the Kestrel Lancers',
  category: 'logos',
  year: '2021',
  description: 'Design / Art Direction',
  thumbnail: logosJson.legendOfTheKestrelLancers[0],
  images: logosJson.legendOfTheKestrelLancers,
});
add({
  id: 'hotis-logo',
  title: 'Heroes of the Innersphere',
  category: 'logos',
  year: '2020',
  description: 'Design / Art Direction',
  thumbnail: '/images/logos/hotis-logo-example.webp',
  images: ['/images/logos/hotis-logo-example.webp'],
});
add({
  id: 'pr-logo',
  title: 'Project Revenant',
  category: 'logos',
  year: '2020',
  description: 'Design / Art Direction',
  thumbnail: '/images/logos/pr-logo-example.webp',
  images: ['/images/logos/pr-logo-example.webp'],
});
add({
  id: 'mw5-mercs-logo',
  title: 'MechWarrior 5',
  category: 'logos',
  year: '2019',
  description: 'Design / Art Direction',
  thumbnail: logosJson.mw5Mercenaries[0],
  images: logosJson.mw5Mercenaries,
});
add({
  id: 'mechcon-logo',
  title: 'MechCon',
  category: 'logos',
  year: '2018',
  description: 'Design / Art Direction',
  thumbnail: '/images/logos/mc-logo-example.webp',
  images: ['/images/logos/mc-logo-example.webp'],
});
add({
  id: 'columbia-logo',
  title: 'Columbia College',
  category: 'logos',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: '/images/logos/cc-logo-example.webp',
  images: ['/images/logos/cc-logo-example.webp'],
});
add({
  id: 'smartt-logo',
  title: 'Smartt',
  category: 'logos',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: '/images/logos/smartt-logo-example.webp',
  images: ['/images/logos/smartt-logo-example.webp'],
});
add({
  id: 'ctd-logo',
  title: 'Connect the Doc',
  category: 'logos',
  year: '2011',
  description: 'Design / Development',
  thumbnail: '/images/logos/ctd-logo-example.webp',
  images: ['/images/logos/ctd-logo-example.webp'],
});

// --- BRANDING ---
add({
  id: 'clans-manual',
  title: 'MW5: Clans Game Manual',
  category: 'branding',
  year: '2024',
  description: 'Design / Development',
  thumbnail: brandingJson.clansGameManual[0],
  images: brandingJson.clansGameManual,
});
add({
  id: 'mercs-manual',
  title: 'MW5: Mercs Game Manual',
  category: 'branding',
  year: '2021',
  description: 'Design / Art Direction',
  thumbnail: brandingJson.mercsGameManual[0],
  images: brandingJson.mercsGameManual,
});
add({
  id: 'technical-manual',
  title: 'MW5: Mercs Technical Manual',
  category: 'branding',
  year: '2021',
  description: 'Design / Art Direction',
  thumbnail: brandingJson.technicalManual[0],
  images: brandingJson.technicalManual,
});
add({
  id: 'mw5-dev-tee',
  title: 'MW5 Mercenaries Tees',
  category: 'branding',
  year: '2020',
  description: 'Design / Print / Art Direction',
  thumbnail: brandingJson.mw5DevTee[0],
  images: brandingJson.mw5DevTee,
});
add({
  id: 'mw5-box',
  title: 'MW5 Mercenaries Classic Box',
  category: 'branding',
  year: '2018',
  description: 'Design / Print',
  thumbnail: '/images/branding/mw5-box-art.webp',
  images: ['/images/branding/mw5-box-art.webp'],
});
add({
  id: 'mechcon-event',
  title: 'Mech_Con Event',
  category: 'branding',
  year: '2018',
  description: 'Design / Print',
  thumbnail: mechconPrint[0],
  images: mechconPrint,
});
add({
  id: 'columbia-brand',
  title: 'Columbia College Brand Guide',
  category: 'branding',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: brandingJson.columbiaBrandGuidelines[0],
  images: brandingJson.columbiaBrandGuidelines,
});
add({
  id: 'sierra-wireless',
  title: 'Sierra Wireless Ad',
  category: 'branding',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: '/images/branding/sierra-wireless-ad.webp',
  images: ['/images/branding/sierra-wireless-ad.webp'],
});
add({
  id: 'smartt-brand',
  title: 'Smartt Branding',
  category: 'branding',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: smarttImages[0],
  images: smarttImages,
});

// --- ILLUSTRATION ---
add({
  id: 'mw5c-art',
  title: 'MechWarrior 5: Clans Art',
  category: 'illustration',
  year: '2025',
  description: 'Key Art Direction',
  thumbnail: clansArt[0],
  images: clansArt,
});
add({
  id: 'mw5c-tow-art',
  title: 'MW5 Clans: Trials of War',
  category: 'illustration',
  year: '2024',
  description: 'Key Art / Art Direction',
  thumbnail: '/images/illustration/MW5C_TOW_KA_16x9.webp',
  images: ['/images/illustration/MW5C_TOW_KA_16x9.webp'],
  url: 'https://mw5clans.com/dlc/trials-of-war',
});
add({
  id: 'mwol-art',
  title: 'MWO Legends Art',
  category: 'illustration',
  year: '2023',
  description: 'Design / Art Direction',
  thumbnail: '/images/illustration/mwo-legends-art-atlas.webp',
  images: ['/images/illustration/mwo-legends-art-atlas.webp'],
});
add({
  id: 'xmas-2021',
  title: 'Xmas Card 2021',
  category: 'illustration',
  year: '2021',
  description: 'Personal Illustration',
  thumbnail: '/images/illustration/xmas-card-2.webp',
  images: ['/images/illustration/xmas-card-2.webp'],
});
add({
  id: 'mercs-tee-art',
  title: 'MW5 Mercs Dev Tee',
  category: 'illustration',
  year: '2020',
  description: 'Design / Art Direction',
  thumbnail: '/images/illustration/mw5mercs-tee-design.webp',
  images: ['/images/illustration/mw5mercs-tee-design.webp'],
});
add({
  id: 'xmas-2020',
  title: 'Xmas Card 2020',
  category: 'illustration',
  year: '2020',
  description: 'Personal Illustration',
  thumbnail: '/images/illustration/xmas-card-1.jpg',
  images: ['/images/illustration/xmas-card-1.jpg'],
});
add({
  id: 'mw5-vector',
  title: 'MechWarrior 5 Branding Illustration',
  category: 'illustration',
  year: '2018',
  description: 'Vector / Art Direction',
  thumbnail: '/images/illustration/vector-art-mw5.svg',
  images: ['/images/illustration/vector-art-mw5.svg'],
});

// --- ICONS ---
add({
  id: 'mwo-player-icons',
  title: 'MWO Player Icons',
  category: 'icons',
  year: '2024',
  description: `${mwoIcons.length} icons · Design / Art Direction`,
  thumbnail: mwoIcons[0],
  images: mwoIcons,
});
add({
  id: 'mw5c-icon',
  title: 'MW5: Clans Icon',
  category: 'icons',
  year: '2024',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-clans-icon.webp',
  images: ['/images/icons/mw5-clans-icon.webp'],
});
add({
  id: 'ss-icon',
  title: 'Solaris Icon',
  category: 'icons',
  year: '2024',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-dlc6-icon.webp',
  images: ['/images/icons/mw5-dlc6-icon.webp'],
});
add({
  id: 'tdg-icon',
  title: 'The Dragons Gambit Dragon',
  category: 'icons',
  year: '2023',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-dlc5-icon.webp',
  images: ['/images/icons/mw5-dlc5-icon.webp'],
});
add({
  id: 'mwo-atlas-icon',
  title: 'MWO Atlas Icon',
  category: 'icons',
  year: '2023',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mwo-icon.webp',
  images: ['/images/icons/mwo-icon.webp'],
});
add({
  id: 'ror-icon',
  title: 'Rise of Rasalhague Serpent',
  category: 'icons',
  year: '2022',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-dlc4-icon.webp',
  images: ['/images/icons/mw5-dlc4-icon.webp'],
});
add({
  id: 'lotkl-icon',
  title: 'Legends of the Kestrel Lancers Bird',
  category: 'icons',
  year: '2021',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-dlc2-icon.webp',
  images: ['/images/icons/mw5-dlc2-icon.webp'],
});
add({
  id: 'mw5-icon',
  title: 'MechWarrior 5',
  category: 'icons',
  year: '2019',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/mw5-icon.webp',
  images: ['/images/icons/mw5-icon.webp'],
});
add({
  id: 'smartt-a',
  title: 'Smartt A',
  category: 'icons',
  year: '2012',
  description: 'Design / Art Direction',
  thumbnail: '/images/icons/smartt-icon.webp',
  images: ['/images/icons/smartt-icon.webp'],
});

// Sort newest first
const yearOf = (s) => parseInt(String(s).match(/\d{4}/g)?.pop() ?? '0', 10);
items.sort((a, b) => yearOf(b.year) - yearOf(a.year));

fs.writeFileSync(
  path.join(root, 'data/gallery-items.json'),
  JSON.stringify(items, null, 2)
);
const counts = items.reduce(
  (a, i) => ((a[i.category] = (a[i.category] || 0) + 1), a),
  {}
);
console.log('Wrote', items.length, 'items');
console.log('Categories:', counts);
