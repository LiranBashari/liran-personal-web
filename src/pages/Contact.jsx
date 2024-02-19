import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar backgroundColor="bg-dark"/>
      <div className="container">
        <h1 className='text-white pt-5 display-1'>
          <FontAwesomeIcon icon={faEnvelope} className="mr-3"/> Contact Me
        </h1>
        <br/>
        <div className="row mt-5">
          <div className="col-md-6 pt-5 pr-md-4">
            <h3 className="text-white display-5">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3"/> Phone Number
            </h3>
          </div>
          <div className="col-md-6 pt-5">
            <p className="text-white display-5">053-6204838</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 pt-5 pr-md-4">
            <h3 className="text-white display-5">
              <FontAwesomeIcon icon={faGithubSquare} className="mr-3"/> GitHub
            </h3>
          </div>
          <div className="col-md-6 pt-5">
            <a href="https://github.com/LiranBashari" className="text-white display-5" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>https://github.com/LiranBashari</a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 pt-5 pr-md-4">
            <h3 className="text-white display-5">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3"/> LinkedIn
            </h3>
          </div>
          <div className="col-md-6 pt-5">
            <a href="https://www.linkedin.com/in/liran-bashari-3a0129216/" className="text-white display-5" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>https://www.linkedin.com/in/liran-bashari/</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
