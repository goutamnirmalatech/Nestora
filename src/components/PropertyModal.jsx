import React, { useState } from "react";
import LoginSignupModal from "./LoginSignupModal";

const PropertyModal = ({ property, onClose }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleContactClick = () => {
    setOpenLoginModal(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[90%] md:w-[600px] p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <img
          src={property.photoUrl}
          alt={property.title}
          className="w-full h-60 object-cover rounded-md"
        />

        <h2 className="text-2xl font-bold mt-3">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-gray-800 font-semibold mt-1">₹{property.price}</p>
        <p className="text-gray-500 mt-3">{property.description}</p>

        <button
          onClick={handleContactClick}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700"
        >
          Contact Seller
        </button>

        {/* Login/Signup Modal */}
        {openLoginModal && (
          <LoginSignupModal onClose={() => setOpenLoginModal(false)} />
        )}
      </div>
    </div>
  );
};

export default PropertyModal;
