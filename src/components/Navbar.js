import React from "react";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../data/Navdata";
import { GrRestaurant } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Navbardata } from "../data/Navdata2";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2">
          {/* Logo Section */}
          <Link
            to="/"
            className="text-2xl flex items-center gap-2 font-bold uppercase"
          >
            <GrRestaurant />
            <p>Restaurant</p>
            <p className="text-secondary">Koala</p>
          </Link>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {Navbardata.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      onClick={() => handleScrollTo(item.link.substring(1))}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollTo(item.link.substring(1))}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
            >
              <PiShoppingCartThin />
            </Link>
            {/* Link for Login Button */}
            <Link
              to="/login"
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
            >
              Login
            </Link>
          </div>
          {/* Mobile Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} handleScrollTo={handleScrollTo} />
    </>
  );
};

export default Navbar;
