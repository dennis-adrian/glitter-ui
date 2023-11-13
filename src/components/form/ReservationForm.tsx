import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchContent from './SearchContent';
import { User } from '../../types/userTypes';

const ReservationForm = () => {
  const artists: User[] | undefined = useSelector(
    (state: RootState) => state.activeFestival.availableArtists,
  );

  const [searchText, setSearchText] = useState('');
  const [searchOptions, setSearchOptions] = useState<User[]>();
  const user = useSelector((state: RootState) => state.currentUser);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchText(value);
    const options = artists?.filter((artist, i) => {
      if (i > 4) return false;
      return artist.displayName.toLowerCase().includes(value.toLowerCase());
    })
  
    setSearchOptions(options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="mb-4">
        <span>Rerservando para: </span>
        <span className="text-indigo-500 font-bold">{user.displayName}</span>
      </section>
      <section className="form-control my-6 mx-2">
        <label className="label">
          <span className="text-indigo-500 label-text">¿Compartes stand?</span>
        </label>
        <input
          type="search"
          className="input input-bordered input-primary w-full"
          placeholder="Escribe con quien compartirás"
          value={searchText}
          onChange={handleSearch}
        />
        <SearchContent show={!!searchText} options={searchOptions} />
      </section>
      <section className="flex justify-end mt-4">
        <button className="btn btn-primary">Confirmar</button>
      </section>
    </form>
  );
};

export default ReservationForm;
