import React, { useEffect, useState } from "react";
import axios from "axios";

const MyInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    axios.get("/api/buyer/inquiries").then((res) => setInquiries(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Inquiries</h2>
      {inquiries.length === 0 ? (
        <p className="text-gray-600">You haven’t contacted any sellers yet.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th>Property</th>
              <th>Location</th>
              <th>Seller</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          {/* <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id}>
                <td>{inq.propertyTitle}</td>
                <td>{inq.location}</td>
                <td>{inq.sellerName}</td>
                <td>{inq.status}</td>
                <td>{new Date(inq.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      )}
    </div>
  );
};

export default MyInquiries;
