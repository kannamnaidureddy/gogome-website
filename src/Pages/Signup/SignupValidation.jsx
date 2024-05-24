function validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@+@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/
  const name_pattern = /^[a-zA-Z\s]*$/;
  const mobileNumberPattern = /^\d{10}$/;

  if (!values.username) {
    errors.username = 'Name is required';
  } else if (!name_pattern.test(values.username)) {
    errors.username = 'Name must contain only characters';
  }

  if (!values.mobile) {
    errors.mobile = 'Enter your Mobile Number';
  } else if (!mobileNumberPattern.test(values.mobile)) {
    errors.mobile = 'Enter a valid 10-digit mobile number';
  }

  // Validation logic for email
  if (!values.emailid) {
    errors.emailid = 'Email is required';
  } else if (!email_pattern.test(values.emailid)) {
    errors.emailid = "Email format is invalid";
  }

  // Validation logic for password
  if (!values.password) {
    errors.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password format is invalid";
  }

  return errors;
}

export default validation;
