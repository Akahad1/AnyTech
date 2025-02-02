const banks = [
  { name: "Bank of Chengde", logo: "../../../public/Image/logo1.png" },
  { name: "Bank of China", logo: "../../../public/Image/logo2.png" },
  { name: "Bank of Shanghai", logo: "../../../public/Image/logo3.png" },
  { name: "CGB", logo: "../../../public/Image/logo4.png" },
  { name: "China CITIC Bank", logo: "../../../public/Image/logo5.png" },
  { name: "One@Bank", logo: "../../../public/Image/logo6.png" },
  { name: "Ping An Bank", logo: "../../../public/Image/logo7.png" },
  { name: "Postal Savings Bank", logo: "../../../public/Image/logo8.png" },
  { name: "SEA", logo: "../../../public/Image/logo9.png" },
  {
    name: "Shandong City Commercial Bank",
    logo: "../../../public/Image/logo10.png",
  },
  {
    name: "VipFubon Consumer Finance",
    logo: "../../../public/Image/logo11.png",
  },
  {
    name: "Xiamen International Bank",
    logo: "../../../public/Image/logo12.png",
  },
  { name: "XW Bank", logo: "../../../public/Image/logo13.png" },
  { name: "SPD Bank", logo: "../../../public/Image/logo14.png" },
  { name: "DCS Card Centre", logo: "../../../public/Image/logo15.png" },
];

const Sponsor = () => {
  return (
    <div className="bg-white  max-w-7xl lg:mx-auto mt-10 md:ml-5 md:mr-5 ml-4 mr-3">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-20 ">
        {banks.map((bank, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={`/images/${bank.logo}`}
              className="h-16 md:h-20 w-40 object-contain"
            />
            <p className="text-sm md:text-base text-gray-700 mt-2">
              {bank.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
