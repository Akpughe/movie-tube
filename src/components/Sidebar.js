import React from 'react';
const SideNav = ({ openFav, openWatchLater, openHome, borderColor, borderColor2, textColor, textColor2 }) => {
  return (
    <nav className="navbar bg-white sm:w-56 w-screen sm:h-screen h-20 sm:flex flex bottom-0 fixed sm:flex-col py-6 sm:px-0 px-6 rounded-tl-2xl rounded-bl-2xl border-r-2">
      <div className="flex justify-center mb-20">
        <h3>
          {' '}
          <a className="cursor-pointer" onClick={openHome}>
            <b className=" text-yellow-600">Movie</b> Tube
          </a>
        </h3>
      </div>

      <div>
        <ul className='flex flex-row sm:flex sm:flex-col'>
          <li className={`sm:border-l-4 border-l-0 pl-8 cursor-pointer ${borderColor} ${textColor}` } onClick={openFav}>
            {/* <AiOutlineUnorderedList size={25} /> */}
            Favourite
          </li>
          <li className={`pl-8 sm:my-12 my-0 sm:border-l-4 border-l-0 cursor-pointer ${borderColor2} ${textColor2}`} onClick={openWatchLater}>
            {/* <AiOutlineHistory size={25} /> */}
            Watch Later
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
