/* src\components\Navbar\Navbar.jsx */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { NavbarLogo } from "../../assets/images/index.jsx";

export default function Navbar() {
  const location = useLocation();
  const currentPageURL = location.pathname.substring(1);

  const getWindowRange = (width) => {
    if (width <= 767) return 0; //[0, 767]
    return 1; //[767, infinity]
  };

  const [showNav, setShowNav] = useState(false);
  const [showPagesContent, setShowPagesContent] = useState("none");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowRange, setWindowRange] = useState(
    getWindowRange(window.innerWidth)
  );
  const [navHeight, setNavHeight] = useState("0");

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      setWindowWidth(newWidth);

      const newRange = getWindowRange(newWidth);
      if ((windowRange === 1 && newRange === 0) || newRange === 1)
        setShowNav(false);
      if (windowRange !== newRange) setShowPagesContent("none");

      setWindowRange(newRange);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Clean up event listener
  }, [windowWidth, windowRange]);

  useEffect(() => {
    if (showNav) {
      setTimeout(() => {
        setNavHeight("415px");
      }, 77); // Small delay to ensure the browser recognizes the change
    } else {
      setNavHeight("0");
    }
  }, [showNav]);

  useEffect(() => {
    insertW__Current(); // Call this whenever the location changes
  }, [location]);

  function insertW__Current() {
    const delayTimer = setTimeout(() => {
      const buttons = [
        { selector: ".nav-link[href='/']", text: "Home" },
        { selector: ".nav-link[href='/about-us']", text: "About Us" },
        { selector: ".nav-link[href='/works']", text: "Works" },
        { selector: ".nav-dropdown-link[href='/services']", text: "Services" },
        { selector: ".nav-dropdown-link[href='/team']", text: "Team" },
        { selector: ".nav-dropdown-link[href='/blog']", text: "Blog" },
        { selector: ".nav-link[href='/pricing']", text: "Pricing" },
        { selector: ".nav-link[href='/contact']", text: "Reach Us" },
      ];

      buttons.forEach(({ selector, text }) => {
        const path = selector.match(/href=['"]([^'"]*)['"]/)[1].substring(1);

        const button = document.querySelector(selector);
        if (button) {
          if (currentPageURL === path) {
            if (!button.classList.contains("w--current")) {
              button.classList.add("w--current");
            }
          } else {
            if (button.classList.contains("w--current")) {
              button.classList.remove("w--current");
            }
          }
        }
      });
    }, 10); // Small delay to ensure the browser recognizes the change
  }

  function flipNavContent() {
    if (!showNav) insertW__Current();
    setShowNav(!showNav);
  }

  function flipPagesContent() {
    if (showPagesContent === "none") setShowPagesContent("block");
    else setShowPagesContent("none");
  }

  const handleButtonClick = (path) => {
    if (currentPageURL === path) window.location.reload();
    // Insert insertW__Current is not needed here, useEffect will handle it on location change
  };

  return (
    <div className={`navbar w-nav`}>
      <div className="w-container">
        <div className="nav-linear-wrap">
          <div className="nav-wrap">
            <Link
              to="/"
              className="header-logo-wrap w-nav-brand"
              aria-label="home"
            >
              <img src={NavbarLogo} alt="Logo" />
            </Link>
            {windowRange === 1 ? (
              <nav className="nav-menu w-nav-menu">
                <Link
                  to="/"
                  aria-current="page"
                  className={`nav-link w-nav-link`}
                  onClick={() => handleButtonClick("")}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className={`nav-link w-nav-link`}
                  onClick={() => handleButtonClick("about-us")}
                >
                  About&nbsp;Us
                </Link>
                <Link
                  to="/works"
                  className={`nav-link w-nav-link`}
                  onClick={() => handleButtonClick("works")}
                >
                  Works
                </Link>
                <div className={`nav-dropdown w-dropdown`}>
                  <div
                    className={`nav-link navigation-dropdown w-dropdown-toggle`}
                  >
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div onClick={() => flipPagesContent("Pages")}>Pages</div>
                  </div>
                  <nav
                    className={`nav-dropdown-list w-dropdown-list`}
                    style={{ display: showPagesContent }}
                  >
                    <Link
                      to="/services"
                      className="nav-dropdown-link w-dropdown-link"
                      onClick={() => handleButtonClick("services")}
                    >
                      Services
                    </Link>
                    <Link
                      to="/team"
                      className="nav-dropdown-link w-dropdown-link"
                      onClick={() => handleButtonClick("team")}
                    >
                      Team
                    </Link>
                    <Link
                      to="/blog"
                      className="nav-dropdown-link w-dropdown-link"
                      onClick={() => handleButtonClick("blog")}
                    >
                      Blog
                    </Link>
                  </nav>
                </div>
                <Link
                  to="/pricing"
                  className={`nav-link w-nav-link`}
                  onClick={() => handleButtonClick("pricing")}
                >
                  Pricing
                </Link>
                <div className="nav-button-wrap">
                  <Link
                    to="/contact"
                    className="nav-button w-button"
                    onClick={() => handleButtonClick("contact")}
                  >
                    Reach&nbsp;Us
                  </Link>
                </div>
              </nav>
            ) : null}

            <div
              className={`menu-button w-nav-button ${showNav ? "w--open" : ""}`}
              style={{ display: windowRange === 0 ? "flex" : "none" }}
              onClick={flipNavContent}
            >
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      {showNav ? (
        <div
          className="w-nav-overlay zero-nav-overlay"
          style={{
            height: navHeight,
            overflow: "hidden",
            transition: "height 400ms ease",
          }}
        >
          <nav className="nav-menu w-nav-menu zero-nav-menu">
            <Link
              to="/"
              aria-current="page"
              className={`nav-link w-nav-link w--nav-link-open margin-left-zero`}
              onClick={() => handleButtonClick("")}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`nav-link w-nav-link w--nav-link-open margin-left-zero`}
              onClick={() => handleButtonClick("about-us")}
            >
              About Us
            </Link>
            <Link
              to="/works"
              className={`nav-link w-nav-link w--nav-link-open margin-left-zero`}
              onClick={() => handleButtonClick("works")}
            >
              Works
            </Link>
            <div
              className={`nav-dropdown w-dropdown w--nav-dropdown-open margin-left-zero`}
            >
              <div
                className={`nav-link navigation-dropdown w-dropdown-toggle w--nav-dropdown-toggle-open`}
              >
                <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                <div onClick={() => flipPagesContent("Pages")}>Pages</div>
              </div>
              <nav
                className={`nav-dropdown-list w-dropdown-list w--nav-dropdown-list-open zero-dropdown-list`}
                style={{ display: showPagesContent }}
              >
                <Link
                  to="/services"
                  className="nav-dropdown-link w-dropdown-link"
                  onClick={() => handleButtonClick("services")}
                >
                  Services
                </Link>
                <Link
                  to="/team"
                  className="nav-dropdown-link w-dropdown-link"
                  onClick={() => handleButtonClick("team")}
                >
                  Team
                </Link>
                <Link
                  to="/blog"
                  className="nav-dropdown-link w-dropdown-link"
                  onClick={() => handleButtonClick("blog")}
                >
                  Blog
                </Link>
              </nav>
            </div>
            <Link
              to="/pricing"
              className={`nav-link w-nav-link w--nav-link-open margin-left-zero`}
              onClick={() => handleButtonClick("pricing")}
            >
              Pricing
            </Link>
            <div className="nav-button-wrap">
              <Link
                to="/contact"
                className="nav-button w-button"
                onClick={() => handleButtonClick("contact")}
              >
                Reach Us
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
