import { NavLink } from "react-router-dom";
// context
import { useAuthValue } from "../context/AuthContext";
// elements
import { ElementsNavBar } from "./ElementsNavBar";

const { edit, house, location, info, profile, marketCarket } = ElementsNavBar();

const NavBar = () => {
  const { user } = useAuthValue();
  return (
    <div className="sticky bottom-0 z-10  h-12 flex justify-center items-center w-[100vw] sm:hidden">
      <ul className="w-[90vw] bg-[#FF0000] rounded-tl-[10px] rounded-tr-[10px] h-full">
        <li className="flex  items-center h-full  justify-around">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors"
                : ""
            }
            to="/lista"
          >
            {house}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors"
                : ""
            }
            to="/localizacao"
          >
            {location}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors"
                : ""
            }
            to="/info"
          >
            {info}
          </NavLink>
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors"
                : ""
            }
            to="/carrinho"
          >
            {marketCarket}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors"
                : ""
            }
            to={!user ? "/login" : "/consulta"}
          >
            {user ? edit : profile}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
