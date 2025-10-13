// HeroSection.jsx
// import React, { useState } from "react";
// import HeroHeading from "../../components/HeroSection/HeroHeading";
// import SearchTabs from "../../components/HeroSection/SearchTabs";
// import Search from "../../components/HeroSection/Search";

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState("buy");

//   return (
//     <section className="bg-[url('/home image.jpg')] bg-cover bg-center text-white py-16">
//       <div className="container mx-auto px-6 text-center space-y-8">
        
//         {/* Heading */}
//         <HeroHeading />

//         {/* Tabs */}
//         <SearchTabs activeTab={activeTab} onTabChange={setActiveTab} />

//         {/* Search Bar */}
//         <Search activeTab={activeTab} />

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import HeroHeading from "../../components/HeroSection/HeroHeading";
import SearchTabs from "../../components/HeroSection/SearchTabs";
import Search from "../../components/HeroSection/Search";
import SearchButtons from "./searchButtons";
const HeroSection = () => {
  

  return (
    <section
      className="w-full h-[500px] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/home image.jpg')" }}
    >
      <div className="container mx-auto px-6 text-center space-y-8 p-8 rounded-lg">
        {/* Heading */}
        <HeroHeading />
       <div className="flex flex-col items-center">
        {/* Tabs */}
        <SearchTabs/>
       <div className="-mt-4">
        {/* Search Bar */}
        <Search/>
        </div>
        </div>
        <SearchButtons/>
      </div>
    </section>
  );
};

export default HeroSection;
