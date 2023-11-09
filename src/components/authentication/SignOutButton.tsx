import { useContext } from 'react';
import { signOutFromGoogle } from './helpers';
import { AuthContext } from '../../contexts';

const SignOutButton = () => {
  const { setToken } = useContext(AuthContext);

  return (
    <button
      className="btn btn-outline btn-secondary m-2"
      onClick={() => signOutFromGoogle(setToken)}
    >
      Cerrar sesión
    </button>
  );
};

export default SignOutButton;
