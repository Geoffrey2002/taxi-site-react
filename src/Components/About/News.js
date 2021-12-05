import React from "react";
import img1 from "../../images/slider2.jpg";
import img2 from "../../images/slider1.jpg";
import img3 from "../../images/slider4.jpg";

const News = () => {
  const data = [
    {
      id: 1,
      imgSrc: img1,
      title: "LATEST PLANS",
      text: "The pain is the main reason to love the adiing elite. In the weekend the mourning of the eros and the real estate,Each fear was easy. not feu, some more vivid than that. Until the pain of the bed or the boxes tingl",
    },
    {
      id: 2,
      imgSrc: img2,
      title: "FREE PLANS",
      text: "The pain is the main reason to love the adiing elite. In the weekend the mourning of the eros and the real estate,Each fear was easy. not feu, some more vivid than that. Until the pain of the bed or the boxes tingl",
    },
    {
      id: 3,
      imgSrc: img3,
      title: "FREE PLANS",
      text: "The pain is the main reason to love the adiing elite. In the weekend the mourning of the eros and the real estate,Each fear was easy. not feu, some more vivid than that. Until the pain of the bed or the boxes tingl",
    },
  ];

  return (
    <>
      <h3 className="pb-6 mt-8 ml-16 text-4xl font-semibold text-gray-600 uppercase">
        latest-news
      </h3>
      <div className="container grid gap-8 pb-10 ml-16 md:grid-cols-3 sm:grid-cols-2">
        {data.map((data, index) => {
          return (
            <div className="" key={index}>
              <img src={data.imgSrc} alt="" />
              <div className="text-2xl text-center text-gray-600 hover:text-yellow-600 ">
                {data.title}
              </div>
              <div className="text-gray-400">{data.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
