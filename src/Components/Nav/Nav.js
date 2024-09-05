import React from 'react';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4 } from "react-icons/tb";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 flex justify-around items-center h-16">
      <Link to="/" className="nav-item flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
        <TbHexagonNumber1 className="text-2xl" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/pizza" className="nav-item flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
        <TbHexagonNumber2 className="text-2xl" />
        <span className="text-xs">Pizza</span>
      </Link>
      <Link to="/catalog" className="nav-item flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
        <TbHexagonNumber3 className="text-2xl" />
        <span className="text-xs">Catalog</span>
      </Link>
      <Link to="/regApp" className="nav-item flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
        <TbHexagonNumber4 className="text-2xl" />
        <span className="text-xs">Reg App</span>
      </Link>
    </nav>
  );
}

export default Nav;
