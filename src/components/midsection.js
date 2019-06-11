import React from "react";
import { FaCubes, FaHtml5, FaReact } from "react-icons/fa";

import "./style.scss";

const Midsection = () => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaCubes size="fa-2x" color="#d22780" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Experience</h1>
                  <p className="subtitle is-size-5">
                    Cutting Edge Apps and Consulting Experience that makes you
                    look great - fast. We know how to exploit the latest
                    technologies to accomplish your goals, achieve a successful
                    new launch, or expansion into new product lines.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaHtml5 size="fa-2x" className="has-text-danger" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">JAMStack Solutions</h1>
                  <p className="subtitle is-size-5">
                    We use the next generation of development technologies for
                    building websites and apps that deliver better performance,
                    higher security, and a lower cost of development and scaling. These are the keys to online success in the digital age.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <figure className="media-left">
                <span className="icon is-medium">
                  <FaReact size="fa-2x" color="#5e227f" />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Easy to work with</h1>
                  <p className="subtitle is-size-5">
                    We love solving challenges. It begins with great
                    communication. You will always know what to expect and how
                    we can (or cannot) be helpful. We understand the
                    importantance of your internal team and will keep all
                    parties involved in the loop. Great results come from great
                    teams.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Midsection;
