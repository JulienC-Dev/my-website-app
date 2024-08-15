import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto as FontRoboto, Inter as FontSans } from "next/font/google"; // Import Roboto font
import { AvatarHeader } from "./_components/header/avatar";
import { NavigationMenuHeader } from "./_components/header/navigationMenu";
import "./globals.css";

const fontRoboto = FontRoboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Julien's Portfolio | Web Developer & Designer",
  description:
    "Explore Julien's personal portfolio showcasing his web development and design projects. Learn more about his skills, experience, and contact information.",
  keywords:
    "Julien, portfolio, web developer, UI/UX designer, projects, contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen flex flex-col bg-amber-50 font-sans antialiased",
          fontSans.variable,
          fontRoboto.variable
        )}
      >
        {/* Header */}
        <div className="flex justify-between mx-2 my-1">
          <NavigationMenuHeader />
          <AvatarHeader />
        </div>

        {/* Content */}
        <div className="flex-grow bg-amber-100 overflow-auto my-10 mx-10 border-amber-300 border-2">
          {children}
        </div>
      </body>
    </html>
  );
}
