import { useState } from "react";
import Lupa from "../assets/zoom.png";

const SearchBar = ({onSearchHandle}) => {
  const [input, setInput] = useState("");
 
  const handleChange = (e) => {
    setInput(e.target.value);
    onSearchHandle(e.target.value);
  }

  return (
    <div className="w-[100vw] flex justify-center items-center " >
               <div className="border rounded-2xl flex gap-4 w-[60%]">
              <img className="" src={Lupa} alt="" />
              <input
                className="outline-none focus:outline-none focus:ring-0 focus:shadow w-[80%] leading-1 text-white"
                type="search"
                value={input}
                onChange={handleChange}
              />
            </div>
    </div>
  )
}

export default SearchBar