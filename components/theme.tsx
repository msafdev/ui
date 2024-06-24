"use client";

import * as React from "react";

// Provider Imports
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Toggle Imports
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ModeToggle({ variant }: { variant?: "mobile" | "desktop" }) {
  const { theme, setTheme } = useTheme();

  const size = variant === "mobile" ? "sm" : "icon";
  const className = variant === "mobile" ? "gap-x-3" : "h-9 w-9";
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      size={size}
      className={`relative ${className}`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute left-3 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span
        className={
          variant === "desktop"
            ? "sr-only"
            : ""
        }
      >
        Toggle theme
      </span>
    </Button>
  );
}
