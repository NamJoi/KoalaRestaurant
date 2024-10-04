import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Button from "../layouts/Button";

const Homepart = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-orange-900 opacity-90 z-0"></div>

      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0 relative z-10">
        <h1
          className="font-semibold text-5xl text-center lg:text-start leading-tight text-white"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Delight in every bite, where flavors meet perfection
        </h1>
        <p
          className="text-white text-center lg:text-start"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)" }}
        >
          Savor fresh ingredients, crafted with passion for every occasion.
        </p>

        <div className="flex flex-row gap-6">
          <Link to="/order">
            <Button title="ADD TO CART" />
          </Link>
          <button onClick={() => handleScrollTo("menu")}>
            <Button title="MORE MENU" />
          </button>
        </div>
      </div>

      <img
        src="/images/food.png"
        alt="Spinning Animation"
        className="w-[500px] rounded-full animate-spin relative z-10"
      />
    </div>
  );
};

export default Homepart;
