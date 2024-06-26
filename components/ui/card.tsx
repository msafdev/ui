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
    "medium-card": "row-span-2 sm:col-span-2 aspect-[2/3] sm:aspect-square",
    "last-card":
      "sm:col-span-2 lg:col-span-full row-span-1 aspect-square sm:aspect-[2/1] lg:aspect-[3/1]",
  };

  return (
    <div
      className={`group relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl border p-4 ${size[gridClass]}`}
    >
      <div className="absolute bottom-0 z-50 flex w-full items-center bg-gradient-to-b from-transparent to-accent px-3 pb-2 pt-12 text-accent-foreground">
        <p className="font-mono text-sm font-medium sm:text-base">{name}</p>
      </div>
      <Button
        variant="secondary"
        size="icon"
        asChild
        className="absolute right-3 top-3 z-50 h-8 w-8 lg:scale-0 transition-all duration-300 ease-in-out lg:group-hover:scale-100"
      >
        <Link href={`/component/${slug}`} scroll={true}>
          <MoveRight className="h-4 w-4" />
        </Link>
      </Button>
      {children}
    </div>
  );
};

export default Card;
