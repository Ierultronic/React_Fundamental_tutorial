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
    contoh:""
  }

  ChangeData= (event) => {
    let val= event.target.name; //username
    let myval = event.target.value //getting value
    this.setState({[val]:myval}); // value set on the state
  }

  render(){
    return(
      <div className="App">
        <h1>Single Input(OnChange punya Contoh '{this.state.username}')</h1>
        <div>
          <form>
            <div class="form-group" style={{marginLeft:200}}>
              <label>Username:</label><br></br>
              <input type="text" name='username' onChange={this.ChangeData}></input><br></br>
              <button type='submit'>Submit Martzz</button>

            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default App;
