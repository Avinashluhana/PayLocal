import React from "react";
import "./Global.css";
import Footer from "./Footer";

const Site = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        {/* <div id="preloader">
          <div data-loader="dual-ring"></div>
        </div> */}
        {/* Document Wrapper  
         ============================================= */}
        <div id="main-wrapper">
          {/* Content
             ============================================= */}
          <div id="content">
            {/* Send/Request Money
             ============================================= */}
            <section className="hero-wrap section shadow-md pb-4">
              <div className="hero-mask opacity-7 bg-dark" />
              <div
                className="hero-bg"
                style={{
                  "background-image":
                    "url('images/pexels-karolina-grabowska-4968384.jpg')",
                }}
              />
              <div className="hero-content py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-xl-7 my-auto text-lg-left pb-4 pb-lg-0">
                      <h1 className=" font-weight-300 text-white mb-4 banner-txt">
                        Localizing international transactions as the fastest way
                        to transfer money.
                        {/* <br className="d-none d-xl-block" /> */}
                        {/* <br className="d-none d-xl-block" /> */}
                      </h1>
                      <p className="text-4 text-white mb-4">
                        Our Technology matches people locally with parallel
                        transaction requirements thereby removing exchange fees
                        and accelerating the transaction process.
                      </p>
                      <a
                        href="#"
                        className="btn-link text-4 text-decoration-none"
                      >
                        <i className="fas fa-chevron-right text-2 ml-2" />
                      </a>
                    </div>
                    <div className="col-lg-6 col-xl-5 my-auto">
                      <ul
                        className="nav nav-tabs nav-justified bg-white style-5 rounded-top"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="send-money-tab"
                            data-toggle="tab"
                            href="#send-money"
                            role="tab"
                            aria-controls="send-money"
                            aria-selected="true"
                          >
                            Send Money
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="request-money-tab"
                            data-toggle="tab"
                            href="#request-money"
                            role="tab"
                            aria-controls="request-money"
                            aria-selected="false"
                          >
                            Request Money
                          </a>{" "}
                        </li>
                      </ul>
                      <div
                        className="tab-content p-4 bg-white rounded-bottom"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="send-money"
                          role="tabpanel"
                          aria-labelledby="send-money-tab"
                        >
                          <form id="form-send-money" method="post">
                            <div className="form-group">
                              <label htmlFor="youSend">You Send</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  data-bv-field="youSend"
                                  id="youSend"
                                  defaultValue="1,000"
                                  placeholder
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text p-0">
                                    <select
                                      id="youSendCurrency"
                                      data-style="custom-select bg-transparent border-0"
                                      data-container="body"
                                      data-live-search="true"
                                      className="selectpicker form-control bg-transparent"
                                      required
                                    >
                                      <optgroup label="Popular Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-usd mr-1"
                                          data-subtext="United States dollar"
                                          selected="selected"
                                          value
                                        >
                                          USD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                      </optgroup>
                                      <option data-divider="true" />
                                      <optgroup label="Other Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-aed mr-1"
                                          data-subtext="United Arab Emirates dirham"
                                          value
                                        >
                                          AED
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ars mr-1"
                                          data-subtext="Argentine peso"
                                          value
                                        >
                                          ARS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bdt mr-1"
                                          data-subtext="Bangladeshi taka"
                                          value
                                        >
                                          BDT
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bgn mr-1"
                                          data-subtext="Bulgarian lev"
                                          value
                                        >
                                          BGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-brl mr-1"
                                          data-subtext="Brazilian real"
                                          value
                                        >
                                          BRL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cad mr-1"
                                          data-subtext="Canadian dollar"
                                          value
                                        >
                                          CAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-chf mr-1"
                                          data-subtext="Swiss franc"
                                          value
                                        >
                                          CHF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-clp mr-1"
                                          data-subtext="Chilean peso"
                                          value
                                        >
                                          CLP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cny mr-1"
                                          data-subtext="Chinese yuan"
                                          value
                                        >
                                          CNY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-czk mr-1"
                                          data-subtext="Czech koruna"
                                          value
                                        >
                                          CZK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-dkk mr-1"
                                          data-subtext="Danish krone"
                                          value
                                        >
                                          DKK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-egp mr-1"
                                          data-subtext="Egyptian pound"
                                          value
                                        >
                                          EGP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-eur mr-1"
                                          data-subtext="Euro"
                                          value
                                        >
                                          EUR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gbp mr-1"
                                          data-subtext="British pound"
                                          value
                                        >
                                          GBP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gel mr-1"
                                          data-subtext="Georgian lari"
                                          value
                                        >
                                          GEL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ghs mr-1"
                                          data-subtext="Ghanaian cedi"
                                          value
                                        >
                                          GHS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hkd mr-1"
                                          data-subtext="Hong Kong dollar"
                                          value
                                        >
                                          HKD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hrk mr-1"
                                          data-subtext="Croatian kuna"
                                          value
                                        >
                                          HRK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-huf mr-1"
                                          data-subtext="Hungarian forint"
                                          value
                                        >
                                          HUF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-idr mr-1"
                                          data-subtext="Indonesian rupiah"
                                          value
                                        >
                                          IDR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ils mr-1"
                                          data-subtext="Israeli shekel"
                                          value
                                        >
                                          ILS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-jpy mr-1"
                                          data-subtext="Japanese yen"
                                          value
                                        >
                                          JPY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-kes mr-1"
                                          data-subtext="Kenyan shilling"
                                          value
                                        >
                                          KES
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-krw mr-1"
                                          data-subtext="South Korean won"
                                          value
                                        >
                                          KRW
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-lkr mr-1"
                                          data-subtext="Sri Lankan rupee"
                                          value
                                        >
                                          LKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mad mr-1"
                                          data-subtext="Moroccan dirham"
                                          value
                                        >
                                          MAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mxn mr-1"
                                          data-subtext="Mexican peso"
                                          value
                                        >
                                          MXN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-myr mr-1"
                                          data-subtext="Malaysian ringgit"
                                          value
                                        >
                                          MYR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ngn mr-1"
                                          data-subtext="Nigerian naira"
                                          value
                                        >
                                          NGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nok mr-1"
                                          data-subtext="Norwegian krone"
                                          value
                                        >
                                          NOK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-npr mr-1"
                                          data-subtext="Nepalese rupee"
                                          value
                                        >
                                          NPR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nzd mr-1"
                                          data-subtext="New Zealand dollar"
                                          value
                                        >
                                          NZD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pen mr-1"
                                          data-subtext="Peruvian nuevo sol"
                                          value
                                        >
                                          PEN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-php mr-1"
                                          data-subtext="Philippine peso"
                                          value
                                        >
                                          PHP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pkr mr-1"
                                          data-subtext="Pakistani rupee"
                                          value
                                        >
                                          PKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pln mr-1"
                                          data-subtext="Polish złoty"
                                          value
                                        >
                                          PLN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ron mr-1"
                                          data-subtext="Romanian leu"
                                          value
                                        >
                                          RON
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-rub mr-1"
                                          data-subtext="Russian rouble"
                                          value
                                        >
                                          RUB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sek mr-1"
                                          data-subtext="Swedish krona"
                                          value
                                        >
                                          SEK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sgd mr-1"
                                          data-subtext="Singapore dollar"
                                          value
                                        >
                                          SGD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-thb mr-1"
                                          data-subtext="Thai baht"
                                          value
                                        >
                                          THB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-try mr-1"
                                          data-subtext="Turkish lira"
                                          value
                                        >
                                          TRY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-uah mr-1"
                                          data-subtext="Ukrainian hryvnia"
                                          value
                                        >
                                          UAH
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ugx mr-1"
                                          data-subtext="Ugandan shilling"
                                          value
                                        >
                                          UGX
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-vnd mr-1"
                                          data-subtext="Vietnamese dong"
                                          value
                                        >
                                          VND
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-zar mr-1"
                                          data-subtext="South African rand"
                                          value
                                        >
                                          ZAR
                                        </option>
                                      </optgroup>
                                    </select>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="recipientGets">
                                Recipient Gets
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  {" "}
                                  <span className="input-group-text">
                                    $
                                  </span>{" "}
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  data-bv-field="recipientGets"
                                  id="recipientGets"
                                  defaultValue="1,410.06"
                                  placeholder
                                />
                                <div className="input-group-append">
                                  {" "}
                                  <span className="input-group-text p-0">
                                    <select
                                      id="recipientCurrency"
                                      data-style="custom-select bg-transparent border-0"
                                      data-container="body"
                                      data-live-search="true"
                                      className="selectpicker form-control bg-transparent"
                                      required
                                    >
                                      <optgroup label="Popular Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-usd mr-1"
                                          data-subtext="United States dollar"
                                          value
                                        >
                                          USD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          selected="selected"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                      </optgroup>
                                      <option data-divider="true" />
                                      <optgroup label="Other Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-aed mr-1"
                                          data-subtext="United Arab Emirates dirham"
                                          value
                                        >
                                          AED
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ars mr-1"
                                          data-subtext="Argentine peso"
                                          value
                                        >
                                          ARS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bdt mr-1"
                                          data-subtext="Bangladeshi taka"
                                          value
                                        >
                                          BDT
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bgn mr-1"
                                          data-subtext="Bulgarian lev"
                                          value
                                        >
                                          BGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-brl mr-1"
                                          data-subtext="Brazilian real"
                                          value
                                        >
                                          BRL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cad mr-1"
                                          data-subtext="Canadian dollar"
                                          value
                                        >
                                          CAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-chf mr-1"
                                          data-subtext="Swiss franc"
                                          value
                                        >
                                          CHF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-clp mr-1"
                                          data-subtext="Chilean peso"
                                          value
                                        >
                                          CLP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cny mr-1"
                                          data-subtext="Chinese yuan"
                                          value
                                        >
                                          CNY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-czk mr-1"
                                          data-subtext="Czech koruna"
                                          value
                                        >
                                          CZK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-dkk mr-1"
                                          data-subtext="Danish krone"
                                          value
                                        >
                                          DKK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-egp mr-1"
                                          data-subtext="Egyptian pound"
                                          value
                                        >
                                          EGP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-eur mr-1"
                                          data-subtext="Euro"
                                          value
                                        >
                                          EUR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gbp mr-1"
                                          data-subtext="British pound"
                                          value
                                        >
                                          GBP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gel mr-1"
                                          data-subtext="Georgian lari"
                                          value
                                        >
                                          GEL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ghs mr-1"
                                          data-subtext="Ghanaian cedi"
                                          value
                                        >
                                          GHS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hkd mr-1"
                                          data-subtext="Hong Kong dollar"
                                          value
                                        >
                                          HKD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hrk mr-1"
                                          data-subtext="Croatian kuna"
                                          value
                                        >
                                          HRK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-huf mr-1"
                                          data-subtext="Hungarian forint"
                                          value
                                        >
                                          HUF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-idr mr-1"
                                          data-subtext="Indonesian rupiah"
                                          value
                                        >
                                          IDR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ils mr-1"
                                          data-subtext="Israeli shekel"
                                          value
                                        >
                                          ILS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-jpy mr-1"
                                          data-subtext="Japanese yen"
                                          value
                                        >
                                          JPY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-kes mr-1"
                                          data-subtext="Kenyan shilling"
                                          value
                                        >
                                          KES
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-krw mr-1"
                                          data-subtext="South Korean won"
                                          value
                                        >
                                          KRW
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-lkr mr-1"
                                          data-subtext="Sri Lankan rupee"
                                          value
                                        >
                                          LKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mad mr-1"
                                          data-subtext="Moroccan dirham"
                                          value
                                        >
                                          MAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mxn mr-1"
                                          data-subtext="Mexican peso"
                                          value
                                        >
                                          MXN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-myr mr-1"
                                          data-subtext="Malaysian ringgit"
                                          value
                                        >
                                          MYR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ngn mr-1"
                                          data-subtext="Nigerian naira"
                                          value
                                        >
                                          NGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nok mr-1"
                                          data-subtext="Norwegian krone"
                                          value
                                        >
                                          NOK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-npr mr-1"
                                          data-subtext="Nepalese rupee"
                                          value
                                        >
                                          NPR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nzd mr-1"
                                          data-subtext="New Zealand dollar"
                                          value
                                        >
                                          NZD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pen mr-1"
                                          data-subtext="Peruvian nuevo sol"
                                          value
                                        >
                                          PEN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-php mr-1"
                                          data-subtext="Philippine peso"
                                          value
                                        >
                                          PHP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pkr mr-1"
                                          data-subtext="Pakistani rupee"
                                          value
                                        >
                                          PKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pln mr-1"
                                          data-subtext="Polish złoty"
                                          value
                                        >
                                          PLN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ron mr-1"
                                          data-subtext="Romanian leu"
                                          value
                                        >
                                          RON
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-rub mr-1"
                                          data-subtext="Russian rouble"
                                          value
                                        >
                                          RUB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sek mr-1"
                                          data-subtext="Swedish krona"
                                          value
                                        >
                                          SEK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sgd mr-1"
                                          data-subtext="Singapore dollar"
                                          value
                                        >
                                          SGD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-thb mr-1"
                                          data-subtext="Thai baht"
                                          value
                                        >
                                          THB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-try mr-1"
                                          data-subtext="Turkish lira"
                                          value
                                        >
                                          TRY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-uah mr-1"
                                          data-subtext="Ukrainian hryvnia"
                                          value
                                        >
                                          UAH
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ugx mr-1"
                                          data-subtext="Ugandan shilling"
                                          value
                                        >
                                          UGX
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-vnd mr-1"
                                          data-subtext="Vietnamese dong"
                                          value
                                        >
                                          VND
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-zar mr-1"
                                          data-subtext="South African rand"
                                          value
                                        >
                                          ZAR
                                        </option>
                                      </optgroup>
                                    </select>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                            <p className="text-muted mb-1">
                              Total fees -{" "}
                              <span className="font-weight-500">7.21 USD</span>
                            </p>
                            <p className="text-muted">
                              The current exchange rate is{" "}
                              <span className="font-weight-500">
                                1 USD = 1.42030 AUD
                              </span>
                            </p>
                            <button className="btn btn-primary btn-block">
                              Continue
                            </button>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="request-money"
                          role="tabpanel"
                          aria-labelledby="request-money-tab"
                        >
                          <form id="form-request-money" method="post">
                            <div className="form-group">
                              <label htmlFor="myCountrie">I am in</label>
                              <select
                                id="myCountrie"
                                data-style="custom-select"
                                className="selectpicker form-control"
                                data-live-search="true"
                              >
                                <option value={244}>Aaland Islands</option>
                                <option value={1}>Afghanistan</option>
                                <option value={2}>Albania</option>
                                <option value={3}>Algeria</option>
                                <option value={4}>American Samoa</option>
                                <option value={5}>Andorra</option>
                                <option value={6}>Angola</option>
                                <option value={7}>Anguilla</option>
                                <option value={8}>Antarctica</option>
                                <option value={9}>Antigua and Barbuda</option>
                                <option value={10}>Argentina</option>
                                <option value={11}>Armenia</option>
                                <option value={12}>Aruba</option>
                                <option value={252}>
                                  Ascension Island (British)
                                </option>
                                <option value={13}>Australia</option>
                                <option value={14}>Austria</option>
                                <option value={15}>Azerbaijan</option>
                                <option value={16}>Bahamas</option>
                                <option value={17}>Bahrain</option>
                                <option value={18}>Bangladesh</option>
                                <option value={19}>Barbados</option>
                                <option value={20}>Belarus</option>
                                <option value={21}>Belgium</option>
                                <option value={22}>Belize</option>
                                <option value={23}>Benin</option>
                                <option value={24}>Bermuda</option>
                                <option value={25}>Bhutan</option>
                                <option value={26}>Bolivia</option>
                                <option value={245}>
                                  Bonaire, Sint Eustatius and Saba
                                </option>
                                <option value={27}>
                                  Bosnia and Herzegovina
                                </option>
                                <option value={28}>Botswana</option>
                                <option value={29}>Bouvet Island</option>
                                <option value={30}>Brazil</option>
                                <option value={31}>
                                  British Indian Ocean Territory
                                </option>
                                <option value={32}>Brunei Darussalam</option>
                                <option value={33}>Bulgaria</option>
                                <option value={34}>Burkina Faso</option>
                                <option value={35}>Burundi</option>
                                <option value={36}>Cambodia</option>
                                <option value={37}>Cameroon</option>
                                <option value={38}>Canada</option>
                                <option value={251}>Canary Islands</option>
                                <option value={39}>Cape Verde</option>
                                <option value={40}>Cayman Islands</option>
                                <option value={41}>
                                  Central African Republic
                                </option>
                                <option value={42}>Chad</option>
                                <option value={43}>Chile</option>
                                <option value={44}>China</option>
                                <option value={45}>Christmas Island</option>
                                <option value={46}>
                                  Cocos (Keeling) Islands
                                </option>
                                <option value={47}>Colombia</option>
                                <option value={48}>Comoros</option>
                                <option value={49}>Congo</option>
                                <option value={50}>Cook Islands</option>
                                <option value={51}>Costa Rica</option>
                                <option value={52}>Cote D'Ivoire</option>
                                <option value={53}>Croatia</option>
                                <option value={54}>Cuba</option>
                                <option value={246}>Curacao</option>
                                <option value={55}>Cyprus</option>
                                <option value={56}>Czech Republic</option>
                                <option value={237}>
                                  Democratic Republic of Congo
                                </option>
                                <option value={57}>Denmark</option>
                                <option value={58}>Djibouti</option>
                                <option value={59}>Dominica</option>
                                <option value={60}>Dominican Republic</option>
                                <option value={61}>East Timor</option>
                                <option value={62}>Ecuador</option>
                                <option value={63}>Egypt</option>
                                <option value={64}>El Salvador</option>
                                <option value={65}>Equatorial Guinea</option>
                                <option value={66}>Eritrea</option>
                                <option value={67}>Estonia</option>
                                <option value={68}>Ethiopia</option>
                                <option value={69}>
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value={70}>Faroe Islands</option>
                                <option value={71}>Fiji</option>
                                <option value={72}>Finland</option>
                                <option value={74}>France, Metropolitan</option>
                                <option value={75}>French Guiana</option>
                                <option value={76}>French Polynesia</option>
                                <option value={77}>
                                  French Southern Territories
                                </option>
                                <option value={126}>FYROM</option>
                                <option value={78}>Gabon</option>
                                <option value={79}>Gambia</option>
                                <option value={80}>Georgia</option>
                                <option value={81}>Germany</option>
                                <option value={82}>Ghana</option>
                                <option value={83}>Gibraltar</option>
                                <option value={84}>Greece</option>
                                <option value={85}>Greenland</option>
                                <option value={86}>Grenada</option>
                                <option value={87}>Guadeloupe</option>
                                <option value={88}>Guam</option>
                                <option value={89}>Guatemala</option>
                                <option value={256}>Guernsey</option>
                                <option value={90}>Guinea</option>
                                <option value={91}>Guinea-Bissau</option>
                                <option value={92}>Guyana</option>
                                <option value={93}>Haiti</option>
                                <option value={94}>
                                  Heard and Mc Donald Islands
                                </option>
                                <option value={95}>Honduras</option>
                                <option value={96}>Hong Kong</option>
                                <option value={97}>Hungary</option>
                                <option value={98}>Iceland</option>
                                <option value={99}>India</option>
                                <option value={100}>Indonesia</option>
                                <option value={101}>
                                  Iran (Islamic Republic of)
                                </option>
                                <option value={102}>Iraq</option>
                                <option value={103}>Ireland</option>
                                <option value={254}>Isle of Man</option>
                                <option value={104}>Israel</option>
                                <option value={105}>Italy</option>
                                <option value={106}>Jamaica</option>
                                <option value={107}>Japan</option>
                                <option value={257}>Jersey</option>
                                <option value={108}>Jordan</option>
                                <option value={109}>Kazakhstan</option>
                                <option value={110}>Kenya</option>
                                <option value={111}>Kiribati</option>
                                <option value={113}>Korea, Republic of</option>
                                <option value={253}>Kosovo, Republic of</option>
                                <option value={114}>Kuwait</option>
                                <option value={115}>Kyrgyzstan</option>
                                <option value={116}>
                                  Lao People's Democratic Republic
                                </option>
                                <option value={117}>Latvia</option>
                                <option value={118}>Lebanon</option>
                                <option value={119}>Lesotho</option>
                                <option value={120}>Liberia</option>
                                <option value={121}>
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value={122}>Liechtenstein</option>
                                <option value={123}>Lithuania</option>
                                <option value={124}>Luxembourg</option>
                                <option value={125}>Macau</option>
                                <option value={127}>Madagascar</option>
                                <option value={128}>Malawi</option>
                                <option value={129}>Malaysia</option>
                                <option value={130}>Maldives</option>
                                <option value={131}>Mali</option>
                                <option value={132}>Malta</option>
                                <option value={133}>Marshall Islands</option>
                                <option value={134}>Martinique</option>
                                <option value={135}>Mauritania</option>
                                <option value={136}>Mauritius</option>
                                <option value={137}>Mayotte</option>
                                <option value={138}>Mexico</option>
                                <option value={139}>
                                  Micronesia, Federated States of
                                </option>
                                <option value={140}>
                                  Moldova, Republic of
                                </option>
                                <option value={141}>Monaco</option>
                                <option value={142}>Mongolia</option>
                                <option value={242}>Montenegro</option>
                                <option value={143}>Montserrat</option>
                                <option value={144}>Morocco</option>
                                <option value={145}>Mozambique</option>
                                <option value={146}>Myanmar</option>
                                <option value={147}>Namibia</option>
                                <option value={148}>Nauru</option>
                                <option value={149}>Nepal</option>
                                <option value={150}>Netherlands</option>
                                <option value={151}>
                                  Netherlands Antilles
                                </option>
                                <option value={152}>New Caledonia</option>
                                <option value={153}>New Zealand</option>
                                <option value={154}>Nicaragua</option>
                                <option value={155}>Niger</option>
                                <option value={156}>Nigeria</option>
                                <option value={157}>Niue</option>
                                <option value={158}>Norfolk Island</option>
                                <option value={112}>North Korea</option>
                                <option value={159}>
                                  Northern Mariana Islands
                                </option>
                                <option value={160}>Norway</option>
                                <option value={161}>Oman</option>
                                <option value={162}>Pakistan</option>
                                <option value={163}>Palau</option>
                                <option value={247}>
                                  Palestinian Territory, Occupied
                                </option>
                                <option value={164}>Panama</option>
                                <option value={165}>Papua New Guinea</option>
                                <option value={166}>Paraguay</option>
                                <option value={167}>Peru</option>
                                <option value={168}>Philippines</option>
                                <option value={169}>Pitcairn</option>
                                <option value={170}>Poland</option>
                                <option value={171}>Portugal</option>
                                <option value={172}>Puerto Rico</option>
                                <option value={173}>Qatar</option>
                                <option value={174}>Reunion</option>
                                <option value={175}>Romania</option>
                                <option value={176}>Russian Federation</option>
                                <option value={177}>Rwanda</option>
                                <option value={178}>
                                  Saint Kitts and Nevis
                                </option>
                                <option value={179}>Saint Lucia</option>
                                <option value={180}>
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value={181}>Samoa</option>
                                <option value={182}>San Marino</option>
                                <option value={183}>
                                  Sao Tome and Principe
                                </option>
                                <option value={184}>Saudi Arabia</option>
                                <option value={185}>Senegal</option>
                                <option value={243}>Serbia</option>
                                <option value={186}>Seychelles</option>
                                <option value={187}>Sierra Leone</option>
                                <option value={188}>Singapore</option>
                                <option value={189}>Slovak Republic</option>
                                <option value={190}>Slovenia</option>
                                <option value={191}>Solomon Islands</option>
                                <option value={192}>Somalia</option>
                                <option value={193}>South Africa</option>
                                <option value={194}>
                                  South Georgia &amp; South Sandwich Islands
                                </option>
                                <option value={248}>South Sudan</option>
                                <option value={195}>Spain</option>
                                <option value={196}>Sri Lanka</option>
                                <option value={249}>St. Barthelemy</option>
                                <option value={197}>St. Helena</option>
                                <option value={250}>
                                  St. Martin (French part)
                                </option>
                                <option value={198}>
                                  St. Pierre and Miquelon
                                </option>
                                <option value={199}>Sudan</option>
                                <option value={200}>Suriname</option>
                                <option value={201}>
                                  Svalbard and Jan Mayen Islands
                                </option>
                                <option value={202}>Swaziland</option>
                                <option value={203}>Sweden</option>
                                <option value={204}>Switzerland</option>
                                <option value={205}>
                                  Syrian Arab Republic
                                </option>
                                <option value={206}>Taiwan</option>
                                <option value={207}>Tajikistan</option>
                                <option value={208}>
                                  Tanzania, United Republic of
                                </option>
                                <option value={209}>Thailand</option>
                                <option value={210}>Togo</option>
                                <option value={211}>Tokelau</option>
                                <option value={212}>Tonga</option>
                                <option value={213}>Trinidad and Tobago</option>
                                <option value={255}>Tristan da Cunha</option>
                                <option value={214}>Tunisia</option>
                                <option value={215}>Turkey</option>
                                <option value={216}>Turkmenistan</option>
                                <option value={217}>
                                  Turks and Caicos Islands
                                </option>
                                <option value={218}>Tuvalu</option>
                                <option value={219}>Uganda</option>
                                <option value={220}>Ukraine</option>
                                <option value={221}>
                                  United Arab Emirates
                                </option>
                                <option value={222}>United Kingdom</option>
                                <option selected="selected" value={223}>
                                  United States
                                </option>
                                <option value={224}>
                                  United States Minor Outlying Islands
                                </option>
                                <option value={225}>Uruguay</option>
                                <option value={226}>Uzbekistan</option>
                                <option value={227}>Vanuatu</option>
                                <option value={228}>
                                  Vatican City State (Holy See)
                                </option>
                                <option value={229}>Venezuela</option>
                                <option value={230}>Viet Nam</option>
                                <option value={231}>
                                  Virgin Islands (British)
                                </option>
                                <option value={232}>
                                  Virgin Islands (U.S.)
                                </option>
                                <option value={233}>
                                  Wallis and Futuna Islands
                                </option>
                                <option value={234}>Western Sahara</option>
                                <option value={235}>Yemen</option>
                                <option value={238}>Zambia</option>
                                <option value={239}>Zimbabwe</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="mypayerCountrie">
                                My payer is in
                              </label>
                              <select
                                id="mypayerCountrie"
                                data-style="custom-select"
                                className="selectpicker form-control"
                                data-live-search="true"
                              >
                                <option value={244}>Aaland Islands</option>
                                <option value={1}>Afghanistan</option>
                                <option value={2}>Albania</option>
                                <option value={3}>Algeria</option>
                                <option value={4}>American Samoa</option>
                                <option value={5}>Andorra</option>
                                <option value={6}>Angola</option>
                                <option value={7}>Anguilla</option>
                                <option value={8}>Antarctica</option>
                                <option value={9}>Antigua and Barbuda</option>
                                <option value={10}>Argentina</option>
                                <option value={11}>Armenia</option>
                                <option value={12}>Aruba</option>
                                <option value={252}>
                                  Ascension Island (British)
                                </option>
                                <option value={13}>Australia</option>
                                <option value={14}>Austria</option>
                                <option value={15}>Azerbaijan</option>
                                <option value={16}>Bahamas</option>
                                <option value={17}>Bahrain</option>
                                <option value={18}>Bangladesh</option>
                                <option value={19}>Barbados</option>
                                <option value={20}>Belarus</option>
                                <option value={21}>Belgium</option>
                                <option value={22}>Belize</option>
                                <option value={23}>Benin</option>
                                <option value={24}>Bermuda</option>
                                <option value={25}>Bhutan</option>
                                <option value={26}>Bolivia</option>
                                <option value={245}>
                                  Bonaire, Sint Eustatius and Saba
                                </option>
                                <option value={27}>
                                  Bosnia and Herzegovina
                                </option>
                                <option value={28}>Botswana</option>
                                <option value={29}>Bouvet Island</option>
                                <option value={30}>Brazil</option>
                                <option value={31}>
                                  British Indian Ocean Territory
                                </option>
                                <option value={32}>Brunei Darussalam</option>
                                <option value={33}>Bulgaria</option>
                                <option value={34}>Burkina Faso</option>
                                <option value={35}>Burundi</option>
                                <option value={36}>Cambodia</option>
                                <option value={37}>Cameroon</option>
                                <option value={38}>Canada</option>
                                <option value={251}>Canary Islands</option>
                                <option value={39}>Cape Verde</option>
                                <option value={40}>Cayman Islands</option>
                                <option value={41}>
                                  Central African Republic
                                </option>
                                <option value={42}>Chad</option>
                                <option value={43}>Chile</option>
                                <option value={44}>China</option>
                                <option value={45}>Christmas Island</option>
                                <option value={46}>
                                  Cocos (Keeling) Islands
                                </option>
                                <option value={47}>Colombia</option>
                                <option value={48}>Comoros</option>
                                <option value={49}>Congo</option>
                                <option value={50}>Cook Islands</option>
                                <option value={51}>Costa Rica</option>
                                <option value={52}>Cote D'Ivoire</option>
                                <option value={53}>Croatia</option>
                                <option value={54}>Cuba</option>
                                <option value={246}>Curacao</option>
                                <option value={55}>Cyprus</option>
                                <option value={56}>Czech Republic</option>
                                <option value={237}>
                                  Democratic Republic of Congo
                                </option>
                                <option value={57}>Denmark</option>
                                <option value={58}>Djibouti</option>
                                <option value={59}>Dominica</option>
                                <option value={60}>Dominican Republic</option>
                                <option value={61}>East Timor</option>
                                <option value={62}>Ecuador</option>
                                <option value={63}>Egypt</option>
                                <option value={64}>El Salvador</option>
                                <option value={65}>Equatorial Guinea</option>
                                <option value={66}>Eritrea</option>
                                <option value={67}>Estonia</option>
                                <option value={68}>Ethiopia</option>
                                <option value={69}>
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value={70}>Faroe Islands</option>
                                <option value={71}>Fiji</option>
                                <option value={72}>Finland</option>
                                <option value={74}>France, Metropolitan</option>
                                <option value={75}>French Guiana</option>
                                <option value={76}>French Polynesia</option>
                                <option value={77}>
                                  French Southern Territories
                                </option>
                                <option value={126}>FYROM</option>
                                <option value={78}>Gabon</option>
                                <option value={79}>Gambia</option>
                                <option value={80}>Georgia</option>
                                <option value={81}>Germany</option>
                                <option value={82}>Ghana</option>
                                <option value={83}>Gibraltar</option>
                                <option value={84}>Greece</option>
                                <option value={85}>Greenland</option>
                                <option value={86}>Grenada</option>
                                <option value={87}>Guadeloupe</option>
                                <option value={88}>Guam</option>
                                <option value={89}>Guatemala</option>
                                <option value={256}>Guernsey</option>
                                <option value={90}>Guinea</option>
                                <option value={91}>Guinea-Bissau</option>
                                <option value={92}>Guyana</option>
                                <option value={93}>Haiti</option>
                                <option value={94}>
                                  Heard and Mc Donald Islands
                                </option>
                                <option value={95}>Honduras</option>
                                <option value={96}>Hong Kong</option>
                                <option value={97}>Hungary</option>
                                <option value={98}>Iceland</option>
                                <option value={99} selected="selected">
                                  India
                                </option>
                                <option value={100}>Indonesia</option>
                                <option value={101}>
                                  Iran (Islamic Republic of)
                                </option>
                                <option value={102}>Iraq</option>
                                <option value={103}>Ireland</option>
                                <option value={254}>Isle of Man</option>
                                <option value={104}>Israel</option>
                                <option value={105}>Italy</option>
                                <option value={106}>Jamaica</option>
                                <option value={107}>Japan</option>
                                <option value={257}>Jersey</option>
                                <option value={108}>Jordan</option>
                                <option value={109}>Kazakhstan</option>
                                <option value={110}>Kenya</option>
                                <option value={111}>Kiribati</option>
                                <option value={113}>Korea, Republic of</option>
                                <option value={253}>Kosovo, Republic of</option>
                                <option value={114}>Kuwait</option>
                                <option value={115}>Kyrgyzstan</option>
                                <option value={116}>
                                  Lao People's Democratic Republic
                                </option>
                                <option value={117}>Latvia</option>
                                <option value={118}>Lebanon</option>
                                <option value={119}>Lesotho</option>
                                <option value={120}>Liberia</option>
                                <option value={121}>
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value={122}>Liechtenstein</option>
                                <option value={123}>Lithuania</option>
                                <option value={124}>Luxembourg</option>
                                <option value={125}>Macau</option>
                                <option value={127}>Madagascar</option>
                                <option value={128}>Malawi</option>
                                <option value={129}>Malaysia</option>
                                <option value={130}>Maldives</option>
                                <option value={131}>Mali</option>
                                <option value={132}>Malta</option>
                                <option value={133}>Marshall Islands</option>
                                <option value={134}>Martinique</option>
                                <option value={135}>Mauritania</option>
                                <option value={136}>Mauritius</option>
                                <option value={137}>Mayotte</option>
                                <option value={138}>Mexico</option>
                                <option value={139}>
                                  Micronesia, Federated States of
                                </option>
                                <option value={140}>
                                  Moldova, Republic of
                                </option>
                                <option value={141}>Monaco</option>
                                <option value={142}>Mongolia</option>
                                <option value={242}>Montenegro</option>
                                <option value={143}>Montserrat</option>
                                <option value={144}>Morocco</option>
                                <option value={145}>Mozambique</option>
                                <option value={146}>Myanmar</option>
                                <option value={147}>Namibia</option>
                                <option value={148}>Nauru</option>
                                <option value={149}>Nepal</option>
                                <option value={150}>Netherlands</option>
                                <option value={151}>
                                  Netherlands Antilles
                                </option>
                                <option value={152}>New Caledonia</option>
                                <option value={153}>New Zealand</option>
                                <option value={154}>Nicaragua</option>
                                <option value={155}>Niger</option>
                                <option value={156}>Nigeria</option>
                                <option value={157}>Niue</option>
                                <option value={158}>Norfolk Island</option>
                                <option value={112}>North Korea</option>
                                <option value={159}>
                                  Northern Mariana Islands
                                </option>
                                <option value={160}>Norway</option>
                                <option value={161}>Oman</option>
                                <option value={162}>Pakistan</option>
                                <option value={163}>Palau</option>
                                <option value={247}>
                                  Palestinian Territory, Occupied
                                </option>
                                <option value={164}>Panama</option>
                                <option value={165}>Papua New Guinea</option>
                                <option value={166}>Paraguay</option>
                                <option value={167}>Peru</option>
                                <option value={168}>Philippines</option>
                                <option value={169}>Pitcairn</option>
                                <option value={170}>Poland</option>
                                <option value={171}>Portugal</option>
                                <option value={172}>Puerto Rico</option>
                                <option value={173}>Qatar</option>
                                <option value={174}>Reunion</option>
                                <option value={175}>Romania</option>
                                <option value={176}>Russian Federation</option>
                                <option value={177}>Rwanda</option>
                                <option value={178}>
                                  Saint Kitts and Nevis
                                </option>
                                <option value={179}>Saint Lucia</option>
                                <option value={180}>
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value={181}>Samoa</option>
                                <option value={182}>San Marino</option>
                                <option value={183}>
                                  Sao Tome and Principe
                                </option>
                                <option value={184}>Saudi Arabia</option>
                                <option value={185}>Senegal</option>
                                <option value={243}>Serbia</option>
                                <option value={186}>Seychelles</option>
                                <option value={187}>Sierra Leone</option>
                                <option value={188}>Singapore</option>
                                <option value={189}>Slovak Republic</option>
                                <option value={190}>Slovenia</option>
                                <option value={191}>Solomon Islands</option>
                                <option value={192}>Somalia</option>
                                <option value={193}>South Africa</option>
                                <option value={194}>
                                  South Georgia &amp; South Sandwich Islands
                                </option>
                                <option value={248}>South Sudan</option>
                                <option value={195}>Spain</option>
                                <option value={196}>Sri Lanka</option>
                                <option value={249}>St. Barthelemy</option>
                                <option value={197}>St. Helena</option>
                                <option value={250}>
                                  St. Martin (French part)
                                </option>
                                <option value={198}>
                                  St. Pierre and Miquelon
                                </option>
                                <option value={199}>Sudan</option>
                                <option value={200}>Suriname</option>
                                <option value={201}>
                                  Svalbard and Jan Mayen Islands
                                </option>
                                <option value={202}>Swaziland</option>
                                <option value={203}>Sweden</option>
                                <option value={204}>Switzerland</option>
                                <option value={205}>
                                  Syrian Arab Republic
                                </option>
                                <option value={206}>Taiwan</option>
                                <option value={207}>Tajikistan</option>
                                <option value={208}>
                                  Tanzania, United Republic of
                                </option>
                                <option value={209}>Thailand</option>
                                <option value={210}>Togo</option>
                                <option value={211}>Tokelau</option>
                                <option value={212}>Tonga</option>
                                <option value={213}>Trinidad and Tobago</option>
                                <option value={255}>Tristan da Cunha</option>
                                <option value={214}>Tunisia</option>
                                <option value={215}>Turkey</option>
                                <option value={216}>Turkmenistan</option>
                                <option value={217}>
                                  Turks and Caicos Islands
                                </option>
                                <option value={218}>Tuvalu</option>
                                <option value={219}>Uganda</option>
                                <option value={220}>Ukraine</option>
                                <option value={221}>
                                  United Arab Emirates
                                </option>
                                <option value={222}>United Kingdom</option>
                                <option value={223}>United States</option>
                                <option value={224}>
                                  United States Minor Outlying Islands
                                </option>
                                <option value={225}>Uruguay</option>
                                <option value={226}>Uzbekistan</option>
                                <option value={227}>Vanuatu</option>
                                <option value={228}>
                                  Vatican City State (Holy See)
                                </option>
                                <option value={229}>Venezuela</option>
                                <option value={230}>Viet Nam</option>
                                <option value={231}>
                                  Virgin Islands (British)
                                </option>
                                <option value={232}>
                                  Virgin Islands (U.S.)
                                </option>
                                <option value={233}>
                                  Wallis and Futuna Islands
                                </option>
                                <option value={234}>Western Sahara</option>
                                <option value={235}>Yemen</option>
                                <option value={238}>Zambia</option>
                                <option value={239}>Zimbabwe</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="wantTorequest">
                                I want to request
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  {" "}
                                  <span className="input-group-text">
                                    $
                                  </span>{" "}
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  data-bv-field="wantTorequest"
                                  id="wantTorequest"
                                  defaultValue="1,000"
                                  placeholder
                                />
                                <div className="input-group-append">
                                  {" "}
                                  <span className="input-group-text p-0">
                                    <select
                                      id="wantToCurrency"
                                      data-style="custom-select bg-transparent border-0"
                                      data-container="body"
                                      data-live-search="true"
                                      className="selectpicker form-control bg-transparent"
                                      required
                                    >
                                      <optgroup label="Popular Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-usd mr-1"
                                          data-subtext="United States dollar"
                                          selected="selected"
                                          value
                                        >
                                          USD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                      </optgroup>
                                      <option data-divider="true" />
                                      <optgroup label="Other Currency">
                                        <option
                                          data-icon="currency-flag currency-flag-aed mr-1"
                                          data-subtext="United Arab Emirates dirham"
                                          value
                                        >
                                          AED
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ars mr-1"
                                          data-subtext="Argentine peso"
                                          value
                                        >
                                          ARS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-aud mr-1"
                                          data-subtext="Australian dollar"
                                          value
                                        >
                                          AUD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bdt mr-1"
                                          data-subtext="Bangladeshi taka"
                                          value
                                        >
                                          BDT
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-bgn mr-1"
                                          data-subtext="Bulgarian lev"
                                          value
                                        >
                                          BGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-brl mr-1"
                                          data-subtext="Brazilian real"
                                          value
                                        >
                                          BRL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cad mr-1"
                                          data-subtext="Canadian dollar"
                                          value
                                        >
                                          CAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-chf mr-1"
                                          data-subtext="Swiss franc"
                                          value
                                        >
                                          CHF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-clp mr-1"
                                          data-subtext="Chilean peso"
                                          value
                                        >
                                          CLP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-cny mr-1"
                                          data-subtext="Chinese yuan"
                                          value
                                        >
                                          CNY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-czk mr-1"
                                          data-subtext="Czech koruna"
                                          value
                                        >
                                          CZK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-dkk mr-1"
                                          data-subtext="Danish krone"
                                          value
                                        >
                                          DKK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-egp mr-1"
                                          data-subtext="Egyptian pound"
                                          value
                                        >
                                          EGP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-eur mr-1"
                                          data-subtext="Euro"
                                          value
                                        >
                                          EUR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gbp mr-1"
                                          data-subtext="British pound"
                                          value
                                        >
                                          GBP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-gel mr-1"
                                          data-subtext="Georgian lari"
                                          value
                                        >
                                          GEL
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ghs mr-1"
                                          data-subtext="Ghanaian cedi"
                                          value
                                        >
                                          GHS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hkd mr-1"
                                          data-subtext="Hong Kong dollar"
                                          value
                                        >
                                          HKD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-hrk mr-1"
                                          data-subtext="Croatian kuna"
                                          value
                                        >
                                          HRK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-huf mr-1"
                                          data-subtext="Hungarian forint"
                                          value
                                        >
                                          HUF
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-idr mr-1"
                                          data-subtext="Indonesian rupiah"
                                          value
                                        >
                                          IDR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ils mr-1"
                                          data-subtext="Israeli shekel"
                                          value
                                        >
                                          ILS
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-inr mr-1"
                                          data-subtext="Indian rupee"
                                          value
                                        >
                                          INR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-jpy mr-1"
                                          data-subtext="Japanese yen"
                                          value
                                        >
                                          JPY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-kes mr-1"
                                          data-subtext="Kenyan shilling"
                                          value
                                        >
                                          KES
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-krw mr-1"
                                          data-subtext="South Korean won"
                                          value
                                        >
                                          KRW
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-lkr mr-1"
                                          data-subtext="Sri Lankan rupee"
                                          value
                                        >
                                          LKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mad mr-1"
                                          data-subtext="Moroccan dirham"
                                          value
                                        >
                                          MAD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-mxn mr-1"
                                          data-subtext="Mexican peso"
                                          value
                                        >
                                          MXN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-myr mr-1"
                                          data-subtext="Malaysian ringgit"
                                          value
                                        >
                                          MYR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ngn mr-1"
                                          data-subtext="Nigerian naira"
                                          value
                                        >
                                          NGN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nok mr-1"
                                          data-subtext="Norwegian krone"
                                          value
                                        >
                                          NOK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-npr mr-1"
                                          data-subtext="Nepalese rupee"
                                          value
                                        >
                                          NPR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-nzd mr-1"
                                          data-subtext="New Zealand dollar"
                                          value
                                        >
                                          NZD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pen mr-1"
                                          data-subtext="Peruvian nuevo sol"
                                          value
                                        >
                                          PEN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-php mr-1"
                                          data-subtext="Philippine peso"
                                          value
                                        >
                                          PHP
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pkr mr-1"
                                          data-subtext="Pakistani rupee"
                                          value
                                        >
                                          PKR
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-pln mr-1"
                                          data-subtext="Polish złoty"
                                          value
                                        >
                                          PLN
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ron mr-1"
                                          data-subtext="Romanian leu"
                                          value
                                        >
                                          RON
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-rub mr-1"
                                          data-subtext="Russian rouble"
                                          value
                                        >
                                          RUB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sek mr-1"
                                          data-subtext="Swedish krona"
                                          value
                                        >
                                          SEK
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-sgd mr-1"
                                          data-subtext="Singapore dollar"
                                          value
                                        >
                                          SGD
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-thb mr-1"
                                          data-subtext="Thai baht"
                                          value
                                        >
                                          THB
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-try mr-1"
                                          data-subtext="Turkish lira"
                                          value
                                        >
                                          TRY
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-uah mr-1"
                                          data-subtext="Ukrainian hryvnia"
                                          value
                                        >
                                          UAH
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-ugx mr-1"
                                          data-subtext="Ugandan shilling"
                                          value
                                        >
                                          UGX
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-vnd mr-1"
                                          data-subtext="Vietnamese dong"
                                          value
                                        >
                                          VND
                                        </option>
                                        <option
                                          data-icon="currency-flag currency-flag-zar mr-1"
                                          data-subtext="South African rand"
                                          value
                                        >
                                          ZAR
                                        </option>
                                      </optgroup>
                                    </select>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-primary btn-block mt-4">
                              Continue
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Send/Request Money End */}
            {/* Why choose us
    ============================================= */}
            <section className="section bg-white">
              <div className="container">
                <h2 className="text-9 text-center text-uppercase font-weight-400">
                  Why choose us?
                </h2>
                <p className="text-4 text-center font-weight-300 mb-5">
                  Here’s Top 4 reasons why using a Paylocal account for manage
                  your money.
                </p>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="row">
                      <div className="col-sm-6 mb-4">
                        <div className="featured-box style-3">
                          <div className="featured-box-icon border border-primary text-primary rounded-circle">
                            <i className="fas fa-hand-pointer" />{" "}
                          </div>
                          <h3 className="font-weight-400">Easy to use</h3>
                          <p>
                            An easy-to-use interface that allows you to quickly
                            send and receive money anywhere in the world.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-4">
                        <div className="featured-box style-3">
                          <div className="featured-box-icon border border-primary text-primary rounded-circle">
                            <i
                              className="fas fa-share"
                              style={{ color: "#3e65da" }}
                            />
                          </div>
                          <h3 className="font-weight-400">Faster Payments</h3>
                          <p>
                            Global faster payment platform that is able to clear
                            payments within seconds.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-4 mb-sm-0">
                        <div className="featured-box style-3">
                          <div className="featured-box-icon border border-primary text-primary rounded-circle">
                            {" "}
                            <i className="fas fa-dollar-sign" />{" "}
                          </div>
                          <h3 className="font-weight-400">Lower Fees</h3>
                          <p>
                            No hidden fees,the rate and receivable amount are
                            displayed before you make the transfer.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="featured-box style-3">
                          <div className="featured-box-icon border border-primary text-primary rounded-circle">
                            <i className="fas fa-lock" />
                          </div>
                          <h3 className="font-weight-400">100% secure</h3>
                          <p>
                            Bank level security and We use 2-factor
                            authentication to protect your account and
                            transactions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Why choose us End */}
            {/* How it works
    ============================================= */}
            <section className="section">
              <div className="container">
                <h2 className="text-9 text-center text-uppercase font-weight-400">
                  As simple as 1-2-3
                </h2>
                <p className="text-4 text-center font-weight-300 mb-5"></p>
                <div className="row">
                  <div className="col-sm-4 mb-4">
                    <div className="featured-box style-4">
                      <div className="featured-box-icon text-dark shadow-none border-bottom">
                        <span className="w-100 text-20 font-weight-500">1</span>
                      </div>
                      <h3 className="mb-3">Sign Up Your Account</h3>
                      <p className="text-3 font-weight-300">
                        Sign up for your free personal/business Account in fea a
                        minute.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <div className="featured-box style-4">
                      <div className="featured-box-icon text-dark shadow-none border-bottom">
                        <span className="w-100 text-20 font-weight-500">2</span>
                      </div>
                      <h3 className="mb-3">Send &amp; Receive Money</h3>
                      <p className="text-3 font-weight-300">
                        Receive &amp; Send Payments from worldwide in 40
                        currencies.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4 mb-sm-0">
                    <div className="featured-box style-4">
                      <div className="featured-box-icon text-dark shadow-none border-bottom">
                        <span className="w-100 text-20 font-weight-500">3</span>
                      </div>
                      <h3 className="mb-3">Withdraw Funds</h3>
                      <p className="text-3 font-weight-300">
                        Your funds will be transferred to your local bank
                        account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <a href="#" className="btn btn-primary">
                    Open a Free Account
                  </a>
                </div>
              </div>
            </section>
            {/* How it works End */}
            {/* What can you do
    ============================================= */}
            <section className="section bg-white">
              <div className="container">
                <h2 className="text-9 text-center text-uppercase font-weight-400">
                  What can you do?
                </h2>
                <p className="text-4 text-center font-weight-300 mb-5"></p>
                <div className="row">
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <a href="#" className="text-decoration-none">
                      <div className="featured-box style-5 rounded">
                        <div className="featured-box-icon text-primary">
                          <i className="fas fa-share-square" />
                        </div>
                        <h3>Send Money</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <a href="#" className="text-decoration-none">
                      <div className="featured-box style-5 rounded">
                        <div className="featured-box-icon text-primary">
                          <i className="fas fa-check-square" />
                        </div>
                        <h3>Receive Money</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <a href="#" className="text-decoration-none">
                      <div className="featured-box style-5 rounded">
                        <div className="featured-box-icon text-primary">
                          <i className="fas fa-user-friends" />
                        </div>
                        <h3>Pay a Friend</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <a href="#" className="text-decoration-none">
                      <div className="featured-box style-5 rounded">
                        <div className="featured-box-icon text-primary">
                          <i className="fas fa-shopping-bag" />
                        </div>
                        <h3>Online Shopping</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <a href="#" className="btn-link text-4 text-decoration-none">
                    See more can you do
                    <i className="fas fa-chevron-right text-2 ml-2" />
                  </a>
                </div>
              </div>
            </section>
            {/* What can you do End */}
            {/* Testimonial
    ============================================= */}
            <section className="hero-wrap section shadow-md">
              <div className="hero-mask opacity-3 bg-dark" />
              <div
                className="hero-bg hero-bg-scrll"
                style={{
                  "background-image":
                    "url('images/pexels-andrea-piacquadio-845434.jpg')",
                }}
              />
              <div className="hero-content py-0 py-lg-5 my-0 my-lg-5">
                <div className="container text-center">
                  <h2 className="text-9 text-white font-weight-400 text-uppercase mb-5">
                    What our customers say
                  </h2>
                  <a
                    className="video-btn d-flex"
                    href="#"
                    data-src="https://www.youtube.com/embed/juIJGBxj-4w"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    {" "}
                    <span className="btn-video-play bg-white shadow-md rounded-circle m-auto">
                      <i className="fas fa-play" />
                    </span>{" "}
                  </a>{" "}
                </div>
              </div>
            </section>
            {/* Testimonial end */}
          </div>
          {/* Content end */}
          {/* Footer
  ============================================= */}
          <Footer />

          {/* Footer end */}
        </div>
        {/* Document Wrapper end */}
        {/* Back to Top
============================================= */}
        <a
          id="back-to-top"
          data-toggle="tooltip"
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
                className="close text-white opacity-10 ml-auto mr-n3 font-weight-400"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    id="video"
                    allow="autoplay"
                  />
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

export default Site;
