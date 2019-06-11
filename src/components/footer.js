import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import yodacom150 from '../images/yodacom150x150.svg'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            # gatsby
            # bulma
            # facebook
            twitter
            # medium
            github
            linkedin
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          <p className="is-size-5">
            <span className="icon is-large">
              <img src={yodacom150} alt="YodaCom-logo - Full-Stack Apps" />
            </span>
            Site by Yodacom.com
          </p>
          <p className="is-size-5">
            Provided By{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yodacom.com"
            >
              YodaCom
            </a>
            , more info: <a href="https://yodacom.com">blog</a>
            {" & "}
            <a href="https://yodacom.com">docs</a>
          </p>
          <article className="media center">
            <span className="icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.twitter}
              >
                <FaTwitter size="fa-1x" color="blue" />
              </a>
            </span>
            &nbsp;&nbsp;
            <span className="icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.linkedin}
              >
                <FaLinkedin size="fa-1x" color="blue" />
              </a>
            </span>
            &nbsp;&nbsp;
            <span className="icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.github}
              >
                <FaGithub size="fa-1x" color="black" />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          {/* <p className="is-size-5 has-text-grey-light">
						Inspired by <a target="_blank" rel="noopener noreferrer" 
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">this</a> starter
					</p> */}
        </div>
      </footer>
    )}
  />
);

export default Footer;
