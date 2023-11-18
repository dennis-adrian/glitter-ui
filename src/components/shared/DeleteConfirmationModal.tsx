import CancelButton from './buttons/CancelButton';
import PrimaryButton from './buttons/PrimaryButton';
import Modal from './modal/Modal';
import ModalBody from './modal/ModalBody';
import ModalFooter from './modal/ModalFooter';
import ModalHeader from './modal/ModalHeader';

type Props = {
  show: boolean;
  onConfirm: () => void;
  onHide: () => void;
};

const DeleteConfirmationModal = ({ show, onConfirm, onHide }: Props) => {
  const handleConfirmation = () => {
    onConfirm();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalHeader isAlert title="¡Alerta!" onHide={onHide} />
      <ModalBody>
        <div className="text-center">
          <p>Esta acción eliminará los datos y no se puede deshacer</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <PrimaryButton label="Aceptar" onClick={handleConfirmation} />
        <CancelButton onClick={onHide} />
      </ModalFooter>
    </Modal>
  );
};

export default DeleteConfirmationModal;
