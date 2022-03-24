import React from "react";
import Link from "next/link";

import { navItems } from "@/constants";
import useClickOutside from "@/hooks/useOutsideClick";
import XCircleIcon from "@/assets/icons/XCircleIcon";
import UserIcon from "@/assets/icons/UserIcon";
import { H2 } from "@/components/atoms/Typography";
import style from "./drawer.module.scss";

type DrawerProps = {
  showModal: boolean;
  setShowDrawer(a: boolean): void;
  setShowModal(a: boolean): void;
  className?: string;
};

const Drawer: React.FC<DrawerProps> = ({ setShowDrawer, setShowModal, showModal, className }) => {
    const drawerRef = React.useRef<HTMLDivElement>(null);
  
    useClickOutside(drawerRef, () => setShowDrawer(false));

  return (
    <div className={`${style.container} ${className}`} ref={drawerRef}>
      <H2>Menu</H2>
      <button className={style.closeButton} onClick={() => setShowDrawer(false)}>
        <XCircleIcon className={style.icon} />
      </button>
      <ul>
        {navItems.map(({ name, href, Icon }) => (
          <li key={href}>
            <Link href={href}>
              <a>
                <Icon className={style.icon}/>
                {name}
              </a>
            </Link>
          </li>
        ))}
        <li>
         <button
            onClick={() => setShowModal(true)}
          >
            <UserIcon className={style.icon}/>Sign In
          </button>   
        </li>
      </ul>
      
    </div>
  );
};

export default Drawer;
