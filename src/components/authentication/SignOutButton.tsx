import { useDispatch } from 'react-redux';
import {
  removeAccessToken,
  removeCurrentUser,
  setLoginStatus,
} from '../../store/features/currentUserSlice';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(setLoginStatus(false));
    dispatch(removeAccessToken());
    dispatch(removeCurrentUser());
    localStorage.removeItem('userId');
    return navigate('/');
  };

  return (
    <li>
      <button onClick={handleSingOut}>Cerrar sesión</button>
    </li>
  );
};

export default SignOutButton;
