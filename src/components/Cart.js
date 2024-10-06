import React, { useContext, useState } from "react";
import { CartContext } from "../layouts/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import Navbar from "./Navbar";
import CheckoutModal from "../layouts/CheckoutModal";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

  // Calculate total price for each item
  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2); // Ensure 2 decimal places
  };

  // Calculate grand total
  const calculateGrandTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Function to handle increasing the quantity of an item
  const incrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1; // Increase the quantity by 1
    setCartItems(updatedCart); // Update the cart state
  };

  // Function to handle decreasing the quantity of an item
  const decrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease the quantity by 1
      setCartItems(updatedCart); // Update the cart state
    }
  };

  // Function to handle checkout and show the modal
  const handleCheckout = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle final payment confirmation
  const confirmPayment = () => {
    // Logic for payment confirmation goes here (e.g., API call)
    alert("Payment confirmed!"); // Example action
    closeModal(); // Close the modal after confirmation
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="cart-page px-5 lg:px-32 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow-lg rounded-lg p-5"
                >
                  {/* Image Section */}
                  <div className="w-1/3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="ml-5 flex flex-col justify-between w-2/3">
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Price: ${item.price}
                      </p>

                      {/* Quantity Adjustment Section */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decrementQuantity(index)}
                          className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <FaMinus />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(index)}
                          className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <p className="font-semibold text-lg mt-3">
                        Total: ${calculateTotalPrice(item)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grand Total Section */}
            <div className="flex justify-end">
              <div className="text-right">
                <h2 className="text-2xl font-bold">
                  Grand Total: ${calculateGrandTotal()}
                </h2>
                <button
                  onClick={handleCheckout}
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded mt-5"
                >
                  Proceed to Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        <CheckoutModal
          isOpen={isModalOpen}
          cartItems={cartItems}
          calculateTotalPrice={calculateTotalPrice}
          calculateGrandTotal={calculateGrandTotal}
          closeModal={closeModal}
          confirmPayment={confirmPayment}
        />
      </div>
    </div>
  );
};

export default Cart;
