export type ContentItem = {
  title: string;
  slug: string;
  category: "session" | "release" | "artifact" | "opportunity";
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
      { src: "/media/session-paris-04.jpg", label: "Soho House Paris" },
      { src: "/media/session-paris-05.jpg", label: "The room" },
      { src: "/media/session-paris-03.jpg", label: "Paris" },
      { src: "/media/session-paris-06.jpg", label: "Line-up" },
      { src: "/media/session-paris-07.jpg", label: "On the night" },
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
    summary: "A coastal, nocturnal 2025 album — cover art, credits, and where to hear it.",
    body:
      "Lust on the Coast carries its own late-night atmosphere. The artwork, the credits, and the visuals all sit here in one place before you head out to listen.",
    href: "/music/lust-on-the-coast",
    metadata: ["Album", "2025", "Stream-ready"],
    gallery: [
      { src: "/media/lotc-bts-01.jpg", label: "Lust on the Coast" },
      { src: "/media/lotc-bts-02.jpg", label: "On set" },
      { src: "/media/lotc-bts-03.jpg", label: "Visual world" },
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
    summary: "The 2022 album and zine — executive produced by Aday with Chopstix.",
    body:
      "BORDERS is where the music, the photography, and the printed zine meet. Executive produced by Aday alongside Grammy-winning Nigerian producer Chopstix, it remains the cornerstone of the archive.",
    href: "/music/borders",
    metadata: ["Album", "Zine", "Archive object"],
    gallery: [
      { src: "/media/borders-bts-01.jpg", label: "BORDERS session" },
      { src: "/media/borders-bts-02.jpg", label: "Behind the record" },
      { src: "/media/borders-bts-03.jpg", label: "Film still" },
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
    summary: "A short 2025 EP — artwork, collaborators, and the stream links in one place.",
    body:
      "A concise EP that keeps things close: the artwork, the people on it, and where to listen, gathered before you head out to your platform.",
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
    summary: "A 2025 single and EP — sound, artwork, and credits together.",
    body:
      "A.L.T.E pairs the sound with its artwork and the people behind it — a clean way in, with room for the video and collaborators around it.",
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
      "2AM is built for after-hours: the song, where to stream it, and the wider Irie archive a click away.",
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
        src: "/media/irie-book-cover.jpg",
        label: "Book cover",
      },
      {
        src: "/media/irie-book-page-001.jpg",
        label: "Interior spread",
      },
      {
        src: "/media/zine-page.jpg",
        label: "Archive detail",
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
        src: "/media/hat-black-front.jpg",
        label: "Black corduroy",
      },
      {
        src: "/media/hat-black-white-text.jpg",
        label: "White text variant",
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
        src: "/media/irie-stud-box.jpg",
        label: "Boxed presentation",
      },
      {
        src: "/media/irie-earrings.jpg",
        label: "Stud detail",
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

export const allItems = [...sessions, ...releases, ...artifacts, ...opportunities];

export const archiveItems = [
  ["BORDERS", "Album / Zine", "2022", "/music/borders"],
  ["BORDERS: The Visualscaping Zine", "Print artifact", "2022", "/shop/borders-visualscaping-zine"],
  ["Lust on the Coast", "Album", "2025", "/music/lust-on-the-coast"],
  ["Soho House Paris", "Session", "2026", "/sessions/soho-house-paris"],
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
