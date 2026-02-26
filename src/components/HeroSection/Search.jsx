// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CitySearch = () => {
//   const [city, setCity] = useState("");
//   const [properties, setProperties] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!city) {
//       alert("Please enter a city");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:7000/viewcity/${city}`);
//       setProperties(response.data);
//       setShowModal(true);
//     } catch (error) {
//       console.error(error);
//       alert("Error fetching properties");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Search Properties by City</h2>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Properties in {city}</h5>
//                 <button className="btn-close" onClick={() => setShowModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 {properties.length === 0 ? (
//                   <p>No properties found</p>
//                 ) : (
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Property ID</th>
//                         <th>Type</th>
//                         <th>Seller ID</th>
//                         <th>Price</th>
//                         <th>Address</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {properties.map((prop) => (
//                         <tr key={prop.propertyid}>
//                           <td>{prop.propertyid}</td>
//                           <td>{prop.type}</td>
//                           <td>{prop.sellerid}</td>
//                           <td>{prop.price}</td>
//                           <td>{prop.address}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CitySearch;


// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CitySearch = () => {
//   const [city, setCity] = useState("");
//   const [properties, setProperties] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!city) {
//       alert("Please enter a city");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:7000/viewcity/${city}`);
//       setProperties(response.data);
//       setShowModal(true);
//     } catch (error) {
//       console.error(error);
//       alert("Error fetching properties");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Search Properties by City</h2>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-xl">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Properties in {city}</h5>
//                 <button className="btn-close" onClick={() => setShowModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 {properties.length === 0 ? (
//                   <p>No properties found</p>
//                 ) : (
//                   <div className="row">
//                     {properties.map((prop) => (
//                       <div className="col-md-4 mb-4" key={prop.propertyid}>
//                         <div className="card h-100">
//                           <img
//                             src={prop.photo || "https://via.placeholder.com/300x200"} // default photo if not present
//                             className="card-img-top"
//                             alt={prop.type}
//                             style={{ height: "200px", objectFit: "cover" }}
//                           />
//                           <div className="card-body">
//                             <h5 className="card-title">{prop.type}</h5>
//                             <p className="card-text">
//                               <strong>Property ID:</strong> {prop.propertyid} <br />
//                               <strong>Seller ID:</strong> {prop.sellerid} <br />
//                               <strong>Price:</strong> {prop.price} <br />
//                               <strong>Address:</strong> {prop.address}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CitySearch;


import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CitySearch = () => {
  const [city, setCity] = useState("");
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:7000/viewcity/${city}`);
      setProperties(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      alert("Error fetching properties");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      {/* <h2>Search Properties by City</h2> */}
      <div className="input-group mb-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Properties in {city}</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {properties.length === 0 ? (
                  <p>No properties found</p>
                ) : (
                  <div className="row">
                    {properties.map((prop) => (
                      <div className="col-md-4 mb-4" key={prop.propertyid}>
                        <div className="card h-100">
                          <img
                            src={prop.photo ? `http://localhost:7000/uploads/${prop.photo}` : "https://via.placeholder.com/300x200"}
                            className="card-img-top"
                            alt={prop.type}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{prop.type}</h5>
                            <p className="card-text">
                              <strong>Property ID:</strong> {prop.propertyid} <br />
                              <strong>Seller ID:</strong> {prop.sellerid} <br />
                              <strong>Price:</strong> {prop.price} <br />
                              <strong>Address:</strong> {prop.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySearch;






// import React,{useEffect,useState} from "react";
// import axios from axios;
// const SearchBar = () => {
//    const[buyers,setBuyers] = useState([]);

//    useEffect(()=>{
//     fetchBuyers();
//    },[]);

//    const fetchBuyers = async() =>{
//     try{
//        const res = await axios.get("http://localhost:7000/viewcity");
//        if(Array.isArray(res.data)) setBuyers(res.data);
//        else if(res.data.success && res.data.buyers) setBuyers(res.data.buyers);
//        else if(res.data.data) setBuyers(res.data.data);
//     } catch (err){
//       console.log("Error fetching city:",err)
//     }
//    };

//   return (
//     <div className="w-150 flex items-center bg-white rounded-full p-4 shadow-lg">
//             <select
//               className="flex-1 border-none outline-none text-base p-2  rounded-lg text-gray-500"
//             >
//               <option>Select City</option>
//               <option>Delhi</option>
//               <option>Mumbai</option>
//               <option>Bangalore</option>
//               <option>Seoni</option>
//               <option>Jabalpur</option>
//               <option>Bhopal</option>
//               <option>Indore</option>
//             </select>
//             <button className="ml-4 bg-[#25d366] text-white rounded-full px-6 py-2 font-bold cursor-pointer">
//               Search
//             </button>
//           </div>

//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState("");
//   const [properties, setProperties] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   // Fetch suggestions as user types
//   useEffect(() => {
//     if (!searchText) return setSuggestions([]);

//     const fetchSuggestions = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/viewcity/", {
//           params: { search: searchText }
//         });
//         setSuggestions(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchSuggestions();
//   }, [searchText]);

//   // Search button click
//   const handleSearch = () => {
//     setProperties(suggestions); // or fetch fresh if needed
//     setSuggestions([]); // hide suggestions after search
//   };

//   return (
//     <div className="w-150 flex flex-col items-start bg-white rounded-full p-4 shadow-lg">
//       <div className="w-full flex items-center">
//         <input
//           type="text"
//           placeholder="Type city, property name or address"
//           className="flex-1 border-none outline-none text-base p-2 rounded-lg text-gray-700"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           className="ml-4 bg-[#25d366] text-white rounded-full px-6 py-2 font-bold cursor-pointer"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       {/* Suggestions */}
//       {suggestions.length > 0 && (
//         <div className="w-full mt-2 bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto z-50">
//           {suggestions.map((prop) => (
//             <div
//               key={prop.id}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => setSearchText(prop.city || prop.name)}
//             >
//               {prop.name} - {prop.address} ({prop.city})
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Display selected properties */}
//       <div className="mt-4 w-full">
//         {properties.length > 0 ? (
//           properties.map((prop) => (
//             <div key={prop.id} className="border p-2 my-2 rounded-lg">
//               <h3 className="font-bold">{prop.name}</h3>
//               <p>{prop.address}</p>
//               <p className="text-sm text-gray-500">{prop.city}</p>
//             </div>
//           ))
//         ) : (
//           <p>No properties found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
