import React from 'react';
import { AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        {' '}
        &copy; 2023 || <span>Samuels</span> All rights reserverd
      </p>
      <p className="icons">
        <a
          href="https://www.instagram.com/theophilus_mcsam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/theophilus-mcsamue/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
