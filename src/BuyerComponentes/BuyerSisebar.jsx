import React from "react";
import { Link } from "react-router-dom";

const BuyerSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/buyer/dashboard">Dashboard</Link></li>
        <li><Link to="/buyer/properties">My Properties</Link></li>
        <li><Link to="/buyer/inquiries">My Inquiries</Link></li>
      </ul>
    </div>
  );
};

export default BuyerSidebar;



// import React from "react";

// const BuyerSidebar = ({ setActiveSection }) => {
//   return (
//     <div className="w-64 h-screen bg-gradient-to-b from-indigo-600 to-blue-500 text-white p-5 shadow-lg">
//       <h2 className="text-2xl font-bold mb-8 text-center">🏠 Buyer Panel</h2>

//       <ul className="space-y-4">
//         <li
//           onClick={() => setActiveSection("inquiries")}
//           className="cursor-pointer hover:text-yellow-300"
//         >
//           💬 My Inquiries
//         </li>
//         <li
//           onClick={() => setActiveSection("favorites")}
//           className="cursor-pointer hover:text-yellow-300"
//         >
//           ❤️ Favorites
//         </li>
//         <li
//           onClick={() => setActiveSection("notifications")}
//           className="cursor-pointer hover:text-yellow-300"
//         >
//           🔔 Notifications
//         </li>
//         <li
//           onClick={() => setActiveSection("profile")}
//           className="cursor-pointer hover:text-yellow-300"
//         >
//           👤 Profile
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default BuyerSidebar;
