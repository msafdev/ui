import {
  BadgeDollarSign,
  BadgeEuro,
  BadgeRussianRuble,
} from "lucide-react";

const MoneyWidget = () => {
  return (
    <div className="flex w-fit flex-col divide-y rounded-xl border bg-popover">
      <div className="flex w-full items-center justify-between gap-x-10 px-4 py-3 md:gap-x-12">
        <div className="flex items-center gap-x-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 p-1 text-white">
            <BadgeDollarSign className="h-full w-full" />
          </div>
          <p className="text-sm font-semibold">USD</p>
        </div>
        <code className="text-base font-medium text-sky-400">
          <span className="text-xs">$</span>63.2K
        </code>
      </div>
      <div className="flex w-full items-center justify-between gap-x-10 px-4 py-3 md:gap-x-12">
        <div className="flex items-center gap-x-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 p-1 text-white">
            <BadgeEuro />
          </div>
          <p className="text-sm font-semibold">EURO</p>
        </div>
        <code className="text-base font-medium text-indigo-400">
          <span className="text-xs">$</span>5.7K
        </code>
      </div>
      <div className="flex w-full items-center justify-between gap-x-10 px-4 py-3 md:gap-x-12">
        <div className="flex items-center gap-x-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-emerald-500 p-1 text-white">
            <BadgeRussianRuble />
          </div>
          <p className="text-sm font-semibold">RUB</p>
        </div>
        <code className="text-base font-medium text-emerald-400">
          <span className="text-xs">$</span>482
        </code>
      </div>
    </div>
  );
};

export default MoneyWidget;
