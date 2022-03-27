import React from "react";

import { footerItems } from "@/constants";
import { BodyText } from "@/components/atoms/Typography";
import Subtitle from "@/components/atoms/Typography/Subtitle";
import style from "./footer.module.scss";
import AccordionMenu from "../AccordionMenu";


const Footer = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggle = () => setMenuOpen(!menuOpen)
  console.log(menuOpen)
    
  return (
    <div className={style.container}>
      <div className={style.lgScreenMenu}>
        <div className={style.left}>
          {footerItems.slice(0, 3).map(({ title, subLinks }) => (
            <ul key={title}>
              <li>
                <BodyText className={style.bodyText}>{title}</BodyText>
                <ul>
                  {subLinks.map(({ heading, href }) => (
                    <li key={heading}>
                      <Subtitle className={style.subtitle}>{heading}</Subtitle>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
        <div className={style.right}>
          {footerItems.slice(3, 4).map(({ title, subLinks }) => (
            <ul key={title}>
              <li>
                <BodyText className={style.bodyText}>{title}</BodyText>
                <ul>
                  {subLinks.map(({ heading, href }) => (
                    <li key={heading}>
                      <Subtitle className={style.subtitle}>{heading}</Subtitle>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className={style.mdScreenMenu}>
       <AccordionMenu data={footerItems} />
      </div>
    </div>
  );
};

export default Footer;
