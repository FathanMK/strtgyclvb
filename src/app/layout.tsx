import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "STRTGYCLVB",
  description: "FOR THE OBSESSED",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased font-mono dark dark:bg-neutral-950 dark:text-neutral-50",
        jetbrainsMono.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
