import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import "../../css/_navBar.scss";

/* 
NavBar Component that acts as a container for the two main NavBar Components.
THe two components that it handles are the NavLogo (Handles Logo) 
and NavMenu (Handles Tabs & Search).

It is a static component, no need for state or props.
*/

const NavBar = props => {
  return (
    <div id="navBarContainer">
      <NavLogo />
      <NavMenu setActive={props.setActive} />
    </div>
  );
};

export default NavBar;
