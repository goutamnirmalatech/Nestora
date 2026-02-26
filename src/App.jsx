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
// import {  Routes, Route } from "react-router-dom";
// import SellerDashboard from "./SellerComponents/SellerDashboard";
// import SellerProperties from "./SellerComponents/SellerProperties";
// import Home from "./components/Home";
// import CategoryPage from "./components/CategoryPage"; // ✅ Must import
// import SellerInquiries from "./SellerComponents/SellerInquiries";

// function App() {
//   return (
    
//       <Routes>
//         <Route path="/SellerDashboard" element={<SellerDashboard />} />
//         <Route path="/sellerproperties" element={<SellerProperties />} />
//         <Route path="/sellerinquiries"  element={<SellerInquiries/>}/>
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/*" element={<Home />} />
//       </Routes>
    
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import SellerDashboard from "./SellerComponents/SellerDashboard";
import SellerProperties from "./SellerComponents/SellerProperties";
import SellerInquiries from "./SellerComponents/SellerInquiries";
import SellerNotification from "./SellerComponents/sellernotification"; // ✅ Seller notification file
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import Notification from "./components/Notification"; // ✅ Buyer general notification page
// import BuyerLogin from "./BuyerComponentes/BuyerLogin";
import BuyerDashboard from "./BuyerComponentes/BuyerDashboard";
import BuyerSignup from "./BuyerComponentes/BuyerSignup";


function App() {
  const sellerid = "s1"; // hardcoded for now
  const buyerid = "b1";
  

  return (
    <Routes>

      <Route path="/notifications/seller" element={<Notification userType="seller" userId={sellerid} />} />
      <Route path="/notifications/buyer" element={<Notification userType="buyer" userId={buyerid} />} />
      {/* 🏠 Home page */}
      <Route path="/*" element={<Home />} />

      {/* 🧑‍💼 Seller Dashboard */}
      <Route path="/SellerDashboard" element={<SellerDashboard sellerid={sellerid} />} />

      {/* 🏠 Seller Properties */}
      <Route path="/sellerproperties" element={<SellerProperties />} />

      {/* 📩 Seller Inquiries */}
      <Route path="/sellerinquiries" element={<SellerInquiries sellerid={sellerid} />} />

      {/* 🔔 Seller Notifications */}
      <Route path="/sellernotifications" element={<SellerNotification sellerid={sellerid} />} />

      {/* 🔔 Buyer Notifications */}
      <Route path="/notifications" element={<Notification />} />

      {/* 🏷️ Property Category */}
      <Route path="/category/:category" element={<CategoryPage />} />

      <Route path="buyersignup" element={<BuyerSignup/>}/>

      {/* <Route path="/buyerdashboard" element={<BuyerDashboard />} /> */}

    </Routes>
  );
}

export default App;
