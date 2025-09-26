import NavBar from "../Components/NavBar";

import { useAuthentication } from "../hooks/useAuthentication";
import { Link, useLocation } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import SearchBar from "../Components/SearchBar";

const buttonLogout = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    />
  </svg>
);
const addButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
const back = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
    />
  </svg>
);

const Layout = ({ children, title, subtitle }) => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <div className="bg-[#FF0000] flex flex-col justify-between">
      <div className="flex flex-col justify-between items-center gap-10 font-poppins min-h-[100vh]">
        <header className="text-white flex flex-col gap-9 w-[95%]">
          <div className="flex items-center w-full mt-2  justify-between">
            {location.pathname === "/consulta" && user && (
              <>
                <button className="rounded-2xl">
                  <Link to="/cadastrar">{addButton}</Link>
                </button>

                <button className="flex-end" onClick={logout}>
                  {buttonLogout}
                </button>
              </>
            )}
            {location.pathname === "/cadastrar" && (
              <button className="rounded-2xl">
                <Link to="/consulta">{back}</Link>
              </button>
            )}
          </div>
          <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xs font-light">{subtitle}</p>
          </div>
        </header>

        <section className="bg-white w-full rounded-tl-[50px] rounded-tr-[50px] min-h-[80vh] pt-10">
          {children}
        </section>
      </div>

      {location.pathname !== "/cadastrar" && <NavBar />}
    </div>
  );
};

export default Layout;
