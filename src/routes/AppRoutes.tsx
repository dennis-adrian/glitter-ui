import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/Error';
import { ProtectedRoute } from './ProtectedRoute';
import UserProfile from '../pages/UserProfile';
import LoginPage from '../pages/Login';

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
