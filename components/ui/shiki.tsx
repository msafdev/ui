import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";

export type CodeProps = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
};

export default async function Shiki({
  code,
  lang = "javascript",
  theme = "poimandres",
}: CodeProps) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  return (
    <div
      className="no-scrollbar w-full min-w-0 overflow-x-auto rounded-lg px-6 py-4 [&>*]:text-xs md:[&>*]:text-sm [&>pre>code>.line]:pr-10"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
