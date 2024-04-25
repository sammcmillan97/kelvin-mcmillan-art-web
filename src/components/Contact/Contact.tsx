import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className='contact-div'>
        <h3>For inquiries send me an email.</h3>
        <p>If you like my work and have a particular subject in mind, let me know. I would be more then happy to turn your vision into reality.</p>
        <p>Cheers, Kelvin.</p>
        <hr></hr>
        <h3>Email: Kelvinmcmillanart@xtra.co.nz</h3>
        <h3>Mobile: 027 6765505</h3>
        <hr></hr>
        <h2>Follow me on Social Media</h2>
        <p>For regular updates on what I currently working on</p>
        
        <div className="footer-icons">
            <a className="contact-social-icon" href="https://www.facebook.com/kelvinmcmillanart" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <a className="contact-social-icon" href="https://www.instagram.com/kelvinmcmillanart/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
    </div>
  );
};

export default Contact;