const PulsingBadge = () => {
  return (
    <div className="relative group/badge flex w-fit cursor-default items-center gap-x-2 rounded-full border bg-gradient-to-b from-popover to-border pl-2 pr-2 text-muted-foreground dark:to-accent">
      <div className="h-2 w-2 rounded-full bg-green-500 z-10" />
      <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping absolute left-[9px]" />
      <p className="font-mono text-xs font-medium transition-all duration-300 ease-in-out group-hover/badge:text-foreground sm:text-base md:text-sm">
        Online
      </p>
    </div>
  );
};

export default PulsingBadge;
