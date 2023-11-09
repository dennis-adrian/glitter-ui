import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import UserProfile from '../pages/UserProfile';

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
  }
])
