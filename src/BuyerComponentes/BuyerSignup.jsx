// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const BuyerSignup = () => {
//   const [formData, setFormData] = useState({
//     buyerid: "",
//     name: "",
//     address: "",
//     city: "",
//     mobile: "",
//     email: "",
//     aadhar: "",
//     password: "",
//     sellerid: "",
//     propertyid: "",
//   });

//   const [message, setMessage] = useState("");

//   // handle change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("Processing...");

//     try {
//       const res = await axios.post("http://localhost:7000/addbuyer/", formData);
//       if (res.data.success) {
//         setMessage("✅ Buyer Registered Successfully!");
//         setTimeout(() => window.location.reload(), 2000);
//       } else {
//         setMessage("⚠️ " + res.data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ " + (err.response?.data?.message || "Server Error"));
//     }
//   };

//   return (
//     <div
//       className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
//     >
//       <div
//         className="container p-4"
//         style={{
//           maxWidth: "900px",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           border: "1px solid #ddd",
//         }}
//       >
//         <h3 className="text-center mb-4 text-primary fw-bold">
//           Buyer Signup Form
//         </h3>

//         <form onSubmit={handleSubmit}>
//           <div className="row g-3">
//             {/* Buyer ID */}
//             <div className="col-md-6">
//               <label className="form-label">Buyer ID</label>
//               <input
//                 type="text"
//                 name="buyerid"
//                 value={formData.buyerid}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Buyer ID"
//                 required
//               />
//             </div>

//             {/* Full Name */}
//             <div className="col-md-6">
//               <label className="form-label">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Full Name"
//                 required
//               />
//             </div>

//             {/* Address */}
//             <div className="col-md-6">
//               <label className="form-label">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Address"
//                 required
//               />
//             </div>

//             {/* City */}
//             <div className="col-md-6">
//               <label className="form-label">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter City"
//                 required
//               />
//             </div>

//             {/* Mobile */}
//             <div className="col-md-6">
//               <label className="form-label">Mobile</label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Mobile Number"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="col-md-6">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>

//             {/* Aadhar */}
//             <div className="col-md-6">
//               <label className="form-label">Aadhar Number</label>
//               <input
//                 type="text"
//                 name="aadhar"
//                 value={formData.aadhar}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Aadhar Number"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="col-md-6">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Create Password"
//                 required
//               />
//             </div>

//             {/* Seller ID */}
//             <div className="col-md-6">
//               <label className="form-label">Seller ID</label>
//               <input
//                 type="text"
//                 name="sellerid"
//                 value={formData.sellerid}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Seller ID"
//                 required
//               />
//             </div>

//             {/* Property ID */}
//             <div className="col-md-6">
//               <label className="form-label">Property ID</label>
//               <input
//                 type="text"
//                 name="propertyid"
//                 value={formData.propertyid}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Enter Property ID"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center mt-4">
//             <button
//               type="submit"
//               className="btn btn-primary px-5 fw-semibold"
//               style={{ borderRadius: "8px" }}
//             >
//               Submit
//             </button>
//           </div>

//           {/* Message */}
//           {message && (
//             <div className="text-center mt-3">
//               <p
//                 className={`fw-semibold ${
//                   message.includes("✅")
//                     ? "text-success"
//                     : message.includes("❌")
//                     ? "text-danger"
//                     : "text-secondary"
//                 }`}
//               >
//                 {message}
//               </p>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BuyerSignup;

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import { socket } from "";
// import { socket } from "../Socket.jsx";


function BuyerSignup() {

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    mobile: "",
    email: "",
    aadhar: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      //  1. Normal Signup (DB Insert)
      const res = await axios.post("http://localhost:5000/buyer-signup", form);

      if (res.data.status === "ok") {

        //  2. Call Notification API (Socket + SMS + Email)
        await axios.post("http://localhost:5000/buyer-signup-notify", {
          name: form.name,
          email: form.email,
          mobile: form.mobile
        });

        // 3. Optional frontend socket event
        socket.emit("newBuyerSignup", {
          name: form.name,
          email: form.email
        });

        //  4. SWEET ALERT – NICE POPUP
        Swal.fire({
          title: "Signup Successful!",
          text: "Welcome! Check your Email & WhatsApp.",
          icon: "success",
          confirmButtonColor: "#ff9900",
          confirmButtonText: "Continue",
        }).then(() => {
          window.location.href = "/buyer-login";
        });

      } else {
        Swal.fire({
          title: "Signup Failed!",
          text: "Please try again.",
          icon: "error",
        });
      }

    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Buyer Signup
        </h2>

        <input name="name" placeholder="Full Name"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="address" placeholder="Address"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="city" placeholder="City"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="mobile" placeholder="Mobile Number"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="email" placeholder="Email Address"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="aadhar" placeholder="Aadhar Number"
          className="w-full p-3 mb-3 border rounded-lg" onChange={handleChange} />

        <input name="password" type="password" placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg" onChange={handleChange} />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
        >
          Signup
        </button>

      </div>
    </div>
  );
}

export default BuyerSignup;
