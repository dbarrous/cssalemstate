import React from "react";
import NavTabs from "./NavMenu/NavTabs";
import NavSearch from "./NavMenu/NavSearch";

const NavMenu = props => {
  return (
    <>
      <div id="navMenuContainer">
        <NavTabs setActive={props.setActive} />
        <NavSearch />
      </div>
      <div id="hamburgerMenuButton">
        <div className="hamMenu"></div>
        <div className="hamMenu"></div>
        <div className="hamMenu"></div>
      </div>
    </>
  );
};

export default NavMenu;
