import BellIcon from "@/assets/icons/BellIcon";
import HeartIcon from "@/assets/icons/HeartLineIcon";
import PencilIcon from "@/assets/icons/PencilIcon";

const navItems = [
  {
    name: "Review",
    href: "/reviews",
    Icon: PencilIcon,
  },
  { name: "Trips", href: "/trips", Icon: HeartIcon },
  { name: "Alerts", href: "/alerts", Icon: BellIcon },
];

export default navItems;
