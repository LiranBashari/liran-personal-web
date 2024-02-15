import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Carousel, Card } from 'react-bootstrap';
import profile from '../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  return (
    <div className='background'>
      <Navbar backgroundColor="bg-dark"/>
      <Container>
        <Carousel className='pt-5'>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src={profile} style={{ maxHeight: '850px'}} />
              <Card.Body>
                <Card.Title>Real-Time Chat Application</Card.Title>
                <Card.Text>
                  Short description of project 1. <br/>
                  Short description of project 1.<br/>
                  Short description of project 1.<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src={profile} style={{ maxHeight: '850px'}} />
              <Card.Body>
                <Card.Title>Desktop Application For Detecting Anomalies In A Flight Simulation</Card.Title>
                <Card.Text>
                  Short description of project 2. <br/>
                  Short description of project 2.<br/>
                  Short description of project 2.<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
        <div style={{ paddingTop: '20px', fontSize: '1.5rem', color: 'white' }}>
          <span><FontAwesomeIcon icon={faGithubSquare} className="mr-3"/> Link to GitHub here:</span>
          <a href="https://github.com/LiranBashari" className="text-white" style={{ display: 'inline-block', whiteSpace: 'nowrap', marginLeft: '10px' }}>https://github.com/LiranBashari</a>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
