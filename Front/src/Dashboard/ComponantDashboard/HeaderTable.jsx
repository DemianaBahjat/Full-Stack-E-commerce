import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderTable({ navigateTo, name, title }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center bg-[#FFF3DD] p-4 rounded-md ">
        <div className="text-gray-800 text-lg font-bold">{title}</div>

        {navigateTo === "-1" ? (
          <button
            onClick={() => navigate(-1)}
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
          >
            {name}
          </button>
        ) : (
          <button
            onClick={() => navigate(`${navigateTo}`)}
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
          >
            {name}
          </button>
        )}
      </div>
      <div className="w-full h-[1px] mt-2 bg-slate-100"></div>
    </>
  );
}
