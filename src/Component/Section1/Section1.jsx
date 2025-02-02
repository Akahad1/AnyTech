import image from "../../../public/Image/Image.png";
const Section1 = () => {
  return (
    <div className="">
      <div className="lg:flex md:flex lg:justify-center lg:mt-52 md:gap-11 gap-52 md:mt-20 ml-4 mr-4">
        <div>
          <p className="text-blue-600 font-semibold lg:mt-24  mt-10 ">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h1 className="mt-8 lg:text-6xl text-3xl  font-semibold">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>
          <p className="mt-8 font-semibold">
            AnyTech is revolutionising financial technology by introducing{" "}
            <br />
            innovative and real-time transaction account processing
            capabilities, <br /> specifically designed for retail financial
            services.
          </p>
          <p className="mt-8">
            Our modern approach surpasses traditional banking and card
            processing <br />
            systems, empowering you with the most advanced technology for
            lasting <br /> success.
          </p>
        </div>
        <img
          src={image}
          className="lg:h-[600px] md:h-96 lg:ml-32 mt-5 lg:mt-0"
        ></img>
      </div>
    </div>
  );
};

export default Section1;
