import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import SignOutButton from '../../authentication/SignOutButton';
import MenuItem from './MenuItem';

const UserItem = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  if (!currentUser.isLoggedIn) return null;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={currentUser.photoURL} alt="foto de perfil" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <MenuItem label="Ver perfil" path="/user_profile" />
        <SignOutButton />
      </ul>
    </div>
  );
};

export default UserItem;
