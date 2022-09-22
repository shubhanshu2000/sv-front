import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <div>
        <nav className="flex justify-center bg-blue-400 py-2">
          <ul className="flex text-white font-medium  items-center justify-around  w-7/12">
            <li>Technology</li>
            <li>General News</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Celebrity</li>
            <li>Entertainment</li>
            <li className="flex items-center">
              More <BsChevronDown />
            </li>
            <li>
              <AiOutlineSearch />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
