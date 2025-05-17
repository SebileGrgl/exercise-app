import { HomeIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import type { SidebarLink } from "../types";

const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    icon: HomeIcon,
    path: "/",
  },
  {
    id: 2,
    icon: BookmarkIcon,
    path: "/my-favorites",
  },
];

export default sidebarLinks;
