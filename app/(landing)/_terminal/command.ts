export type Command = {
  [key: string]: string;
};
export const listOfCommand: Command[] = [
  {
    whoami: `Hey, I'm Julien ! I'm a developer who builds websites. After graduating, I worked professionally, focusing on building scalable web applications.`,
  },
  {
    help: "Supported commands: ['whoami', 'stack', 'github', 'linkedin', 'domain', 'art']",
  },
  { github: "https://github.com/JulienC-Dev" },
  { stack: "Python, Next.js, TypeScript, Docker, Kubernetes, AWS, Vercel" },
  { linkedin: "https://www.linkedin.com/in/julien-cormier-41696778/" },
  { domain: "Finance, Cybersecurity, Computer Science" },
  { art: "Is code a form of art?" },
];
