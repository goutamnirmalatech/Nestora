// import React, { useState } from "react";
// import axios from "axios";

// const SignupModal = ({ closeModal, switchToLogin }) => {
//   const [formData, setFormData] = useState({
//     sellerid: "",
//     name: "",
//     city: "",
//     mobile: "",
//     address: "",
//     aadhar: "",
//     password: "",
//     photo: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "photo") {
//       setFormData({ ...formData, photo: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const form = new FormData();
//       for (let key in formData) form.append(key, formData[key]);

//       const res = await axios.post("http://localhost:7000/postseller", form, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (res.data.success) {
//         alert(res.data.message);
//         switchToLogin();
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white w-96 p-6 rounded-lg relative overflow-auto max-h-[90vh]">
//         <button
//           className="absolute top-2 right-2 text-lg font-bold text-gray-700 hover:text-gray-900"
//           onClick={closeModal}
//         >
//           ✖
//         </button>
//         <h2 className="text-2xl font-semibold mb-6 text-center">Seller Registration</h2>
//         <form onSubmit={handleSignup} className="flex flex-col gap-4">
//           <input type="text" name="sellerid" placeholder="Seller ID" value={formData.sellerid} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="text" name="aadhar" placeholder="Aadhar" value={formData.aadhar} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <input type="file" name="photo" onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//           <div className="text-right text-sm text-indigo-600 cursor-pointer hover:underline" onClick={switchToLogin}>
//             Already have ID? Login
//           </div>
//           <button type="submit" className="bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const SignupModal = ({ closeModal, switchToLogin }) => {
  const [formData, setFormData] = useState({
    sellerid: '',
    name: '',
    city: '',
    mobile: '',
    address: '',
    aadhar: '',
    photo: null,
    password: '',
  });

  // const navigate = useNavigate();

  //  Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //  Submit Handler
  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const res = await axios.post('http://localhost:7000/signup', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    console.log('Signup response:', res.data);

    if (res.data.success) {
      alert('Signup successful! Please login.');
      closeModal();
      setTimeout(() => switchToLogin(), 300);
    } else {
      alert(res.data.message || 'Signup failed!');
    }

  } catch (err) {
    console.error('Axios error:', err.response ? err.response.data : err);
    alert('Something went wrong!');
  }
};


  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] p-6 rounded-lg relative z-50 overflow-y-auto max-h-[90vh]">
        {/* ❌ Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          ✖
        </button>

        {/* 🟣 Heading */}
        <h2 className="text-xl font-semibold mb-4 text-center">Seller Signup</h2>

        {/* 🔹 Form */}
        <form className="flex flex-col gap-3" onSubmit={handleSignup}>
          <input
            type="text"
            name="sellerid"
            placeholder="Seller ID"
            value={formData.sellerid}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="aadhar"
            placeholder="Aadhaar Number"
            value={formData.aadhar}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="border px-3 py-2 rounded text-black"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* 🔹 Redirect to Login */}
        <div
          style={{
            textAlign: 'right',
            fontSize: '14px',
            color: '#5e4fa2',
            cursor: 'pointer',
            marginTop: '10px',
          }}
          onClick={() => {
            closeModal();
            setTimeout(() => switchToLogin(), 300);
          }}
        >
          Already have ID? <span style={{ fontWeight: 'bold' }}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
