import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const items = [
  {
    name: "Salman",
    username: "msafdev",
    fallback: "MS",
    body: "Wowie! Inspired by @magicui",
  },
  {
    name: "Shadcn",
    username: "shadcn",
    fallback: "CN",
    body: "Also uses my UI library!",
  },
  {
    name: "Lee Rob",
    username: "leerob",
    fallback: "LR",
    body: "I'm at a loss for words. This sucks!",
  },
  {
    name: "Github",
    username: "github",
    fallback: "GH",
    body: "Take a look at his Github!",
  },
  {
    name: "Jobless",
    username: "jobless",
    fallback: "JL",
    body: "He looks capable! Hire him.",
  },
];

const Marquee = () => {
  return (
    <div className="group flex gap-x-4 overflow-hidden p-2">
      {/* Overlay */}
      <div className="h-full w-8 bg-gradient-to-r from-background to-transparent absolute left-0 top-0 z-10"/>
      <div className="h-full w-8 bg-gradient-to-l from-background to-transparent absolute right-0 top-0 z-10"/>

      {/* Marquee */}
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 animate-marquee flex-row justify-around gap-4"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex min-w-64 flex-col gap-y-3 overflow-hidden rounded-lg border bg-card"
              >
                <div className="flex items-center gap-x-3 px-4 pb-2 pt-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={`https://github.com/${item.username}.png`}
                      alt={`${item.username}'s avatar`}
                    />
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">
                      {item.name}
                    </p>
                    <code className="text-xs leading-none text-muted-foreground">
                      @{item.username}
                    </code>
                  </div>
                </div>
                <p className="bg-accent px-4 pb-3 pt-2 text-sm text-accent-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
