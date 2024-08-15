import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarHeader() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/JulienC-Dev.png" alt="@shadcn" />
      <AvatarFallback>JC</AvatarFallback>
    </Avatar>
  );
}
