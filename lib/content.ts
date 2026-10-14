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

// Years of service, counted from the founding year so it never goes stale.
// Updates with each deploy (a redeploy in January rolls it forward).
export const yearsOfService = new Date().getFullYear() - Number(site.founded);

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
    name: "Michael Jackson",
    role: "Program Attendee · Detroit",
  },
  {
    quote: "I invited brother Odis to come speak to our young boys. What an impact he made.",
    name: "School Principal",
    role: "Detroit, MI",
  },
  {
    quote: "MRI has had a powerful positive effect on our grandsons, who went from below grade level to above it.",
    name: "Grandparent & Guardian",
    role: "Metro Detroit",
  },
];

export const audiences = [
  { title: "K–12 Districts", body: "Assemblies, parent nights, and PD days." },
  { title: "Philanthropy", body: "Convenings for youth-development nonprofits." },
  { title: "Faith & Community", body: "Churches, men's ministries, and reentry organizations." },
  { title: "Government & Justice", body: "Juvenile justice centers and public-safety briefings." },
];

export const bundlePerks = [
  "A paperback copy for every attendee, at bulk pricing",
  "Book signing after the talk",
  "Copies shipped to your venue before the event",
];

export const audienceOptions = [
  "K–12 school / district",
  "Philanthropy / nonprofit",
  "Faith / community",
  "Government / justice",
  "Other",
];
