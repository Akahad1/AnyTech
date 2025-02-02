import { useState } from "react";

const FinanceFuture = () => {
  const [clicked, setClicked] = useState("Customer focused");
  console.log(clicked);
  return (
    <div>
      <div className="bg-white  p-8">
        <div className="text-center">
          <h4 className="text-blue-500 font-semibold">
            TECHNOLOGY BUILT FOR YOU
          </h4>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            The future of finance
          </h1>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setClicked("Customer focused")}
            className={
              clicked == "Customer focused"
                ? `bg-blue-200 text-blue-700 px-4 py-2 rounded-lg  `
                : "text-blue-600"
            }
          >
            Customer focused
          </button>
          <button
            onClick={() => setClicked("Agile and adaptable")}
            className={
              clicked == "Agile and adaptable"
                ? `bg-blue-200 text-blue-700 px-4 py-2 rounded-lg  `
                : "text-blue-600"
            }
          >
            Agile and adaptable
          </button>
          <button
            onClick={() => setClicked("Compliance ready")}
            className={
              clicked == "Compliance ready"
                ? `bg-blue-200 text-blue-700 px-4 py-2 rounded-lg  `
                : "text-blue-600"
            }
          >
            Compliance ready
          </button>
          <button
            onClick={() => setClicked("Secure and safe")}
            className={
              clicked == "Secure and safe"
                ? `bg-blue-200 text-blue-700 px-4 py-2 rounded-lg  `
                : "text-blue-600"
            }
          >
            Secure and safe
          </button>
        </div>
        {/* CUSTOMER FOCUSED */}
        {clicked === "Customer focused" ? (
          <div className=" p-8 mt-10 rounded-xl flex flex-col md:flex-row items-center shadow-xl max-w-7xl mx-auto gap-10 ">
            <div className="md:w-1/2 lg:ml-16">
              <h5 className="text-blue-500 font-semibold">CUSTOMER FOCUSED</h5>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Purpose-built financial services
              </h2>
              <p className="font-semibold text-gray-700 mt-4">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600 mt-4">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behavior and product marketing opportunities.
              </p>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0  lg:ml-32 ">
              <img
                src="../../../public/Image/Screenshot (81).png"
                alt="Financial Services"
                className="rounded-lg shadow-lg lg:w-[440px] "
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* Agile and adaptable */}
        {clicked === "Agile and adaptable" ? (
          <div className=" p-8 mt-10 rounded-xl flex flex-col md:flex-row items-center shadow-xl max-w-7xl mx-auto gap-10 ">
            <div className="md:w-1/2 lg:ml-16">
              <h5 className="text-blue-500 font-semibold">
                Agile and adaptable
              </h5>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Agile and adaptable for growth
              </h2>
              <p className="font-semibold text-gray-700 mt-4">
                Innovate with evolving customer demands through our open
                platform-based technology architecture. Stay ahead of the
                ever-changing financial landscape with a strong focus on
                security, compliance and performance.
              </p>
              <p className="text-gray-600 mt-4">
                Optimise your offerings to unlock new revenue streams and
                deliver an extraordinary customer experience, with digitally
                designed core banking, payment processing and lending
                capabilities.
              </p>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0  lg:ml-32 ">
              <img
                src="../../../public/Image/Screenshot (82).png"
                alt="Financial Services"
                className="rounded-lg shadow-lg lg:w-[440px] "
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Compliance ready */}
        {clicked == "Compliance ready" ? (
          <div className=" p-8 mt-10 rounded-xl flex flex-col md:flex-row items-center shadow-xl max-w-7xl mx-auto gap-10 ">
            <div className="md:w-1/2 lg:ml-16">
              <h5 className="text-blue-500 font-semibold">Compliance ready</h5>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Manage compliance with ease
              </h2>
              <p className="font-semibold text-gray-700 mt-4">
                Navigate through the evolving regulatory landscape with
                confidence by streamlining compliance management—through
                real-time risk monitoring solutions powered by AI and machine
                learning.
              </p>
              <p className="text-gray-600 mt-4">
                Transform your compliance strategy with flexible and diversified
                policy rules, powered by cutting-edge technology that is
                designed for seamless integration with core banking and card
                payment systems.
              </p>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0  lg:ml-32 ">
              <img
                src="../../../public/Image/Screenshot (83).png"
                alt="Financial Services"
                className="rounded-lg shadow-lg lg:w-[440px] "
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Secure and safe*/}
        {clicked == "Secure and safe" ? (
          <div className=" p-8 mt-10 rounded-xl flex flex-col md:flex-row items-center shadow-xl max-w-7xl mx-auto gap-10 ">
            <div className="md:w-1/2 lg:ml-16">
              <h5 className="text-blue-500 font-semibold">Secure and safe</h5>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Highly secure and safe
              </h2>
              <p className="font-semibold text-gray-700 mt-4">
                Discover unparalleled security trusted by financial institutions
                across the globe. Our applications are meticulously developed in
                compliance with international security standards, drawing on 20
                years of technical expertise.
              </p>
              <p className="text-gray-600 mt-4">
                Join over 40 esteemed Fls, each serving more than 200 million
                customers, and benefit from our secure, robust and reliable
                infrastructure.
              </p>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0  lg:ml-32 ">
              <img
                src="../../../public/Image/Screenshot (84).png"
                alt="Financial Services"
                className="rounded-lg shadow-lg lg:w-[440px] "
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FinanceFuture;
