import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  show: boolean;
  onHide: () => void;
  onShow?: () => void;
};

const Modal = ({ children, show, onHide, onShow }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  if (show) {
    if (onShow) onShow();
    modalRef.current?.showModal();
  } else {
    modalRef.current?.close();
  }

  return (
    <dialog
      className="modal modal-bottom sm:modal-middle"
      ref={modalRef}
      onClose={onHide}
    >
      <div aria-label="modal" className="modal-box">
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
