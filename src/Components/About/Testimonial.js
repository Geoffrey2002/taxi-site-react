import React from "react";
import arrow from "../../images/bottom-bg copy.png";

const Testimonial = () => {
  return (
    <>
      <div className="items-center text-center bg-gray-800 h-72">
        <h4 className="pt-20 text-4xl text-gray-600">TESTIMONIALS</h4>
        <p className="text-gray-600">"The pain itself is the love"</p>
        <h5 className="text-yellow-500">-LOREM IPSUM</h5>
        <img className="flex justify-center pt-20 mx-auto" src={arrow} alt="" />
      </div>
    </>
  );
};

export default Testimonial;
