import React, { useEffect, useState } from 'react';

import { Reservation, ReservationStatusEnum } from '../types/eventMapTypes';
import { statusTranslator } from './utils/statusTranslator';

import Avatar from './shared/Avatar';
import CancelButton from './shared/buttons/CancelButton';
import JoinedAvatars from './shared/JoinedAvatars';
import Modal from './shared/modal/Modal';
import ModalBody from './shared/modal/ModalBody';
import ModalFooter from './shared/modal/ModalFooter';
import PrimaryButton from './shared/buttons/PrimaryButton';
import ReservationEditFormArtists from './ReservationEditFormArtists';
import ModalHeader from './shared/modal/ModalHeader';
import { ReservationUpdate } from 'src/types/reservationTypes';

type Props = {
  reservation: Reservation;
  show: boolean;
  onConfirm: (reservation: Reservation) => void;
  onHide: () => void;
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

const ReservationEditModal = ({
  reservation,
  show,
  onConfirm,
  onHide,
}: Props) => {
  const [updatedReservation, setUpdatedReservation] =
    useState<ReservationUpdate>(reservation);

  useEffect(() => {
    if (!reservation) return;

    setUpdatedReservation({ ...reservation });
  }, [reservation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm(updatedReservation);
    setUpdatedReservation(null!);
    onHide();
  };

  const handleCancel = () => {
    setUpdatedReservation(null!);
    onHide();
  };

  const reset = () => {
    setUpdatedReservation(null!);
    onHide();
  };

  return (
    <Modal show={show} onHide={reset}>
      {updatedReservation && (
        <form onSubmit={handleSubmit}>
          <ModalHeader title="Editar Reserva" onHide={reset} />
          <ModalBody>
            <section className="mb-4">
              <span>Rerserva para: </span>
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
            <div aria-label="artists" className="form-control mb-4">
              <label className="label-text" htmlFor="artists">
                Artista(s)
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
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={handleCancel} />
            <PrimaryButton label="Guardar" type="submit" />
          </ModalFooter>
        </form>
      )}
    </Modal>
  );
};

export default ReservationEditModal;
