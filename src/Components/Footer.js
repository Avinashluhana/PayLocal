import React from 'react'
import "./Global.css"

const Footer = () => {
    return (
        <div>
             <footer id="footer" className="pb-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md mb-3 mb-md-0">
                  <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
                    Information
                  </h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Careers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Affiliate
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Fees
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md mb-3 mb-md-0">
                  <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
                    Services
                  </h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Transfer Money
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Send Money
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Receive Money
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Online Shopping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pay bill
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md mb-3 mb-md-0">
                  <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
                    Help Center
                  </h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Support
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md mb-3 mb-md-0">
                  <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
                    Keep in touch
                  </h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        google
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        youtube
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-3">
                  <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
                    Subscribe
                  </h4>
                  <p>Subscribe to receive latest news and updates.</p>
                  <div className="input-group newsletter">
                    <input
                      className="form-control"
                      placeholder="Your Email Address"
                      name="newsletterEmail"
                      id="newsletterEmail"
                      type="text"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        data-toggle="tooltip"
                        data-original-title="Subscribe"
                      >
                        <i className="fas fa-paper-plane" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright pt-4 mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-lg">
                    <p className="text-lg-left mb-2 mb-lg-0">
                      Copyright © 2022 <a href="#">Paylocal</a>. All Rights
                      Reserved.
                    </p>
                  </div>
                  <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          Security
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Terms
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}

export default Footer
