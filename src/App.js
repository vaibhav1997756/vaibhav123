// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './Home';
import Award from './Awards'
import Social from './SocialWork'
import Industry from'./Industialist'
import Education from './Educationist'
import Position from './PositionHeld'



function App() {
  console.log("hii")
  return (
    <div>
       <Router>
       <Routes>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/" element={ <HomePage/> } />
        <Route path="/ratna" element={ <Award /> } />
        <Route path="/vaibhav" element={ <Social /> } />
        <Route path="/singh" element={ <Industry /> } />
        <Route path="/vaishali" element={ <Education /> } />
        <Route path="/noida" element={ <Position /> } />
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/" element={<Navigate replace to="/" />} /> */}
        {/* <Redirect to="/" /> */}
       </Routes>
    </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
