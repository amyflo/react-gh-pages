import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects.js'; 
import About from './About.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <div className="navigation">
        <div className="navigation-sub">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Amy Lo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/" className="item">Projects</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="item">About</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
