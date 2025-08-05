import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Layout 
      title="404 - Página Não Encontrada"
      subtitle="Ops! A página que você está procurando não existe ou foi movida."
    >
      <div className="flex flex-col justify-center items-center gap-6 py-10 text-center h-[70vh]">
        <h2 className="text-6xl font-bold text-red-600">404</h2>
        <p className="text-lg text-gray-700">
          Parece que você se perdeu. Vamos voltar para o início?
        </p>
        <Link 
          to="/" 
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
        >
          Ir para Home
        </Link>
      </div>
    </Layout>
  );
};

export default Page404;