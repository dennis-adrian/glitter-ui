type Props = {
  children: React.ReactNode;
};

const ModalFooter = ({ children }: Props) => {
  return <div className="flex justify-end mt-4 gap-3">{children}</div>;
};

export default ModalFooter;
