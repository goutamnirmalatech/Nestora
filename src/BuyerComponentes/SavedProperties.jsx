import React, { useEffect, useState } from "react";
import axios from "axios";

const SavedProperties = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    axios.get("/api/buyer/saved").then((res) => setSaved(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Saved Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {saved.map((p) => (
          <div key={p.id} className="border rounded p-3 shadow hover:shadow-md">
            <img src={p.photoUrl} alt={p.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
            <p className="text-gray-500">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;
