// import { useLocation } from "react-router";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Philosophy from "../../Component/Philosophy/Philosophy";
import Section1 from "../../Component/Section1/Section1";

const Home = () => {
  // const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>

      <Section1></Section1>
      <Philosophy></Philosophy>
      <Footer></Footer>
    </div>
  );
};

export default Home;
