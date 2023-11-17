import { Link } from 'react-router-dom';

import { menuItems } from '../navbar/config/menu-items';

import MenuItem from '../navbar/MenuItem';
import logo from '../../../assets/logo.png';

const DrawerSidebar = () => {
  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="mobile-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 min-h-full bg-base-200">
        <div className="flex justify-between">
          <Link to="/">
            <div className="w-12 mb-2" tabIndex={0}>
              <img src={logo} alt="glitter logo" />
            </div>
          </Link>
          <label
            htmlFor="mobile-drawer"
            className="btn btn-xs btn-ghost drawer-button"
          >
            ✕
          </label>
        </div>
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
