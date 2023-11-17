import React, { useState } from 'react';
import { Reservation, ReservationStatusEnum } from '../../types/eventMapTypes';
import { statusTranslator } from '../utils/statusTranslator';

type Props = {
  reservation: Reservation;
  onConfirm: (reservation: Reservation) => void;
  onCancel: () => void;
};

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

const ReservationEditForm = ({ reservation, onConfirm, onCancel }: Props) => {
  const [updatedReservation, setUpdatedReservation] =
    useState<Reservation>(reservation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm(updatedReservation);
    onCancel();
  };

  return (
    <>
      <section className="mt-4 mb-4">
        <span>Rerservado para: </span>
        <span className="text-indigo-500 font-bold">
          {updatedReservation?.artists
            ?.map((artist) => artist.displayName)
            .join(' & ')}
        </span>
      </section>
      <form onSubmit={handleSubmit}>
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
                ...reservation,
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
        <div className="flex flex-row-reverse mt-12">
          <input
            className="btn btn-primary"
            type="submit"
            value="Guardar Cambios"
          />
          <button
            className="btn btn-secondary btn-outline mr-4"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default ReservationEditForm;
