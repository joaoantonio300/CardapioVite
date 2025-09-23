import { Link } from "react-router-dom";

const MarketCarCard = (item, clearCart) => {

      const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-center items-center b-4 w-full p-2 rounded-2xl shadow-md  bg-white hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-row justify-between items-center w-[80%]">
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
  );
};

export default MarketCarCard;
