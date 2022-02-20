import * as React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useSelector } from "react-redux";

import useClickOutside from "@/hooks/useOutsideClick";
import MessageIcon from "@/assets/icons/MessageIcon";
import HorizontalDotsIcon from "@/assets/icons/HorizontalDotsIcon";
import KeyIcon from "@/assets/icons/KeyIcon";
import SunIcon from "@/assets/icons/SunIcon";
import BuildingIcon from "@/assets/icons/BuildingIcon";
import CakeIcon from "@/assets/icons/CakeIcon";
import ItemCard from "@/components/atoms/ItemCard";
import Modal from "@/components/organisms/Modal";
import Searchbar from "@/components/molecules/Searchbar";
import MoreToExplore from"@/components/organisms/MoreToExplore";
import Testimonials from "@/components/organisms/Testimonials";
import style from "./home.module.scss";
import ChevronRightIcon from "@/assets/icons/ChevronrightIcon";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";

// import { UserContext } from "../../Providers/AuthProvider";

const items = [
  { name: "Hotels", Icon: BuildingIcon },
  { name: "Vacation Rentals", Icon: KeyIcon },
  { name: "Things to do", Icon: SunIcon },
  { name: "Restaurants", Icon: CakeIcon },
  { name: "Travel Forums", Icon: MessageIcon },
  { name: "Flights", Icon: MessageIcon },
  { name: "Cruises", Icon: MessageIcon },
  { name: "More", Icon: HorizontalDotsIcon },
];

const Home = () => {
  // const user = useSelector((state: any) => state.user.value);
  // console.log({ user });
  const [modalOpen, setModalOpen] = React.useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);

  // const value = React.useContext(UserContext);
  // console.log({ value });
  useClickOutside(myRef, () => {
    setModalOpen(false);
  });
  return (
    <>
      {modalOpen ? (
        <Modal ref={myRef} setShowModal={setModalOpen}>
          I am modaling
        </Modal>
      ) : (
        ""
      )}
      <div className={style.container}>
        {items.map(({ name, Icon }) => (
          <Link href="/" key={name}>
            <a> <ItemCard setModalOpen={setModalOpen}>
              {name} <Icon className={style.icon}/>
            </ItemCard></a>
           
          </Link>
        ))}
        <button className={style.buttonRight}>
          <ChevronRightIcon className={style.icon}/>
        </button>
        <button className={style.buttonLeft}>
          <ChevronLeftIcon className={style.icon}/>
        </button>
      </div>
      <div className={style.hero}>
        <Image
          src="/images/search_bg.png"
          alt="graphics"
          // className={style.img}
          layout='fill'
        />
        <Searchbar className={style.searchbar} />
      </div>
      <MoreToExplore className={style.marginClass} />
      <Testimonials className={style.marginClass} />
    </>
  );
};

export default Home;
