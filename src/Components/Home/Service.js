import React from "react";
import car from "../../images/car.png";
const Service = () => {
  return (
    <section className="grid bg-yellow-400 ">
      <div className="absolute w-3/4 pl-32">
        <p className="pt-10 text-6xl font-bold text-white uppercase">
          The largest taxi services
        </p>
        <p className="pt-10 font-extrabold text-white uppercase md:max-w-2xl text-8xl">
          city taxi
        </p>
        <p className="text-6xl text-white pl-18 text-centre ">company</p>
      </div>
      <div className="flex justify-end pt-32 pr-28">
        <img src={car} alt="" srcset="" />
      </div>

      <div className="pb-12 ml-28 pl-18">
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-white border border-transparent hover:bg-black hover:text-white "
        >
          WHAT WE DO
        </button>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent hover:bg-white hover:text-black"
        >
          JOIN US
        </button>
      </div>
    </section>
  );
};

export default Service;
