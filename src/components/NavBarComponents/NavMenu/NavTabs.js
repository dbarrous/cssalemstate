import React from "react";
import { NavLink } from "react-router-dom";

const NavTabs = props => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="navLinks"
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/degreescourses"
              className="navLinks"
              activeStyle={{ textDecoration: "underline" }}
            >
              Degrees &amp; Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className="navLinks"
              activeStyle={{ textDecoration: "underline" }}
            >
              Resources &amp; Advising
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faculty"
              className="navLinks"
              activeStyle={{ textDecoration: "underline" }}
            >
              Faculty
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavTabs;
