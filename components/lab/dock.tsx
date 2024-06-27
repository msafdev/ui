"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, Home, Package2, VenetianMask } from "lucide-react";

let tabs = [
  { id: 1, label: "Home", icon: <Home className="h-full w-full" /> },
  { id: 2, label: "Lab", icon: <Beaker className="h-full w-full" /> },
  { id: 3, label: "About", icon: <Package2 className="h-full w-full" /> },
  {
    id: 4,
    label: "Hide",
    icon: <VenetianMask className="h-full w-full" />,
  },
];

const Dock = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex rounded-2xl border bg-popover p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
          } group/dock relative h-9 w-9 p-2.5 text-sm transition-all duration-500 ease-in-out focus-visible:outline-none`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="dock-bubble"
              className="absolute inset-0 z-10 rounded-[12px] bg-primary/40 mix-blend-difference outline-none ring-0 dark:bg-primary/80"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.icon}
          <span className="absolute -top-8 left-1/2 hidden md:block -translate-x-1/2 -translate-y-2 scale-75 rounded-md border bg-popover p-1 px-1.5 text-[10px] font-medium leading-none text-foreground opacity-0 transition-all duration-200 ease-in-out group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100">
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Dock;
