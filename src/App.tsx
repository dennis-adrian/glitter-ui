import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { FirebaseUser, User } from './types/userTypes';
import { baseUrl } from './utils';
import { setCurrentUser, setLoginStatus } from './store/features/currentUserSlice';
import { useDispatch } from 'react-redux';

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
    <RouterProvider router={AppRoutes} />
  )
}

export default App
