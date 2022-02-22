import React from "react";

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

type UnauthenticatedLayoutProps = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal(a: boolean): void;
};

const UnauthenticatedLayout: React.FC<UnauthenticatedLayoutProps> = ({
  children,
  showModal,
  setShowModal
}) => {
  return (
    <>
      <Navbar showModal={showModal} setShowModal={setShowModal}/>
      {children}
      <Footer />
    </>
  );
};

export default UnauthenticatedLayout;
