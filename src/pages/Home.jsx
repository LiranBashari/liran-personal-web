import React from 'react';
import Navbar from '../components/Navbar';
import profile from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Navbar backgroundColor="bg-dark" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-4">
            <img src={profile} alt="profile" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-10 p-4">
            <h2 className="mb-3 pt- text-white" style={{ fontWeight: 400, fontSize: '45px' }}>
              <FontAwesomeIcon icon={faUser} className="mr-3" /> About Me
            </h2>
            <h5 className='pt-3 text-white' style={{ fontWeight: 400, fontSize: '22px', lineHeight: '1.8', overflowWrap: 'break-word'}}>
              Software engineer with 2 years of experience.<br />
              Highly motivated worker, with willingness and determination to learn and to achieve high-quality work.<br />
              Self-learner and a strong team player with Interpersonal skills. Capable of paying attention to details, multitasking and balancing a complex workload.<br />
              Looking for a challenging position in which I could express my motivation and skills.
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-2 p-4">
            <h2 className="text-white" style={{ fontWeight: 500, fontSize: '40px' }}>
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" /> Education
            </h2>
            <p className="mb-0 text-white" style={{ fontWeight: 300, lineHeight: '1.6' }}>
              <span style={{ fontSize: '20px' }}>B.Sc. Computer Science | Bar Ilan University.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px' }}>• GPA - 86.2.</span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-2 pt-5 pb-5">
            <h2 className="mb-3 text-white" style={{ fontWeight: 500, fontSize: '40px' }}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-3" /> Professional Experience
            </h2>
            <p className="mb-0 text-white" style={{ fontWeight: 300, lineHeight: '1.6' }}>
              <span style={{ fontWeight: 500, fontSize: '25px' }}>Automation Developer at Zengo.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px' }}>• Developing comprehensive Java-based tests for the company's website and application.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px' }}>• Defining test requirements and making proper design before implementation.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px' }}>• Developing and integrating Image Comparison feature to enhance automation application's functionality.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px', overflowWrap: 'break-word'}}>• Proficiently integrating with APIs such as Microsoft Graph and Google Drive to enhance data management and streamline application functionality.</span><br />
              <span className="me-4 align-top" style={{ fontSize: '20px' }}>• Leading refactoring of existing applications.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
