"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Ellipsis, Phone } from "lucide-react";

const DynamicIsland = () => {
  const refMenu = React.useRef<HTMLDivElement>(null);
  const [openIsland, setOpenIsland] = useState(false);

  const duration = 0.4;
  const transition = { duration, ease: [0.32, 0.72, 0, 1] };

  const menuVariants = {
    open: {
      opacity: 1,
      width: "208px",
      height: "52px",
      borderRadius: "32px",
      transition,
    },
    closed: {
      opacity: 1,
      width: "64px",
      height: "16px",
      borderRadius: "32px",
      transition,
    },
  };

  const contentVariants = {
    open: { opacity: 1, translateY: 0, transition },
    closed: { opacity: 0, translateY: -24, transition },
  };

  const islandVariants = {
    open: {
      opacity: 0,
      transition: {
        duration: duration / 2,
      },
    },
    closed: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.button
        onClick={() => setOpenIsland(!openIsland)}
        variants={islandVariants}
        initial="closed"
        animate={openIsland ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
        className="flex h-4 w-16 items-center justify-center rounded-full bg-primary"
      >
        <Ellipsis className="h-4 w-4 animate-pulse text-green-500" />
      </motion.button>
      <AnimatePresence>
        {openIsland && (
          <motion.div
            className="absolute flex items-center overflow-hidden bg-primary"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onClick={(e) => {
              e.stopPropagation();
              setOpenIsland(false);
            }}
            ref={refMenu}
          >
            <motion.div
              variants={contentVariants}
              className="relative flex w-full cursor-pointer items-center gap-x-2 p-1.5"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/msafdev.png"
                  alt="Salman's avatar"
                />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-[10px] font-medium text-muted-foreground">
                  iPhone
                </p>
                <p className="text-xs font-semibold text-primary-foreground">
                  Salman's
                </p>
              </div>
              <button className="ml-auto flex aspect-square h-10 w-auto shrink-0 items-center justify-center rounded-full bg-emerald-500/90 text-white">
                <Phone className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicIsland;
