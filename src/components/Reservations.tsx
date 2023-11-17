import {
  useDeleteReservationMutation,
  useGetReservationsQuery,
  useUpdateReservationMutation,
} from '../store/features/api/apiSlice';
import { Reservation, ReservationStatusEnum } from '../types/eventMapTypes';
import Table from './shared/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { statusTranslator } from './utils/statusTranslator';
import Modal from './shared/Modal';
import ReservationEditForm from './form/ReservationEditForm';
import { useState } from 'react';

const Reservations = () => {
  const { data: reservations, isSuccess } = useGetReservationsQuery('');
  const [updateReservation] = useUpdateReservationMutation();
  const [deleteReservation] = useDeleteReservationMutation();
  const [selected, setSelected] = useState<Reservation>();
  const [showEditModal, setShowEditModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case ReservationStatusEnum.APPROVED:
        return 'bg-emerald-200';
      case ReservationStatusEnum.PENDING:
        return 'bg-amber-200';
      case ReservationStatusEnum.REJECTED:
        return 'bg-rose-200';
      default:
        return 'bg-gray-200';
    }
  };

  const handleDelete = async (reservation: Reservation) => {
    await deleteReservation(reservation.id!);
  };

  const handleEdit = async (reservation: Reservation) => {
    setSelected(reservation);
    setShowEditModal(true);
  };

  return (
    <>
      {isSuccess && (
        <Table headers={['Stand', 'Estado', 'Artista(s)', 'Acciones']}>
          {reservations?.map((reservation: Reservation) => (
            <tr key={reservation.id}>
              <td>
                {reservation.stand!.label}-{reservation.stand!.standNumber}
              </td>
              <td className="capitalize">
                <span
                  className={`badge ${getStatusColor(reservation.status!)}`}
                >
                  {statusTranslator(reservation.status!)}
                </span>
              </td>
              <td>
                {reservation.artists
                  ?.map((artist) => artist.displayName)
                  .join(', ')}
              </td>
              <td className="flex gap-2">
                <button
                  className="text-emerald-400"
                  onClick={() => handleEdit(reservation)}
                >
                  <FontAwesomeIcon icon={faFileEdit} />
                </button>
                <button
                  className="text-rose-400"
                  onClick={() => handleDelete(reservation)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      )}
      <Modal
        show={showEditModal}
        title="Modificar Reserva"
        onClose={() => setShowEditModal(false)}
      >
        <ReservationEditForm
          reservation={selected!}
          onConfirm={updateReservation}
          onCancel={() => setShowEditModal(false)}
        />
      </Modal>
    </>
  );
};

export default Reservations;
