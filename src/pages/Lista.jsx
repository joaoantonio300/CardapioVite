
import Layout from "../Layout/Layout";
import {useNavigate, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useFetchDocuments } from '../hooks/useFetchDocuments';
import Spinner from "../Components/Spinner";
import NullMessage from "../Components/NullMessage"

const title="Olá, Bem vindo";
const subtitle="Escolha seu pedido entre bebidas, lanches e combos!"

const Lista = () => {
  const [search, setSearch] = useState(null);
  const [categorySearch, setCategorySearch] = useState(null);
  const {documents: items, loading, error} = useFetchDocuments("posts", search, categorySearch);

  const navigate = useNavigate();
    useEffect(() => {

      if(search) {
         return navigate(`?produto=${search}`);
      } else if(categorySearch) {
         return navigate(`?categoria=${categorySearch}`);
      }
    },[search, categorySearch]);

  return (
    <>
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
          <div className="flex items-center justify-center">
            <div className="flex-wrap mt-10 w-[95%] flex flex-row justify-between">
            {loading && <Spinner/>}
              {items && items.length > 0 ? (items.map((item, i) => (
               <div key={i} className="flex flex-col rounded-[20%] justify-center items-center shadow-md w-[32%]">
               <img className="h-[7em] w-auto rounded-2xl object-contain" src={`https://backendcardapio-8c1f.onrender.com${item.imageUrl}`} alt="" />
               <h3 className="font-poppins text-[10px]">{item.name}</h3>
               <p className="text-[7px]">{item.description}</p>
               <p className="text-[8px] mr-12">$ {item.price}</p>
             </div>
            ))) : (
              <NullMessage/>
            )}
            </div>
          </div>
          </div>
      </Layout>
        {/* <NavBar/> */}
    </>
  );
};

export default Lista;
