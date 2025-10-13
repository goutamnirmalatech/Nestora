// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginModal = ({ closeModal, switchToSignup }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ sellerid: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:7000/login", {
//         sellerid: formData.sellerid,
//         password: formData.password,
//       });
//       if (res.data.success) {
//         localStorage.setItem("sellerid", res.data.seller.sellerid);
//         localStorage.setItem("role", res.data.seller.role);
//         localStorage.setItem("sellerName", res.data.seller.name);
//         closeModal();
//         navigate("/SellerDashboard");
//       } else {
//         alert(res.data.message);
//         switchToSignup();
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative">
//         <button
//           className="absolute top-2 right-2 text-lg font-bold text-gray-700 hover:text-gray-900"
//           onClick={closeModal}
//         >
//           ✖
//         </button>
//         <h2 className="text-2xl font-semibold mb-6 text-center">Seller Login</h2>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="sellerid"
//             placeholder="Seller ID"
//             value={formData.sellerid}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//           <div
//             className="text-right text-sm text-indigo-600 cursor-pointer hover:underline"
//             onClick={switchToSignup}
//           >
//             Don't have ID? Register
//           </div>
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginModal = ({ closeModal }) => {
//   const [formData, setFormData] = useState({ sellerid: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:7000/login', formData);
//       if(res.data.success){
//         localStorage.setItem('sellerid', res.data.seller.sellerid);
//         localStorage.setItem('role', res.data.seller.role);
//         localStorage.setItem('sellerName', res.data.seller.name);
//         localStorage.setItem('token', res.data.seller.token);
//         closeModal();
//         navigate('/SellerDashboard');
//       } else {
//         alert(res.data.message);
//       }
//     } catch(err) {
//       console.error(err);
//       alert('Something went wrong!');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative z-50">
//         <button onClick={closeModal} className="absolute top-2 right-2 text-lg font-bold">✖</button>
//         <h2 className="text-xl font-semibold mb-4 text-center">Seller Login</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
//           <input
//   type="text"
//   name="sellerid"
//   placeholder="Seller ID"
//   value={formData.sellerid}
//   onChange={handleChange}
//   className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//   required
// />

//           <input
//   type="password"
//   name="password"
//   placeholder="Password"
//   value={formData.password}
//   onChange={handleChange}
//   className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//   required
// />

//           <button type="submit" className="bg-indigo-600 text-black py-2 rounded hover:bg-indigo-700 transition">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginModal = ({ closeModal, switchToSignup }) => {
//   const [formData, setFormData] = useState({ sellerid: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:7000/login', formData);

//       if (res.data.success) {
//         // Successful login
//         localStorage.setItem('sellerid', res.data.seller.sellerid);
//         localStorage.setItem('role', res.data.seller.role);
//         localStorage.setItem('sellerName', res.data.seller.name);
//         localStorage.setItem('token', res.data.seller.token);
//         closeModal();
//         navigate('/SellerDashboard');
//       } else {
//         if (res.data.message === "Seller not registered") {
//           alert("Please register first!");
//           closeModal();
//           switchToSignup(); // auto open signup modal
//         } else {
//           alert(res.data.message);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong!');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative z-50">
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 text-lg font-bold"
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold mb-4 text-center">Seller Login</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="sellerid"
//             placeholder="Seller ID"
//             value={formData.sellerid}
//             onChange={handleChange}
//             className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 text-black py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//           <p className="text-sm text-center">
//             Not registered?{' '}
//             <span
//               onClick={() => {
//                 closeModal();
//                 switchToSignup();
//               }}
//               className="text-indigo-600 cursor-pointer"
//             >
//               Sign Up
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginModal = ({ closeModal, switchToSignup }) => {
//   const [formData, setFormData] = useState({ sellerid: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:7000/login', formData);

//       if (res.data.success) {
//         // ✅ Successful login
//         localStorage.setItem('sellerid', res.data.seller.sellerid);
//         // localStorage.setItem('role', res.data.seller.role);
//         // localStorage.setItem('sellerName', res.data.seller.name);
//         localStorage.setItem('token', res.data.seller.token);
//         closeModal();
//         navigate('/SellerDashboard');
//       } else {
//         // ⚠️ If seller not registered, open signup modal
//         if (res.data.message === 'Seller not registered') {
//           alert('Seller not registered! Please sign up first.');
//           closeModal();
//           setTimeout(() => {
//             switchToSignup();
//           }, 300);
//         } else {
//           alert(res.data.message);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong!');
//     }
//   };

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative z-50">
//         {/* ❌ Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 text-lg font-bold"
//         >
//           ✖
//         </button>

//         {/* 🟣 Heading */}
//         <h2 className="text-xl font-semibold mb-4 text-center">Seller Login</h2>

//         {/* 🔹 Form */}
//         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="sellerid"
//             placeholder="Seller ID"
//             value={formData.sellerid}
//             onChange={handleChange}
//             className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//             required
//           />
//         <div>
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//           </div>
//         </form>

//         {/* 🔹 Redirect to Signup */}
//         <div
//           style={{
//             textAlign: 'right',
//             fontSize: '14px',
//             color: '#5e4fa2',
//             cursor: 'pointer',
//             marginTop: '10px',
//           }}
//           onClick={() => {
//             closeModal();
//             setTimeout(() => switchToSignup(), 300);
//           }}
//         >
//           Don't have ID? <span style={{ fontWeight: 'bold' }}>Register</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ closeModal, switchToSignup }) => {
  const [formData, setFormData] = useState({ sellerid: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/login', formData);

      if (res.data.success) {
        // ✅ Successful login
        localStorage.setItem('sellerid', res.data.seller.sellerid);
        localStorage.setItem('token', res.data.seller.token);
        closeModal();
        navigate('/SellerDashboard');
      } else {
        // ⚠️ If seller not registered, directly open signup modal
        if (res.data.message === 'Seller not registered') {
          alert('Seller not registered! Please sign up first.');
          switchToSignup(); // direct call, no closeModal + timeout
        } else {
          alert(res.data.message);
        }
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg relative z-50">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-4 text-center">Seller Login</h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            name="sellerid"
            placeholder="Seller ID"
            value={formData.sellerid}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Redirect to Signup */}
        <div
          className="text-right text-sm text-blue-700 cursor-pointer mt-3 font-semibold"
          onClick={switchToSignup} // direct call, no close + timeout
        >
          Don't have ID? <span className="font-bold">Register</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
