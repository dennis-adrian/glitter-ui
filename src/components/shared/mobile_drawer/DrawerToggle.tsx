import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DrawerToggle = () => {
  return (
    <div className="flex-none lg:hidden">
      <label
        htmlFor="mobile-drawer"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <FontAwesomeIcon icon={faBars} />
      </label>
    </div>
  );
};

export default DrawerToggle;
