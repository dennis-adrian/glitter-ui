import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

type Props = {
  component: React.ComponentType;
  forAdmin?: boolean;
};

export const ProtectedRoute = ({
  component: Component,
  forAdmin = false,
}: Props) => {
  const user = useSelector((state: RootState) => state.currentUser);
  if (!user.id) {
    return <Navigate to="/login" />;
  }

  if (forAdmin && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return <Component />;
};
