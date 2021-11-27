import React, { useState } from 'react';
import {
  AiOutlineUnorderedList,
  AiOutlineHistory,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { RiBarChartBoxLine } from 'react-icons/ri';
const SideNav = ({ openFav, openWatchLater, openHome }) => {
  return (
    <nav className="bg-white w-56 h-screen flex fixed flex-col py-6 rounded-tl-2xl rounded-bl-2xl border-r-2">
      <div className="flex justify-center mb-20">
        <h3>
          {' '}
          <a className="cursor-pointer" onClick={openHome}>
            <b className=" text-yellow-600">Movie</b> Tube
          </a>
        </h3>
      </div>

      <div>
        <ul>
          <li className=" border-l-4 pl-8 cursor-pointer" onClick={openFav}>
            {/* <AiOutlineUnorderedList size={25} /> */}
            Favourite
          </li>
          <li className="pl-8 my-12 cursor-pointer" onClick={openWatchLater}>
            {/* <AiOutlineHistory size={25} /> */}
            Watch Later
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
