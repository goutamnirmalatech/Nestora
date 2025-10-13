// import React from "react";
// import LoginModal from "../modals/LoginModal";
// import SignupModal from "../modals/SignupModal";

// const PostProperty = () => {
//   return (
//     <div className="font-bold cursor-pointer flex items-center">
//           Post Property{" "}
//           <span
//             className="bg-red-600 text-white text-[10px] 
//                        px-1 py-0.5 rounded ml-1"
//           >
//             FREE
//           </span>
        
//         </div>
//   );
// };

// export default PostProperty;
// import React, { useState } from "react";
// import LoginModal from "../modals/LoginModal";
// import SignupModal from "../modals/SignupModal";

// const PostProperty = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState("login");

//   const openModal = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };
//   const closeModal = () => setShowModal(false);
//   const switchToLogin = () => setModalType("login");
//   const switchToSignup = () => setModalType("signup");

//   return (
//     <div>
//       <div
//         className="font-bold cursor-pointer inline-flex items-center gap-1"
//         onClick={() => openModal("login")}
//       >
//         Post Property
//         <span className="bg-red-600 text-white text-xs px-1 rounded">FREE</span>
//       </div>

//       {showModal && modalType === "login" && (
//         <LoginModal closeModal={closeModal} switchToSignup={switchToSignup} />
//       )}
//       {showModal && modalType === "signup" && (
//         <SignupModal closeModal={closeModal} switchToLogin={switchToLogin} />
//       )}
//     </div>
//   );
// };

// export default PostProperty;
import React, { useState } from "react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";

const PostProperty = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login");

  const openModal = (type = "login") => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const switchToLogin = () => {
    setModalType("login");
    setShowModal(true); // ensure modal visible
  };

  const switchToSignup = () => {
    setModalType("signup");
    setShowModal(true); // ensure modal visible
  };

  return (
    <div>
      <div
        className="font-bold cursor-pointer inline-flex items-center gap-1"
        onClick={() => openModal("login")}
      >
        Post Property
        <span className="bg-red-600 text-white text-xs px-1 rounded">FREE</span>
      </div>

      {showModal && modalType === "login" && (
        <LoginModal
          closeModal={closeModal}
          switchToSignup={switchToSignup}
        />
      )}
      {showModal && modalType === "signup" && (
        <SignupModal
          closeModal={closeModal}
          switchToLogin={switchToLogin}
        />
      )}
    </div>
  );
};

export default PostProperty;
