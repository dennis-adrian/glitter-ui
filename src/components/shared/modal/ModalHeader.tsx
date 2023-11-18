type Props = {
  isAlert?: boolean;
  title?: string;
  onHide: () => void;
};

const ModalHeader = ({ isAlert, title, onHide }: Props) => {
  return (
    <div
      aria-label="modal header"
      className="flex justify-between items-center mb-4"
    >
      <h3 className={`${isAlert ? 'text-rose-800' : ''} font-bold text-lg`}>
        {title}
      </h3>
      <button className="btn btn-square btn-outline btn-xs" onClick={onHide}>
        ✕
      </button>
    </div>
  );
};

export default ModalHeader;
