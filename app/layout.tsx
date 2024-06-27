import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/theme";
import "./globals.css";

import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

import NotFound from "./not-found";

import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ui.msaf",
  description:
    "A starter kit for Next.js with Tailwind CSS and TypeScript, made with ❤️ by @msafdev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-[100svh] w-ull min-w-60 overflow-x-hidden gap-y-8 sm:gap-y-16 md:gap-y-24 lg:gap-y-32">
            <Navbar />
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
