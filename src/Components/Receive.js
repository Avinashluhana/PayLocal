import React from "react";

const Receive = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        <div id="main-wrapper">
          <div id="content">
            {/* Send Money
                 ============================================= */}
            <section className="hero-wrap">
              <div className="hero-mask opacity-9 bg-primary" />
              <div
                className="hero-bg"
                style={{ "background-image": "url('images/bg/image-5.jpg')" }}
              />
              <div className="hero-content d-flex flex-column fullscreen-with-header">
                <div className="container my-auto py-5 text-center">
                  <h2 className="text-14 text-white">
                    Receive Money from Around The World with Payyed
                  </h2>
                  <p className="text-5 text-white mb-4">
                    Quickly and easily receive and request money online with
                    Payyed.
                    <br className="d-none d-lg-block" />
                    Over 180 countries and 120 currencies supported.
                  </p>
                  <a
                    className="btn btn-light video-btn"
                    href="#"
                    data-src="https://www.youtube.com/embed/7e90gBu4pas"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                  >
                    <span className="text-2 me-3">
                      <i className="fas fa-play" />
                    </span>
                    See How it Works
                  </a>{" "}
                </div>
              </div>
            </section>
            {/* Send Money End */}
            {/* How it works
    ============================================= */}
            <section className="section bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 mx-auto">
                    <div className="row">
                      <div className="col-md-5 col-lg-6 text-center my-auto order-2 order-md-1">
                        <img
                          className="img-fluid shadow"
                          src="images/request-money.png"
                          alt
                        />
                      </div>
                      <div className="col-md-7 col-lg-6 order-1 order-md-2">
                        <h2 className="text-9">
                          {" "}
                          The simple way to Receive Money
                        </h2>
                        <p className="text-3 mb-4">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <div className="row gy-4">
                          <div className="col-12">
                            <div className="featured-box style-3">
                              <div className="featured-box-icon text-light">
                                <span className="w-100 text-20 fw-500">1</span>
                              </div>
                              <h3>Sign Up Your Account</h3>
                              <p>
                                Become a register user first, then log in to
                                your account and enter your card or bank
                                details.
                              </p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="featured-box style-3">
                              <div className="featured-box-icon text-light">
                                <span className="w-100 text-20 fw-500">2</span>
                              </div>
                              <h3>Enter Payer Details</h3>
                              <p>
                                Enter your payer name, email address then add an
                                amount with currency to request payment.
                              </p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="featured-box style-3">
                              <div className="featured-box-icon text-light">
                                <span className="w-100 text-20 fw-500">3</span>
                              </div>
                              <h3>Receive Money</h3>
                              <p>
                                After the request payment, the payer will be
                                notified via an email for payment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* How it works End */}
            {/* Why choose us
    ============================================= */}
            <section className="section">
              <div className="container">
                <h2 className="text-9 text-center">Why choose payyed?</h2>
                <p className="lead text-center mb-4">
                  Here???s Top 4 reasons why using a Payyed account for manage
                  your money.
                </p>
                <div className="row">
                  <div className="col-xl-10 mx-auto">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>Over 180 countries</h3>
                          <p>
                            Essent lisque persius interesset his et, in quot
                            quidam.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>Lower Fees</h3>
                          <p>
                            Lisque persius interesset his et, in quot quidam
                            persequeris.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>Easy to Use</h3>
                          <p>
                            Essent lisque persius interesset his et, in quot
                            quidam.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>Faster Payments</h3>
                          <p>
                            Quidam lisque persius interesset his et, in quot
                            quidam.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>100% secure</h3>
                          <p>
                            Essent lisque persius interesset his et, in quot
                            quidam.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-1">
                          <div className="featured-box-icon text-primary">
                            {" "}
                            <i className="far fa-check-circle" />{" "}
                          </div>
                          <h3>24/7 customer service</h3>
                          <p>
                            Quidam lisque persius interesset his et, in quot
                            quidam.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a
                        href="#"
                        className="btn btn-outline-primary shadow-none text-uppercase"
                      >
                        Sign up Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Why choose us End */}
          {/* How work
  ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 order-2 order-lg-1">
                  <div className="hero-wrap section h-100 p-5 mx-4 rounded-pill">
                    <div className="hero-mask rounded-pill opacity-7 bg-dark" />
                    <div
                      className="hero-bg rounded-pill"
                      style={{
                        "background-image": "url('./images/bg/image-6.jpg')",
                      }}
                    />
                    <div className="hero-content text-center py-5 my-5">
                      {" "}
                      <a
                        className="video-btn d-inline-flex"
                        href="#"
                        data-src="https://www.youtube.com/embed/7e90gBu4pas"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                      >
                        {" "}
                        <span className="playButton playButton-pulsing bg-white m-auto">
                          <i className="fas fa-play" />
                        </span>{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 my-auto text-center text-lg-start order-1 order-lg-2 mb-5 mb-lg-0">
                  <h2 className="text-9">How does it work?</h2>
                  <p className="lead">
                    Here???s Top reasons why using a Payyed account.
                  </p>
                  <p className="text-3">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure in quot quidam
                    mea essent possim iriure.
                  </p>
                  <p className="text-3">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure. lisque persius interesset
                    his et, in quot quidam mea essent possim iriure.
                  </p>
                  <a href="#" className="btn-link text-4">
                    Learn more
                    <i className="fas fa-chevron-right text-2 ms-2" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </section>
          {/* How work End */}
          {/* Testimonial
  ============================================= */}
          <section className="section">
            <div className="container">
              <h2 className="text-9 text-center">
                What people say about Payyed
              </h2>
              <p className="lead text-center mb-5">
                A payments experience people love to talk about
              </p>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-4">
                      ???Easy to use, reasonably priced simply dummy text of the
                      printing and typesetting industry. Quidam lisque persius
                      interesset his et, in quot quidam possim iriure.???
                    </p>
                    <strong className="d-block fw-500">Jay Shah</strong>{" "}
                    <span className="text-muted">
                      Founder at Icomatic Pvt Ltd
                    </span>{" "}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-4">
                      ???I am happy Working with printing and typesetting
                      industry. Quidam lisque persius interesset his et, in quot
                      quidam persequeris essent possim iriure.???
                    </p>
                    <strong className="d-block fw-500">Patrick Cary</strong>{" "}
                    <span className="text-muted">Freelancer from USA</span>{" "}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-4">
                      ???Only trying it out since a few days. But up to now
                      excellent. Seems to work flawlessly. I'm only using it for
                      sending money to friends at the moment.???
                    </p>
                    <strong className="d-block fw-500">Dennis Jacques</strong>{" "}
                    <span className="text-muted">User from USA</span>{" "}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-4">
                      ???I have used them twice now. Good rates, very efficient
                      service and it denies high street banks an undeserved
                      windfall. Excellent.???
                    </p>
                    <strong className="d-block fw-500">Chris Tom</strong>{" "}
                    <span className="text-muted">User from UK</span>{" "}
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <a href="#" className="btn-link text-4">
                  See more people review
                  <i className="fas fa-chevron-right text-2 ms-2" />
                </a>
              </div>
            </div>
          </section>
          {/* Testimonial end */}
          {/* Frequently asked questions
    ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">Frequently Asked Questions</h2>
              <p className="lead text-center mb-4 mb-sm-5">
                Can't find it here? Check out our{" "}
                <a className="btn-link" href="help.html">
                  Help center
                </a>
              </p>
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                  <hr className="mb-0" />
                  <div
                    className="accordion accordion-flush arrow-end"
                    id="popularTopics"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is Payyed?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. Mutat
                          tacimates id sit. Ridens mediocritatem ius an, eu nec
                          magna imperdiet.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How to receive money online?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          <p>
                            Pariatur cliche reprehenderit, enim eiusmod high
                            life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor
                            brunch. Lisque persius interesset his et, in quot
                            quidam persequeris vim, ad mea essent possim iriure.
                            Ad vegan excepteur butcher vice lomo.
                          </p>
                          Mutat tacimates id sit. Ridens mediocritatem ius an,
                          eu nec magna imperdiet. Lisque persius interesset his
                          et, in quot quidam persequeris vim, ad mea essent
                          possim iriure. Ad vegan excepteur butcher vice lomo.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Is my money safe with Payyed?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How much fees does Payyed charge?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          Pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What is the fastest way to receive money abroad?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Anim
                          pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can I open an Payyed account for business?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#popularTopics"
                      >
                        <div className="accordion-body">
                          Enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat
                          skateboard dolor brunch. Food truck quinoa nesciunt
                          laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                          aliqua put a bird on it squid single-origin coffee
                          nulla assumenda shoreditch et. Nihil anim keffiyeh
                          helvetica, craft beer labore wes anderson cred
                          nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0" />
                </div>
              </div>
              <div className="text-center mt-4">
                <a href="#" className="btn-link text-4">
                  See more FAQ
                  <i className="fas fa-chevron-right text-2 ms-2" />
                </a>
              </div>
            </div>
          </section>
          {/* Frequently asked questions end */}
          {/* Special Offer
    ============================================= */}
          <section className="hero-wrap py-5">
            <div className="hero-mask opacity-8 bg-dark" />
            <div
              className="hero-bg"
              style={{ "background-image": "url('images/bg/image-2.jpg')" }}
            />
            <div className="hero-content">
              <div className="container d-md-flex text-center text-md-start align-items-center justify-content-center">
                <h2 className="text-6 fw-400 text-white mb-3 mb-md-0">
                  Sign up today and get your first transaction fee free!
                </h2>
                <a
                  href="#"
                  className="btn btn-outline-light text-nowrap ms-0 ms-md-4"
                >
                  Sign up Now
                </a>{" "}
              </div>
            </div>
          </section>
          {/* Special Offer end */}
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
                    Copyright ?? 2022 <a href="#">Payyed</a>. All Rights
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
    </div>
  );
};

export default Receive;
