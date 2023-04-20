import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },

  {
    display: "Projects",
    url: "#courses",
  },
  {
    display: "Testimonials",
    url: "#testimonal",
  },

  {
    display: "Connect",
    url: "#contact",
  }
  
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> folio
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
              
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
               <a  href="https://github.com/akashnb0" target="_blank"
                  rel="noreferrer"><i class="ri-github-line"></i> </a> 
              </p>
            </div>
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
               <a href="http://www.linkedin.com/in/akashnb" target="_blank"
                  rel="noreferrer"><i class="ri-linkedin-line"></i></a> 
              </p>
            </div>
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <a ><i class="ri-phone-line"></i></a>
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
