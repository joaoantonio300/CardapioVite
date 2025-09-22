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

const carMarket = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
)

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
            {!location.pathname === "/consulta" || "/cadastrar" &&(
              <>
              <button className="rounded-2xl">
                <Link to ="/carrinho">{carMarket}</Link>
              </button>
              </>
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
