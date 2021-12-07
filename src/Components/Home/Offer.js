import React from "react";
import spanner from "../../images/repair.png";
import spares from "../../images/spares.png";
import sales from "../../images/sales.png";

const Offer = () => {
  const items = [
    {
      id: 1,
      label: "REPAIRS",
      img: spanner,
      tag: "It long established",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      sublink: <a href="#">MORE</a>,
    },
    {
      id: 2,
      label: "SPARES",
      img: spares,
      tag: "It long established",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      sublink: <a href="#">MORE</a>,
    },
    {
      id: 3,
      label: "SALES",
      img: sales,
      tag: "It long established",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      sublink: "MORE",
    },
  ];

  return (
    <div className="grid gap-6 bg-gray-900  md:grid-cols-3 sm:grid-cols-2">
      {items.map((item, index) => {
        return (
          <div className="text-white card " key={index}>
            <p className="mt-10 text-6xl font-semibold text-center text-gray-200 uppercase ">
              {item.label}
            </p>
            <img src={item.img} className="pt-6 mx-auto " alt="pic" />
            <p className="pt-8 text-center text-yellow-500 ">{item.tag}</p>
            <p className="mx-auto text-center">{item.content}</p>
            <a href="#" className="items-center pl-28 hover:text-yellow-500">
              {item.sublink}...
            </a>
          </div>
        );
      })}

      <img
        src="../../images/bottom-bg copy.png"
        className="text-centre"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Offer;
