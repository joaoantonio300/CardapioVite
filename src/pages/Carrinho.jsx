import { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Carrinho = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Coca-Cola Lata 350ml", price: 5.5, qty: 2 },
    { id: 2, name: "Hambúrguer Duplo", price: 18.9, qty: 1 },
    { id: 3, name: "Combo X-Salada + Refri", price: 25.0, qty: 1 },
  ]);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Layout
      title="🛒 Carrinho de Compras"
      subtitle="Revise seus produtos antes de finalizar o pedido."
    >
      <div className="flex flex-col items-center gap-6 py-10 min-h-[70vh] w-full">
        {cart.length === 0 ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-600">
              Seu carrinho está vazio!
            </h2>
            <p className="text-gray-600">
              Que tal dar uma olhada em nossas opções?
            </p>
            <Link
              to="/"
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-3xl space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Qtd: {item.qty}</p>
                  <p className="font-medium">
                    R$ {(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}

            <div className="text-right text-xl font-bold text-gray-800">
              Total: R$ {total.toFixed(2)}
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <button
                onClick={clearCart}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition w-full"
              >
                Limpar Carrinho
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition w-full">
                Finalizar Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Carrinho;
