const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0059C2"
          className="top-0"
          fillOpacity="1"
          d="M0,64L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[rgb(0,89,194)]  bg-no-repeat  bg-cover h-80 ">
        <p className="text-2xl lg:text-5xl lg:ml-32 text-white pt-6 mb-6 font-semibold ml-3">
          Legacy no longer
        </p>
        <p className="lg:ml-32 ml-3 text-white text-xl font-semibold">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <button className="mt-7  ml-3 lg:ml-32 bg-orange-400 px-6 p-3">
          Contact Us
        </button>
      </div>
      <footer className="bg-[#031d3c] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-white">ANY</span>
              <span className="text-gray-300">TECH</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4 md:mt-0">
              <a href="#" className="text-teal-400 font-semibold">
                Our Solutions
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                AnyCaaS
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                AnyBaaS
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                AnyPaaS
              </a>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-6 border-t border-gray-600 pt-4 text-center text-xs text-gray-400">
            <p>
              <span className="text-teal-400 font-semibold">
                ©2023 All rights reserved.
              </span>{" "}
              Any Technology Pte Ltd.
            </p>
            <a href="#" className="text-teal-400 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
