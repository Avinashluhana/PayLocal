import React from "react";
import "./Global.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header id="header" className="bg-transparent header-text-light">
        <div className="container">
          <div className="header-row">
            <div className="header-column justify-content-start">
              {/* Logo
                    ============================= */}
              <div className="logo">
                <a className="d-flex" href title="Payyed - HTML Template">
                  <Link to="/">
                    <h2 style={{ color: "white", "padding-top": "10px" }}>
                      <b>PAYLOCAL</b>
                    </h2>
                  </Link>
                  {/* <img
                        src="images/logo2.png"
                        alt="Payyed"
                        width="250px"
                        height="120px"
                      /> */}
                </a>
              </div>
              {/* Logo end */}
              {/* Collapse Button
                     ============================== */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#header-nav"
              >
                <span /> <span /> <span />{" "}
              </button>
              {/* Collapse Button end */}
              {/* Primary Navigation
                      ============================== */}
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li>
                      <Link className="link" to="send">
                        Send
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="receive">
                        Receieve
                      </Link>
                    </li>

                    <li>
                      <Link className="link" to="about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a href>Fees</a>
                    </li>
                    <li>
                      <Link className="link" to="help">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Primary Navigation end */}
            </div>
            <div className="header-column justify-content-end">
              {/* Login & Signup Link
                    ============================== */}
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li className="align-items-center h-auto ms-sm-3">
                    <Link to="signup">Sign Up</Link>
                  </li>
                </ul>
              </nav>
              {/* Login & Signup Link end */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
