import { Dispatch } from 'react';

import { isUser, signInWithGoogle } from './helpers';
import {
  setCurrentUser,
  setCurrentUserAccessToken,
} from '../../store/features/currentUserSlice';
import { useDispatch } from 'react-redux';
import { FirebaseUser, User } from '../../types/userTypes';
import { getUser } from '../../api/helpers';

type Props = {
  onError: Dispatch<React.SetStateAction<string>>;
  onLoading: Dispatch<React.SetStateAction<boolean>>;
};

const SignUpButton = ({ onError, onLoading }: Props) => {
  const dispatch = useDispatch();
  const errorMessage = 'No se pudo crear la cuenta. Intente de nuevo.';
  let accessToken = '';

  const handleSignUp = async () => {
    try {
      const result = await signInWithGoogle();

      if (isUser(result)) {
        onLoading(true);
        accessToken = (result as FirebaseUser).accessToken as string;
        const existingUser = await getUser(
          (result as FirebaseUser).firebaseId as string,
        );

        if ((existingUser as User).id) {
          onLoading(false);
          return onError('Ya existe una cuenta con este correo electrónico');
        }

        dispatch(setCurrentUser(result));
        dispatch(setCurrentUserAccessToken(accessToken));
        onLoading(false);
      } else {
        onError(errorMessage);
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
    </>
  );
};

export default SignUpButton;
