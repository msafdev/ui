"use client";

import { useState } from "react";
import { motion } from "framer-motion";

let tabs = [
  { id: 1, label: "Home" },
  { id: 2, label: "Project" },
  { id: 3, label: "About" },
];

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1 text-sm font-medium text-foreground outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-primary mix-blend-difference rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
