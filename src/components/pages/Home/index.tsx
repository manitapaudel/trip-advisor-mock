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
import Modal from "@/components/molecules/Modal";
import Searchbar from "@/components/molecules/Searchbar";
import MoreToExplore from"@/components/organisms/MoreToExplore";
import Testimonials from "@/components/organisms/Testimonials";
// import { UserContext } from "../../Providers/AuthProvider";

const items = [
  { name: "Hotels", Icon: BuildingIcon },
  { name: "Vacation Rentals", Icon: KeyIcon },
  { name: "Things to do", Icon: SunIcon },
  { name: "Restaurants", Icon: CakeIcon },
  { name: "Travel Forums", Icon: MessageIcon },
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
      <div className="container mx-auto grid grid-cols-6 gap-2">
        {items.map(({ name, Icon }) => (
          <Link href="/" key={name}>
            <a> <ItemCard setModalOpen={setModalOpen}>
              {name} <Icon />
            </ItemCard></a>
           
          </Link>
        ))}
      </div>
      <div className="relative bg-search-bg w-full h-auto container mx-auto mt-3">
        <Image
          src="/images/search_bg.png"
          alt="graphics"
          className="mr-0 w-full h-full"
          layout='fill'
        />
        <Searchbar className="absolute top-0 transform translate-x-44 translate-y-44" />
      </div>
      <MoreToExplore className="mt-4" />
      <Testimonials className="mt-4" />
    </>
  );
};

export default Home;
