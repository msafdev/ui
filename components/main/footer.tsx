import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex w-full items-center pad-x py-6">
            <p className="text-xs md:text-sm text-muted-foreground">
                Made with ❤️ by{" "}
                <Link
                    href="/"
                    target="_blank"
                    className="hover:underline text-foreground"
                >
                    @msafdev
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
