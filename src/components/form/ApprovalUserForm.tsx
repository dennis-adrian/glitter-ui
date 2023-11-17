import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { User, UserStatus } from '../../types/userTypes';
import { useState } from 'react';
import { useUpdateUserMutation } from '../../store/features/api/apiSlice';

type Props = {
  user: User;
  onCancel: () => void;
  onChange: (user: User) => void;
};

const ApprovalUserForm = ({ user, onCancel, onChange }: Props) => {
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation();
  const activeFestival = useSelector(
    (state: RootState) => state.activeFestival,
  );
  const [isUserInFestival, setIsUserInFestival] = useState(
    !!user.festivals?.find((festival) => festival.id === activeFestival.id),
  );

  const userStatuses = [
    {
      id: 'WAITING_APPROVAL',
      name: 'Pendiente',
    },
    {
      id: 'ACTIVE',
      name: 'Aprobado',
    },
    {
      id: 'DISABLED',
      name: 'Desactivado',
    },
  ];

  if (isSuccess) {
    onCancel();
  }

  if (isError) {
    alert('Hubo un error al actualizar el usuario');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedUser = {
      ...user,
      isArtist: true,
      festivals: user.festivals.map((festival) => {
        return {
          id: festival.id,
        };
      }),
    };

    await updateUser(formattedUser);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...user, status: e.target.value as UserStatus });
  };

  const updateUserFestival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUserInFestival(e.target.checked);
    let updatedFestivals = [...user.festivals];
    if (e.target.checked) {
      updatedFestivals = [...updatedFestivals, activeFestival];
    } else {
      updatedFestivals = updatedFestivals.filter(
        (festival) => festival.id !== activeFestival.id,
      );
    }
    onChange({ ...user, festivals: updatedFestivals });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex my-4 flex-col items-center gap-6">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src={user.photoURL} />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-indigo-500 font-bold text-lg">
            {user.displayName}
          </h3>
          <h2 className="text-gray-500 text-lg">
            {user.firstName} {user.lastName}
          </h2>
        </div>
      </div>
      <div className="form-control w-full my-4">
        <label className="label">
          <span className="label-text">Actualiza su estado</span>
        </label>
        <select
          className="select select-primary w-full"
          value={user.status}
          onChange={handleUserChange}
        >
          <option disabled>Elige una opción</option>
          {userStatuses.map((status) => (
            <option value={status.id}>{status.name}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <div className="form-control">
          <label className="label">
            <span className="text">
              <span>Agregar al artista a </span>
              <span className="font-bold text-indigo-500">
                {activeFestival.name}
              </span>
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={isUserInFestival}
              onChange={updateUserFestival}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-row-reverse mt-12">
        <input
          className="btn btn-primary"
          type="submit"
          value="Guardar Cambios"
        />
        <button
          className="btn btn-secondary btn-outline mr-4"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ApprovalUserForm;
