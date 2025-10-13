import React from "react";

export default function Table() {
  const data = [
    { id: 1, property: "Flat in Delhi", status: "Active" },
    { id: 2, property: "Villa in Mumbai", status: "Inactive" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[600px] mx-auto border border-gray-300 bg-white text-sm shadow-md rounded-lg">
        <thead className="bg-[#5e4fa2] text-white">
          <tr>
            <th className="px-3 py-2 border border-gray-300">ID</th>
            <th className="px-3 py-2 border border-gray-300">Property</th>
            <th className="px-3 py-2 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="px-3 py-2 border border-gray-300">{row.id}</td>
              <td className="px-3 py-2 border border-gray-300">{row.property}</td>
              <td className="px-3 py-2 border border-gray-300">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
