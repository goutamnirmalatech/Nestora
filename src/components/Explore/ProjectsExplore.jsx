import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Websitecards from "./Websitecards";
const HousingUI = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/recentproperties")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.sellers || [];
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 font-sans">

      {/* Top Picks Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Prominent projects to explore</h2>
            <p className="text-gray-600 mt-2">Best projects to look out fo</p>
          </div>

        </div>

        {projects.length === 0 ? (
          <p className="text-gray-600 text-center">Loading projects...</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {projects.map((project, i) => (

              <SwiperSlide key={i}>
                <Websitecards project={project} />
              </SwiperSlide>

            ))}
          </Swiper>
        )}
      </section>
      <section>
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Top highlighted projects </h2>
              <p className="text-gray-600 mt-2">Noteworthy projects to watch</p>
            </div>

          </div>

          {projects.length === 0 ? (
            <p className="text-gray-600 text-center">Loading projects...</p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="mySwiper"
            >
              {projects.map((project, i) => (
                // <SwiperSlide key={i}>
                //   <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition w-full h-80">
                //     <img
                //       src={`http://localhost:7000/uploads/${project.photo}`}
                //       alt={project.type}
                //       className="w-full h-full object-cover"
                //     />

                //     <div className="p-5">
                //       <h3 className="text-lg font-semibold text-gray-800">{project.type}</h3>
                //       <p className="text-gray-500 text-sm">{project.category}</p>
                //       <p className="text-gray-500 text-sm">{project.location}, {project.city}</p>
                //       <p className={`font-bold mt-2 ${project.status === "available" ? "text-green-600" : "text-red-600"}`}>
                //         {project.status?.toUpperCase()}
                //       </p>
                //     </div>
                //   </div>
                // </SwiperSlide>
                
              <SwiperSlide key={i}>
                <Websitecards project={project} />
              </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>
      </section>
    </div>


  );
};

export default HousingUI;
