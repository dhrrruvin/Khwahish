import React, {useState, useEffect, useRef} from "react";
import "./Navbar.css";


const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const [show, handleShow] = useState(false)

  const changeState = () => {
    setIsActive(current => !current)
  }

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        handleShow(true)
      }
      else {
        handleShow(false)
      }
    })
  }, [])

  // console.log(refValue.current);

  return (

    <header className={`header ${show ? "sticky": ""} `}>
      <div className="container">

        <a href="#" className="logo">
          {/* <img src="" alt="" /> */}
          Khwahish Infotech
        </a>

        <nav className={`navbar ${isActive ? 'open':''}`} onClick={isActive? changeState: null}>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                  About Us
              </a>
            </li>
            <li>
              <a href="#service" className="navbar-link">
                  Services
              </a>
            </li>
            <li>
              <a href="portfolio" className="navbar-link">
                  Portfolio
              </a>
            </li>
            <li>
              <a href="contact-us" className="navbar-link">
                  Contact Us
              </a>
            </li>
            <li>
              <div className="navbar-link"></div>
            </li>
          </ul>
        </nav>

        <button id="nav-icon" className={isActive ? 'open': ''} onClick={changeState}>
          <span className="menu-toggle-bar menu-toggle-bar--top"></span>
          <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
          <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </button>

        <div className={`overlay ${isActive? 'open': ''}`} onClick={changeState}></div>

      </div>
    </header>
  );
};

export default Navbar;
