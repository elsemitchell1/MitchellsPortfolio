import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-6xl p-8 mx-auto text-white md:w-5/6">
      <nav className="container flex justify-start mx-auto mt-10 mb-2">
        <ul className="flex space-x-4 md:space-x-10">
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Work"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Work
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Resume"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="mb-5 md:mb-0 lg:hover:scale-105">
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "text-gradient font-bold"
                  : "text-gradient-hover"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr className="border-0 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] p-px" />

      <div className="container flex justify-center mx-auto my-4">
        <p className="text-[10px] sm:text-sm">
          &copy; 2024 Mitchell Else.
        </p>
      </div>
    </footer>
  );
};

export default Footer;