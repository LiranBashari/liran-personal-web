import React from 'react';
import Navbar from '../components/Navbar';
import resumeBackground from '../images/CV.jpg';

const Resume = () => {

  const downloadResume = () => {
    // Logic to download the resume file
  };

  return (
    <div className='background'>
      <Navbar backgroundColor="bg-dark"/>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img src={resumeBackground} alt="profile"  style={{height: '65rem'}}/>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <button onClick={downloadResume} className="download-resume">
            Download as PDF
          </button>
        </div>
        </div>
      </div>
  );
};

export default Resume;
