import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { COMPONENTS } from "@/lib/data";
import { Gem } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
      <div className="flex max-w-xl flex-col items-center gap-y-5">
        <Badge />
        <h1 className="inline-block text-balance bg-gradient-to-br from-foreground via-foreground to-purple-500 bg-clip-text text-center text-xl font-bold text-transparent md:text-3xl">
          Handcrafted and homegrown components for your next project
        </h1>
        <p className="text-center text-sm text-muted-foreground md:text-base">
          A collection of{" "}
          <span className="font-medium text-foreground">Next.js</span>{" "}
          components that are designed to be simple, clean, and easy to use.
          Styled with{" "}
          <span className="font-medium text-foreground">Tailwind CSS</span> and{" "}
          <span className="font-medium text-foreground">TypeScript</span>.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <Button variant="default" size="sm" className="font-mono font-medium">
            <Link
              href="https://github.com/msafdev/ui"
              target="_blank"
              className="flex items-center gap-x-2"
            >
              Read the Docs
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="font-mono font-medium">
            <Link
              href="https://trakteer.id/msafdev"
              target="_blank"
              className="flex items-center gap-x-2"
            >
              <Gem className="h-3 w-3" />
              Donate on Trakteer
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-24 grid w-full max-w-5xl grid-flow-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((component, index) => (
          <Card
            key={index}
            name={component.name}
            slug={component.slug}
            gridClass={component.gridClass}
          >
            <component.child />
          </Card>
        ))}
      </div>
    </section>
  );
}
