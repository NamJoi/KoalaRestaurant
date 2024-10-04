import React from "react";
import OrderCard from "../layouts/OrderCard";
import Navbar from "./Navbar";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl mb-8">Our Food</h1>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <OrderCard img="/images/menu1.jpg" title="Shit" />
          <OrderCard img="/images/menu2.jpg" title="Shit" />
          <OrderCard img="/images/menu3.jpg" title="Shit" />
        </div>
      </div>
    </div>
  );
};

export default Order;
