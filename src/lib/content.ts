export type ContentItem = {
  title: string;
  slug: string;
  category: "session" | "release" | "artifact" | "opportunity" | "project";
  kicker: string;
  image: string;
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

// Secondary destinations — surfaced in the footer and via in-page CTAs
// rather than the primary nav.
export const footerExtraLinks = [{ label: "Opportunities", href: "/opportunities" }];

export const sessions: ContentItem[] = [
  {
    title: "Soho House Paris",
    slug: "soho-house-paris",
    category: "session",
    kicker: "Paris / Mar 6 / Soho House",
    image: "/media/session-paris-02.jpg",
    summary:
      "An intimate Paris night at Soho House — the launch of Aday's first book, with sets from RONI and Shifa Ligero.",
    body:
      "Held at Soho House Paris on March 6th: Aday's first book, unveiled in the city, with a room curated by A Day Living. The night moved from the book to the music — and we kept the images that prove it happened.",
    href: "/sessions/soho-house-paris",
    metadata: ["Paris", "Book launch", "Soho House"],
    gallery: [
      { src: "/media/session-paris-01.jpg", label: "Women Make Things wall" },
      { src: "/media/session-mar6-01.jpg", label: "Arrival" },
      { src: "/media/session-mar6-02.jpg", label: "Room detail" },
      { src: "/media/session-paris-04.jpg", label: "Soho House Paris" },
      { src: "/media/session-paris-05.jpg", label: "The room" },
      { src: "/media/session-paris-03.jpg", label: "Paris" },
      { src: "/media/session-paris-06.jpg", label: "Line-up" },
      { src: "/media/session-paris-08.jpg", label: "Crowd memory" },
      { src: "/media/session-paris-09.jpg", label: "After dark" },
      { src: "/media/session-paris-10.jpg", label: "Last frame" },
    ],
  },
  {
    title: "Be There Weekly",
    slug: "be-there-weekly",
    category: "session",
    kicker: "BTW / Community room",
    image: "/media/btw-01.jpg",
    summary:
      "A recurring Irie room built around sound, guests, and the visual memory of showing up week after week.",
    body:
      "Be There Weekly sits inside the archive as more than a flyer. The room, the people, the stills, and the atmosphere carry the story after each weekly gathering passes.",
    href: "/sessions/be-there-weekly",
    metadata: ["BTW", "Community", "Weekly room"],
    gallery: [
      { src: "/media/btw-02.jpg", label: "Event artwork" },
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
  {
    title: "January Session",
    slug: "january-session",
    category: "session",
    kicker: "Night session / Archive set",
    image: "/media/session-jan10-01.jpg",
    summary:
      "A night-session archive built from the small details: people arriving, the room filling, and the evidence left behind.",
    body:
      "This session keeps the night in motion through the images around it. It is a compact record of the room, the energy, and the community that makes an Irie event feel lived-in.",
    href: "/sessions/january-session",
    metadata: ["Night session", "Community", "Recap"],
    gallery: [
      { src: "/media/session-jan10-02.jpg", label: "Room energy" },
      { src: "/media/session-jan10-03.jpg", label: "Guest moment" },
      { src: "/media/session-jan10-04.jpg", label: "Archive still" },
      { src: "/media/session-jan10-05.jpg", label: "Last look" },
    ],
  },
  {
    title: "Culture Shock",
    slug: "culture-shock",
    category: "session",
    kicker: "London / Live series",
    image: "/media/session-crowd.jpg",
    summary:
      "Our London live series — a room for new sound, built with the community that fills it.",
    body:
      "Each Culture Shock edition is a London night first and an archive entry second: the lineup, the room, the partners, and the recap all live on here after the doors close.",
    href: "/sessions/culture-shock",
    metadata: ["London", "Live series", "Community room"],
    gallery: [
      { src: "/media/soho-house.jpg", label: "Room reference" },
      { src: "/media/culture-shock-01.jpg", label: "Culture Shock" },
      { src: "/media/culture-shock-02.jpg", label: "Live archive" },
      { src: "/media/culture-shock-03.jpg", label: "Community frame" },
      { src: "/media/culture-shock-04.jpg", label: "Performer detail" },
      { src: "/media/culture-shock-05.jpg", label: "Entrance" },
      { src: "/media/culture-shock-06.jpg", label: "In motion" },
    ],
  },
  {
    title: "Irie Sessions x Bayo",
    slug: "irie-sessions-x-bayo",
    category: "session",
    kicker: "New York / Collaboration",
    image: "/media/collab-michael-brun.jpg",
    summary:
      "A New York collaboration with Bayo — artist-led performance, shot and kept.",
    body:
      "Built with Bayo in New York: the performance, the visual direction, and the credits behind it. The stills and the story stay here as proof of the work, not just the night.",
    href: "/sessions/irie-sessions-x-bayo",
    metadata: ["New York", "Collaboration", "Visual archive"],
    gallery: [
      { src: "/media/bayo-01.jpg", label: "Bayo × Irie" },
      { src: "/media/bayo-polaroid.jpg", label: "Polaroid" },
      { src: "/media/collab-chopstix.jpg", label: "Chopstix" },
      { src: "/media/collab-mohogany.jpg", label: "Mohogany" },
      { src: "/media/bayo-project-01.jpg", label: "Bayo project" },
      { src: "/media/bayo-project-02.jpg", label: "Set detail" },
      { src: "/media/bayo-project-03.jpg", label: "Cover direction" },
      { src: "/media/bayo-project-04.jpg", label: "Archive still" },
    ],
  },
];

export const releases: ContentItem[] = [
  {
    title: "Lust on the Coast",
    slug: "lust-on-the-coast",
    category: "release",
    kicker: "2025 / Album",
    image: "/media/lust-on-the-coast.jpg",
    summary:
      "An escape, a coastal feeling, and a sonic passport to wherever feels like home.",
    body:
      "LUST On The Coast was executive produced by Aday, founder of Irie Sessions, and Grammy-winning producer Chopstix. Born on the shores of Puerto Escondido, Mexico, the project follows Aday's search for new sounds, new motion, and a new way to feel free. From that journey came Island Disco: a fresh, sexy, liberating collision of Afrobeats, Dancehall, Global Pop, and Disco, with Zen Univrse, Niels, Le Mav, Mellissa, Deyon AGOI, Decalyn, and D'Phlowz each bringing their own perspective to the sessions.",
    href: "/music/lust-on-the-coast",
    metadata: ["Album", "2025", "Stream-ready"],
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
    kicker: "2022 / Album + zine",
    image: "/media/borders-cover.jpg",
    summary:
      "An audiovisual exploration of identity in motion, conceived and executive produced by Aday with Chopstix.",
    body:
      "BORDERS began as a question: what exists between where we come from and where we're going? Conceived and executive produced by Aday in collaboration with Grammy-winning producer Chopstix, the project was developed as an audiovisual exploration of identity in motion, where geography dissolves and culture becomes fluid. Irie Sessions did not simply assemble an EP; it built a world around sound as a bridge, bringing together Krisirie, Skillz 8Figure, Tessellated, BenjiFlow, Ria Sean, Minz, and Yung L as portals into different cultural perspectives. The BORDERS Soundscaping Series extends that world into immersive film, where music is not just heard but experienced.",
    href: "/music/borders",
    metadata: ["Album", "Zine", "Archive object"],
    gallery: [
      { src: "/media/borders-bts-01.jpg", label: "BORDERS session" },
      { src: "/media/borders-bts-02.jpg", label: "Behind the record" },
      { src: "/media/borders-bts-03.jpg", label: "Film still" },
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
        href: "https://music.apple.com/us/album/borders/1621606862",
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
  },
  {
    title: "I forgot to press send",
    slug: "i-forgot-to-press-send",
    category: "release",
    kicker: "2025 / EP",
    image: "/media/iforgot-cover.jpg",
    summary: "A short 2025 EP with the artwork, collaborators, and stream links in one place.",
    body:
      "The legacy portfolio page for I forgot to press send does not carry a long-form note, so the archive keeps this entry focused: the artwork, the people around it, and the direct paths to listen.",
    href: "/music/i-forgot-to-press-send",
    metadata: ["EP", "2025", "DSP funnel"],
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
    kicker: "2025 / Single + EP",
    image: "/media/alte-cover.jpg",
    summary: "All Lost Things Evolve, curated and creative directed by Aday Living.",
    body:
      "A.L.T.E, All Lost Things Evolve, is streaming on all digital platforms. The project was curated and creative directed by Aday Living, with all songs written by Omagz and music produced by Duggie.",
    href: "/music/alte",
    metadata: ["Single", "2025", "Campaign"],
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/6thzYXe4DqCgtZMAH8vfx3",
        kind: "dsp",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/us/album/a-l-t-e-single/1836208468",
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
    kicker: "2026 / Single",
    image: "/media/2am-cover.jpeg",
    summary: "A 2026 late-night single — hear it, then explore what surrounds it.",
    body:
      "The legacy portfolio page for 2AM does not include a long-form note yet. For now, this release page stays direct: the song, the stream paths, and the wider Irie archive a click away.",
    href: "/music/2am",
    metadata: ["Single", "2026", "Listener path"],
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
  ["BORDERS", "Album / Zine", "2022", "/music/borders"],
  ["BORDERS: The Visualscaping Zine", "Print artifact", "2022", "/shop/borders-visualscaping-zine"],
  ["IRIE Sessions x BAYO", "Project", "2024-2025", "/journal/irie-sessions-x-bayo-project"],
  ["Culture Shock x Eventbrite", "Project", "London", "/journal/culture-shock-eventbrite"],
  ["Irie Flyer Wall", "Flyer archive", "Past events", "/journal/irie-flyer-wall"],
  ["Lust on the Coast", "Album", "2025", "/music/lust-on-the-coast"],
  ["Soho House Paris", "Session", "2026", "/sessions/soho-house-paris"],
  ["Be There Weekly", "Event", "Archive", "/sessions/be-there-weekly"],
  ["January Session", "Session", "Recap", "/sessions/january-session"],
  ["Women Make Things 10X Better", "Merch", "2026", "/shop/women-make-things-10x-better-hat"],
  ["Irie Stud Earrings", "Jewelry", "2026", "/shop/irie-stud-earrings"],
  ["Irie Global Grant", "Opportunity", "2025", "/opportunities/irie-global-grant"],
  ["Culture Shock", "Live Series", "London", "/sessions/culture-shock"],
  ["I forgot to press send", "Single", "2025", "/music/i-forgot-to-press-send"],
  ["A.L.T.E", "Single / EP", "2025", "/music/alte"],
] as const;

export const featuredArchiveItems = archiveItems.slice(0, 5);

export function getItemBySlug(items: ContentItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}
