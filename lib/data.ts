import AvatarStatus from "@/components/lab/avatar-status";
import LoadingBar from "@/components/lab/loading-bar";
import LoadingCircle from "@/components/lab/loading-circle";
import Marquee from "@/components/lab/marquee";
import ShadowButton from "@/components/lab/shadow-button";
import ShiningBadge from "@/components/lab/shining-badge";
import StackedAvatar from "@/components/lab/stacked-avatar";
import Tooltip from "@/components/lab/tooltip";
import CuratedImage from "@/components/lab/curated-image";
import WorkInProgress from "@/components/lab/work-in-progress";
import MoneyWidget from "@/components/lab/money-widget";
import MenuBar from "@/components/lab/menu-bar";
import DigitalClock from "@/components/lab/digital-clock";
import DynamicIsland from "@/components/lab/dynamic-island";
import TiltCard from "@/components/lab/tilt-card";
import Dock from "@/components/lab/dock";
import SwipeButton from "@/components/lab/swipe-button";

interface ComponentConfig {
  name: string;
  slug: string;
  child: React.ComponentType<any>;
  twConfig?: object;
  gridClass?: string;
}

export type TWConfig = {
  [key: string]: object;
};

export const TW_CONFIG: TWConfig = {
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
  ["marquee"]: {
    animation: {
      marquee: "marquee 40s linear infinite",
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - 16px))" },
      },
    },
  },
};

export const COMPONENTS: ComponentConfig[] = [
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
    name: "Loading Circle",
    slug: "loading-circle",
    child: LoadingCircle,
  },
  {
    name: "Avatar Status",
    slug: "avatar-status",
    child: AvatarStatus,
  },
  {
    name: "Loading Bar",
    slug: "loading-bar",
    child: LoadingBar,
  },
  {
    name: "Curated Image",
    slug: "curated-image",
    child: CuratedImage,
  },
  {
    name: "Money Widget",
    slug: "money-widget",
    child: MoneyWidget,
  },
  {
    name: "Digital Clock",
    slug: "digital-clock",
    child: DigitalClock,
  },
  {
    name: "Marquee",
    slug: "marquee",
    child: Marquee,
    gridClass: "medium-card",
    twConfig: TW_CONFIG["marquee"],
  },
  {
    name: "Menu Bar",
    slug: "menu-bar",
    child: MenuBar,
  },
  {
    name: "Dynamic Island",
    slug: "dynamic-island",
    child: DynamicIsland,
  },
  {
    name: "Tilt Card",
    slug: "tilt-card",
    child: TiltCard,
  },
  {
    name: "Dock",
    slug: "dock",
    child: Dock,
  },
  {
    name: "Swipe Button",
    slug: "swipe-button",
    child: SwipeButton,
  },
  {
    name: "WIP",
    slug: "work-in-progress",
    child: WorkInProgress,
    gridClass: "last-card",
  },
];
