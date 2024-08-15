export type Command = {
  [key: string]: string;
};
export const listOfCommand: Command[] = [
  { whoami: "I m julien" },
  {
    help: "Supported commands: ['about', 'experience', 'education', 'skills', 'contact']",
  },
  { github: "my github" },
  { stack: "Python, Next.js, TypeScript, Docker, Kubernetes, AWS" },
];
