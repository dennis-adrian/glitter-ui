import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

type Props = {
  component: React.ComponentType;
};

export const ProtectedRoute = ({ component: Component }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.currentUser);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};