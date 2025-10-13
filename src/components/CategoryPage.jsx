// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import ServiceCards from './serviceCards/ServiceCards'
import Explore from "./Explore/ProjectsExplore";
import Footer from "./footer/Footer";
const CategoryPage = () => {
  const { category } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          `http://localhost:7000/properties/category/${category}`
        );
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, [category]);

  return (
    
    <div className="p-4">
        <Navbar />

      <HeroSection />

       <ServiceCards/>

      <h2 className="text-2xl font-bold mb-4 pl-31 bg-gray-100">{category.toUpperCase()} Properties</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-31 mb-12 bg-gray-100">
        {properties.length > 0 ? (
          properties.map((prop) => (
            <div key={prop.propertyid} className="border rounded-lg p-4 shadow-md">
              <img
                src={`http://localhost:7000/uploads/${prop.photo}`}
                alt={prop.type}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-bold text-lg">{prop.type.toUpperCase()}</h3>
              <p>{prop.location}, {prop.city}</p>
              <p>{prop.description}</p>
              <p className="text-green-600 font-semibold mt-1">{prop.status}</p>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>

      

       <Explore/>
       <Footer/>
    </div>
  );
};

export default CategoryPage;
