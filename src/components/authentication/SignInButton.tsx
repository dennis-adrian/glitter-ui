import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isUser, signInWithGoogle } from './helpers';
import { FirebaseUser, User } from '../../types/userTypes';
import { baseUrl } from '../../utils';
import {
  setCurrentUserAccessToken,
  setCurrentUser,
  setLoginStatus,
} from '../../store/features/currentUserSlice';

const fetchUser = async (user: FirebaseUser) => {
  const response = await fetch(`${baseUrl}/users/${user.firebaseId}`);
  return response.json();
};

type Props = {
  onError: Dispatch<React.SetStateAction<string>>;
  onLoading: Dispatch<React.SetStateAction<boolean>>;
};

const SignInButton = ({ onError, onLoading }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const result = await signInWithGoogle();
    const errorMessage =
    'Error al iniciar sesión. Intente de nuevo o intente crear una cuenta';

    if (isUser(result)) {
      onLoading(true)
      const accessToken = (result as FirebaseUser).accessToken;
      const user: User = await fetchUser(result as FirebaseUser);
      if (!user.id) {
        onLoading(false);
        return onError(errorMessage);
      }

      dispatch(setCurrentUserAccessToken(accessToken));
      localStorage.setItem('accessToken', accessToken || '');
      localStorage.setItem('userId', user.firebaseId);
      dispatch(setCurrentUser(user));
      dispatch(setLoginStatus(true));

      onLoading(false);
      navigate('/user_profile');
    } else {
      onLoading(false);
      onError(errorMessage);
    }
  };

  return (
    <button
      className="btn btn-block btn-outline btn-secondary mt-2"
      onClick={handleSignIn}
    >
      Iniciar sesión
    </button>
  );
};

export default SignInButton;
