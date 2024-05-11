import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const getHubergerIcon = document.getElementById("hamburger-menu")!;
    const getHubergerCrossIcon = document.getElementById("hamburger-cross")!;
    const getMobileMenu = document.getElementById("mobile-menu")!;

    getHubergerIcon.addEventListener("click", function () {
      getMobileMenu.style.display = "flex";
      setTimeout(function () {
        getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
      }, 50); // Add a small delay for better transition effect
    });

    getHubergerCrossIcon.addEventListener("click", function () {
      getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
      setTimeout(function () {
        getMobileMenu.style.display = "none";
      }, 300); // Wait for the transition to end before hiding
    });

    // Check if screen size changes to desktop view and hide mobile menu
    window.addEventListener("resize", function () {
      if (window.innerWidth > 770) {
        getMobileMenu.style.display = "none";
      }
    });
  });
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <a href="#">Vybhav</a>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
        <div id="hamburger-menu">&#9776;</div>
      </div>

      <div id="mobile-menu">
        <div className="mobile-nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
        <div id="hamburger-cross">&#10006;</div>
      </div>
    </>
  );
};

export default Navbar;
