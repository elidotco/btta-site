import React from "react";

const Navbar = () => {
  const menu = ["Home", "About US", "Gallery", "media"];
  return (
    <div className="w-full h-24 border flex items-center justify-between  border-bottom-black  px-20 ">
      <div className="logo">Logo</div>
      <div className="flex flex-row items-center gap-20">
        <ul className="flex flex-row gap-5 text-lg font-normal">
          {menu.map((item) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
        <a className="w-28 h-12 bg-[#fba500] flex items-center justify-center border rounded-3xl">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
