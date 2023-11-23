import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  setCurrentUser,
  setLoginStatus,
} from 'src/store/features/currentUserSlice';
import { setActiveFestival } from 'src/store/features/festivalsSlice';
import {
  useGetActiveFestivalQuery,
  useGetCurrentUserQuery,
} from 'src/store/features/api/apiSlice';

import DrawerRoot from 'components/shared/mobile_drawer/DrawerRoot';
import Navbar from 'components/shared/navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery(userId!, {
    skip: !userId,
  });
  const { data: festival, isSuccess: isFestivalSuccess } =
    useGetActiveFestivalQuery('');

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(currentUser));
      dispatch(setLoginStatus(true));
    }
  }, [dispatch, isSuccess, currentUser]);

  useEffect(() => {
    if (isFestivalSuccess) {
      dispatch(setActiveFestival(festival));
    }
  }, [dispatch, isFestivalSuccess, festival]);

  return (
    <DrawerRoot>
      <Navbar />
      <Outlet />
    </DrawerRoot>
  );
}

export default App;
