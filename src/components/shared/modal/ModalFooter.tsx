type Props = {
  children: React.ReactNode;
};

const ModalFooter = ({ children }: Props) => {
  return (
    <div className="flex flex-row-reverse mt-4 gap-3">
      {children}
    </div>
  );
};

export default ModalFooter;
