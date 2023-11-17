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

import Navbar from 'components/shared/navbar/Navbar';
import DrawerRoot from 'components/shared/mobile_drawer/DrawerRoot';

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery(
    userId || '0',
  );
  const { data: activeFestivals, isSuccess: isFestivalSuccess } =
    useGetActiveFestivalQuery(userId || '');

  if (isSuccess) {
    dispatch(setCurrentUser(currentUser));
    dispatch(setLoginStatus(true));
  }

  if (isFestivalSuccess) {
    dispatch(setActiveFestival(activeFestivals[0]));
  }

  return (
    <DrawerRoot>
      <Navbar />
      <Outlet />
    </DrawerRoot>
  );
}

export default App;
