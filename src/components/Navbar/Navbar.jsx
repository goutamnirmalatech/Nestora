
// import React, { useState } from "react";
// import Logo from "../../components/Navbar/Logos";
// import NavButtons from "../../components/Navbar/NavButtons";
// import PostProperty from "../../components/Navbar/PostProperty";
// import UserProfile from "../../components/Navbar/UserProfile";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-[#2e2e52] to-[#5e4fa2] text-white font-sans shadow-md">
//       <div className="flex items-center justify-between px-5 py-3">
//         {/* Logo */}
//         <Logo />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <NavButtons />
//           <PostProperty />
//           <UserProfile />
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="flex flex-col items-center gap-4 pb-4 md:hidden bg-gradient-to-r from-[#2e2e52] to-[#5e4fa2]">
//           <NavButtons />
//           <PostProperty />
//           <UserProfile />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../../components/Navbar/Logos";
import NavButtons from "../../components/Navbar/NavButtons";
import PostProperty from "../../components/Navbar/PostProperty";
import UserProfile from "../../components/Navbar/UserProfile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#2e2e52] to-[#5e4fa2] text-white font-sans shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 py-4 md:py-3">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavButtons />
          <PostProperty />
          <UserProfile />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex flex-col justify-center items-center cursor-pointer w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
          {/* <span
            className={`block w-8 h-[2px] bg-white transition-all duration-300 ease-in-out transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span> */}
          {/* <span
            className={`block w-8 h-[2px] bg-white my-1 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span> */}
          {/* <span
            className={`block w-8 h-[2px] bg-white transition-all duration-300 ease-in-out transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span> */}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gradient-to-r from-[#2e2e52] to-[#5e4fa2] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <NavButtons />
          <PostProperty />
          <UserProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
