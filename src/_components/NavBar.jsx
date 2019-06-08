import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/navbar.module";
import "./../images/SH-Photography-Framed.png"
export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-fixed-top navbar-dark main-nav p-0 mb-5">
        <div className="container-fluid p-0">
          <div className="navbar-collapse collapse nav-content order-2">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-3">
            <li className="nav-item">
                <a id="SiteLogo" className="nav-link" title="Stuart Hopwood Photography Home" href="/"></a>
            </li>
            <button
              className="navbar-toggler ml-2 mr-2"
              type="button"
              data-toggle="collapse"
              data-target=".nav-content"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </ul>
          <div className="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
            <ul className="ml-auto nav navbar-nav">
              <li className="nav-item">
                <a className="mr-3" target="_blank" href="https://www.instagram.com/hopwoods/">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a className="mr-3" href="/login">
                  <FontAwesomeIcon icon="sign-in-alt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
