import React from "react";
import { NAVBAR_LOGO } from "../../constants/navBarConstants";

export default function NavBar() {
  const onHamburgerMenuClicked = () => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const fadeElems = document.querySelectorAll(".has-fade");

    if (header.classList.contains("open")) {
      // Close Hamburger Menu
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      // Open Hamburger Menu
      body.classList.add("noscroll");
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  };

  return (
    <header className="header">
      <div className="overlay has-fade"></div>
      <div className="container container--pt flex flex-jc-c hide-for-mobile">
        <a href="#" className="header__logo">
          <img src={NAVBAR_LOGO.iconPath} alt={NAVBAR_LOGO.title} />
        </a>
      </div>
      <nav className="container flex flex-jc-sb flex-ai-c">
        <a href="#" className="header__logo hide-for-desktop">
          <img src={NAVBAR_LOGO.iconPath} alt={NAVBAR_LOGO.title} />
        </a>
        <a
          id="btnHamburger"
          href="#"
          className="header__toggle hide-for-desktop"
          onClick={onHamburgerMenuClicked}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="#">FOOTPRINT</a>
          <a href="#">INNOVATIONS</a>
          <a href="#">ACADEMIC</a>
          <a href="#">JOBS</a>
          <a href="#">TENDERS</a>
          <a href="#">TEAM</a>
        </div>
        <div className="header__links hide-for-mobile">
          <a href="#">PROGRAM</a>
          <a href="#">CONTACT</a>
          <a href="#">HELP</a>
        </div>
      </nav>
      <div className="header__menu has-fade">
        <a href="#">FOOTPRINT</a>
        <a href="#">INNOVATIONS</a>
        <a href="#">ACADEMIC</a>
        <a href="#">JOBS</a>
        <a href="#">TENDERS</a>
        <a href="#">TEAM</a>
        <a href="#">PROGRAM</a>
        <a href="#">CONTACT</a>
        <a href="#">HELP</a>
      </div>
    </header>
  );
}
