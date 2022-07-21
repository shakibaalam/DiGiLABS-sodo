
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import Expert from "./Components/Expert";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Offer from "./Components/Offer";
import Stories from "./Components/Stories";
import Trust from "./Components/Trust";
import Why from "./Components/Why";


function App() {
  return (
    <div className=" bg-white">
      <NavBar></NavBar>
      <Banner></Banner>
      <Trust></Trust>
      <Card></Card>
      <Offer></Offer>
      <Featured></Featured>
      <Expert></Expert>
      <Why></Why>
      <Stories></Stories>
      <Contact></Contact>
      <Footer></Footer>
    </div>

  );
}

export default App;
