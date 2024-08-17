import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarHeader() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/JulienC-Dev.png" alt="@Github" />
      <AvatarFallback>JC</AvatarFallback>
    </Avatar>
  );
}
