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
    const buah = [
      {nama:'mangga', berat:'sekilo', harga: 5},
      {nama:'anggur', berat:'duakilo', harga: 10},
      {nama:'sexy banana', berat:'sekilo', harga: 3}
     ];
    const items = buah.map((item, indexes) => {
      return <li key={indexes}>
        Nama: {item.nama}, Berat: {item.berat}, Harga: RM{item.harga} 
        <button>Edit</button> | <button>Delete</button>
      </li>
    });
    return(
      <div className="App">
        
        <h1>List buah buahan meleyshe</h1>
        {items}
        <div>
         
        </div>

      </div>
    )
  }
}

export default App;
