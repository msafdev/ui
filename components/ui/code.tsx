import CopyButton from "./copy-button";
import Shiki, { CodeProps } from "./shiki";
import { Suspense } from "react";

const Code: React.FC<CodeProps> = ({ code, lang, theme }) => {
  return (
    <div className="relative h-fit w-full max-w-3xl overflow-hidden rounded-lg bg-[#1B1E28]">
      <Suspense
        fallback={
          <div className="aspect-square h-auto w-full animate-pulse rounded-lg bg-[#1B1E28]" />
        }
      >
        <Shiki code={code} lang={lang} theme={theme} />
      </Suspense>
      {/* Overlay */}
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-[#1B1E28]" />

      {/* Copy Button */}
      <CopyButton code={code} className="absolute right-3 top-3 w-8 h-8"/>
    </div>
  );
};

export default Code;
