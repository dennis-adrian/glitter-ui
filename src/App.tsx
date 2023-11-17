import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setCurrentUser,
  setLoginStatus,
} from './store/features/currentUserSlice';
import { setActiveFestival } from './store/features/festivalsSlice';

import Navbar from './components/shared/navbar/Navbar';
import MobileDrawer from './components/shared/navbar/MobileDrawer';
import {
  useGetActiveFestivalQuery,
  useGetCurrentUserQuery,
} from './store/features/api/apiSlice';

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
