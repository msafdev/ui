import { MoveRight } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const Card = ({
  children,
  name,
  slug,
  gridClass = "regular-card",
}: {
  children: React.ReactNode;
  name: string;
  slug: string;
  gridClass?: string;
}) => {
  const size: { [key: string]: string } = {
    "regular-card": "row-span-1 col-span-1 aspect-square",
    "medium-card": "row-span-2 sm:col-span-2 aspect-[1/2] sm:aspect-square",
  };

  return (
    <div
      className={`group relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl p-4 border ${size[gridClass]}`}
    >
      <div className="z-50 absolute bottom-0 flex w-full items-center bg-gradient-to-b from-transparent to-accent px-3 pb-2 pt-12 text-accent-foreground">
        <p className="font-mono text-sm font-medium sm:text-base">{name}</p>
      </div>
      <Button
        variant="secondary"
        size="icon"
        asChild
        className="z-50 absolute right-3 top-3 h-8 w-8 scale-0 transition-all duration-300 ease-in-out group-hover:scale-100"
      >
        <Link href={`/components/${slug}`}>
          <MoveRight className="h-4 w-4" />
        </Link>
      </Button>
      {children}
    </div>
  );
};

export default Card;
