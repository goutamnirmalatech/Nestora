// const SearchTabs = () => {


//   return (
//      <div className="w-170 bg-[#2e2e52] rounded-t-[14px] mt-8 flex gap-6 px-5 py-4 font-bold text-sm text-[#cfcfcf]">
//             <div className="text-white border-b-2 border-white pb-1">BUY</div>
//             <div>RENT</div>
//             <div>COMMERCIAL</div>
//             <div>PG/CO-LIVING</div>
//             <div>PLOTS</div>
//           </div>
//   );
// };

// export default SearchTabs;
// src/components/SearchTabs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = ["buy", "rent", "commercial", "pg/co-living", "plots"];

const SearchTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-170 bg-[#2e2e52] rounded-t-[14px] mt-8 flex gap-6 px-5 py-4 font-bold text-sm text-[#cfcfcf]">
      {categories.map((cat) => (
        <div
          key={cat}
          onClick={() => navigate(`/category/${cat}`)}
          className="cursor-pointer hover:text-white transition"
        >
          {cat.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default SearchTabs;
