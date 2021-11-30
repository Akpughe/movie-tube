import React from 'react';
const SideNav = ({
  openFav,
  openWatchLater,
  openHome,
  borderColor,
  borderColor2,
  textColor,
  textColor2,
}) => {
  return (
    <nav className="navbar  sm:w-56 w-screen sm:h-screen h-20 sm:flex flex bottom-0 fixed sm:flex-col sm:py-6 py-0 sm:px-0 px-6 border-r-2 z-50">
      <div className="flex justify-center items-center sm:mb-20 mb-0">
        <h3 className="font-bold text-3xl sm:w-full w-24 sm:text-center text-left  text-white ">
          {' '}
          <a className="cursor-pointer" onClick={openHome}>
            <b className=" text-yellow-600">Movie</b> Tube
          </a>
        </h3>
      </div>

      <div>
        <ul className="side flex flex-row sm:flex sm:flex-col sm:h-0 h-full sm:items-start items-center">
          <li
            className={`flex items-center text-white text-center sm:border-l-4 border-l-0 sm:pl-8 pl-2 sm:pr-0 pr-2 cursor-pointer sm:h-10 h-full sm:mx-0 mx-4 ${borderColor} ${textColor}`}
            onClick={openFav}
          >
            {/* <AiOutlineUnorderedList size={25} /> */}
            Favourite
          </li>
          <li
            className={`flex items-center text-white text-center sm:pl-8 pl-2 sm:pr-0 pr-2 sm:my-12 my-0 sm:border-l-4 border-l-0 sm:h-10 h-full cursor-pointer ${borderColor2} ${textColor2}`}
            onClick={openWatchLater}
          >
            {/* <AiOutlineHistory size={25} /> */}
            Watch Later
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
