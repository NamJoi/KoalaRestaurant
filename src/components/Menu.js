import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-12 mb-8">
        Our Signature Dishes
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img="/images/menu1.jpg" title="Shit" />
        <MenuCard img="/images/menu2.jpg" title="Shit" />
        <MenuCard img="/images/menu3.jpg" title="Shit" />
        <MenuCard img="/images/menu4.jpg" title="Shit" />
        <MenuCard img="/images/menu5.jpg" title="Shit" />
        <MenuCard img="/images/menu6.jpg" title="Shit" />
      </div>
    </div>
  );
};

export default Menu;
