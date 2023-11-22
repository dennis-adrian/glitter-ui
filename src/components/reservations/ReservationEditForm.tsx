import React, { useState } from 'react';
import JoinedAvatars from '../shared/JoinedAvatars';
import Avatar from '../shared/Avatar';
import ReservationEditFormArtists from '../ReservationEditFormArtists';
import { ReservationStatusEnum } from 'src/types/eventMapTypes';
import CancelButton from '../shared/buttons/CancelButton';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import { statusTranslator } from '../utils/statusTranslator';
import { ReservationUpdate } from 'src/types/reservationTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const reservationStatuses = [
  {
    id: ReservationStatusEnum.PENDING,
    name: statusTranslator(ReservationStatusEnum.PENDING),
  },
  {
    id: ReservationStatusEnum.APPROVED,
    name: statusTranslator(ReservationStatusEnum.APPROVED),
  },
  {
    id: ReservationStatusEnum.CANCELLED,
    name: statusTranslator(ReservationStatusEnum.CANCELLED),
  },
  {
    id: ReservationStatusEnum.REJECTED,
    name: statusTranslator(ReservationStatusEnum.REJECTED),
  },
];

type Props = {
  reservation: ReservationUpdate;
  onConfirm: (reservation: ReservationUpdate) => void;
  onReset: () => void;
};

const ReservationEditForm = ({ reservation, onConfirm, onReset }: Props) => {
  const [updatedReservation, setUpdatedReservation] = useState(reservation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm(updatedReservation);
    setUpdatedReservation(null!);
    onReset();
  };

  const handleCancel = () => {
    setUpdatedReservation(null!);
    onReset();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="card text-center bg-indigo-50 text-gray-600 shadow-md">
        <div className="card-body">
          {!updatedReservation?.artists?.length ? (
            <>
              <FontAwesomeIcon className="text-3xl mb-2" icon={faSadTear} />
              <h1 className="text-lg">Esta reserva no tiene artistas</h1>
            </>
          ) : (
            <section className="flex flex-col gap-2">
              <h1 className="text-lg">Rerserva para: </h1>
              <div className="w-full">
                {updatedReservation?.artists?.length > 1 ? (
                  <JoinedAvatars
                    artists={updatedReservation.artists}
                    withNames
                  />
                ) : (
                  <Avatar
                    photoURL={updatedReservation?.artists[0]?.photoURL}
                    alt={updatedReservation?.artists[0]?.displayName}
                    rounded
                    withName
                    displayName={updatedReservation?.artists[0]?.displayName}
                  />
                )}
              </div>
            </section>
          )}
        </div>
      </div>
      <section aria-label="fields to edit" className="flex flex-col gap-2">
        <div aria-label="artists" className="form-control">
          <label className="label" htmlFor="artists">
            <span className="label-text">Artista(s)</span>
          </label>
          <ReservationEditFormArtists
            reservation={updatedReservation}
            onChange={setUpdatedReservation}
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="reservationStatus">
            <span className="label-text">Estado de la reserva</span>
          </label>
          <select
            id="reservationStatus"
            className="select select-primary w-full capitalize"
            value={updatedReservation?.status}
            onChange={(e) =>
              setUpdatedReservation({
                ...updatedReservation,
                status: e.target.value as ReservationStatusEnum,
              })
            }
          >
            {reservationStatuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </section>
      <div className="flex justify-end gap-3">
        <CancelButton onClick={handleCancel} />
        <PrimaryButton label="Guardar" type="submit" />
      </div>
    </form>
  );
};

export default ReservationEditForm;
