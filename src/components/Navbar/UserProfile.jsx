// import React, { useState } from "react";
// import BuyerLogin from "../../BuyerComponentes/BuyerLogin";

// const UserProfile = () => {
  

//   return (
//      <div
//           className="w-10 h-10 bg-white rounded-full 
//                      flex items-center justify-center cursor-pointer"
//         >
//           <BuyerLogin/>
//           <div className="text-[#5e4fa2]">👤</div>
//         </div>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import BuyerLogin from "../../BuyerComponentes/BuyerLogin";

const UserProfile = () => {
  const [showLogin, setShowLogin] = useState(false);

  // 👤 icon click hone par login form dikhao
  const handleIconClick = () => {
    setShowLogin(true);
  };

  // Login form close karne ke liye
  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className="relative">
      {/* 👤 Profile Icon */}
      <div
        className="w-10 h-10 bg-white rounded-full 
                   flex items-center justify-center cursor-pointer shadow-md"
        onClick={handleIconClick}
      >
        <div className="text-[#5e4fa2] text-xl">👤</div>
      </div>

      {showLogin && (
        <div>
          {/* BuyerLogin component (tumhara form) */}
          <BuyerLogin onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;




// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// const BuyerLoginModal = () => {
//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSignup, setShowSignup] = useState(false);

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Logged in as ${email}`);
//     setShow(false);
//   };

//   // ✅ Modal UI
//   const modal = (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
//       onClick={() => setShow(false)}
//     >
//       {/* 🏠 Modal Box */}
//       <div
//         className="relative bg-white rounded-xl shadow-xl w-[340px] sm:w-[400px] p-6 
//                    border border-gray-100 transform transition-all duration-300"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* ❌ Close Button */}
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-purple-600 text-2xl"
//           onClick={() => setShow(false)}
//         >
//           ×
//         </button>

//         {/* 🌈 Login Title */}
//         <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
//           Login
//         </h2>

//         {/* 🧾 Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email"
//             className="w-full p-3 rounded-lg bg-[#edf0ff] text-gray-700 
//                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//             className="w-full p-3 rounded-lg bg-[#edf0ff] text-gray-700 
//                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold py-2.5 
//                        rounded-lg shadow-md transition-all duration-200"
//           >
//             Login
//           </button>
//         </form>

//         {/* 🔗 Footer */}
//         <div className="text-center mt-4 text-sm text-gray-600">
//           Don’t have ID?{" "}
//           <span
//             onClick={() => alert("Signup modal open")}
//             className="text-[#4f46e5] font-semibold cursor-pointer hover:underline"
//           >
//             Register
//           </span>

   

//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* 👤 Profile Icon */}
//       <button
//         onClick={() => setShow(true)}
//         className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] 
//                    text-white text-xl shadow-md hover:scale-110 transition-all duration-300"
//       >
//         👤
//       </button>

//       {/* Show Modal */}
//       {show && ReactDOM.createPortal(modal, document.body)}
//     </>
//   );
// };

// export default BuyerLoginModal;


