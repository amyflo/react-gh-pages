import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './App.css';
 
function Projects() {
  return (
    // Render a Thumbnail component
    <div>
        <Jumbotron fluid>
            <Container>
                <h1>Amy is a product designer.</h1>
                <p>
                This is a statement.
                </p>
            </Container>
        </Jumbotron>
      <h1>Projects</h1>
      
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
        />
        
        <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
        />
        
        <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
        />
    </div>
  )
}
export default Projects;