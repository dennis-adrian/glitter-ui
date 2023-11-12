import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoginStatus } from './store/features/currentUserSlice';

import Navbar from './components/shared/navbar/Navbar';
import { FirebaseUser, User } from './types/userTypes';
import { baseUrl } from './utils';

const fetchUser = async (user: FirebaseUser) => {
  const response = await fetch(
    `${baseUrl}/users/${user.firebaseId}`,
  );
  return response.json();
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');

    if (!(accessToken && userId)) return;

    const fetchCurrentUser = async () => {
      const user: User = await fetchUser({ firebaseId: userId } as FirebaseUser);
      dispatch(setCurrentUser(user));
      dispatch(setLoginStatus(true));
    };

    fetchCurrentUser();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
