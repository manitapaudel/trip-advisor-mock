import React from "react";

import XCircleIcon from "@/assets/icons/XCircleIcon";

type Ref = HTMLDivElement | null;

type ModalProps = {
  children: JSX.Element | string;
  dark?: boolean;
  setShowModal(a: boolean): void;
};

// eslint-disable-next-line react/display-name
const Modal = React.forwardRef<Ref, ModalProps>(
  ({ children, setShowModal, dark = false }, ref) => {
    return (
      <div
        className={`fixed top-0 right-0 w-full h-screen ${
          dark ? "bg-gray-400" : "bg-gray-50"
        } bg-opacity-75 z-50`}
      >
        <div
          className="relative bg-white border border-gray-300 w-1/3 mx-auto rounded-md shadow-md  p-4 my-40 min-h-card overflow-y-auto"
          ref={ref}
        >
          <button
            className="absolute right-0 top-0 hover:text-red-500"
            onClick={() => setShowModal(false)}
          >
            <XCircleIcon />
          </button>
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
