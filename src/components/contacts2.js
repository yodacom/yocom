import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';

const Contacts = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    <Contact />
    <Footer />
  </div>
);

export default Contacts;

