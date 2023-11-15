import { FormEvent, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchContent from './SearchContent';
import { User } from '../../types/userTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ErrorAlert from '../shared/ErrorAlert';

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
  const artists: User[] | undefined = useSelector(
    (state: RootState) => state.activeFestival.artistsWithoutReservation,
  );

  const [searchText, setSearchText] = useState('');
  const [searchOptions, setSearchOptions] = useState<User[]>();
  const [selectedArtist, setSelectedArtist] = useState<User | undefined>();
  const user = useSelector((state: RootState) => state.currentUser);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchText(value);
    const artistsWithoutCurrentUser = artists?.filter(
      (artist) => artist.id !== user.id,
    );
    const options = artistsWithoutCurrentUser?.filter((artist) => {
      return artist.displayName.toLowerCase().includes(value.toLowerCase());
    });

    setSearchOptions(options);
  };

  const handleSelectArtist = (e: SyntheticEvent<HTMLLIElement>) => {
    const artistId = e.currentTarget.value;
    const artist = artists?.find((artist) => artist.id === artistId);
    setSearchText('');
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
          <label className="label">
            <span className="text-indigo-500 label-text">¿Compartes mesa?</span>
          </label>
          <input
            type="search"
            className="input input-bordered input-primary w-full"
            placeholder="Escribe con quien compartirás"
            value={searchText}
            onChange={handleSearch}
          />
          <SearchContent
            show={!!searchText}
            options={searchOptions}
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
