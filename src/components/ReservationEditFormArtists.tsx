import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

import SearchInput from './shared/inputs/SearchInput';
import { SearchOptions } from './shared/inputs/SearchInputContent';
import IconButton from './shared/buttons/IconButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { artistsInReservation } from './helpers/reservations.helpers';
import { ReservationUpdate } from 'src/types/reservationTypes';

type Props = {
  reservation: ReservationUpdate;
  onChange: (reservation: ReservationUpdate) => void;
};

const ReservationEditFormArtists = ({ reservation, onChange }: Props) => {
  const festival = useSelector((state: RootState) => state.activeFestival);

  let artistsOptions = festival?.artists?.map((artist) => {
    const artistsWithReservationsIds = festival?.reservations?.flatMap(
      (reservation: ReservationUpdate) =>
        reservation.artists.map((artist) => {
          if (artist.disconnect) return;

          return artist.id;
        }),
    );

    if (artistsWithReservationsIds?.includes(artist.id)) return;
    if (reservation.artists?.find((a) => a.id === artist.id)) return;

    return {
      id: artist.id!,
      displayName: artist.displayName!,
    };
  });

  artistsOptions = artistsOptions?.filter((o) => o !== undefined);

  // TODO: fix that a removed artsits should be possible to add again
  const handleAddArtist = (artistId: number) => {
    const artist = festival.artists?.find((artist) => artist.id === artistId);
    if (!artist) return;

    const newArtists = [...reservation.artists, artist];
    let artistsIdsToAdd;
    if (reservation.artistsIdsToAdd) {
      artistsIdsToAdd = [...reservation.artistsIdsToAdd, artistId];
    } else {
      artistsIdsToAdd = [artistId];
    }
    onChange({ ...reservation, artists: newArtists, artistsIdsToAdd });
  };

  const handleRemoveArtist = (artistId: number) => {
    const newArtists = reservation.artists.filter(
      (artist) => artist.id !== artistId,
    );
    let artistsIdsToRemove;
    if (reservation.artistsIdsToRemove) {
      artistsIdsToRemove = [...reservation.artistsIdsToRemove, artistId];
    } else {
      artistsIdsToRemove = [artistId];
    }
    onChange({ ...reservation, artists: newArtists, artistsIdsToRemove });
  };

  return (
    <div id="artists">
      {reservation.artists?.map((artist) => {
        if (artist.disconnect) return;

        return (
          <div key={artist.id} className="flex justify-between my-4">
            <h1>{artist.displayName}</h1>
            <IconButton
              icon={faTrash}
              onClick={() => handleRemoveArtist(artist.id!)}
              styles="ml-2"
            />
          </div>
        );
      })}
      <div className="mt-4">
        {artistsInReservation(reservation).length < 2 && (
          <SearchInput
            options={artistsOptions as SearchOptions}
            onSelect={handleAddArtist}
            placeholder="Añadir artista"
          />
        )}
      </div>
    </div>
  );
};

export default ReservationEditFormArtists;
