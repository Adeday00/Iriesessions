export type ContentItem = {
  title: string;
  slug: string;
  category: "session" | "release" | "artifact" | "opportunity" | "project";
  kicker: string;
  image: string;
  imageFit?: "cover" | "contain";
  summary: string;
  body: string;
  href: string;
  metadata: string[];
  links?: LinkItem[];
  commerce?: CommerceItem;
  embed?: {
    type: "spotify" | "youtube";
    src: string;
    title: string;
  };
  embeds?: {
    type: "spotify" | "youtube";
    src: string;
    title: string;
  }[];
  gallery?: {
    src: string;
    label: string;
    alt?: string;
  }[];
};

export type CommerceVariant = {
  id: string;
  shopifyVariantId?: string;
  label: string;
  price: string;
  available: boolean;
};

export type CommerceItem = {
  status: "available" | "comingSoon" | "soldOut";
  price?: string;
  note?: string;
  variants?: CommerceVariant[];
};

export type LinkItem = {
  label: string;
  href: string;
  kind: "social" | "dsp" | "video" | "contact" | "smartlink";
};

export const socialLinks: LinkItem[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/iriesessions",
    kind: "social",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@irieglobal",
    kind: "social",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@IRIEGLOBAL/videos",
    kind: "video",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/2GGYWtloD2KYh0Ha6cAjsJ",
    kind: "dsp",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/irie-sessions/1621587929",
    kind: "dsp",
  },
  {
    label: "Audiomack",
    href: "https://audiomack.com/iriesessions",
    kind: "dsp",
  },
  {
    label: "Email",
    href: "mailto:info@iriesessions.global",
    kind: "contact",
  },
];

export const navItems = [
  { label: "Sessions", href: "/sessions" },
  { label: "Music", href: "/music" },
  { label: "Journal", href: "/journal" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const sessionArchive = (slug: string) =>
  [
    "Arrival",
    "Faces",
    "Room energy",
    "In motion",
    "Detail",
    "Closing frame",
  ].map((label, index) => ({
    src: `/media/sessions/${slug}/${String(index + 1).padStart(2, "0")}.jpg`,
    label,
  }));

export const sessions: ContentItem[] = [
  {
    title: "IRIE Sessions - June 29, 2018",
    slug: "irie-sessions-june-29-2018",
    category: "session",
    kicker: "June 29, 2018 / Madame X / New York City",
    image: "/media/sessions/june-29-2018/cover.jpg",
    imageFit: "contain",
    summary:
      "The second edition of IRIE Sessions, where music sparked conversation and strangers became community.",
    body:
      "The second edition of IRIE Sessions transformed Madame X into a vibrant gathering where music sparked conversation and strangers became community. Soundtracked by Suav, OB1, Khorey & Torey, and Auntie Gabija, with Ronami and No Noise hosting the night, the evening celebrated the sounds of the African diaspora and the spirit of collaboration that continues to define IRIE today.",
    href: "/sessions/irie-sessions-june-29-2018",
    metadata: ["New York City", "Madame X", "IRIE Sessions"],
    gallery: sessionArchive("june-29-2018"),
  },
  {
    title: "IRIE Sessions - July 20, 2018",
    slug: "irie-sessions-july-20-2018",
    category: "session",
    kicker: "July 20, 2018 / The Vinyl / New York City",
    image: "/media/sessions/july-20-2018/cover.jpg",
    imageFit: "contain",
    summary:
      "The third edition brought the community back together for music, discovery, and connection.",
    body:
      "The third edition of IRIE Sessions brought the community to The Vinyl for another night of music, discovery, and connection. Led by DJ Tunez, alongside DJ Suav, Khorey + Torey, and Young Wavy Fox, the evening carried the energy of the African diaspora from the first record to the last. More than a lineup, it was a room full of people exchanging ideas, building relationships, and celebrating the culture that continues to bring us together.",
    href: "/sessions/irie-sessions-july-20-2018",
    metadata: ["New York City", "The Vinyl", "DJ Tunez"],
    gallery: sessionArchive("july-20-2018"),
  },
  {
    title: "IRIE Sessions - August 23, 2018",
    slug: "irie-sessions-august-23-2018",
    category: "session",
    kicker: "August 23, 2018 / Williamsburg Hotel / New York City",
    image: "/media/sessions/august-23-2018/cover.jpg",
    imageFit: "contain",
    summary:
      "A rooftop gathering centered around global music, community, and summer-night connection.",
    body:
      "For the fourth edition, we brought a fresh energy to The Williamsburg Hotel, hosting the rooftop's first cultural gathering centered around global music and community. Austin Millz, Eli Fola, DJ Suav, KittySayWord, and special guest violinist MAPY set the tone for a summer night filled with good people, great conversations, and sounds that traveled far beyond one place. It was another reminder that the best communities are built one gathering at a time.",
    href: "/sessions/irie-sessions-august-23-2018",
    metadata: ["New York City", "Williamsburg Hotel", "Rooftop"],
    gallery: sessionArchive("august-23-2018"),
  },
  {
    title: "Wicked Fright Night",
    slug: "wicked-fright-night-2018",
    category: "session",
    kicker: "October 31, 2018 / Williamsburg Hotel / New York City",
    image: "/media/sessions/wicked-fright-night-2018/cover.jpg",
    imageFit: "contain",
    summary:
      "A Halloween celebration for more than 1,000 guests, blending costumes, music, and culture.",
    body:
      "Halloween took on a new identity as IRIE Sessions transformed The Williamsburg Hotel Ballroom into a celebration for more than 1,000 guests. Blending costumes, music, and culture under one roof, the night featured DJ Tunez alongside Bobby Ishak, Ameme, and Zack Zannini, creating an atmosphere that felt equal parts Halloween party and cultural gathering. From the first costume to the final song, Wicked Fright Night proved that community could be built anywhere, even on the biggest night of the year.",
    href: "/sessions/wicked-fright-night-2018",
    metadata: ["New York City", "Halloween", "1,000+ guests"],
    gallery: sessionArchive("wicked-fright-night-2018"),
  },
  {
    title: "A Day in the Life",
    slug: "a-day-in-the-life-2019",
    category: "session",
    kicker: "January 10, 2019 / PUBLIC Hotel / New York City",
    image: "/media/sessions/day-in-life-2019/cover.jpg",
    imageFit: "contain",
    summary:
      "A birthday gathering that became a meeting point for more than 800 members of New York's creative community.",
    body:
      "To celebrate founder Aday's birthday, IRIE Sessions took over Public Arts at PUBLIC Hotel for a night that brought together more than 800 creatives, artists, and tastemakers under one roof. Soundtracked by KittySayWord, Rich Boss, Angel, Dren, and Suav, the evening became a meeting point for New York's creative community, with appearances from Michael Brun, Justine Skye, GoldLink, and more. More than a birthday celebration, A Day in the Life reflected what IRIE has always been about: creating spaces where culture, community, and collaboration happen naturally.",
    href: "/sessions/a-day-in-the-life-2019",
    metadata: ["New York City", "PUBLIC Hotel", "800+ guests"],
    gallery: sessionArchive("day-in-life-2019"),
  },
  {
    title: "Home Is Where the Love Is",
    slug: "home-is-where-the-love-is",
    category: "session",
    kicker: "June 7, 2019 / Mailroom / New York City",
    image: "/media/sessions/home-is-where-love-is-2019/cover.jpg",
    imageFit: "contain",
    summary:
      "An interdisciplinary exhibition celebrating photographers, filmmakers, designers, storytellers, and musicians.",
    body:
      "IRIE Sessions expanded beyond music with an evening that celebrated the people shaping culture across disciplines. Hosted at Mailroom NYC, the gathering brought together photographers, filmmakers, designers, storytellers, and musicians through a curated exhibition featuring Amarachi Nwosu, Anaka, Flo Ngala, Prince Aday, Sooflight, Travis Matthews, and Unscripted Moments, alongside sounds by Angel + Dren, KittySayWord, and Sounds of Reality. From documentary photography and visual storytelling to contemporary art and conversation, the night reflected IRIE's belief that culture grows when different creative worlds share the same room.",
    href: "/sessions/home-is-where-the-love-is",
    metadata: ["New York City", "Mailroom", "Exhibition"],
    gallery: sessionArchive("home-is-where-love-is-2019"),
  },
  {
    title: "IRIE Sessions 2nd Anniversary",
    slug: "irie-sessions-second-anniversary",
    category: "session",
    kicker: "July 19, 2019 / Mailroom / New York City",
    image: "/media/sessions/second-anniversary-2019/cover.jpg",
    imageFit: "contain",
    summary:
      "Two years of community, connection, and the movement built around culture.",
    body:
      "Two years after its founding, IRIE Sessions celebrated its 2nd Anniversary with a night that honored the community built along the way. Hosted by DJ Tunez, with sets from DJ Khalil, DJ Hol' Up, DJ Tee Marie, popularly known as Nomi, and DJ Rich Boss, the gathering brought together artists, creatives, and music lovers for an evening rooted in connection and celebration. More than an anniversary, it marked a growing movement, proof that when people gather around culture, lasting communities are created.",
    href: "/sessions/irie-sessions-second-anniversary",
    metadata: ["New York City", "2nd anniversary", "Mailroom"],
    gallery: sessionArchive("second-anniversary-2019"),
  },
  {
    title: "IRIE Sessions - NYFW Finale",
    slug: "irie-sessions-nyfw-finale-2019",
    category: "session",
    kicker: "September 13, 2019 / Freehold Brooklyn / New York City",
    image: "/media/sessions/nyfw-finale-2019/cover.jpg",
    imageFit: "contain",
    summary:
      "A New York Fashion Week finale where fashion, music, and visual culture shared the spotlight.",
    body:
      "Closing out New York Fashion Week, IRIE Sessions transformed Freehold Brooklyn into a gathering where fashion, music, and visual culture shared the spotlight. The evening featured DJ Tunez, the official DJ for Wizkid, alongside Eli Fola, GabSoul, one of New York's leading curators of global sounds, and Suav. Guests also experienced a special exhibition from acclaimed fashion photographer Tracy Bailey Jr., whose work has documented some of fashion's most recognizable faces and campaigns. Together, the night reflected IRIE's belief that the most memorable cultural moments happen when music, art, and creative communities come together under one roof.",
    href: "/sessions/irie-sessions-nyfw-finale-2019",
    metadata: ["New York City", "NYFW", "Freehold Brooklyn"],
    gallery: sessionArchive("nyfw-finale-2019"),
  },
  {
    title: "Wicked Fright Night II",
    slug: "wicked-fright-night-ii",
    category: "session",
    kicker: "November 1, 2019 / Williamsburg Hotel / Brooklyn",
    image: "/media/sessions/wicked-fright-night-ii-2019/cover.jpg",
    imageFit: "contain",
    summary:
      "The second chapter of one of Brooklyn's most anticipated Halloween celebrations.",
    body:
      "Following the success of the previous year, IRIE Sessions returned to The Williamsburg Hotel Ballroom for the second edition of Wicked Fright Night, bringing together another packed house for one of Brooklyn's most anticipated Halloween celebrations. The evening featured a special live set from NY Theo, Theophilus London, alongside Khalil, Mike Nasty, The Large, Tobz, and Suav, blending music, fashion, and creative expression into one unforgettable night. More than a Halloween party, Wicked Fright Night II continued IRIE's tradition of creating spaces where culture, community, and celebration come together.",
    href: "/sessions/wicked-fright-night-ii",
    metadata: ["Brooklyn", "Halloween", "Live set"],
    gallery: sessionArchive("wicked-fright-night-ii-2019"),
  },
  {
    title: "Transitions (Live)",
    slug: "transitions-live",
    category: "session",
    kicker: "September 4, 2021 / Mission / New York City",
    image: "/media/sessions/transitions-live-2021/cover.jpg",
    imageFit: "contain",
    summary:
      "An all-women lineup and a purposeful return supporting Haiti earthquake relief.",
    body:
      "Transitions (Live) marked the return of IRIE Global with an evening where purpose and community came together. Hosted at Mission NYC, the event featured an all-women lineup led by Angel x Dren, AQ, GabSoul, Mohogany, and Siobhan Bell, alongside The Large, while raising support for Haiti earthquake relief. The night also welcomed special guest appearances from Metro Boomin and other artists, turning the gathering into a celebration of generosity, creativity, and connection. More than a comeback, Transitions reflected IRIE's belief that when culture leads with intention, community always follows.",
    href: "/sessions/transitions-live",
    metadata: ["New York City", "Haiti relief", "All-women lineup"],
    gallery: sessionArchive("transitions-live-2021"),
  },
  {
    title: "BORDERS: The Soundscaping Series",
    slug: "borders-soundscaping-series",
    category: "session",
    kicker: "February 2, 2022 / Lagos, Nigeria",
    image: "/media/sessions/borders-soundscaping-2022/cover.jpg",
    summary:
      "An immersive live performance bringing the BORDERS EP beyond the studio.",
    body:
      "To celebrate the release of the BORDERS EP, IRIE Sessions debuted BORDERS: The Soundscaping Series, an immersive live performance that brought the project to life beyond the studio. Executive produced by Grammy-nominated producer Chopstix and Aday, ADAYLIVING, the evening featured live performances from Chopstix, Yung L, Minz, Ria Sean, and more, with DJ Obi curating the soundtrack between performances. Blending music, cinematic storytelling, and immersive production, BORDERS introduced a new chapter for IRIE Sessions, one where every release becomes a shared cultural experience.",
    href: "/sessions/borders-soundscaping-series",
    metadata: ["Lagos", "BORDERS", "Live performance"],
    gallery: sessionArchive("borders-soundscaping-2022"),
  },
  {
    title: "IRIE Homecoming",
    slug: "irie-homecoming-2022",
    category: "session",
    kicker: "July 28, 2022 / The Jane Hotel / New York City",
    image: "/media/sessions/homecoming-2022/cover.jpg",
    imageFit: "contain",
    summary:
      "A homecoming shaped by nostalgia, connection, and the sounds that brought the community back together.",
    body:
      "IRIE Homecoming welcomed the community back to New York with an evening inspired by nostalgia, connection, and the sounds that shaped a generation. Headlined by Jamaican artist Projexx, alongside Angel + Dren, Givijin, Odalys, and YB, the night brought together music lovers, creatives, and familiar faces under one roof. The evening was co-hosted by journalist Ivie Ani, journalist and radio personality Ivy Rivera, and The Jane, creating a space where culture, conversation, and community met effortlessly. More than a homecoming, it was a reminder that no matter where life takes us, the best moments begin when we come back together.",
    href: "/sessions/irie-homecoming-2022",
    metadata: ["New York City", "The Jane Hotel", "Projexx"],
    gallery: sessionArchive("homecoming-2022"),
  },
  {
    title: "IRIE Global Los Angeles",
    slug: "irie-global-los-angeles",
    category: "session",
    kicker: "July 6, 2023 / Apotheke / Los Angeles",
    image: "/media/sessions/los-angeles-2023/cover.jpg",
    summary:
      "IRIE's Los Angeles debut, introducing a new creative community to the platform's global sound.",
    body:
      "IRIE Sessions made its Los Angeles debut, introducing the city's creative community to the culture and energy that had been building across New York and beyond. Held at Apotheke LA, the evening featured Mike Hector, the Grammy Award-winning producer and songwriter behind records for artists including Doja Cat and Leon Thomas, alongside Noodles, Kehlani's longtime tour DJ, Quinn Blake, a rising force in Los Angeles' underground dance scene, and Tomi Tribe, founder of the Lagos 2 LA concert series and one of the city's leading voices in Afrobeats. Together, they welcomed a new chapter for IRIE, proving that no matter the city, music remains one of the strongest ways to build community.",
    href: "/sessions/irie-global-los-angeles",
    metadata: ["Los Angeles", "Apotheke", "City debut"],
    gallery: sessionArchive("los-angeles-2023"),
  },
  {
    title: "Coast to Coast",
    slug: "coast-to-coast-grammy-weekend",
    category: "session",
    kicker: "November 3, 2023 / Los Angeles + New York City",
    image: "/media/sessions/coast-to-coast-2023/cover.jpg",
    imageFit: "contain",
    summary:
      "Two simultaneous Grammy Weekend gatherings connecting creative communities across the country.",
    body:
      "During Grammy Weekend, IRIE Sessions delivered its first coast-to-coast activation, creating two intimate experiences that brought together artists, executives, and creatives on opposite sides of the country. In Los Angeles, APT 200 was hosted by Nissi, with music from Mode Nads, Mona Sed, and global music producer Meska of Jugglerz, offering a space for meaningful conversations beyond the industry's biggest stage. At the same time in New York City, IRIE partnered with GabSoul to curate Riddim & Soul at Dumbo House, hosted by Alex Mali with sounds by Angel + Dren, GabSoul, and Mohogany. More than two events, the simultaneous gatherings reflected IRIE's growing global vision: creating intentional spaces where culture, collaboration, and community thrive, proving that meaningful connections are not defined by geography, but by the people in the room.",
    href: "/sessions/coast-to-coast-grammy-weekend",
    metadata: ["Grammy Weekend", "Los Angeles", "New York City"],
    gallery: sessionArchive("coast-to-coast-2023"),
  },
  {
    title: "Culture Shock",
    slug: "culture-shock",
    category: "session",
    kicker: "July 4, 2024 / London, England",
    image: "/media/sessions/culture-shock-london-2024/cover.jpg",
    imageFit: "contain",
    summary:
      "IRIE's first United Kingdom collaboration, connecting London, Lagos, and beyond.",
    body:
      "Culture Shock marked IRIE Sessions' first collaborative activation in the United Kingdom, produced alongside No Noise and presented with support from Eventbrite UK. Held in London, the evening brought together music, conversation, and community through an intimate program featuring Grammy-nominated producer Chopstix, moderated by BBC Radio 1Xtra presenter Issra, with performances from Denz, Jameela Elfaki, Jamo Beatz, Mode Nads, and Ngozi Diamond. More than a panel or showcase, Culture Shock created a space where artists, producers, and creatives exchanged ideas, celebrated African creativity, and strengthened cultural ties between London, Lagos, and beyond - continuing IRIE's mission of building community through collaboration.",
    href: "/sessions/culture-shock",
    metadata: ["London", "Eventbrite UK", "No Noise"],
    gallery: sessionArchive("culture-shock-london-2024"),
  },
  {
    title: "BAYO x IRIE — NY Homecoming",
    slug: "ny-homecoming-nyfw-pop-up",
    category: "session",
    kicker: "September 8, 2024 / AVA Galerie / New York City",
    image: "/media/sessions/bayo-x-irie-2024/cover.jpg",
    summary:
      "A New York Fashion Week pop-up celebrating fashion, design, music, and community.",
    body:
      "During New York Fashion Week, IRIE Sessions returned home with NY Homecoming, a one-day pop-up celebrating creativity through fashion, design, and community. Hosted at AVA Galerie, the event debuted a limited-edition capsule collection produced across Paris, London, New York, and beyond, bringing together creatives, collectors, and supporters in an intimate setting. The afternoon was soundtracked by Deja Monet, known for her work across fashion, luxury, and New York's creative scene, while guests enjoyed an open bar presented by BSB Whiskey and Ten To One Rum. More than a product launch, NY Homecoming reflected IRIE's evolving vision of building cultural experiences where fashion, music, and community exist as one.",
    href: "/sessions/ny-homecoming-nyfw-pop-up",
    metadata: ["New York City", "NYFW", "BAYO x IRIE"],
    gallery: sessionArchive("bayo-x-irie-2024"),
  },
  {
    title: "Culture Shock: 4th Quarter Roses",
    slug: "culture-shock-fourth-quarter-roses",
    category: "session",
    kicker: "October 24, 2024 / London, England",
    image: "/media/sessions/culture-shock-q4-2024/cover.jpg",
    imageFit: "contain",
    summary:
      "An intimate evening of conversation, dinner, sound, and connection with London's creative community.",
    body:
      "As the second chapter of Culture Shock, IRIE Sessions and No Noise partnered with Eventbrite UK to bring together some of London's leading cultural curators, music executives, founders, and creative communities for an intimate evening of conversation, dinner, and connection. The gathering welcomed representatives from collectives including BLT Brunch and other influential voices shaping the city's creative landscape, creating space for meaningful dialogue on the future of community and cultural experiences. Guests were joined by Eastwood Danso - fashion designer and DJ - alongside AAA, Malix, and Vivendi Sound, before the evening transitioned into a private afterparty celebrating the relationships formed around the table. More than an event, 4th Quarter Roses reflected IRIE's belief that the strongest creative ecosystems are built when conversation comes first and collaboration follows.",
    href: "/sessions/culture-shock-fourth-quarter-roses",
    metadata: ["London", "Eventbrite UK", "Dinner + conversation"],
    gallery: sessionArchive("culture-shock-q4-2024"),
  },
  {
    title: "IRIE Global Paris",
    slug: "irie-global-paris-january-2026",
    category: "session",
    kicker: "January 10, 2026 / Paris, France",
    image: "/media/sessions/paris-january-2026/cover.jpg",
    imageFit: "contain",
    summary:
      "IRIE's Paris debut and the beginning of a new home for the community in Europe.",
    body:
      "IRIE Sessions made its Paris debut with an intimate late-night gathering that also marked the official birthday celebration of founder Aday, ADAYLIVING. Bringing together Paris' growing community of artists, creatives, and members of the African diaspora, the evening introduced IRIE's next chapter in Europe through music, conversation, and connection. Soundtracked by Eastwood Danso - fashion designer and DJ - alongside Ngozi Diamond and Vivendi Sound, the night reflected the global spirit that has come to define IRIE. More than a first event in a new city, it was the beginning of a new home for the community and another milestone in IRIE's mission to create spaces where culture, collaboration, and meaningful relationships can thrive.",
    href: "/sessions/irie-global-paris-january-2026",
    metadata: ["Paris", "City debut", "ADAYLIVING"],
    gallery: sessionArchive("paris-january-2026"),
  },
  {
    title: "IRIE Global Paris — Soho House Preview",
    slug: "irie-global-paris-soho-house-preview",
    category: "session",
    kicker: "March 6, 2026 / Soho House Paris / France",
    image: "/media/sessions/paris-soho-house-2026/cover.jpg",
    imageFit: "contain",
    summary:
      "An intimate pre-launch gathering for BORDERS: The Visualscaping Zine.",
    body:
      "Ahead of the public launch of BORDERS: The Visualscaping Zine, IRIE and Soho House Paris hosted an intimate preview for artists, founders, and members of the city's creative community. Soundtracked by Shifa Ligero and RONI, the evening created room for conversation around art, diaspora, migration, collaboration, and creative freedom—the ideas at the heart of the publication. The preview stands as its own gathering: a first look at the printed work and a quiet opening chapter before the exhibition moved into the city the following day.",
    href: "/sessions/irie-global-paris-soho-house-preview",
    metadata: ["Paris", "Soho House", "Publication preview"],
    gallery: sessionArchive("paris-soho-house-2026"),
  },
  {
    title: "BORDERS: The Visualscaping Zine — Paris",
    slug: "borders-visualscaping-zine-launch",
    category: "session",
    kicker: "March 7, 2026 / Union de la Jeunesse Internationale / Paris",
    image: "/media/sessions/borders-zine-paris-2026/cover.jpg",
    summary:
      "The public Paris launch of IRIE's debut publication through exhibition and live performance.",
    body:
      "The public launch of BORDERS: The Visualscaping Zine transformed Union de la Jeunesse Internationale into an immersive exhibition where photography, storytelling, and live performance converged. Curated by founder Aday, ADAYLIVING, the publication explores art, diaspora, migration, collaboration, and creative freedom. A live performance by Olga Kiav extended those themes through memory, movement, and identity, turning the printed object into a shared cultural experience.",
    href: "/sessions/borders-visualscaping-zine-launch",
    metadata: ["Paris", "Publication launch", "Live exhibition"],
    gallery: sessionArchive("borders-zine-paris-2026"),
  },
  {
    title: "Be There Weekly",
    slug: "be-there-weekly",
    category: "session",
    kicker: "BTW / Community room",
    image: "/media/btw-02.jpg",
    imageFit: "contain",
    summary:
      "A recurring Irie room built around sound, guests, and the visual memory of showing up week after week.",
    body:
      "Be There Weekly sits inside the archive as more than a flyer. The room, the people, the stills, and the atmosphere carry the story after each weekly gathering passes.",
    href: "/sessions/be-there-weekly",
    metadata: ["BTW", "Community", "Weekly room"],
    gallery: [
      { src: "/media/btw-01.jpg", label: "Be There Weekly poster" },
      { src: "/media/btw-photo-01.jpg", label: "Room frame" },
      { src: "/media/btw-photo-02.jpg", label: "Live moment" },
      { src: "/media/btw-photo-03.jpg", label: "Guest memory" },
      { src: "/media/btw-photo-04.jpg", label: "Night detail" },
      { src: "/media/btw-photo-05.jpg", label: "Archive frame" },
      { src: "/media/btw-photo-06.jpg", label: "Closing image" },
      { src: "/media/btw-live-01.jpg", label: "Weekly room" },
      { src: "/media/btw-live-02.jpg", label: "Dance floor" },
      { src: "/media/btw-live-03.jpg", label: "Crowd detail" },
      { src: "/media/btw-live-04.jpg", label: "Host moment" },
      { src: "/media/btw-live-05.jpg", label: "Guest arrival" },
      { src: "/media/btw-live-06.jpg", label: "In the room" },
      { src: "/media/btw-live-07.jpg", label: "Night texture" },
      { src: "/media/btw-live-08.jpg", label: "Portrait" },
      { src: "/media/btw-live-09.jpg", label: "Weekly proof" },
      { src: "/media/btw-live-10.jpg", label: "Last call" },
    ],
  },
];

export const releases: ContentItem[] = [
  {
    title: "Lust on the Coast",
    slug: "lust-on-the-coast",
    category: "release",
    kicker: "Apr 25, 2025 / Album",
    image: "/media/lust-on-the-coast.jpg",
    summary:
      "An escape, a coastal feeling, and a sonic passport to wherever feels like home.",
    body:
      "LUST On The Coast was executive produced by Irie Sessions founder Aday alongside Grammy Award-winning producer Chopstix. It began on the shores of Puerto Escondido, Mexico, where the days moved slower, the nights stretched longer, and every sound carried a different kind of freedom. Following the release of BORDERS, Aday arrived in search of something he couldn't quite name. He left with Island Disco, a meeting point between African and Caribbean rhythms, Pop, and Disco. The project's opening record, Was I Not The Man, became the first expression of that idea, laying the foundation for the sound that followed. Featuring Zen Univrse, Niels, Le Mav, Mellissa, Deyon Agoi, Decalyn, and D'Phlowz, LUST On The Coast captures the feeling of movement, discovery, and making music without borders.",
    href: "/music/lust-on-the-coast",
    metadata: ["Island Disco", "Album", "Released Apr 25, 2025", "7 songs"],
    gallery: [
      { src: "/media/lotc-bts-01.jpg", label: "Lust on the Coast" },
      { src: "/media/lotc-bts-02.jpg", label: "On set" },
      { src: "/media/lotc-bts-03.jpg", label: "Visual world" },
      { src: "/media/lotc-archive-01.jpg", label: "Archive frame" },
      { src: "/media/lotc-archive-02.jpg", label: "Coastal texture" },
      { src: "/media/lotc-archive-03.jpg", label: "Studio memory" },
      { src: "/media/lotc-archive-04.jpg", label: "Night scene" },
      { src: "/media/lotc-archive-05.jpg", label: "Contact sheet" },
      { src: "/media/lotc-archive-06.jpg", label: "Campaign still" },
    ],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/2Wa9nqYyLX8mThNSOsLegQ",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/lust-on-the-coast/1801228443",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/2Wa9nqYyLX8mThNSOsLegQ?utm_source=generator",
      title: "Lust on the Coast on Spotify",
    },
  },
  {
    title: "BORDERS",
    slug: "borders",
    category: "release",
    kicker: "May 6, 2022 / EP + zine",
    image: "/media/borders-cover.jpg",
    summary:
      "An audiovisual exploration of identity in motion, conceived and executive produced by Aday with Chopstix.",
    body:
      "BORDERS began as a question: what exists between where we come from and where we're going? Conceived and executive produced by Aday in collaboration with Grammy-winning producer Chopstix, the project was developed as an audiovisual exploration of identity in motion, where geography dissolves and culture becomes fluid. Irie Sessions did not simply assemble an EP; it built a world around sound as a bridge, curating Krisirie, Skillz 8Figure, Tessellated, BenjiFlow, Ria Sean, Minz, and Yung L as portals into different cultural perspectives. Different accents, rhythms, and emotional textures become one borderless sonic language. The project was designed as a sensory experience: mood-driven lighting, cinematic pacing, and spatial environments that mirror emotional states. The BORDERS Soundscaping Series extends that world into immersive film, where music is not just heard but experienced.",
    href: "/music/borders",
    metadata: ["Afrobeats", "EP", "Released May 6, 2022", "Zine"],
    gallery: [
      { src: "/media/borders-bts-01.jpg", label: "BORDERS session" },
      { src: "/media/borders-bts-02.jpg", label: "Behind the record" },
      { src: "/media/borders-bts-03.jpg", label: "Film still" },
      { src: "/media/borders-legacy-01.jpg", label: "Archive portrait" },
      { src: "/media/borders-legacy-02.jpg", label: "Women Make Things frame" },
      { src: "/media/borders-legacy-03.jpg", label: "Golden portrait" },
      { src: "/media/borders-legacy-04.jpg", label: "Artist frame" },
      { src: "/media/borders-legacy-05.jpg", label: "Room memory" },
      { src: "/media/borders-legacy-06.jpg", label: "Outdoor frame" },
      { src: "/media/borders-legacy-07.jpg", label: "Studio portrait" },
      { src: "/media/borders-legacy-08.jpg", label: "Night portrait" },
      { src: "/media/borders-legacy-09.jpg", label: "Seated portrait" },
      { src: "/media/borders-soundscaping-01.jpg", label: "Soundscaping" },
      { src: "/media/borders-soundscaping-02.jpg", label: "Lagos frame" },
      { src: "/media/borders-soundscaping-03.jpg", label: "Behind the series" },
      { src: "/media/borders-soundscaping-04.jpg", label: "Visual archive" },
      { src: "/media/borders-soundscaping-05.jpg", label: "Production still" },
      { src: "/media/borders-soundscaping-06.jpg", label: "Deeds archive" },
      { src: "/media/borders-archive-03.jpg", label: "Chopstix" },
      { src: "/media/borders-archive-04.jpg", label: "Collaborator frame" },
    ],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/4qVkTUwn51kRQs82Jnktnw",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/borders-ep/1621606862",
        kind: "dsp",
      },
      {
        label: "Soundscaping Film",
        href: "https://youtu.be/b0fiJnOZU-0",
        kind: "video",
      },
    ],
    embed: {
      type: "youtube",
      src: "https://www.youtube.com/embed/b0fiJnOZU-0?start=2",
      title: "BORDERS: The Soundscaping Series",
    },
    embeds: [
      {
        type: "spotify",
        src: "https://open.spotify.com/embed/album/4qVkTUwn51kRQs82Jnktnw?utm_source=generator",
        title: "BORDERS on Spotify",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/b0fiJnOZU-0?start=2",
        title: "BORDERS: The Soundscaping Series",
      },
    ],
  },
  {
    title: "I forgot to press send",
    slug: "i-forgot-to-press-send",
    category: "release",
    kicker: "Nov 14, 2025 / EP",
    image: "/media/iforgot-cover.jpg",
    summary: "A four-track 2025 EP about the late-night messages you almost didn't send.",
    body:
      "A short, after-hours EP built around the things left unsaid — four tracks deep: \"Big Back (Swing Up)\" with Topic Kasente, \"My Love\" with J.E.N.N.Y, \"2 Wrongs\" with WANI, and the closer, \"Sade's Outrolude (The Last Call),\" with Easyscope and Trill Xoe.",
    href: "/music/i-forgot-to-press-send",
    metadata: ["Afrobeats / Alté", "EP", "Released Nov 14, 2025", "4 songs"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/6wPNr0i182CRlQMvWqxiiO?si=NNeZFFiJQVqSo7UpqUvmgQ",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/i-forgot-to-press-send-ep/1847951525",
        kind: "dsp",
      },
      {
        label: "YouTube",
        href: "https://youtube.com/playlist?list=OLAK5uy_kqluCjO8H7_YQssKhHw6OVRY4xSHt3HOY&si=EPlq4ci3KpKKq-M7",
        kind: "video",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/6wPNr0i182CRlQMvWqxiiO?utm_source=generator",
      title: "I forgot to press send on Spotify",
    },
  },
  {
    title: "A.L.T.E",
    slug: "alte",
    category: "release",
    kicker: "Oct 10, 2025 / EP",
    image: "/media/alte-cover.jpg",
    summary: "All Lost Things Evolve, curated and creative directed by Aday Living.",
    body:
      "A.L.T.E, All Lost Things Evolve, is streaming on all digital platforms. The project was curated and creative directed by Aday Living, with all songs written by Omagz and music produced by Duggie.",
    href: "/music/alte",
    metadata: ["Alté", "EP", "Released Oct 10, 2025", "Omagz"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/6thzYXe4DqCgtZMAH8vfx3",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/a-l-t-e-all-lost-things-evolve-ep/1836208468",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/6thzYXe4DqCgtZMAH8vfx3?utm_source=generator",
      title: "A.L.T.E on Spotify",
    },
  },
  {
    title: "2AM",
    slug: "2am",
    category: "release",
    kicker: "Jul 18, 2025 / Single",
    image: "/media/2am-cover.jpeg",
    summary: "Skillz 8Figure and Projexx trade a moody late-night confession across Afrobeats and dancehall.",
    body:
      "\"2AM\" brings Nigerian artist Skillz 8Figure together with Jamaican artist Projexx for an after-hours record — Afrobeats and dancehall meeting in that quiet, restless hour. Atmospheric production and vulnerable writing, built for the solitude and longing that arrive when the night runs late.",
    href: "/music/2am",
    metadata: ["Afrobeats / Dancehall", "Single", "Released Jul 18, 2025", "Skillz 8Figure / Projexx"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/1PC58n8MP6vQwuOdyz01WV",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/2am-single/1822007622",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/1PC58n8MP6vQwuOdyz01WV?utm_source=generator",
      title: "2AM on Spotify",
    },
  },
  {
    title: "Ridiculous Flex",
    slug: "ridiculous-flex",
    category: "release",
    kicker: "Oct 3, 2025 / Single",
    image: "/media/ridiculous-flex-cover.jpeg",
    summary: "A self-assured, cross-genre single with Zen Univrse.",
    body:
      "\"Ridiculous Flex\" pairs Irie Sessions with Zen Univrse for a swaggering, good-time cut — the sound of a night with nothing to prove. Released October 2025.",
    href: "/music/ridiculous-flex",
    metadata: ["Afrobeats", "Single", "Released Oct 3, 2025", "Zen Univrse"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/track/0l9NMqXgPxBYChcNPBqIV5",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/ridiculous-flex-single/1837435476",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/track/0l9NMqXgPxBYChcNPBqIV5?utm_source=generator",
      title: "Ridiculous Flex on Spotify",
    },
  },
  {
    title: "Go outside",
    slug: "go-outside",
    category: "release",
    kicker: "Aug 24, 2023 / Single",
    image: "/media/go-outside-cover.jpg",
    summary: "A 2023 single with Kobi Jonz — and a video shot across Lagos and Los Angeles.",
    body:
      "\"Go Outside\" teams Irie Sessions with Kobi Jonz for a breezy, get-up-and-move single. Its video — directed by Aday Living and shot across Lagos and Los Angeles — carries the track's two-cities, one-feeling energy.",
    href: "/music/go-outside",
    metadata: ["Afrobeats", "Single", "Released Aug 24, 2023", "Kobi Jonz"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/3J49EKlW1qKyTwAt5K2Kij",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/go-outside-single/1701859758",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/3J49EKlW1qKyTwAt5K2Kij?utm_source=generator",
      title: "Go Outside on Spotify",
    },
  },
  {
    title: "Ibiza",
    slug: "ibiza",
    category: "release",
    kicker: "Feb 12, 2024 / Single",
    image: "/media/ibiza-cover.jpg",
    summary: "A sun-soaked Afro-pop single with D'Phlowz, made for the island.",
    body:
      "\"Ibiza\" links Irie Sessions with D'Phlowz for a warm, Afro-pop single — short, bright, and built for the dance floor at golden hour. Released February 2024.",
    href: "/music/ibiza",
    metadata: ["Afro-pop", "Single", "Released Feb 12, 2024", "D'Phlowz"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/6lstxp1MLNbQFuCynrZVWk",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/ibiza-single/1730010933",
        kind: "dsp",
      },
    ],
    embed: {
      type: "spotify",
      src: "https://open.spotify.com/embed/album/6lstxp1MLNbQFuCynrZVWk?utm_source=generator",
      title: "Ibiza on Spotify",
    },
  },
];

export const artifacts: ContentItem[] = [
  {
    title: "BORDERS: The Visualscaping Zine",
    slug: "borders-visualscaping-zine",
    category: "artifact",
    kicker: "Print / Editorial",
    image: "/media/irie-book-cover.jpg",
    summary: "A full-color archival print publication documenting the creative process behind BORDERS.",
    body:
      "A limited first-edition softcover with a matte cover, documenting the making of the 2022 BORDERS EP — executive produced by Aday with Grammy-winning Nigerian producer Chopstix. Photography, layered composition, and sequencing become a record of artistry, diaspora, and collaboration.",
    href: "/shop/borders-visualscaping-zine",
    metadata: ["Full-color print", "Limited edition", "BORDERS"],
    commerce: {
      status: "available",
      price: "$40.00 USD",
      note: "Secure checkout. Shipping details are collected at payment.",
      variants: [
        {
          id: "borders-visualscaping-zine",
          shopifyVariantId: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_BORDERS_ZINE ?? "52564524826917",
          label: "Limited print run",
          price: "$40.00",
          available: true,
        },
      ],
    },
    gallery: [
      {
        src: "/media/irie-book-page-001.jpg",
        label: "Interior spread",
      },
      {
        src: "/media/zine-page.jpg",
        label: "Archive detail",
      },
      {
        src: "/media/book-product-01.jpg",
        label: "Printed object",
      },
      {
        src: "/media/book-product-02.jpg",
        label: "Interior page",
      },
      {
        src: "/media/book-product-03.jpg",
        label: "Interior spread",
      },
    ],
  },
  {
    title: "Women Make Things 10X Better Hat",
    slug: "women-make-things-10x-better-hat",
    category: "artifact",
    kicker: "Merch / Statement",
    image: "/media/hat-black-front.jpg",
    summary: "A limited edition 100% corduroy cotton hat with 3D embroidered Irie text.",
    body:
      "Black corduroy with a classic snap closure, 3D-embroidered statement text, and the Irie logo in white. Ships within 24–48 hours of processing.",
    href: "/shop/women-make-things-10x-better-hat",
    metadata: ["100% corduroy cotton", "Limited edition", "Snap closure"],
    commerce: {
      status: "available",
      price: "$60.00 USD",
      note: "Secure checkout. Shipping details are collected at payment.",
      variants: [
        {
          id: "hat-black-white",
          shopifyVariantId: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_HAT_BLACK_WHITE ?? "49582180696357",
          label: "Black / White Text",
          price: "$60.00",
          available: true,
        },
      ],
    },
    gallery: [
      {
        src: "/media/hat-black-white-text.jpg",
        label: "White text variant",
      },
      {
        src: "/media/hat-product-01.jpg",
        label: "Front detail",
      },
      {
        src: "/media/hat-product-02.jpg",
        label: "Embroidery detail",
      },
      {
        src: "/media/hat-product-03.jpg",
        label: "Side detail",
      },
    ],
  },
  {
    title: "Irie Stud Earrings",
    slug: "irie-stud-earrings",
    category: "artifact",
    kicker: "Merch / Object",
    image: "/media/irie-stud-box.jpg",
    summary: "925 sterling silver stud earrings with sculpted 3D Irie lettering.",
    body:
      "925 sterling silver with a high-polish finish, sculpted 3D Irie lettering, and butterfly backs for pierced ears. Ships within 24–48 hours of processing.",
    href: "/shop/irie-stud-earrings",
    metadata: ["925 sterling silver", "High-polish finish", "Butterfly backs"],
    commerce: {
      status: "available",
      price: "$60.00 USD",
      note: "Secure checkout. Shipping details are collected at payment.",
      variants: [
        {
          id: "irie-stud-earrings",
          shopifyVariantId: process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_IRIE_STUD_EARRINGS ?? "52564609630501",
          label: "925 Sterling Silver",
          price: "$60.00",
          available: true,
        },
      ],
    },
    gallery: [
      {
        src: "/media/irie-earrings.jpg",
        label: "Stud detail",
      },
      {
        src: "/media/earrings-product-01.jpg",
        label: "Product detail",
      },
      {
        src: "/media/earrings-product-02.jpg",
        label: "Gift box",
      },
      {
        src: "/media/earrings-product-03.jpg",
        label: "Worn detail",
      },
    ],
  },
];

export const opportunities: ContentItem[] = [
  {
    title: "Irie Global Grant",
    slug: "irie-global-grant",
    category: "opportunity",
    kicker: "Open call / Artist support",
    image: "/media/irie-paris.jpg",
    summary:
      "Artist support, application windows, and where past grantees ended up.",
    body:
      "The Irie Global Grant backs artists with support, collaboration, and a route to release. Find eligibility, submission windows, and what past cycles produced.",
    href: "/opportunities/irie-global-grant",
    metadata: ["Grant", "Artists", "Reciprocity"],
  },
];

export const projects: ContentItem[] = [
  {
    title: "IRIE Sessions x BAYO",
    slug: "irie-sessions-x-bayo-project",
    category: "project",
    kicker: "2024-2025 / Limited tour merchandise",
    image: "/media/bayo-tour-01.jpg",
    summary:
      "A limited tour merchandise collaboration with BAYO, rooted in Brooklyn, Port-au-Prince, and the rooms where the music lived.",
    body:
      "Rooted in Port-au-Prince and shaped in Brooklyn, Michaël Brun built BAYO into a global celebration of Haitian culture through sound, movement, and community. In 2024-2025, Irie Sessions partnered with BAYO on limited-edition hats released exclusively across Brun's American tour, including his landmark Barclays Center show. The rollout was intentionally scarce: no online release, no restocks, only available in the rooms where the music lived. A product not just to wear, but to remember.",
    href: "/journal/irie-sessions-x-bayo-project",
    metadata: ["BAYO", "Tour merch", "Diaspora"],
    gallery: [
      { src: "/media/bayo-tour-02.jpg", label: "Polaroid direction" },
      { src: "/media/bayo-tour-03.jpg", label: "Cover study" },
      { src: "/media/bayo-tour-04.jpg", label: "Tour visual" },
      { src: "/media/bayo-tour-05.jpg", label: "Archive frame" },
      { src: "/media/bayo-project-01.jpg", label: "Bayo project" },
      { src: "/media/bayo-project-02.jpg", label: "Set detail" },
      { src: "/media/bayo-project-03.jpg", label: "Cover direction" },
      { src: "/media/bayo-project-04.jpg", label: "Campaign still" },
    ],
  },
  {
    title: "Culture Shock x Eventbrite",
    slug: "culture-shock-eventbrite",
    category: "project",
    kicker: "London / Two-part cultural series",
    image: "/media/eventbrite-project-01.jpg",
    summary:
      "A two-part London cultural series curated by IRIE Global and No Noise, powered by Eventbrite.",
    body:
      "Culture Shock was built as an intersection of music, conversation, and community. The first installment introduced the room through live conversation, curated sound, and thoughtful production. The second installment evolved into a more intimate dinner and discussion around London nightlife, community infrastructure, and the platforms that support emerging cultural scenes. The work turned event partnership into a room with memory.",
    href: "/journal/culture-shock-eventbrite",
    metadata: ["Eventbrite", "London", "Partner room"],
    gallery: [
      { src: "/media/eventbrite-project-02.jpg", label: "4th Quarter Roses" },
      { src: "/media/eventbrite-project-03.jpg", label: "Dinner room" },
      { src: "/media/eventbrite-project-04.jpg", label: "Guest table" },
      { src: "/media/eventbrite-project-05.jpg", label: "Conversation" },
      { src: "/media/eventbrite-project-06.jpg", label: "Roses" },
      { src: "/media/eventbrite-project-07.jpg", label: "Cultural series" },
      { src: "/media/culture-shock-01.jpg", label: "Culture Shock" },
      { src: "/media/culture-shock-03.jpg", label: "Community frame" },
    ],
  },
  {
    title: "Irie Flyer Wall",
    slug: "irie-flyer-wall",
    category: "project",
    kicker: "Archive / Past rooms",
    image: "/media/flyer-wall-01.jpg",
    summary:
      "A visual wall of early Irie event language: flyers, room signals, and the graphic proof that the platform has been building over time.",
    body:
      "Before the archive becomes polished, it starts as a flyer, a date, a room, and a promise that people will show up. The flyer wall keeps those early signals visible: not as disposable promotion, but as evidence of a platform learning its own visual language through events, collaborators, and community memory.",
    href: "/journal/irie-flyer-wall",
    metadata: ["Flyers", "Archive", "Past events"],
    gallery: [
      { src: "/media/flyer-wall-02.jpg", label: "Flyer 02" },
      { src: "/media/flyer-wall-03.jpg", label: "Flyer 03" },
      { src: "/media/flyer-wall-04.jpg", label: "Flyer 04" },
      { src: "/media/flyer-wall-05.jpg", label: "Flyer 05" },
      { src: "/media/flyer-wall-06.jpg", label: "Flyer 06" },
      { src: "/media/flyer-wall-07.jpg", label: "Flyer 07" },
    ],
  },
];

export const allItems = [...sessions, ...releases, ...artifacts, ...opportunities, ...projects];

export const archiveItems = [
  ["BORDERS", "EP / Zine", "2022", "/music/borders"],
  ["BORDERS: The Visualscaping Zine", "Print artifact", "2022", "/shop/borders-visualscaping-zine"],
  ["IRIE Sessions x BAYO", "Project", "2024-2025", "/journal/irie-sessions-x-bayo-project"],
  ["Culture Shock x Eventbrite", "Project", "London", "/journal/culture-shock-eventbrite"],
  ["Irie Flyer Wall", "Flyer archive", "Past events", "/journal/irie-flyer-wall"],
  ["Lust on the Coast", "Album", "2025", "/music/lust-on-the-coast"],
  [
    "BORDERS: The Visualscaping Zine — Paris",
    "Session",
    "March 6–7, 2026",
    "/sessions/borders-visualscaping-zine-launch",
  ],
  ["Be There Weekly", "Event", "Archive", "/sessions/be-there-weekly"],
  ["IRIE Global Paris", "Session", "2026", "/sessions/irie-global-paris-january-2026"],
  ["Women Make Things 10X Better", "Merch", "2026", "/shop/women-make-things-10x-better-hat"],
  ["Irie Stud Earrings", "Jewelry", "2026", "/shop/irie-stud-earrings"],
  ["Irie Global Grant", "Opportunity", "2025", "/opportunities/irie-global-grant"],
  ["Culture Shock", "Live Series", "London", "/sessions/culture-shock"],
  ["I forgot to press send", "EP", "2025", "/music/i-forgot-to-press-send"],
  ["A.L.T.E", "EP", "2025", "/music/alte"],
  ["2AM", "Single", "2025", "/music/2am"],
  ["Ridiculous Flex", "Single", "2025", "/music/ridiculous-flex"],
  ["Go outside", "Single", "2023", "/music/go-outside"],
  ["Ibiza", "Single", "2024", "/music/ibiza"],
] as const;

export const featuredArchiveItems = archiveItems.slice(0, 5);

export function getItemBySlug(items: ContentItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}
