import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Components/Portfolio";
import Kontak from "./Components/Kontak";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Service />
      <Portfolio />
      <Kontak />
    </>
  );
};

export default App;
