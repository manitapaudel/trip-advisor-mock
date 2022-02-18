import React from "react";

import XCircleIcon from "@/assets/icons/XCircleIcon";
import style from "./modal.module.scss";

type Ref = HTMLDivElement | null;

type ModalProps = {
  children: JSX.Element | string;
  dark?: boolean;
  setShowModal(a: boolean): void;
};

const Modal = React.forwardRef<Ref, ModalProps>(
    ({ children, setShowModal, dark = false }, ref) => {
    return (
      <div
      className={`${style.container} ${dark ? style.dark :""}`}
      >
        <div
        className={style.modal}
          ref={ref}
        >
          <button
          type="button"
          className={style.cancelButton}
            onClick={() => setShowModal(false)}
          >
            <XCircleIcon className={style.icon}/>
          </button>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal"
export default Modal;
