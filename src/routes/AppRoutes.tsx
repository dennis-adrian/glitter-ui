import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import NextFestivalPage from '../pages/NextFestival';
import { userLoader } from './loaders/userLoader';
import DashboardPage from '../pages/Dashboard';
import App from '../App';
import Festivals from '../components/Festivals';
import Users from '../components/Users';
import Reservations from '../components/Reservations';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'user_profile',
        element: <ProtectedRoute component={UserProfile} />,
        loader: userLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'next_event',
        element: <NextFestivalPage />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute component={DashboardPage} forAdmin />,
        loader: userLoader,
        children: [
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'festivals',
            element: <Festivals />
          },
          {
            path: 'reservations',
            element: <Reservations />
          }
        ],
      },
    ],
  },
]);
