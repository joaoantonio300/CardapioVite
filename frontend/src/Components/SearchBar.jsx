import Lupa from "../assets/zoom.png";

const SearchBar = () => {
  return (
    <div className="w-[100vw] flex justify-center items-center " >
               <div className="border rounded-2xl flex gap-4 w-[60%]">
              <img className="" src={Lupa} alt="" />
              <input
                className="outline-none focus:outline-none focus:ring-0 focus:shadow w-[80%] leading-1"
                type="search"
                name=""
                id=""
              />
            </div>
    </div>
  )
}

export default SearchBar