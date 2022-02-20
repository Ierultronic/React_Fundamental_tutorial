import logo from './logo.svg';
import './App.css';
import ComFunct from './components/Hello';
import Comclass from './components/comClas';
import HookState from './components/Hookstate';
import DataBind from './components/Check';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        {/* <ComFunct name='{ini adalah props}'/> */}
        <Comclass/>
        
      </header>
    
    </div>
  );
}

export default App;
