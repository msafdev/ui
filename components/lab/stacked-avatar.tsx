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
  {
    username: "ibelick",
    fallback: "JT",
  },
];

const StackedAvatar = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center -space-x-4">
        {profiles.map((profile, index) => (
          <Avatar key={index} className="border-2">
            <AvatarImage
              src={`https://github.com/${profile.username}.png`}
              alt="@shadcn"
            />
            <AvatarFallback>{profile.fallback}</AvatarFallback>
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
