import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Importing search icon
import logo from "../../Assets/Gaziantep_Gaziray_Line_Symbol.svg (1).png";

export default function SideBarDashboard() {
  return (
    <div className="fixed lg:w-[15%] smm:w-[40px] overflow-hidden h-[100vh] lg:px-2 py-4 shadow-lg" style={{ backgroundColor: "#FF8A52" }}>
      <div className="w-full flex justify-center items-center">
        <p className="text-3xl font-semibold">
          <span className="text-white">Gaz</span><span className="text-black">ier</span>
        </p>
      </div>
      <ul className="smm:p-2 mt-5">
        <Link to="/">
          <li className="flex gap-2 items-center text-black font-semibold smm:mb-4 p-2 rounded-md transition-transform transform hover:scale-102 hover:text-black hover:bg-orange-200">
            <FiSearch size={20} className="text-white" />
            <p className="smm:hidden mt-2">Dashboard</p>
          </li>
        </Link>
        <Link to="/dashboard/userdashboard">
          <li className="flex gap-2 items-center text-black font-semibold p-2 rounded-md transition-transform transform hover:scale-102 hover:text-black hover:bg-orange-200">
            <FiSearch size={20} className="text-white" />
            <p className="smm:hidden mt-2">Users</p>
          </li>
        </Link>
        <Link to="/dashboard/categorydashboard">
          <li className="flex gap-2 items-center text-black font-semibold p-2 rounded-md transition-transform transform hover:scale-102 hover:text-black hover:bg-orange-200">
            <FiSearch size={20} className="text-white" />
            <p className="smm:hidden mt-2">Category</p>
          </li>
        </Link>
        <Link to="/dashboard/productdashboard">
          <li className="flex gap-2 items-center text-black font-semibold p-2 rounded-md transition-transform transform hover:scale-102 hover:text-black hover:bg-orange-200">
            <FiSearch size={20} className="text-white" />
            <p className="smm:hidden mt-2">Product</p>
          </li>
        </Link>
        <Link to="/dashboard/OrderDashboard">
          <li className="flex gap-2 items-center text-black font-semibold p-2 rounded-md transition-transform transform hover:scale-102 hover:text-black hover:bg-orange-200">
            <FiSearch size={20} className="text-white" />
            <p className="smm:hidden mt-2">Order</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
