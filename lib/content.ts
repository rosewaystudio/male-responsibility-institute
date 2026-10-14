// All page copy and links live here, so text edits never require touching layout code.
// PLACEHOLDER = waiting on Odis. VERIFY = in the design, but confirm before launch.

export const site = {
  name: "Male Responsibility Institute",
  title: "Odis Bellinger — Speaker & Author · Male Responsibility Institute",
  description:
    "Book Odis Bellinger, MA, LLPC, for keynotes, workshops, and assemblies, or start with his book, No Reason Why You Can't Win: 7 Steps to Promote the Success of African American Males.",
  founded: "1991",
  contact: {
    email: "booking@maleresponsibility.org", // PLACEHOLDER: domain not purchased yet
    phone: "(313) 555 · 0142", // PLACEHOLDER: 555 is not a real number
    location: "Detroit, MI · Available nationally",
  },
  credit: { label: "Roseway Studio", href: "https://rosewaystudio.com" }, // VERIFY URL
};

// Links: "#" means the destination isn't decided yet. Paste full URLs when you have them.
export const book = {
  title: "No Reason Why You Can't Win",
  titleLead: "No Reason Why ",
  titleEm: "You Can't Win",
  subtitle: "7 Steps to Promote the Success of African American Males", // VERIFY: cover says "Young African American Males"
  author: "Odis Bellinger, MA, LLPC",
  cover: "/images/book-no-reason-why-you-cant-win.png", // VERIFY: 212px wide; ask for a high-res cover
  paperback: {
    price: "$6.99", // VERIFY
    orderDirectHref: "#", // PLACEHOLDER: payment link (Stripe, Square, Shopify…)
    amazonHref: "#", // PLACEHOLDER: Amazon paperback listing
  },
  kindle: {
    price: "Free", // VERIFY: Amazon doesn't let authors set $0 permanently
    href: "#", // PLACEHOLDER: Amazon Kindle listing
  },
};

// Second book: every field is a placeholder. Set `cover` to an image path once you have it.
export const book2: {
  titleLead: string;
  titleEm: string;
  subtitle: string;
  description: string;
  price: string;
  href: string;
  tag: string;
  cover?: string;
} = {
  titleLead: "Book Title ",
  titleEm: "Placeholder",
  subtitle: "Subtitle placeholder",
  description: "One- or two-line description of the second book goes here.",
  price: "$0.00",
  href: "#",
  tag: "Placeholder",
};

// Speaker reel. Paste an embed URL (YouTube: https://www.youtube-nocookie.com/embed/VIDEO_ID,
// Vimeo: https://player.vimeo.com/video/VIDEO_ID) and the placeholder becomes a player.
export const reel = {
  embedUrl: "", // PLACEHOLDER
  title: "Speaker Reel",
  label: "Video placeholder · 2–3 min",
};

export type Topic = {
  format: string;
  titleLead: string;
  titleEm: string;
  titleTail?: string;
  body: string;
  meta: [string, string];
};

export const topics: Topic[] = [
  {
    format: "Keynote",
    titleLead: "Our Boys Count: ",
    titleEm: "the case for early intervention",
    body: "Odis's signature talk: why ages 8 to 18 decide who a young man becomes, and how a mentoring program has lasted 34 years.",
    meta: ["45–60 min", "Schools · Conferences"],
  },
  {
    format: "Workshop",
    titleLead: "Fatherless, ",
    titleEm: "not future-less",
    body: "A working session for educators, counselors, and caseworkers on what kids from homes without a father actually need from the adults around them.",
    meta: ["Half day · up to 80", "Counselors · Social Workers"],
  },
  {
    format: "Keynote",
    titleLead: "Mental health is a ",
    titleEm: "young man's",
    titleTail: " health",
    body: "Drawn from Odis's clinical practice. A new way for parents and youth organizations to talk about boys' mental health.",
    meta: ["45–90 min", "Health · PTOs · Faith"],
  },
  {
    format: "Fireside",
    titleLead: "Proactive, ",
    titleEm: "not reactive",
    body: "A frank conversation about race, expectations, and identity for Black and Brown young men, for ERGs and leadership offsites.",
    meta: ["60 min moderated", "Corporate · Foundations"],
  },
  {
    format: "Convening",
    titleLead: "It's Possible: ",
    titleEm: "mentorship at scale",
    body: "Program design for school districts, justice systems, and funders: what works, what doesn't, and what to measure.",
    meta: ["Half day", "Districts · Philanthropy"],
  },
  {
    format: "Direct",
    titleLead: "To the young men ",
    titleEm: "in this room",
    body: "For young men ages 12–22, with no slides. Pairs naturally with copies of the book for every student.",
    meta: ["35–45 min · up to 800", "High Schools · Universities"],
  },
];

// Upcoming events: all PLACEHOLDER. Remove past events as dates go by.
export const events = [
  { month: "Nov", day: "14", name: "Event name", place: "Venue · City, State", tag: "Placeholder" },
  { month: "Dec", day: "05", name: "Event name", place: "Venue · City, State", tag: "Placeholder" },
  { month: "Jan", day: "22", name: "Event name", place: "Venue · City, State", tag: "Placeholder" },
];

// VERIFY: confirm each person agreed to be quoted, by name, on a public site.
export const testimonials = [
  {
    quote:
      "As a kid growing up in the inner city, Odis helped me make the right decisions, not the wrong ones. He always said, write it down. Put it on your refrigerator.",
    name: "Walter Waters",
    role: "Program graduate · Detroit",
  },
  {
    quote: "I invited brother Odis to come to Toronto and speak to our young boys. What an impact he made.",
    name: "Community Host",
    role: "Toronto, Canada",
  },
  {
    quote: "B2M has had a powerful positive effect on our grandsons, who went from below grade level to above it.",
    name: "Grandparent & Guardian",
    role: "Metro Detroit",
  },
];

export const audiences = [
  { title: "K–12 Districts", body: "Assemblies, parent nights, and PD days." },
  { title: "Corporations & ERGs", body: "Leadership offsites and ERG events." },
  { title: "Philanthropy", body: "Convenings for youth-development funders." },
  { title: "Faith & Community", body: "Churches, men's ministries, and reentry organizations." },
  { title: "Universities", body: "Guest lectures and panels." },
  { title: "Government & Justice", body: "Juvenile justice centers and public-safety briefings." },
];

export const bundlePerks = [
  "A paperback copy for every attendee, at bulk pricing",
  "Book signing after the talk",
  "Copies shipped to your venue before the event",
];

export const audienceOptions = [
  "K–12 school / district",
  "University",
  "Corporation / ERG",
  "Philanthropy / foundation",
  "Faith / community",
  "Government / justice",
  "Other",
];
