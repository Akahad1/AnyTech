import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navber2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div>
      <nav className="p-4 text-blue-600  w-full ">
        <div className="shadow-xl pb-3">
          <div className="container max-w-6xl mx-auto flex justify-between items-center ">
            <h1 className="text-xl t justify-start lg:3xl font-bold">
              ANYTECH
            </h1>
            <div className="hidden md:flex gap-6 justify-center">
              <div className="flex  ">
                <div className="relative group   cursor-pointer">
                  <p className="text-center  text-xl">Solutions</p>

                  <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-2xl s rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
                    <Link to="/AnyCaaS">
                      <p className="p-2 text-black rounded-md">AnyCaaS</p>
                    </Link>
                    <Link to="/AnyBaaS">
                      <p className="p-2  text-black rounded-md">AnyBaaS</p>
                    </Link>
                    <Link to="/AnyPaaS">
                      <p className="p-2 text-black  rounded-md">AnyPaaS</p>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-xl pb-2 hover:border-b-1">
                About
              </Link>
              <Link to="/about" className="text-xl pb-2 hover:border-b-1 ">
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
        </div>

        {location.pathname === "/AnyCaaS" ? (
          <div className="bg-no-repeat bg-[url('../../../../public/Image/WaveLinesDesktop3.svg')] bg-cover h-96">
            <p className="lg:ml-40 mt-12 text-2xl font-semibold text-blue-500 ">
              our solutions
            </p>
            <p className="lg:ml-40 font-semibold lg:text-6xl mt-7">
              Robust card issuance <br />
              and management
            </p>
            <button className="mt-10 lg:ml-40 text-white p-3 lg:rounded-2xl bg-blue-700 px-7 text-xl">
              AnyCaaS
            </button>
          </div>
        ) : location.pathname === "/AnyBaaS" ? (
          <div className="bg-no-repeat bg-[url('../../../../public/Image/WaveLinesDesktop3.svg')] bg-cover h-96">
            <p className="lg:ml-40 mt-12 text-2xl font-semibold text-blue-500 ">
              our solutions
            </p>
            <p className="lg:ml-40 font-semibold lg:text-6xl mt-7">
              High-velocity <br />
              payment processing
            </p>
            <button className="mt-10 lg:ml-40 text-white p-3 lg:rounded-2xl bg-blue-700 px-7 text-xl">
              AnyBaaS
            </button>
          </div>
        ) : location.pathname === "/AnyPaaS" ? (
          <div className="bg-no-repeat bg-[url('../../../../public/Image/WaveLinesDesktop3.svg')] bg-cover h-96">
            <p className="lg:ml-40 mt-12 text-2xl font-semibold text-blue-500 ">
              our solutions
            </p>
            <p className="lg:ml-40 font-semibold lg:text-6xl mt-7">
              Banking redesignedbr <br />
              for innovation
            </p>
            <button className="mt-10 lg:ml-40 text-white p-3 lg:rounded-2xl bg-blue-700 px-7 text-xl">
              AnyPaaS
            </button>
          </div>
        ) : (
          <></>
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
            <MoreVertical className="" size={28} />
          </button>
          <nav className="flex flex-col gap-6 mt-10">
            <div className="flex  ">
              <div className="relative group   cursor-pointer">
                <p className="text-center  text-xl">Solutions</p>

                <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-2xl s rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
                  <Link to="/AnyCaaS">
                    <p className="p-2 text-black rounded-md">AnyCaaS</p>
                  </Link>
                  <Link to="/AnyBaaS">
                    <p className="p-2  text-black rounded-md">AnyBaaS</p>
                  </Link>
                  <Link to="/AnyPaaS">
                    <p className="p-2 text-black  rounded-md">AnyPaaS</p>
                  </Link>
                </div>
              </div>
            </div>
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
              <button className=" border border-white p-3 font-semibold text-xl hover:bg-white  ">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navber2;
