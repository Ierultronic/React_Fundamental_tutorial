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
    emel:"",
    paswed:""
  }

  // ChangeData= (event) => {
  //   let val= event.target.name; //username, phone, email
  //   let myval = event.target.value //getting value
  //   this.setState({[val]:myval}); // value set on the state
  // }

 formSubmit = (event) =>{
     event.preventDefault(); //tak refresh bila tekan submit tau, power power 
    console.log(this.state.emel, this.state.paswed)
    
    } 
  //kalau nak guna ni guna <form onSubmit={this.formSubmit}> gitchewww

  render(){
    return(
      <div className="App">
        
        <p>email lu mat: {this.state.emel}</p>
        <p>paswed: {this.state.paswed}</p>
        <div>
          <form onSubmit={this.formSubmit}> 
            <div class="form-group" style={{marginLeft:200}}>
              <label>input test:</label><br></br>
              <input type="email" name='email' onChange={(event)=>{this.setState({emel:event.target.value})}}></input><br></br>
              <input type="password" name='pass' onChange={(event)=>{this.setState({paswed:event.target.value})}}></input><br></br>
              <button type='submit'>Submit Martzz</button>

            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default App;
