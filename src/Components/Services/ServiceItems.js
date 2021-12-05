import React from "react";
import img1 from "../../images/tyre.png";
import img2 from "../../images/repair.png";
import img3 from "../../images/complete.png";
import img4 from "../../images/spares.png";
import img5 from "../../images/sales.png";
import img6 from "../../images/ele.png";
import img7 from "../../images/dig.png";
import img8 from "../../images/flued.png";
import img9 from "../../images/col.png";
import img10 from "../../images/air.png";
import arrow from "../../images/bottom-bg copy.png";

const ServiceItems = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "TIRE SALES",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 2,
      img: img2,
      title: "REPAIR",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 3,
      img: img3,
      title: "BATTERY PROBLEMS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 4,
      img: img4,
      title: "SPARE PARTS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 5,
      img: img5,
      title: "ELECTRICAL SYSTEMS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 6,
      img: img6,
      title: "ENGINE DIAGNOSTICS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 7,
      img: img7,
      title: "FLUID EXCHANGE SERVICES",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 8,
      img: img8,
      title: "COOLANT SYSTEMS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 9,
      img: img9,
      title: "FLUID EXCHANGE SERVICES",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
    {
      id: 10,
      img: img10,
      title: "COOLANT SYSTEMS",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "READ MORE",
    },
  ];
  return (
    <>
      <h3 className="pb-6 mt-8 ml-16 text-4xl font-semibold text-gray-600 uppercase">
        What we do
      </h3>
      <div className="container grid items-center gap-8 ml-16 md:grid-cols-5 sm:grid-cols-2">
        {services.map((service, index) => {
          return (
            <div className="" key={index}>
              <img className="items-center mx-auto" src={service.img} alt="" />
              <div className="text-2xl text-center text-gray-600 hover:text-yellow-600">
                {service.title}
              </div>
              <div className="flex pb-3 text-center text-gray-400 ">
                {service.text}
              </div>
              <a
                href=""
                className="items-center px-2 py-2 mt-4 border border-opacity-75 hover:bg-yellow-300 hover:text-white"
              >
                {service.link}
              </a>
            </div>
          );
        })}
      </div>
      <img className="pt-5 mx-auto " src={arrow} alt="" />
    </>
  );
};

export default ServiceItems;
