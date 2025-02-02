import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaAngleRight } from "react-icons/fa";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white relative">
      <h3 className="absolute top-5 md:top-10 text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-wide text-center">
        Trusted by the Best
      </h3>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mt-10 w-full px-6"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            <FaAngleRight className="inline" />
            {inView ? <CountUp start={0} end={20} duration={3} /> : 0}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Years of Experience
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            {inView ? <CountUp start={0} end={40} duration={3} /> : 0}+
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Financial Institutions
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            <FaAngleRight className="inline" />
            {inView ? <CountUp start={0} end={200} duration={3} /> : 0}m
          </h2>
          <p className="text-gray-600 text-sm md:text-base">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
