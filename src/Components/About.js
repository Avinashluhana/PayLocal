import React from "react";
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* <div id="preloader">
    <div data-loader="dual-ring" />
  </div> */}
      {/* Preloader End */}
      {/* Document Wrapper   
============================================= */}
      <div id="main-wrapper">
        <section className="page-header page-header-text-light py-0 mb-0">
          <section className="hero-wrap section">
            <div className="hero-mask opacity-7 bg-dark" />
            <div
              className="hero-bg hero-bg-scroll"
              style={{ "background-image": "url('./images/bg/image-2.jpg')" }}
            />
            <div className="hero-content">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1 className="text-11 fw-500 text-white mb-3">
                      About Payyed
                    </h1>
                    <p className="text-5 text-white lh-base mb-4">
                      Our mission is to help you save on transfer fees and
                      exchange rates!
                    </p>
                    <a href="#" className="btn btn-primary m-2">
                      Open a Free Account
                    </a>{" "}
                    <a
                      className="btn btn-outline-light video-btn m-2"
                      href="#"
                      data-src="https://www.youtube.com/embed/7e90gBu4pas"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      <span className="me-2">
                        <i className="fas fa-play-circle" />
                      </span>
                      See How it Works
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Page Header end */}
        {/* Content
  ============================================= */}
        <div id="content">
          {/* Who we are
    ============================================= */}
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="my-auto px-0 px-lg-5 mx-2">
                    <h2 className="text-9 mb-4">Who we are</h2>
                    <p className="text-4">
                      Quidam lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure. Lisque
                      persius interesset his et, in quot quidam persequeris vim,
                      ad mea essent possim iriure. lisque persius interesset his
                      et, in quot quidam mea essent possim iriure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 my-auto text-center">
                  {" "}
                  <img
                    className="img-fluid shadow-lg rounded-3"
                    src="images/who-we-are.jpg"
                    alt
                  />{" "}
                </div>
              </div>
            </div>
          </section>
          {/* Who we are end */}
          {/* Our Values
    ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="row">
                    <div className="col-6 col-lg-7 ms-auto mb-lg-n5">
                      {" "}
                      <img
                        className="img-fluid rounded-3 shadow-lg"
                        src="images/our-values-vision.jpg"
                        alt="banner"
                      />{" "}
                    </div>
                    <div className="col-6 col-lg-8 mt-lg-n5">
                      {" "}
                      <img
                        className="img-fluid rounded-3 shadow-lg"
                        src="images/our-values-mission.jpg"
                        alt="banner"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex order-1 order-lg-2">
                  <div className="my-auto px-0 px-lg-5">
                    <h2 className="text-9 mb-4">Our Values</h2>
                    <h4 className="text-4 fw-500">Our Mission</h4>
                    <p className="tex-3">
                      Quidam lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure. Lisque
                      persius interesset his et, in quot quidam persequeris vim,
                      ad mea essent possim iriure. lisque persius interesset his
                      et, in quot quidam mea essent possim iriure.
                    </p>
                    <h4 className="text-4 fw-500 mb-2">Our Vision</h4>
                    <p className="tex-3">
                      Persequeris quidam lisque persius interesset his et, in
                      quot quidam vim, ad mea essent possim iriure. Lisque
                      persius interesset his et, in quot quidam persequeris vim,
                      ad mea essent possim iriure. lisque persius interesset his
                      et, in quot quidam.
                    </p>
                    <h4 className="text-4 fw-500 mb-2">Our Goal</h4>
                    <p className="tex-3">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure. Lisque
                      persius interesset his et, in quot quidam persequeris vim,
                      ad mea essent possim iriure. lisque persius interesset his
                      et, in quot quidam mea essent possim iriure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Values end */}
          {/* Leadership
    ============================================= */}
          <section className="section">
            <div className="container">
              <h2 className="text-9 text-center">Leadership</h2>
              <p className="lead text-center mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="row g-4">
                <div className="col-sm-6 col-md-3 text-center">
                  <div className="team rounded d-inline-block">
                    {" "}
                    <img
                      className="img-fluid rounded"
                      alt
                      src="images/team/leader.jpg"
                    />
                    <h3>Neil Patel</h3>
                    <p className="text-muted">CEO &amp; Founder</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook">
                        <a
                          data-bs-toggle="tooltip"
                          href="#"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-icons-google">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Google"
                        >
                          <i className="fab fa-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center">
                  <div className="team rounded d-inline-block">
                    {" "}
                    <img
                      className="img-fluid rounded"
                      alt
                      src="images/team/leader-2.jpg"
                    />
                    <h3>James Maxwell</h3>
                    <p className="text-muted">Co-Founder</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-icons-google">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Google"
                        >
                          <i className="fab fa-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center">
                  <div className="team rounded d-inline-block">
                    {" "}
                    <img
                      className="img-fluid rounded"
                      alt
                      src="images/team/leader-3.jpg"
                    />
                    <h3>Ruby Clinton</h3>
                    <p className="text-muted">Chief Marketing Officer</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-icons-google">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Google"
                        >
                          <i className="fab fa-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center">
                  <div className="team rounded d-inline-block">
                    {" "}
                    <img
                      className="img-fluid rounded"
                      alt
                      src="images/team/leader-4.jpg"
                    />
                    <h3>Miky Sheth</h3>
                    <p className="text-muted">General Manager</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-icons-google">
                        <a
                          data-bs-toggle="tooltip"
                          href
                          target="_blank"
                          title="Google"
                        >
                          <i className="fab fa-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Leadership end */}
          {/* Our Investors
    ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">Our Investors</h2>
              <p className="lead text-center mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="brands-grid separator-border">
                <div className="row align-items-center text-center">
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-1.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-2.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-3.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-4.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-5.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-6.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-7.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-8.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-9.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-10.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-11.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href>
                      <img
                        className="img-fluid"
                        src="images/partner/partner-1.png"
                        alt="Brands"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Investors end */}
          {/* Testimonial
    ============================================= */}
          <section className="section">
            <div className="container">
              <h2 className="text-9 text-center">
                What people are saying about Payyed
              </h2>
              <p className="lead text-center mb-4">
                A payments experience people love to talk about
              </p>
              <div
                className="owl-carousel owl-theme"
                data-autoplay="true"
                data-nav="true"
                data-loop="true"
                data-margin={30}
                data-slideby={2}
                data-stagepadding={5}
                data-items-xs={1}
                data-items-sm={1}
                data-items-md={2}
                data-items-lg={2}
              >
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “Easy to use, reasonably priced simply dummy text of the
                      printing and typesetting industry. Quidam lisque persius
                      interesset his et, in quot quidam possim iriure.”
                    </p>
                    <strong className="d-block fw-500">Jay Shah</strong>{" "}
                    <span className="text-muted">
                      Founder at Icomatic Pvt Ltd
                    </span>{" "}
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “I am happy Working with printing and typesetting
                      industry. Quidam lisque persius interesset his et, in quot
                      quidam persequeris essent possim iriure.”
                    </p>
                    <strong className="d-block fw-500">Patrick Cary</strong>{" "}
                    <span className="text-muted">Freelancer from USA</span>{" "}
                  </div>
                </div>
                <div className="item mh-100">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “Fast easy to use transfers to a different currency. Much
                      better value that the banks.”
                    </p>
                    <strong className="d-block fw-500">De Mortel</strong>{" "}
                    <span className="text-muted">Online Retail</span>{" "}
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “I have used them twice now. Good rates, very efficient
                      service and it denies high street banks an undeserved
                      windfall. Excellent.”
                    </p>
                    <strong className="d-block fw-500">Chris Tom</strong>{" "}
                    <span className="text-muted">User from UK</span>{" "}
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “It's a real good idea to manage your money by payyed. The
                      rates are fair and you can carry out the transactions
                      without worrying!”
                    </p>
                    <strong className="d-block fw-500">Mauri Lindberg</strong>{" "}
                    <span className="text-muted">
                      Freelancer from Australia
                    </span>{" "}
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 mb-0">
                      <i className="fa fa-quote-left" />
                    </p>
                    <p className="text-4">
                      “Only trying it out since a few days. But up to now
                      excellent. Seems to work flawlessly. I'm only using it for
                      sending money to friends at the moment.”
                    </p>
                    <strong className="d-block fw-500">Dennis Jacques</strong>{" "}
                    <span className="text-muted">User from USA</span>{" "}
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <a href="#" className="btn-link text-4">
                  See more people review
                  <i className="fas fa-chevron-right text-2 ms-2" />
                </a>
              </div>
            </div>
          </section>
          {/* Testimonial end */}
          {/* JOIN US
    ============================================= */}
          <section className="section bg-primary py-5">
            <div className="container text-center">
              <div className="row gy-4">
                <div className="col-sm-6 col-md-3">
                  <div className="featured-box text-center">
                    <div className="featured-box-icon text-light mb-2">
                      {" "}
                      <i className="fas fa-globe" />{" "}
                    </div>
                    <h4 className="text-12 text-white mb-0">180+</h4>
                    <p className="text-4 text-white mb-0">Countries</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="featured-box text-center">
                    <div className="featured-box-icon text-light mb-2">
                      {" "}
                      <i className="fas fa-dollar-sign" />{" "}
                    </div>
                    <h4 className="text-12 text-white mb-0">120</h4>
                    <p className="text-4 text-white mb-0">Currencies</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="featured-box text-center">
                    <div className="featured-box-icon text-light mb-2">
                      {" "}
                      <i className="fas fa-users" />{" "}
                    </div>
                    <h4 className="text-12 text-white mb-0">2.5M</h4>
                    <p className="text-4 text-white mb-0">Users</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="featured-box text-center">
                    <div className="featured-box-icon text-light mb-2">
                      {" "}
                      <i className="far fa-life-ring" />{" "}
                    </div>
                    <h4 className="text-12 text-white mb-0">24X7</h4>
                    <p className="text-4 text-white mb-0">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* JOIN US end */}
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
      {/* Video Modal
============================================= */}
      <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog">
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content bg-transparent border-0">
            <button
              type="button"
              className="btn-close btn-close-white ms-auto me-n3"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe id="video" src allow="autoplay;" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal end */}
    </div>
  );
};

export default About;
