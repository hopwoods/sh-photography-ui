/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/navbar.module";
export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark main-nav p-0 mb-5">
        <div className="container-fluid p-0">
          <div className="navbar-collapse collapse nav-content order-2 text-center">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-nav text-nowrap flex-row mx-sm-auto order-1 order-lg-3">
            <li className="nav-item">
              <a
                id="SiteLogo"
                className="nav-link img-fluid"
                title="Stuart Hopwood Photography Home"
                href="/"
              />
            </li>
            <button
              className="navbar-toggler w-100 ml-2 mr-2 mt-4"
              type="button"
              data-toggle="collapse"
              data-target=".nav-content"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </ul>
          <div className="navbar-collapse collapse nav-content order-3 order-lg-3 text-center">
            <ul className="ml-auto nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <a
                    className="mr-1 ml-1"
                    target="_blank"
                    href="https://www.instagram.com/hopwoods/"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                  <a className="mr-1 ml-1" href="/login">
                    <FontAwesomeIcon icon="sign-in-alt" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
