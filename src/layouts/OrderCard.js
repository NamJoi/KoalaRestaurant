import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const OrderCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(""); // State to handle notification message
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      title: props.title,
      img: props.img,
      price: 15.99,
      quantity: quantity,
    };
    addToCart(product); // Add the product to the cart

    // Show success message
    setMessage("Added to cart successfully!");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 700);
  };

  // Increment and decrement quantity handlers
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full bg-gray-200 p-3 rounded-lg flex flex-col items-center">
      <div className="flex justify-center">
        <img className="rounded-lg" src={props.img} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
      <p>$15.99</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={decrementQuantity}
          className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FaMinus />
        </button>
        <span>{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FaPlus />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-2 px-6 py-1 border-2 border-white bg-primary hover:text-white transition-all rounded-full"
      >
        Add To Cart
      </button>

      {/* Success Message */}
      {message && (
        <div className="mt-3 text-green-500 font-semibold text-sm">{message}</div>
      )}
    </div>
  );
};

export default OrderCard;
