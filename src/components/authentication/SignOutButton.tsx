import { useDispatch } from 'react-redux';
import {
  removeAccessToken,
  removeCurrentUser,
  setLoginStatus,
} from '../../store/features/currentUserSlice';
import { useNavigate } from 'react-router-dom';
import { signOutFromGoogle } from './helpers';

const SignOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingOut = async () => {
    const res = await signOutFromGoogle();
    if (res.code === 'auth/ok') {
      dispatch(setLoginStatus(false));
      dispatch(removeAccessToken());
      dispatch(removeCurrentUser());
      localStorage.removeItem('userId');
      return navigate('/');
    }
  };

  return (
    <li>
      <button onClick={handleSingOut}>Cerrar sesión</button>
    </li>
  );
};

export default SignOutButton;
