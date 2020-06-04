import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import Navbar from "./Navbar"
import HomeContent from "./HomeContent"

export default function Home(props) {

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/aos.css" />
                <link rel="stylesheet" href="css/ionicons.min.css" />
                <link rel="stylesheet" href="css/flaticon.css" />
                <link rel="stylesheet" href="css/icomoon.css" />
                <link rel="stylesheet" href="css/style.css" />
                <script src="js/jquery.min.js" />
                <script src="js/jquery-migrate-3.0.1.min.js" />
                <script src="js/popper.min.js" />
                <script src="js/bootstrap.min.js"></script>
                <script src="js/jquery.easing.1.3.js"></script>
                <script src="js/jquery.waypoints.min.js"></script>
                <script src="js/jquery.stellar.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/aos.js"></script>
                <script src="js/jquery.animateNumber.min.js"></script>
                <script src="js/scrollax.min.js"></script>
                <script src="js/main.js"></script>
                <title>Home: Welcome to Hung Nguyen</title>
            </Helmet>
            <div>
                <Navbar user={props.user} setUser={props.setUser} />

                <section
                    className="hero-wrap"
                >
                    <div className="container">
                        <img alt='img' width="58%" style={{ position: 'absolute', bottom: '25vh' }} src="https://employers.glints.vn/images/landing/glints/headline-banner-480.png" />
                    </div>
                    <div className="overlay" />
                    <div>
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                            <div className="col-md-12 ftco-animate p-5 m-3">

                                <h1 className="mb-5 bread text-right" style={{ color: 'black', marginRight: '10%', lineHeight: '120px'}}>
                                    Innovative<br />Recruiting Platform
                                    </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <HomeContent />

                <footer className="ftco-footer ftco-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">About</h2>
                                    <p>
                                    Talent Solution is the #1 recruitment platform in Asia to help companies build successful teams with young talent. Our mission is to help companies to hire the right young talent effectively, and for young people to discover careers they love and to develop the right skill sets.
            </p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-twitter" />
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-facebook" />
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4 ml-md-4">
                                    <h2 className="ftco-heading-2">Links</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="icon-long-arrow-right mr-2" />
                  Home
                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-long-arrow-right mr-2" />
                  About
                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Services</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="icon-long-arrow-right mr-2" />
                  Job Portal
                </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon-long-arrow-right mr-2" />
                  Talents Hunt
                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li>
                                                <span className="icon icon-map-marker" />
                                                <span className="text">
                                                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-phone" />
                                                    <span className="text">+2 392 3929 210</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-envelope" />
                                                    <span className="text">info@talentsolution.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © 2020 Talent Solution EA License No: 16C7981
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* loader */}
                <div id="ftco-loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">
                        <circle
                            className="path-bg"
                            cx={24}
                            cy={24}
                            r={22}
                            fill="none"
                            strokeWidth={4}
                            stroke="#eeeeee"
                        />
                        <circle
                            className="path"
                            cx={24}
                            cy={24}
                            r={22}
                            fill="none"
                            strokeWidth={4}
                            strokeMiterlimit={10}
                            stroke="#F96D00"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}