import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pad-x flex w-full flex-col items-center justify-center gap-y-4 py-6">
      {/* Credits */}
      <p className="max-w-sm text-center text-xs text-muted-foreground md:text-sm">
        This project uses a lot of inspirations as well as libraries from other
        creators, including{" "}
        <Link
          href={"https://ibelick.com"}
          target="_blank"
          className="text-foreground underline-offset-2 hover:underline"
        >
          Ibelick
        </Link>
        ,{" "}
        <Link
          href={"https://magicui.design"}
          target="_blank"
          className="text-foreground underline-offset-2 hover:underline"
        >
          Magic UI
        </Link>
        , and{" "}
        <Link
          href={"https://ui.shadcn.com"}
          target="_blank"
          className="text-foreground underline-offset-2 hover:underline"
        >
          Shadcn
        </Link>
      </p>

      {/* Creator */}
      <p className="max-w-sm text-center text-xs text-muted-foreground md:text-sm">
        <code>Made with ❤️ by</code>{" "}
        <Link
          href="https://github.com/msafdev"
          target="_blank"
          className="font-medium text-foreground hover:underline"
        >
          @msafdev
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
