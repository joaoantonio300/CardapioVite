import Layout from "../layout/Layout";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom" 
import { useState } from "react";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from '../hooks/useDeleteDocument';
import NullMessage from "../Components/NullMessage"


const title="Meus produtos";
const subtitle="O que vamos oferecer hoje?"

const Consulta = () => {

  const [search, setSearch] = useState(null);
  const [id, setId] = useState(null);
  const {documents: items, loading, error} = useFetchDocuments("posts", search);
  const { deleteDocument } = useDeleteDocument("posts");

  const deleteGeneral = () => {
    deleteDocument(id)
  }

  return (
      <Layout
        title={title}
        subtitle={subtitle}
      >
        <div className="w-full flex items-center justify-center relative">
        <table className="w-[95%] mt-9 border-separate border-spacing-y-1 table-fixed">
          <thead className="text-sm">
            <tr className="font-light">
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ações</th>
            </tr>
          </thead>
          <tbody className="self-center font-light border-spacing-y-7">
          {items && items.length > 0 ? (items.map((item, i) => (
              
              <tr key={i} className="text-center text-xs shadow-md shadow-gray-400 rounded-[50px]">
                <td className=" p-3 whitespace-normal break-words">{item.name}</td>
                <td className=" p-3 whitespace-normal break-words">{item.category}</td>
                <td className=" p-3 whitespace-normal break-words">{item.description}</td>
                <td className=" p-3 whitespace-normal break-words">{item.price}</td>
                <td className=" p-3 whitespace-normal">
                  <div className="sm:space-x-1">
                  <button className="w"><Link to={`/editar/${item.id}`}><img src={Edit} alt="editar" /></Link></button>
                  <button className="w"  onClick={() => deleteDocument(item.id)}><img src={Delete} alt="deletar" /></button>
                  </div>
                </td>
             </tr>
            ))) : (
              <div className="mt-40">
                    <NullMessage/>
              </div>
            )}
          </tbody>
        </table>
        </div>
      </Layout>
  );
};

export default Consulta;
