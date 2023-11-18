import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ModalBody = ({ children }: Props) => {
  return <div className="py-4">{children}</div>;
};

export default ModalBody;
