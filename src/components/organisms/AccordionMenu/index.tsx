import React from "react";

import { FooterItemTypes } from "@/types/FooterItemTypes";
import CollapseItem from "@/components/atoms/CollapseItem";
import style from "./accordion-menu.module.scss";

type AccordionMenuProps = {
  data: Array<FooterItemTypes>;
};

const AccordionMenu: React.FC<AccordionMenuProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={style.container}>
      {data.map(({ title, subLinks }) => (
        <CollapseItem title={title} key={title}>
          <ul>
            {subLinks.map(({ heading }) => (
              <li key={heading}>{heading}</li>
            ))}
          </ul>
        </CollapseItem>
      ))}
    </div>
  );
};

export default AccordionMenu;
