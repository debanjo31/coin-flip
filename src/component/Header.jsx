import React, { useState } from "react";

const Header = () => {
  const [status, setStatus] = useState(false);

  function Sidebar() {
    return (
      <div className="f fixed top-0 left-0 w-full h-screen flex overflow-hidden z-30 font-san">
        <div
          className="w-1/3 bg-gray-600 bg-opacity-75 "
          onClick={() => setStatus(false)}
        ></div>
        <div className="w-2/3 bg-white p-4 pb-12 relative">
          <div className="w-5/6 mx-auto">
            <p
              onClick={() => setStatus(false)}
              className="block cursor-pointer z-10 absolut top-0 left-0 text-xl text-right mb-8"
            >
              X
            </p>
            <div className="flex flex-col gap-4 overflow-auto h-screen ">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panels</p>
              <p>Exisiting Inventory</p>
              <p>Used Inventory</p>
              <p>Trade-In</p>
              <p>Demo Drive</p>
              <p>Insurance</p>
              <p>Commercial Energy</p>
              <p>Utilities</p>
              <p>Charging</p>
              <p>Find Us</p>
              <p>Support</p>
              <p>Investor Relations</p>
              <p>Shop</p>
              <p>Account</p>
              <div className="flex justify-betweeen">
                <p>More</p>
                <p>&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" pt-8  w-full  text-sm font-san font-600">
      <div className="w-5/6 mx-auto flex justify-between">
        <div></div>
        <div className="hidden lg:flex gap-8">
          <p>Buy / Sell</p>
          <p>Grow</p>
          <p>Markets</p>
          <p>Business</p>
          <p>Support</p>
        </div>
        <div className="flex gap-4">
          <p className="hidden lg:block">Sign in</p>
          <p className="hidden lg:block">Sign Up</p>
        </div>
      </div>
      {status && <Sidebar />}
    </div>
  );
};

export default Header;
