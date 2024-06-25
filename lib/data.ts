import AvatarStatus from "@/components/lab/avatar-status";
import LoadingBar from "@/components/lab/loading-bar";
import LoadingCircle from "@/components/lab/loading-circle";
import Marquee from "@/components/lab/marquee";
import { ModalToggle } from "@/components/lab/modal";
import ShadowButton from "@/components/lab/shadow-button";
import ShiningBadge from "@/components/lab/shining-badge";
import StackedAvatar from "@/components/lab/stacked-avatar";
import Tooltip from "@/components/lab/tooltip";
import CuratedImage from "@/components/lab/curated-image";
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
    name: "Modal",
    slug: "modal",
    child: ModalToggle,
  },
  {
    name: "Marquee",
    slug: "marquee",
    child: Marquee,
    gridClass: "medium-card",
  },
  {
    name: "Loading Bar",
    slug: "loading-bar",
    child: LoadingBar,
  },
  {
    name: "Curated Image",
    slug: "curated-image",
    child: CuratedImage
  },
  {
    name: "WIP",
    slug: "",
    child: WorkInProgress,
    gridClass: "last-card",
  },
];
