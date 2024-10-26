
import Jumbotron from "./Components/Jumbotron"
import Navbar from "./Components/Navbar"
import Service from "./Components/Service"
import Aboutme from "./Components/Aboutme"
import Portfolio from "./Components/Portfolio"
import './App.css'
import Contact from "./Components/contact"



const App = () => {
  return (
    <>
      <Navbar/>
      <Jumbotron/>
      <Aboutme/>
      <Service/>
      <Portfolio/>
      <Contact/>
      
    </>
  )
}

export default App