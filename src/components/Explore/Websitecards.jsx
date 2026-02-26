// import React, { useState } from "react";

// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   if (!project) return null;

//   return (
//     <>
//       {/* Card Container */}
//       <div
//         className="w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         {/* Inner Card */}
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`http://localhost:7000/uploads/${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${
//                 project.status === "available"
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               onClick={(e) => {
//                 e.stopPropagation(); // flip na ho jab button click ho
//                 setShowModal(true);
//               }}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-96 max-w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-2">{project.type}</h2>
//             <p className="text-gray-600 mb-1">
//               <strong>Category:</strong> {project.category}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Location:</strong> {project.location}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>City:</strong> {project.city}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Status:</strong> {project.status}
//             </p>
//             <p className="text-gray-600 mt-3">
//               <strong>Description:</strong>{" "}
//               {project.description || "No Description Available"}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Nearby:</strong> {project.nearby}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Websitecard;









////// modal scrooll hota hsi //////

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SignupForm from "../../BuyerComponentes/BuyerSignup";



// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = showModal ? "hidden" : "auto";
//   }, [showModal]);

//   if (!project) return null;

//   // 🟢 Modal using Portal
//   const modal = (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backdropFilter: "blur(5px)",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         className="bg-white text-dark rounded-4 shadow-lg overflow-auto position-relative"
//         style={{
//           width: "90%",
//           maxWidth: "1000px",
//           maxHeight: "90vh",
//           animation: "zoomIn 0.3s ease-out",
//         }}
//       >
//         {/* ❌ Close Button */}
//         <button
//           className="btn-close position-absolute top-0 end-0 m-3 fs-5"
//           onClick={() => setShowModal(false)}
//         ></button>

//         {/* 🖼️ Header Image */}
//         <div className="w-100 text-center bg-light">
//           <img
//             src={`http://localhost:7000/uploads/${project.photo}`}
//             alt={project.type}
//             className="img-fluid rounded-top-4"
//             style={{
//               width: "100%",
//               maxHeight: "350px",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* 🏠 Property Details */}
//         <div className="container py-4">
//           <h3 className="fw-bold text-center mb-4 text-primary">
//             {project.type} Details
//           </h3>

//           <div className="row g-4">
//             <div className="col-md-6">
//               <p><strong>Property ID:</strong> {project.propertyid}</p>
//               <p><strong>Seller ID:</strong> {project.sellerid}</p>
//               <p><strong>Category:</strong> {project.category}</p>
//               <p><strong>Type:</strong> {project.type}</p>
//               <p><strong>Location:</strong> {project.location}</p>
//               <p><strong>City:</strong> {project.city}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>State:</strong> {project.state}</p>
//               <p><strong>Nearby:</strong> {project.nearby}</p>
//               <p><strong>Area:</strong> {project.area} sq.ft.</p>
//               <p><strong>Price:</strong> ₹{project.price}</p>
//               <p><strong>Status:</strong> {project.status}</p>
//               <p><strong>Created At:</strong> {project.created_at}</p>
//             </div>
//           </div>

//           <div className="mt-3">
//             <h5>Description</h5>
//             <p className="text-muted">
//               {project.description || "No description available."}
//             </p>
//           </div>

//           {/* 📞 Contact Seller Button */}
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-success px-5 py-2"
//               onClick={() =>
//                 alert(`Contact Seller ID: ${project.sellerid}`)
//               }
//             >
//               📞 Contact Seller
//             </button>
//           </div>
//         </div>
//       </div>
//       <BuyerSignup/>

//       {/* ✨ Animation */}
//       <style>
//         {`
//           @keyframes zoomIn {
//             0% {
//               opacity: 0;
//               transform: scale(0.9);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );

//   return (
//     <>
//       {/* 🪞 Flip Card */}
//       <div
//         className="relative w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         {/* Inner Card */}
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`http://localhost:7000/uploads/${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${
//                 project.status === "available"
//                   ? "text-success"
//                   : "text-danger"
//               }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="bg-primary text-white text-sm px-4 py-1 mt-2 rounded"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowModal(true);
//               }}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render Modal */}
//       {showModal && ReactDOM.createPortal(modal, document.body)}
//     </>
//   );
// };

// export default Websitecard;

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BuyerSignup from "../../BuyerComponentes/BuyerSignup.jsx"; // ✅ Correct import path
// import BuyerLogin from "../../BuyerComponentes/BuyerLogin";
// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showSignup, setShowSignup] = useState(false); // ✅ for signup modal

//   useEffect(() => {
//     document.body.style.overflow = showModal || showSignup ? "hidden" : "auto";
//   }, [showModal, showSignup]);

//   if (!project) return null;

//   // ✅ Property Details Modal
//   const modal = (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backdropFilter: "blur(5px)",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         className="bg-white text-dark rounded-4 shadow-lg overflow-auto position-relative"
//         style={{
//           width: "90%",
//           maxWidth: "1000px",
//           maxHeight: "90vh",
//           animation: "zoomIn 0.3s ease-out",
//         }}
//       >
//         {/* ❌ Close Button */}
//         <button
//           className="btn-close position-absolute top-0 end-0 m-3 fs-5"
//           onClick={() => setShowModal(false)}
//         ></button>

//         {/* 🖼️ Header Image */}
//         <div className="w-100 text-center bg-light">
//           <img
//             src={`http://localhost:7000/uploads/${project.photo}`}
//             alt={project.type}
//             className="img-fluid rounded-top-4"
//             style={{
//               width: "100%",
//               maxHeight: "350px",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         {/* 🏠 Property Details */}
//         <div className="container py-4">
//           <h3 className="fw-bold text-center mb-4 text-primary">
//             {project.type} Details
//           </h3>

//           <div className="row g-4">
//             <div className="col-md-6">
//               <p><strong>Property ID:</strong> {project.propertyid}</p>
//               <p><strong>Seller ID:</strong> {project.sellerid}</p>
//               <p><strong>Category:</strong> {project.category}</p>
//               <p><strong>Type:</strong> {project.type}</p>
//               <p><strong>Location:</strong> {project.location}</p>
//               <p><strong>City:</strong> {project.city}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>State:</strong> {project.state}</p>
//               <p><strong>Nearby:</strong> {project.nearby}</p>
//               <p><strong>Area:</strong> {project.area} sq.ft.</p>
//               <p><strong>Price:</strong> ₹{project.price}</p>
//               <p><strong>Status:</strong> {project.status}</p>
//               <p><strong>Created At:</strong> {project.created_at}</p>
//             </div>
//           </div>

//           <div className="mt-3">
//             <h5>Description</h5>
//             <p className="text-muted">
//               {project.description || "No description available."}
//             </p>
//           </div>

//           {/* 📞 Contact Seller Button */}
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-success px-5 py-2"
//               onClick={() => setShowSignup(true)} // ✅ Open Signup modal
//             >
//               📞 Contact Seller
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✨ Animation */}
//       <style>
//         {`
//           @keyframes zoomIn {
//             0% {
//               opacity: 0;
//               transform: scale(0.9);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );

//   // ✅ Buyer Signup Modal
//   const signupModal = (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
//       style={{ zIndex: 10000 }}
//     >
//       <div
//         className="bg-white p-4 rounded shadow position-relative"
//         style={{ width: "400px" }}
//       >
//         <button
//           className="btn-close position-absolute top-0 end-0 m-3"
//           onClick={() => setShowSignup(false)}
//         ></button>

//           <BuyerLogin/>



//         <BuyerSignup
//           sellerid={project.sellerid}
//           propertyid={project.propertyid}
//           onSignupSuccess={() => {
//             alert("Signup successful! Inquiry sent to Seller 🎉");
//             setShowSignup(false);
//             setShowModal(false);
//           }}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* 🪞 Flip Card */}
//       <div
//         className="relative w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         {/* Inner Card */}
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`http://localhost:7000/uploads/${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${
//                 project.status === "available" ? "text-success" : "text-danger"
//               }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="bg-primary text-white text-sm px-4 py-1 mt-2 rounded"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowModal(true);
//               }}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render Modals */}
//       {showModal && ReactDOM.createPortal(modal, document.body)}
//       {showSignup && ReactDOM.createPortal(signupModal, document.body)}
//     </>
//   );
// };

// export default Websitecard;

// /////// isme modal ek hi page me dikh rah hai scroll hi nhi ho rha hai //////

// // import React, { useState, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Websitecard = ({ project }) => {
// //   const [flipped, setFlipped] = useState(false);
// //   const [showModal, setShowModal] = useState(false);

// //   useEffect(() => {
// //     document.body.style.overflow = showModal ? "hidden" : "auto";
// //   }, [showModal]);

// //   if (!project) return null;

// //   // 🟢 Modal (no scroll, centered, blurred background)
// //   const modal = (
// //     <div
// //       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
// //       style={{
// //         backgroundColor: "rgba(0, 0, 0, 0.5)",
// //         backdropFilter: "blur(5px)",
// //         zIndex: 9999,
// //       }}
// //     >
// //       <div
// //         className="bg-white text-dark rounded-4 shadow-lg position-relative d-flex flex-column justify-content-between"
// //         style={{
// //           width: "90%",
// //           maxWidth: "1000px",
// //           height: "85vh", // fixed height
// //           overflow: "hidden", // no scroll inside
// //           animation: "zoomIn 0.3s ease-out",
// //         }}
// //       >
// //         {/* ❌ Close Button */}
// //         <button
// //           className="btn-close position-absolute top-0 end-0 m-3 fs-5"
// //           onClick={() => setShowModal(false)}
// //         ></button>

// //         {/* 🖼️ Top Image */}
// //         <div
// //           className="w-100"
// //           style={{
// //             height: "40%",
// //             overflow: "hidden",
// //             borderTopLeftRadius: "16px",
// //             borderTopRightRadius: "16px",
// //           }}
// //         >
// //           <img
// //             src={`http://localhost:7000/uploads/${project.photo}`}
// //             alt={project.type}
// //             className="w-100 h-100"
// //             style={{ objectFit: "cover" }}
// //           />
// //         </div>

// //         {/* 🏠 Property Details */}
// //         <div
// //           className="container py-3 flex-grow-1"
// //           style={{
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "space-between",
// //           }}
// //         >
// //           <h3 className="fw-bold text-center mb-3 text-primary">
// //             {project.type} Details
// //           </h3>

// //           <div className="row g-3 text-start" style={{ fontSize: "0.95rem" }}>
// //             <div className="col-md-6">
// //               <p><strong>Property ID:</strong> {project.propertyid}</p>
// //               <p><strong>Seller ID:</strong> {project.sellerid}</p>
// //               <p><strong>Category:</strong> {project.category}</p>
// //               <p><strong>Type:</strong> {project.type}</p>
// //               <p><strong>Location:</strong> {project.location}</p>
// //               <p><strong>City:</strong> {project.city}</p>
// //             </div>
// //             <div className="col-md-6">
// //               <p><strong>State:</strong> {project.state}</p>
// //               <p><strong>Nearby:</strong> {project.nearby}</p>
// //               <p><strong>Area:</strong> {project.area} sq.ft.</p>
// //               <p><strong>Price:</strong> ₹{project.price}</p>
// //               <p><strong>Status:</strong> {project.status}</p>
// //               <p><strong>Created At:</strong> {project.created_at}</p>
// //             </div>
// //           </div>

// //           {/* 📜 Description */}
// //           <div className="mt-2 text-center">
// //             <h6>Description</h6>
// //             <p className="text-muted mb-0">
// //               {project.description || "No description available."}
// //             </p>
// //           </div>

// //           {/* 📞 Contact Seller */}
// //           <div className="text-center mt-3">
// //             <button
// //               className="btn btn-success px-4 py-2"
// //               onClick={() => alert(`Contact Seller ID: ${project.sellerid}`)}
// //             >
// //               📞 Contact Seller
// //             </button>
// //           </div>
// //         </div>

// //         {/* ✨ Animation */}
// //         <style>
// //           {`
// //             @keyframes zoomIn {
// //               0% { opacity: 0; transform: scale(0.9); }
// //               100% { opacity: 1; transform: scale(1); }
// //             }
// //           `}
// //         </style>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* 🪞 Flip Card */}
// //       <div
// //         className="relative w-72 h-80 cursor-pointer"
// //         style={{ perspective: "1000px" }}
// //         onClick={() => setFlipped(!flipped)}
// //       >
// //         <div
// //           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
// //             flipped ? "rotate-y-180" : ""
// //           }`}
// //           style={{
// //             transformStyle: "preserve-3d",
// //             transform: flipped ? "rotateY(180deg)" : "none",
// //           }}
// //         >
// //           {/* Front Side */}
// //           <div
// //             className="absolute w-full h-full rounded-2xl overflow-hidden"
// //             style={{ backfaceVisibility: "hidden" }}
// //           >
// //             <img
// //               src={`http://localhost:7000/uploads/${project.photo}`}
// //               alt={project.type}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* Back Side */}
// //           <div
// //             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
// //             style={{
// //               transform: "rotateY(180deg)",
// //               backfaceVisibility: "hidden",
// //             }}
// //           >
// //             <h3 className="text-lg fw-bold">{project.type}</h3>
// //             <p className="text-muted">{project.category}</p>
// //             <p className="text-muted">
// //               {project.location}, {project.city}
// //             </p>
// //             <p
// //               className={`mt-2 fw-bold ${
// //                 project.status === "available"
// //                   ? "text-success"
// //                   : "text-danger"
// //               }`}
// //             >
// //               {project.status?.toUpperCase()}
// //             </p>
// //             <button
// //               className="btn btn-primary btn-sm mt-2"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 setShowModal(true);
// //               }}
// //             >
// //               More
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Render Modal */}
// //       {showModal && createPortal(modal, document.body)}
// //     </>
// //   );
// // };

// // export default Websitecard;
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [propertyDetails, setPropertyDetails] = useState(null);
//   const [propertyImages, setPropertyImages] = useState([]);

//   const BASE_URL = "http://localhost:7000/uploads/"; // ✅ your backend uploads folder

//   useEffect(() => {
//     document.body.style.overflow = showModal ? "hidden" : "auto";
//   }, [showModal]);

//   if (!project) return null;

//   // 🧠 Fetch property details + images
//   const handleMoreClick = async (e) => {
//     e.stopPropagation();
//     try {
//       const res = await axios.get(
//         `http://localhost:7000/getpropertiesbyseller/${project.propertyid}`
//       );
//       setPropertyDetails(res.data.property);
//       setPropertyImages(res.data.images);
//       setShowModal(true);
//     } catch (error) {
//       console.error("Error fetching property:", error);
//     }
//   };

//   // 🏡 Modal Layout
//   const modal = (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backdropFilter: "blur(5px)",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         className="bg-white text-dark rounded-4 shadow-lg overflow-auto position-relative d-flex flex-column flex-md-row"
//         style={{
//           width: "90%",
//           maxWidth: "1000px",
//           maxHeight: "90vh",
//           animation: "zoomIn 0.3s ease-out",
//         }}
//       >
//         {/* ❌ Close Button */}
//         <button
//           className="btn-close position-absolute top-0 end-0 m-3 fs-5"
//           onClick={() => setShowModal(false)}
//         ></button>

//         {/* 🖼️ LEFT SIDE: Property Images */}
//         <div className="w-100 w-md-50 bg-light p-3 overflow-auto" style={{ flex: "1" }}>
//           {propertyImages && propertyImages.length > 0 ? (
//             <div className="row g-3">
//               {propertyImages.map((img, index) => {
//                 // ✅ Handle both URL and filename cases
//                 const imageSrc = img.photo.startsWith("http")
//                   ? img.photo
//                   : `${BASE_URL}${img.photo}`;
//                 return (
//                   <div key={index} className="col-6">
//                     <img
//                       src={imageSrc}
//                       alt={`Property ${index}`}
//                       className="img-fluid rounded shadow-sm"
//                       style={{
//                         objectFit: "cover",
//                         height: "180px",
//                         width: "100%",
//                       }}
//                       onError={(e) => (e.target.style.display = "none")} // hides broken image
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-center text-muted my-5">No images available</p>
//           )}
//         </div>

//         {/* 📄 RIGHT SIDE: Property Details */}
//         <div
//           className="p-4 overflow-auto"
//           style={{ flex: "1", borderLeft: "2px solid #f0f0f0" }}
//         >
//           {propertyDetails ? (
//             <>
//               <h3 className="fw-bold text-center mb-3 text-primary">
//                 {propertyDetails.type} Details
//               </h3>

//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <p><strong>Property ID:</strong> {propertyDetails.propertyid}</p>
//                   <p><strong>Seller ID:</strong> {propertyDetails.sellerid}</p>
//                   <p><strong>Type:</strong> {propertyDetails.type}</p>
//                   <p><strong>City:</strong> {propertyDetails.city}</p>
//                   <p><strong>State:</strong> {propertyDetails.state}</p>
//                 </div>
//                 <div className="col-md-6">
//                   <p><strong>Location:</strong> {propertyDetails.location}</p>
//                   <p><strong>Nearby:</strong> {propertyDetails.nearby}</p>
//                   <p><strong>Price:</strong> ₹{propertyDetails.price}</p>
//                   <p><strong>Status:</strong> {propertyDetails.status}</p>
//                   <p><strong>Created At:</strong> {propertyDetails.created_at}</p>
//                 </div>
//               </div>

//               <div className="mt-3">
//                 <h5>Description</h5>
//                 <p className="text-muted">
//                   {propertyDetails.description || "No description available."}
//                 </p>
//               </div>

//               <div className="text-center mt-4">
//                 <button
//                   className="btn btn-success px-5 py-2"
//                   onClick={() =>
//                     alert(`Contact Seller ID: ${propertyDetails.sellerid}`)
//                   }
//                 >
//                   📞 Contact Seller
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p className="text-center text-muted">Loading...</p>
//           )}
//         </div>

//         {/* ✨ Animation */}
//         <style>
//           {`
//             @keyframes zoomIn {
//               0% { opacity: 0; transform: scale(0.9); }
//               100% { opacity: 1; transform: scale(1); }
//             }
//           `}
//         </style>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* 🪞 Flip Card */}
//       <div
//         className="relative w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`http://localhost:7000/uploads/${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${
//                 project.status === "available" ? "text-success" : "text-danger"
//               }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="bg-primary text-white text-sm px-4 py-1 mt-2 rounded"
//               onClick={handleMoreClick}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render Modal */}
//       {showModal && ReactDOM.createPortal(modal, document.body)}
//     </>
//   );
// };

// export default Websitecard;

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";


// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [propertyDetails, setPropertyDetails] = useState(null);
//   const [propertyImages, setPropertyImages] = useState([]);

//   // ✅ Backend upload folder base URL
//   const BASE_URL = "http://localhost:7000/uploads/";

//   // 🧠 Prevent background scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = showModal ? "hidden" : "auto";
//   }, [showModal]);

//   if (!project) return null;

//   // 🔥 Fetch all properties by seller id and show the clicked property
//   const handleMoreClick = async (e) => {
//     e.stopPropagation();

//     try {
//       console.log("🔍 Project object:", project);
//       console.log("🧠 Fetching for sellerid:", project.sellerid);

//       if (!project.sellerid) {
//         alert("Seller ID is missing for this property!");
//         return;
//       }

//       // ✅ Fetch all properties by this seller
//       const res = await axios.get(
//         `http://localhost:7000/getpropertiesbyseller/${project.sellerid}`
//       );

//       if (!res.data || res.data.length === 0) {
//         alert("No properties found for this seller.");
//         return;
//       }

//       // ✅ Find the specific property the user clicked
//       const selected = res.data.find(
//         (p) => p.propertyid === project.propertyid
//       );

//       if (!selected) {
//         alert("Property not found for this seller.");
//         return;
//       }

//       console.log("✅ Property found:", selected);

//       setPropertyDetails(selected);
//       setPropertyImages(selected.images || []);
//       setShowModal(true);
//     } catch (error) {
//       console.error("❌ Error fetching property:", error);
//       alert("Backend error: Check console logs for details.");
//     }
//   };

//   // 🏡 Modal (property details + images)
//   const modal = (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backdropFilter: "blur(5px)",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         className="bg-white text-dark rounded-4 shadow-lg overflow-auto position-relative d-flex flex-column flex-md-row"
//         style={{
//           width: "90%",
//           maxWidth: "1000px",
//           maxHeight: "90vh",
//           animation: "zoomIn 0.3s ease-out",
//         }}
//       >
//         {/* ❌ Close Button */}
//         <button
//           className="btn-close position-absolute top-0 end-0 m-3 fs-5"
//           onClick={() => setShowModal(false)}
//         ></button>

//         {/* 🖼️ LEFT: Property Images */}
//         {/* <div
//           className="w-100 w-md-50 bg-light p-3 overflow-auto"
//           style={{ flex: "1" }}
//         >
//           {propertyImages && propertyImages.length > 0 ? (
//             <div className="row g-3">
//               {propertyImages.map((img, index) => {
//                 const imageSrc = img.photo?.startsWith("http")
//                   ? img.photo
//                   : `${BASE_URL}${img.photo}`;
//                 return (
//                   <div key={index} className="col-6">
//                     <img
//                       src={imageSrc}
//                       alt={`Property ${index}`}
//                       className="img-fluid rounded shadow-sm"
//                       style={{
//                         objectFit: "cover",
//                         height: "180px",
//                         width: "100%",
//                       }}
//                       onError={(e) => (e.target.style.display = "none")}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-center text-muted my-5">No images available</p>
//           )}
//         </div> */}

//         {/* 🖼️ LEFT: Property Images Slider */}
//         <div
//           className="w-100 w-md-50 bg-light p-3 d-flex align-items-center justify-content-center"
//           style={{ flex: "1", minHeight: "400px" }}
//         >
//           {propertyImages && propertyImages.length > 0 ? (
//             <div
//               id="propertyCarousel"
//               className="carousel slide w-100"
//               data-bs-ride="carousel"
//             >
//               <div className="carousel-inner rounded shadow-lg">
//                 {propertyImages.map((img, index) => {
//                   const imageSrc = img.photo?.startsWith("http")
//                     ? img.photo
//                     : `${BASE_URL}${img.photo}`;
//                   return (
//                     <div
//                       key={index}
//                       className={`carousel-item ${index === 0 ? "active" : ""}`}
//                     >
//                       <img
//                         src={imageSrc}
//                         className="d-block w-100 rounded"
//                         alt={`Property ${index}`}
//                         style={{
//                           objectFit: "cover",
//                           height: "380px",
//                         }}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Carousel Controls */}
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#propertyCarousel"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon bg-dark rounded-circle p-2"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#propertyCarousel"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon bg-dark rounded-circle p-2"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           ) : (
//             <p className="text-center text-muted my-5">No images available</p>
//           )}
//         </div>


//         {/* 📄 RIGHT: Property Details */}
//         <div
//           className="p-4 overflow-auto"
//           style={{ flex: "1", borderLeft: "2px solid #f0f0f0" }}
//         >
//           {propertyDetails ? (
//             <>
//               <h3 className="fw-bold text-center mb-3 text-primary">
//                 {propertyDetails.type} Details
//               </h3>

//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <p><strong>Property ID:</strong> {propertyDetails.propertyid}</p>
//                   <p><strong>Seller ID:</strong> {propertyDetails.sellerid}</p>
//                   <p><strong>Type:</strong> {propertyDetails.type}</p>
//                   <p><strong>City:</strong> {propertyDetails.city}</p>
//                   <p><strong>State:</strong> {propertyDetails.state}</p>
//                 </div>
//                 <div className="col-md-6">
//                   <p><strong>Location:</strong> {propertyDetails.location}</p>
//                   <p><strong>Nearby:</strong> {propertyDetails.nearby}</p>
//                   <p><strong>Price:</strong> ₹{propertyDetails.price}</p>
//                   <p><strong>Status:</strong> {propertyDetails.status}</p>
//                   <p><strong>Created At:</strong> {propertyDetails.created_at}</p>
//                 </div>
//               </div>

//               <div className="mt-3">
//                 <h5>Description</h5>
//                 <p className="text-muted">
//                   {propertyDetails.description || "No description available."}
//                 </p>
//               </div>

//               <div className="text-center mt-4">
//                 {/* <button
//                   className="btn btn-success px-5 py-2"
//                   onClick={() =>
//                     alert(`Contact Seller ID: ${propertyDetails.sellerid}`)
//                   }
//                 >
//                   📞 Contact Seller
//                 </button> */}

//                 <button
//                   className="btn btn-success px-5 py-2"
//                   onClick={() => navigate("/BuyerLogin")}
//                 >
//                   📞 Contact Seller
//                 </button>

//               </div>
//             </>
//           ) : (
//             <p className="text-center text-muted">Loading...</p>
//           )}
//         </div>

//         {/* ✨ Animation */}
//         <style>
//           {`
//             @keyframes zoomIn {
//               0% { opacity: 0; transform: scale(0.9); }
//               100% { opacity: 1; transform: scale(1); }
//             }
//           `}
//         </style>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* 🪞 Flip Card */}
//       <div
//         className="relative w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""
//             }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`${BASE_URL}${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${project.status === "available" ? "text-success" : "text-danger"
//                 }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="bg-primary text-white text-sm px-4 py-1 mt-2 rounded"
//               onClick={handleMoreClick}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render Modal */}
//       {showModal && ReactDOM.createPortal(modal, document.body)}
//     </>
//   );
// };

// export default Websitecard;


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BuyerLogin from "../../BuyerComponentes/BuyerLogin";
import BuyerSignup from "../../BuyerComponentes/BuyerSignup";

const Websitecard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [propertyImages, setPropertyImages] = useState([]);

  const BASE_URL = "http://localhost:7000/uploads/";

  // 🧠 Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow =
      showModal || showLogin || showSignup ? "hidden" : "auto";
  }, [showModal, showLogin, showSignup]);

  if (!project) return null;

  // 🔥 Fetch property details
  const handleMoreClick = async (e) => {
    e.stopPropagation();

    try {
      if (!project.sellerid) {
        alert("Seller ID is missing for this property!");
        return;
      }

      const res = await axios.get(
        `http://localhost:7000/getpropertiesbyseller/${project.sellerid}`
      );

      if (!res.data || res.data.length === 0) {
        alert("No properties found for this seller.");
        return;
      }

      const selected = res.data.find(
        (p) => p.propertyid === project.propertyid
      );

      if (!selected) {
        alert("Property not found for this seller.");
        return;
      }

      setPropertyDetails(selected);
      setPropertyImages(selected.images || []);
      setShowModal(true);
    } catch (error) {
      console.error("❌ Error fetching property:", error);
      alert("Backend error: Check console logs for details.");
    }
  };

  // 🏡 Property Details Modal
  const modal = (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
      }}
    >
      <div
        className="bg-white text-dark rounded-4 shadow-lg overflow-auto position-relative d-flex flex-column flex-md-row"
        style={{
          width: "90%",
          maxWidth: "1000px",
          maxHeight: "90vh",
          animation: "zoomIn 0.3s ease-out",
        }}
      >
        {/* ❌ Close Button */}
        <button
          className="btn-close position-absolute top-0 end-0 m-3 fs-5"
          onClick={() => setShowModal(false)}
        ></button>

        {/* 🖼️ LEFT: Property Images Slider */}
        <div
          className="w-100 w-md-50 bg-light p-3 d-flex align-items-center justify-content-center"
          style={{ flex: "1", minHeight: "400px" }}
        >
          {propertyImages && propertyImages.length > 0 ? (
            <div
              id="propertyCarousel"
              className="carousel slide w-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded shadow-lg">
                {propertyImages.map((img, index) => {
                  const imageSrc = img.photo?.startsWith("http")
                    ? img.photo
                    : `${BASE_URL}${img.photo}`;
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={imageSrc}
                        className="d-block w-100 rounded"
                        alt={`Property ${index}`}
                        style={{
                          objectFit: "cover",
                          height: "380px",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#propertyCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark rounded-circle p-2"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#propertyCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark rounded-circle p-2"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <p className="text-center text-muted my-5">No images available</p>
          )}
        </div>

        {/* 📄 RIGHT: Property Details */}
        <div
          className="p-4 overflow-auto"
          style={{ flex: "1", borderLeft: "2px solid #f0f0f0" }}
        >
          {propertyDetails ? (
            <>
              <h3 className="fw-bold text-center mb-3 text-primary">
                {propertyDetails.type} Details
              </h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <p><strong>Property ID:</strong> {propertyDetails.propertyid}</p>
                  <p><strong>Seller ID:</strong> {propertyDetails.sellerid}</p>
                  <p><strong>Type:</strong> {propertyDetails.type}</p>
                  <p><strong>City:</strong> {propertyDetails.city}</p>
                  <p><strong>State:</strong> {propertyDetails.state}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Location:</strong> {propertyDetails.location}</p>
                  <p><strong>Nearby:</strong> {propertyDetails.nearby}</p>
                  <p><strong>Price:</strong> ₹{propertyDetails.price}</p>
                  <p><strong>Status:</strong> {propertyDetails.status}</p>
                  <p><strong>Created At:</strong> {propertyDetails.created_at}</p>
                </div>
              </div>

              <div className="mt-3">
                <h5>Description</h5>
                <p className="text-muted">
                  {propertyDetails.description || "No description available."}
                </p>
              </div>

              <div className="text-center mt-4">
                {/* <button
                  className="btn btn-success px-5 py-2"
                  onClick={() => setShowLogin(true)}
                >
                  📞 Contact Seller
                </button> */}

                <button
                  className="btn btn-success px-5 py-2"
                  onClick={() => {
                    setShowModal(false);   // ✅ close property modal
                    setShowLogin(true);    // ✅ open login form
                  }}
                >
                  📞 Contact Seller
                </button>

              </div>
            </>
          ) : (
            <p className="text-center text-muted">Loading...</p>
          )}
        </div>

        {/* ✨ Animation */}
        <style>
          {`
            @keyframes zoomIn {
              0% { opacity: 0; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
      </div>
    </div>
  );

  // 🟢 Login Modal
  const loginModal = (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
      style={{ zIndex: 10000 }}
    >
      <div
        className="bg-white p-4 rounded shadow position-relative"
        style={{ width: "400px" }}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={() => setShowLogin(false)}
        ></button>

        <BuyerLogin
          sellerid={project.sellerid}
          propertyid={project.propertyid}
          onLoginSuccess={() => {
            alert("✅ Login successful! You can now contact the seller.");
            setShowLogin(false);
            setShowModal(false);
          }}
        />

        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );

  // 🔵 Signup Modal
  const signupModal = (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
      style={{ zIndex: 10000 }}
    >
      <div
        className="bg-white p-4 rounded shadow position-relative"
        style={{ width: "400px" }}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={() => setShowSignup(false)}
        ></button>

        <BuyerSignup
          sellerid={project.sellerid}
          propertyid={project.propertyid}
          onSignupSuccess={() => {
            alert("🎉 Signup successful! Inquiry sent to Seller.");
            setShowSignup(false);
            setShowModal(false);
          }}
        />

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* 🪞 Flip Card */}
      <div
        className="relative w-72 h-80 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""
            }`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "none",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={`${BASE_URL}${project.photo}`}
              alt={project.type}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h3 className="text-lg font-bold">{project.type}</h3>
            <p className="text-gray-600">{project.category}</p>
            <p className="text-gray-600">
              {project.location}, {project.city}
            </p>
            <p
              className={`mt-2 font-bold ${project.status === "available" ? "text-success" : "text-danger"
                }`}
            >
              {project.status?.toUpperCase()}
            </p>
            <button
              className="bg-primary text-white text-sm px-4 py-1 mt-2 rounded"
              onClick={handleMoreClick}
            >
              More
            </button>
          </div>
        </div>
      </div>

      {/* Render Modals */}
      {showModal && ReactDOM.createPortal(modal, document.body)}
      {showLogin && ReactDOM.createPortal(loginModal, document.body)}
      {showSignup && ReactDOM.createPortal(signupModal, document.body)}
    </>
  );
};

export default Websitecard;
