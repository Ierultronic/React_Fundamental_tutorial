import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Profile from './components/profile';
import App from './App';
import WritePosts from "./components/writePost";

export default class header extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand><Link to="/">Meh le belajau</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link ><Link to="/about">About kami</Link></Nav.Link>
                                <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
                                <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
                                <Nav.Link ><Link to="/profile">Profile</Link></Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<App/>}/>
          <Route path="/writePost" element={<WritePosts/>}/>
        </Routes>
            </Router>
        );
    }

}