import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom";
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
                            <Navbar.Brand><NavLink to="/">Meh le belajau</NavLink></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link ><NavLink to="/about">About kami</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/contact">Contact</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/blog">Blog</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/profile">Profile</NavLink></Nav.Link>
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