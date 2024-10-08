import React, { useState } from "react";
import "./Header.css";
import Logo from "../../img/Logo.svg";
import ArrowDown from "../../img/arrowdown.svg";
import SearchBar from "../../img/searchIcon.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    qualifications: false,
    organizations: false,
    researchAnalysis: false,
    loremipsum: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="headerInner">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>

        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <button
                onClick={() => toggleDropdown("qualifications")}
                className="dropdown-btn"
              >
                Qualifications <img src={ArrowDown} alt="Dropdown Arrow" />
              </button>
              {isDropdownOpen.qualifications && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#qualifications1">Qualifications 1</a>
                  </li>
                  <li>
                    <a href="#qualifications2">Qualifications 2</a>
                  </li>
                  <li>
                    <a href="#qualifications3">Qualifications 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("organizations")}
                className="dropdown-btn"
              >
                Organizations <img src={ArrowDown} alt="Dropdown Arrow" />
              </button>
              {isDropdownOpen.organizations && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#organizations1">Organizations 1</a>
                  </li>
                  <li>
                    <a href="#organizations2">Organizations 2</a>
                  </li>
                  <li>
                    <a href="#organizations3">Organizations 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("researchAnalysis")}
                className="dropdown-btn"
              >
                Research & Analysis <img src={ArrowDown} alt="Dropdown Arrow" />
              </button>
              {isDropdownOpen.researchAnalysis && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#research1">Research & Analysis 1</a>
                  </li>
                  <li>
                    <a href="#research2">Research & Analysis 2</a>
                  </li>
                  <li>
                    <a href="#research3">Research & Analysis 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("loremipsum")}
                className="dropdown-btn"
              >
                Lorem Ipsum <img src={ArrowDown} alt="Dropdown Arrow" />
              </button>
              {isDropdownOpen.loremipsum && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#lorem1">Lorem Ipsum 1</a>
                  </li>
                  <li>
                    <a href="#lorem2">Lorem Ipsum 2</a>
                  </li>
                  <li>
                    <a href="#lorem3">Lorem Ipsum 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className="SearchBox">
                <img src={SearchBar} alt="Search Icon" />
              </div>
            </li>
            <li>
              <button className="EnrolmentBtn">Enrolment</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
