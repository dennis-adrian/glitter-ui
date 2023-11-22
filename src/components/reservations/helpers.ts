import { Festival } from 'src/types/festivalTypes';
import { ReservationUpdate } from 'src/types/reservationTypes';
import { SearchOptions } from '../shared/inputs/SearchInputContent';

export const getArtistsOptions = (
  festival: Festival,
  reservation: ReservationUpdate,
): SearchOptions => {
  if (!festival) return [];

  const festivalArtistsIdsWithReservations = festival.reservations?.flatMap(
    (reservation) => {
      return reservation.artists.map((artist) => artist.id);
    },
  );

  const options = festival.artists?.filter((artist) => {
    const isSetToRemove = reservation.artistsIdsToRemove?.includes(artist.id!);
    const isSetToAdd = reservation.artistsIdsToAdd?.includes(artist.id!);
    const hasReservation = festivalArtistsIdsWithReservations?.includes(
      artist.id!,
    );
    return !(hasReservation || isSetToAdd) || isSetToRemove;
  });

  if (!options?.length) return [];
  return options.map((artist) => ({
    id: artist.id!,
    displayName: artist.displayName,
  }));
};

export const addToAddList = (
  reservation: ReservationUpdate,
  artistId: number,
) => {
  const artistsIdsToAdd = reservation.artistsIdsToAdd || [];
  const artistsIdsToRemove = reservation.artistsIdsToRemove || [];

  if (artistsIdsToRemove?.includes(artistId)) {
    const index = artistsIdsToRemove.indexOf(artistId);
    artistsIdsToRemove.splice(index, 1);
  }

  artistsIdsToAdd?.push(artistId);

  return artistsIdsToAdd;
};

export const addToRemoveList = (
  reservation: ReservationUpdate,
  artistId: number,
) => {
  const artistsIdsToRemove = reservation.artistsIdsToRemove || [];
  const artistsIdsToAdd = reservation.artistsIdsToAdd || [];

  if (artistsIdsToAdd?.includes(artistId)) {
    const index = artistsIdsToAdd.indexOf(artistId);
    artistsIdsToAdd.splice(index, 1);
  }

  artistsIdsToRemove?.push(artistId);

  return artistsIdsToRemove;
};