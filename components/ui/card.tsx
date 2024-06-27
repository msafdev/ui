import { MoveRight, Share } from "lucide-react";
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
      "sm:col-span-1 lg:col-span-3 col-span-1 row-span-1 aspect-square sm:aspect-square lg:aspect-[3/1]",
  };

  return (
    <div
      className={`group relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl border p-4 ${size[gridClass]}`}
    >
      <div className="absolute bottom-0 z-30 flex w-full items-center bg-gradient-to-b from-transparent to-accent px-3 pb-2 pt-12 text-accent-foreground">
        <p className="font-mono text-sm font-medium sm:text-base">{name}</p>
      </div>
      <div className="absolute right-3 top-3 z-30 flex gap-x-3 transition-all duration-300 ease-in-out lg:-translate-y-12 lg:scale-90 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
        <Button variant="secondary" size="icon" asChild className="h-8 w-8">
          <Link href={`/component/${slug}`} scroll={true}>
            <MoveRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="secondary" size="icon" asChild className="h-8 w-8">
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              name,
            )}&url=https://ui.msaf.tech/lab/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Share className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Card;
