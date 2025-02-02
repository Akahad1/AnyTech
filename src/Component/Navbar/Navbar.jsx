import { useState } from "react";
import { MoreVertical, X } from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative">
      <div className="bg-[rgb(0,89,194)]   bg-no-repeat bg-[url('../../../public/Image/WaveLinesDesktop1.svg')] bg-cover h-96">
        <nav className="bg-[rgb(0,89,194)] p-4 text-white  w-full z-50">
          <div className="container max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl justify-start lg:3xl font-bold">ANYTECH</h1>
            <div className="hidden md:flex gap-6 justify-center">
              <Link className="text-xl">Solutions</Link>
              <Link to="/about" className="text-xl pb-2 hover:border-b-1">
                About
              </Link>
              <Link to="/services" className="text-xl pb-2 hover:border-b-1 ">
                Services
              </Link>
            </div>
            <div className="justify-end hidden md:inline lg:inline">
              <Link to="/contact-us">
                {" "}
                <button className=" border border-white p-3 font-semibold text-xl hover:bg-white hover:text-blue-700 ">
                  Contact Us
                </button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <MoreVertical size={28} />
            </button>
          </div>

          {location.pathname === "/contact-us" ? (
            <div className="">
              <p className="lg:ml-40 mt-12 text-2xl font-semibold text-white ">
                Contact US
              </p>
              <p className="lg:ml-40 font-semibold text-5xl mt-7">Let’s talk</p>
              <p className="lg:ml-40  mt-7">
                Have questions about building the next generation of banking
                experiences, our pricing,
                <br /> or our customer success stories?
              </p>
            </div>
          ) : location.pathname === "/about" ? (
            <div className="">
              <p className=" lg:ml-40 mt-12 text-2xl  text-blue-300 font-semibold ">
                ABOUT US
              </p>
              <p className="lg:ml-40 mt-7 text-3xl lg:text-6xl">
                Paving the way <br />
                ahead for finance
              </p>
              <p className="lg:ml-40 mt-7 font-semibold">
                We’re building technologies that will power the future of <br />
                banking and beyond
              </p>
            </div>
          ) : (
            <div className="">
              <p className="lg:text-6xl lg:ml-40 mt-12 text-2xl font-semibold text-white ">
                Embrace the <br />
                future of finance
              </p>
              <p className="lg:ml-40 mt-7">
                Reimagine financial services with AnyTech’s open platform,
                distributed <br /> banking solution that powers transformation
              </p>
              <button className="mt-7 lg:ml-40 bg-orange-400 px-6 p-3">
                Reach Out to Us
              </button>
            </div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-72 w-full bg-blue-700 p-5 transform ${
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
              <Link
                to="/about"
                href="#"
                className="text-white hover:text-gray-300"
              >
                About
              </Link>

              <Link
                to="/about"
                href="#"
                className="text-white hover:text-gray-300"
              >
                Services
              </Link>
              <Link to="/contact-us">
                <button className=" border border-white p-3 font-semibold text-xl hover:bg-white hover:text-blue-700 ">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        </nav>

        {/* SVG at the bottom of the background section */}
        <svg
          className="absolute hidden lg:flex md:flex  "
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
