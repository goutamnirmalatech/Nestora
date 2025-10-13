import React from "react";
import { useNavigate } from "react-router-dom";

export default function SellerNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-[#2e2e52] text-white px-5 py-2 flex justify-between items-center shadow-md h-[50px]">
      {/* Left: Seller Dashboard Title */}
      <h3 className="text-lg font-semibold m-0">Seller Dashboard</h3>

      {/* Right: Logout Button */}
      <button
        onClick={handleLogout}
        className="px-4 py-1.5 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
