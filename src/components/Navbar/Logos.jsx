import React from "react";

const Logo = () => {
  return (
     <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 flex items-center justify-center"
        >
          <img src="Nestora.png"/>
        </div>
        <div className="font-bold text-2xl text-blue-600">
          NESTORA<span className="text-gray-300">.com</span>
        </div>
      </div>
  );
};

export default Logo;
