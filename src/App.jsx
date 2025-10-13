// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SellerDashboard from "./SellerComponents/SellerDashboard";
// import Home from "./components/Home";
// import SellerProperties from "./SellerComponents/SellerProperties";
// function App() {
//   return (
//     <Router>
//       <Routes>
       
//         <Route path="/SellerDashboard" element={<SellerDashboard />} />
//         <Route path="SellerProperties" element={<SellerProperties />} />
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SellerDashboard from "./SellerComponents/SellerDashboard";
// import SellerProperties from "./SellerComponents/SellerProperties";
// import Home from "./components/Home";

// function App() {
//   return (
    
//       <Routes>
//         <Route path="/SellerDashboard" element={<SellerDashboard />} />
//         <Route path="/sellerproperties" element={<SellerProperties />} />
//         <Route path="/*" element={<Home />} />
//         <Route path="/category/:category" element={<CategoryPage />} />

//       </Routes>
    
//   );
// }

// export default App;
import {  Routes, Route } from "react-router-dom";
import SellerDashboard from "./SellerComponents/SellerDashboard";
import SellerProperties from "./SellerComponents/SellerProperties";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage"; // ✅ Must import

function App() {
  return (
    
      <Routes>
        <Route path="/SellerDashboard" element={<SellerDashboard />} />
        <Route path="/sellerproperties" element={<SellerProperties />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    
  );
}

export default App;
