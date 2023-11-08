import { Navigate } from 'react-router-dom';

type Props = {
  component: React.ComponentType;
};

export const ProtectedRoute = ({ component: Component }: Props) => {
  const isAuthenticated = localStorage.getItem('email');

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};