import { Dispatch, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithGoogle, signOutFromGoogle } from './helpers';
import { AuthContext } from '../../contexts';
import { FirebaseUser } from '../../types/userTypes';
import { baseUrl } from '../../utils';

const postUser = async (user: FirebaseUser) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user, isArtist: true }),
  });
  return response.json();
};

type Props = {
  onError: Dispatch<React.SetStateAction<string>>;
};

const SignUpButton = ({ onError }: Props) => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const errorMessage = 'No se pudo crear la cuenta. Intente de nuevo.';

  const handleSignUp = async () => {
    const result = await signInWithGoogle(setToken);
    try {
      const res = await postUser(result as FirebaseUser);
      if (!res?.id) {
        signOutFromGoogle(setToken);
        onError(errorMessage);
      }

      navigate('/user_profile');
    } catch (error) {
      signOutFromGoogle(setToken);
      onError(errorMessage);
    }
  };

  return (
    <button className="btn btn-block btn-primary" onClick={handleSignUp}>
      Crear cuenta
    </button>
  );
};

export default SignUpButton;
