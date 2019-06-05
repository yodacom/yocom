import React from 'react';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo - Full-Stack App by @AppSeed.us" />
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
							<img src={bulmaLogo} alt="bulma-logo - Full-Stack App by @AppSeed.us" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Full-Stack Gatsby / Bulma   
							</h1>
							<p className="subtitle has-text-white is-size-3">
								<a target="_blank" rel="noopener noreferrer" className="has-text-black is-italic" href="https://github.com/rosoftdeveloper/fullstack-gatsbyjs">Open-Source</a>,{' '}
								<a target="_blank" rel="noopener noreferrer" className="has-text-danger is-italic" href="https://developers.google.com/speed/pagespeed/insights/?url=https://fullstack-gatsbyjs.appseed.us&tab=desktop">Fast as hell</a>,{' '} 
								<a target="_blank" rel="noopener noreferrer" className="has-text-black is-italic" href="https://github.com/rosoftdeveloper/fullstack-gatsbyjs/blob/master/deploy.js">FTP Deploy Script</a>  
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
