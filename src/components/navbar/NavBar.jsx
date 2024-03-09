import React from "react";
import NavBarRight from "./navbaritem/NavBarRight";
import NavBarLeft from "./navbaritem/NavBarLeft";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavBarLeft />
      <NavBarRight />
    </div>
  );
};

export default NavBar;
