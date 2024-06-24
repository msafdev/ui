import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { ModeToggle } from "../theme";
import Menubar from "./menubar";
import { Links } from "@/lib/constants";

const Navbar = () => {
  return (
    <header className="pad-x flex items-center justify-between py-6">
      <Link href={"/"} className="z-50 flex items-center gap-x-1">
        <Image src={Logo} alt="Logo" className="h-6 w-6" />
        <h1 className="hidden text-xl font-semibold sm:block">Acme</h1>
      </Link>

      <nav className="hidden text-sm font-medium sm:block">
        <ul className="flex items-center gap-x-6">
          {Links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-x-2 sm:flex">
        <ModeToggle variant="desktop" />
        <Button variant={"default"} className="gap-x-2.5" size={"sm"}>
          <Star className="h-4 w-4" />
          Github
        </Button>
      </div>

      <Menubar />
    </header>
  );
};

export default Navbar;
