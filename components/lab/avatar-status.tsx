import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarStatus = () => {
  return (
    <div className="group relative h-fit w-fit rounded-full border-2 *:cursor-default">
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="https://github.com/msafdev.png"
          alt="Salman's avatar"
        />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className="transform-left absolute bottom-0 left-8 max-h-4 max-w-4 overflow-hidden rounded-full border-2 bg-green-500 text-xs font-medium text-primary-foreground transition-all duration-300 ease-in-out group-hover:-bottom-1 group-hover:h-fit group-hover:max-h-64 group-hover:max-w-64 group-hover:px-2">
        <span className="text-[10px] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
          Online
        </span>
      </div>
    </div>
  );
};

export default AvatarStatus;
