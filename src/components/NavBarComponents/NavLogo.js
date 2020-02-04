import React from "react";

/*
This task of this NavLogo component is to handle the logo and how it displays in the navbar. It picks the proper format to display quickly and correctly to the user.

If there changes to the logo are to be main please refer to the instructions provided in the manual.
*/

const NavLogo = () => {
  return (
    <div id="navBarLogoContainer">
      <a href="#home">
        <img
          src={"./images/logo.png"}
          alt={"Salem State Computer Science Department Logo"}
        />
      </a>
    </div>
  );
};

export default NavLogo;
