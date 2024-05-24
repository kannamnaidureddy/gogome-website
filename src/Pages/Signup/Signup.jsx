import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [values, setValues] = useState({
    username: '',
    emailid: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    agreeTerms:false
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setValues(prev => ({ ...prev, agreeTerms: event.target.checked }));
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);



    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match'
      }));
      return; 
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', values);
      console.log(response.data); 
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }


   
  };

  return (
    <div className='signup-card-container'>
    <div className='d-flex justify-content-center align-items-start'>
    <div>
       <p className="text-success h4 pt-2">On-line Sign Up</p>
        <img src="https://t3.ftcdn.net/jpg/00/47/19/42/360_F_47194226_wfWOZomCTunpr2C33YB5tER4LQLFtZQg.jpg" className="img"/>
      </div>

      <div className='bg-white p-5 mt-5 mb-5 rounded w-45'>
        <h2 className='text-center'>Sign-Up</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <Form.Group className='mb-3'>
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control type="text" placeholder='Enter your name' className='rounded-0' name='username' value={values.username} onChange={handleInput} />
              {errors.username && <span className='text-danger'>{errors.username}</span>}
            </Form.Group>
          </div>
          <div>
            <Form.Group className='mb-3'>
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control type="emailid" placeholder='Enter Email' className='rounded-0' name='emailid' value={values.emailid} onChange={handleInput} />
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
            <Form.Group className='mb-3'>
              <Form.Label><strong>Confirm Password</strong></Form.Label>
              <Form.Control type="password" placeholder='Confirm Password' className='rounded-0' name='confirmPassword' value={values.confirmPassword} onChange={handleInput} />
              {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
            </Form.Group>
          </div>
          <div>
            <Form.Group className='mb-3'>
              <Form.Label><strong>Mobile</strong></Form.Label>
              <Form.Control type="text" placeholder='Enter Mobile Number' className='rounded-0' name='mobile' value={values.mobile} onChange={handleInput} />
              {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
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
         
          <Button type="submit" variant='success w-100 rounded-0'>Sign Up</Button>
          <Form.Text className='text-center'>You agree to our terms and policies</Form.Text>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
