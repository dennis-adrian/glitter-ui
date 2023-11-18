import { useState } from 'react';

import {
  useDeleteReservationMutation,
  useGetReservationsQuery,
  useUpdateReservationMutation,
} from '../store/features/api/apiSlice';

import { faFileEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Reservation, ReservationStatusEnum } from '../types/eventMapTypes';
import { statusTranslator } from './utils/statusTranslator';

import DeleteConfirmationModal from './shared/DeleteConfirmationModal';
import IconButton from './shared/buttons/IconButton';
import Table from './shared/Table';
import ReservationEditModal from './ReservationEditModal';

const Reservations = () => {
  const { data: reservations, isSuccess } = useGetReservationsQuery('');
  const [updateReservation] = useUpdateReservationMutation();
  const [deleteReservation] = useDeleteReservationMutation();
  const [selected, setSelected] = useState<Reservation>(null!);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleDelete = (reservation: Reservation) => {
    setSelected(reservation);
    setShowDeleteModal(true);
  };

  const handleEdit = (reservation: Reservation) => {
    setSelected(reservation);
    setShowEditModal(true);
  };

  const resetModal = () => {
    setSelected(null!);
    setShowDeleteModal(false);
    setShowEditModal(false);
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
              <td className="flex gap-1">
                <IconButton
                  icon={faFileEdit}
                  styles={'text-emerald-400'}
                  onClick={() => handleEdit(reservation)}
                />
                <IconButton
                  icon={faTrash}
                  styles="text-rose-400"
                  onClick={() => handleDelete(reservation)}
                />
              </td>
            </tr>
          ))}
        </Table>
      )}
      <ReservationEditModal
        show={showEditModal}
        reservation={selected}
        onConfirm={updateReservation}
        onHide={resetModal}
      />

      <DeleteConfirmationModal
        show={showDeleteModal}
        onConfirm={() => deleteReservation(selected.id!)}
        onHide={resetModal}
      />
    </>
  );
};

export default Reservations;
