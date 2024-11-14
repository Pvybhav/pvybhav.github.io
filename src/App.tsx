import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <p className="line-1 anim-typewriter">Hello, My name is VYBHAV</p> */}
      {/* <img
        src="src/assets/Images/HeroImage.JPG"
        alt="Hero Image"
        className="hero-image"
      /> */}

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
