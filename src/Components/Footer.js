import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto py-8 bg-yellow-400 dark:bg-gray-800">
      <div className="max-w-screen-xl px-2 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light uppercase">
          <li className="my-2 ">
            <a
              className="text-white transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              facebook
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-white transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              twitter
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-white transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              google+
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-white transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <p className="text-center text-white text-8xl "> +91 123 456789 </p>
        <p className="text-6xl text-center text-white "> CITY TAXI </p>

        <div className="flex items-center justify-center pt-10 font-light text-center text-white dark:text-gray-200 sm:pt-12">
          Created by Coders
        </div>
      </div>
    </footer>
  );
};

export default Footer;
