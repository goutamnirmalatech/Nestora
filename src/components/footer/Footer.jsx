import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white font-sans">
      {/* Our Brands */}
      <div className="bg-[#1e1e1e] px-5 py-2 flex justify-end text-sm text-[#aaa]">
        Our Brands
        <span className="font-bold text-[#777] ml-1">PROPTIGER</span>
      </div>

      {/* Part of REA Group */}
      <div className="bg-white text-[#121212] text-center py-8 text-2xl font-medium">
        Part of <span className="text-[#e60023] font-bold">🏠 REA Group</span>
      </div>

      {/* Navigation Links */}
      <div className="bg-[#1e1e1e] text-center text-[#bdbdbd] font-bold border-b border-[#333] flex flex-wrap justify-around py-5">
        <div className="px-2">REAL ESTATE</div>
        <div className="px-2">RENTALS</div>
        <div className="px-2">PROJECTS</div>
        <div className="px-2">CITY DATA</div>
        <div className="px-2">POPULAR SEARCHES</div>
      </div>

      {/* Main Content */}
      <div className="bg-[#121212] flex flex-wrap px-10 py-10 gap-6">
        {/* Column 1 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-white mb-2">Find Properties for Sale</h3>
          <ul className="text-[#bdbdbd] space-y-1">
            <li>Flats in Mumbai</li>
            <li>Flats in Bengaluru</li>
            <li>Flats in Hyderabad</li>
            <li>Flats in Pune</li>
            <li>Flats in Chennai</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[200px] text-[#bdbdbd] space-y-1">
          <div>Flats in Delhi</div>
          <div>Flats in Gurgaon</div>
          <div>Flats in Noida</div>
          <div>Flats in Kolkata</div>
          <div>Flats in Ahmedabad</div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[200px] text-[#bdbdbd] space-y-1">
          <div>Flats in Thane</div>
          <div>Flats in Navi Mumbai</div>
          <div>Flats in Faridabad</div>
          <div>Flats in Ghaziabad</div>
          <div>Flats in Coimbatore</div>
        </div>

        {/* Column 4 */}
        <div className="flex-1 min-w-[200px] text-[#bdbdbd] space-y-1">
          <div>Properties in India</div>
          <div>Agricultural Lands in India</div>
          <div>Plots in India</div>
          <div>Flats in India</div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1e1e1e] flex flex-wrap justify-between px-16 py-10 text-[#aaa] text-sm">
        {/* Logo */}
        <div className="mt-12 w-64">
          <img
            src="footer.jpg"
            alt="Play Store"
            className="w-24"
          />
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px] space-y-1">
          <h4 className="text-white font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li>Careers</li>
            <li>About Us</li>
            <li>For Partners</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Unsubscribe</li>
            <li>Merger Hearing</li>
            <li>Annual Return</li>
            <li>Advertisement</li>
          </ul>
        </div>

        {/* Partner Sites */}
        <div className="flex-1 min-w-[150px] space-y-1">
          <h4 className="text-white font-semibold mb-2">PARTNER SITES</h4>
          <ul className="space-y-1">
            <li>Proptiger</li>
            <li>realestate.com.au</li>
            <li>realtor.com</li>
            <li>99.co</li>
            <li>collinsdictionary.com</li>
          </ul>
        </div>

        {/* Explore */}
        <div className="flex-1 min-w-[150px] space-y-1">
          <h4 className="text-white font-semibold mb-2">EXPLORE</h4>
          <ul className="space-y-1">
            <li>News</li>
            <li>Home Loans</li>
            <li>Sitemap</li>
            <li>International</li>
          </ul>
        </div>

        {/* Mobile App */}
        <div className="flex-1 min-w-[150px] space-y-3">
          <h4 className="text-white font-semibold mb-2">EXPERIENCE HOUSING APP ON MOBILE</h4>
          <div className="flex gap-4 mt-2">
            <img
              src="https://c.housingcdn.com/demand/s/client/common/assets/app-store.10009972.png"
              alt="App Store"
              className="w-24"
            />
            <img
              src="https://c.housingcdn.com/demand/s/client/common/assets/google-play.2c209e8c.png"
              alt="Play Store"
              className="w-24"
            />
            
          </div>
        </div>
      </div>
    </footer>
  );
}
