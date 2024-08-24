import React from "react";
import { SlCheck, SlCalender } from "react-icons/sl";
import { FaClipboardCheck, FaCrown } from "react-icons/fa";

const StatsSection: React.FC = () => {
  return (
    <section
      className="text-white py-12 bg-cover bg-center bg-local bg-transparent opacity-80 "
      style={{ backgroundImage: `url('/post-3 (1).jpg')` }}
    >
      <div className="container mx-auto flex flex-wrap justify-center bg-local ">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
          <div className=" bg-white rounded-full p-4 mb-4">
            <i className="fa-solid fa-check text-4xl text-blue-600">
              <SlCheck />
            </i>
          </div>
          <h3 className="text-3xl font-extrabold">0</h3>
          <p>WORKS COMPLETED</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <i className="fa-regular fa-calendar text-4xl text-blue-600">
              <SlCalender />
            </i>
          </div>
          <h3 className="text-2xl font-extrabold">0</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <i className="fa-solid fa-person text-4xl text-blue-600">
              <FaClipboardCheck />
            </i>
          </div>
          <h3 className="text-2xl font-extrabold">0</h3>
          <p>WORKS COMPLETED</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-4 mb-4">
            <i className="fa-solid fa-medal text-4xl text-blue-600">
              <FaCrown />
            </i>
          </div>
          <h3 className="text-2xl font-extrabold">0</h3>
          <p>WORKS COMPLETED</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
