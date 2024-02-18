import React from 'react';
import Navbar from '../components/Navbar';
import resumeBackground from '../images/CV.jpg';
import axios from 'axios';

const Resume = () => {
  const downloadResume = async () => {
    const response = await fetch(resumeBackground);
    const blob = await response.blob();
  
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result.split(',')[1];
  
      axios.post('http://localhost:3000/api/downloadpdf', { image: base64Image }, { responseType: 'arraybuffer' })
        .then(response => {
          const file = new Blob([response.data], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          
          const a = document.createElement('a');
          a.href = fileURL;
          a.download = 'CV Liran Bashari.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(fileURL);
        })
        .catch(error => {
          console.error(error);
        });
    };
    reader.readAsDataURL(blob);
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
            Click to download as PDF file
          </button>
        </div>
        </div>
      </div>
  );
};

export default Resume;
