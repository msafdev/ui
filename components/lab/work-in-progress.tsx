import { TrafficCone } from "lucide-react";

const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <TrafficCone className="h-8 w-8 text-amber-500" />
      <p className="text-center text-sm font-semibold text-foreground">
        Currently being <br /> cooked 🔥
      </p>
    </div>
  );
};

export default WorkInProgress;
