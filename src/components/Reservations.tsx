import { useGetReservationsQuery } from '../store/features/api/apiSlice';
import { Reservation } from '../types/eventMapTypes';
import LoadingSpinner from './shared/LoadingSpinner';
import Table from './shared/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { statusTranslator } from './utils/statusTranslator';

const Reservations = () => {
  const {
    data: reservations,
    isLoading,
    isSuccess,
  } = useGetReservationsQuery('');

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'bg-emerald-200';
      case 'PENDING':
        return 'bg-amber-200';
      case 'CANCELLED':
        return 'bg-rose-200';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    isSuccess && (
      <Table headers={['Stand', 'Estado', 'Artista(s)', 'Acciones']}>
        {reservations?.map((reservation: Reservation) => (
          <tr key={reservation.id}>
            <td>
              {reservation.stand!.label}-{reservation.stand!.standNumber}
            </td>
            <td className="capitalize">
              <span className={`badge ${getStatusColor(reservation.status!)}`}>
                {statusTranslator(reservation.status!)}
              </span>
            </td>
            <td>
              {reservation.artists
                ?.map((artist) => artist.displayName)
                .join(', ')}
            </td>
            <td className="flex gap-2">
              <button className="text-emerald-400" onClick={() => {}}>
                <FontAwesomeIcon icon={faFileEdit} />
              </button>
              <button className="text-rose-400">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </Table>
    )
  );
};

export default Reservations;
