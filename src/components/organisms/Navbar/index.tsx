import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";


import MenuIcon from "@/assets/icons/MenuIcon";
import { navItems } from "@/constants";
import Drawer from "@/components/organisms/Drawer";
import style from "./navbar.module.scss"

type NavbarProps = {
  showModal: boolean;
  setShowModal(a: boolean): void;
};


const Navbar: React.FC<NavbarProps> = ({ showModal, setShowModal }) => {
  const [height, setHeight] = React.useState<number>(0);
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
  }, []);

  const handleShowDrawer = () => {
      setShowDrawer((prev) => !prev);
  }

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
        <div className={style.mdRightSection}>
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
                <span>{name}</span>
              </a>
            </Link>
          ))}
          <button
            onClick={() => setShowModal(true)}
          >
            Sign In
          </button>
        </div>
        <div className={style.smRightSection}>
          <button onClick = {handleShowDrawer}>
            <MenuIcon className={style.icon}/>
          </button>
          {
            showDrawer ? <Drawer setShowDrawer={setShowDrawer} setShowModal={setShowModal} /> : ""
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
