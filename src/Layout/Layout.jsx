import React from 'react'
import SearchBar from '../Components/SearchBar';
import NavBar from '../Components/NavBar';

import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from "../context/AuthContext"
import { Link } from 'react-router-dom';

const buttonLogout = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
);

const addButton = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
);

const Layout = ({ children, title, subtitle }) => {

    const {user} = useAuthValue();
    const { logout } = useAuthentication();

    return (
    <>
    <div className=" bg-[#FF0000] flex flex-col justify-center items-center gap-10 font-poppins">  
    <header className="text-white flex flex-col gap-9 w-[95%] ">
          <div className=" flex items-center w-[100%] justify-center mt-2">
           {user && (
           <button className='border rounded-2xl'>
              <Link to="/cadastrar">
              {addButton}
             </Link>
           </button>
           )}
            <SearchBar/>
            {user && (
             <button onClick={logout}>{buttonLogout}</button>
           )}
          </div>
          <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xs font-light">
              {subtitle}
            </p>
          </div>
    </header>
    <section className="bg-white w-[100%] rounded-tl-[50px] rounded-tr-[50px]">
        {children}
     </section>
    </div>
      <NavBar/>
    </>
  )
}

export default Layout