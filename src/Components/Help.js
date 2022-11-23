import React from "react";

const Help = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="main-wrapper">
        <section className="hero-wrap section">
          <div className="hero-mask opacity-9 bg-primary" />
          <div
            className="hero-bg"
            style={{ "background-image": "url('./images/bg/image-2.jpg')" }}
          />
          <div className="hero-content">
            <div className="container">
              <div className="row align-items-center text-center">
                <div className="col-12">
                  <h1 className="text-11 text-white mb-4">
                    How can we help you?
                  </h1>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                  <div className="input-group">
                    <input
                      className="form-control shadow-none border-0"
                      type="search"
                      id="search-input"
                      placeholder="Search for answer..."
                      defaultValue
                    />
                    <span className="input-group-text bg-white border-0 p-0">
                      <button
                        className="btn text-muted shadow-none px-3 border-0"
                        type="button"
                      >
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Header end */}
        {/* Content
    ============================================= */}
        <div id="content">
          {/* Main Topics
      ============================================= */}
          <section className="section py-3 my-3 py-sm-5 my-sm-5">
            <div className="container">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-3">
                  <div className="bg-white shadow-sm rounded p-4 text-center">
                    {" "}
                    <span className="d-block text-17 text-primary mt-2 mb-3">
                      <i className="fas fa-user-circle" />
                    </span>
                    <h3 className="text-body text-4">My Account</h3>
                    <p className="mb-0">
                      <a className="text-muted btn-link" href>
                        See articles
                        <span className="text-1 ms-1">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="bg-white shadow-sm rounded p-4 text-center">
                    {" "}
                    <span className="d-block text-17 text-primary mt-2 mb-3">
                      <i className="fas fa-money-check-alt" />
                    </span>
                    <h3 className="text-body text-4">Payment</h3>
                    <p className="mb-0">
                      <a className="text-muted btn-link" href>
                        See articles
                        <span className="text-1 ms-1">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="bg-white shadow-sm rounded p-4 text-center">
                    {" "}
                    <span className="d-block text-17 text-primary mt-2 mb-3">
                      <i className="fas fa-shield-alt" />
                    </span>
                    <h3 className="text-body text-4">Security</h3>
                    <p className="mb-0">
                      <a className="text-muted btn-link" href>
                        See articles
                        <span className="text-1 ms-1">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="bg-white shadow-sm rounded p-4 text-center">
                    {" "}
                    <span className="d-block text-17 text-primary mt-2 mb-3">
                      <i className="fas fa-credit-card" />
                    </span>
                    <h3 className="text-body text-4">Payment Methods</h3>
                    <p className="mb-0">
                      <a className="text-muted btn-link" href>
                        See articles
                        <span className="text-1 ms-1">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Main Topics end */}
          {/* Popular Topics
      ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">Popular Topics</h2>
              <p className="text-4 text-center mb-5">
                Lisque persius interesset his et, in quot quidam persequeris.
              </p>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row gx-5">
                    <div className="col-md-6">
                      <div
                        className="accordion accordion-flush"
                        id="popularTopics"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="false"
                              aria-controls="collapse1"
                            >
                              I forgot the password for my account.
                            </button>
                          </h2>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading1"
                            data-bs-parent="#popularTopics"
                          >
                            <div className="accordion-body">
                              {" "}
                              Lisque persius interesset his et, in quot quidam
                              persequeris vim, ad mea essent possim iriure.
                              Mutat tacimates id sit. Ridens mediocritatem ius
                              an, eu nec magna imperdiet.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2"
                              aria-expanded="false"
                              aria-controls="collapse2"
                            >
                              How do I withdraw funds from my account?
                            </button>
                          </h2>
                          <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading2"
                            data-bs-parent="#popularTopics"
                          >
                            <div className="accordion-body">
                              {" "}
                              Iisque persius interesset his et, in quot quidam
                              persequeris vim, ad mea essent possim iriure.
                              Mutat tacimates id sit. Ridens mediocritatem ius
                              an, eu nec magna imperdiet.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              How do I link bank account to my account?
                            </button>
                          </h2>
                          <div
                            id="collapse3"
                            className="collapse"
                            aria-labelledby="heading3"
                            data-bs-parent="#popularTopics"
                          >
                            <div className="accordion-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              How do I confirm the email address on my account?
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="collapse"
                            aria-labelledby="heading4"
                            data-bs-parent="#popularTopics"
                          >
                            <div className="accordion-body">
                              {" "}
                              Iisque Anim pariatur cliche reprehenderit, enim
                              eiusmod high life accusamus terry richardson ad
                              squid.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading5">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapse5"
                            >
                              How do I receive payments?{" "}
                            </button>
                          </h2>
                          <div
                            id="collapse5"
                            className="collapse"
                            aria-labelledby="heading5"
                            data-bs-parent="#popularTopics"
                          >
                            <div className="accordion-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="accordion accordion-flush"
                        id="popularTopics2"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading6">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse6"
                              aria-expanded="false"
                              aria-controls="collapse6"
                            >
                              How Can I View My Payments History?
                            </button>
                          </h2>
                          <div
                            id="collapse6"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading6"
                            data-bs-parent="#popularTopics2"
                          >
                            <div className="accordion-body">
                              {" "}
                              Lisque persius interesset his et, in quot quidam
                              persequeris vim, ad mea essent possim iriure.
                              Mutat tacimates id sit. Ridens mediocritatem ius
                              an, eu nec magna imperdiet.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading7">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse7"
                              aria-expanded="false"
                              aria-controls="collapse7"
                            >
                              Where is my refund?
                            </button>
                          </h2>
                          <div
                            id="collapse7"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading7"
                            data-bs-parent="#popularTopics2"
                          >
                            <div className="accordion-body">
                              {" "}
                              Iisque persius interesset his et, in quot quidam
                              persequeris vim, ad mea essent possim iriure.
                              Mutat tacimates id sit. Ridens mediocritatem ius
                              an, eu nec magna imperdiet.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading8">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse8"
                              aria-expanded="false"
                              aria-controls="collapse8"
                            >
                              How do I request payments or send an invoice?
                            </button>
                          </h2>
                          <div
                            id="collapse8"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading8"
                            data-bs-parent="#popularTopics2"
                          >
                            <div className="accordion-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading9">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse9"
                              aria-expanded="false"
                              aria-controls="collapse9"
                            >
                              Forgot my password! What next?
                            </button>
                          </h2>
                          <div
                            id="collapse9"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading9"
                            data-bs-parent="#popularTopics2"
                          >
                            <div className="accordion-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading10">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse10"
                              aria-expanded="false"
                              aria-controls="collapse10"
                            >
                              Closing Your Account
                            </button>
                          </h2>
                          <div
                            id="collapse10"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading10"
                            data-bs-parent="#popularTopics2"
                          >
                            <div className="accordion-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <a href="#" className="btn-link text-4">
                  See more topics
                  <i className="fas fa-chevron-right text-2 ms-2" />
                </a>
              </div>
            </div>
          </section>
          {/* Popular Topics end */}
          {/* Can't find
      ============================================= */}
          <section className="section py-4 my-4 py-sm-5 my-sm-5">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                    <div className="row g-0">
                      <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                        {" "}
                        <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                          <i className="far fa-envelope" />
                        </span>{" "}
                      </div>
                      <div className="col text-center text-sm-start">
                        <div className>
                          <h5 className="text-3 text-body">
                            Can't find what you're looking for?
                          </h5>
                          <p className="text-muted mb-0">
                            We want to answer all of your queries. Get in touch
                            and we'll get back to you as soon as we can.{" "}
                            <a className="btn-link" href>
                              Contact us
                              <span className="text-1 ms-1">
                                <i className="fas fa-chevron-right" />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                    <div className="row g-0">
                      <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                        {" "}
                        <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                          <i className="far fa-comment-alt" />
                        </span>{" "}
                      </div>
                      <div className="col text-center text-sm-start">
                        <div className>
                          <h5 className="text-3 text-body">
                            Technical questions
                          </h5>
                          <p className="text-muted mb-0">
                            Have some technical questions? Hit us up on live
                            chat or whatever.{" "}
                            <a className="btn-link" href>
                              Click here
                              <span className="text-1 ms-1">
                                <i className="fas fa-chevron-right" />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Can't find end */}
        </div>
        {/* Content end */}
        {/* Footer
    ============================================= */}
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg d-lg-flex align-items-center">
                <ul className="nav justify-content-center justify-content-lg-start text-3">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link active" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Affiliate
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="#">
                      Fees
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                <ul className="social-icons justify-content-center">
                  <li className="social-icons-facebook">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="social-icons-twitter">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.twitter.com/"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="social-icons-google">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.google.com/"
                      target="_blank"
                      title="Google"
                    >
                      <i className="fab fa-google" />
                    </a>
                  </li>
                  <li className="social-icons-youtube">
                    <a
                      data-bs-toggle="tooltip"
                      href="http://www.youtube.com/"
                      target="_blank"
                      title="Youtube"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright pt-3 pt-lg-2 mt-2">
              <div className="row">
                <div className="col-lg">
                  <p className="text-center text-lg-start mb-2 mb-lg-0">
                    Copyright © 2022 <a href="#">Payyed</a>. All Rights
                    Reserved.
                  </p>
                </div>
                <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link active" href="#">
                        Security
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="#">
                        Terms
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
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
        {/* Footer end */}
      </div>
      {/* Document Wrapper end */}
      {/* Back to Top
  ============================================= */}
      <a
        id="back-to-top"
        data-bs-toggle="tooltip"
        title="Back to Top"
        onClick={scrollToTop}
      >
        <i className="fa fa-chevron-up" />
      </a>
    </div>
  );
};

export default Help;
