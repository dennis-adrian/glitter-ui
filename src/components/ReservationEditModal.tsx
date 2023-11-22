import { Reservation } from '../types/eventMapTypes';
import { ReservationUpdate } from 'src/types/reservationTypes';

import Modal from './shared/modal/Modal';
import ModalBody from './shared/modal/ModalBody';
import ModalHeader from './shared/modal/ModalHeader';
import ReservationEditForm from './reservations/ReservationEditForm';

type Props = {
  reservation: ReservationUpdate;
  show: boolean;
  onConfirm: (reservation: Reservation) => void;
  onHide: () => void;
};

const ReservationEditModal = ({
  reservation,
  show,
  onConfirm,
  onHide,
}: Props) => {
  return (
    <Modal show={show} onHide={onHide}>
      <ModalHeader title="Editar Reserva" onHide={onHide} />
      <ModalBody>
        {show && (
          <ReservationEditForm
            reservation={reservation}
            onConfirm={onConfirm}
            onReset={onHide}
          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default ReservationEditModal;
