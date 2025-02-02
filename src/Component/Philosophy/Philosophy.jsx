import line4 from "../../../public/Image/Line4.svg";
import line2 from "../../../public/Image/Line2.svg";

import line3 from "../../../public/Image/Line3.svg";
const Philosophy = () => {
  return (
    <div className="mb-24">
      <div className="lg:mt-20 mt-10">
        <p className="text-center text-xl text-blue-600">OUR PHILOSOPHY</p>
        <p className="text-center mt-3 text-2xl lg:text-5xl">
          Human-centred innovation
        </p>
      </div>
      <div className="max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 mt-10 ">
          <div className="col-span-2"></div>
          {/* Artificial Intelligence */}
          <div className=" col-span-4 lg:p-0 p-5 bg-gradient-to-r from-[rgb(232,245,254)] to-base-200 lg:ml-[-35px]">
            <div className=" p-6 lg:ml-20 ml-15 bg-white w-60  mt-6 lg:mt-32 rounded-xl shadow-sm md:mx-auto">
              <h4 className="text-blue-600 font-semibold text-sm text-center">
                CORE TECH
              </h4>
              <h3 className="text-xl font-bold text-center text-gray-900">
                Artificial Intelligence
              </h3>
            </div>
            <p className="text-gray-600 text-sm mt-2 lg:ml-24 lg:w-52 text-center">
              Using AI/ML to upgrade legacy processes, reduce cost, and improve
              efficiency.
            </p>
          </div>
          <img
            src={line4}
            className="col-span-2 hidden lg:inline lg:w-32 lg:mt-48 ml-2 l"
            alt=""
          />
          <img
            className="lg:ml-16 lg:hidden  mt-3 mb-3 h-16 flex mx-auto"
            src="../../../public/Image/Line1.svg"
            alt=""
          />
          <div className="col-span-3 bg-[rgb(248,252,255)] lg:ml-[-40px] p-2">
            <img
              src={line2}
              className="transform rotate-90 lg:inline hidden  scale-y-[-1] ml-40 mt-5"
              alt=""
            />
            {/* Blockchain */}
            <div className="flex lg:inline">
              <img
                src={line2}
                className="transform lg:hidden inline mt-20 md:h-32 md:ml-32 h-18 ml-3"
                alt=""
              />
              <div className="bg-white mx-auto md:h-24 h-24  lg:w-42 p-6  w-42">
                <h4 className="text-orange-600 font-semibold text-sm ">
                  MECHANISM
                </h4>
                <h3 className="text-xl font-bold text-gray-900">Blockchain</h3>
              </div>
              <img
                src={line3}
                className="transform lg:hidden inline md:h-32 md:mr-32 h-18 mt-20 mr-3  "
                alt=""
              />
            </div>

            <img
              src={line3}
              className="transform hidden lg:inline rotate-90  scale-y-[-1] ml-40"
              alt=""
            />
          </div>
          <div className=" bg-gradient-to-r from-base-200 to-[rgb(240,249,255)] lg:w-80 p-3">
            {/* INFRASTRUCTURE */}
            <div className="flex lg:inline">
              <div className="lg:flex">
                <div className="bg-white p-4 lg:ml-0 md:ml-14 ml-2">
                  <h4 className="text-teal-600 font-semibold text-center text-sm">
                    INFRASTRUCTURE
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    Cloud
                  </h3>
                </div>
                <p className="text-gray-600  text-xs mt-2 ml-3 text-center">
                  Enhanced security by eliminating intermediaries.
                </p>
              </div>
              <img
                className="lg:ml-16  mt-16 hidden lg:inline mb-16 h-24"
                src="../../../public/Image/Line1.svg"
                alt=""
              />
              <img
                className=" md:ml-24 md:mr-24  mt-6 mb-16 lg:hidden inline  w-12 md:w-32"
                src={line4}
                alt=""
              />
              {/* RESOURCE */}
              <div className="lg:flex">
                <div className="bg-white p-3 lg:w-72 md:w-52">
                  <h4 className="text-yellow-600 text-center font-semibold text-sm">
                    RESOURCE
                  </h4>
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    Data
                  </h3>
                </div>
                <p className="text-gray-600 text-center text-xs md:ml-0 ml-3 mt-2">
                  Valuable, actionable insights from massive data sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
