// All page copy lives here so text edits never require touching layout code.
// Items marked VERIFY came from the design mockup and must be confirmed with the client before launch.

export const site = {
  name: "Male Responsibility Institute",
  title: "Male Responsibility Institute — Odis Bellinger",
  description:
    "Book Odis Bellinger, MA, LLPC — founder of the Building Better Men program — for keynotes, workshops, and convenings on mentoring, fatherlessness, and young men's mental health.",
  contact: {
    email: "booking@maleresponsibility.org", // VERIFY: domain not purchased yet
    phone: "(313) 555 · 0142", // VERIFY: 555 is a placeholder number
    location: "Detroit, MI · Available nationally",
  },
  linkedin: "", // VERIFY: add Odis's LinkedIn URL; the footer link stays hidden until set
};

export const tiles = [
  { label: "Founded", big: "1991", text: "Building Better Men Program, Detroit" },
  { label: "Young men reached", big: "20,000+", text: "Across mentoring, mentorship cohorts & keynotes" }, // VERIFY figure
  { label: "Credentials", lines: ["MA, LLPC", "Wayne State University", "Licensed Counselor"] }, // VERIFY license is current
  { label: "Featured in", lines: ["Forbes", "WXYZ Detroit", "Metro Parent", "Ford Men of Courage"] }, // VERIFY each outlet
];

export type Topic = {
  format: string;
  titleLead: string;
  titleEm: string;
  titleTail?: string;
  body: string;
  tags: string;
  length: [string, string];
};

export const topics: Topic[] = [
  {
    format: "Keynote",
    titleLead: "Our Boys Count — ",
    titleEm: "the case for early intervention",
    body: "The signature talk. Why the window between 8 and 18 decides who a young man becomes, what the data says about fatherlessness, and the practical architecture of a mentoring program that has held for 34 years.",
    tags: "Schools · Districts · Conferences",
    length: ["45–60 min keynote", "+ optional Q&A"],
  },
  {
    format: "Workshop",
    titleLead: "Fatherless, ",
    titleEm: "not future-less",
    body: "For educators, counselors, and case workers: a working session on what kids from absent-father homes actually need from the adults around them, and how to read the behaviors most often misdiagnosed as defiance.",
    tags: "Counselors · DCFS · Social Workers",
    length: ["Half-day workshop", "up to 80 participants"],
  },
  {
    format: "Keynote",
    titleLead: "Mental health is a ",
    titleEm: "young man’s",
    titleTail: " health",
    body: "Drawn from Odis’s clinical practice as a licensed counselor. Reframes the conversation around boys’ mental health for parents, pediatricians, and youth-serving organizations — past slogans, into the room.",
    tags: "Health Systems · PTOs · Faith Communities",
    length: ["45 min + panel", "or 90 min standalone"],
  },
  {
    format: "Fireside",
    titleLead: "Proactive, ",
    titleEm: "not reactive",
    titleTail: " — race, boys, and the long game",
    body: "A conversation about race, expectation, and identity for Black and Brown young men. Designed for HR groups, ERGs, and leadership offsites that want a real talk rather than a polished one.",
    tags: "Corporate · ERGs · Foundations",
    length: ["60 min fireside", "moderated format"],
  },
  {
    format: "Convening",
    titleLead: "It’s Possible — ",
    titleEm: "seeing the men they could become",
    body: "A program-design session for school districts, juvenile justice systems, and philanthropies building or funding mentorship at scale. What works, what does not, and what gets measured.",
    tags: "Districts · DOC · Philanthropy",
    length: ["Half-day convening", "scoped to host"],
  },
  {
    format: "Direct",
    titleLead: "To the young men ",
    titleEm: "in this room",
    body: "Odis’s talk for young men ages 12–22. No filler, no slides. The same conversation that has held 20,000 boys’ attention in cafeterias, gymnasiums, and detention halls from Detroit to Toronto.",
    tags: "High Schools · JJC · Universities",
    length: ["35–45 min assembly", "up to 800 students"],
  },
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
    quote:
      "Words cannot describe what an asset Odis is to his community locally and globally. I invited brother Odis to come to Toronto and speak to our young boys. What an impact he made.",
    name: "Community Host",
    role: "Toronto, Canada",
  },
  {
    quote:
      "His message was a Godsend. B2M has had a powerful positive effect on our grandsons, who have excelled academically — from below grade level to trailblazing above it.",
    name: "Grandparent & Guardian",
    role: "Metro Detroit",
  },
];

// Drop photos into /public/images/stage and set `src` (e.g. "/images/stage/keynote.jpg").
export const stagePhotos: { label: string; alt: string; src?: string }[] = [
  { label: "Odis speaking · keynote", alt: "Odis Bellinger delivering a keynote" },
  {
    label: "With young men · classroom",
    alt: "Odis Bellinger leading a classroom of young men in Building Better Men gear, hands raised",
    src: "/images/stage/classroom.jpg", // VERIFY: photo release covers the students shown
  },
  { label: "On stage · audience wide", alt: "Wide view of Odis Bellinger on stage before an audience" },
];

export const audiences = [
  {
    title: "K–12 School Districts",
    body: "All-school assemblies, parent nights, and PD days for boys’ achievement and engagement — including Detroit Public Schools Community District and Charter networks.",
  },
  {
    title: "Corporations & ERGs",
    body: "Forbes-circuit talks, leadership offsites, and ERG events for organizations investing in the development of Black and Brown male employees and the communities around their offices.",
  },
  {
    title: "Philanthropy & Foundations",
    body: "Convenings for funders building youth-development portfolios — including past partners Ford Motor Company Fund, Skillman Foundation, and Matrix Human Services.", // VERIFY partners
  },
  {
    title: "Faith & Community Institutions",
    body: "Churches, men’s ministries, community centers, and reentry organizations across Michigan, Ontario, Illinois, Georgia, and the Carolinas.",
  },
  {
    title: "Universities & Research",
    body: "Guest lectures and panels on mass incarceration, mentorship at scale, and the social-emotional development of young men — Wayne State, Fayetteville State, and others.",
  },
  {
    title: "Government & Justice",
    body: "Juvenile justice centers, sheriffs’ departments, and city-level public safety briefings on the early-intervention argument for boys ages 8–18.",
  },
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
