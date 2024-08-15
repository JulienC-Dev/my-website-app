export type Command = {
  [key: string]: string;
};
export const listOfCommand: Command[] = [
  { whoami: "I m julien" },
  {
    help: "Supported commands: ['whoami', 'stack', 'github', 'linkedin']",
  },
  { github: "https://github.com/JulienC-Dev" },
  { stack: "Python, Next.js, TypeScript, Docker, Kubernetes, AWS" },
  { linkedin: "https://www.linkedin.com/in/julien-cormier-41696778/" },
];
