import React from "./react";
import Formol, { Field } from "./formol";
import "./formol/lib/default.css";

const handleSubmit = async values => {
  console.log(values);

  // process submission (e.g., send to API)...
};

const SignUpForm = () => (
  <Formol onSubmit={handleSubmit}>
    <Field required>First Name</Field>
    <Field required>Last Name</Field>
    <Field required type="email">
      Email
    </Field>
    <Field
      required
      pattern="^[0-9]{5}$"
      validityErrors={({ patternMismatch }) =>
        patternMismatch && "Zip must be a five-digit number"
      }
    >
      Zip
    </Field>
  </Formol>
);

export default SignUpForm;
