import React, { useRef } from 'react';

type Props = {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, show, title, onClose }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (show) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [show]);

  return (
    <dialog className="modal" ref={modalRef} onClose={onClose}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
