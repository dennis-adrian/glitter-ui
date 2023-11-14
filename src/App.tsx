import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setCurrentUser,
  setLoginStatus,
} from './store/features/currentUserSlice';

import Navbar from './components/shared/navbar/Navbar';
import { get } from './api/helpers';
import { setActiveFestival } from './store/features/festivalsSlice';
import { useGetCurrentUserQuery } from './store/features/api/apiSlice';

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const { data: user, isSuccess } = useGetCurrentUserQuery(userId || '');

  if (isSuccess) {
    dispatch(setCurrentUser(user));
    dispatch(setLoginStatus(true));
  }

  useEffect(() => {
    const fetchActiveFestival = async () => {
      const festivals = await get('festivals', { active: true });
      if (festivals?.length) {
        dispatch(setActiveFestival(festivals[0]));
      }
    };

    fetchActiveFestival();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
