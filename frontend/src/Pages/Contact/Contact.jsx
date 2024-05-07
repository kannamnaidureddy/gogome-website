import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import validation from './ContactValidation';
import { Link, useNavigate } from 'react-router-dom';
import './Contact.css';
import axios from 'axios';


const Contact = () => {
  const form = useRef();

  const navigate = useNavigate();

  const [values, setValues] = useState({
    user_email: '',
    user_name: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));

    try {
      const response = await axios.post('http://localhost:3000/contact', values);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error contact page:', error);
    }
  
  
    
  };

  
  const renderError = (field) => {
    return errors[field] && <span className='text-danger'>{errors[field]}</span>;
  };

  return (
    <div className='bg-container' style={{ background: 'rgba(192, 192, 192, 0.5)' }}>
      <Container>
        <h1 className='con-heading'>Contact Us</h1>
        <Row className='justify-content-center'>
          <Col md={6}>
            <div className='white-card'>
              <div className='card-body'>
                <form ref={form} onSubmit={handleSubmit}>
                  <p className='heading'>ONLINE INQUIRY</p>
                  <input
                    type='text'
                    placeholder='Name'
                    className='form-control mb-3'
                    name='user_name'
                    value={values.user_name}
                    onChange={handleInput}
                    autoComplete='off'
                    required
                  />
                  {renderError('name')}
                  <input
                    type='text'
                    placeholder='EmailID'
                    className='form-control mb-3'
                    name='user_email'
                    value={values.user_email}
                    onChange={handleInput}
                    autoComplete='off'
                    required
                  />
                  {renderError('email')}
                  <textarea
                    placeholder='Enquiry'
                    cols='30'
                    rows={10}
                    className='form-control mb-3'
                    name='message'
                    value={values.message}
                    onChange={handleInput}
                    autoComplete='off'
                    required
                  />
                  {renderError('enquiry')}
                  <br />
                  <Button type='submit' value='Send' className='btn btn-primary submit-button'>
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </Col>
          <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9020614316155!2d78.34328602462865!3d17.46440110058303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93acdaed2f17%3A0x49c87f6966fff93c!2z4LCu4LC-4LC44LGN4LCc4LC_4LCm4LGNIOCwrOCwguCwoSwg4LCV4LGK4LCC4LCh4LC-4LCq4LGC4LCw4LGNLCDgsKTgsYbgsLLgsILgsJfgsL7gsKMgNTAwMDg0!5e0!3m2!1ste!2sin!4v1713414885045!5m2!1ste!2sin'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
        </Row>
      </Container>
      
    </div>
  );
};

export default Contact;
