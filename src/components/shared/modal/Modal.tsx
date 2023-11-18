import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  show: boolean;
  onHide: () => void;
};

const Modal = ({ children, show, onHide }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (show) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [show, onHide]);

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
