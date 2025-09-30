import { useState } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Carrinho = () => {
  const { cart, setCart } = useContext(OrderContext);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendOrderToWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = "557999043712"; // coloque seu número no formato internacional +55 DDD número
    const itemsText = cart
      .map(
        (item) =>
          `${item.name} - Qtd: ${item.quantity} - R$ ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("%0A"); // %0A = quebra de linha no link do WhatsApp

    const totalText = `Total: R$ ${total.toFixed(2)}`;
    const message = `Olá! Gostaria de fazer o pedido:%0A${itemsText}%0A${totalText}`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Layout
      title="🛒 Carrinho de Compras"
      subtitle="Revise seus produtos antes de finalizar o pedido."
    >
      <div className="flex flex-col items-center gap-6 py-10 min-h-[70vh] w-full">
        {cart.length === 0 ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl fonat-bold text-red-600">
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
                className="flex justify-center items-center b-4 w-full p-2 rounded-2xl shadow-md  bg-white hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-row justify-between items-center w-[80%]">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Qtd: {item.quantity}</p>
                    <p className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
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
              <button
                onClick={sendOrderToWhatsApp}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition w-full"
              >
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
