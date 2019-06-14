import React from 'react';

import './style.scss';
import Styled from 'styled-components'
import "formol/lib/default.css"
import Formol, { Field } from "formol/lib/formol"


const item = {
  firstName: 'John',
  lastName: 'Doe',
  inquiry: ' ',
  email: 'john@Google.com',
  phone: 9703933250,
};

const onSubmit = ({ firstName, lastName, inquiry, email, tel }) => (alert(firstName))



const contact = data => {
  return (
  <section class="section">
      <div class="container">
        <Formol class="button is-primary" onSubmit={onSubmit}>
      <Field required>firstName</Field>
      <Field required>lastName</Field>
      <Field required type="tel">phone</Field>
      <Field required type="email">email</Field>
      <Field required class="textarea" type="html">inquiry</Field>
      </Formol>
      </div>
    </section>);
  }
  
  export default contact
