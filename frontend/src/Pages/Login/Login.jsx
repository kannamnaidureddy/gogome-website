import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';
import { useAuth } from '../../Components/Navbar/AuthContext'; // Import useAuth hook
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    emailid: '',
    password: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { handleLogin } = useAuth(); // Use the handleLogin function from useAuth

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCheckboxChange = (event) => {
    setValues(prev => ({ ...prev, agreeTerms: event.target.checked }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));
    try {
      const data = {
        emailid: values.emailid,
        password: values.password
      };

      const response = await axios.post('http://localhost:3000/login', data);
      console.log('Response data:', response.data); // Log response data to console
      const { JwtToken, emailid } = response.data;
      localStorage.setItem('token', JwtToken);
      localStorage.setItem('emailid', emailid); // Store emailid in local storage

      // Call handleLogin from useAuth to update isLoggedIn context value
      handleLogin();

      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      // Add error handling here (e.g., display error message to the user)
    }
  };

  return (
    <div className='bg'>
      <div className='d-flex justify-content-center align-items-center card1-container ' >
        <div className='bg-white p-3 rounded w-45 max-width-400'>
          <h2>Sign-In</h2>
          <Form onSubmit={handleSubmit}>
            <div>
              <Form.Group className='mb-3'>
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control type="email" placeholder='Enter Email' className='rounded-0' name='emailid' value={values.emailid} onChange={handleInput} />
                {errors.emailid && <span className='text-danger'>{errors.emailid}</span>}
              </Form.Group>
            </div>
            <div>
              <Form.Group className='mb-3'>
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control type="password" placeholder='Enter Password' className='rounded-0' name='password' value={values.password} onChange={handleInput} />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  checked={values.agreeTerms}
                  onChange={handleCheckboxChange}
                  isInvalid={!!errors.agreeTerms}
                  feedback={errors.agreeTerms}
                />
              </Form.Group>
            </div>
            <Button type="submit" variant='success w-100 rounded-0'>Log in</Button>
            <Form.Text>You agree to our terms and policies</Form.Text>
            <Link to='/signup' variant='default w-100 bg-light rounded-0 text-decoration-none' className='border'>Create Account</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
