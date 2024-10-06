import React from "react";
import OrderCard from "../layouts/OrderCard";
import Navbar from "./Navbar";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl mb-8">Our Food</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-12 justify-end">
          <OrderCard img="/images/menu1.jpg" title="Dish 1" />
          <OrderCard img="/images/menu2.jpg" title="Dish 2" />
          <OrderCard img="/images/menu3.jpg" title="Dish 3" />
          <OrderCard img="/images/menu4.jpg" title="Dish 4" />
          <OrderCard img="/images/menu5.jpg" title="Dish 5" />
          <OrderCard img="/images/menu6.jpg" title="Dish 6" />
          <OrderCard img="/images/menu1.jpg" title="Dish 7" />
          <OrderCard img="/images/menu2.jpg" title="Dish 8" />
          <OrderCard img="/images/menu3.jpg" title="Dish 9" />
          <OrderCard img="/images/menu4.jpg" title="Dish 10" />
          <OrderCard img="/images/menu5.jpg" title="Dish 11" />
          <OrderCard img="/images/menu6.jpg" title="Dish 12" />
        </div>
      </div>
    </div>
  );
};

export default Order;
