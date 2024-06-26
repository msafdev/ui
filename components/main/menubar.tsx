"use client";

import { useState, useEffect } from "react";

import { Menu, Star } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme";
import Link from "next/link";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const className = isOpen ? "h-screen opacity-100" : "h-0 opacity-0";

  return (
    <>
      <nav className="z-50 sm:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant={"secondary"}
          size={"icon"}
          className="h-9 w-9"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </nav>
      <div
        className={`absolute left-0 top-0 z-40 flex w-screen flex-col items-center justify-center overflow-hidden bg-popover/80 text-accent-foreground backdrop-blur-sm transition-all duration-300 ease-in-out sm:hidden ${className}`}
      >
        <div className="flex flex-col gap-y-3">
          <ModeToggle variant="mobile" />
          <Button variant={"default"} className="gap-x-3" size={"sm"} asChild>
            <Link
              className="inline-flex gap-x-3"
              href={"https://github.com/msafdev/ui"}
              target="_blank"
            >
              <Star className="h-4 w-4" />
              Star on Github
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menubar;
