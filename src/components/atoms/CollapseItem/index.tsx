import React from "react";

import PlusIcon from "@/assets/icons/PlusIcon";
import style from "./collapse-item.module.scss";

type CollapseItemProps = {};

const CollapseItem: React.FC<CollapseItemProps> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className={style.container}>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <PlusIcon className={style.icon} />
        <p>I am title</p>
      </button>
      {menuOpen ? <div className={style.content}>Hey There!</div> : ""}
    </div>
  );
};

export default CollapseItem;
