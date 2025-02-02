const Section2 = () => {
  const obj = [
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
