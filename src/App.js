import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/home"
import About from "./components/About me/about"
import Services from "./components/Services/services"
import Skills from "./components/Skills/skills"
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/ContactMe/contact"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
