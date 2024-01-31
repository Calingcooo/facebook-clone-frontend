import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { BiJoystickAlt } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import header_logo from "../assets/header_logo.webp";

const Header = () => {
  const [searchInputFocus, setSearchInputFocus] = useState(false);

  const middleHeader = [
    {
      id: 1,
      icon: <FiHome size="25" />,
    },
    {
      id: 2,
      icon: <MdOutlineOndemandVideo size="25" />,
    },
    {
      id: 3,
      icon: <IoStorefrontOutline size="25" />,
    },
    {
      id: 4,
      icon: <GrGroup size="25" />,
    },
    {
      id: 5,
      icon: <BiJoystickAlt size="25" />,
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center bg-zinc-800 px-5 py-2 h-14">
      <div className="flex gap-2 h-full w-72">
        {searchInputFocus ? (
          <FaArrowLeft size="20" className="h-full text-zinc-400" />
        ) : (
          <img src={header_logo} className="h-full" />
        )}
        <div className="flex items-center w-full">
          {searchInputFocus ? null : (
            <IoIosSearch size="20" className="absolute ml-2 text-zinc-400" />
          )}
          <input
            className={`bg-neutral-700 rounded-full h-full w-full text-md focus:outline-none ${
              searchInputFocus ? "px-5" : "pl-8"
            }`}
            placeholder="Search Facebook"
            onFocus={() => setSearchInputFocus(true)}
            onBlur={() => setSearchInputFocus(false)}
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-neutral-300">
        {middleHeader.map((icon) => {
          return (
            <div
              key={icon.id}
              className="flex items-center justify-center w-32 h-full hover:bg-zinc-700  p-3 cursor-pointer rounded-lg"
            >
              {" "}
              {icon.icon}{" "}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 justify-center text-white">
        <div className="p-2 bg-zinc-700 hover:bg-zinc-500 cursor-pointer rounded-full">
          <TbGridDots size="25" />
        </div>
        <div className="p-2 bg-zinc-700 hover:bg-zinc-500 cursor-pointer rounded-full">
          <FaFacebookMessenger size="25" />
        </div>
        <div className="p-2 bg-zinc-700 hover:bg-zinc-500 cursor-pointer rounded-full">
          <FaBell size="25" />
        </div>
        <div className="p-2 relative rounded-full">
          <img src="#" className="w-full" />
          <IoIosArrowDown className="absolute" />
        </div>
      </div>
    </div>
  );
};

export default Header;
