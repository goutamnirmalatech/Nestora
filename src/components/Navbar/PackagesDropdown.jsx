import React from "react";

const PackagesDropdown = ({ isOpen, toggleOpen }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="px-4 py-1 bg-gray-100 rounded hover:bg-gray-200"
      >
        Packages
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg rounded">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Basic</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Premium</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Enterprise</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PackagesDropdown;
