import React, { useState } from "react";
import logo from "../images/logo1.png";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="px-8 mx-auto max-w-7xl ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <img
                  className="w-auto h-8 lg:block"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "yellow" : "",
                      };
                    }}
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700"
                  >
                    HOME
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "yellow" : "",
                      };
                    }}
                    to="/About"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    ABOUT
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "yellow" : "",
                      };
                    }}
                    to="/whatwedo"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    WHAT WE DO
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "yellow" : "",
                      };
                    }}
                    to="/service"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    SERVICES
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "yellow" : "",
                      };
                    }}
                    to="/contact"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="align-right md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="justify-end px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "",
                    };
                  }}
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
                >
                  Home
                </NavLink>

                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "",
                    };
                  }}
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  About
                </NavLink>

                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "",
                    };
                  }}
                  to="/whatwedo"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  What We Do
                </NavLink>

                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "",
                    };
                  }}
                  to="/services"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md active:bg-red-700 hover:bg-gray-700 hover:text-white"
                >
                  Services
                </NavLink>

                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "",
                    };
                  }}
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
