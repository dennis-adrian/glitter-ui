import { Link } from 'react-router-dom';

import logo from 'assets/logo.png';
import { menuItems } from './config/menu-items';

import DrawerToggle from '../mobile_drawer/DrawerToggle';
import UserItem from './UserItem';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="w-full navbar bg-base-100">
      <DrawerToggle />
      <div className="navbar-start">
        <Link to="/">
          <div className="w-16" tabIndex={0}>
            <img src={logo} alt="glitter logo" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:block">
        <ul className="menu menu-horizontal">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              isAdmin={item.isAdmin}
              label={item.label}
              path={item.path}
            />
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
