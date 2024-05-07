import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate(); // Import useNavigate hook
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbGlkIjoia2FubmFtbmFpZHVyZWRkeUBnbWFpbC5jb20iLCJpYXQiOjE3MTQ0NTk2MjN9.ABWATmjj9N1gJo2uN9p-nZgz55eD0UaoIdCqTV6lheQ');
        setIsLoggedIn(true);
    };
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login'); // Navigate to login page after logout
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
