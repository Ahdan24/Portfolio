
import Home from './Components/Home'
import Navbar from "./Components/Navbar"
import Service from "./Components/Service"
import Aboutme from "./Components/Aboutme"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"



const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App