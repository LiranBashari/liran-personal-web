import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Carousel, Card } from 'react-bootstrap';
import chatImage from '../images/chatting.jpg'
import flightSimulatorImage from '../images/simulator.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  return (
    <div>
      <Navbar backgroundColor="bg-dark"/>
      <Container>
        <Carousel className='pt-5'>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src={chatImage} style={{ maxHeight: '500px'}} />
              <Card.Body>
                <Card.Title>Real-Time Chat Application</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem'}}>
                This is a real-time chat application that enables users to chat with each other in real-time without the need to refresh the page. <br/>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Technologies used:</span><br/>
                • <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Socket.io</span> for real-time communication.<br/>
                • <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>MongoDB</span> for storing chat messages and user information.<br/>
                • <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>React</span>React for building the user interface.<br/>
                • <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Node.js</span> for the backend server. <br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant="top" src={flightSimulatorImage} style={{ maxHeight: '500px'}} />
              <Card.Body>
                <Card.Title style={{fontWeight: 'bold' }}>Desktop Application For Detecting Anomalies In A Flight Simulation</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem'}}>
                  In this project, an application was built that will allow us to display flight data on a dedicated simulator and study them. 
                  Our users are flight researchers or pilots who want to view data, sampled at a certain rate during a flight. 
                  The flight data includes the steering mode, speed, altitude direction, etc., and are recorded into a text file, which can be loaded in our app. 
                  The app will play the data like a movie from the beginning of the recording until the end, it will graphically display the plane in relation to the earth, 
                  the rudder position, and additional flight data in a number of different views, including a view designed to find anomalies in the data. <br/>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>MVVM architecture, C#, WPF, .NET</span>
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
