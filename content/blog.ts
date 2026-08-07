export const posts = [
  {
    slug: "best-fabrics-for-a-summer-suit",
    title: "Best Fabrics for a Summer Suit",
    excerpt:
      "A practical guide to linen, tropical wool, cotton blends, and lighter construction for warm-weather events.",
    date: "2026-05-12",
    readTime: "4 min read",
    category: "Suiting",
    image: "/media/photos/tie-wall-display.jpg",
    tags: ["Summer", "Fabric", "Events"],
    body: [
      {
        heading: "Start with airflow and recovery",
        paragraphs: [
          "Summer suiting is about airflow, recovery, and choosing the right level of structure. Tropical wool remains the most versatile option because it drapes cleanly and resists wrinkles better than linen.",
          "Linen has a relaxed look and strong breathability, but it wrinkles quickly. Cotton blends sit between the two, giving a softer casual look without feeling as formal as wool.",
        ],
      },
      {
        heading: "Match the fabric to the event",
        paragraphs: [
          "Outdoor weddings, daytime graduations, and business travel all ask different things from a suit. The right cloth should fit the temperature, dress code, and how long you need to stay sharp.",
          "For warm-weather formal events, lighter construction and breathable linings can make a real difference. The Suit Depot team can compare fabrics in person and match the suit to the event.",
        ],
      },
    ],
  },
  {
    slug: "business-casual-with-jeans",
    title: "How to Wear Jeans at Work",
    excerpt:
      "Business casual works best when denim is dark, clean, and paired with tailored layers.",
    date: "2026-04-24",
    readTime: "3 min read",
    category: "Style",
    image: "/media/photos/tie-wall-display.jpg",
    tags: ["Business Casual", "Sportcoats", "Workwear"],
    body: [
      {
        heading: "Keep the denim quiet",
        paragraphs: [
          "The easiest way to make jeans feel intentional is to keep the wash dark and the fit clean. Add a sportcoat, leather shoes, and a shirt with enough structure to hold its shape.",
          "Avoid distressed finishes for client-facing days. A tailored jacket does most of the work, especially when the shoulders and sleeve length are right.",
        ],
      },
      {
        heading: "Use the jacket to set the tone",
        paragraphs: [
          "A navy or charcoal sportcoat gives denim enough structure for most business-casual settings. Keep the shirt crisp, the belt simple, and the shoe polished.",
        ],
      },
    ],
  },
  {
    slug: "dress-shirt-vs-jacket-measurements",
    title: "Dress Shirt Measurements vs. Jacket Measurements",
    excerpt:
      "Why neck, sleeve, chest, and shoulder measurements tell different parts of the fit story.",
    date: "2026-03-18",
    readTime: "5 min read",
    category: "Fit",
    image: "/media/photos/master-tailor-sewing.jpg",
    tags: ["Measurements", "Shirts", "Jackets"],
    body: [
      {
        heading: "A shirt size is not a jacket size",
        paragraphs: [
          "A dress shirt measurement is not a shortcut for a jacket size. Shirts focus on neck and sleeve length, while jackets depend on chest, shoulders, posture, and how the garment sits over the body.",
          "For the cleanest result, get measured in person and try on comparable cuts. Small differences in shoulder slope and jacket length can change the entire silhouette.",
        ],
      },
      {
        heading: "Fit is checked in motion",
        paragraphs: [
          "A jacket needs to look right while standing, sitting, and reaching. A shirt needs enough room through the chest and collar without bunching under a jacket.",
        ],
      },
    ],
  },
  {
    slug: "wedding-party-suiting-timeline",
    title: "A Wedding Party Suiting Timeline",
    excerpt:
      "When to shop, fit, tailor, and pick up suits or tuxedos for a smoother wedding week.",
    date: "2026-02-09",
    readTime: "4 min read",
    category: "Weddings",
    image: "/media/photos/wedding-party-suits.jpg",
    tags: ["Weddings", "Tuxedos", "Planning"],
    body: [
      {
        heading: "Start before the calendar gets tight",
        paragraphs: [
          "Start early enough to handle size changes, out-of-town groomsmen, and tailoring. Larger wedding parties should confirm colors, accessories, and pickup timing before the final rush.",
          "Bring inspiration, event details, and any dress-code notes to the showroom so the team can coordinate the full look.",
        ],
      },
      {
        heading: "Use one point of coordination",
        paragraphs: [
          "When suits, shirts, vests, shoes, and accessories are planned together, the finished wedding-party look is easier to control.",
        ],
      },
    ],
  },
  {
    slug: "what-to-bring-to-a-fitting",
    title: "What to Bring to a Suit Fitting",
    excerpt:
      "Shoes, event details, inspiration photos, and timing notes help the fitting move faster.",
    date: "2026-01-28",
    readTime: "3 min read",
    category: "Fit",
    image: "/media/photos/tailor-hem-fitting.jpg",
    tags: ["Fitting", "Tailoring", "Visit Prep"],
    body: [
      {
        heading: "Bring the details that change the fit",
        paragraphs: [
          "Shoes matter because they set the trouser break. Event dates matter because they shape tailoring timing. Dress-code notes matter because they narrow the choices before you start trying things on.",
          "If you have a jacket, shirt, or trouser that already fits well, bring it. A useful reference can speed up the conversation.",
        ],
      },
      {
        heading: "Know the goal of the visit",
        paragraphs: [
          "A wedding fitting, a business wardrobe update, and a custom consultation all need different information. The clearer the goal, the more useful the fitting becomes.",
        ],
      },
    ],
  },
  {
    slug: "building-a-first-suit-wardrobe",
    title: "Building a First Suit Wardrobe",
    excerpt:
      "Start with versatile colors, clean fit, and accessories that make one suit work harder.",
    date: "2025-12-16",
    readTime: "5 min read",
    category: "Suiting",
    image: "/media/photos/suit-aisle-racks.jpg",
    tags: ["Wardrobe", "Suits", "Accessories"],
    body: [
      {
        heading: "Start with the most versatile suit",
        paragraphs: [
          "A navy or charcoal suit is usually the best starting point because it can handle interviews, weddings, dinners, and business meetings. Fit matters more than chasing a loud fabric first.",
          "Once the core suit is right, shirts, shoes, ties, and pocket squares make the wardrobe feel larger without buying a separate suit for every event.",
        ],
      },
      {
        heading: "Add range slowly",
        paragraphs: [
          "A sportcoat, a second shirt color, and a better shoe rotation can change the whole wardrobe. Build around repeatable combinations before adding statement pieces.",
        ],
      },
    ],
  },
];

export const blogCategories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

export type BlogPost = (typeof posts)[number];
