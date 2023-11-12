import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserProfile = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  if (!currentUser) redirect('/login');

  return (
    <div className='h-screen'>
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
