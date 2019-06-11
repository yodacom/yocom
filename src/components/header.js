import React from "react";

import "./style.scss";
import yodacom150 from "../images/yodacom150x150.svg";
//import yodacomLogo from "../images/YodaComLogoTrans150x50.png";

import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradientBg is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <figure className="is-left">
            <span className="icon is-large">
              <img
                src={yodacom150}
                alt="Yodacom Logo - Full-Stack Apps by Yodacom"
              />
            </span>
          </figure>

          <figure className="is-left">
            {/* <span className="icon is-large">
              <img src={yodacomLogo} alt="YodaCom-logo - Full-Stack Apps"   />
            </span> */}
          </figure>
          <div className="media-content">
            <div className="content" >
              <h1 className="is-uppercase is-size-1 has-text-white">
                &nbsp;
                YodaCom - Apps, DMTA's, mobile Tech Architects, business launch
                and automation consulting
              </h1>
              <p className="subtitle has-text-white is-size-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-black is-italic"
                  href="https:jjblack.com/"
                >
                  "You need an app for that!"
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-danger is-italic"
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https://yodacom.com&tab=desktop"
                >
                  Super Fast Progressive Web Apps/Sites
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-black is-italic"
                  href="https://yodacom.com"
                >
                  Full Stack Consulting/Development
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
