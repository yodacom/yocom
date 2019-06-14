import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Midsection from './midsection';
import Contact from './contact';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
    <Midsection />
    <Contact />
		<Footer />
	</div>
);

export default Layout;
