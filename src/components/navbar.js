import React from "react";
// import { FaGithub } from 'react-icons/fa';
import Contacts2 from "./contacts2";

import "./style.scss";
import yodacomLogo from "../images/YodaComLogoTrans150x50.png";

const Navbar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://yodacom.com">
        <img src={yodacomLogo} width="150" height="50" alt="yodacom logo" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        href="yodacom.com"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://yodacom.com">
          Home
        </a>

        <a class="navbar-item" href="https://yodacom.com">
          Portfolio
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="https://yodacom.com">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="https://jjblack.com">
              About
            </a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item" href="Contacts2">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="Contacts2">
              <strong>Contact</strong>
            </a>
            <a class="button is-light">Log in</a>
            <a class="button is-primary" href="Contacts2">
              <strong>Questions/Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
