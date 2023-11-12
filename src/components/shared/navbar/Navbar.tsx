import logo from '../../../assets/logo.png';
import MobileDropdown from './MobileDropdown';
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import { menuItems } from './config/menu-items';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <MobileDropdown />
        <Link to="/">
          <div className="w-16" tabIndex={0}>
              <img src={logo} alt="glitter logo" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <MenuItem key={item.label} label={item.label} path={item.path} />
            ))}
          </ul>
        </div>
      <div className="navbar-end">
        <UserItem />
      </div>
    </div>
  );
};

export default Navbar;
