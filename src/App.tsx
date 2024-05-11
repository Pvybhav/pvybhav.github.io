import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <p className="line-1 anim-typewriter">Hello, My name is VYBHAV</p>
      <Outlet />
    </div>
  );
}

export default App;
