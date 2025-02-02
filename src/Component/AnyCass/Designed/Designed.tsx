import React from "react";

const Designed = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-24">
        <p className="text-center  lg:text-2xl text-xl text-blue-500">
          Solutions
        </p>
        <p className="text-center lg:text-4xl text-2xl">
          Designed for your needs
        </p>
      </div>
      <div className="lg:flex mb-10  mt-24 gap-10">
        <div className="w-1/2 lg:p-10 p-5 shadow-2xl hover:border hover:border-blue-800 hover:rounded-3xl">
          <p className=" lg:text-5xl text-2xl">
            Banking redesigned for innovation
          </p>
          <p className="text-lg mt-16">
            Dive into the future of banking with our Banking-as-a-Service (BaaS)
            platform that gives you the tools you need to scale, innovate and
            adapt in today’s fast-paced digital environment.
          </p>
          <button className="border-blue-400 border p-3 px-9 mt-20 rounded-full">
            Anybass
          </button>
        </div>
        <div className="w-1/2 lg:p-10 p-5 shadow-2xl hover:border hover:border-blue-800 hover:rounded-3xl">
          <p className=" lg:text-5xl text-2xl">
            High-velocity payment processing
          </p>
          <p className="text-lg mt-16">
            Enhance your payment processing capabilities with our
            Payment-as-a-Service (PaaS) solution. Experience our agile, scalable
            and secure infrastructure that facilitates all types of transactions
            with ease.
          </p>
          <button className="border-blue-400 border p-3 px-9 mt-20 rounded-full">
            Anybass
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designed;
