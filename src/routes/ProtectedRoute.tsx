import { Navigate, useLoaderData } from 'react-router-dom';

type Props = {
  component: React.ComponentType;
};

export const ProtectedRoute = ({ component: Component }: Props) => {
  const loaderData = useLoaderData();
  if (!loaderData) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};