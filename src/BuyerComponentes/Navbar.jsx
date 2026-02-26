// src/components/BuyerNavbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const BuyerNavbar = () => {
  // const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-blue-700 cursor-pointer"
        >
          RealEstate<span className="text-gray-800">Hub</span>
        </h1>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <button
            onClick={() => navigate("/")}
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/buyer/dashboard")}
            className="text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/buyer/saved")}
            className="text-gray-700 hover:text-blue-600"
          >
            Saved Properties
          </button>
        </div>

        {/* User Dropdown */}
        <div className="relative group">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user"
              className="w-8 h-8 rounded-full border"
            />
            {/* <span className="text-gray-700 font-medium">{user?.name || "Buyer"}</span> */}
          </div>
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
            <button
              onClick={() => navigate("/buyer/profile")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BuyerNavbar;
