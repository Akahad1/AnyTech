// import { useLocation } from "react-router";
import FinanceFuture from "../../Component/FinanceFuture/FinanceFuture";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Philosophy from "../../Component/Philosophy/Philosophy";
import Section1 from "../../Component/Section1/Section1";
import Section2 from "../../Component/Section2/Section2";
import Sponsor from "../../Component/Sponsor/Sponsor";
import StatsSection from "../../Component/StatsSection/StatsSection";

const Home = () => {
  // const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>

      <Section1></Section1>
      <Philosophy></Philosophy>
      <Section2></Section2>
      <FinanceFuture></FinanceFuture>
      <StatsSection></StatsSection>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  );
};

export default Home;
