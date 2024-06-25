import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const profiles = [
  {
    username: "msafdev",
    fallback: "MS",
  },
  {
    username: "shadcn",
    fallback: "CN",
  },
  {
    username: "leerob",
    fallback: "LR",
  },
];

const StackedAvatar = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center -space-x-4">
        {profiles.map((profile, index) => (
          <Avatar key={index} className="relative cursor-pointer group/avatar hover:z-10 overflow-visible">
            <AvatarImage
              src={`https://github.com/${profile.username}.png`}
              alt="@shadcn"
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full">{profile.fallback}</AvatarFallback>
            <code className="absolute text-xs -bottom-5 underline underline-offset-2 left-1/2 -translate-x-1/2 z-10 text-accent-foreground opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 ease-in-out">
              {profile.username}
            </code>
          </Avatar>
        ))}
      </div>
      <p className="inline-flex items-center">
        <span className="text-sm font-medium text-muted-foreground">99</span>
        <Plus className="h-3 w-3 text-foreground" />
      </p>
    </div>
  );
};

export default StackedAvatar;
