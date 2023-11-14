import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../../store';

type Props = {
  label: string;
  path: string;
  isAdmin?: boolean;
};

const MenuItem = ({ label, path, isAdmin }: Props) => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  if (isAdmin && !currentUser.isAdmin) return null;

  return (
    <li className="m-1" tabIndex={1}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
};

export default MenuItem;
