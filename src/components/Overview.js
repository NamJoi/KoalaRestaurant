import React from "react";
import Button from "../layouts/Button";

const Overview = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mb-8">
        About Our Restaurant
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg" src="/about.jpg" alt="About Us" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our Restaurant Special?
          </h2>
          <p>
            At our restaurant, we believe that every meal should be an
            experience. From the freshest ingredients to the meticulous
            presentation, every dish is crafted to offer a blend of flavors that
            excite your palate.
          </p>
          <p>
            Our chefs pour their passion into creating culinary delights,
            whether it's a hearty breakfast, a light lunch, or a lavish dinner.
            We strive to provide an atmosphere where great food and excellent
            service come together to create unforgettable dining moments.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
