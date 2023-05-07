import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  function Sidebar() {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex overflow-hidden z-30 font-san">
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
              <p>Buy / Sell</p>
              <p>Grow</p>
              <p>Markets</p>
              <p>Business</p>
              <p>Support</p>
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
        <div className=" flex gap-8">
          <NavLink exact to="/" className="navLink" activeClassName="active">
            Buy / Sell
          </NavLink>
          <NavLink
            exact
            to="/grow"
            className="navLink"
            activeClassName="active"
          >
            Grow
          </NavLink>
          <NavLink
            exact
            to="/market"
            className="navLink"
            activeClassName="active"
          >
            Markets
          </NavLink>
          <NavLink
            exact
            to="/business"
            className="navLink"
            activeClassName="active"
          >
            Business
          </NavLink>
          <NavLink
            exact
            to="/support"
            className="navLink"
            activeClassName="active"
          >
            Support
          </NavLink>
        </div>
        <div className="flex gap-4">
          <button className="sign-in" onClick={() => navigate("/login")}>
            Sign in
          </button>
          <button className="cta-button" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </div>
      </div>
      {status && <Sidebar />}
    </div>
  );
};

export default Header;
