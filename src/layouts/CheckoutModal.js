import React from "react";

const CheckoutModal = ({
  cartItems,
  calculateTotalPrice,
  calculateGrandTotal,
  isOpen,
  closeModal,
  confirmPayment,
}) => {
  if (!isOpen) return null; // Don't render anything if the modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <ul className="mb-4">
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.title} - {item.quantity} x ${item.price} = $
              {calculateTotalPrice(item)}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-6">
          Grand Total: ${calculateGrandTotal()}
        </h3>
        <div className="flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={confirmPayment}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
