/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const News = () => {
  return (
    <div className=" flex flex-col w-full h-full items-center gap-5 py-20 bg-blue-950 mt-44">
      <div className="text-4xl font-bold py-10 text-white">Media Centre</div>
      <div className="flex w-full  justify-center px-5 gap-5 flex-wrap ">
        <div className=" w-full md:w-2/6 h-full  bg-white">
          <div className="w-full h-2/5 ">
            <p className="z-50 absolute text-white px-5 font-bold text-lg">
              News
            </p>
            <img
              alt="image fil"
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full  "
            />
          </div>
          <div className="w-full h-full px-5 py-5">
            <p className="py-5 text-gray-500 font-semibold ">13 April 2023</p>
            <h3 className="text-2xl font-bold pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            </h3>
            <div className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              velit doloribus ipsam error, libero quibusdam, quam blan
            </div>

            <a href="#" className="py-10 flex items-center text-blue-400">
              <BsArrowRightCircle size={30} />
              Find out more
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/6 h-full  bg-white">
          <div className="w-full h-2/5 ">
            <p className="z-50 absolute text-white px-5 font-bold text-lg">
              News
            </p>
            <img
              alt="image fil"
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full  "
            />
          </div>
          <div className="w-full h-full px-5 py-5">
            <p className="py-5 text-gray-500 font-semibold ">13 April 2023</p>
            <h3 className="text-2xl font-bold pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            </h3>
            <div className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              velit doloribus ipsam error, libero quibusdam, quam blan
            </div>

            <a href="#" className="py-10 flex items-center text-blue-400">
              <BsArrowRightCircle size={30} />
              Find out more
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/6 h-full  bg-white">
          <div className="w-full h-2/5 ">
            <p className="z-50 absolute text-white px-5 font-bold text-lg">
              News
            </p>
            <img
              alt="image fil"
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full  "
            />
          </div>
          <div className="w-full h-full px-5 py-5">
            <p className="py-5 text-gray-500 font-semibold ">13 April 2023</p>
            <h3 className="text-2xl font-bold pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            </h3>
            <div className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              velit doloribus ipsam error, libero quibusdam, quam blan
            </div>

            <a href="#" className="py-10 flex items-center text-blue-400">
              <BsArrowRightCircle size={30} />
              Find out more
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/6 h-full  bg-white">
          <div className="w-full h-2/5 ">
            <p className="z-50 absolute text-white px-5 font-bold text-lg">
              News
            </p>
            <img
              alt="image fil"
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full  "
            />
          </div>
          <div className="w-full h-full px-5 py-5">
            <p className="py-5 text-gray-500 font-semibold ">13 April 2023</p>
            <h3 className="text-2xl font-bold pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            </h3>
            <div className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              velit doloribus ipsam error, libero quibusdam, quam blan
            </div>

            <a href="#" className="py-10 flex items-center text-blue-400">
              <BsArrowRightCircle size={30} />
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
