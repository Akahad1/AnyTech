import { useState } from "react";
import { MoreVertical, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="lg:bg-[rgb(0,89,194)] bg-no-repeat lg:bg-[url('../../../public/Image/WaveLinesDesktop1.svg')] bg-cover lg:h-96">
        <nav className="bg-[rgb(0,89,194)] p-4 text-white fixed w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Brand</h1>
            <div className="hidden md:flex gap-6">
              <a href="#" className="hover:text-gray-200 ">
                Home
              </a>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
              <a href="#" className="hover:text-gray-200">
                Services
              </a>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <MoreVertical size={28} />
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-64 w-full bg-blue-700 p-5 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6 mt-10">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>
        </nav>

        {/* SVG at the bottom of the background section */}
        <svg
          className="absolute hidden lg:flex md:flex mt-80 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0059C2"
            fillOpacity="1"
            d="M0,128L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
