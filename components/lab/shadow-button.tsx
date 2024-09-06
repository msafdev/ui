import { cn } from "@/lib/utils";

interface ShadowButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

const ShadowButton = ({
  children = "Star the Github",
  className,
  variant = "primary",
}: ShadowButtonProps) => {
  const variantStyles = {
    primary:
      "shadow-[0_8px_0_0_hsl(var(--border))] hover:shadow-[0_4px_0_0_hsl(var(--border))] active:shadow-[0_0_0_0_hsl(var(--border))] bg-primary border-white dark:border-black text-background",
    secondary:
      "shadow-[0_8px_0_0_hsl(var(--border))] hover:shadow-[0_4px_0_0_hsl(var(--border))] active:shadow-[0_0_0_0_hsl(var(--border))] bg-secondary border-white dark:border-black text-foreground",
    destructive:
      "shadow-[0_8px_0_0_hsl(var(--border))] hover:shadow-[0_4px_0_0_hsl(var(--border))] active:shadow-[0_0_0_0_hsl(var(--border))] bg-destructive border-white dark:border-black",
    outline:
      "shadow-[0_8px_0_0_hsl(var(--border))] hover:shadow-[0_4px_0_0_hsl(var(--border))] active:shadow-[0_0_0_0_hsl(var(--border))] bg-transparent border-border border",
  };

  return (
    <button
      className={cn(
        "flex animate-background-shine items-center justify-center rounded-md border-b-[1px] px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:translate-y-1 active:translate-y-2",
        className,
        variantStyles[variant],
      )}
    >
      {children}
    </button>
  );
};

export default ShadowButton;
