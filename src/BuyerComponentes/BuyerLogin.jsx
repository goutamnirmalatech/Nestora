// import React from "react";

// const LoginForm = () => {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log("Login:", { email, password });
//     // TODO: backend API call (POST /api/buyer/login)
//   };

//   return (
//     <form onSubmit={handleLogin} className="space-y-3">
//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         className="border w-full p-2 rounded"
//         required
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         className="border w-full p-2 rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
// import React, { useState } from "react";
// import axios from "axios";

// const BuyerLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:7000/buyer/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("buyerid", res.data.buyer.buyerid);
//       localStorage.setItem("buyerToken", res.data.token);
//       alert("Login successful ✅");
//       window.location.href = "/buyerdashboard";
//     } catch (err) {
//       alert("Invalid login credentials ❌");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-blue-600 mb-4">Buyer Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           className="w-full border p-2 mb-3 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           className="w-full border p-2 mb-3 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // ✅ Yeh line must hai
// export default BuyerLogin;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const BuyerLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:7000/loginbuyer", {
//         email,
//         password,
//       });
//       localStorage.setItem("buyerid", res.data.buyer.buyerid);
//       localStorage.setItem("buyerToken", res.data.token);
//       alert("Login successful ✅");
//       navigate("/buyerdashboard");
//     } catch (err) {
//       alert("Invalid login credentials ❌");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
//           Buyer Login
//         </h2>

//         <form onSubmit={handleLogin}>
//           <label className="block mb-2 text-gray-700 font-medium">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label className="block mb-2 text-gray-700 font-medium">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* 🟢 Signup Section */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don’t have an account?{" "}
//             <Link
//               to="/buyersignup"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Sign up here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerLogin;
// BuyerLoginModal.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BuyerLoginModal = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:7000/addbuyer", { email, password });

//       console.log("Login Response:", res.data);

//       if (res.data && res.data.success) {
//         localStorage.setItem("buyerid", res.data.buyer.buyerid);
//         localStorage.setItem("buyerToken", res.data.token);

//         alert("✅ Login Successful!");
//         navigate("/buyerdashboard"); // ✅ React-router redirect
//       } else {
//         alert("Invalid email or password ❌");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       alert("Server error. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         className="form-control mb-3"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         className="form-control mb-3"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </form>
    
    
//   );
// };

// export default BuyerLoginModal;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const BuyerLoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/loginbuyer", {
        email,
        password,
      });

      console.log("Login Response:", res.data);

      if (res.data && res.data.success) {
        localStorage.setItem("buyerid", res.data.buyer.buyerid);
        localStorage.setItem("buyerToken", res.data.token);

        alert("✅ Login Successful!");
        navigate("/buyerdashboard");
        onClose();
      } else {
        alert("Invalid email or password ❌");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
        onClick={onClose}
      >
        {/* Modal box */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 w-96 relative animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold text-center mb-4 text-[#5e4fa2]">
            Buyer Login
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 mb-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5e4fa2]"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 mb-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5e4fa2]"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-[#5e4fa2] text-white py-2 rounded-md hover:bg-[#483d8b] transition duration-200"
            >
              Login
            </button>
          </form>

          <button
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            onClick={onClose}
          >
            ✕
          </button>
            <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
        </div>
      </div>
    </>
  );
};

export default BuyerLoginModal;



// import React, { useState } from "react";

// const BuyerLogin = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <form className="p-3">
//       <h4 className="text-center mb-3">Buyer Login</h4>

//       <input
//         type="email"
//         className="form-control mb-3"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         className="form-control mb-3"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button
//         type="button"
//         className="btn btn-success w-100"
//         onClick={() => onLoginSuccess && onLoginSuccess()}
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default BuyerLogin;
