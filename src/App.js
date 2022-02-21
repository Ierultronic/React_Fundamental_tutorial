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
    details:""
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

 formSubmit = (event) =>{
     event.preventDefault(); //tak refresh bila tekan submit tau, power power 
    
    //  if(this.validateData()){
    //    alert("dah login, yeayyyyyyyyyyyy!!!")
    //    this.setState({paswedEror:""}) //ni tambahan
    //   this.setState({duaduaError:""}) //ni tambahan
    //   this.setState({emelEror:""}) //ni tambahan
    //  }
    
    } 
  //kalau nak guna ni guna <form onSubmit={this.formSubmit}> gitchewww

  render(){
    return(
      <div className="App">
        
        <p>Login Panel</p>
        <div>
          <form onSubmit={this.formSubmit}> 
            <div class="form-group" style={{marginLeft:200}}>
              <label>email u</label><br></br>
              <input type="email" name='email' onChange={(event)=>{this.setState({emel:event.target.value})}}></input><br></br>
              {/* <strong style={{color:"red"}}>{this.state.emelEror}</strong><br></br> */}
              
              <label>Details u</label><br></br>
              <textarea onChange={(event)=>{this.setState({details:event.target.value})}}>tulis sini</textarea><br></br>
              <h6>{this.state.details}</h6>
              {/* <input type="password" name='pass' onChange={(event)=>{this.setState({paswed:event.target.value})}}></input><br></br> */}
              {/* <strong style={{color:"red"}}>{this.state.paswedEror}</strong><br></br> */}
              <button type='submit'>Submit Martzz</button>
              {/* <strong style={{color:"red"}}>{this.state.duaduaError}</strong><br></br> */}
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default App;
