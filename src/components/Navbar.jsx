import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-12 justify-center items-center p-7">
      <div className="nav-url">
        <ul className="flex gap-4 font-semibold text-[22px] ">
          <li className="hover:text-gray-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to={"/"}>About</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to={"/"}>Contact</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;