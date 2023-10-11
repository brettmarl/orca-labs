import logo from './OrcaLogo.svg';
import './App.css';
import AppsIcon from '@mui/icons-material/Apps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo white-filter" alt="logo" />
        <div>
          ORCA LABS LLC
        </div>
        <div style={{fontSize: 14}}>
          Code <AppsIcon sx={{fontSize: 12}} /> Apps <AppsIcon sx={{fontSize: 12}} /> Consulting
          </div>

          <p style={{fontSize: 14}}>
          <a href="mailto:info@orca-labs.com" style={{color:'white'}}>Contact</a>
          </p>
       
      </header>
    </div>
  );
}

export default App;
