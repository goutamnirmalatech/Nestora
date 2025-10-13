import React from "react";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-6">
        {/* Button */}
        <button
          className="bg-[#a399cc] border-none rounded-lg 
                     px-4 py-2 text-white font-bold cursor-pointer"
        >
          Pay Rent
        </button>

        <div className="cursor-pointer">📱 Download App</div>
        <div className="cursor-pointer">🤍 Saved</div>
        <div className="cursor-pointer">📄 Packages ▾</div>
</div>
  );
};

export default NavButtons;
