import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import { menuItems } from './config/menu-items';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="w-full navbar bg-base-100">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
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
