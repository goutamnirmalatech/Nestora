// import React, { useState } from "react";
// import BuyerSidebar from "./BuyerSidebar";
// import MyInquiries from "./MyInquiries";
// import SavedProperties from "./SavedProperties";
// import BuyerProfile from "./BuyerProfile";

// const BuyerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("inquiries");

//   const renderSection = () => {
//     switch (activeTab) {
//       case "inquiries":
//         return <MyInquiries />;
//       case "saved":
//         return <SavedProperties />;
//       case "profile":
//         return <BuyerProfile />;
//       default:
//         return <MyInquiries />;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <BuyerSidebar setActiveTab={setActiveTab} />
//       <div className="flex-1 p-6 overflow-y-auto">{renderSection()}</div>
//     </div>
//   );
// };

// export default BuyerDashboard;
// src/components/BuyerDashboard.jsx
import React, { useState } from "react";
import BuyerSisebar from "./BuyerSisebar";
import Navbar from "./Navbar";
import MyInquiries from "./MyInquiries";
import SavedProperties from "./SavedProperties";
import BuyerProfile from "./BuyerProfile";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("inquiries");

  const renderSection = () => {
    switch (activeTab) {
      case "inquiries":
        return <MyInquiries />;
      case "saved":
        return <SavedProperties />;
      case "profile":
        return <BuyerProfile />;
      default:
        return <MyInquiries />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex pt-16"> {/* pt-16 to offset fixed navbar height */}
        <BuyerSisebar setActiveTab={setActiveTab} />
        <div className="flex-1 p-6 overflow-y-auto">{renderSection()}</div>
      </div>
    </>
  );
};

export default BuyerDashboard;
