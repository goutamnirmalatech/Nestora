// import React, { useState } from "react";

// const Websitecard = ({ project }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   if (!project) return null;

//   return (
//     <>
//       {/* Card Container */}
//       <div
//         className="w-72 h-80 cursor-pointer"
//         style={{ perspective: "1000px" }}
//         onClick={() => setFlipped(!flipped)}
//       >
//         {/* Inner Card */}
//         <div
//           className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//           style={{
//             transformStyle: "preserve-3d",
//             transform: flipped ? "rotateY(180deg)" : "none",
//           }}
//         >
//           {/* Front side */}
//           <div
//             className="absolute w-full h-full rounded-2xl overflow-hidden"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img
//               src={`http://localhost:7000/uploads/${project.photo}`}
//               alt={project.type}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Back side */}
//           <div
//             className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h3 className="text-lg font-bold">{project.type}</h3>
//             <p className="text-gray-600">{project.category}</p>
//             <p className="text-gray-600">
//               {project.location}, {project.city}
//             </p>
//             <p
//               className={`mt-2 font-bold ${
//                 project.status === "available"
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               {project.status?.toUpperCase()}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               onClick={(e) => {
//                 e.stopPropagation(); // flip na ho jab button click ho
//                 setShowModal(true);
//               }}
//             >
//               More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-96 max-w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-2">{project.type}</h2>
//             <p className="text-gray-600 mb-1">
//               <strong>Category:</strong> {project.category}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Location:</strong> {project.location}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>City:</strong> {project.city}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Status:</strong> {project.status}
//             </p>
//             <p className="text-gray-600 mt-3">
//               <strong>Description:</strong>{" "}
//               {project.description || "No Description Available"}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Nearby:</strong> {project.nearby}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Websitecard;




import React, { useState } from "react";

const Websitecard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!project) return null;

  return (
    <>
      {/* Card Container */}
      <div
        className="w-72 h-80 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Inner Card */}
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "none",
          }}
        >
          {/* Front side */}
          <div
            className="absolute w-full h-full rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={`http://localhost:7000/uploads/${project.photo}`}
              alt={project.type}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back side */}
          <div
            className="absolute w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center text-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h3 className="text-lg font-bold">{project.type}</h3>
            <p className="text-gray-600">{project.category}</p>
            <p className="text-gray-600">
              {project.location}, {project.city}
            </p>
            <p
              className={`mt-2 font-bold ${
                project.status === "available"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {project.status?.toUpperCase()}
            </p>
            <button
              className=" bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={(e) => {
                e.stopPropagation(); // flip na ho jab button click ho
                setShowModal(true);
              }}
            >
              More
            </button>
          </div>
        </div>
      </div>

      {/* Modal with smooth popup animation */}
      {showModal && (
        <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div
            className="bg-white rounded-2xl p-6 w-96 max-w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-zoomIn"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{project.type}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> {project.category}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Location:</strong> {project.location}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>City:</strong> {project.city}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Status:</strong> {project.status}
            </p>
            <p className="text-gray-600 mt-3">
              <strong>Description:</strong>{" "}
              {project.description || "No Description Available"}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Nearby:</strong> {project.nearby}
            </p>
             <p className="text-gray-600 mb-1">
              <strong>State:</strong> {project.state}
            </p>
             <p className="text-gray-600 mb-1">
              <strong>Type:</strong> {project.type}
            </p>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style>
        {`
          @keyframes zoomIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 0.3s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Websitecard;
