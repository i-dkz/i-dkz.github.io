import React from "react";
import { Toggle } from "./Toggle"; 
import Logo from "./Logo";


const NavBar = () => {
  return (
    <>
      <div className="bg-custom-background fixed flex w-full h-[7vh] justify-evenly items-center border-b-[0.5px] border-secondary">
        <div className="flex items-center max-w-[800px] w-[70%] justify-between">
          <Logo />
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default NavBar;
