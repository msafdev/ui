"use client";

import { ClipboardList } from "lucide-react";
import { Button } from "./button";
import { useToast } from "@/components/ui/use-toast";

const CopyButton = ({
  className,
  code,
}: {
  className?: string;
  code: string;
}) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard!",
      description: "Don't forget to leave a ⭐️ on the repo!",
    });
  };

  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      className={className}
      onClick={handleCopy}
    >
      <ClipboardList className="h-3.5 w-3.5" />
    </Button>
  );
};

export default CopyButton;
