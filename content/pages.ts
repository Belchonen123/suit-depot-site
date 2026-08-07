export type ServiceArea = {
  name: string;
  slug: string;
  note: string;
  landmark: string;
  cityPageContent: {
    heading: string;
    paragraphs: string[];
  };
};

/**
 * SERVICE-AREA EDITING GUIDE
 *
 * Staff can update the city-page copy in `cityPageContent` below without
 * touching the route JSX. Keep `slug` unique and use a real, recognizable
 * `landmark`; it becomes the starting point for that city's Google Maps route.
 */
export const areas: ServiceArea[] = [
  {
    name: "Oak Park",
    slug: "oak-park",
    note: "Home showroom on Greenfield Road for local fittings, tailoring, and formalwear support.",
    landmark: "Oak Park City Hall, Oak Park, MI",
    cityPageContent: {
      heading: "Menswear service for Oak Park",
      paragraphs: [
        "The Suit Depot showroom is located in Oak Park, making it convenient to compare suits, formalwear, shirts, shoes, and tailoring options in person.",
      ],
    },
  },
  {
    name: "Southfield",
    slug: "southfield",
    note: "A short drive for business suits, custom shirts, and wedding-party coordination.",
    landmark: "Southfield Town Center, Southfield, MI",
    cityPageContent: {
      heading: "Menswear service for Southfield",
      paragraphs: [
        "Southfield shoppers can make the short trip to Oak Park for business suits, event clothing, custom options, and fit guidance in one showroom.",
      ],
    },
  },
  {
    name: "Ferndale",
    slug: "ferndale",
    note: "Nearby access to designer suits, wedding menswear, accessories, and alterations.",
    landmark: "Ferndale City Hall, Ferndale, MI",
    cityPageContent: {
      heading: "Menswear service for Ferndale",
      paragraphs: [
        "Ferndale residents are close to the Oak Park showroom for suit shopping, wedding-party fittings, formalwear, and tailoring support.",
      ],
    },
  },
  {
    name: "Berkley",
    slug: "berkley",
    note: "A convenient showroom trip for work wardrobes, events, weddings, and fit help.",
    landmark: "Berkley City Hall, Berkley, MI",
    cityPageContent: {
      heading: "Menswear service for Berkley",
      paragraphs: [
        "Berkley shoppers can visit the showroom to compare sizes, styles, and price points with help from a menswear-focused team.",
      ],
    },
  },
  {
    name: "Huntington Woods",
    slug: "huntington-woods",
    note: "Close-to-home service for tailored clothing, formal events, and wardrobe updates.",
    landmark: "Huntington Woods City Hall, Huntington Woods, MI",
    cityPageContent: {
      heading: "Menswear service for Huntington Woods",
      paragraphs: [
        "Huntington Woods residents have a nearby option for designer menswear, custom clothing, tuxedo rentals, and in-person alterations.",
      ],
    },
  },
  {
    name: "Pleasant Ridge",
    slug: "pleasant-ridge",
    note: "Quick access to the Oak Park showroom for suits, tailoring, and formalwear.",
    landmark: "Pleasant Ridge City Hall, Pleasant Ridge, MI",
    cityPageContent: {
      heading: "Menswear service for Pleasant Ridge",
      paragraphs: [
        "Pleasant Ridge shoppers can reach the Oak Park showroom quickly for everyday suiting, special occasions, and fit adjustments.",
      ],
    },
  },
  {
    name: "Royal Oak",
    slug: "royal-oak",
    note: "Showroom access for sharper fit help, tailoring, and special-occasion dressing.",
    landmark: "Royal Oak Farmers Market, Royal Oak, MI",
    cityPageContent: {
      heading: "Menswear service for Royal Oak",
      paragraphs: [
        "Royal Oak residents can shop a broad menswear selection and coordinate garments, accessories, and tailoring during the same visit.",
      ],
    },
  },
  {
    name: "Hazel Park",
    slug: "hazel-park",
    note: "Nearby suits, shirts, shoes, formalwear, and practical fitting support.",
    landmark: "Hazel Park City Hall, Hazel Park, MI",
    cityPageContent: {
      heading: "Menswear service for Hazel Park",
      paragraphs: [
        "Hazel Park shoppers are a short drive from in-person suit selection, formalwear planning, and menswear tailoring in Oak Park.",
      ],
    },
  },
  {
    name: "Madison Heights",
    slug: "madison-heights",
    note: "Menswear and event-ready clothing with one-stop fitting and alteration support.",
    landmark: "Madison Heights City Hall, Madison Heights, MI",
    cityPageContent: {
      heading: "Menswear service for Madison Heights",
      paragraphs: [
        "Madison Heights residents can visit The Suit Depot to compare ready-to-wear and custom options for work, weddings, and formal events.",
      ],
    },
  },
  {
    name: "Birmingham",
    slug: "birmingham",
    note: "Designer menswear options for events, work wardrobes, and seasonal updates.",
    landmark: "Shain Park, Birmingham, MI",
    cityPageContent: {
      heading: "Menswear service for Birmingham",
      paragraphs: [
        "Birmingham shoppers can visit Oak Park for designer menswear, custom suiting, tailoring, and coordinated outfits for business or events.",
      ],
    },
  },
  {
    name: "Clawson",
    slug: "clawson",
    note: "A straightforward trip for suit selection, tailoring, and wedding-party needs.",
    landmark: "Clawson City Park, Clawson, MI",
    cityPageContent: {
      heading: "Menswear service for Clawson",
      paragraphs: [
        "Clawson residents can use the Oak Park showroom for guided suit shopping, formalwear, accessories, and alteration planning.",
      ],
    },
  },
  {
    name: "Troy",
    slug: "troy",
    note: "Business and occasion menswear with custom options and in-person fit guidance.",
    landmark: "Somerset Collection, Troy, MI",
    cityPageContent: {
      heading: "Menswear service for Troy",
      paragraphs: [
        "Troy shoppers can compare business suits, occasion clothing, and custom options at the Oak Park showroom with tailoring support available.",
      ],
    },
  },
  {
    name: "Bloomfield Hills",
    slug: "bloomfield-hills",
    note: "Designer menswear, custom clothing, and tailoring for business and events.",
    landmark: "Bloomfield Hills City Hall, Bloomfield Hills, MI",
    cityPageContent: {
      heading: "Menswear service for Bloomfield Hills",
      paragraphs: [
        "Bloomfield Hills residents can explore designer and custom menswear in Oak Park, then coordinate any needed fit adjustments in person.",
      ],
    },
  },
  {
    name: "West Bloomfield",
    slug: "west-bloomfield",
    note: "A west Oakland County destination for suits, formalwear, and custom fittings.",
    landmark: "Marshbank Park, West Bloomfield, MI",
    cityPageContent: {
      heading: "Menswear service for West Bloomfield",
      paragraphs: [
        "West Bloomfield shoppers can plan a showroom visit for work wardrobes, wedding attire, special events, and custom clothing.",
      ],
    },
  },
  {
    name: "Farmington",
    slug: "farmington",
    note: "Menswear and fit support for office wardrobes, weddings, and special occasions.",
    landmark: "Farmington Civic Theater, Farmington, MI",
    cityPageContent: {
      heading: "Menswear service for Farmington",
      paragraphs: [
        "Farmington residents can visit Oak Park to compare suits and formalwear while arranging shirts, accessories, and alterations together.",
      ],
    },
  },
  {
    name: "Farmington Hills",
    slug: "farmington-hills",
    note: "Menswear, formalwear, and in-person fit guidance for west Metro Detroit shoppers.",
    landmark: "Heritage Park, Farmington Hills, MI",
    cityPageContent: {
      heading: "Menswear service for Farmington Hills",
      paragraphs: [
        "Farmington Hills shoppers can make the trip to Oak Park for a broad selection of suits, tuxedos, custom clothing, and tailoring.",
      ],
    },
  },
  {
    name: "Novi",
    slug: "novi",
    note: "Suit and formalwear shopping with custom options and alteration planning.",
    landmark: "Twelve Oaks Mall, Novi, MI",
    cityPageContent: {
      heading: "Menswear service for Novi",
      paragraphs: [
        "Novi residents can visit The Suit Depot when they want to compare more menswear options in person and address fit during the same trip.",
      ],
    },
  },
  {
    name: "Northville",
    slug: "northville",
    note: "In-person menswear service for work, weddings, formal events, and tailoring.",
    landmark: "Mill Race Historical Village, Northville, MI",
    cityPageContent: {
      heading: "Menswear service for Northville",
      paragraphs: [
        "Northville shoppers can plan an Oak Park showroom visit for suits, formalwear, coordinated accessories, and custom garment consultations.",
      ],
    },
  },
  {
    name: "Rochester",
    slug: "rochester",
    note: "Designer and custom menswear for business, weddings, and special events.",
    landmark: "Rochester Municipal Park, Rochester, MI",
    cityPageContent: {
      heading: "Menswear service for Rochester",
      paragraphs: [
        "Rochester residents can visit the Oak Park showroom to compare ready-to-wear, formalwear, and custom options with fit guidance.",
      ],
    },
  },
  {
    name: "Rochester Hills",
    slug: "rochester-hills",
    note: "A regional showroom option for suits, tuxedos, custom clothing, and tailoring.",
    landmark: "Meadow Brook Hall, Rochester Hills, MI",
    cityPageContent: {
      heading: "Menswear service for Rochester Hills",
      paragraphs: [
        "Rochester Hills shoppers can make one showroom trip for suit selection, event coordination, accessories, and alteration planning.",
      ],
    },
  },
  {
    name: "Pontiac",
    slug: "pontiac",
    note: "Menswear selection and fit help for business clothing, weddings, and events.",
    landmark: "Pontiac City Hall, Pontiac, MI",
    cityPageContent: {
      heading: "Menswear service for Pontiac",
      paragraphs: [
        "Pontiac residents can visit Oak Park for suits, shirts, shoes, formalwear, and tailoring support from a menswear-focused staff.",
      ],
    },
  },
  {
    name: "Detroit",
    slug: "detroit",
    note: "A Metro Detroit showroom destination for designer suits, formalwear, and tailoring.",
    landmark: "Campus Martius Park, Detroit, MI",
    cityPageContent: {
      heading: "Menswear service for Detroit",
      paragraphs: [
        "Detroit shoppers can visit the Oak Park showroom for business suits, wedding attire, formalwear, custom options, and fit assistance.",
      ],
    },
  },
  {
    name: "Highland Park",
    slug: "highland-park",
    note: "Convenient access to a broad suit selection, formalwear, and alterations.",
    landmark: "Highland Park City Hall, Highland Park, MI",
    cityPageContent: {
      heading: "Menswear service for Highland Park",
      paragraphs: [
        "Highland Park residents are within an easy drive of the showroom for menswear shopping, event attire, and tailoring.",
      ],
    },
  },
  {
    name: "Hamtramck",
    slug: "hamtramck",
    note: "Suit and event-clothing support with accessories and fitting services in one place.",
    landmark: "Hamtramck City Hall, Hamtramck, MI",
    cityPageContent: {
      heading: "Menswear service for Hamtramck",
      paragraphs: [
        "Hamtramck shoppers can visit Oak Park to compare suit styles and complete an outfit with shirts, shoes, accessories, and alterations.",
      ],
    },
  },
  {
    name: "Dearborn",
    slug: "dearborn",
    note: "Business, wedding, and occasion menswear with custom and tailoring options.",
    landmark: "Henry Ford Museum, Dearborn, MI",
    cityPageContent: {
      heading: "Menswear service for Dearborn",
      paragraphs: [
        "Dearborn residents can plan a showroom visit for ready-to-wear suits, formalwear, custom clothing, and in-person fit guidance.",
      ],
    },
  },
  {
    name: "Dearborn Heights",
    slug: "dearborn-heights",
    note: "A practical trip for suit shopping, wedding coordination, and fit adjustments.",
    landmark: "Dearborn Heights City Hall, Dearborn Heights, MI",
    cityPageContent: {
      heading: "Menswear service for Dearborn Heights",
      paragraphs: [
        "Dearborn Heights shoppers can compare menswear in Oak Park and coordinate tailoring or custom options based on their needs.",
      ],
    },
  },
  {
    name: "Livonia",
    slug: "livonia",
    note: "Menswear and formalwear for work, weddings, and events, with tailoring support.",
    landmark: "Greenmead Historical Park, Livonia, MI",
    cityPageContent: {
      heading: "Menswear service for Livonia",
      paragraphs: [
        "Livonia residents can visit the Oak Park showroom for a wider in-person comparison of suits, formalwear, and coordinated accessories.",
      ],
    },
  },
  {
    name: "Redford",
    slug: "redford",
    note: "Accessible suit, formalwear, and alteration services for west-side shoppers.",
    landmark: "Redford Township Hall, Redford, MI",
    cityPageContent: {
      heading: "Menswear service for Redford",
      paragraphs: [
        "Redford shoppers can make a direct trip to Oak Park for suits, tuxedos, shirts, shoes, custom clothing, and tailoring.",
      ],
    },
  },
  {
    name: "Plymouth",
    slug: "plymouth",
    note: "A regional destination for designer menswear, event outfits, and custom fittings.",
    landmark: "Kellogg Park, Plymouth, MI",
    cityPageContent: {
      heading: "Menswear service for Plymouth",
      paragraphs: [
        "Plymouth residents can plan an Oak Park visit to compare menswear options and arrange fit adjustments for work or special occasions.",
      ],
    },
  },
  {
    name: "Canton",
    slug: "canton",
    note: "Suits, tuxedos, wedding-party support, and custom clothing in one showroom trip.",
    landmark: "Heritage Park, Canton, MI",
    cityPageContent: {
      heading: "Menswear service for Canton",
      paragraphs: [
        "Canton shoppers can use the Oak Park showroom for suit selection, wedding and formalwear planning, custom options, and tailoring.",
      ],
    },
  },
  {
    name: "Warren",
    slug: "warren",
    note: "Menswear selection, formalwear, accessories, and fit support for Macomb County shoppers.",
    landmark: "Warren City Hall, Warren, MI",
    cityPageContent: {
      heading: "Menswear service for Warren",
      paragraphs: [
        "Warren residents can visit Oak Park for business suits, formal events, wedding attire, and tailoring in a menswear-focused showroom.",
      ],
    },
  },
  {
    name: "Center Line",
    slug: "center-line",
    note: "A direct route to designer suits, formalwear, and tailoring in Oak Park.",
    landmark: "Center Line City Hall, Center Line, MI",
    cityPageContent: {
      heading: "Menswear service for Center Line",
      paragraphs: [
        "Center Line shoppers can compare suits, shirts, shoes, and event attire in person while planning any necessary fit adjustments.",
      ],
    },
  },
  {
    name: "Sterling Heights",
    slug: "sterling-heights",
    note: "Business and special-event menswear with custom, rental, and alteration options.",
    landmark: "Dodge Park, Sterling Heights, MI",
    cityPageContent: {
      heading: "Menswear service for Sterling Heights",
      paragraphs: [
        "Sterling Heights residents can make the showroom trip for ready-to-wear suits, custom clothing, formalwear, and tailoring support.",
      ],
    },
  },
  {
    name: "St. Clair Shores",
    slug: "st-clair-shores",
    note: "A Metro Detroit menswear destination for suits, weddings, and formal events.",
    landmark: "St. Clair Shores City Hall, St. Clair Shores, MI",
    cityPageContent: {
      heading: "Menswear service for St. Clair Shores",
      paragraphs: [
        "St. Clair Shores shoppers can visit Oak Park to compare suit and formalwear options, complete an outfit, and address fit in person.",
      ],
    },
  },
  {
    name: "Roseville",
    slug: "roseville",
    note: "Suit shopping and fitting support for business, celebrations, and wedding parties.",
    landmark: "Roseville City Hall, Roseville, MI",
    cityPageContent: {
      heading: "Menswear service for Roseville",
      paragraphs: [
        "Roseville residents can shop suits, formalwear, shirts, shoes, and accessories at the Oak Park showroom with tailoring available.",
      ],
    },
  },
  {
    name: "Eastpointe",
    slug: "eastpointe",
    note: "Menswear, formalwear, and alterations within a realistic drive of the showroom.",
    landmark: "Eastpointe City Hall, Eastpointe, MI",
    cityPageContent: {
      heading: "Menswear service for Eastpointe",
      paragraphs: [
        "Eastpointe shoppers can make the trip to Oak Park for in-person suit comparison, formalwear planning, and fit support.",
      ],
    },
  },
  {
    name: "Allen Park",
    slug: "allen-park",
    note: "A Downriver service area for suits, weddings, custom clothing, and tailoring.",
    landmark: "Allen Park City Hall, Allen Park, MI",
    cityPageContent: {
      heading: "Menswear service for Allen Park",
      paragraphs: [
        "Allen Park residents can plan an Oak Park showroom visit for business menswear, weddings, formal events, and custom garment consultations.",
      ],
    },
  },
  {
    name: "Taylor",
    slug: "taylor",
    note: "Menswear and formalwear shopping with fitting and alteration services available.",
    landmark: "Heritage Park, Taylor, MI",
    cityPageContent: {
      heading: "Menswear service for Taylor",
      paragraphs: [
        "Taylor shoppers can visit the Oak Park showroom to compare suits and event attire and coordinate any needed tailoring.",
      ],
    },
  },
  {
    name: "Southgate",
    slug: "southgate",
    note: "Suit, tuxedo, and wedding-party support for Downriver shoppers.",
    landmark: "Southgate Civic Center, Southgate, MI",
    cityPageContent: {
      heading: "Menswear service for Southgate",
      paragraphs: [
        "Southgate residents can make one showroom trip for suits, formalwear, custom options, accessories, and fit planning.",
      ],
    },
  },
];

export const serviceCards = [
  {
    title: "Custom Suits & Shirts",
    href: "/custom-suits",
    text: "Italian fabrics, guided measurements, and fitting appointments for sharper personal wardrobes.",
  },
  {
    title: "Tailoring & Alterations",
    href: "/tailoring",
    text: "Fit adjustments, hemming, repairs, and wedding-party support from a menswear-focused team.",
  },
  {
    title: "Tuxedo & Wedding",
    href: "/tuxedo-rentals",
    text: "Rental and wedding-party options with suits, tuxedos, vests, shirts, and accessories.",
  },
];

export const categoryTiles = [
  { label: "Designer Suits", key: "suits" },
  { label: "Sportcoats", key: "sportcoats" },
  { label: "Dress Shirts", key: "shirts" },
  { label: "Shoes", key: "shoes" },
];

export const showroomStats = [
  { value: "11,000+", label: "sq ft showroom" },
  { value: "2010", label: "online launch" },
  { value: "2015", label: "retail opening" },
  { value: "Worldwide", label: "Shopify shipping" },
];

export const customDetails = [
  {
    title: "Fabric library",
    text: "Compare Italian fabrics, seasonal weights, colors, patterns, and finishing details in the showroom.",
  },
  {
    title: "Fit consultation",
    text: "Review posture, shoulder shape, jacket length, shirt measurements, and event requirements before the order is finalized.",
  },
  {
    title: "Wardrobe planning",
    text: "Build one garment or plan a rotation around business, weddings, travel, and year-round wear.",
  },
];

export const tailoringDetails = [
  {
    title: "Everyday fit fixes",
    text: "Clean up sleeve length, pant breaks, waist fit, and small repairs before garments go back into rotation.",
  },
  {
    title: "Event readiness",
    text: "Confirm timing early for wedding parties, formal events, and groups with multiple fitting needs.",
  },
  {
    title: "Menswear focus",
    text: "Work with a team that sees suit proportions, jackets, trousers, shirts, and formalwear every day.",
  },
];

export const weddingTimeline = [
  "Confirm dress code, colors, and party size.",
  "Measure the groom and wedding party.",
  "Coordinate suits, tuxedos, vests, shirts, and accessories.",
  "Schedule final fit checks before pickup.",
];

export const faqs = [
  {
    question: "Is this site replacing the Shopify store?",
    answer:
      "No. This site is a marketing and showroom site. Shop buttons send visitors to the existing Shopify store for products, cart, checkout, and shipping.",
  },
  {
    question: "Do I need an appointment for custom suits or shirts?",
    answer:
      "Walk-ins can view fabrics, but an appointment is recommended when you need a full measurement and custom fitting consultation.",
  },
  {
    question: "Can The Suit Depot help with wedding parties?",
    answer:
      "Yes. The showroom can help coordinate tuxedos, suits, vests, shirts, and accessories for the groom and wedding party. Timing and rental details should be confirmed directly.",
  },
  {
    question: "Are the hours and phone number final?",
    answer:
      "The current site uses public listing data as placeholders. The client should confirm the primary phone number and hours before launch.",
  },
];

export const launchChecklist = [
  "Confirm primary phone number and public hours.",
  "Replace placeholder Shopify collection links with real deep links.",
  "Confirm tuxedo rental destination: Shopify page or appointment/contact flow.",
  "Supply and encode hero video files: hero.webm, hero.mp4, and poster image.",
  "Confirm complete brand list and manufacturer logo usage.",
  "Replace review summaries with approved review excerpts.",
  "Add verified Instagram and TikTok profile URLs.",
  "Review privacy policy language before launch.",
];

export const visitPrep = [
  {
    title: "Know the occasion",
    text: "Bring the event date, venue type, dress code, and any color requirements before choosing suits or formalwear.",
  },
  {
    title: "Bring the right shoes",
    text: "Shoes help the team judge trouser break, overall proportions, and the finished look during tailoring.",
  },
  {
    title: "Bring inspiration",
    text: "Photos, dress-code notes, or examples of garments that already fit well can speed up the consultation.",
  },
  {
    title: "Leave time for tailoring",
    text: "Fixed event dates need room for alterations, group coordination, and pickup timing.",
  },
];

export const fitSignals = [
  "Jacket shoulders sit cleanly without divots or overhang.",
  "Sleeves show a controlled amount of shirt cuff.",
  "Trousers fall cleanly over the shoe without excess pooling.",
  "Shirt collar sits comfortably when buttoned.",
  "The garment moves with you when sitting, walking, and reaching.",
];

export const showroomPath = [
  {
    title: "Browse",
    text: "Compare designer suits, shirts, sportcoats, shoes, formalwear, and accessories in one showroom.",
  },
  {
    title: "Fit",
    text: "Work through sizing, proportions, custom options, and alteration needs with the menswear team.",
  },
  {
    title: "Finish",
    text: "Confirm timing, pickup, Shopify ordering, or follow-up details before the visit ends.",
  },
];
