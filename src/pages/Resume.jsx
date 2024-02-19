import React from 'react';
import Navbar from '../components/Navbar';
import resumeBackground from '../images/CV.jpg';
import { jsPDF } from 'jspdf';

const Resume = () => {
  const downloadResume = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = resumeBackground;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg');
      
      const pdf = new jsPDF();
      pdf.addImage(imageData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save('CV_Liran_Bashari.pdf');
    };
  };

  return (
    <div className='background'>
      <Navbar backgroundColor="bg-dark"/>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img src={resumeBackground} alt="profile"  style={{maxWidth: '100%', height: 'auto'}}/>
          </div>
        </div>
        <div className="text-center p-3">
          <button className="download-resume" onClick={downloadResume} style={{ width: '100%' }}>
            Click to download as PDF file
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
