import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

import BellIcon from "@/assets/icons/BellIcon";
import HeartIcon from "@/assets/icons/HeartLineIcon";
import PencilIcon from "@/assets/icons/PencilIcon";
import style from "./navbar.module.scss"

type NavbarProps = {
  showModal: boolean;
  setShowModal(a: boolean): void;
};

const navItems = [
  {
    name: "Review",
    href: "/reviews",
    Icon: PencilIcon,
  },
  { name: "Trips", href: "/trips", Icon: HeartIcon },
  { name: "Alerts", href: "/alerts", Icon: BellIcon },
];

const Navbar: React.FC<NavbarProps> = ({ showModal, setShowModal }) => {
  const [height, setHeight] = React.useState<number>(0);
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
  }, []);
  return (
    <div
      className={`${style.container} ${
        height > 0 ? style.shadow : ""
      }`}
    >
      <div className={style.innerContainer}>
        <Link href="/">
          <a>
            <Image
              src="/images/trip-advisor-logo.svg"
              alt="Trip advisor logo"
              width={200}
              height={40}
              // layout="fill"
            />
          </a>
        </Link>
        <div className={style.rightSection}>
          {navItems.map(({ name, href, Icon }) => (
            <Link key={name} href={href}>
              <a
                className={`${
                  router.asPath === href
                    ? style.active
                    : ""
                }`}
              >
                <Icon className={style.icon} />
                {name}
              </a>
            </Link>
          ))}
          <button
            onClick={() => setShowModal(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
