import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ReservationForm = () => {
  const user = useSelector((state: RootState) => state.currentUser);

  return (
    <>
      <section className="mb-4">
        <span>Rerservando para: </span>
        <span className="text-indigo-500 font-bold">{user.displayName}</span>
      </section>
      {/* <div className="text-indigo-500">¿Compartes stand?</div> */}
      <section className='form-control my-6 mx-2'>
        <label className="label">
          <span className="text-indigo-500 label-text">¿Compartes stand?</span>
        </label>
        <input
          className="input input-bordered input-primary w-full"
          placeholder="Escribe con quien compartirás"
          onChange={() => {}}
        />
      </section>
      <section className="flex justify-end mt-4">
        <button className="btn btn-primary">Cofirmar</button>
      </section>
    </>
  );
};

export default ReservationForm;
