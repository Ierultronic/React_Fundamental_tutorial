import React from "react";
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
    user:"",
    fon:"",
    emel:""
  }

  ChangeData= (event) => {
    let val= event.target.name; //username, phone, email
    let myval = event.target.value //getting value
    this.setState({[val]:myval}); // value set on the state
  }

  // formSubmit = (event) =>{
  //   event.preventDefault(); //tak refresh bila tekan submit tau, power power
  // } kalau nak guna ni guna <form onSubmit={this.formSubmit}> gitchewww

  render(){
    return(
      <div className="App">
        
        <p>name diberi: {this.state.username}</p>
        <p>Nomboq tepon: {this.state.phone}</p>
        <p>Email edqaih: {this.state.email}</p>
        <div>
          <form> 
            <div class="form-group" style={{marginLeft:200}}>
              <label>input test:</label><br></br>
              <input type="text" name='username' onChange={this.ChangeData}></input><br></br>
              <input type="text" name='phone' onChange={this.ChangeData}></input><br></br>
              <input type="text" name='email' onChange={this.ChangeData}></input><br></br>
              <button type='submit'>Submit Martzz</button>

            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default App;
