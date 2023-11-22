import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {
  addToAddList,
  addToRemoveList,
  getArtistsOptions,
} from './reservations/helpers';
import { artistsInReservation } from './helpers/reservations.helpers';
import { ReservationUpdate } from 'src/types/reservationTypes';
import { SearchOptions } from './shared/inputs/SearchInputContent';

import SearchInput from './shared/inputs/SearchInput';
import IconButton from './shared/buttons/IconButton';

type Props = {
  reservation: ReservationUpdate;
  onChange: (reservation: ReservationUpdate) => void;
};

const ReservationEditFormArtists = ({ reservation, onChange }: Props) => {
  const festival = useSelector((state: RootState) => state.activeFestival);
  const [artistsOptions, setArtistsOptions] = useState<SearchOptions>(
    getArtistsOptions(festival, reservation),
  );

  useEffect(() => {
    setArtistsOptions(getArtistsOptions(festival, reservation));
  }, [festival, reservation]);

  const handleAddArtist = (artistId: number) => {
    const artist = festival.artists?.find((artist) => artist.id === artistId);
    if (!artist) return;

    const newArtists = [...reservation.artists, artist];
    const artistsIdsToAdd = addToAddList(reservation, artistId);
    onChange({ ...reservation, artists: newArtists, artistsIdsToAdd });
  };

  const handleRemoveArtist = (artistId: number) => {
    const newArtists = reservation.artists.filter(
      (artist) => artist.id !== artistId,
    );
    const artistsIdsToRemove = addToRemoveList(reservation, artistId);
    onChange({ ...reservation, artists: newArtists, artistsIdsToRemove });
  };

  return (
    <div id="artists">
      {reservation.artists?.map((artist) => {
        if (artist.disconnect) return;

        return (
          <div
            key={artist.id}
            className="flex justify-between px-2 py-1 items-center"
          >
            <h1>{artist.displayName}</h1>
            <IconButton
              icon={faTrash}
              onClick={() => handleRemoveArtist(artist.id!)}
              styles="ml-2"
            />
          </div>
        );
      })}
      {artistsInReservation(reservation).length < 2 && (
        <SearchInput
          options={artistsOptions as SearchOptions}
          onSelect={handleAddArtist}
          placeholder="Añadir artista"
        />
      )}
    </div>
  );
};

export default ReservationEditFormArtists;
