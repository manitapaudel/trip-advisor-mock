import React, { Children } from "react";

import PlusIcon from "@/assets/icons/PlusIcon";
import style from "./collapse-item.module.scss";

type CollapseItemProps = {
    title: string,
    children: React.ReactNode
};

const CollapseItem: React.FC<CollapseItemProps> = ({title, children}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className={style.container}>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <PlusIcon className={style.icon} />
        <p>{title}</p>
      </button>
      {menuOpen ? <div className={style.content}>{children}</div> : ""}
    </div>
  );
};

export default CollapseItem;
