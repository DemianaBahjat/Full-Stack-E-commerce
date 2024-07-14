import React from 'react';

export default function HeaderDashboard() {
  return (
    <div className="w-full h-20 primaryDashboard flex justify-center items-center ">
      <div className="w-[95%] flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-brown-800 primaryDashboard p-2 rounded"> </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-gray-600 font-bold">Home</span>
            <span className="text-gray-400 mx-2 font-bold">/</span>
            <span className="text-gray-800 font-bold">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
