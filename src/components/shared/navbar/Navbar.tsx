import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import MobileDropdown from './MobileDropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <MobileDropdown />
        <Link to="/">
          <div tabIndex={0} className="avatar">
            <div className="w-12 rounded-full">
              <img src={logo} alt="glitter logo" />
            </div>
          </div>
        </ Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/"></NavLink>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
