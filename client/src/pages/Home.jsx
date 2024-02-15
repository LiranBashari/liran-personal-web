import React from 'react'
import Navbar from '../components/Navbar'
import profile from '../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <div className='background'>
      <div>
        <Navbar backgroundColor="bg-dark"/>
        <div className="row">
          <div className="col-md-2 p-4">
            <img src={profile} alt="profile" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8 p-4">
            <h2 className="mb-3 pt-4 text-white" style={{ fontWeight: 400, fontSize: '45px'}}>
              <FontAwesomeIcon icon={faUser} className="mr-3"/> About Me
            </h2>
            <h5 className='pt-3 text-white' style={{ fontWeight: 400, fontSize: '27px', lineHeight: '1.8', display: 'inline-block' , whiteSpace: 'nowrap'}}>
              Software engineer with 2 years of experience.<br />
              Highly motivated worker, with willingness and determination to learn and to achieve high quality work.<br />
              Self-learner and a strong team player with Interpersonal skills. Capable of paying attention to details, multitaskingand balancing a complex workload.<br />
              Looking for a challenging position in which I could express my motivation and skills.
            </h5>
          </div>
        </div>
      </div>

      <div className="col-md-8 offset-md-2 p-4">
          <h2 className="mb-3 text-white" style={{fontWeight: 500, fontSize: '45px'}}>
            <FontAwesomeIcon icon={faGraduationCap} className="me-2" /> Education
          </h2>
        <p className="mb-0 text-white" style={{ fontWeight: 300, lineHeight: '1.6' }}>
          <span style={{fontSize: '28px'}}>B.Sc. Computer Science | Bar Ilan University.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px'}}>• GPA - 86.2.</span>
        </p>
      </div>

      <div className="col-md-8 offset-md-2 p-4">
        <h2 className="mb-3 pt-5 text-white" style={{fontWeight: 500, fontSize: '45px'}}>
          <FontAwesomeIcon icon={faBriefcase} className="mr-3"/> Professional Experience
        </h2>
        <p className="mb-0 text-white" style={{ fontWeight: 300, lineHeight: '1.6' }}>
          <span style={{fontWeight: 500, fontSize: '28px'}}>Automation Developer at Zengo.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px'}}>• Developing comprehensive Java-based tests for the company's website and application.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px'}}>• Defining test requirements and making proper design before implementation.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px'}}>• Developing and integrating Image Comparison feature to enhance automation application's functionality.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px', display: 'inline-block' , whiteSpace: 'nowrap'}}>• Proficiently integrating with APIs such as Microsoft Graph and Google Drive to enhance data management and streamline application functionality.</span><br />
          <span className="me-4 align-top" style={{fontSize: '28px'}}>• Leading refactoring of existing applications.</span>
        </p>
      </div>

    </div>

    
  );
}

export default Home
