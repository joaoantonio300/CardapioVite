import { useState } from "react";

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="bg-white p-4 rounded-2xl shadow-lg w-[90%] max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain rounded-xl mb-3"
        />

        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-green-600 font-semibold text-base mb-4">
          $ {product.price}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Quantidade:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-2 py-1 bg-gray-200 rounded-lg"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-2 py-1 bg-gray-200 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            console.log("Added to cart:", { ...product, quantity });
            onClose();
          }}
          className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
