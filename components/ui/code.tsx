import { Suspense } from "react";

import CopyButton from "./copy-button";
import Shiki, { CodeProps } from "./shiki";

const Code: React.FC<CodeProps> = ({ code, lang, theme }) => {
  return (
    <div className="relative h-fit w-full max-w-3xl overflow-hidden rounded-lg bg-[#24292E]">
      <Suspense
        fallback={
          <div className="h-[212px] w-full animate-pulse rounded-lg bg-[#24292E]" />
        }
      >
        <Shiki code={code} lang={lang} />
      </Suspense>
      {/* Overlay */}
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-[#24292E]" />

      {/* Copy Button */}
      <CopyButton code={code} className="absolute right-3 top-3 h-8 w-8" />
    </div>
  );
};

export default Code;
