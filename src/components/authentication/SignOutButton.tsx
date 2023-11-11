import { useDispatch } from 'react-redux';
import { removeAccessToken, removeCurrentUser, setLoginStatus } from '../../store/features/currentUserSlice';

const SignOutButton = () => {
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(setLoginStatus(false));
    dispatch(removeAccessToken());
    dispatch(removeCurrentUser());
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
