import { Dispatch, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithGoogle } from './helpers';
import { AuthContext, CurrentUserContext } from '../../contexts';
import { FirebaseUser } from '../../types/userTypes';
import { baseUrl } from '../../utils';

const fetchUser = async (user: FirebaseUser) => {
  const response = await fetch(
    `${baseUrl}/users/${user.firebaseId}`,
  );
  return response.json();
};

type Props = {
  onError: Dispatch<React.SetStateAction<string>>;
};

const SignInButton = ({ onError }: Props) => {
  const { setToken } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const result = await signInWithGoogle(setToken);
    if (result) {
      const user = await fetchUser(result as FirebaseUser);
      if (!user.id) {
        onError('No se pudo iniciar sesión. Intente de nuevo o intente crear una cuenta');
      }

      setCurrentUser(user);
      navigate('/user_profile');
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
