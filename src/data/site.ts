export const profile = {
  name: "Durga Prasad Vulla",
  first: "DURGA",
  last: "PRASAD VULLA",
  role: "Full-Stack Developer",
  location: "Visakhapatnam, India",
  email: "durgaprasadvulla24@gmail.com",
  socials: {
    github: "https://github.com/24durgaprasad",
    x: "https://x.com/buildwithvdp",
    linkedin: "https://www.linkedin.com/in/durgaprasad-vulla-858579393/",
  },
  heroLine: "I build websites that make your competitors’ developers nervous.",
  aboutLead:
    "Full-stack developer from Vizag. While everyone else is “learning React” in a 40-part tutorial series, I’m shipping real sites for real businesses.",
  about: [
    "Property portals, a steel brand, a business network and an AI caption tool, all live, all mine. I write clean UI, ruthless APIs and commit messages a human can actually read.",
    "I solve DSA for fun (yes, really), I’m always learning something new, from algorithms to DevOps, and no, I don’t center divs by hoping.",
  ],
};

export type Skill = { name: string; color: string; emoji: string; group: string };

export const skills: Skill[] = [
  { name: "MongoDB", color: "bg-mint", emoji: "🍃", group: "MERN" },
  { name: "Express", color: "bg-tan", emoji: "🚂", group: "MERN" },
  { name: "React", color: "bg-cyan", emoji: "⚛️", group: "MERN" },
  { name: "Node.js", color: "bg-mint", emoji: "🟢", group: "MERN" },
  { name: "Next.js", color: "bg-sun", emoji: "▲", group: "Frameworks" },
  { name: ".NET", color: "bg-pinksoft", emoji: "🔷", group: "Frameworks" },
  { name: "Python", color: "bg-cyan", emoji: "🐍", group: "Languages" },
  { name: "JavaScript", color: "bg-sun", emoji: "✨", group: "Languages" },
  { name: "Tailwind", color: "bg-mint", emoji: "🌬️", group: "Tools" },
  { name: "Git", color: "bg-pinksoft", emoji: "🌿", group: "Tools" },
];

export type Project = {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  client: boolean;
  image: string;
  url: string;
  host: string;
  color: string;
  tape: string;
  brief: string;
  built: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "vgrowthmates",
    n: "01",
    title: "VGrowthMates",
    tagline: "Where trusted businesses find each other.",
    description:
      "A business-networking ecosystem where members meet, businesses connect and opportunities grow.",
    tags: ["Community", "Marketplace"],
    client: false,
    image: "/projects/vgrowthmates.png",
    url: "https://vgrowthmates.com/",
    host: "vgrowthmates.com",
    color: "bg-mint",
    tape: "ca-tape-mint",
    brief:
      "The goal: one place where members discover verified businesses, follow chapter meetings and turn introductions into real opportunities, with no cold pitches and no fake listings.",
    built: [
      "A verified-business marketplace with search by name, location and category",
      "Chapters, meetings, talks and gallery sections to keep the community active",
      "A member login with a clean, trust-first landing experience",
      "A responsive UI with a clear green-and-gold identity",
    ],
    stack: ["Next.js", "React"],
  },
  {
    slug: "elevate-futuristic-properties",
    n: "02",
    title: "Elevate Futuristic Properties",
    tagline: "Dream property, found in a few clicks.",
    description:
      "A Visakhapatnam real-estate portal for VMRDA plots, lands, flats, villas and commercial spaces.",
    tags: ["Real Estate", "Client Work"],
    client: true,
    image: "/projects/elevate.png",
    url: "https://elevatefuturisticproperties.com/",
    host: "elevatefuturisticproperties.com",
    color: "bg-cyan",
    tape: "ca-tape-blue",
    brief:
      "The goal: a single trusted place to browse verified, RERA-listed inventory across Visakhapatnam, from plots and bulk lands to flats, villas and warehouses.",
    built: [
      "Property search with filters for location, type and budget",
      "Dedicated sections for plots, bulk lands, resale homes, flats, villas and commercial spaces",
      "Enquiry and list-your-property flows that go straight to the team",
      "A branded animated loader and a dark, premium visual identity",
    ],
    stack: ["Next.js", "React"],
  },
  {
    slug: "blackgold-tmt",
    n: "03",
    title: "BlackGold TMT",
    tagline: "Forged for the long build.",
    description:
      "A premium brand site for high-ductility TMT rebars rolled and tested in Visakhapatnam since 1996.",
    tags: ["Manufacturing", "Client Work"],
    client: true,
    image: "/projects/blackgold.png",
    url: "https://blackgoldtmt.vercel.app/",
    host: "blackgoldtmt.vercel.app",
    color: "bg-sun",
    tape: "",
    brief:
      "The goal: a website that feels as solid as the product, and makes grades, testing and traceability easy for builders to understand.",
    built: [
      "A cinematic hero with an animated 3D rebar and gold accents",
      "Grade pages for Fe 500D, Fe 550D and Fe 600 in 8–32 mm sizes",
      "A ‘how we test’ story around heat numbers and mill test certificates",
      "Light and dark themes, plus a quick quote flow",
    ],
    stack: ["Next.js", "React"],
  },
  {
    slug: "sri-vasishta-constructions",
    n: "04",
    title: "Sri Vasishta Constructions",
    tagline: "Find a place to call home.",
    description:
      "A builder’s site for RERA-approved gated communities, apartments, villas, plots and commercial spaces.",
    tags: ["Construction", "Client Work"],
    client: true,
    image: "/projects/vasishta.png",
    url: "https://vasishta-self.vercel.app/",
    host: "vasishta-self.vercel.app",
    color: "bg-pinksoft",
    tape: "ca-tape-pink",
    brief:
      "The goal: projects that look as good online as they do on site, with RERA credibility front and centre and a fast path from browsing to a phone call.",
    built: [
      "A full-bleed architectural hero with a clear Buy / Rent / Plots search",
      "RERA registration surfaced as a trust badge",
      "Floating WhatsApp and call buttons for instant enquiries",
      "A bold orange-and-blue brand system carried through every page",
    ],
    stack: ["Next.js", "React"],
  },
  {
    slug: "caption-studio-ai",
    n: "05",
    title: "Caption Studio AI",
    tagline: "Captions that move like the edit.",
    description:
      "Generate word-timed AI captions from a video, style them with 24 animated templates and export MP4 or SRT.",
    tags: ["AI", "Video Tool"],
    client: false,
    image: "/projects/caption.png",
    url: "https://caption-studio-ai.vercel.app/",
    host: "caption-studio-ai.vercel.app",
    color: "bg-leaf",
    tape: "ca-tape-mint",
    brief:
      "The goal: drop in a video, get captions on the beat, pick a style and export, without handing the footage over to anyone.",
    built: [
      "AI transcription with word-level timing",
      "24 animated caption templates with live preview",
      "MP4 and SRT export rendered by the same engine you preview with",
      "Privacy-first by design: video stays local, only the extracted audio is sent for transcription",
    ],
    stack: ["Next.js", "React", "AI"],
  },
];

export type Education = {
  id: string;
  level: string;
  title: string;
  place: string;
  detail: string;
  years: string;
  description: string;
  image: string;
  alt: string;
  aspect: string;
  position: string;
  tape: string;
  tilt: string;
};

export const education: Education[] = [
  {
    id: "school",
    level: "School",
    title: "Where it all started",
    place: "KV INS Kalinga",
    detail: "Kendriya Vidyalaya · Classes 1 – 10",
    years: "2010 – 2020",
    description:
      "Ten years, one checked uniform and a squad that never stayed out of the frame.",
    image: "/education/school.jpg",
    alt: "Durga Prasad with a group of school friends in checked uniforms in a classroom",
    aspect: "aspect-[16/9]",
    position: "object-center",
    tape: "",
    tilt: "-rotate-2",
  },
  {
    id: "college",
    level: "Intermediate",
    title: "Level two unlocked",
    place: "Sri Basara Junior College",
    detail: "MPC · Classes 11 & 12",
    years: "2020 – 2022",
    description:
      "Maths, Physics and Chemistry, plus the glasses-and-glitch-filter era.",
    image: "/education/college.jpg",
    alt: "Selfie of Durga Prasad wearing round glasses with a glitch filter",
    aspect: "aspect-[4/5]",
    position: "object-center",
    tape: "ca-tape-pink",
    tilt: "rotate-1",
  },
  {
    id: "btech",
    level: "B.Tech",
    title: "The engineering arc",
    place: "NSRIT",
    detail: "B.Tech · Electronics & Communication Engineering",
    years: "2022 – 2026",
    description:
      "Four years of ECE. Electronics by degree, full-stack by obsession.",
    image: "/education/btech.jpg",
    alt: "Durga Prasad smiling in a light blue shirt and college ID lanyard under a cloudy sky",
    aspect: "aspect-square",
    position: "object-[50%_70%]",
    tape: "ca-tape-mint",
    tilt: "-rotate-1",
  },
];

export const openSource = [
  {
    title: "Striver’s DSA sheet",
    text: "A public repository with daily solved problems. Consistency over cramming.",
    since: "2025",
  },
  {
    title: "UI components & boilerplates",
    text: "Reusable components and starter templates shared for beginner developers.",
    since: "2025",
  },
];
