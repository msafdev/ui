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
            activeTab === tab.id ? "" : "hover:text-foreground/80"
          } relative rounded-full px-2 py-0.5 md:px-3 md:py-1 text-sm md:font-medium text-foreground transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="menubar-bubble"
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
