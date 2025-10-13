import React from "react";
import { Link } from "react-router-dom";

export default function SellerSidebar() {
  return (
    <div className="w-[220px] bg-[#2e2e52] text-white min-h-screen p-5 flex flex-col gap-4">
      <ul className="space-y-2">
        <li>
          <Link
            to="/sellerDashboard"
            className="block px-3 py-2 rounded-md hover:bg-[#3a3a6a] transition-colors"
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
      </ul>
    </div>
  );
}
