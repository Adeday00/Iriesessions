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
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

export const sessions: ContentItem[] = [
  {
    title: "Soho House Paris",
    slug: "soho-house-paris",
    category: "session",
    kicker: "Paris / Mar 7 / Book launch",
    image: "/media/soho-house.jpg",
    summary:
      "A Paris gathering around BORDERS: The Visualscaping Zine, built as a live room, object launch, and cultural timestamp.",
    body:
      "A session built around the BORDERS visual world: book launch, performance context, city energy, and documentary texture in one room. The gathering connects editorial object, sound, collaborators, and the images that remain after the night ends.",
    href: "/sessions/soho-house-paris",
    metadata: ["Paris", "Book launch", "Archive-ready"],
  },
  {
    title: "Culture Shock",
    slug: "culture-shock",
    category: "session",
    kicker: "London / Live series",
    image: "/media/session-crowd.jpg",
    summary:
      "A live-format bridge between scene, sound, and audience memory. Built to become more than a flyer after the night ends.",
    body:
      "Culture Shock moves through live sound, city-specific energy, and community presence. Each edition is treated as more than an announcement: the lineup, room, partner context, and recap become part of the Irie archive.",
    href: "/sessions/culture-shock",
    metadata: ["London", "Live series", "Community room"],
  },
  {
    title: "Irie Sessions x Bayo",
    slug: "irie-sessions-x-bayo",
    category: "session",
    kicker: "New York / Collaboration",
    image: "/media/irie-paris.jpg",
    summary:
      "A collaborative activation connecting Irie’s visual language with artist-led performance and documentary energy.",
    body:
      "A collaboration entry shaped by artist presence, visual direction, and the kind of room Irie is built to hold. Credits, stills, campaign language, and partner context all sit together as proof of the cultural work behind the moment.",
    href: "/sessions/irie-sessions-x-bayo",
    metadata: ["New York", "Collaboration", "Visual archive"],
  },
];

export const releases: ContentItem[] = [
  {
    title: "Lust on the Coast",
    slug: "lust-on-the-coast",
    category: "release",
    kicker: "2025 / Album",
    image: "/media/lust-on-the-coast.jpg",
    summary: "A coastal, nocturnal release page designed for cover art, credits, stream links, visuals, and related stories.",
    body:
      "A coastal, nocturnal release with its own visual atmosphere and listener path. Cover art, credits, stream links, and supporting visuals come together as one owned destination before listeners move out to DSPs.",
    href: "/music/lust-on-the-coast",
    metadata: ["Album", "2025", "Stream-ready"],
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
    summary: "A foundational artifact for the archive: record, visual world, zine object, and launch memory.",
    body:
      "BORDERS is where Irie’s music, editorial eye, and physical artifact language meet. The record, visualscaping zine, launch memory, photography, and credits all point back to one wider creative world.",
    href: "/music/borders",
    metadata: ["Album", "Zine", "Archive object"],
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
    summary: "A concise EP page for artwork, collaborator notes, playlist embeds, and DSP routing.",
    body:
      "A concise EP with a direct listener path: artwork, premise, streaming links, and supporting media in one place. The page keeps campaign attention with Irie before sending listeners outward to their preferred platform.",
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
    summary: "A campaign object connecting sound, artwork, credits, and archive context.",
    body:
      "A.L.T.E is a compact campaign entry connecting sound, artwork, and the surrounding visual language. It gives listeners a clean route into the release while leaving room for collaborators, video, and future archive context.",
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
    summary: "A late-night entry point for listeners moving from social preview to the owned Irie archive.",
    body:
      "2AM is structured as a direct listener path: arrive from a social clip, understand the release, choose a stream destination, and discover the surrounding Irie archive.",
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
      "BORDERS: The Visualscaping Zine is a limited first edition softcover publication with a matte finish cover. It documents the creative process behind the 2022 EP executive produced by Aday alongside Grammy Award-winning Nigerian producer Chopstix, transforming photography, layered composition, and intentional sequencing into a record of artistry, diaspora, and collaboration.",
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
      "The Women Make Things 10X Better hat is a black corduroy cotton piece with classic snap closure, 3D embroidered statement text, and the Irie logo. The product details support the black hat with white embroidery, with standard shipping within 24-48 hours of order processing.",
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
      "Irie Stud Earrings are a signature jewelry piece made from 925 sterling silver with a high-polish finish, sculpted 3D Irie lettering, and butterfly back closures for pierced ears. Timeless in spirit and distinctive by design, they ship within 24-48 hours of order processing.",
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
      "A recurring home for grants, criteria, application windows, alumni stories, and collaborative release outcomes.",
    body:
      "The Irie Global Grant makes reciprocity visible through artist support, collaboration, and release pathways. This is the home for eligibility, submission windows, timelines, alumni notes, and the outcomes connected to each cycle.",
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
