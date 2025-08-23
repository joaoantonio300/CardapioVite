import Layout from "../Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import NullMessage from "../Components/NullMessage";
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";
import Skeleton from "../Components/Skeleton";

const title = "Olá, Bem vindo";
const subtitle = "Escolha seu pedido entre bebidas, lanches e combos!";

const Lista = () => {
  const [productSearch, setProductSearch] = useState(null);
  const [categorySearch, setCategorySearch] = useState(null);

  const {
    documents: items,
    loading,
    error,
  } = useFetchDocuments("posts", productSearch, categorySearch);

  const queryParams = new URLSearchParams(location.search);
  const categoria = queryParams.get("categoria");
  const produto = queryParams.get("produto");

  useEffect(() => {
    if (categoria) setCategorySearch(categoria);
    if (produto) setProductSearch(produto);
  }, [categoria, produto]);

  const handleSearch = (value) => {
    setProductSearch(value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (productSearch && categorySearch) {
      navigate(`?produto=${productSearch}&categoria=${categorySearch}`);
    } else if (productSearch) {
      navigate(`?produto=${productSearch}`);
    } else if (categorySearch) {
      navigate(`?categoria=${categorySearch}`);
    }
  }, [productSearch, categorySearch]);

  return (
    <div className="bg-[#FF0000]">
      <div className="p-2">
        <SearchBar onSearchHandle={handleSearch} />
      </div>
      <Layout title={title} subtitle={subtitle}>
        <div>
          <ul className="font-bold flex justify-around mt-9">
            <li>
              {categorySearch === "1" ? (
                <div className="relative text-red-600">
                  <button onClick={() => setCategorySearch(null)}>
                    Bebidas
                  </button>
                  <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                </div>
              ) : (
                <div>
                  <button onClick={() => setCategorySearch("1")}>
                    Bebidas
                  </button>
                </div>
              )}
            </li>
            <li>
              {categoria === "2" ? (
                <div className="relative text-red-600">
                  <button>Lanches</button>
                  <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                </div>
              ) : (
                <div>
                  <button onClick={(e) => setCategorySearch("2")}>
                    Lanches
                  </button>
                </div>
              )}
            </li>
            <li>
              {categoria === "3" ? (
                <div className="relative text-red-600">
                  <button>Combos</button>
                  <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
                </div>
              ) : (
                <div>
                  <button onClick={(e) => setCategorySearch("3")}>
                    Combos
                  </button>
                </div>
              )}
            </li>
          </ul>

          <div className="flex items-center justify-center relative">
            <div className="flex-wrap mt-10 w-[95%] flex flex-row  gap-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 w-full">
                {items && items.length > 0 ? (
                  items.map((item, i) => (
                    <ProductCard
                      key={i}
                      image={item.imageUrl}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))
                ) : loading ? (
                  Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)
                ) : (
                  <NullMessage />
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
