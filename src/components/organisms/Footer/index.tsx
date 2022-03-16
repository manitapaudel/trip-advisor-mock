import React from "react";

import { BodyText } from "@/components/atoms/Typography";
import Subtitle from "@/components/atoms/Typography/Subtitle";
import style from "./footer.module.scss";
import CollapseItem from "@/components/atoms/CollapseItem";

const footerElements = [
  {
    title: "About Tripadvisor",
    subLinks: [
      { heading: "About", href: "/" },
      { heading: "Press", href: "/" },
      { heading: "Resources and Policies", href: "/" },
      { heading: "Careers", href: "/" },
      { heading: "Investor Relations", href: "/" },
      { heading: "Trust and Safety", href: "/" },
    ],
  },
  {
    title: "Explore",
    subLinks: [
      { heading: "Write a Review", href: "/" },
      { heading: "Add a Place", href: "/" },
      { heading: "Join", href: "/" },
      { heading: "Travelers' Choice", href: "/" },
      { heading: "Insurance", href: "/" },
      { heading: "GreenLeaders", href: "/" },
      { heading: "Blog", href: "/" },
      { heading: "Help Center", href: "/" },
      { heading: "Tripadvisor Plus", href: "/" },
      { heading: "Travel Articles", href: "/" },
    ],
  },
  {
    title: "Do Business with us",
    subLinks: [
      { heading: "Write a Review", href: "/" },
      { heading: "Add a Place", href: "/" },
      { heading: "Join", href: "/" },
      { heading: "Travelers' Choice", href: "/" },
      { heading: "Insurance", href: "/" },
      { heading: "GreenLeaders", href: "/" },
      { heading: "Blog", href: "/" },
      { heading: "Help Center", href: "/" },
      { heading: "Tripadvisor Plus", href: "/" },
      { heading: "Travel Articles", href: "/" },
    ],
  },
  {
    title: "Tripadvisor Sites",
    subLinks: [
      { heading: "Discover your dream destination with Jetsetter", href: "/" },
      { heading: "Book the best restaurants with TheFork", href: "/" },
      { heading: "Book tours and attraction tickets on Viator", href: "/" },
      { heading: "Read cruise reviews on Cruise Critic", href: "/" },
      { heading: "Get airline seating charts on Seat Guru", href: "/" },
      { heading: "Find vacation rentals on FlipKey", href: "/" },
      { heading: "Search for holiday rentals on Holiday Lettings", href: "/" },
      { heading: "Find a vacation home on Vacation Home Rentals", href: "/" },
      {
        heading: "Plan and book your next trip with Reco Trip Designers",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggle = () => setMenuOpen(!menuOpen)
  console.log(menuOpen)
    
  return (
    <div className={style.container}>
      <div className={style.lgScreenMenu}>
        <div className={style.left}>
          {footerElements.slice(0, 3).map(({ title, subLinks }) => (
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
          {footerElements.slice(3, 4).map(({ title, subLinks }) => (
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
       <CollapseItem />
      </div>
    </div>
  );
};

export default Footer;
