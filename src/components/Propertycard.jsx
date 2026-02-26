import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PropertyCard = ({ property, buyerid }) => {
  const sendInquiry = async () => {
    try {
      const res = await axios.post("http://localhost:7000/addinquiry", {
        buyerid: buyerid,
        sellerid: property.sellerid,
        propertyid: property.id,
        message: "I’m interested in your property!",
      });

      Swal.fire("✅ Success", res.data.message, "success");
    } catch (err) {
      Swal.fire("❌ Error", "Something went wrong!", "error");
      console.error(err);
    }
  };

  return (
    <div className="border rounded-lg p-3 shadow-md bg-white w-80">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded cursor-pointer"
        onClick={sendInquiry}
      />
      <h3 className="text-lg font-semibold mt-2">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
    </div>
  );
};

export default PropertyCard;
