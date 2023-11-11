import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import NextFestivalPage from '../pages/NextFestival';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/user_profile',
    element: <ProtectedRoute component={UserProfile} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/next_event',
    element: <NextFestivalPage />,
  }
])
