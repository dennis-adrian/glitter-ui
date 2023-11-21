import { Navigate, useLoaderData } from 'react-router-dom';
import { User } from '../types/userTypes';

type Props = {
  component: React.ComponentType;
  forAdmin?: boolean;
};

export const ProtectedRoute = ({
  component: Component,
  forAdmin = false,
}: Props) => {
  const loaderData = useLoaderData();
  if (!loaderData) {
    return <Navigate to="/login" />;
  }

  if (forAdmin && !(loaderData as User).isAdmin) {
    return <Navigate to="/" />;
  }

  return <Component />;
};
