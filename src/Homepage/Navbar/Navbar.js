import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const cart = <FontAwesomeIcon icon={faCartShopping} />;

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="/" className="justify-between">
                Blog
              </a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl font-bold font-['Merienda'] text-primary"
        >
          FoodTime
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li tabIndex={0}>
            <a>
              EN
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm bg-primary border-0 rounded-full  font-[poppins] font-semibold ">
          Login
        </button>
        <button className="btn btn-sm ml-2 bg-primary border-0 rounded-full font-[poppins] font-semibold ">
          {cart}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
