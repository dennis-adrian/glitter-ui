import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts';

type Props = {
  component: React.ComponentType;
};

export const ProtectedRoute = ({ component: Component }: Props) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};