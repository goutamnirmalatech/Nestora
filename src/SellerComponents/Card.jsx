import React from "react";

export default function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
      <h3 className="text-gray-700 font-medium text-base">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}
