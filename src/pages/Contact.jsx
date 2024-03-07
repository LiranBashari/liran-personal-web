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
      <div className="row mt-5">
          <div className="col-md-4 offset-md-2 text-md-right">
            <h1 className="text-white display-3">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" style={{ marginBottom: '-0.1em' }}/> Contact Me
            </h1>
          </div>
        </div>

        <br/>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-2 text-md-right">
            <h3 className="text-white display-6">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" style={{ transform: 'scaleX(-1)' }}/> Phone
            </h3>
          </div>
          <div className="col-md-6">
            <a href="tel:0536204838" className="text-white display-6">053-6204838</a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 offset-md-2 text-md-right">
            <h3 className="text-white display-6">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3"/> Email
            </h3>
          </div>
          <div className="col-md-6">
            <a href="mailto:liranbashari1@gmail.com" className="text-white display-6">liranbashari1@gmail.com</a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 offset-md-2 text-md-right">
            <h3 className="text-white display-6">
              <FontAwesomeIcon icon={faGithubSquare} className="mr-3"/> GitHub
            </h3>
          </div>
          <div className="col-md-6">
            <a href="https://github.com/LiranBashari" className="text-white display-6" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>My GitHub</a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 offset-md-2 text-md-right">
            <h3 className="text-white display-6">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3"/> LinkedIn
            </h3>
          </div>
          <div className="col-md-6">
            <a href="https://www.linkedin.com/in/liran-bashari-3a0129216/" className="text-white display-6" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>My LinkedIn</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
