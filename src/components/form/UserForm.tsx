import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './FormInput';
import { RootState } from '../../store';
import {
  CurrentUserState,
  removeAccessToken,
  setCurrentUser,
  setLoginStatus,
  updateUserProperty,
} from '../../store/features/currentUserSlice';
import ErrorAlert from '../shared/ErrorAlert';
import { postUser } from '../../api/helpers';
import { useNavigate } from 'react-router-dom';

type Props = {
  accessToken?: string;
  fields: {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    options?: { value: string; label: string }[];
    required?: boolean;
  }[];
};

const UserForm = ({ fields }: Props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValueChange = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => {
    dispatch(
      updateUserProperty({ field, value } as {
        field: keyof CurrentUserState;
        value: string;
      }),
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !currentUser.displayName?.trim() ||
      !currentUser.instagramProfile?.trim() ||
      !currentUser.phone?.trim()
    ) {
      return setErrorMessage('Todos los campos obligatorios deben ser llenados');
    }

    const res = await postUser(currentUser);

    if (!res.id) {
      setErrorMessage('No se pudo crear la cuenta. Intente de nuevo.');
      removeAccessToken();
      return
    }

    dispatch(setCurrentUser(res));
    dispatch(setLoginStatus(true));
    localStorage.setItem('userId', res.firebaseId);
    navigate('/user_profile');
  };

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      {fields.map((field, index) => {
        const value = currentUser[field.name as keyof typeof currentUser] || '';

        return (
          <FormInput
            {...field}
            key={index}
            value={value.toString()}
            onValueChange={handleValueChange}
          />
        );
      })}
      <input className="btn btn-primary mt-6" type="submit" value="Crear cuenta" />
      <ErrorAlert message={errorMessage} onTimeUp={() => setErrorMessage('')} />
    </form>
  );
};

export default UserForm;
