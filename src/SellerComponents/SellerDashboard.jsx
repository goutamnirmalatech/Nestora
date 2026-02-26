// import React from "react";
// import SellerNavbar from "./SellerNavbar";
// import SellerSidebar from "./SellerSidebar";
// import Card from "./Card";
// import Graph from "./Graph";
// import Table from "./Table";

// export default function SellerDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <SellerNavbar />

//       <div className="flex">
//         {/* Sidebar */}
//         <SellerSidebar />

//         {/* Main Content */}
//         <div className="flex-1 p-6 bg-gray-100">
//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card title="Total Properties" value="12" />
//             <Card title="Active" value="8" />
//             <Card title="Inactive" value="4" />
//             <Card title="Revenue" value="₹50,000" />
//           </div>

//           {/* Table + Graph Section */}
//           <div className="flex flex-col lg:flex-row gap-8 mt-12">
//             {/* Table */}
//             <div className="flex-1 bg-white shadow-md rounded-2xl p-4">
//               <Table />
//             </div>

//             {/* Graph */}
//             <div className="flex-1 bg-white shadow-md rounded-2xl p-4">
//               <Graph />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import SellerNavbar from "./SellerNavbar";
import SellerSidebar from "./SellerSidebar";
import Card from "./Card";
import Graph from "./Graph";
import Table from "./Table";
// import SellerInquiries from "./SellerInquiries";

export default function SellerDashboard() {
  const sellerid = "s1"; // replace with logged-in seller id dynamically

  return (
    <div className="min-h-screen bg-gray-100">
      <SellerNavbar />

      <div className="flex">
        <SellerSidebar />

        <div className="flex-1 p-6 bg-gray-100">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Total Properties" value="12" />
            <Card title="Active" value="8" />
            <Card title="Inactive" value="4" />
            <Card title="Revenue" value="₹50,000" />
          </div>

          {/* Seller Inquiries */}
          {/* <SellerInquiries sellerid={sellerid} /> */}

          {/* Table + Graph */}
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <div className="flex-1 bg-white shadow-md rounded-2xl p-4">
              <Table />
            </div>
            <div className="flex-1 bg-white shadow-md rounded-2xl p-4">
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
