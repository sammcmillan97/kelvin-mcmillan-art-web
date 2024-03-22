import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <a href="https://www.facebook.com/profile.php?id=100092978497227">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
    </footer>
  );
};

export default Footer;