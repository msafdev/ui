import { Component } from "lucide-react";

import { COMPONENTS } from "@/lib/data";

const Badge = () => {
  const length = COMPONENTS.length - 1;

  return (
    <div className="group cursor-default flex w-fit items-center gap-x-2 rounded-full border bg-gradient-to-b from-popover to-zinc-200 px-3 py-1 text-muted-foreground dark:to-accent">
      <Component className="h-3 w-3 transition-all duration-300 ease-in-out group-hover:text-foreground" />
      <p className="font-mono text-xs font-medium transition-all duration-300 ease-in-out group-hover:text-foreground sm:text-base md:text-sm">
        {length} components available
      </p>
    </div>
  );
};

export default Badge;
