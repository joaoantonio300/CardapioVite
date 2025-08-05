import React from "react";
import { NavLink } from "react-router-dom" 

import { useAuthValue } from "../context/AuthContext"

const edit = ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
)

const house = (
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
    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  />
</svg>
);
const location = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
);
const info = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

);
const profile = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
);

const NavBar = () => {

  const {user} = useAuthValue();

  return (
    <div className="sticky bottom-0 z-10  h-10 flex justify-center items-center w-[100vw] sm:hidden">
        <ul className="w-[90vw] bg-[#FF0000] rounded-tl-[10px] rounded-tr-[10px] h-full"> 
          <li className="flex  items-center h-full  justify-around">
            <NavLink className={({ isActive }) => isActive ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors" : ""} to="/lista" >{house}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors" : ""} to="/localizacao">{location}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors" : ""} to="/info" >{info}</NavLink>
            {/* a have to create here a logic where when the adm user are conected dont go into the page of login, and yes tha register page */}
            <NavLink className={({ isActive }) => isActive ? "text-[#FF0000] bg-white rounded-[10px] p-1 transition-colors" : ""} to={!user ? "/login" : "/consulta"} >{user ? edit : profile}</NavLink>
          </li>
          <li></li>
        </ul>
    </div>
  );
};

export default NavBar;
