import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Container fluid className='footer-content'>
        <div className='copyright'>&copy;2024 Tourism. All Right Reserved.</div>
        <div className='socials'>
          <ul>
            <li><a href="https://www.facebook.com"><i className="fas fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
