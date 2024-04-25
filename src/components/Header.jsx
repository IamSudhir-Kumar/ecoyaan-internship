import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { gsap } from "gsap";
import { useEffect } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    gsap.from("nav", { opacity: 0, duration: 1, delay: 0.5, ease: "power2.out" });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3 flex items-center justify-between bg-[#436850] rounded-full">
      <Link to="/" className="font-bold text-3xl text-white hover:text-[#1cb95c]" id="logo">
        Ecoyaan
      </Link>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white hover:text-[#1cb95c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} font-normal text-white`}>
        <li>
          <Link to="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : 'hover:text-[#1cb95c] hover:font-semibold'}`}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`text-lg ${location.pathname === '/about' ? 'font-semibold' : 'hover:text-[#1cb95c] hover:font-semibold'}`}>About us</Link>
        </li>
        <li>
          <Link to="/contact" className={`text-lg ${location.pathname === '/contact' ? 'font-semibold' : 'hover:text-[#1cb95c] hover:font-semibold'}`}>Career</Link>
        </li>
        <li>
          <Link to="/contact" className={`text-lg ${location.pathname === '/contact' ? 'font-semibold' : 'hover:text-[#1cb95c] hover:font-semibold'}`}>Sell on Ecoyaan</Link>
        </li>
      </ul>

      <button className="bg-white hover:bg-green-300 transition duration-300 ease-in-out text-[#436850] font-semibold py-2 px-10 border border-white rounded-full shadow text-base">
        Join
      </button>

    </nav>
    
  )
}

export default Header;
