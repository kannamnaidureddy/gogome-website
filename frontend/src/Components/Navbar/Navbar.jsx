// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import GOlogo from '../../assets/GOlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css'; // Import custom Navbar CSS

const Navbar = () => {
    const { isLoggedIn, handleLogin, handleLogout } = useAuth();
    const [isOpen, setIsOpen] = useState(false); // State variable for menu toggle

    // Function to handle menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle isOpen state
    };

    

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={GOlogo} alt="GOlogo" className="gologo" />
                        Go..Go..Me
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0 mr-auto">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/facilities" className="nav-link">
                                    Facilities
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact Us
                                   
                                </Link>
                                
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link to="/registration" className="nav-link">
                                        Registration
                                    </Link>
                                </li>
                            ) : null}
                            <li className="nav-item login-item">
                                {isLoggedIn ? (
                                    // Render logout button if user is logged in
                                    <button className="nav-link" onClick={handleLogout}>
                                        Logout
                                    </button>
                                ) : (
                                    // Render login button if user is not logged in
                        
                                       <Link to="/login" className="nav-link">
                                        Login
                                    </Link> 
                                    
                                )}
                            </li>
                            {!isLoggedIn && (
                                // Render sign up button if user is not logged in
                                <li className="nav-item login-item">
                                    <Link to="/signup" className="nav-link">
                                        Sign Up
                                    </Link>
                                    
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
