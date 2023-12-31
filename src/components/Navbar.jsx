import React from "react";
import { FaSearch } from "react-icons/fa";
// rojo mas clarito #ff5247
// rojo del icono #e60023

const Navbar = ({ handleSearch }) => {
  return (
    <div className="px-7 py-3 flex items-center justify-between">
      <div className="flex flex-row gap-1 items-center">
        <svg
          className="gUZ GjR U9O kVc"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          aria-label="Pinterest"
          role="img"
        >
          <path
            fill="#e60023"
            d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"
          ></path>
        </svg>
        <div>
          <h2 className="text-[#e60023] text-[18px] tracking-tighter">
            Pinterest
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-row items-center ml-5 gap-5">
        <nav className="flex justify-start">
          <ul className="flex gap-3 items-center text-[15px] [&>li]:cursor-pointer">
            <li className="hover:bg-[#f2f1f1] text-sm rounded-md p-2">Watch</li>
            <li className="hover:bg-[#f2f1f1] text-sm rounded-md p-2">Shop</li>
            <li className="hover:bg-[#f2f1f1] text-sm rounded-md p-2 ">
              Explore
            </li>
          </ul>
        </nav>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="border-[2px] border-gray-300 rounded-full py-[10px] px-10 flex-grow outline-none text-sm"
          placeholder="Search for easy dinners, fashion, etc."
        />
        <FaSearch className="absolute text-gray-500 left-[24.8%]" />
        <div className="flex flex-row items-center gap-3">
          <button className="px-4 py-3 rounded-full bg-[#efefef] hover:bg-[#d8d7d7] text-sm font-medium hover:">
            Log in
          </button>
          <button className="px-4 py-3 rounded-full bg-[#e60024] hover:bg-[#ad081b] text-sm text-white font-medium">
            Sign up
          </button>
          <button>
            <svg
              className="gUZ ztu U9O kVc"
              height="12"
              width="12"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path
                fill="gray"
                d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
