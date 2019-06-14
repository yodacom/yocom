import React from 'react'
import Layout from '../components/layout'
import Contacts from './Contacts2'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>You can report it to our <a href={Contacts}>Webmaster</a>  and let him know what's up</p>
  </Layout>
)

export default NotFoundPage
