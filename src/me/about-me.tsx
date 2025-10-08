const myGithub = "https://github.com/techfreaque";

// ===== BASIC PERSONAL INFORMATION =====
export const personalInfo = {
  fullName: "Marcus Brandstaetter",
  nickname: "Max",
  location: "Germany",
  age: new Date().getFullYear() - 1991,
  email: "max@a42.ch",
  github: myGithub,
  linkedIn: "https://www.linkedin.com/in/marcus-brandstaetter",
  twitter: "https://x.com/sir_freaque",
  thisProject: `${myGithub}/my-next-js-page`,
  website: "max.a42.ch",
  experienceYears: "13+",
  startDate: "January 2012",
  currentStatus: "Actively seeking AI and/or cross-platform opportunities",
  contactEmailSubject: "Let's build something amazing together",
} as const;

// ===== ABOUT SECTION CONTENT =====
export const aboutContent = {
  welcomeText: `With ${personalInfo.experienceYears} years of experience, I'm a full stack developer who went from fixing luxury cars to building developer tools and AI systems.`,
  textPart1: `My journey started with a car mechatronics apprenticeship at a Ferrari, Maserati, Aston Martin & Bentley specialist in Salzburg. I was the guy who fixed the cars, handled IT support, and learned that complex systems are just puzzles waiting to be solved. That hands-on problem-solving mindset stuck with me.`,
  textPart2: `I moved into tech support and team leadership roles, eventually founding my own companies. At Sovendus, I led the integration team and built developer-hub.sovendus.com with 20+ platform-specific plugins. The goal was always the same: reduce friction, empower developers, and build tools that actually solve problems.`,
  textPart3: `These days I'm working on utilizing AI and looking for my next challenge in AI and/or cross-platform development. I still fix my own car, phone, and washing machine - because why pay for skills you have? I believe in building teams that become close friends, writing code that lasts, and always questioning if there's a better way.`,
} as const;

} as const;
