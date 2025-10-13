import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Graph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [5, 10, 8, 15, 12],
        borderColor: "#5e4fa2",
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-xl w-[450px] h-[320px] mx-auto shadow-md mt-5">
      <h4 className="text-center mb-3 font-semibold text-gray-700">Sales Graph</h4>
      <div className="h-[260px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
