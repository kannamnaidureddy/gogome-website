import React from 'react';
import { Form } from 'react-bootstrap';

function validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@+@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/;

  // Validation logic for email
  if (!values.emailid) {
    errors.emailid = 'Email is required';
  } else if (!email_pattern.test(values.emailid)) {
    errors.emailid = "Email didn't match";
  }

  // Validation logic for password
  if (!values.password) {
    errors.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password didn't match";
  }

  // This JSX code should be outside of the validation function
  return errors;
}

export default validation;
