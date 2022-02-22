import { BodyText } from "@/components/atoms/Typography";
import Subtitle from "@/components/atoms/Typography/Subtitle";
import style from "./footer.module.scss";

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
];

const Footer = () => {
  return (
    <div className={style.container}>
      {footerElements.map(({ title, subLinks }) => (
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
  );
};

export default Footer;
