import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component

const BookingTable = () => {
  const [area, setArea] = useState("");
  const [store, setStore] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    // Display the message and modal
    setMessage(
      `Booking confirmed for ${numAdults} adults${
        numChildren > 0 ? ` and ${numChildren} children` : ""
      } on ${date} at ${time}.`
    );
    setShowModal(true);

    // Automatically hide the modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      {/* Navbar added here */}
      <Navbar />

      {/* Booking Form Section */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-auto min-h-screen bg-cover bg-center"
        style={{ background: `url(/images/background.jpg)` }}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          style={{
            boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.8)",
            background:
              "radial-gradient(circle, transparent, rgba(0, 0, 0, 0.2))",
          }}
        />
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-orange-400 relative z-10"
          style={{
            textShadow: "2px 4px 6px rgba(0, 0, 0, 1)",
          }}
        >
          Booking Reservation
        </h1>
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white shadow-lg rounded-3xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg"
        >
          <div className="grid grid-cols-1 gap-4 mb-2 sm:grid-cols-2">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Area
              </label>
              <input
                type="text"
                placeholder="Enter area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.area ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Store
              </label>
              <input
                type="text"
                placeholder="Enter address"
                value={store}
                onChange={(e) => setStore(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.store ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className={`mt-1 block w-full border ${
                errors.customerName ? "border-red-500" : "border-gray-300"
              } rounded-md p-2`}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-2 sm:grid-cols-2">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-2 sm:grid-cols-2">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Number of Adults
              </label>
              <select
                value={numAdults}
                onChange={(e) => setNumAdults(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <select
                value={numChildren}
                onChange={(e) => setNumChildren(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-2 sm:grid-cols-2">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.time ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Note
            </label>
            <textarea
              value={note}
              placeholder="What is your request?"
              onChange={(e) => setNote(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-200"
          >
            Confirm Booking
          </button>
        </form>

        {/* Modal displayed when booking is successful */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-500">
                Booking Complete!
              </h2>
              <p>{message}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingTable;
