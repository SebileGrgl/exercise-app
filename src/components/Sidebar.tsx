import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import sidebarLinks from "../constants/sidebarLinks";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="h-screen fixed w-16  bg-neutral flex flex-col justify-between items-center py-4 px-2">
      <div className="border-b border-accent pb-4 flex justify-center items-center w-full ">
        <img src={logo} alt="logo" width={40} />
      </div>
      <nav>
        <ul className="flex flex-col gap-6 items-center">
          {sidebarLinks.map(({ id, icon: Icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <li
                key={id}
                className={`${isActive ? "bg-accent p-3 rounded-lg" : ""}`}
              >
                <NavLink to={path}>
                  <Icon
                    className={`w-7 stroke-1 text-secondary transition-transform duration-150 ${
                      isActive ? "scale-125 " : "hover:scale-110 "
                    }`}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-t-accent pt-4 flex justify-center items-center w-full ">
        <NavLink to="/login">
          <ArrowLeftStartOnRectangleIcon className="w-7 text-secondary" />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
