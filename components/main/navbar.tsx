import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { ModeToggle } from "../theme";
import Menubar from "./menubar";

const Navbar = () => {
  return (
    <header className="pad-x flex items-center justify-between py-4">
      <Link href={"/"} className="z-50 flex items-center gap-x-1">
        <Image src={Logo} alt="Logo" className="h-8 w-8" />
      </Link>

      <div className="hidden items-center gap-x-2 sm:flex">
        <ModeToggle variant="desktop" />
        <Button variant={"default"} className="" size={"sm"} asChild>
            <Link
              className="inline-flex gap-x-2"
              href={"https://github.com/msafdev/ui"}
              target="_blank"
            >
              <Star className="h-4 w-4" />
              Star on Github
            </Link>
          </Button>
      </div>

      <Menubar />
    </header>
  );
};

export default Navbar;
