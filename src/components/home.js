import React from "react";
import logo from "../asset/logo.png";
import Nav from "./nav";

const Home = () => {
  return (
    <>
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-1/6 h-1/6 mx-auto my-10 "
        />
      </div>
      <Nav />
    </>
  );
};

export default Home;
