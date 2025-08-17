
import Layout from "../Layout/Layout";
import {useNavigate, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useFetchDocuments } from '../hooks/useFetchDocuments';
import NullMessage from "../Components/NullMessage"
import SearchBar from "../Components/SearchBar";

const title="Olá, Bem vindo";
const subtitle="Escolha seu pedido entre bebidas, lanches e combos!"

const Lista = () => {
  const [search, setSearch] = useState(null);
  const [categorySearch, setCategorySearch] = useState(null);
  const {documents: items, loading, error} = useFetchDocuments("posts", search, categorySearch);

  const handleSearch = (value) => {
    setSearch(value);
  }

  // research that change too the color of categorys
  const navigate = useNavigate();
    useEffect(() => {

      if(search) {
         return navigate(`?produto=${search}`);
      } else if(categorySearch) {
         return navigate(`?categoria=${categorySearch}`);
      }
    },[search, categorySearch]);

  return (
    <div className="bg-[#FF0000]">
          <div className="p-2">
             <SearchBar onSearchHandle={handleSearch}/>
          </div>
      <Layout
        title={title}
        subtitle={subtitle}>
          <div className="">
            <ul className="font-bold flex justify-around mt-9">
            <li>
                {location.search === "?categoria=1" ? (
                  <div className="relative text-red-600">
                    <button>Bebidas</button><span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                    </div>
                ) : (
                   <div>
                    <button onClick={(e) => setCategorySearch(1)}>Bebidas</button>
                    </div>
                )}
                
            </li>
                   <li>
                {location.search === "?categoria=2" ? (
                  <div className="relative text-red-600">
                    <button>Lanches</button><span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                    </div>
                ) : (
                   <div>
                    <button onClick={(e) => setCategorySearch(2)}>Lanches</button>
                    </div>
                )}
                
            </li>
                   <li>
                {location.search === "?categoria=3" ? (
                  <div className="relative text-red-600">
                    <button>Combos</button><span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                    </div>
                ) : (
                   <div>
                    <button onClick={(e) => setCategorySearch(3)}>Combos</button>
                    </div>
                )}
                
            </li>
          </ul>
          <div className="flex items-center justify-center relative">
            <div className="flex-wrap mt-10 w-[95%] flex flex-row  gap-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 w-full">
              {items && items.length > 0 ? (items.map((item, i) => (
               <div key={i} className="flex flex-col items-center p-2 rounded-2xl shadow-md  bg-white hover:shadow-lg transition-shadow">
               <img className="h-[7em] w-auto rounded-2xl object-contain" src={`https://backendcardapio-8c1f.onrender.com${item.imageUrl}`} alt="" />
               <h3 className="font-poppins text-[10px]">{item.name}</h3>
               <p className="text-[7px]">{item.description}</p>
               <p className="text-[8px] mr-30">$ {item.price}</p>
             </div>
            ))
          ) : loading ? (
              Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i} className="flex flex-col items-center p-2 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow animate-pulse">
                
                  <div className="h-[7em] w-full rounded-2xl bg-gray-400" />
                
                  <div className="mt-2 h-3 w-3/4 bg-gray-600 rounded" />
              
                  <div className="mt-1 h-3 w-1/2 bg-gray-600 rounded" />
                  
                  <div className="mt-2 h-3 w-1/4 bg-gray-600 rounded self-start" />
                </div>
              ))
            ) : (
              <NullMessage/>
            )}
              </div>
            </div>
          </div>
          </div>
      </Layout>
        {/* <NavBar/> */}
    </div>
  );
};

export default Lista;
