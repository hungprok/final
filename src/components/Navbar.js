import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar(props) {

    let logOut = async () => {
        console.log('User logout')
        let token = 'Bearer ' + localStorage.getItem("token");
        console.log(token)
        try {
            const res = await fetch("https://localhost:5000/logout", {
                method: "GET",
                headers: {
                    'Authorization': `${token}`
                },
            });
            const data = await res
            console.log(data)
            // if we get user object from response, it means token is correct, we save it back to storage, as well as setState our user to the value we just got from the response
            if (data.status === 204) {
                console.log('Succesfully logout')
                props.setUser(null)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
            <nav
                className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light site-navbar-target"
                id="ftco-navbar"
            >
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="/"
                        style={{ lineHeight: "20px", color: "black" }}
                    >
                        TALENT
            <br />
            SOLUTION
          </a>
                    <button
                        className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
          </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav nav ml-auto">
                            <li className="nav-item text-danger">
                                <a href="/" className="nav-link">
                                    <span style={{ color: "black" }}>Home</span>
                                </a>
                            </li>

                            {props.user != null ?
                                ''
                                :
                                <li className="nav-item">
                                    <a href="/sign-up" className="nav-link">
                                        <span style={{ color: "black" }}>Sign Up</span>
                                    </a>
                                </li>}

                            {props.user != null ?
                                <li className="nav-item">
                                    <a href="/" className="nav-link" onClick={() => logOut()}>
                                        <span style={{ color: "black" }}>Logout</span>
                                    </a>
                                </li>
                                :
                                <li className="nav-item">
                                    <a href="/login" className="nav-link">
                                        <span style={{ color: "black" }}>Login</span>
                                    </a>
                                </li>}

                            {props.user != null ?
                                <li className="nav-item">
                                    <a href="/profile" className="nav-link">
                                        <span style={{ color: "black" }}>{props.user.name}</span>
                                    </a>
                                </li>
                                : ''
                            }

                            <li className="nav-item">
                                <a href="/jobseekers" className="nav-link">
                                    <span
                                        className="btn btn-outline-warning"
                                        style={{
                                            fontSize: "14px",
                                            borderRadius: "0px",
                                            padding: "5px",
                                        }}
                                    >
                                        For Jobseekers
                  </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
