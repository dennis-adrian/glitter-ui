import { Link } from 'react-router-dom';

import { menuItems } from '../navbar/config/menu-items';

import MenuItem from '../navbar/MenuItem';
import logo from '../../../assets/logo.png';

const DrawerSidebar = () => {
  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        <Link to="/">
          <div className="w-16 mb-2" tabIndex={0}>
            <img src={logo} alt="glitter logo" />
          </div>
        </Link>
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
  );
};

export default DrawerSidebar;
