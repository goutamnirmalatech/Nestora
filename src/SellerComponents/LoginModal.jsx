// import React, { useState } from "react";

// export default function LoginModal({ onClose, onLogin }) {
//   const [id, setId] = useState("b1");

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded shadow w-80">
//         <h3 className="font-bold mb-2">Login (simulate)</h3>
//         <label className="block mb-2">Buyer ID</label>
//         <input value={id} onChange={e => setId(e.target.value)} className="w-full border p-2 rounded mb-4" />
//         <div className="flex justify-end gap-2">
//           <button onClick={onClose} className="px-3 py-1">Cancel</button>
//           <button onClick={() => onLogin(id)} className="px-3 py-1 bg-blue-600 text-white rounded">Login</button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

const LoginButton = ({ setBuyerLoggedIn }) => {
  const handleLogin = () => {
    setBuyerLoggedIn(true);
    alert("Login successful!");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      Login as Buyer
    </button>
  );
};

export default LoginButton;

