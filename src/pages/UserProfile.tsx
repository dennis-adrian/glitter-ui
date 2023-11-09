import { useContext } from 'react';
import { CurrentUserContext } from '../contexts';
import SignOutButton from '../components/authentication/SignOutButton';
import { redirect } from 'react-router-dom';
import logo from '../assets/logo.png';

const UserProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) redirect('/login');

  return (
    <div className='h-screen'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={logo} alt="glitter logo" />
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <SignOutButton />
        </div>
      </div>
      <div className='flex items-center justify-center flex-col h-4/5 mx-auto'>
        <h1>Bienvenido a la comunidad Glitter {currentUser?.displayName}</h1>
        <div className='avatar'>
          <div className='w-36 rounded-full m-8'>
            <img src={currentUser?.photoURL} alt='glitter logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
