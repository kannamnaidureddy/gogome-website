import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Registration.css';
import validation from './RegistrationValidation';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Components/Navbar/AuthContext';

function Registration() {
    const navigate = useNavigate();
    const { handleLogout } = useAuth(); 
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        dateofbirth: '',
        tenthmarks: '',
        tenthgrade: '',
        intermarks: '',
        interpoints: '',
        fathername: '',
        mothername: '',
        fatheroccuption: '',
        motheroccuption: '',
        gardianmobileno: '',
        college: '',
        year: '',
        semister: '',
        gender: '',
        emailid: '',
        agreeTerms: false
    });


    const [preference, setPreference] = useState('marks');
    const [preference1, setPreference1] = useState('marks');


    const [errors, setErrors] = useState({});
    const [showSignupAlert, setShowSignupAlert] = useState(false);



    const handleInput = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handlePreferenceChange = (event) => {
        setValues({
            ...values,
            preference: event.target.value
        });
    };

    const handlePreferenceChange1 = (event) => {
        setValues({
            ...values,
            preference1: event.target.value
        });
    };
    const handleCheckboxChange = (event) => {
        setValues(prev => ({ ...prev, agreeTerms: event.target.checked }));
    };



    const handleGenderChange = (event) => {
        setValues({
            ...values,
            gender: event.target.id
        });
    };

    useEffect(() => {
        if (showSignupAlert) {
            // Scroll to the top of the window
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showSignupAlert]);

    // Retrieve email ID from local storage and pre-fill in the form
    useEffect(() => {
        const storedEmail = localStorage.getItem('emailid');
        if (storedEmail) {
            setValues(prevValues => ({
                ...prevValues,
                emailid: storedEmail
            }));
        }
    }, []);

    const handleSignupClick = () => {
        navigate('/signup'); // Replace '/signup' with the actual URL of your signup page
        setShowSignupAlert(false);

    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            handleLogout();
            // Token expired or not present, navigate to login page
            navigate('/login');
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validation(values));

        try {
            const token = localStorage.getItem('token');
            const emailid = localStorage.getItem('emailid');
            const response = await axios.post('http://localhost:3000/registration', { ...values, emailid }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            navigate('/facilities');
        } catch (error) {
            console.error('Error signing up:', error);
            if (error.response && error.response.data && error.response.data.error) {
                setShowSignupAlert(true);
            } else {
                window.alert("An unexpected error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className='registration-card-container'>
            <div className='d-flex justify-content-center align-items-start  Signup '>
                <div className="registration-image-container">
                    <p className="text-success h4 pt-2">On-line Registration</p>
                    <img src="https://media.istockphoto.com/id/1268691831/photo/modern-keyboard-with-blue-online-registration-button.jpg?s=612x612&w=0&k=20&c=4r_3ZK--jPMCpfF02LOR3oMrPtwjnX0SeF4u3P8t2W8=" className="img" />
                </div>
                <div className='form-container'>

                    <h2>Registration</h2>
                    <Form action="" onSubmit={handleSubmit}>


                        <div className="row">
                            {/* First Section */}
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>First Name</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter First Name' className='rounded-0' name='firstname' required onChange={handleInput} />
                                </Form.Group>
                                {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
                            </div>
                            <div className="col">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Last Name</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter Last Name' className='rounded-0' name='lastname' required onChange={handleInput} />
                                </Form.Group>
                                {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="dateOfBirth" className="form-label"><strong>Date of Birth</strong></label>
                                <input type="date" className="form-control rounded-0" id="dateOfBirth" name="dateofbirth" required onChange={handleInput} />
                                {errors.dateofbirth && <span className="text-danger">{errors.dateofbirth}</span>}
                            </div>
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Gender</strong></Form.Label>
                                    <div>
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Male"
                                            name="gender"
                                            id="male"
                                            onChange={handleGenderChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Female"
                                            name="gender"
                                            id="female"
                                            onChange={handleGenderChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Other"
                                            name="gender"
                                            id="other"
                                            onChange={handleGenderChange}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Preference</strong></Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label='Marks'
                                            value='marks'
                                            checked={values.preference === 'marks'}
                                            onChange={handlePreferenceChange}
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label='CGPA'
                                            value='cgpa'
                                            checked={values.preference === 'cgpa'}
                                            onChange={handlePreferenceChange}
                                            required
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                {values.preference === 'marks' ? (
                                    <Form.Group className='mb-3'>
                                        <Form.Label><strong>10th Grade Marks</strong></Form.Label>
                                        <Form.Control type='number' placeholder='Enter 10th Grade Marks' className='rounded-0' name='tenthmarks' onChange={handleInput} />
                                        {errors.tenthmarks && <span className='text-danger'>{errors.tenthmarks}</span>}
                                    </Form.Group>
                                ) : (
                                    <Form.Group className='mb-3'>
                                        <Form.Label><strong>CGPA</strong></Form.Label>
                                        <Form.Control type='number' step='0.01' placeholder='Enter CGPA' className='rounded-0' name='tenthgrade' onChange={handleInput} />
                                        {errors.tenthgrade && <span className='text-danger'>{errors.tenthgrade}</span>}
                                    </Form.Group>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Preference</strong></Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label='Marks'
                                            value='marks'
                                            checked={values.preference1 === 'marks'}
                                            onChange={handlePreferenceChange1}
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            label='Points'
                                            value='Points'
                                            checked={values.preference1 === 'Points'}
                                            onChange={handlePreferenceChange1}
                                            required
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                {values.preference1 === 'marks' ? (
                                    <Form.Group className='mb-3'>
                                        <Form.Label><strong>Inter Grade Marks</strong></Form.Label>
                                        <Form.Control type='number' placeholder='Inter Grade Marks' className='rounded-0' name='intermarks' onChange={handleInput} />
                                        {errors.intermarks && <span className='text-danger'>{errors.intermarks}</span>}
                                    </Form.Group>
                                ) : (
                                    <Form.Group className='mb-3'>
                                        <Form.Label><strong>Inter Grade Points</strong></Form.Label>
                                        <Form.Control type='number' step='0.01' placeholder='Inter Grade Points' className='rounded-0' name='interpoints' onChange={handleInput} />
                                        {errors.interpoints && <span className='text-danger'>{errors.interpoints}</span>}
                                    </Form.Group>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Father's Name</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter your Father Name' className='rounded-0' name='fathername' required onChange={handleInput} />
                                </Form.Group>
                                {errors.fathername && <span className='text-danger'>{errors.fathername}</span>}
                            </div>
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Mother's Name</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter your Mother Name' className='rounded-0' name='mothername' required onChange={handleInput} />
                                </Form.Group>
                                {errors.mothername && <span className='text-danger'>{errors.mothername}</span>}
                            </div>



                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Father's Occupation</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter your Father Occupation' className='rounded-0' name='fatheroccuption' required onChange={handleInput} />
                                </Form.Group>
                                {errors.fatheroccuption && <span className='text-danger'>{errors.fatheroccuption}</span>}
                            </div>
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Mother's Occupation</strong></Form.Label>
                                    <Form.Control type="text" placeholder='Enter your Mother Occupation' className='rounded-0' name='motheroccuption' required onChange={handleInput} />
                                </Form.Group>
                                {errors.motheroccuption && <span className='text-danger'>{errors.motheroccuption}</span>}

                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Guardian's Mobile Number</strong></Form.Label>
                                    <Form.Control type="number" placeholder='Enter your Guardian Mobile Number' className='rounded-0' name='gardianmobileno' required onChange={handleInput} />
                                </Form.Group>
                                {errors.gardianmobileno && <span className='text-danger'>{errors.gardianmobileno}</span>}

                            </div>



                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>College</strong></Form.Label>
                                    <Form.Select className='rounded-0' name='college' onChange={handleInput} values={values.college}>
                                        <option>Select your College</option>
                                        <option>J.N.T.U.K</option>
                                        <option>Andhra University</option>
                                        <option>G.V.P Vizag</option>
                                        {/* Add more options as needed */}
                                    </Form.Select>
                                </Form.Group>
                                {errors.college && <span className='text-danger'>{errors.college}</span>}


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Year of the student</strong></Form.Label>
                                    <Form.Select className='rounded-0' name='year' onChange={handleInput}>
                                        <option>Select your Year</option>
                                        <option>1st Year</option>
                                        <option>2nd Year</option>
                                        <option>3rd Year</option>
                                        <option>4th Year</option>
                                        {/* Add more options as needed */}
                                    </Form.Select>
                                </Form.Group>
                                {errors.year && <span className='text-danger'>{errors.year}</span>}
                            </div>
                            <div className="col">
                                <Form.Group className='mb-3'>
                                    <Form.Label><strong>Semister of the student</strong></Form.Label>
                                    <Form.Select className='rounded-0' name='semister' onChange={handleInput}>
                                        <option>Select your Semister</option>
                                        <option>1st Sem</option>
                                        <option>2nd Sem</option>
                                        <option>3rd Sem</option>
                                        <option>4th Sem</option>
                                        <option>5th Sem</option>
                                        <option>6th Sem</option>
                                        <option>7th Sem</option>
                                        <option>8th Sem</option>
                                        {/* Add more options as needed */}
                                    </Form.Select>
                                </Form.Group>
                                {errors.semister && <span className='text-danger'>{errors.semister}</span>}
                            </div>



                        </div>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                checked={values.agreeTerms}
                                onChange={handleCheckboxChange}
                                isInvalid={!!errors.agreeTerms}
                                feedback={errors.agreeTerms}
                            />
                            <Form.Text className="text-muted">
                                By clicking "Register", you agree to our terms and policies
                            </Form.Text>
                        </Form.Group>






                        {/* More of your form elements */}
                        <Button type="submit" variant='success' className='w-100 rounded-0 bg-primary'>Register</Button>
                        <Form.Text className='mb-3'>By clicking "Register", you agree to our terms and policies</Form.Text>
                    </Form>
                </div>



            </div>
        </div>
    );
}

export default Registration;
