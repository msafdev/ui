import Marquee from "@/components/lab/marquee";
import ShadowButton from "@/components/lab/shadow-button";
import ShiningBadge from "@/components/lab/shining-badge";
import StackedAvatar from "@/components/lab/stacked-avatar";
import Tooltip from "@/components/lab/tooltip";
import WorkInProgress from "@/components/lab/work-in-progress";

export const CSS_CONFIG = {
  ["btn-inner-shadow"]: {
    "box-shadow": "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
  },
};

export const TW_CONFIG = {
  ["background-shine"]: {
    animation: {
      "background-shine": "background-shine 2s infinite linear",
    },
    keyframes: {
      "background-shine": {
        "0%": {
          backgroundPosition: "0 0",
        },
        "100%": {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },
};

export const COMPONENTS = [
  {
    name: "Shadow Button",
    slug: "shadow-button",
    child: ShadowButton,
  },
  {
    name: "Shining Badge",
    slug: "shining-badge",
    child: ShiningBadge,
    twConfig: TW_CONFIG["background-shine"],
  },
  {
    name: "Stacked Avatar",
    slug: "stacked-avatar",
    child: StackedAvatar,
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    child: Tooltip,
    gridClass: "medium-card",
  },
  {
    name: "Marquee",
    slug: "marquee",
    child: Marquee,
  },
  {
    name: "WIP",
    slug: "",
    child: WorkInProgress,
  },
];
