import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

  return (
    <nav className=" px-3 py-5 flex  items-center mobile-menu justify-between ">
      <Link to="/" className=" font-bold text-3xl hover:text-[#1cb95c]" id="logo">
        Ecoyaan
      </Link>

      <ul className="hidden md:flex space-x-4 hidden-menu  font-normal">
        <li>
          <Link to="/" className="hover:text-[#1cb95c] text-lg">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#1cb95c] text-lg">About us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#1cb95c] text-lg">Career</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#1cb95c] text-lg">Sell on Ecoyaan</Link>
        </li>
      </ul>

      <button class="bg-white hover:bg-green-300 transition duration-300 ease-in-out text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded-full shadow text-base">
        Join
      </button>

    </nav>
  )
}

export default Header
