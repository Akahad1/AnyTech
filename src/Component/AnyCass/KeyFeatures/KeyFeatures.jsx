/* eslint-disable react/no-unknown-property */
const KeyFeatures = () => {
  const obj = [
    {
      title: "Multi-Channel Payment Processing",
      describe:
        "AnyPaaS supports a wide range of payment channels including credit/debit cards, bank transfers, e-wallets, and mobile payments, providing your customers with a variety of payment options.",
    },
    {
      title: "Seamless API Integration",
      describe:
        "Our robust APIs ensure seamless integration with your existing banking systems and applications, enabling real-time data exchange and interoperability.",
    },
    {
      title: "Real-time Transaction Monitoring",
      describe:
        "Track and monitor transactions in real-time with our advanced analytics dashboard. Gain insights into transaction trends, customer behaviour, and potential fraudulent activities.",
    },
    {
      title: "Advanced Fraud Detection",
      describe:
        "Leverage our AI-powered fraud detection system that continuously monitors transactions, providing instant alerts on suspicious activities to mitigate risks.",
    },
    {
      title: "Regulatory Compliance",
      describe:
        "AnyPaaS is fully compliant with all relevant payment regulations including PCI DSS, ensuring secure and legal payment processing.",
    },
    {
      title: "Scalable Infrastructure",
      describe:
        "Our platform is built to handle high-volume transactions, making it ideal for large financial institutions aiming for growth and expansion.",
    },
  ];
  const benefits = [
    {
      title: "Efficient Processing",
      describe:
        "With AnyPaaS, you can process payments faster and more efficiently, enhancing your operational efficiency and customer satisfaction.",
    },
    {
      title: "Agility & Innovation",
      describe:
        "Stay ahead of the competition by quickly adapting to new payment trends and technologies, meeting the evolving needs of your customers.",
    },
    {
      title: "Cost-effective",
      describe:
        "AnyPaaS eliminates the need for heavy upfront investments in payment infrastructure, allowing you to only pay for the services you use.",
    },
    {
      title: "Risk Management",
      describe:
        "Our advanced fraud detection capabilities help mitigate payment fraud risks, protecting your institution and your customers from potential financial losses.",
    },
    {
      title: "Customer Experience",
      describe:
        "Provide your customers with a variety of secure, convenient, and fast payment options, enhancing their overall banking experience",
    },
  ];
  return (
    <div className="mt-24">
      <div>
        <p className="text-center text-blue-500 font-bold"> Key Features</p>
        <p className="lg:text-4xl mb-10 font-semibold text-center">
          Seamless and secure experiences
        </p>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  max-w-7xl  lg:mx-auto mr-3 ml-3 mb-20 ">
            {obj.map((item) => (
              <div key={item.title} className="bg-[#F8FCFF] p-5">
                <p className="text-xl lg:text-2xl">{item.title}</p>
                <p className="mt-5">{item.describe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-blue-500 font-bold mt-24"> Benefits</p>
        <p className="lg:text-4xl mb-10 font-semibold text-center">
          Fast and efficient payments
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  max-w-7xl  lg:mx-auto mr-3 ml-3 mb-20 ">
          {benefits.map((item) => (
            <div key={item.title} className="bg-[#F8FCFF] p-5">
              <p className="text-xl lg:text-2xl">{item.title}</p>
              <p className="mt-5">{item.describe}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32">
        <p className="text-center text-2xl ml-3 mr-3 font-semibold pb-6  border-b-1 border-gray-200 text-blue-500">
          Trusted by the best
        </p>
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <div className="flex space-x-10 mt-10">
            <img
              src="../../../../public/Image/logo1.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo2.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo3.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo4.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo5.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo6.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo7.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo8.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo9.png"
              alt="Sponsor 1"
              className="h-16"
            />
            <img
              src="../../../../public/Image/logo10.png"
              alt="Sponsor 1"
              className="h-16"
            />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default KeyFeatures;
