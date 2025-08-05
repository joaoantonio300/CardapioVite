import Layout from "../Layout/Layout";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Detail from "../assets/detail.png";
import { NavLink } from "react-router-dom" 


const title="Meus produtos";
const subtitle="O que vamos oferecer hoje?"
const items = [
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "45.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola Sabor cola Sabor cola Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
];

const Consulta = () => {
  return (
    <>
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
              <>
              <tr key={i} className="text-center text-xs shadow-md shadow-gray-400 rounded-[50px]">
                <td className=" p-3 whitespace-normal break-words">{item.title}</td>
                <td className=" p-3 whitespace-normal break-words">{item.categoria}</td>
                <td className=" p-3 whitespace-normal break-words">{item.desc}</td>
                <td className=" p-3 whitespace-normal break-words">{item.price}</td>
                <td className=" p-3 whitespace-normal">
                  <div className="sm:space-x-1">
                  <button className="w"><img src={Edit} alt="editar" /></button>
                  <button className="w"><img src={Delete} alt="deletar" /></button>
                  </div>
                </td>
             </tr>
              </>
            ))) : (
            <p className="absolute top-1/2 font-poppins font-bold text-2xl text-[#656565] text-opacity-50">Ops! Nenhum lanche disponivel!</p>
            )}
          </tbody>
        </table>
        </div>
      </Layout>
    </>
  );
};

export default Consulta;
