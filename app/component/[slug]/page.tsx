import Code from "@/components/ui/code";
import { COMPONENTS } from "@/lib/data";

import fs from "fs";
import path from "path";
import { promisify } from "util";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8",
  );

  return fileContent.trim();
}

export async function generateStaticParams() {
  const componentSlugs = COMPONENTS.map((component) => ({
    slug: component.slug,
  }));

  return componentSlugs;
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const currentComponentData = COMPONENTS.find(
    (component) => component.slug === params.slug,
  );

  if (!currentComponentData) {
    return (
      <section className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
        <h1 className="text-center text-xl font-semibold text-accent-foreground">
          Component Not Found
        </h1>
      </section>
    );
  }

  const filePath = `./components/lab/${currentComponentData?.slug.replace(/\s+/g, "")}.tsx`;

  const code = await readFilePath(filePath)
    .catch(() => {
      return `// ${currentComponentData?.name} component not found`;
    })
    .then((data) => data);

  const twConfig = JSON.stringify(currentComponentData?.twConfig, null, 2);

  const size: { [key: string]: string } = {
    "regular-card": "aspect-[3/1]",
    "medium-card": "aspect-square md:aspect-video",
    "last-card": "aspect-video",
  };

  return (
    <section className="pad-x flex h-auto w-full grow flex-col items-center justify-center gap-y-12 md:gap-y-16">
      <div className="flex w-full max-w-3xl flex-col items-start gap-y-4">
        <h1 className="text-left text-lg font-semibold md:text-xl">
          {currentComponentData?.name}
        </h1>
        <div
          className={`relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border ${size[currentComponentData.gridClass ?? "regular-card"]}`}
        >
          <currentComponentData.child />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-background bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_2rem] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 aspect-square h-auto w-full min-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#ffffff,transparent)] dark:bg-[radial-gradient(circle,#09090B,transparent)]"></div>
        </div>
      </div>
      {twConfig && (
        <div className="flex w-full max-w-3xl flex-col items-start gap-y-4">
          <h3 className="w-full max-w-3xl text-left text-base font-semibold md:text-lg">
            Tailwind Config
          </h3>
          <Code code={twConfig} lang="json" />
        </div>
      )}
      <div className="flex w-full max-w-3xl flex-col items-start gap-y-4">
        <h3 className="w-full max-w-3xl text-left text-base font-semibold md:text-lg">
          Code
        </h3>
        <Code code={code} lang="tsx" />
      </div>
    </section>
  );
}
