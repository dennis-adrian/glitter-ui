import { useDispatch } from 'react-redux';
import { setCurrentUserAccessToken, setLoginStatus } from '../../store/features/currentUserSlice';

const SignOutButton = () => {
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(setLoginStatus(false));
    dispatch(setCurrentUserAccessToken(''));
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
  }

  return (
    <button
      className="btn btn-outline btn-secondary m-2"
      onClick={handleSingOut}
    >
      Cerrar sesión
    </button>
  );
};

export default SignOutButton;
