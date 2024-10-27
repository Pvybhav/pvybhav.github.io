import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

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
    </div>
  );
}

export default App;
