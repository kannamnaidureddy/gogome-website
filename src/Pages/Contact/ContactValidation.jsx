function validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation logic for email
  if (!values.user_email) {
    errors.user_email = 'Email is required';
  } else if (!email_pattern.test(values.user_email)) {
    errors.user_email = "Email format is invalid";
  }

  // Validation logic for name
  if (!values.user_name) {
    errors.user_name = 'Name is required';
  }

  // Validation logic for message
  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
}

export default validation;
