import React from "react";
import img1 from "../../images/slider1.jpg";
import img2 from "../../images/slider2.jpg";
import img3 from "../../images/slider3.jpg";
import img4 from "../../images/slider4.jpg";
import img5 from "../../images/slider5.jpg";
import img6 from "../../images/slider2.jpg";

const Content = () => {
  const items = [
    {
      id: 1,
      img: img1,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
    {
      id: 2,
      img: img2,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
    {
      id: 3,
      img: img3,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
    {
      id: 4,
      img: img4,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
    {
      id: 5,
      img: img5,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
    {
      id: 6,
      img: img6,
      title: "AENEAN NONUMMY HENDRERIT",
      text: "It's the entrance to the lake. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. With allies and children, the mountains shall labor in their homes and in great gods.",
      link: "READ MORE",
    },
  ];
  return (
    <>
      <h3 className="pb-6 mt-8 ml-16 text-4xl font-semibold text-gray-600 uppercase">
        What we do
      </h3>
      <div className="container grid gap-8 pb-10 ml-16 md:grid-cols-3 sm:grid-cols-2">
        {items.map((item, index) => {
          return (
            <div className="" key={index}>
              <img src={item.img} alt="" />
              <div className="text-2xl text-left text-gray-600 hover:text-yellow-600 ">
                {item.title}
              </div>
              <div className="pb-3 text-gray-400">{item.text}</div>
              <a
                href=""
                className="px-2 py-2 mt-4 border border-opacity-75 hover:bg-yellow-300 hover:text-white "
              >
                {item.link}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
