// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SellerInquiries = ({ sellerid }) => {
//   const [inquiries, setInquiries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [modalPhoto, setModalPhoto] = useState(null);

//   const fetchInquiries = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `http://localhost:7000/viewinquiry/${sellerid}`
//       );
//       setInquiries(res.data);
//     } catch (err) {
//     //   console.error(err);
//       alert("Error fetching inquiries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (inquiryid, newStatus) => {
//     try {
//       await axios.patch(
//         `http://localhost:7000/updateinquiry/${inquiryid}`,
//         { status: newStatus }
//       );
//       fetchInquiries();
//     } catch (err) {
//       console.error(err);
//       alert("Error updating status");
//     }
//   };

//   useEffect(() => {
//     fetchInquiries();
//   }, []);

//   return (
//     <div className="mt-12">
//       <h2 className="text-2xl font-bold mb-4">Buyer Inquiries 📩</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : inquiries.length === 0 ? (
//         <p>No inquiries received yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {inquiries.map((inq) => (
//             <div
//               key={inq.inquiryid}
//               className="bg-white shadow-md rounded-2xl p-4 border border-gray-200"
//             >
//               <img
//                 src={`http://localhost:7000/uploads/${inq.photo}`}
//                 alt="Property"
//                 className="w-full h-48 object-cover rounded-lg mb-3 cursor-pointer"
//                 onClick={() => setModalPhoto(`http://localhost:7000/uploads/${inq.photo}`)}
//               />
//               <h3 className="text-lg font-semibold">{inq.type}</h3>
//               <p className="text-gray-600">{inq.city}</p>
//               <p className="mt-2 text-sm">💬 {inq.message || "No message"}</p>
//               <p className="mt-2 text-sm">👤 Buyer: {inq.buyer_name}</p>
//               <p className="text-sm text-gray-700">📞 {inq.buyer_mobile}</p>
//               <p className="text-sm text-gray-700">📧 {inq.buyer_email}</p>

//               <div className="mt-4 flex items-center justify-between">
//                 <span
//                   className={`text-sm font-semibold ${
//                     inq.status === "pending"
//                       ? "text-yellow-600"
//                       : inq.status === "contacted"
//                       ? "text-green-600"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   Status: {inq.status}
//                 </span>
//                 <select
//                   className="border p-1 rounded-md text-sm"
//                   value={inq.status}
//                   onChange={(e) => handleStatusChange(inq.inquiryid, e.target.value)}
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="contacted">Contacted</option>
//                   <option value="closed">Closed</option>
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Photo Modal */}
//       {modalPhoto && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={() => setModalPhoto(null)}
//         >
//           <img
//             src={modalPhoto}
//             alt="Property Large"
//             className="max-h-[80%] max-w-[80%] rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellerInquiries;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SellerNavbar from "./SellerNavbar";
// import SellerSidebar from "./SellerSidebar";
// const SellerInquiries = () => {
//   const sellerid = localStorage.getItem("sellerid");
//   const [inquiries, setInquiries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [modalPhoto, setModalPhoto] = useState(null);

//   const fetchInquiries = async () => {
//     if (!sellerid) return;
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:7000/viewinquiry/${sellerid}`);
//       setInquiries(res.data);
//     } catch (err) {
//       // console.error(err);
//       alert("Error fetching inquiries");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (inquiryid, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:7000/updateinquiry/${inquiryid}`, { status: newStatus });
//       fetchInquiries();
//     } catch (err) {
//       console.error(err);
//       alert("Error updating status");
//     }
//   };

//   useEffect(() => {
//     fetchInquiries();
//   }, [sellerid]);

//   return (
//     <div>
//      <SellerNavbar />
//      <div className="flex">
//       <SellerSidebar />
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Buyer Inquiries 📩</h2>
//       {loading ? <p>Loading...</p> : inquiries.length === 0 ? <p>No inquiries received yet.</p> : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {inquiries.map(inq => (
//             <div key={inq.inquiryid} className="bg-white rounded shadow p-4">
//               {/* <img src={`http://localhost:7000/uploads/${inq.photo}`} alt="" className="h-40 w-full object-cover rounded mb-2 cursor-pointer" onClick={() => setModalPhoto(`http://localhost:7000/uploads/${inq.photo}`)} /> */}
//               <img src={`http://localhost:7000/uploads/${inq.property_photo}`} alt="property"className="h-40 w-full object-cover rounded mb-2 cursor-pointer"onClick={() => setModalPhoto(`http://localhost:7000/uploads/${inq.property_photo}`) }/>

//               <h3 className="font-semibold">{inq.type} - {inq.city}</h3>
//               <p className="text-sm">Buyer: {inq.buyer_name} ({inq.buyer_mobile})</p>
//               <p className="text-sm mt-2">Msg: {inq.message || "—"}</p>
//               <div className="mt-3 flex items-center justify-between">
//                 <span className="text-sm font-medium">Status: {inq.status}</span>
//                 <select value={inq.status} onChange={(e) => handleStatusChange(inq.inquiryid, e.target.value)} className="border p-1 rounded">
//                   <option value="pending">pending</option>
//                   <option value="contacted">contacted</option>
//                   <option value="closed">closed</option>
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {modalPhoto && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setModalPhoto(null)}>
//           <img src={modalPhoto} alt="" className="max-h-[80%] max-w-[80%]" onClick={(e) => e.stopPropagation()} />
//         </div>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default SellerInquiries;


import React, { useEffect, useState } from "react";
import axios from "axios";
import SellerNavbar from "./SellerNavbar";
import SellerSidebar from "./SellerSidebar";

const SellerInquiries = () => {
  const sellerid = localStorage.getItem("sellerid") || "s1"; // Default for demo
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    if (!sellerid) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:7000/viewinquiry/${sellerid}`);
      setInquiries(res.data);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
      alert("Error fetching inquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (inquiryid, newStatus) => {
    try {
      await axios.patch(`http://localhost:7000/updateinquiry/${inquiryid}`, { status: newStatus });
      fetchInquiries(); // refresh
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Error updating status");
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [sellerid]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🧭 Navbar */}
      <div className="fixed w-full top-0 z-20">
        <SellerNavbar />
      </div>

      {/* 🧭 Sidebar + Content */}
      <div className="mt-16 flex w-full">
        <div className="w-1/5">
          <SellerSidebar />
        </div>

        {/* 📋 Main Table */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            📬 Buyer Inquiries
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading inquiries...</p>
          ) : inquiries.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No inquiries received yet.
            </div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
              <table className="min-w-full border-collapse">
                <thead className="bg-blue-50 text-gray-700 text-sm uppercase tracking-wide border-b">
                  <tr>
                    <th className="p-3 text-left border-r">Property</th>
                    <th className="p-3 text-left border-r">Buyer Name</th>
                    <th className="p-3 text-left border-r">Message</th>
                    <th className="p-3 text-left border-r">Status</th>
                    <th className="p-3 text-left border-r">Date</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-blue-50 transition-all"
                    >
                      <td className="p-3 flex items-center gap-3">
                        <img
                          src={`http://localhost:7000/uploads/${inq.property_photo}`}
                          alt="property"
                          className="h-12 w-12 rounded-md object-cover border"
                        />
                        <div>
                          <p className="font-semibold">{inq.property_type}</p>
                          <p className="text-xs text-gray-500">{inq.city}</p>
                        </div>
                      </td>

                      <td className="p-3 font-medium">{inq.buyer_name}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {inq.message || "—"}
                      </td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            inq.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : inq.status === "contacted"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {inq.status.toUpperCase()}
                        </span>
                      </td>

                      <td className="p-3 text-sm text-gray-600">
                        {new Date(inq.inquiry_date).toLocaleString()}
                      </td>

                      <td className="p-3 text-center">
                        <select
                          value={inq.status}
                          onChange={(e) =>
                            handleStatusChange(inq.inquiryid, e.target.value)
                          }
                          className="border border-gray-300 text-sm rounded-md p-1 focus:ring-2 focus:ring-blue-400"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerInquiries;




