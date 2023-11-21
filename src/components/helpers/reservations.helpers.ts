import { Reservation } from 'src/types/eventMapTypes';

export const artistsInReservation = (reservation: Reservation) => {
  if (!reservation?.artists?.length) return [];

  return reservation.artists.filter((artist) => !artist.disconnect);
};
