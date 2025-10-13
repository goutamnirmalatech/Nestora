// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; 
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const HousingUI = () => {
//   const [projects, setProjects] = useState([]);
//   const [openModal, setOpenModal] = useState(false);   // ✅ modal state
//   const [currentImage, setCurrentImage] = useState(""); // ✅ selected image for modal

//   const services = [
//     { 
//       title: "Pay on Credit", 
//       desc: "Pay your rent using Credit Card", 
//       icon: "💳",
//       image: "home image.jpg" // image for modal
//     },
//     { 
//       title: "Housing Premium", 
//       desc: "Zero brokerage properties", 
//       icon: "💎",
//       image: "https://via.placeholder.com/400?text=Housing+Premium" 
//     },
//     { 
//       title: "Home Loans", 
//       desc: "Lowest Interest rate offers", 
//       icon: "🏠",
//       image: "https://via.placeholder.com/400?text=Home+Loans" 
//     },
//     { 
//       title: "Housing Protect", 
//       desc: "Protection against cyber frauds", 
//       icon: "☂️",
//       image: "https://via.placeholder.com/400?text=Housing+Protect" 
//     },
//   ];

//   // Fetch projects from backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:7000/viewsellerproperties")
//       .then((res) => {
//         setProjects(Array.isArray(res.data) ? res.data : res.data.sellers || []);
//       })
//       .catch((err) => console.error("Error fetching projects:", err));
//   }, []);

//   const handleOpenModal = (image) => {
//     setCurrentImage(image);
//     setOpenModal(true);
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 font-sans">
//       {/* 🔝 Top Bar */}
//       <div className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-10">
//         <h1 className="text-3xl font-bold text-gray-800">Housing Edge</h1>
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
//           Explore Services
//         </button>
//       </div>

//       {/* 🧩 Services Section */}
//       <section className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Property Related Services</h2>
//         <p className="text-gray-500 mb-8">All in one platform for property needs</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition cursor-pointer text-center group"
//               onClick={() => handleOpenModal(s.image)} // ✅ open modal on click
//             >
//               <div className="text-5xl mb-4 group-hover:scale-110 transition">{s.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{s.title}</h3>
//               <p className="text-gray-500 text-sm">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

  
//       {/* ✅ Fullscreen Image Modal */}
// {openModal && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[1000]"
//     onClick={() => setOpenModal(false)} // anywhere click → close
//   >
//     <img
//       src={currentImage}
//       alt="service"
//       className="max-w-full max-h-full object-contain cursor-pointer"
//     />
//     <button
//       className="absolute top-5 right-5 text-white text-4xl font-bold"
//       onClick={() => setOpenModal(false)}
//     >
//       &times;
//     </button>
//   </div>
// )}


//       {/* 🏙️ Top Picks Section with Swiper */}
//       <section className="container mx-auto px-6 py-16">
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">Housing's Top Picks</h2>
//             <p className="text-gray-600 mt-2">Check out our handpicked projects</p>
//           </div>
//           <button className="mt-4 lg:mt-0 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
//             View All Projects
//           </button>
//         </div>

//         {projects.length === 0 ? (
//           <p className="text-gray-600 text-center">Loading projects...</p>
//         ) : (
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={20}
//             slidesPerView={1} 
//             navigation
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="mySwiper"
//           >
//             {projects.map((project, i) => (
//               <SwiperSlide key={i}>
//                 <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition">
//                   <img
//                     src={`http://localhost:7000/uploads/${project.photo}`}
//                     alt={project.type}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-800">{project.type}</h3>
//                     <p className="text-gray-500 text-sm">{project.category}</p>
//                     <p className="text-gray-500 text-sm">{project.location}, {project.city}</p>
//                     <p className={`font-bold mt-2 ${project.status === "available" ? "text-green-600" : "text-red-600"}`}>
//                       {project.status?.toUpperCase()}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </section>
//     </div>
//   );
// };

// export default HousingUI; 

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay  } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HousingUI = () => {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const services = [
    { 
      title: "Pay on Credit", 
      desc: "Pay your rent using Credit Card", 
      icon: "💳",
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FtbXlpbjBtc2RjaDZ5Zm1scnI3aWRrdWw4eTJndTBubnVvdDB6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mmdNnW5hkoUxTG/giphy.gif" // ✅ local fallback image
    },
    { 
      title: "Housing Premium", 
      desc: "Zero brokerage properties", 
      icon: "💎",
      image: "/images/housing-premium.jpg" 
    },
    { 
      title: "Home Loans", 
      desc: "Lowest Interest rate offers", 
      icon: "🏠",
      image: "https://c.housingcdn.com/chimera/s/client/common/assets/desktopAnimation2.fd99da69.png" 
    },
    { 
      title: "Housing Protect", 
      desc: "Protection against cyber frauds", 
      icon: "☂️",
      image: "/images/housing-protect.jpg" 
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:7000/viewsellerproperties")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.sellers || [];
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setOpenModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-5  shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-gray-800">Housing Edge</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Explore Services
        </button>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Property Related Services</h2>
        <p className="text-gray-500 mb-8">All in one platform for property needs</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition cursor-pointer text-center group"
              onClick={() => handleOpenModal(s.image)}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setOpenModal(false)}
            >
              &times;
            </button>
            <img src={currentImage} alt="service" className="w-full h-auto rounded" />
          </div>
        </div>
      )}

      {/* Top Picks Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl pl-15 font-bold text-gray-800">Housing's Top Picks</h2>
            <p className="text-gray-600 pl-15 mt-2">Check out our handpicked projects</p>
          </div>
          <button className=" lg:mt-0 bg-indigo-600 text-white px-2 py-2 rounded hover:bg-indigo-700 transition">
            View All Projects
          </button>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-600 text-center">Loading projects...</p>
        ) : (
//          <Swiper
//   modules={[Navigation, Pagination]}
//   spaceBetween={20}
//   slidesPerView={1} // ✅ ek slide me ek card
//   navigation
//   pagination={{ clickable: true }}
//   breakpoints={{
//     640: { slidesPerView: 1 },
//     768: { slidesPerView: 1 },
//     1024: { slidesPerView: 1 },
//     1280: { slidesPerView: 1 },
//   }}
//   className="mySwiper"
// >
<Swiper
  modules={[ Pagination, Autoplay]} // Autoplay add kiya
  spaceBetween={20}
  slidesPerView={1}
  navigation={false}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 second timer
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
    1280: { slidesPerView: 1 },
  }}
  // className="mySwiper"
>

  {projects.map((project, i) => (
    <SwiperSlide key={i} className="w-full flex justify-center">
  <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition h-98 w-[90%] max-w-5xl mx-auto">
    
    {/* Left — Description (chhota) */}
    <div className="md:w-1/3 p-8 flex flex-col justify-center space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">{project.type}</h3>
      <p className="text-gray-500 text-sm">{project.category}</p>
      <p className="text-gray-500 text-sm">{project.location}, {project.city}</p>
      <p className={`font-bold mt-2 ${project.status === "available" ? "text-green-600" : "text-red-600"}`}>
        {project.status?.toUpperCase()}
      </p>
      <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 w-fit transition">
        View Details
      </button>
    </div>

    {/* Right — Image (bada) */}
    <div className="md:w-4/3">
      <img
        src={`http://localhost:7000/uploads/${project.photo}`}
        alt={project.type}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</SwiperSlide>

  ))}
</Swiper>

        )}
      </section>
    </div>
  );
};

export default HousingUI;
