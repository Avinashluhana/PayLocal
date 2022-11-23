import React from "react";
import { Link } from "react-router-dom";
import "./Global.css";

const Send = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="main-wrapper">
        <div id="content">
          {/* Send Money
       ============================================= */}
          <section className="hero-wrap">
            <div className="hero-mask opacity-7 bg-dark" />
            <div
              className="hero-bg"
              style={{ "background-image": "url('images/bg/image-6.jpg')" }}
            />
            <div className="hero-content d-flex flex-column fullscreen-with-header">
              <div className="container my-auto py-5">
                <div className="row">
                  <div className="col-lg-6 col-xl-7 my-auto text-center text-lg-start pb-5 pb-lg-0">
                    <h2 className="text-17 text-white">
                      <span className="fw-400 text-15">A better way to</span>{" "}
                      <br />
                      Send Money
                    </h2>
                    <p className="text-4 text-white mb-4">
                      {" "}
                      Send money with a better exchange rate and avoid excessive
                      bank fees.
                    </p>
                    <a
                      className="btn btn-outline-light video-btn"
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
                  <div className="col-lg-6 col-xl-5 my-auto">
                    <div className="bg-white rounded shadow-md p-4">
                      <h3 className="text-5 mb-4 text-center">Send Money</h3>
                      <hr className="mb-4 mx-n4" />
                      <form id="form-send-money" method="post">
                        <div className="mb-3">
                          <label htmlFor="youSend" className="form-label">
                            You Send
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              type="text"
                              className="form-control"
                              data-bv-field="youSend"
                              id="youSend"
                              defaultValue="1,000"
                              placeholder
                            />
                            <span className="input-group-text p-0">
                              <select
                                id="youSendCurrency"
                                data-style="form-select bg-transparent border-0"
                                data-container="body"
                                data-live-search="true"
                                className="selectpicker form-control bg-transparent"
                                required
                              >
                                <optgroup label="Popular Currency">
                                  <option
                                    data-icon="currency-flag currency-flag-usd me-1"
                                    data-subtext="United States dollar"
                                    selected="selected"
                                    value
                                  >
                                    USD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-aud me-1"
                                    data-subtext="Australian dollar"
                                    value
                                  >
                                    AUD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-inr me-1"
                                    data-subtext="Indian rupee"
                                    value
                                  >
                                    INR
                                  </option>
                                </optgroup>
                                <option data-divider="true" />
                                <optgroup label="Other Currency">
                                  <option
                                    data-icon="currency-flag currency-flag-aed me-1"
                                    data-subtext="United Arab Emirates dirham"
                                    value
                                  >
                                    AED
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ars me-1"
                                    data-subtext="Argentine peso"
                                    value
                                  >
                                    ARS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-aud me-1"
                                    data-subtext="Australian dollar"
                                    value
                                  >
                                    AUD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-bdt me-1"
                                    data-subtext="Bangladeshi taka"
                                    value
                                  >
                                    BDT
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-bgn me-1"
                                    data-subtext="Bulgarian lev"
                                    value
                                  >
                                    BGN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-brl me-1"
                                    data-subtext="Brazilian real"
                                    value
                                  >
                                    BRL
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-cad me-1"
                                    data-subtext="Canadian dollar"
                                    value
                                  >
                                    CAD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-chf me-1"
                                    data-subtext="Swiss franc"
                                    value
                                  >
                                    CHF
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-clp me-1"
                                    data-subtext="Chilean peso"
                                    value
                                  >
                                    CLP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-cny me-1"
                                    data-subtext="Chinese yuan"
                                    value
                                  >
                                    CNY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-czk me-1"
                                    data-subtext="Czech koruna"
                                    value
                                  >
                                    CZK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-dkk me-1"
                                    data-subtext="Danish krone"
                                    value
                                  >
                                    DKK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-egp me-1"
                                    data-subtext="Egyptian pound"
                                    value
                                  >
                                    EGP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-eur me-1"
                                    data-subtext="Euro"
                                    value
                                  >
                                    EUR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-gbp me-1"
                                    data-subtext="British pound"
                                    value
                                  >
                                    GBP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-gel me-1"
                                    data-subtext="Georgian lari"
                                    value
                                  >
                                    GEL
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ghs me-1"
                                    data-subtext="Ghanaian cedi"
                                    value
                                  >
                                    GHS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-hkd me-1"
                                    data-subtext="Hong Kong dollar"
                                    value
                                  >
                                    HKD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-hrk me-1"
                                    data-subtext="Croatian kuna"
                                    value
                                  >
                                    HRK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-huf me-1"
                                    data-subtext="Hungarian forint"
                                    value
                                  >
                                    HUF
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-idr me-1"
                                    data-subtext="Indonesian rupiah"
                                    value
                                  >
                                    IDR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ils me-1"
                                    data-subtext="Israeli shekel"
                                    value
                                  >
                                    ILS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-inr me-1"
                                    data-subtext="Indian rupee"
                                    value
                                  >
                                    INR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-jpy me-1"
                                    data-subtext="Japanese yen"
                                    value
                                  >
                                    JPY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-kes me-1"
                                    data-subtext="Kenyan shilling"
                                    value
                                  >
                                    KES
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-krw me-1"
                                    data-subtext="South Korean won"
                                    value
                                  >
                                    KRW
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-lkr me-1"
                                    data-subtext="Sri Lankan rupee"
                                    value
                                  >
                                    LKR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-mad me-1"
                                    data-subtext="Moroccan dirham"
                                    value
                                  >
                                    MAD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-mxn me-1"
                                    data-subtext="Mexican peso"
                                    value
                                  >
                                    MXN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-myr me-1"
                                    data-subtext="Malaysian ringgit"
                                    value
                                  >
                                    MYR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ngn me-1"
                                    data-subtext="Nigerian naira"
                                    value
                                  >
                                    NGN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-nok me-1"
                                    data-subtext="Norwegian krone"
                                    value
                                  >
                                    NOK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-npr me-1"
                                    data-subtext="Nepalese rupee"
                                    value
                                  >
                                    NPR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-nzd me-1"
                                    data-subtext="New Zealand dollar"
                                    value
                                  >
                                    NZD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pen me-1"
                                    data-subtext="Peruvian nuevo sol"
                                    value
                                  >
                                    PEN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-php me-1"
                                    data-subtext="Philippine peso"
                                    value
                                  >
                                    PHP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pkr me-1"
                                    data-subtext="Pakistani rupee"
                                    value
                                  >
                                    PKR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pln me-1"
                                    data-subtext="Polish złoty"
                                    value
                                  >
                                    PLN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ron me-1"
                                    data-subtext="Romanian leu"
                                    value
                                  >
                                    RON
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-rub me-1"
                                    data-subtext="Russian rouble"
                                    value
                                  >
                                    RUB
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-sek me-1"
                                    data-subtext="Swedish krona"
                                    value
                                  >
                                    SEK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-sgd me-1"
                                    data-subtext="Singapore dollar"
                                    value
                                  >
                                    SGD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-thb me-1"
                                    data-subtext="Thai baht"
                                    value
                                  >
                                    THB
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-try me-1"
                                    data-subtext="Turkish lira"
                                    value
                                  >
                                    TRY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-uah me-1"
                                    data-subtext="Ukrainian hryvnia"
                                    value
                                  >
                                    UAH
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ugx me-1"
                                    data-subtext="Ugandan shilling"
                                    value
                                  >
                                    UGX
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-vnd me-1"
                                    data-subtext="Vietnamese dong"
                                    value
                                  >
                                    VND
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-zar me-1"
                                    data-subtext="South African rand"
                                    value
                                  >
                                    ZAR
                                  </option>
                                </optgroup>
                              </select>
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="recipientGets" className="form-label">
                            Recipient Gets
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              type="text"
                              className="form-control"
                              data-bv-field="recipientGets"
                              id="recipientGets"
                              defaultValue="1,410.06"
                              placeholder
                            />
                            <span className="input-group-text p-0">
                              <select
                                id="recipientCurrency"
                                data-style="form-select bg-transparent border-0"
                                data-container="body"
                                data-live-search="true"
                                className="selectpicker form-control bg-transparent"
                                required
                              >
                                <optgroup label="Popular Currency">
                                  <option
                                    data-icon="currency-flag currency-flag-usd me-1"
                                    data-subtext="United States dollar"
                                    value
                                  >
                                    USD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-aud me-1"
                                    data-subtext="Australian dollar"
                                    selected="selected"
                                    value
                                  >
                                    AUD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-inr me-1"
                                    data-subtext="Indian rupee"
                                    value
                                  >
                                    INR
                                  </option>
                                </optgroup>
                                <option data-divider="true" />
                                <optgroup label="Other Currency">
                                  <option
                                    data-icon="currency-flag currency-flag-aed me-1"
                                    data-subtext="United Arab Emirates dirham"
                                    value
                                  >
                                    AED
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ars me-1"
                                    data-subtext="Argentine peso"
                                    value
                                  >
                                    ARS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-aud me-1"
                                    data-subtext="Australian dollar"
                                    value
                                  >
                                    AUD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-bdt me-1"
                                    data-subtext="Bangladeshi taka"
                                    value
                                  >
                                    BDT
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-bgn me-1"
                                    data-subtext="Bulgarian lev"
                                    value
                                  >
                                    BGN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-brl me-1"
                                    data-subtext="Brazilian real"
                                    value
                                  >
                                    BRL
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-cad me-1"
                                    data-subtext="Canadian dollar"
                                    value
                                  >
                                    CAD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-chf me-1"
                                    data-subtext="Swiss franc"
                                    value
                                  >
                                    CHF
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-clp me-1"
                                    data-subtext="Chilean peso"
                                    value
                                  >
                                    CLP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-cny me-1"
                                    data-subtext="Chinese yuan"
                                    value
                                  >
                                    CNY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-czk me-1"
                                    data-subtext="Czech koruna"
                                    value
                                  >
                                    CZK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-dkk me-1"
                                    data-subtext="Danish krone"
                                    value
                                  >
                                    DKK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-egp me-1"
                                    data-subtext="Egyptian pound"
                                    value
                                  >
                                    EGP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-eur me-1"
                                    data-subtext="Euro"
                                    value
                                  >
                                    EUR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-gbp me-1"
                                    data-subtext="British pound"
                                    value
                                  >
                                    GBP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-gel me-1"
                                    data-subtext="Georgian lari"
                                    value
                                  >
                                    GEL
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ghs me-1"
                                    data-subtext="Ghanaian cedi"
                                    value
                                  >
                                    GHS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-hkd me-1"
                                    data-subtext="Hong Kong dollar"
                                    value
                                  >
                                    HKD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-hrk me-1"
                                    data-subtext="Croatian kuna"
                                    value
                                  >
                                    HRK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-huf me-1"
                                    data-subtext="Hungarian forint"
                                    value
                                  >
                                    HUF
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-idr me-1"
                                    data-subtext="Indonesian rupiah"
                                    value
                                  >
                                    IDR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ils me-1"
                                    data-subtext="Israeli shekel"
                                    value
                                  >
                                    ILS
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-inr me-1"
                                    data-subtext="Indian rupee"
                                    value
                                  >
                                    INR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-jpy me-1"
                                    data-subtext="Japanese yen"
                                    value
                                  >
                                    JPY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-kes me-1"
                                    data-subtext="Kenyan shilling"
                                    value
                                  >
                                    KES
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-krw me-1"
                                    data-subtext="South Korean won"
                                    value
                                  >
                                    KRW
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-lkr me-1"
                                    data-subtext="Sri Lankan rupee"
                                    value
                                  >
                                    LKR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-mad me-1"
                                    data-subtext="Moroccan dirham"
                                    value
                                  >
                                    MAD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-mxn me-1"
                                    data-subtext="Mexican peso"
                                    value
                                  >
                                    MXN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-myr me-1"
                                    data-subtext="Malaysian ringgit"
                                    value
                                  >
                                    MYR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ngn me-1"
                                    data-subtext="Nigerian naira"
                                    value
                                  >
                                    NGN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-nok me-1"
                                    data-subtext="Norwegian krone"
                                    value
                                  >
                                    NOK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-npr me-1"
                                    data-subtext="Nepalese rupee"
                                    value
                                  >
                                    NPR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-nzd me-1"
                                    data-subtext="New Zealand dollar"
                                    value
                                  >
                                    NZD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pen me-1"
                                    data-subtext="Peruvian nuevo sol"
                                    value
                                  >
                                    PEN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-php me-1"
                                    data-subtext="Philippine peso"
                                    value
                                  >
                                    PHP
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pkr me-1"
                                    data-subtext="Pakistani rupee"
                                    value
                                  >
                                    PKR
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-pln me-1"
                                    data-subtext="Polish złoty"
                                    value
                                  >
                                    PLN
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ron me-1"
                                    data-subtext="Romanian leu"
                                    value
                                  >
                                    RON
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-rub me-1"
                                    data-subtext="Russian rouble"
                                    value
                                  >
                                    RUB
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-sek me-1"
                                    data-subtext="Swedish krona"
                                    value
                                  >
                                    SEK
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-sgd me-1"
                                    data-subtext="Singapore dollar"
                                    value
                                  >
                                    SGD
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-thb me-1"
                                    data-subtext="Thai baht"
                                    value
                                  >
                                    THB
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-try me-1"
                                    data-subtext="Turkish lira"
                                    value
                                  >
                                    TRY
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-uah me-1"
                                    data-subtext="Ukrainian hryvnia"
                                    value
                                  >
                                    UAH
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-ugx me-1"
                                    data-subtext="Ugandan shilling"
                                    value
                                  >
                                    UGX
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-vnd me-1"
                                    data-subtext="Vietnamese dong"
                                    value
                                  >
                                    VND
                                  </option>
                                  <option
                                    data-icon="currency-flag currency-flag-zar me-1"
                                    data-subtext="South African rand"
                                    value
                                  >
                                    ZAR
                                  </option>
                                </optgroup>
                              </select>
                            </span>
                          </div>
                        </div>
                        <p className="text-muted mb-1">
                          Total fees - <span className="fw-500">7.21 USD</span>
                        </p>
                        <p className="text-muted">
                          The current exchange rate is{" "}
                          <span className="fw-500">1 USD = 1.42030 AUD</span>
                        </p>
                        <div className="d-grid">
                          <button className="btn btn-primary">Continue</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Send Money End */}
          {/* How it works
          ============================================= */}
          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">
                {" "}
                The simple way to send money
              </h2>
              <p className="lead text-center mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="featured-box style-3">
                    <div className="featured-box-icon text-light">
                      <span className="w-100 text-20 fw-500">1</span>
                    </div>
                    <h3>Sign Up Your Account</h3>
                    <p className="text-3">
                      Become a register user first, then log in to your account
                      and enter your card or bank details that is required for
                      you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="featured-box style-3">
                    <div className="featured-box-icon text-light">
                      <span className="w-100 text-20 fw-500">2</span>
                    </div>
                    <h3>Select Your Recipient</h3>
                    <p className="text-3">
                      Enter your recipient's email address then add an amount
                      with currency to send securely.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="featured-box style-3">
                    <div className="featured-box-icon text-light">
                      <span className="w-100 text-20 fw-500">3</span>
                    </div>
                    <h3>Send Money</h3>
                    <p className="text-3">
                      After sending money, the recipient will be notified via an
                      email when money has been transferred to their account.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <a
                  href="#"
                  className="btn btn-outline-primary shadow-none text-uppercase"
                >
                  Sign up Now
                </a>
              </div>
            </div>
          </section>
          {/* How it works End */}
          {/* Why choose us
          ============================================= */}
          <section className="section">
            <div className="container">
              <h2 className="text-9 text-center">Why choose payyed?</h2>
              <p className="lead text-center mb-5">
                Here’s Top 4 reasons why using a Payyed account for manage your
                money.
              </p>
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="hero-wrap section h-100 p-5 rounded">
                    <div className="hero-mask rounded opacity-6 bg-dark" />
                    <div
                      className="hero-bg rounded"
                      style={{
                        "background-image": "url('./images/bg/image-6.jpg')",
                      }}
                    />
                    <div className="hero-content">
                      <h2 className="text-6 text-white mb-3">Why Payyed?</h2>
                      <p className="text-light mb-5">
                        Lisque persius interesset his et, in quot quidam
                        persequeris vim, ad mea essent possim iriure. Mutat
                        tacimates id sit. Ridens mediocritatem ius an, eu nec
                        magna imperdiet.
                      </p>
                      <h2 className="text-6 text-white mb-3">
                        Send Money with Payyed
                      </h2>
                      <p className="text-light">
                        Lisque persius interesset his et, in quot quidam
                        persequeris vim, ad mea essent possim iriure. Mutat
                        tacimates id sit. Ridens mediocritatem ius an, eu nec
                        magna imperdiet.
                      </p>
                      <p className="text-light mb-0">
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="far fa-check-circle" />{" "}
                    </div>
                    <h3>Over 180 countries</h3>
                    <p>
                      Essent lisque persius interesset his et, in quot quidam.
                    </p>
                  </div>
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
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="far fa-check-circle" />{" "}
                    </div>
                    <h3>Easy to Use</h3>
                    <p>
                      Essent lisque persius interesset his et, in quot quidam.
                    </p>
                  </div>
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="far fa-check-circle" />{" "}
                    </div>
                    <h3>Faster Payments</h3>
                    <p>
                      Quidam lisque persius interesset his et, in quot quidam.
                    </p>
                  </div>
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="far fa-check-circle" />{" "}
                    </div>
                    <h3>100% secure</h3>
                    <p>
                      Essent lisque persius interesset his et, in quot quidam.
                    </p>
                  </div>
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="far fa-check-circle" />{" "}
                    </div>
                    <h3>24/7 customer service</h3>
                    <p>
                      Quidam lisque persius interesset his et, in quot quidam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why choose us End */}
          {/* How work
          ============================================= */}
          <section className="hero-wrap section shadow-md">
            <div className="hero-mask opacity-9 bg-primary" />
            <div
              className="hero-bg"
              style={{ "background-image": "url('images/bg/image-1.jpg')" }}
            />
            <div className="hero-content my-3 my-lg-5">
              <div className="container text-center">
                <h2 className="text-10 text-white mb-4 mb-lg-5">
                  How does send money work?
                </h2>
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
          </section>
          {/* How work End */}
          {/* Testimonial
          ============================================= */}
          <section className="section">
            <div className="container">
              <h2 className="text-9 text-center">
                What people say about Payyed
              </h2>
              <p className="lead text-center mb-4">
                A payments experience people love to talk about
              </p>
              <div className="row">
                <div className="col-lg-10 col-xl-8 mx-auto">
                  <div
                    className="owl-carousel owl-theme"
                    data-autoplay="true"
                    data-nav="true"
                    data-loop="true"
                    data-margin={30}
                    data-stagepadding={5}
                    data-items-xs={1}
                    data-items-sm={1}
                    data-items-md={1}
                    data-items-lg={1}
                  >
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “Easy to use, reasonably priced simply dummy text of
                          the printing and typesetting industry. Quidam lisque
                          persius interesset his et, in quot quidam possim
                          iriure.”
                        </p>
                        <strong className="d-block fw-500">Jay Shah</strong>{" "}
                        <span className="text-muted">
                          Founder at Icomatic Pvt Ltd
                        </span>{" "}
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “I am happy Working with printing and typesetting
                          industry. Quidam lisque persius interesset his et, in
                          quot quidam persequeris essent possim iriure.”
                        </p>
                        <strong className="d-block fw-500">Patrick Cary</strong>{" "}
                        <span className="text-muted">Freelancer from USA</span>{" "}
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “Fast easy to use transfers to a different currency.
                          Much better value that the banks.”
                        </p>
                        <strong className="d-block fw-500">De Mortel</strong>{" "}
                        <span className="text-muted">Online Retail</span>{" "}
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “I have used them twice now. Good rates, very
                          efficient service and it denies high street banks an
                          undeserved windfall. Excellent.”
                        </p>
                        <strong className="d-block fw-500">Chris Tom</strong>{" "}
                        <span className="text-muted">User from UK</span>{" "}
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “It's a real good idea to manage your money by payyed.
                          The rates are fair and you can carry out the
                          transactions without worrying!”
                        </p>
                        <strong className="d-block fw-500">
                          Mauri Lindberg
                        </strong>{" "}
                        <span className="text-muted">
                          Freelancer from Australia
                        </span>{" "}
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial rounded text-center p-4">
                        <p className="text-9 text-muted opacity-2 mb-2">
                          <i className="fa fa-quote-left" />
                        </p>
                        <p className="text-4">
                          “Only trying it out since a few days. But up to now
                          excellent. Seems to work flawlessly. I'm only using it
                          for sending money to friends at the moment.”
                        </p>
                        <strong className="d-block fw-500">
                          Dennis Jacques
                        </strong>{" "}
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
                          How to send money online?
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
                          What is the fastest way to send money abroad?
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

export default Send;
