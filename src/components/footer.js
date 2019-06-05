import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						facebook
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<p className="is-size-5">
						Full Stack App in Gatsby and Bulma
					</p>
					<p className="is-size-5">
						Provided By <a target="_blank" rel="noopener noreferrer" href="https://appseed.us">AppSeed</a>, more info:{' '}
						<a href="https://blog.appseed.us">blog</a>{' & '} 
						<a href="https://docs.appseed.us">docs</a>  
					</p>
					<article className="media center">
						<span className="icon">
							<a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.facebook}>
								<FaFacebook size="fa-1x" color="blue" />
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="icon">
							<a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.twitter}>
								<FaTwitter size="fa-1x" color="blue" />
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="icon">
							<a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.github}>
								<FaGithub size="fa-1x" color="black" />
							</a>
						</span>
						&nbsp;
					</article>
					&nbsp;
					<p className="is-size-5 has-text-grey-light">
						Inspired by <a target="_blank" rel="noopener noreferrer" 
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">this</a> starter
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
