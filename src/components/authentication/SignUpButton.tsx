import { Dispatch } from 'react';

import { isUser, signInWithGoogle } from './helpers';
import UserInfoModal from '../UserInfoModal';
import { setCurrentUser, setCurrentUserAccessToken } from '../../store/features/currentUserSlice';
import { useDispatch } from 'react-redux';
import { FirebaseUser, User } from '../../types/userTypes';
import { fetchUser } from '../../api/helpers';

type Props = {
  onError: Dispatch<React.SetStateAction<string>>;
};

const SignUpButton = ({ onError }: Props) => {
  const dispatch = useDispatch();
  const errorMessage = 'No se pudo crear la cuenta. Intente de nuevo.';
  let accessToken = '';

  const handleSignUp = async () => {
    try {
      const result = await signInWithGoogle();

      if (isUser(result)) {
        accessToken = (result as FirebaseUser).accessToken as string;
        const existingUser = await fetchUser((result as FirebaseUser).firebaseId as string);

        if ((existingUser as User).id) {
          return onError('Ya existe una cuenta con este correo electrónico');
        }

        dispatch(setCurrentUser(result));
        dispatch(setCurrentUserAccessToken(accessToken));

        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        modal?.showModal();
      } else {
        onError(errorMessage)
      }
      
    } catch (error) {
      onError(errorMessage);
    }
  };

  return (
    <>
      <button className="btn btn-block btn-primary" onClick={handleSignUp}>
        Crear cuenta
      </button>
      <UserInfoModal />
    </>
  );
};

export default SignUpButton;
