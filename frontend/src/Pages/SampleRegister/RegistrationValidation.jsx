function validation(values) {
  let errors = {};

  const email_pattern = /^[^\s@+@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.emailid) {
    errors.emailid = 'Email is required';
  } else if (!email_pattern.test(values.emailid)) {
    errors.emailid = "Email didn't match";
  }

  // Validation logic for firstname
  if (!values.firstname) {
      errors.firstname = 'First name is required';
  } else {
      errors.firstname = '';
  }

  // Validation logic for lastname
  if (!values.lastname) {
      errors.lastname = 'Last name is required';
  } else {
      errors.lastname = '';
  }

  // Validation logic for dateofbirth
  if (!values.dateofbirth) {
      errors.dateofbirth = 'Date of birth is required';
  } else {
      errors.dateofbirth = '';
  }

  // Validation logic for tenthgrade
  if (!values.tenthgrade) {
      errors.tenthgrade = 'Tenth grade is required';
  } else {
      errors.tenthgrade = '';
  }

  // Validation logic for tenthmarks
  if (!values.tenthmarks) {
      errors.tenthmarks = 'Tenth marks are required';
  } else {
      errors.tenthmarks = '';
  }

  // Validation logic for intermarks
  if (!values.intermarks) {
      errors.intermarks = 'Intermediate marks are required';
  } else {
      errors.intermarks = '';
  }

  // Validation logic for interpoints
  if (!values.interpoints) {
      errors.interpoints = 'Intermediate points are required';
  } else {
      errors.interpoints = '';
  }

  // Validation logic for fathername
  if (!values.fathername) {
      errors.fathername = 'Father\'s name is required';
  } else {
      errors.fathername = '';
  }

  // Validation logic for mothername
  if (!values.mothername) {
      errors.mothername = 'Mother\'s name is required';
  } else {
      errors.mothername = '';
  }

  // Validation logic for fatheroccupation
  if (!values.fatheroccupation) {
      errors.fatheroccupation = 'Father\'s occupation is required';
  } else {
      errors.fatheroccupation = '';
  }

  // Validation logic for motheroccupation
  if (!values.motheroccupation) {
      errors.motheroccupation = 'Mother\'s occupation is required';
  } else {
      errors.motheroccupation = '';
  }

 

  // Validation logic for guardianmobileno
  if (!values.guardianmobileno) {
      errors.guardianmobileno = 'Guardian\'s mobile number is required';
  } else if (!/^\d{10}$/.test(values.guardianmobileno)) {
      errors.guardianmobileno = 'Please enter a valid 10-digit mobile number';
  } else {
      errors.guardianmobileno = '';
  }

  // Validation logic for college
  if (!values.college) {
      errors.college = 'College is required';
  } else {
      errors.college = '';
  }

  // Validation logic for year
  if (!values.year) {
      errors.year = 'Year is required';
  } else {
      errors.year = '';
  }

  // Validation logic for semister
  if (!values.semister) {
      errors.semister = 'Semester is required';
  } else {
      errors.semister = '';
  }

  return errors;
}

export default validation;
