/* eslint-disable no-dupe-else-if */
/* eslint-disable no-constant-condition */
import { useLocation } from "react-router";

const Section2 = () => {
  const location = useLocation();
  let obj;
  // eslint-disable-next-line no-cond-assign
  if ((location.pathname = "/")) {
    obj = [
      {
        title: "Full-suite solutions",
        describe:
          "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      },
      {
        title: "Simplify the complex",
        describe:
          "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      },
      {
        title: "Cutting-edge tech",
        describe:
          "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      },
    ];
    // eslint-disable-next-line no-cond-assign
  } else if ((location.pathname = "/about")) {
    obj = [
      {
        title: "Experts in technology and finance",
        describe:
          "With our team's deep expertise in the finance and tech sectors, we are catalysts for change, paving the way for innovation and strategic reorientation, shaping the future of finance.",
      },
      {
        title: "Empowerment through technology",
        describe:
          "Empowering more than 40 financial institutions to transform in a digital-first world, our innovative platform enables banks and financial institutions to develop customer-centric financial products and offerings.",
      },
      {
        title: "Understanding evolving needs",
        describe:
          "By staying at the forefront of technology and understanding the evolving needs of the industry, we strive to provide cutting-edge solutions that drive efficiency, enhance user experiences, and enable financial inclusion.",
      },
    ];
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  max-w-7xl  lg:mx-auto mr-3 ml-3 mb-20">
        {obj.map((item) => (
          <div key={item.title} className="bg-[#F8FCFF] p-5">
            <p className="text-xl lg:text-2xl">{item.title}</p>
            <p className="mt-5">{item.describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
