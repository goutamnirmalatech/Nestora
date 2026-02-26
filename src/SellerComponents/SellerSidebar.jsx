import React from "react";
import { Link } from "react-router-dom";
// import { MdOutlineDashboard } from "react-icons/md";
// import { AiFillPropertySafety } from "react-icons/ai";
// import { AiTwotonePropertySafety } from "react-icons/ai";
export default function SellerSidebar() {
  return (
    <div className="w-[220px] bg-[#2e2e52] text-white min-h-screen p-5 flex flex-col gap-4">
      <ul className="space-y-2">
        <li>
          <Link
            to="/sellerDashboard"
            className="block px-3 py-1 rounded-md hover:bg-[#3a3a6a] transition-colors"
          >   
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/sellerproperties"
            className="block px-3 py-2 rounded-md hover:bg-[#3a3a6a] transition-colors"
          >
            Property
          </Link>
          
        </li>

         <li>
          <Link
            to="/sellerinquiries"
            className="block px-3 py-2 rounded-md hover:bg-[#3a3a6a] transition-colors"
          >
           SellerInquiries
          </Link>
          
        </li>
      </ul>
    </div>
  );
}
