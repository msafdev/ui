import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-auto w-full grow flex-col items-center justify-center pad-x">
      <h1 className="text-center text-xl md:text-3xl font-bold max-w-xl text-balance">
        Next Starter Kit with TypeScript and Tailwind CSS
      </h1>
    </main>
  );
}
