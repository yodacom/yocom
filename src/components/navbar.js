import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/rosoftdeveloper/fullstack-gatsbyjs"
					>
						<img src={gatsbyLogo} alt="GatsbyJS Logo - Full Stack App by @AppSeed.us" />
						<img src={bulmaLogo} alt="Bulma Logo - Full Stack App by @AppSeed.us" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a
								className="button is-success is-inverted"
								href="https://github.com/rosoftdeveloper/fullstack-gatsbyjs"
							>
								<span className="icon">
									<FaGithub size="fa-1x" />
								</span>
								<span>Download</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
