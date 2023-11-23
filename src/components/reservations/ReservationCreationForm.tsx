import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { StandModel } from 'src/types/eventMapTypes';
import { User } from 'src/types/userTypes';
import SearchInput from '../shared/inputs/SearchInput';
import { Festival } from 'src/types/festivalTypes';
import { SearchOptions } from '../shared/inputs/SearchInputContent';
import { getArtistsOptions } from './helpers';
import IconButton from '../shared/buttons/IconButton';
import { useCreateReservationMutation } from 'src/store/features/api/apiSlice';

type Props = {
  stand: StandModel;
  onCancel: () => void;
};

const ReservationCreationForm = ({ stand, onCancel }: Props) => {
  const [createReservation, isSuccess] = useCreateReservationMutation();
  const [selectedArtist, setSelectedArtist] = useState<User | undefined>();
  const user = useSelector((state: RootState) => state.currentUser);
  const festival: Festival | undefined = useSelector(
    (state: RootState) => state.activeFestival,
  );

  const searchOptions = getArtistsOptions(festival)?.filter(
    (option) => option.id !== user.id,
  );

  const handleSelectArtist = (artistId: number) => {
    const artist = festival?.artists?.find((artist) => artist.id === artistId);
    setSelectedArtist(artist);
  };

  const handleConfirm = async () => {
    let reservationArtists = [{ id: user.id }];
    if (selectedArtist) {
      reservationArtists = [...reservationArtists, { id: selectedArtist.id }];
    }

    const reservation = {
      artists: reservationArtists,
      festivalId: festival?.id,
      standId: stand.id,
    };

    await createReservation(reservation);

    if (isSuccess) {
      onCancel();
    }
  };

  return (
    <div>
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
          <IconButton
            icon={faTrash}
            onClick={() => setSelectedArtist(undefined)}
            styles="ml-2"
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

export default ReservationCreationForm;
