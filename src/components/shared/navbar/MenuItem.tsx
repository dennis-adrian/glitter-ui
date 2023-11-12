import { NavLink } from 'react-router-dom';

type Props = {
  label: string;
  path: string;
};

const MenuItem = ({ label, path }: Props) => {
  return (
    <li tabIndex={1} >
      <NavLink to={path}>{label}</ NavLink>
    </li>
  )
};

export default MenuItem;
