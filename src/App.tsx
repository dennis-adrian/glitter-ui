import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setCurrentUser,
  setLoginStatus,
} from './store/features/currentUserSlice';
import { setActiveFestival } from './store/features/festivalsSlice';

import Navbar from './components/shared/navbar/Navbar';
import MobileDrawer from './components/shared/navbar/MobileDrawer';
import { FirebaseUser, User } from './types/userTypes';
import { baseUrl } from './utils';
import { get } from './api/helpers';

const fetchUser = async (user: FirebaseUser) => {
  const response = await fetch(`${baseUrl}/users/${user.firebaseId}`);
  return response.json();
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');

    
    const fetchCurrentUser = async () => {
      if (!(accessToken && userId)) return;
      const user: User = await fetchUser({
        firebaseId: userId,
      } as FirebaseUser);
      dispatch(setCurrentUser(user));
      dispatch(setLoginStatus(true));
    };

    const fetchActiveFestival = async () => {
      const festivals = await get('festivals', { active: true });
      if (festivals?.length) {
        dispatch(setActiveFestival(festivals[0]));
      }
    };

    fetchActiveFestival();
    fetchCurrentUser();
  }, [dispatch]);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Outlet />
      </div>
      <MobileDrawer />
    </div>
  );
}

export default App;
