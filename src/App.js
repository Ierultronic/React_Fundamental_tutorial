import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
// import logo from './logo.svg';
// import './App.css';
// import ComFunct from './components/Hello';
// import Comclass from './components/comClas';
// import HookState from './components/Hookstate';
// import DataBind from './components/Check';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
        
//         {/* <ComFunct name='{ini adalah props}'/> */}
//         <Comclass/>
        
//       </header>
    
//     </div>
//   );
// }

class App extends React.Component{

  state ={
    age:""
    // emel:"",
    // details:""
    // paswed:"",
    // emelEror:"",
    // paswedEror:"",
    // duaduaError:""
  }

  // ChangeData= (event) => {
  //   let val= event.target.name; //username, phone, email
  //   let myval = event.target.value //getting value
  //   this.setState({[val]:myval}); // value set on the state
  // }

// validateData(){
//   if(!this.state.emel>0 && !this.state.paswed>0){
//     this.setState({duaduaError:"Isi la email dan juga password!"})
//     this.setState({emelEror:""}) //ni tambahan
//     this.setState({paswedEror:""}) //ni tambahan
//   }else if(!this.state.emel>0){
//     this.setState({emelEror:"Isi la email dulu mat"})
//     this.setState({duaduaError:""}) //ni tambahan
//     this.setState({paswedEror:""}) //ni tambahan
//   }else if(!this.state.paswed>0){
//     this.setState({paswedEror:"dahtu jangan lupa isi password lak ek eleh"})
//     this.setState({duaduaError:""}) //ni tambahan
//     this.setState({emelEror:""}) //ni tambahan
//   }else{
//     return true;
//   }
// }

//  formSubmit = (event) =>{
//      event.preventDefault(); //tak refresh bila tekan submit tau, power power 
    
//     //  if(this.validateData()){
//     //    alert("dah login, yeayyyyyyyyyyyy!!!")
//     //    this.setState({paswedEror:""}) //ni tambahan
//     //   this.setState({duaduaError:""}) //ni tambahan
//     //   this.setState({emelEror:""}) //ni tambahan
//     //  }
    
//     } 
//   //kalau nak guna ni guna <form onSubmit={this.formSubmit}> gitchewww

  render(){
    
    return(
      <div className="App">
        
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <div>
        <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
        </div>
        <div>
                
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
        </div>

      </div>
    )
  }
}

export default App;
