import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useGetReservationsByFestivalQuery } from 'src/store/features/api/apiSlice';

import { Festival } from 'src/types/festivalTypes';
import { Reservation } from 'src/types/eventMapTypes';
import { User } from 'src/types/userTypes';

import { SearchOptions } from 'src/components/shared/inputs/SearchInputContent';
import ErrorAlert from 'src/components/shared/ErrorAlert';
import SearchInput from 'src/components/shared/inputs/SearchInput';

type Props = {
  errorMessage?: string;
  onCancel: () => void;
  onConfirm: (extraArtist: User) => void;
  onTimeUp: () => void;
};

const ReservationForm = ({
  errorMessage,
  onCancel,
  onConfirm,
  onTimeUp,
}: Props) => {
  const festival: Festival | undefined = useSelector(
    (state: RootState) => state.activeFestival,
  );
  const { data: reservations } = useGetReservationsByFestivalQuery(
    festival.id!,
  );

  const [selectedArtist, setSelectedArtist] = useState<User | undefined>();
  const user = useSelector((state: RootState) => state.currentUser);

  const artistsWithReservationsIds = reservations?.flatMap(
    (reservation: Reservation) =>
      reservation.artists.map((artist) => artist.id),
  );

  let searchOptions = festival?.artists?.map((artist) => {
    if (artist.id === user.id) return;
    if (artistsWithReservationsIds?.includes(artist.id)) return;

    return {
      id: artist.id!,
      displayName: artist.displayName!,
    };
  });

  searchOptions = searchOptions?.filter((o) => o !== undefined);

  const handleSelectArtist = (artistId: number) => {
    const artist = festival.artists?.find((artist) => artist.id === artistId);
    setSelectedArtist(artist);
  };

  const handleConfirm = () => {
    onConfirm(selectedArtist!);
  };

  return (
    <div>
      <ErrorAlert message={errorMessage} onTimeUp={onTimeUp} />
      <section className="mt-6 mb-4">
        <span>Rerservando para: </span>
        <span className="text-indigo-500 font-bold">{user.displayName}</span>
      </section>
      {selectedArtist ? (
        <div className="flex justify-between mb-6">
          <section>
            <span>Compartiás stand con: </span>
            <span className="text-indigo-500 font-bold">
              {selectedArtist.displayName}
            </span>
          </section>
          <FontAwesomeIcon
            className="cursor-pointer mr-3 self-center"
            icon={faTrash}
            onClick={() => setSelectedArtist(undefined)}
          />
        </div>
      ) : (
        <section className="form-control my-6 mx-2">
          <SearchInput
            label="¿Compartes mesa?"
            labelStyles="text-indigo-500"
            options={searchOptions as SearchOptions}
            placeholder="Escribe con quien compartirás"
            onSelect={handleSelectArtist}
          />
        </section>
      )}
      <section className="flex justify-end mt-8">
        <button
          className="btn btn-outline btn-secondary mr-4"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="btn btn-primary" onClick={handleConfirm}>
          Confirmar
        </button>
      </section>
    </div>
  );
};

export default ReservationForm;
