// import { useLocation } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Section1 from "../../Component/Section1/Section1";

const Home = () => {
  // const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Section1></Section1>
      </div>
    </div>
  );
};

export default Home;
