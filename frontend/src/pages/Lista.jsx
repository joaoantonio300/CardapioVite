import Drink from "../assets/drink.png";
import Plate from "../assets/plate.png";
import Layout from "../Layout/Layout";
import NavBar from "../Components/NavBar";

const title="Olá, Bem vindo";
const subtitle="Escolha seu pedido entre bebidas, lanches e combos!"
const items = [
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
];

const Lista = () => {
  return (
    <>
      <Layout
        title={title}
        subtitle={subtitle}
      >
          <ul className="font-bold flex justify-around mt-9">
            <li className=" relative text-red-600">
              Bebidas
              <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
            </li>
            <li>Lanches</li>
            <li>Combos</li>
          </ul>

          <div className="flex items-center justify-center">
            <div className="flex-wrap mt-10 w-[95%] flex flex-row justify-between">
            {items && items.length > 0 ? (items.map((item, i) => (
               <div key={i} className="flex flex-col rounded-[20%] justify-center items-center shadow-md w-[32%]">
               <img className="h-[7em]" src={item.img} alt="" />
               <h3 className="font-poppins text-[10px]">{item.title}</h3>
               <p className="text-[7px]">{item.desc}</p>
               <p className="text-[8px] mr-12">$ {item.price}</p>
             </div>
            ))) : (
            <p className="absolute top-1/2 font-poppins font-bold text-2xl text-[#656565] text-opacity-50">Ops! Nenhum lanche disponivel!</p>
            )}
            </div>
          </div>
      </Layout>
        {/* <NavBar/> */}
    </>
  );
};

export default Lista;
