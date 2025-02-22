import { useState } from "react";
import { Link } from 'react-scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 gap-y-6">
        <h1 className="flex items-center space-x-3">
          <img src="" className="h-8" alt="" />
          <span className="self-center text-3xl font-semibold text-white pr-6">
            Name - Software Engineer
          </span>
        </h1>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex absolute right-6 top-6 items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} md:flex w-full md:w-auto`} id="navbar-default">
          <ul className="text-2xl font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 md:border-0 rounded-lg md:bg-transparent border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="portfolio" 
                smooth={true}
                offset={-110}
                duration={500}
                className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" 
                smooth={true}
                offset={-110} 
                duration={500}
                className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

