import React from "react";

export default function ItemCounterInDashboard({ name, counter, color, icon }) {
  return (
    <div
      className="h-48 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-between"
      style={{ backgroundColor: color }}
    >
      <div>
        <div className="text-gray-700 text-2xl font-semibold mb-2">{name}</div>
        <div className="text-gray-700 text-4xl font-bold">{counter}</div>
      </div>
      <div className="ml-4">{icon}</div>
    </div>
  );
}
