// import axios from "axios";
// import React,{useState,useEffect} from "react";
const SearchBar = () => {

//   const [searchText, setSearchText] = useState("");
//   const [properties, setProperties] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (!searchText) return setSuggestions([]);

//     const fetchSuggestions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/properties", {
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
// };


  return (
    <div className="w-150 flex items-center bg-white rounded-full p-4 shadow-lg">
            <select
              className="flex-1 border-none outline-none text-base p-2  rounded-lg text-gray-500"
            >
              <option>Select City</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Seoni</option>
              <option>Jabalpur</option>
              <option>Bhopal</option>
              <option>Indore</option>
            </select>
            <button className="ml-4 bg-[#25d366] text-white rounded-full px-6 py-2 font-bold cursor-pointer">
              Search
            </button>
          </div>

  );
};

export default SearchBar;

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
//         const response = await axios.get("http://localhost:5000/properties", {
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
